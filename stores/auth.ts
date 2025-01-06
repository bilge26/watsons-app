import { defineStore } from "pinia";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import type { User } from "firebase/auth"; // TypeScript için doğru tür tanımlaması

// Auth durumu için bir arayüz tanımlıyoruz
interface AuthState {
  user: User | null; // Kullanıcı objesi veya null
}

// Pinia store tanımı
export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    user: null, // Başlangıçta kullanıcı yok
  }),
  actions: {
    // Kullanıcı kaydı
    async signUp(email: string, password: string): Promise<void> {
      const auth = getAuth(); // Firebase auth referansı
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCredential.user; // Kullanıcıyı state'e kaydet
        console.log("Kullanıcı başarıyla oluşturuldu:", this.user);
      } catch (error: any) {
        console.error("Kayıt hatası:", error.message);
        throw error; // Hata fırlat
      }
    },
    // Kullanıcı giriş işlemi
    async signIn(email: string, password: string): Promise<void> {
      const auth = getAuth(); // Firebase auth referansı
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCredential.user; // Kullanıcıyı state'e kaydet
        console.log("Giriş başarılı:", this.user);
      } catch (error: any) {
        console.error("Giriş hatası:", error.message);
        throw error; // Hata fırlat
      }
    },
  },
});
