<template>
    <div>
      <button @click="openSigninPopup" class="signin-button">Oturum Aç</button>
      <SigninPopup v-if="isPopupVisible" @close="closeSigninPopup" />
    </div>
  </template>
  
  <script>
  import SigninPopup from "./signinpopup.vue";
  
  export default {
    components: {
      SigninPopup,
    },
    data() {
      return {
        isPopupVisible: false, // Popup görünürlüğünü kontrol eden state
      };
    },
    methods: {
      openSigninPopup() {
        this.isPopupVisible = true; // Popup'ı açar
      },
      closeSigninPopup() {
        this.isPopupVisible = false; // Popup'ı kapatır
      },
    },
  };
  </script>
  
  <style scoped>
  .signin-button {
    background-color: #00a69c;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .signin-button:hover {
    background-color: #008f84;
  }
  </style>