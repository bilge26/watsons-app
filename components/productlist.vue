<template>
    <div class="product-carousel">
      <h2>🎁 Yeni Yıl Güzelliği Watsons'ta! 🎁</h2>
      <div class="carousel-container">
        <button class="carousel-button prev" @click="prevSlide">‹</button>
        <div class="carousel-track">
          <div
            v-for="(product, index) in visibleProducts"
            :key="index"
            class="product-card"
          >
            <img :src="product.image" :alt="product.name" class="product-image" />
            <h3>{{ product.name }}</h3>
            <p class="price">{{ product.price }} ₺</p>
            <p class="club-price">
              Watsons Club ile <span>{{ product.clubPrice }} ₺</span>
            </p>
            <!-- Sepete Ekle Butonu -->
            <button class="add-to-cart" @click="addToCart(product)">Sepete Ekle</button>
          </div>
        </div>
        <button class="carousel-button next" @click="nextSlide">›</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  
  const products = ref([
    {
      id: 1,
      name: "Miine Glaze & Glam Fondöten Seti",
      image: "https://www.watsons.com.tr/medias/sys_master/prd-images/h50/h2b/11512070471710/prd-front-1401743_365x385/prd-front-1401743-365x385.jpg",
      price: 299.9,
      clubPrice: 199.9,
    },
    {
      id: 2,
      name: "Watsons Hediye Paketi",
      image: "https://www.watsons.com.tr/medias/sys_master/prd-images/h4e/hea/11694134427678/prd-front-1420496_365x385/prd-front-1420496-365x385.jpg",
      price: 15.0,
      clubPrice: 12.5,
    },
    {
      id: 3,
      name: "Miine Glaze & Glam Güzellik Seti",
      image: "https://www.watsons.com.tr/medias/sys_master/prd-images/hb8/h89/11513288654878/prd-front-1401764_365x385/prd-front-1401764-365x385.jpg",
      price: 399.9,
      clubPrice: 299.9,
    },
    {
      id: 4,
      name: "Miine Rabbit Göz Bandı",
      image: "https://www.watsons.com.tr/medias/sys_master/prd-images/h51/heb/11674059145246/prd-front-1405040_365x385/prd-front-1405040-365x385.jpg",
      price: 199.9,
      clubPrice: 129.9,
    },
    {
      id: 5,
      name: "Miine Rabbit Güzellik Seti",
      image: "https://www.watsons.com.tr/medias/sys_master/prd-images/hc7/h57/11513309954078/prd-front-1405075_365x385/prd-front-1405075-365x385.jpg",
      price: 399.9,
      clubPrice: 299.9,
    },
    {
      id: 6,
      name: "Miine Yılbaşı Saç Tokası Geyik",
      image: "https://www.watsons.com.tr/medias/sys_master/prd-images/h34/h70/11682806497310/prd-front-1401330_365x385/prd-front-1401330-365x385.jpg",
      price: 199.9,
      clubPrice: 99.95,
    },
    {
      id: 7,
      name: "Miine Seyahat Şişesi Hipo",
      image: "https://www.watsons.com.tr/medias/sys_master/prd-images/h77/h67/11513291276318/prd-front-1401309_365x385/prd-front-1401309-365x385.jpg",
      price: 149.9,
      clubPrice: 99.9,
    },
    {
      id: 8,
      name: "Miine Seyahat Şişesi Pink Rabbit",
      image: "https://www.watsons.com.tr/medias/sys_master/prd-images/h07/hc9/11513293111326/prd-front-1401316_365x385/prd-front-1401316-365x385.jpg",
      price: 119.9,
      clubPrice: 89.9,
    },
  ]);
  
  const itemsPerPage = 5; // Görünür ürün sayısı
  const currentIndex = ref(0);
  
  // Hesaplanan görünür ürünler
  const visibleProducts = computed(() => {
    const startIndex = currentIndex.value;
    const endIndex = (startIndex + itemsPerPage) % products.value.length;
    if (startIndex < endIndex) {
      return products.value.slice(startIndex, endIndex);
    } else {
      return [
        ...products.value.slice(startIndex),
        ...products.value.slice(0, endIndex),
      ];
    }
  });
  
  const prevSlide = () => {
    currentIndex.value =
      currentIndex.value === 0
        ? products.value.length - itemsPerPage
        : currentIndex.value - itemsPerPage;
  };
  
  const nextSlide = () => {
    currentIndex.value =
      (currentIndex.value + itemsPerPage) % products.value.length;
  };
  
  const addToCart = (product) => {
    console.log('${product.name} sepete eklendi!');
  };
  </script>
  
  <style scoped>
  .product-carousel {
    padding: 20px;
    text-align: center;
  }
  
  .carousel-container {
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .carousel-track {
  display: flex;
  justify-content: space-between;
  overflow: hidden; /* Taşmaları gizle */
  width: 100%;
}

.product-card {
  flex: 1 0 calc(20% - 10px); /* Ürün genişliği */
  margin: 0 5px;
  border: 1px solid #eaeaea;
  /*border-radius: 8px;*/
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Kartların içindeki öğeleri hizala */
  height: 350px;
  box-sizing: border-box; /* İçerik taşmalarını kontrol et */
}

.product-image {
  width: 100%; /* Genişliği tamamen kapsa */
  height: auto; /* Oran koruyarak boyutlandır */
  max-height: 150px; /* Maksimum yükseklik belirle */
 /* border-radius: 8px;*/
  margin-bottom: 10px;
}

.carousel-container {
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden; /* Taşmaları engelle */
  max-width: 1500px;
  margin: 0 auto;
}

h3 {
  font-size: 14px;
  margin: 5px 0;
  min-height: 40px; /* Başlıkların hizalı olması için */
}

.add-to-cart {
  background-color: #00a69c;
  color: white;
  border: none;
  padding: 10px;
  margin-top: auto;
  font-size: 14px;
  /*border-radius: 4px;*/
  cursor: pointer;
}

  
  .add-to-cart:hover {
    background-color: #008f84;
  }
  
  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgb(255, 255, 255);
    color: rgb(55, 55, 55);
    border: none;
    border-radius: 50%;
  }
  .carousel-button.prev {
    left: 20px;
  }
  
  .carousel-button.next {
    right: 20px;
  }
  </style>