<template>
  <!--     :autoplay="{ delay: 2500 }" -->
  <Swiper
    :slides-per-view="1"
    :space-between="50"
    :loop="true"
    :modules="[Autoplay]"
  >
    <SwiperSlide
      v-for="(item, index) in props.swiperList" v-slot="{ isActive }"
      :key="index"
    >
      <div class="relative">
        <img class="swiper-img" :src="item.src" :alt="item.alt">
        <div>LeftBtn</div>
        <div>RightBtn</div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
// Swiper 核心样式
import 'swiper/css'
// Swiper自动轮播样式
import 'swiper/css/autoplay'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper modules
import { Autoplay } from 'swiper/modules'

/**
 * 轮播图数据类型
 */
export type SwiperList = {
  src: string
  alt: string
}

const props = defineProps<{
  swiperList: SwiperList[]
}>()
</script>

<style lang="scss" scoped>
.swiper-img {
  width: 100%;
  height:auto;
  cursor: pointer;
}
</style>
