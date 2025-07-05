<template>
  <MySwiper :swiper-list="swiperListPart1" />
  <MySwiper :swiper-list="swiperListPart2" />
  <MySwiper :swiper-list="swiperListPart3" />
</template>

<script lang="ts" setup>
import MySwiper, { type SwiperList } from '~/components/MySwiper.vue'
import bg1 from '~/assets/images/home_swiper_01.png'
import bg2 from '~/assets/images/home_swiper_02.png'
import bg3 from '~/assets/images/home_swiper_03.png'
import bg4 from '~/assets/images/home_swiper_04.png'
import bg5 from '~/assets/images/home_swiper_05.png'
import bg6 from '~/assets/images/home_swiper_06.png'
import bg7 from '~/assets/images/home_swiper_07.png'
import bg8 from '~/assets/images/home_swiper_08.png'
import bg9 from '~/assets/images/home_swiper_09.png'
import bg10 from '~/assets/images/home_swiper_10.png'
import bg11 from '~/assets/images/home_swiper_11.png'

useHead({
  title: '首页',
})

// 第一部分轮播图 swiperList
const swiperListPart1: SwiperList[] = [
  {
    src: bg1,
    alt: 'banner1',
  },
  {
    src: bg2,
    alt: 'banner2',
  },
  {
    src: bg3,
    alt: 'banner3',
  },
]

// 第二部分轮播图 swiperList
const swiperListPart2: SwiperList[] = [
  {
    src: bg4,
    alt: 'banner4',
  },
  {
    src: bg5,
    alt: 'banner5',
  },
  {
    src: bg6,
    alt: 'banner6',
  },
]

// 第三部分轮播图 swiperList
const swiperListPart3: SwiperList[] = [
  {
    src: bg7,
    alt: 'banner7',
  },
  {
    src: bg8,
    alt: 'banner8',
  },
  {
    src: bg9,
    alt: 'banner9',
  },
  {
    src: bg10,
    alt: 'banner10',
  },
  {
    src: bg11,
    alt: 'banner11',
  },
]
</script>
