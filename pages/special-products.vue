<template>
  <div class="page-container">
    <!-- Bildirim Mesajı -->
    <div v-if="notification" class="notification">
      {{ notification }}
    </div>

     <!-- Sol filtreleme bölümü -->
    <div class="sidebar">
      <button class="reset-button" @click="resetFilters">Filtreleri Sıfırla</button>

      <div class="filter-section">
        <h4 class="filter-subtitle">Stok Durumu</h4>
        <ul>
          <li>
            <label>
              <input type="checkbox" v-model="filters.inStock" />
              Stokta Olanlar
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" v-model="filters.discounted" />
              İndirimli Ürünler
            </label>
          </li>
        </ul>
      </div>

      <div class="filter-section">
        <h4 class="filter-subtitle">Marka</h4>
        <ul>
          <li v-for="brand in brands" :key="brand">
            <label>
              <input type="checkbox" disabled />
              {{ brand }}
            </label>
          </li>
        </ul>
      </div>

      <div class="filter-section">
        <h4 class="filter-subtitle">Kategori</h4>
        <ul>
          <li v-for="category in categories" :key="category">
            <label>
              <input type="checkbox" disabled />
              {{ category }}
            </label>
          </li>
        </ul>
      </div>
    </div>

    <!-- Ürün listesi -->
    <div class="product-grid">
      <div
        class="product-card"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <img :src="product.image" alt="Ürün Görseli" class="product-image" />
        <p class="product-name">{{ product.name }}</p>
        <p class="product-price">{{ product.price.toFixed(2) }} ₺</p>
        <p class="product-club-price">
          Watsons Club ile {{ product.clubPrice.toFixed(2) }} ₺
        </p>
        <button class="add-to-cart-button" @click="addToCart(product)">Sepete Ekle</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { useNuxtApp } from "#app";
import { useCartStore } from "~/stores/cart";

import { useNotificationStore } from "~/stores/notification";

const notificationStore = useNotificationStore();

const addToCart = (product: any) => {
  cartStore.addToCart(product);
  notificationStore.showNotification("Ürün başarıyla sepete eklendi!");
};


const { $firestore } = useNuxtApp();
const cartStore = useCartStore();
const products = ref<Array<any>>([]);
const filters = ref({
  inStock: false,
  discounted: false,
});

const notification = ref<string | null>(null); // Bildirim mesajı için state
const brands = ["9WISHES", "ANGIE", "AQUA DI POLO", "ARİFOĞLU EXC."];
const categories = ["Yüz Makyajı", "Göz Makyajı", "Cilt Bakım"];

const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection($firestore, "products"));
    products.value = querySnapshot.docs.map((doc) => {
      const data = doc.data();

      // Eksik alanlar için varsayılan değerler atıyoruz
      return {
        id: doc.id,
        name: data.name || "Bilinmeyen Ürün", // Varsayılan ürün ismi
        price: typeof data.price === "number" ? data.price : 0, // Varsayılan fiyat
        clubPrice: typeof data.clubPrice === "number" ? data.clubPrice : 0, // Varsayılan club fiyatı
        image: data.image || "", // Varsayılan görsel
        inStock: typeof data.inStock === "boolean" ? data.inStock : true, // Varsayılan stok durumu
        isDiscounted: typeof data.isDiscounted === "boolean" ? data.isDiscounted : false, // Varsayılan indirim bilgisi
      };
    });

    console.log("Products fetched successfully:", products.value);
  } catch (error) {
    console.error("Veri çekme hatası:", error);
  }
};





const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    if (filters.value.inStock && !product.inStock) return false;
    if (filters.value.discounted && !product.isDiscounted) return false;
    return true;
  });
});

const resetFilters = () => {
  filters.value.inStock = false;
  filters.value.discounted = false;
};

const showNotification = (message: string) => {
  notification.value = message;
  setTimeout(() => {
    notification.value = null;
  }, 2000); // 2 saniye sonra kaybolur
};

onMounted(() => {
  fetchProducts();
});
</script>

<style scoped>
.page-container {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.sidebar {
  flex: 1;
  max-width: 300px;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  height: fit-content;
}

.filter-title {
  font-size: 1.2rem;
  color: #007bff;
  margin-bottom: 15px;
}

.reset-button {
  background: #00a69c;
  color: white;
  border: none;
  padding: 8px 15px;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 15px;
  width: 100%;
  transition: background 0.3s ease;
}

.reset-button:hover {
  background: #008f85;
}

.filter-section {
  margin-bottom: 15px;
}

.filter-subtitle {
  font-size: 1rem;
  color: #00a69c;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
  margin-bottom: 10px;
}

.product-grid {
  flex: 3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.product-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-size: 0.9rem;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: auto;
  max-height: 150px;
  margin-bottom: 10px;
}

.product-name {
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 5px;
  font-weight: bold;
}

.product-price {
  font-size: 0.8rem;
  color: #999;
  text-decoration: line-through;
  margin-bottom: 5px;
}

.product-club-price {
  font-size: 0.9rem;
  color: #00a69c;
  font-weight: bold;
  margin-bottom: 10px;
}

.add-to-cart-button {
  background: #00a69c;
  color: white;
  border: none;
  padding: 8px 15px;
  font-size: 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.add-to-cart-button:hover {
  background: #008f85;
}

.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #00a69c;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
}
</style>