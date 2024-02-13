<template>
  <header-page></header-page>
  <div class="grid grid-nogutter">
    <div class="col-2 layout-left-block align-self-center">
      <Carousel :value="products" :numVisible="1" :numScroll="1" circular :autoplayInterval="10000"
                :showIndicators="false">
        <template #item="slotProps">
          <img :src="getImgUrl(slotProps.data.name)" class="border-round w-full"/>
        </template>
      </Carousel>
    </div>
    <div class="col-10 layout-content">
      <keep-alive>
        <component :is="formData[currentPage]" @next-page="currentPage++" @prev-page="currentPage--"></component>
      </keep-alive>
    </div>
  </div>

</template>

<script>
import HeaderPage from "@/components/headerPage";
// import firstPage from "@/components/testPages/firstPage";
// import secondPage from "@/components/testPages/secondPage";
// import thirdPage from "@/components/testPages/thirdPage";
// import fourthPage from "@/components/testPages/fourthPage";
// import fivethPage from "@/components/testPages/fivethPage";
// import sixthPage from "@/components/testPages/sixthPage";
// import seventhPage from "@/components/testPages/seventhPage";
// import eighthPage from "@/components/testPages/eighthPage";
// import ninethPage from "@/components/testPages/ninethPage";
// import tenthPage from "@/components/testPages/tenthPage";
// import elevenPage from "@/components/testPages/elevenPage";
// import twelvePage from "@/components/testPages/twelvePage";
// import thirteenPage from "@/components/testPages/thirteenPage";
// import fourteenPage from "@/components/testPages/fourteenPage";
// import manQuestFirst from "@/components/testPages/manQuestFirst";
// import manQuestSecond from "@/components/testPages/manQuestSecond";
// import manQuestThird from "@/components/testPages/manQuestThird";
// import womanQuestFirst from "@/components/testPages/womanQuestFirst";
// import womanQuestSecond from "@/components/testPages/womanQuestSecond";
import womanQuestThird from "@/components/testPages/womanQuestThird";

export default {
  name: 'App',
  components: {
    HeaderPage,
  },
  data() {
    return {
      products: [],
      value: null,
      currentPage: 0,
      formData: [
        // firstPage,
        // secondPage,
        // thirdPage,
        // fourthPage,
        // fivethPage,
        // sixthPage,
        // seventhPage,
        // eighthPage,
        // ninethPage,
        // tenthPage,
        // elevenPage,
        // twelvePage,
        // thirteenPage,
        // fourteenPage,
        // manQuestFirst,
        // manQuestSecond,
        // manQuestThird,
        // womanQuestFirst,
        // womanQuestSecond,
        womanQuestThird,
      ]
    }
  },
  created() {
    for (let i = 1; i < 61; i++) {
      this.products.push({name: i})
    }
  },
  methods: {
    getImgUrl(imgNumber) {
      return require(`./assets/loveimg/${imgNumber}.jpg`)
    }
  }
}
</script>
