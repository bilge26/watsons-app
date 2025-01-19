<template>
  <div class="carousel-container">
    <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <!-- Her resim için link -->
      <div
        v-for="(image, index) in images"
        :key="index"
        class="carousel-slide"
      >
        <router-link :to="`/carousel/${index + 1}`">
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
        "https://www.watsons.com.tr/medias/sys_master/images/hcf/h84/11925028241438/sli/sli.png",
        "https://www.watsons.com.tr/medias/sys_master/images/h2f/h8e/11918163410974/yilin-ilk-firsatlari/yilin-ilk-firsatlari.png",
        "https://www.watsons.com.tr/medias/sys_master/images/hb2/h83/11918163738654/yilin-ilk-firsatlari4/yilin-ilk-firsatlari4.png",
        "https://www.watsons.com.tr/medias/sys_master/images/he9/h54/11865753845790/sacfest/sacfest.png",
        "https://www.watsons.com.tr/medias/sys_master/images/h8d/hbc/11886133346334/ayin-urunleri-ocak/ayin-urunleri-ocak.png",
        "https://www.watsons.com.tr/medias/sys_master/images/hc1/h97/11922646630430/mil/mil.png",
      ],
      currentIndex: 0, // Şu anda gösterilen resim
    };
  },
  methods: {
    // Sonraki slayta geçiş
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    // Önceki slayta geçiş
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