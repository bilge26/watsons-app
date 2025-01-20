// sepet sayfası
<script setup lang="ts">
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <div class="cart-page">
    <h1>Sepetiniz</h1>
    <div v-if="cartStore.cartItems.length === 0" class="empty-cart">
      <p>Sepetinizde ürün bulunmamaktadır.</p>
    </div>
    <div v-else class="cart-content">
      <div class="cart-items">
        <div v-for="item in cartStore.cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" alt="Ürün Görseli" class="cart-item-image" />
          <div class="cart-item-details">
            <p class="cart-item-name">{{ item.name }}</p>
            <p class="cart-item-quantity">
              {{ item.quantity }} x {{ item.price.toFixed(2) }} ₺
            </p>
          </div>
          <button class="remove-button" @click="cartStore.removeFromCart(item.id)">
            Kaldır
          </button>
        </div>
      </div>
      <div class="cart-summary">
        <h3>Özet</h3>
        <p>Toplam: {{ cartStore.cartTotal.toFixed(2) }} ₺</p>
        <button class="checkout-button">Alışverişi Tamamla</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-page {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.empty-cart {
  text-align: center;
  font-size: 1.2rem;
  color: #555;
}

.cart-content {
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
}

.cart-items {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cart-item {
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  gap: 15px;
}

.cart-item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.cart-item-details {
  flex: 1;
}

.cart-item-name {
  font-weight: bold;
  font-size: 1rem;
  color: #333;
}

.cart-item-quantity {
  font-size: 0.9rem;
  color: #555;
}

.remove-button {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.remove-button:hover {
  background: #ff4c4c;
}

.cart-summary {
  flex: 1;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
}

.cart-summary h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
}

.checkout-button {
  background: #00a69c;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
}

.checkout-button:hover {
  background: #008f85;
}
</style>
