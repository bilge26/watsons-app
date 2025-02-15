<template>
  <div class="user-account-container">
    <!-- Kullanıcı Hesap İkonu -->
    <div class="user-account" @click="toggleDropdown">
      <i class="fas fa-user-circle"></i>
      <span v-if="authStore.isAuthenticated">Merhaba, {{ authStore.displayName || "Kullanıcı" }}</span>
      <span v-else>Merhaba, Hesabım</span>
      <i class="fas fa-chevron-down"></i>
    </div>

    <!-- Dropdown Menü -->
    <div v-if="showDropdown" class="user-dropdown" @click.stop>
      <button v-if="!authStore.isAuthenticated" @click="openSignIn" class="dropdown-button primary">
        Oturum Aç
      </button>
      <button v-if="authStore.isAuthenticated" @click="signOut" class="dropdown-button primary">
        Çıkış Yap
      </button>
      <button class="dropdown-button" @click="goToAccountPage">Hesabım</button>
      <button class="dropdown-button">Siparişlerim</button>
      <hr />
      <button v-if="!authStore.isAuthenticated" @click="openSignUp" class="dropdown-button secondary">
        Kayıt
      </button>
    </div>

    <!-- PopUp Components -->
    <SignInPopup v-if="showSignInModal" @close="closeSignInModal" />
    <SignUpPopup v-if="showSignUpModal" @close="closeSignUpModal" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "~/stores/auth"; // Auth Store
import SignInPopup from "~/components/signinpopup.vue";
import SignUpPopup from "~/components/SignUpPopup.vue";
import { useRouter } from "vue-router"; // Router

// Auth Store'u bağlayarak kullanıcı bilgisine ulaş
const authStore = useAuthStore(); // Pinia'dan auth store'a erişim
const router = useRouter(); // Router instance

// Dropdown ve Modal görünürlük kontrolü
const showDropdown = ref(false);
const showSignInModal = ref(false);
const showSignUpModal = ref(false);

// Dropdown aç/kapat
const toggleDropdown = (event) => {
  event.stopPropagation();
  showDropdown.value = !showDropdown.value;
};

// "Oturum Aç" popup'ını aç
const openSignIn = () => {
  showDropdown.value = false; // Dropdown'ı kapat
  showSignInModal.value = true; // Oturum Aç popup'ı aç
  showSignUpModal.value = false; // Kayıt popup'ı kapat
};

// "Kayıt" popup'ını aç
const openSignUp = () => {
  showDropdown.value = false; // Dropdown'ı kapat
  showSignUpModal.value = true; // Kayıt popup'ı aç
  showSignInModal.value = false; // Oturum Aç popup'ı kapat
};

// Popup'ları kapat
const closeSignInModal = () => {
  showSignInModal.value = false;
};

const closeSignUpModal = () => {
  showSignUpModal.value = false;
};

// Oturumu kapatma işlemi
const signOut = async () => {
  await authStore.signOut();
};

// Sayfanın başka bir yerine tıklanıldığında dropdown'ı kapat
const closeDropdownOnOutsideClick = () => {
  showDropdown.value = false;
};

if (process.client) {
  window.addEventListener("click", closeDropdownOnOutsideClick);
}

// Hesabım sayfasına yönlendirme veya SignIn açma
const goToAccountPage = () => {
  if (authStore.isAuthenticated) {
    router.push("/account"); // Oturum açılmışsa Hesap sayfasına yönlendir
  } else {
    openSignIn(); // Oturum açılmamışsa SignIn popup'ı aç
  }
};
</script>


<style scoped>
/* Kullanıcı Hesap Kapsayıcı */
.user-account-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

/* Kullanıcı Hesap */
.user-account {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #00a69c;
}

.user-account i {
  font-size: 20px;
}

.user-account span {
  font-size: 14px;
  font-weight: bold;
}

.user-account .fa-chevron-down {
  font-size: 12px;
  color: #00a69c;
}

/* Dropdown Menü */
.user-dropdown {
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 200px;
  z-index: 1000;
  padding: 10px;
}

/* Dropdown Butonlar */
.dropdown-button {
  width: 100%;
  padding: 10px 15px;
  text-align: center;
  border: none;
  background-color: transparent;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}

.dropdown-button:hover {
  background-color: #f5f5f5;
}

/* Birincil Buton */
.dropdown-button.primary {
  background-color: #00a69c;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
}

.dropdown-button.primary:hover {
  background-color: #008f84;
}

/* İkincil Buton */
.dropdown-button.secondary {
  background-color: #d9e872;
  color: #333;
  font-weight: bold;
}

.dropdown-button.secondary:hover {
  background-color: #c8da66;
}

/* Ayrım Çizgisi */
hr {
  border: none;
  border-top: 1px solid #a1a1a1;
  margin: 10px 0;
}
</style>