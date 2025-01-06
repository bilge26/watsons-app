<template>
  <div class="carousel-container">
    <div class="carousel" :style="{ transform: 'translateX(-${currentIndex * 100}%)' }">
      <!-- Her resim için link -->
      <div
        v-for="(image, index) in images"
        :key="index"
        class="carousel-slide"
      >
        <router-link :to="'/carousel/${index + 1}'">
          <img :src="image" alt="Carousel Image" />
        </router-link>
      </div>
    </div>
    <!-- Navigation Buttons -->
    <button class="carousel-nav prev" @click="prevSlide">‹</button>
    <button class="carousel-nav next" @click="nextSlide">›</button>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      images: [
        "https://www.watsons.com.tr/medias/sys_master/images/h3f/h21/11718974832670/WatsonsaOzelMarkalar/WatsonsaOzelMarkalar.png",
        "https://www.watsons.com.tr/medias/sys_master/images/h0d/h2b/11718974570526/Pastel-app/Pastel-app.png",
        "https://www.watsons.com.tr/medias/sys_master/images/he1/h63/11721966256158/YilbasiK_2-31Aralik_/YilbasiK-2-31Aralik-.png",
        "https://www.watsons.com.tr/medias/sys_master/images/h13/h5a/11721966518302/YilbasiK_2Aralik_1Ocak_CoverB_2-1300-500/YilbasiK-2Aralik-1Ocak-CoverB-2-1300-500.png",
        "https://www.watsons.com.tr/medias/sys_master/images/hea/h2d/11718975094814/WatsonsaOzelM_GobeBoost_2-8Aralik_CoverB-1300-500/WatsonsaOzelM-GobeBoost-2-8Aralik-CoverB-1300-500.png",
        "https://www.watsons.com.tr/medias/sys_master/images/hb8/h37/11718975356958/surdurulabilir-yasam-12/surdurulabilir-yasam-12.png",
      ],
      currentIndex: 0, // Şu anda gösterilen resim
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>


<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  max-width: 1475px;
  margin: 30px auto;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
}

.carousel-slide img {
  width: 100%;
  height: auto;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  font-size: 20px;
}

.carousel-nav.prev {
  left: 15px;
}

.carousel-nav.next {
  right: 15px;
}

.carousel-nav:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>