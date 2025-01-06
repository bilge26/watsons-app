import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as Array<any>,
  }),
  actions: {
    addToCart(product: any) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId: string) {
      this.items = this.items.filter((item) => item.id !== productId);
    },
    clearCart() {
      this.items = [];
    },
  },
  getters: {
    cartTotal: (state) => {
      return state.items.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },
    cartItems: (state) => {
      return state.items;
    },
  },
});
