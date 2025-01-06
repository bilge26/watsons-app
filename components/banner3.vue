<template>
    <section class="banner">
      <div class="banner-content">
        <!-- Banner Görseli -->
        <div class="banner-image">
          <img
            src="https://www.watsons.com.tr/medias/sys_master/images/h00/h0e/9990053396510/Tikla-Gel-Al-Hemen/Tikla-Gel-Al-Hemen.png"
            alt="Watsons Banner"
            title="Watsons Kampanya Bannerı"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Banner bileşeni ek işlevsellik gerektirmiyor.
  </script>
  
  <style scoped>
  /* Banner Alanı */
  .banner {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    padding: 20px;
  }
  
  .banner-content {
    position: relative;
    width: 100%;
    max-width: 1600px;
  }
  
  .banner-image img {
    width: 100%;
    height: auto;
   /* border-radius: 8px;*/
    display: block;
  }
  </style>