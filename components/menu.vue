<template>
  <nav class="menu">
    <ul class="menu-list">
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        class="menu-item"
        @mouseenter="showSubMenu(index)"
        @mouseleave="hideSubMenu"
      >
        {{ item.name }}
        <div v-if="hoveredMenuIndex === index" class="submenu">
          <ul>
            <li
              v-for="(subItem, subIndex) in item.subCategories"
              :key="subIndex"
            >
              <router-link
                v-if="subItem.link"
                :to="subItem.link"
                class="submenu-link"
              >
                {{ subItem.name }}
              </router-link>
              <span v-else>{{ subItem.name }}</span>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";

// Menü verisi
const menuItems = ref([
  {
    name: "Sadece Watsons’ta",
    subCategories: [
      { name: "Özel Ürünler", link: "/special-products" },
      { name: "Fırsatlar", link: "/offers" },
      { name: "Kampanyalar", link: "/campaigns" },
    ],
  },
  {
    name: "Makyaj",
    subCategories: [
      { name: "Yüz Makyajı" },
      { name: "Göz Makyajı" },
      { name: "Dudak Makyajı" },
      { name: "Tırnak Ürünleri" },
      { name: "Hizmetler" },
      { name: "Makyaj Setleri" },
      { name: "Makyaj Aksesuarları" },
    ],
  },
  {
    name: "Cilt Bakım",
    subCategories: [
      { name: "Yüz Bakım" },
      { name: "Dermo Cilt Bakım" },
      { name: "Doğal İçerikli Cilt Bakım" },
      { name: "El Ve Vücut Bakım" },
      { name: "Güneş Koruyucuları Ve Bronzlaştırıcılar" },
    ],
  },
  {
    name: "Saç Bakım",
    subCategories: [
      { name: "Şampuanlar" },
      { name: "Saç Kremleri" },
      { name: "Saç Bakım Ürünleri" },
      { name: "Saç Dökülmesine Karşı Ürünler" },
      { name: "Şekillendiriciler" },
      { name: "Profesyonel Saç Bakım" },
      { name: "Saç Boyaları" },
      { name: "Saç Aksesuarları" },
      { name: "En Yeniler" },
    ],
  },
  {
    name: "Kişisel Bakım",
    subCategories: [
      { name: "Parfüm Ve Deodorant" },
      { name: "Banyo" },
      { name: "Ağız Bakım" },
      { name: "Kadın Bakım" },
      { name: "Epilasyon" },
      { name: "Ayak Bakım" },
      { name: "Anne Ve Bebek" },
      { name: "En Yeniler" },
      { name: "Çok Satanlar" },
    ],
  },
  {
    name: "Sağlıklı Yaşam",
    subCategories: [
      { name: "Vitaminler, Gıda Takviyeleri Ve Diyet" },
      { name: "Genel Sağlık Ürünleri" },
      { name: "Antibakteriyel Ve Hijyen Ürünleri" },
      { name: "En Yeniler" },
      { name: "Çok Satanlar" },
    ],
  },
  {
    name: "Erkek Bakım",
    subCategories: [
      { name: "Tıraş" },
      { name: "Erkek Bakım Ürünleri" },
      { name: "Erkek Parfüm Ve Deodorant" },
      { name: "En Yeniler" },
      { name: "Çok Satanlar" },
    ],
  },
  {
    name: "Parfüm",
    subCategories: [
      { name: "Parfümler" },
      { name: "Deodorant Ve Roll-On" },
      { name: "En Yeniler" },
      { name: "Çok Satanlar" },
    ],
  },
  {
    name: "Aksesuar",
    subCategories: [
      { name: "Moda Aksesuarları" },
      { name: "Seyahat Aksesuarları" },
      { name: "Makyaj Aksesuarları" },
      { name: "Tırnak Aksesuarları" },
      { name: "Saç Aksesuarları" },
      { name: "Banyo Aksesuarları" },
    ],
  },
  {
    name: "K-Beauty",
    subCategories: [],
  },
  {
    name: "Sürdürülebilir Yaşam",
    subCategories: [{ name: "Sürdürülebilir Ürünler" }],
  },
]);

// Hover edilen menü indeksi
const hoveredMenuIndex = ref(null);

const showSubMenu = (index) => {
  hoveredMenuIndex.value = index;
};

const hideSubMenu = () => {
  hoveredMenuIndex.value = null;
};
</script>

<style scoped>
/* Menü Temel Stilleri */
.menu {
  background-color: #00a69c; /* Watsons Renk */
  color: white;
  padding: 10px 20px;
  border-top: 1px solid #ccc;
}

.menu-list {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  margin: 0 15px;
  position: relative;
  cursor: pointer;
  font-weight: bold;
}

.menu-item:hover {
  color: #fff;
}

/* Alt Menü Stilleri */
.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  color: #333;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  white-space: nowrap;
}

.submenu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.submenu li {
  padding: 5px 10px;
  cursor: pointer;
}

.submenu li:hover {
  background-color: #f5f5f5;
  color: #00a69c;
}

.submenu-link {
  text-decoration: none;
  color: inherit;
}

.submenu-link:hover {
  text-decoration: underline;
}
</style>
