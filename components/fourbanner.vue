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
  "https://www.watsons.com.tr/medias/sys_master/images/h93/h8a/11922727632926/650x450/650x450.png",
  "https://www.watsons.com.tr/medias/sys_master/images/h3a/h85/11922670419998/650x450/650x450.png",
  "https://www.watsons.com.tr/medias/sys_master/images/h34/hac/11922724814878/650x450/650x450.png",
  "https://www.watsons.com.tr/medias/sys_master/images/h0a/h5d/11922725077022/650x450/650x450.png",
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