<template>
    <div class="page-container">
      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <span><a href="/">Ana Sayfa</a> ></span> seçili-sac-bakim-urunleri
      </div>
  
      <!-- Başlık ve Ürün Sayısı -->
      <div class="header">
        <h2>Seçili Saç Bakım Ürünleri</h2>
        <p class="product-count">35 ürün</p>
      </div>
  
      <!-- Filtreler ve Ürünler -->
      <div class="content">
        <!-- Filtreler -->
        <aside class="filters">
    <button class="reset-filters">Filtreleri Sıfırla</button>
    <div class="filter-group">
      <h4>Stok Durumu</h4>
      <label><input type="checkbox" /> Stoktaki Ürünler (33)</label>
      <label><input type="checkbox" /> Stokta Olmayanlar (2)</label>
    </div>
    <div class="filter-group">
      <h4>Marka</h4>
      <label><input type="checkbox" /> BIOVENE (2)</label>
      <label><input type="checkbox" /> CLEAR (2)</label>
      <label><input type="checkbox" /> ELIDOR (3)</label>
      <label><input type="checkbox" /> ELSEVE (1)</label>
      <label><input type="checkbox" /> GLISS (1)</label>
      <label><input type="checkbox" /> MORFOSE (1)</label>
    </div>
    <div class="filter-group">
      <h4>Kategori</h4>
      <label><input type="checkbox" /> Sürdürülebilir (15)</label>
      <label><input type="checkbox" /> Şampuanlar (15)</label>
      <label><input type="checkbox" /> Saç Bakım Ürünleri (15)</label>
      <label><input type="checkbox" /> Saç Bakım Çok Satanlar (13)</label>
      <label><input type="checkbox" /> Saç Kremleri (6)</label>
    </div>
  </aside>
  
  
  
        <!-- Ürün Listesi -->
        <section class="products">
          <div class="product-grid">
            <div class="product-card" v-for="(product, index) in products" :key="index">
              <img :src="product.image" :alt="product.name" />
              <h3>{{ product.name }}</h3>
              <p class="price">{{ product.price }} TL</p>
              <p class="club-price">Watsons Club ile {{ product.clubPrice }} TL</p>
              <button class="add-to-cart">Sepete Ekle</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          {
            name: "OGX Dolgunlaştırıcı Biotin ve Kolajen Şampuan",
            price: "599,90",
            clubPrice: "269,90",
            image: "https://www.watsons.com.tr/medias/sys_master/prd-images/h66/h94/8900692541470/prd-front-145739_195x195/prd-front-145739-195x195.png",
          },
          {
            name: "Milk Therapy Çift Fazlı Fön Sütü",
            price: "269,90",
            clubPrice: "119,90",
            image: "https://www.watsons.com.tr/medias/sys_master/prd-images/hba/h57/11677286301726/prd-front-168777_195x195/prd-front-168777-195x195.jpg",
          },
          {
            name: "Clear Men Kepeğe Karşı Etkili Şampuan",
            price: "269,90",
            clubPrice: "119,90",
            image: "https://www.watsons.com.tr/medias/sys_master/prd-images/h2b/hd7/11862373171230/prd-front-1312871_195x195/prd-front-1312871-195x195.jpg",
          },
          {
            name: "Urban Care Expert Şampuan",
            price: "559,90",
            clubPrice: "249,90",
            image: "https://www.watsons.com.tr/medias/sys_master/prd-images/hb6/h69/10445829603358/prd-front-158687_195x195/prd-front-158687-195x195.jpg",
          },
          {
            name: "Pantene Argan Yağı Serum 100 ml",
            price: "311,90",
            clubPrice: "139,90",
            image: "https://www.watsons.com.tr/medias/sys_master/prd-images/h82/he2/11258378518558/prd-front-140014_195x195/prd-front-140014-195x195.jpg",
          },
          {
            name: "Pantene Keratin Özlü Onarıcı E Vitamini Yağı",
            price: "311,90",
            clubPrice: "139,90",
            image: "https://www.watsons.com.tr/medias/sys_master/prd-images/hea/hd1/11258365411358/prd-front-141147_195x195/prd-front-141147-195x195.jpg",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .page-container {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .breadcrumb {
    font-size: 14px;
    color: #555;
    margin-bottom: 20px;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;
  }
  
  .product-count {
    font-size: 16px;
    color: #777;
  }
  
  .content {
    display: flex;
    gap: 20px;
  }
  
  .filters {
    width: 25%;
    padding: 20px;
    border-right: 1px solid #ddd;
    background-color: #f7f7f7; /* Filtre arka plan rengi */
  }
  
  .filters h4 {
    color: #00827e; /* Başlık rengi */
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
    border-bottom: 1px solid #00827e;
    padding-bottom: 5px;
  }
  
  .filters .reset-filters {
    background-color: #00827e;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
    display: block;
    width: 100%;
    text-align: center;
  }
  
  .filters .reset-filters:hover {
    background-color: #006e6b;
  }
  
  .filters label {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-bottom: 10px;
    color: #333;
  }
  
  .filters label input {
    margin-right: 10px;
  }
  
  .filter-group {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: 5px;
  }
  
  .filter-group h4 {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
    color: #00827e;
  }
  
  .filters .checkbox-container {
    margin-left: 5px;
  }
  
  
  .products {
    width: 80%;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .product-card {
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
    padding: 15px;
    background-color: #fff;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }
  
  .product-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .product-card img {
    width: 100px;
    height: auto;
    margin-bottom: 10px;
  }
  
  .product-card h3 {
    font-size: 14px;
    color: #333;
    margin-bottom: 5px;
    line-height: 1.4;
  }
  
  .product-card p {
    font-size: 12px;
    margin: 5px 0;
  }
  
  .product-card .club-price {
    color: #28a745;
    font-weight: bold;
  }
  
  .product-card .ratings {
    font-size: 12px;
    color: #888;
  }
  
  .add-to-cart {
    background-color: #00bcd4;
    color: white;
    padding: 8px 15px;
    font-size: 12px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
  
  .add-to-cart:hover {
    background-color: #008c9e;
  }
  
  /* Ürünler Grid */
  .product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  
  /* Küçük ekranlarda daha az ürün göster */
  @media (max-width: 768px) {
    .product-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 480px) {
    .product-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>