// auth.ts
import { defineStore } from "pinia";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import type { User } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useCartStore } from "./cart"; // Cart store'u içe aktar

interface AuthState {
  user: User | null; // Firebase kullanıcı objesi
  displayName: string | null; // Kullanıcı adı
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    user: null,
    displayName: null, // Kullanıcı adını saklayacak alan
  }),
  getters: {
    isAuthenticated: (state): boolean => !!state.user, // Kullanıcının oturum açıp açmadığını kontrol eder
  },
  actions: {
    async signUp(email: string, password: string) {
      const auth = getAuth();

      try {
        // Yeni kullanıcı oluştur
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        // Kullanıcı kaydedildi, ancak oturum açılmadı
        console.log("Kayıt başarılı:", userCredential.user);

        // Otomatik oturumu kapat
        await signOut(auth);
        this.user = null; // State'den kullanıcıyı kaldır
      } catch (error: any) {
        console.error("Kayıt hatası:", error.message);
        throw error;
      }
    },

    async signIn(email: string, password: string) {
      const auth = getAuth(); // Firebase Authentication instance
      const firestore = getFirestore(); // Firestore instance

      try {
        // Kullanıcıyı giriş yap
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;

        console.log("Kullanıcı UID:", this.user?.uid);

        // Firestore'dan displayName çek
        const userRef = doc(firestore, "users", this.user.uid); // Firestore kullanıcı referansı
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          this.displayName = userDoc.data()?.displayName || "Kullanıcı";
          console.log("Firestore'dan alınan kullanıcı adı:", this.displayName);
        } else {
          this.displayName = "Kullanıcı"; // Varsayılan isim
          console.log("Firestore'da kullanıcı bulunamadı.");
        }
      } catch (error: any) {
        console.error("Giriş hatası:", error.message);
        throw error;
      }
    },

    async signOut() {
      const auth = getAuth();
      const cartStore = useCartStore(); // Cart store'u çağır

      try {
        await signOut(auth);
        this.user = null; // Kullanıcı bilgisini sıfırla
        this.displayName = null; // DisplayName'i sıfırla

        cartStore.clearCart(); // Kullanıcı oturumu kapattığında sepeti temizle

        console.log("Çıkış başarılı");
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Çıkış hatası:", error.message);
        } else {
          console.error("Bilinmeyen bir çıkış hatası:", error);
        }
      }
    },
  },
});
