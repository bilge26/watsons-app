<template>
  <footer class="footer">
    <!-- Sosyal Medya İkonları -->
    <div class="footer-top">
      <div class="social-media">
        <a href="https://www.instagram.com/watsonsturkiye/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i>
      </a>
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
      </div>
    </div>

    <!-- Footer Ana Bölüm -->
    <div class="footer-main">
      <div class="footer-column">
        <h4>Kurumsal</h4>
        <ul>
          <li><a href="#">Hakkımızda</a></li>
          <li><a href="#">Kariyer</a></li>
          <li><a href="#">İşe Alım ve Başvuru Süreci</a></li>
          <li><a href="#">Performans Yönetimi ve Ödüllendirme</a></li>
          <li><a href="#">Bağış</a></li>
          <li><a href="#">Sürdürülebilirlik</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Alışveriş</h4>
        <ul>
          <li><a href="#">Sipariş ve Ödeme</a></li>
          <li><a href="#">İptal ve İade</a></li>
          <li><a href="#">Teslimat Koşulları</a></li>
          <li><a href="#">Kampanyalar</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Watsons Club</h4>
        <ul>
          <li><a href="#">Kayıt Ol</a></li>
          <li><a href="#">Watsons Club</a></li>
          <li><a href="#">Watsons Elite</a></li>
          <li><a href="#">Watsons Club Sıkça Sorulan Sorular</a></li>
          <li><a href="#">Watsons Card Kullanım Koşulları</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Yardım</h4>
        <ul>
          <li><a href="#">Sıkça Sorulan Sorular</a></li>
          <li><a href="#">İletişim</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Yasal</h4>
        <ul>
          <li><a href="#">Kullanım Koşulları</a></li>
          <li><a href="#">Marka ve Telif Hakları</a></li>
          <li><a href="#">Üyelik Sözleşmesi</a></li>
          <li><a href="#">KVKK Aydınlatma Metni</a></li>
        </ul>
      </div>
    </div>

    <!-- Footer Alt Bölüm -->
    <div class="footer-bottom">
      <div class="footer-bottom-left">
        <img src="https://www.watsons.com.tr/medias/sys_master/images/h17/ha3/8840990392350/CKHHLogo/CKHHLogo.png" alt="CKH Logo" />
        <img src="https://www.watsons.com.tr/medias/sys_master/images/had/ha2/8840990359582/BePartOfMoreASW/BePartOfMoreASW.png" alt="Watsons Logo" />
      </div>
      <div class="footer-bottom-right">
        <p>&copy; 2024 Watsons. Tüm Hakları Saklıdır.</p>
        <div class="app-links">
          <a href="#"><img src="https://www.watsons.com.tr/custom-img/email/googlePlayAppDownload.png" alt="Google Play" /></a>
          <a href="#"><img src="https://www.watsons.com.tr/custom-img/email/appleStoreAppDownload.png" alt="App Store" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
/* Genel Stil */
.footer {
  background-color: #f8f8f8;
  color: #333;
  padding: 20px 40px;
  font-size: 14px;
}

/* Sosyal Medya */
.footer-top {
  text-align: center;
  margin-bottom: 20px;
}

.social-media a {
  margin: 0 10px;
  font-size: 20px;
  color: #00a69c;
}

.social-media a:hover {
  color: #007a6e;
}

/* Ana Bölüm */
.footer-main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
}

.footer-column {
  flex: 1;
  min-width: 200px;
  margin: 10px;
}

.footer-column h4 {
  margin-bottom: 15px;
  font-size: 16px;
  color: #00a69c;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column ul li a {
  color: #333;
  text-decoration: none;
}

.footer-column ul li a:hover {
  color: #00a69c;
  text-decoration: underline;
}

/* Alt Bölüm */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid #eaeaea;
  padding-top: 20px;
}

.footer-bottom-left img {
  max-width: 100px;
  margin-right: 20px;
}

.footer-bottom-right {
  text-align: center;
}

.app-links img {
  max-width: 100px;
  margin: 0 5px;
}
</style>