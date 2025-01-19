<template>
  <div class="cart-container">
    <!-- Sepet İkonu -->
    <div
      class="cart-icon-container"
      @mouseenter="toggleCart(true)"
      @mouseleave="toggleCart(false)"
    >
      <NuxtLink to="/cart" class="cart-icon">
        <i class="fas fa-shopping-bag"></i>
        <span v-if="cartStore.cartItems.length > 0" class="cart-count">
          {{ cartStore.cartItems.length }}
        </span>
      </NuxtLink>

      <!-- Sepet Popup -->
      <div v-if="isCartOpen" class="cart-popup">
        <h4 class="cart-title">Alışveriş Sepetim</h4>
        <div v-if="cartStore.cartItems.length === 0" class="empty-cart">
          <p>Sepetinizde ürün bulunmamaktadır.</p>
        </div>
        <div v-else class="cart-content">
          <ul class="cart-items">
            <li
              v-for="item in sortedCartItems"
              :key="item.id"
              class="cart-item"
            >
              <img
                :src="item.image"
                alt="Ürün Görseli"
                class="cart-item-image"
              />
              <div class="cart-item-details">
                <p class="item-name">{{ item.name }}</p>
                <p class="item-quantity-price">
                  {{ item.quantity }} x {{ item.price.toFixed(2) }} ₺
                </p>
                <!-- Miktar Kontrolleri -->
                <div class="quantity-controls">
                  <button @click="decreaseQuantity(item)">-</button>
                  <span>{{ item.quantity }}</span>
                  <button @click="increaseQuantity(item)">+</button>
                </div>
              </div>
            </li>
          </ul>
          <div class="cart-total-section">
            <p class="cart-total">
              Toplam: {{ cartStore.cartTotal.toFixed(2) }} ₺
            </p>
            <NuxtLink to="/cart" class="view-cart-button">Sepete Git</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();
const isCartOpen = ref(false);

// Popup açma/kapama fonksiyonu
const toggleCart = (state) => {
  isCartOpen.value = state;
};

// Sepet ürünlerini sıralama
const sortedCartItems = computed(() =>
  cartStore.cartItems.slice().sort((a, b) => b.addedAt - a.addedAt)
);

// Miktar artırma/azaltma fonksiyonları
const increaseQuantity = (item) => {
  cartStore.addToCart(item); // Miktar artırılır
};

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    cartStore.decreaseQuantity(item.id); // Miktar azaltılır
  } else {
    cartStore.removeFromCart(item.id); // Miktar 1 ise ürün kaldırılır
  }
};
</script>

<style scoped>
.cart-container {
  position: relative;
}

/* Sepet İkonu */
.cart-icon-container {
  position: relative;
  display: inline-block;
}

.cart-icon {
  font-size: 24px;
  color: #00a69c;
  position: relative;
  cursor: pointer;
  text-decoration: none;
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

/* Sepet Popup */
.cart-popup {
  position: absolute;
  top: 40px;
  right: 0;
  width: 320px;
  max-height: 400px;
  background-color: white;
  border: 1px solid #eaeaea;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  z-index: 1000;
  overflow-y: auto; /* Kaydırma özelliği */
}

.cart-title {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

.cart-content {
  margin-top: 10px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.cart-item-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
}

.cart-item-details {
  flex: 1;
}

.item-name {
  font-size: 14px;
  font-weight: bold;
  color: #555;
}

.item-quantity-price {
  font-size: 12px;
  color: #888;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 4px;
}

.quantity-controls button {
  padding: 1px 3px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}

.quantity-controls button:hover {
  background: #f8f8f8;
}

.cart-total-section {
  padding-top: 10px;
  border-top: 1px solid #ddd;
  text-align: center;
}

.cart-total {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 14px;
  color: #333;
}

.view-cart-button {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 10px;
  background-color: #ff007f;
  color: white;
  text-align: center;
  font-size: 14px;
  border-radius: 4px;
  text-decoration: none;
  width: 100%;
}

.view-cart-button:hover {
  background-color: #cc0066;
}
</style>