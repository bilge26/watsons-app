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
    "https://www.watsons.com.tr/medias/sys_master/images/hd4/hfe/11718977060894/PastelBoots_Cover_,Ten_2-/PastelBoots-Cover-Ten-2-.png",
    "https://www.watsons.com.tr/medias/sys_master/images/hd6/hfb/11718977126430/PastelBoots_Cover_Dudak_2-/PastelBoots-Cover-Dudak-2-.png",
    "https://www.watsons.com.tr/medias/sys_master/images/h24/h71/11721953247262/pastel-maskaralar12/pastel-maskaralar12.png",
    "https://www.watsons.com.tr/medias/sys_master/images/h84/h63/11721953640478/pastel-ojeler-12/pastel-ojeler-12.png",
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