<template>
    <div class="account-page">
      <!-- Ana içerik -->
      <div class="account-content">
        <div class="account-sidebar">
          <ul>
            <li>
              <i class="fas fa-shopping-bag"></i>
              <span>SİPARİŞLERİM</span>
            </li>
            <li>
              <i class="fas fa-user"></i>
              <span>ÜYELİK BİLGİLERİM</span>
            </li>
            <li>
              <i class="fas fa-star"></i>
              <span>WATSONS CLUB</span>
            </li>
            <li>
              <i class="fas fa-credit-card"></i>
              <span>ÖDEME YÖNTEMLERİM</span>
            </li>
            <li>
              <i class="fas fa-heart"></i>
              <span>FAVORİLERİM</span>
            </li>
            <li>
              <button @click="signOut" class="logout-button">
                <i class="fas fa-sign-out-alt"></i>
                <span>ÇIKIŞ YAP</span>
              </button>
            </li>
          </ul>
        </div>
  
        <div class="account-main">
          <h1>HOŞ GELDİN, {{ authStore.displayName }}</h1>
          <p>Watsons Dünyasına Hoş Geldin! Sana özel ayrıcalıkları keşfetmeye hazır mısın?</p>
  
          <!-- Banner -->
          <div class="banner">
            <img
              src="https://www.watsons.com.tr/medias/sys_master/images/h96/hd4/10279034159134/watsons-club-account/watsons-club-account.jpg"
              alt="Watsons Banner"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useAuthStore } from "~/stores/auth";
  import { useRouter } from "vue-router";
  
  const authStore = useAuthStore();
  const router = useRouter();
  
  // Çıkış yapma işlemi
  const signOut = async () => {
    await authStore.signOut();
    router.push("/");
  };
  </script>
  
  <style scoped>
  /* Genel Sayfa Stili */
  .account-page {
    display: flex;
    justify-content: center;
    padding: 20px;
  }
  
  /* İçerik Düzeni */
  .account-content {
    display: flex;
    width: 100%;
    max-width: 1200px;
  }
  
  /* Sidebar */
  .account-sidebar {
    flex: 1;
  }
  
  .account-sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .account-sidebar li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border: 1px solid #eaeaea;
    margin-bottom: 10px;
    background-color: #fff;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .account-sidebar li:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  
  .account-sidebar li i {
    font-size: 20px;
    margin-right: 10px;
    color: #00a69c;
  }
  
  .account-sidebar li span {
    flex: 1;
    text-align: left;
  }
  
  .logout-button {
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: #333;
    text-align: left;
    width: 100%;
    padding: 0;
  }
  
  .logout-button:hover {
    cursor: pointer;
    color: #00a69c;
  }
  
  .logout-button i {
    color: #00a69c;
  }
  
  /* Ana Bölüm */
  .account-main {
    flex: 3;
    padding: 20px;
  }
  
  .account-main h1 {
    font-size: 24px;
    color: #00a69c;
    margin-bottom: 10px;
  }
  
  .account-main p {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }
  
  /* Banner Stili */
  .banner img {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
  </style>
  