<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props: ['swiperSlides'],//this.swiperSlides
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: '3500',
          setWrapperSize: true,
          observeParents: true
        },
      }
    }
  }
</script>
<style scoped>
  img {
    width: 100%
  }
</style>
