<template>
    <header class="header">
      <div class="header-content">
        <!-- Watsons Logosu -->
        <div class="logo">
          <NuxtLink to="/">
            <img
              src="https://www.watsons.com.tr/medias/sys_master/images/h85/h39/8920546869278/logo-watsons/logo-watsons.png"
              alt="Watsons Logo"
            />
          </NuxtLink>
        </div>
  
        <!-- SearchBar -->
        <div class="searchbar">
          <SearchBar />
        </div>
  
        <!-- Kullanıcı Hesap ve Sepet -->
        <div class="header-right">
          <!-- Kullanıcı Hesap -->
          <UserAccount />
  
          <!-- Sepet Componenti -->
          <Cart />
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import UserAccount from "~/components/useraccount.vue";
  import SearchBar from "~/components/searchbar.vue";
  import Cart from "~/components/cart.vue";
  </script>
  
  
  <style scoped>
  /* Header Temel Stilleri */
  .header {
    background-color: #ffffff;
    border-bottom: 1px solid #eaeaea;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Header İçeriği */
  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between; /* İçerikleri sola ve sağa dağıt */
    width: 100%;
    max-width: 2000px; /* Header genişliği */
  }
  
  /* Logo */
  .logo {
    flex-shrink: 0; /* Logo boyutunu küçültme */
    margin-right: auto; /* Logoyu sola yasla */
  }
  
  .logo img {
    height: 40px;
  }
  
  /* SearchBar */
  .searchbar {
    flex-grow: 1;
    margin: 0 40px; /* Sağ ve sol alanla daha fazla boşluk ekle */
    display: flex;
    justify-content: center;
  }
  
  .searchbar input {
    width: 100%;
    max-width: 600px;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 8px 16px;
    font-size: 16px;
    outline: none;
  }
  
  /* Kullanıcı Hesap ve Sepet Alanı */
  .header-right {
    display: flex;
    align-items: center;
    gap: 50px; /* Hesap ve Sepet Arası Boşluk */
    margin-left: 60px; /* SearchBar ile hesap/sepet kısmı arasında boşluk */
  }
  
  /* Sepet */
  .cart-icon-container {
    position: relative;
    font-size: 24px;
    color: #00a69c;
    cursor: pointer;
  }
  
  .cart-count {
    position: absolute;
    top: -5px;
    right: -10px;
    background-color: #ff0000;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 2px 5px;
    border-radius: 50%;
  }
  </style>