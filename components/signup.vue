<template>
    <div>
      <button @click="openSignupPopup" class="signup-button">Kayıt Ol</button>
      <SignupPopup v-if="isPopupVisible" @close="closeSignupPopup" />
    </div>
  </template>
  
  <script>
  import SignupPopup from "./SignUpPopup.vue";
  
  export default {
    components: {
      SignupPopup,
    },
    data() {
      return {
        isPopupVisible: false, // Popup görünürlüğünü kontrol eden state
      };
    },
    methods: {
      openSignupPopup() {
        this.isPopupVisible = true; // Popup'ı açar
      },
      closeSignupPopup() {
        this.isPopupVisible = false; // Popup'ı kapatır
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-button {
    background-color: #00a69c;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .signup-button:hover {
    background-color: #008f84;
  }
  </style>