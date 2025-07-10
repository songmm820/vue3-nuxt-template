<template>
  <Swiper
    :slides-per-view="1"
    :space-between="50"
    :loop="true"
    :autoplay="{ delay: 2500 }"
    :modules="[Autoplay]"
  >
    <SwiperSlide
      v-for="(item, index) in props.swiperList"
      v-slot="{ isActive }"
      :key="index"
    >
      <div class="my-swiper-wrapper">
        <img class="swiper-img" :src="item.src" :alt="item.alt" />
        <div class="swiper-left__btn" @click.stop="handleSwiperBtn('left')">
          &lt;
        </div>
        <div class="swiper-right__btn" @click.stop="handleSwiperBtn('right')">
          <UIcon name="i-lucide-lightbulb" class="size-5" />
        </div>
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

/**
 * 轮播图按钮点击事件
 */
function handleSwiperBtn(direction: 'left' | 'right') {
  // console.log(direction)
}
</script>

<style lang="scss" scoped>
.my-swiper-wrapper {
  position: relative;
  .swiper-img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  /* swiper btn */
  @mixin my-swiper-btn-style {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 100px;
    color: #fff;
  }
  .swiper-left__btn {
    @include my-swiper-btn-style;
    left: 100px;
  }
  .swiper-right__btn {
    @include my-swiper-btn-style;
    right: 100px;
  }
}
</style>
