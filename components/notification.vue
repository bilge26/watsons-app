<template>
    <div v-if="notification" class="notification">
      {{ notification }}
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from "vue";
  import { useNotificationStore } from "~/stores/notification";
  
  const notificationStore = useNotificationStore();
  const notification = computed(() => notificationStore.notification);
  </script>
  
  <style scoped>
  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #00a69c;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    animation: fadeInOut 2s ease forwards;
  }
  
  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    10%,
    90% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
  </style>
  