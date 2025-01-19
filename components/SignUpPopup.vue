<template>
  <div class="modal-overlay" @click.self="closePopup">
    <div class="modal-content">
      <!-- Çarpı Butonu -->
      <button class="close-button" @click="closePopup">×</button>
      <h2>KAYIT OL</h2>
      <p class="subtitle">
        Sadece 3 dakika içerisinde hesabınızı oluşturun!
      </p>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="firstName">İsim *</label>
          <input
            id="firstName"
            v-model="form.firstName"
            type="text"
            placeholder="Adınızı girin"
            required
          />
        </div>
        <div class="form-group">
          <label for="lastName">Soyisim *</label>
          <input
            id="lastName"
            v-model="form.lastName"
            type="text"
            placeholder="Soyadınızı girin"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">E-posta adresi *</label>
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
            placeholder="Şifrenizi oluşturun"
            required
          />
        </div>
        <div class="form-footer">
          <label>
            <input type="checkbox" />
            Tarafıma pazarlama amaçlı ticari ileti gönderilmesini kabul ediyorum.
          </label>
          <label>
            <input type="checkbox" />
            Bilgilerimin kişiselleştirilmiş pazarlama faaliyetleri kapsamında kullanılmasını kabul ediyorum.
          </label>
        </div>
        <button type="submit" class="submit-button">DEVAM ET</button>
      </form>

      <!-- Başarı veya Hata Mesajı -->
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { useAuthStore } from "~/stores/auth"; // Pinia'dan auth store'u çağırıyoruz

const authStore = useAuthStore();
const emit = defineEmits(["close"]); // Parent'a close olayını yaymak

// Form verileri
const form = ref({
  firstName: "",
  lastName: "",
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
    // Kullanıcıyı kayıt ediyoruz (oturum açtırmadan)
    await authStore.signUp(form.value.email, form.value.password, "");
    successMessage.value = "Kullanıcı başarıyla oluşturuldu! Oturum açmak için giriş yapınız.";
    console.log("Kayıt başarılı:", form.value);

    // Formu temizliyoruz
    form.value = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  } catch (error) {
    errorMessage.value = "Kayıt sırasında bir hata oluştu: " + error.message;
    console.error("Kayıt hatası:", error);
  }
};
</script>

<style scoped>
/* CSS bozulmadı ve aynı */
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
  max-width: 500px;
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
  font-size: 12px;
  color: #666;
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