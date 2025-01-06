<template>
    <div class="banner-container">
      <div v-for="(banner, index) in banners" :key="index" class="banner-item">
        <img :src="banner.image" :alt="'Banner ' + (index + 1)" class="banner-image" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Görsellerin kaynaklarını tanımlıyoruz
  const banners = ref([
    "https://www.watsons.com.tr/medias/sys_master/images/hd3/h96/11718976012318/GobeBoost_PureBeauty_2-/GobeBoost-PureBeauty-2-.png",
    "https://www.watsons.com.tr/medias/sys_master/images/h4f/ha1/11718976339998/GobeBoost_Deborah_2-/GobeBoost-Deborah-2-.png",
    "https://www.watsons.com.tr/medias/sys_master/images/h48/h42/11718975684638/GobeBoost_KBeauty_2-/GobeBoost-KBeauty-2-.png",
  ].map((image) => ({ image }))); // Sadece görseller için liste oluşturuyoruz
  </script>
  
  <style scoped>
  .banner-container {
    display: flex;
    justify-content: space-between;
    gap: 20px; /* Görseller arasında boşluk */
    margin: 20px auto;
    max-width: 1475px; /* Maksimum genişlik */
  }
  
  .banner-item {
    flex: 1; /* Görselleri eşit genişlikte tutar */
    text-align: center;
  }
  
  .banner-image {
    width: 100%; /* Görsellerin tam genişlikte olması */
    height: auto; /* Yüksekliği otomatik ayarla */
   /* border-radius: 8px; /* Köşeleri yuvarlat */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Hafif gölge */
  }
  </style>