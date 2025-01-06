<template>
  <section class="banner">
    <div class="banner-content" @click="goToCampaignDetail">
      <!-- Banner Görseli -->
      <div class="banner-image">
        <img
          src="https://www.watsons.com.tr/medias/sys_master/images/haa/hf5/11868731998238/800-400-kampanyalar/800-400-kampanyalar.png"
          alt="Watsons Banner"
          title="Watsons Kampanya Bannerı"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goToCampaignDetail = () => {
  router.push("/campaign-detail");
};
</script>


<style scoped>
/* Banner Alanı */
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 20px;
  cursor: pointer; /* Tıklanabilir olduğunu göstermek için imleç değişir */
}

.banner-content {
  position: relative;
  width: 100%;
  max-width: 1600px;
}

.banner-image img {
  width: 100%;
  height: auto;
  /*border-radius: 8px;*/
  display: block;
}
</style>
