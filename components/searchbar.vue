<template>
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Arama Yap"
        class="search-input"
      />
      <button class="search-icon">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const searchQuery = ref(""); // Arama çubuğu verisi
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    align-items: center;
    width: 100%; /* Tüm header genişliğini kapsar */
    max-width: 1200px; /* Çubuğun maksimum genişliği */
    margin: 0 auto; /* Ortalamak için */
    border: 1px solid #ccc;
    border-radius: 8px; /* Daha yuvarlak köşeler */
    background-color: #fff; /* Beyaz arka plan */
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Hafif gölge */
  }
  
  .search-input {
    flex: 1;
    padding: 10px 15px;
    border: none;
    outline: none;
    font-size: 16px; /* Daha büyük yazı boyutu */
    color: #333;
    border-radius: 8px 0 0 8px; /* Sol taraf yuvarlatma */
  }
  
  .search-input::placeholder {
    color: #aaa; /* Placeholder rengi */
  }
  
  .search-icon {
    padding: 15px 15px;
    background-color: #ffffff; /* Mavi arka plan */
    color: #d5d5d5; /* Beyaz ikon */
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 8px 8px 0; /* Sağ taraf yuvarlatma */
  }
  
  .search-icon:hover {
    background-color: #acacac; /* Hover rengini koyulaştır */
  }
  
  .search-icon i {
    font-size: 18px; /* Daha büyük ikon */
  }
  </style>