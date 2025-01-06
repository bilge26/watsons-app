<template>
  <div class="modal-overlay" @click.self="closePopup">
    <div class="modal-content">
      <button class="close-button" @click="closePopup">×</button>
      <h2>OTURUM AÇ</h2>
      <p class="subtitle">
        Site ya da uygulamada zaten kayıtlı mısınız? <br />
        <strong>Kişisel hesabınızda oturum açın</strong>
      </p>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">E-posta *</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="E-posta adresinizi girin"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Şifre *</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            placeholder="Şifrenizi girin"
            required
          />
        </div>
        <div class="form-footer">
          <label>
            <input type="checkbox" />
            Beni hatırla
          </label>
          <a href="#" class="forgot-password">Şifrenizi mi unuttunuz?</a>
        </div>
        <button type="submit" class="submit-button">OTURUM AÇ</button>
      </form>

      <!-- Başarı veya Hata Mesajı -->
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "~/stores/auth"; // Pinia'dan auth store'u çağırıyoruz

const authStore = useAuthStore(); // Pinia store'u çağırıyoruz

// Form verileri
const form = ref({
  email: "",
  password: "",
});

// Popup'ı kapatma fonksiyonu
const closePopup = () => {
  emit("close");
};

// Mesajlar için state
const successMessage = ref("");
const errorMessage = ref("");

// Form gönderim fonksiyonu
const submitForm = async () => {
  successMessage.value = ""; // Eski mesajları temizle
  errorMessage.value = "";

  try {
    // Kullanıcı giriş yapıyor
    await authStore.signIn(form.value.email, form.value.password);
    successMessage.value = "Giriş başarılı!";
    console.log("Giriş başarılı:", form.value);

    // Formu temizle
    form.value = {
      email: "",
      password: "",
    };

    // Popup'ı kapatma (isteğe bağlı)
    closePopup();
  } catch (error) {
    errorMessage.value = "Giriş sırasında bir hata oluştu: " + error.message;
    console.error("Giriş hatası:", error);
  }
};
</script>

<style scoped>
/* CSS ayarları */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

h2 {
  color: #00a69c;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  width: 100%;
  margin-bottom: 15px;
  text-align: left;
}

label {
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.form-footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  font-size: 12px;
  color: #666;
}

.forgot-password {
  color: #00a69c;
  text-decoration: none;
}

.submit-button {
  background-color: #00a69c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #008f84;
}

.success-message {
  color: #28a745;
  margin-top: 15px;
}

.error-message {
  color: #dc3545;
  margin-top: 15px;
}
</style>
