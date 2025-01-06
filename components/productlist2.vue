<template>
    <div class="product-carousel">
      <h2>Avantajlı Setleri Keşfet!</h2>
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
      name: "Watsons Aseton + Organik Pamuk Set",
      image: "https://www.watsons.com.tr/medias/sys_master/prd-images/hfb/hc4/9713658101790/prd-front-1378713_365x385/prd-front-1378713-365x385.jpg",
      price: 67.95,
    },
    {
      id: 2,
      name: "Ashley Joy Güçlendirici Şampuan + Bakım Yağı Seti",
      image: "https://www.watsons.com.tr/medias/sys_master/prd-images/h26/h8e/10456662081566/prd-front-1351434_365x385/prd-front-1351434-365x385.jpg",
      price: 1119.9,
      clubPrice: 559.9,
    },
    {
      id: 3,
      name: "Sensodyne Diş Macunu Tam Koruma + Beyazlatıcı",
      image: "https://www.watsons.com.tr/medias/sys_master/prd-images/h5b/hfe/9064206073886/prd-front-1333108_365x385/prd-front-1333108-365x385.png",
      price: 319.9,
      clubPrice: 99.95,
    },
    {
      id: 4,
      name: "Revolution All About The Pout Dudak Seti",
      image: "https://www.watsons.com.tr/medias/sys_master/prd-images/he5/h5c/11492413014046/prd-front-1418333_365x385/prd-front-1418333-365x385.jpg",
      price: 1399.9,
      clubPrice: 699.9,
    },
    {
      id: 5,
      name: "L'Oreal Paris Bright Reveal Yüz Güneş Kremi + Koyu Leke Karşıtı Serum + Roler Set",
      image: "https://www.watsons.com.tr/medias/sys_master/prd-images/hb3/hfc/11375408480286/prd-front-1404389_365x385/prd-front-1404389-365x385.jpg",
      price: 1319.9,
    },
    {
      id: 6,
      name: "Show By Pastel Mix&Match Set Joy Likit Allık 52 & Highlighter 72",
      image: "https://www.watsons.com.tr/medias/sys_master/prd-images/h77/hca/11414854369310/prd-front-1419040_365x385/prd-front-1419040-365x385.jpg",
      price: 399.9,
      clubPrice: 159.9,
    },
    {
      id: 7,
      name: "Ashley Joy Hacim Veren Şampuan + Saç Kremi Seti",
      image: "https://www.watsons.com.tr/medias/sys_master/prd-images/h98/h16/10456663490590/prd-front-1351441_365x385/prd-front-1351441-365x385.jpg",
      price: 719.9,
      clubPrice: 359.9,
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

.product-image {
  width: 100%; /* Genişliği tamamen kapsa */
  height: 150px; /* Sabit bir yükseklik belirle */
  object-fit: contain; /* Görseli alan içine sığdır */
 /* border-radius: 4px; /* Köşeleri yuvarlat */
  margin-bottom: 10px;
}

.product-card {
  flex: 1 0 calc(20% - 10px); /* Ürün genişliği */
  margin: 0 5px;
  border: 1px solid #eaeaea;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Kartların içindeki öğeleri hizala */
  height: 350px; /* Kartların sabit yüksekliği */
  box-sizing: border-box; /* İçerik taşmalarını kontrol et */
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
    left: 10px;
  }
  
  .carousel-button.next {
    right: 10px;
  }
  </style>