// cart.ts
import { defineStore } from "pinia";
import { useAuthStore } from "./auth"; // Auth store'u içe aktar

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as Array<any>, // Sepet ürünlerini tutan dizi
  }),
  actions: {
    addToCart(product: any) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1; // Eğer ürün zaten varsa miktarını artır
      } else {
        this.items.push({ ...product, quantity: 1 }); // Yeni ürün ekle
      }
    },
    decreaseQuantity(productId: string) {
      const item = this.items.find((item) => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity -= 1; // Miktarı azalt
      } else {
        this.removeFromCart(productId); // Eğer miktar 1'e düşerse ürünü sepetten kaldır
      }
    },
    removeFromCart(productId: string) {
      this.items = this.items.filter((item) => item.id !== productId); // Ürünü sepetten kaldır
    },
    clearCart() {
      this.items = []; // Sepeti tamamen temizle
    },
  },
  getters: {
    cartTotal: (state) => {
      const authStore = useAuthStore(); // Auth Store'dan oturum durumu alınır
      return state.items.reduce((total, item) => {
        const price = authStore.isAuthenticated
          ? item.clubPrice || item.price // Eğer oturum açıksa `clubPrice` kullanılır
          : item.price; // Oturum açık değilse `price` kullanılır
        return total + item.quantity * price;
      }, 0);
    },
    cartItems: (state) => state.items, // Sepetteki ürünleri döner
  },
});
