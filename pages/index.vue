
<template>
    <div>
      <Banner />
      <Carousel />
      <ProductList />
      <Banner2 />
      <ThreeBanner />
      <TwoBanner />
      <FourBanner />
      <ProductList2 />
      <Banner3 />
      <TwoBanner2 />
  
      <!-- Watsons Paragrafları -->
      <section class="info-section">
          <article>
            <h2>Watsons Kozmetik</h2>
            <p>
              1841 yılından beri güzellik ve bakımın nabzını tutan Watsons, çok sayıda marka ve ürün ile müşterilerine benzersiz bir dünya sunuyor. Tüm dünyada ve Türkiye’de çok sayıda kozmetik mağazası olan Watsons, her türden ihtiyaca yanıt veriyor. Rujdan fondötene, far paletinden parfüme, cilt bakım ürünlerinden saç bakım ürünlerine kadar sağlıklı yaşam ürünlerini ve kişisel bakım ürünlerini tümünü Watsons’ta bulmanız mümkün. Kendi kişisel ve kozmetik bakım ürünlerini de sunan Watsons, dünya genelinde kullanılan seçkin kozmetik markaları da reyonlarında müşterileriyle buluşturuyor. <b>Güzel ve bakımlı görünmeyi herkes için ulaşılabilir kılan Watsons</b>, bu yönüyle geniş bir müşteri kitlesine hitap ediyor.
            </p>
          </article>
          <article>
            <h2>Watsons Makyaj Ürünleri</h2>
            <p>
              Watsons kozmetik ürünleri, tüm güzellik trendlerini sunarak dünyanızı daha da güzelleştiriyor. Her cilt tonuna uygun fondötenlerden pudralara, makyaj bazlarından kapatıcılara, farlardan paletlere, rimellerden göz kalemlerine, allıklardan rujlara uzanan ürün seçkisi yüzlerce renk seçeneği sunuyor. Kozmetik dünyası yeniliklerini bulabileceğiniz zengin içerikli ürün karması ile dilediğiniz makyaj malzemesine sahip olabilir ve farklı makyaj stillerini deneyebilirsiniz. İster favori markanızı ister mükemmel eşleşmeyi bulmak için aradığınız ürünler olsun, <b>Watsons’ta aradığınız her şeyi bulmanız mümkün.</b> Büyülü Watsons makyaj malzemeleri ile yapabilecekleriniz sınırsız.
            </p>
            <h3>Watsons Cilt Bakımı Ürünleri</h3>
            <p>
              Watsons kozmetik ürünlerin yanı sıra cilt bakım ürünleriyle de geniş bir müşteri kitlesine hitap ediyor. Watsons’ta bulunan yüksek performanslı cilt bakım ürünleri ile en güzel halinizi ortaya çıkarabilirsiniz. Markanın sunduğu cilt bakımı ürünleri, hedefe yönelik bakımı sunan içerikleri ile cildinizin temizlenmesine, tedavi edilmesine, nemlendirilmesine ve korunmasına yardımcı oluyor. Hyaluronik asit içeren cilt bakım ürünleri ile cildinizi nemli tutabilirsiniz. Watsons Türkiye, cilt bakımında güneş koruyucu içerikleri de büyük bir özenle sunuyor.
            </p>
          </article>
          <article>
            <h4>Watsons Saç Bakımı Ürünleri</h4>
            <p>
              Her saç tipine özel ürün seçeneğini bulabileceğiniz ve saçlarınıza ihtiyacı olan yenileyici bakımı sunacağınız ürün arayışındaysanız Watsons sizin için en doğru adres! Her saç tipinin ve ihtiyaçlarının farklı olduğunu bilen Watsons, saç bakımında size zengin bir dünya sunuyor.
            </p>
          </article>
        </section>
    </div>
  </template>
  
  <script setup>
  import Banner from "~/components/banner.vue";
  import Carousel from "~/components/carousel.vue";
  import ProductList from "~/components/productlist.vue";
  import Banner2 from "~/components/banner2.vue";
  import ThreeBanner from "~/components/threebanner.vue";
  import TwoBanner from "~/components/twobanner.vue";
  import FourBanner from "~/components/fourbanner.vue";
  import ProductList2 from "~/components/productlist2.vue";
  import Banner3 from "~/components/banner3.vue";
  import TwoBanner2 from "~/components/twobanner2.vue";
  </script>
  
  <style scoped>
  .info-section {
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    margin-top: 20px;
    margin-bottom: 0;
    text-align: left;
    width: 100%;
    max-width: 1500px;
  }
  
  .info-section h2,
  .info-section h3,
  .info-section h4 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .info-section p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 10px;
  }
  </style>