import { defineStore } from "pinia";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import type { User } from "firebase/auth";

interface AuthState {
  user: User | null; // Firebase kullanıcı objesi
  displayName: string | null; // Kullanıcı adı
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    user: null,
    displayName: null,
  }),
  getters: {
    isAuthenticated: (state): boolean => !!state.user, // Kullanıcının oturum açıp açmadığını kontrol eder
  },
  actions: {
    async signUp(email: string, password: string, displayName: string) {
      const auth = getAuth();
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCredential.user;

        // Kullanıcı profiline isim ekle
        await updateProfile(userCredential.user, { displayName });
        this.displayName = displayName;

        console.log("Kayıt başarılı:", this.user);
      } catch (error: any) {
        console.error("Kayıt hatası:", error.message);
        throw error;
      }
    },

    async signIn(email: string, password: string) {
      const auth = getAuth();
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCredential.user;
        this.displayName = userCredential.user.displayName || "Kullanıcı";
        console.log("Giriş başarılı:", this.user);
      } catch (error: any) {
        console.error("Giriş hatası:", error.message);
        throw error;
      }
    },

    async signOut() {
      const auth = getAuth();
      try {
        await signOut(auth);
        this.user = null;
        this.displayName = null;
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