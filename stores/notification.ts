import { defineStore } from "pinia";
import { ref } from "vue";

export const useNotificationStore = defineStore("notification", () => {
  const notification = ref<string | null>(null);

  const showNotification = (message: string) => {
    notification.value = message;
    setTimeout(() => {
      notification.value = null;
    }, 2000); // 2 saniye sonra kaybolur
  };

  return { notification, showNotification };
});
