<template>
  <header
    class="my-header w-full flex items-center justify-center"
    :style="headerStyle"
  >
    <div class="menu__list flex items-center justify-center">
      <div
        v-for="(item, index) in menuList"
        :key="index"
        class="menu__list__item cursor-pointer"
      >
        {{ item.name }}
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'

type MenuItem = {
  name: string
  route?: string
}

// 顶部菜单项
const menuList = ref<MenuItem[]>([
  {
    name: '小米官网',
  },
  {
    name: '小米商城',
  },
  {
    name: '小米澎湃OS',
  },
  {
    name: '小米汽车',
  },
  {
    name: '小米影像',
  },
  {
    name: '云服务',
  },
  {
    name: 'IoT',
  },
  {
    name: '有品',
  },
  {
    name: '小爱开放平台',
  },
  {
    name: 'Location',
  },
])

// header style样式
const headerStyle = ref<CSSProperties>({
  backgroundColor: 'transparent',
})

/**
 * 监听滚动事件，修改header的背景样式
 */
function handleScroll() {
  // 如果屏幕向下滚动，将header的背景颜色修改
  if (window.scrollY > 0) {
    headerStyle.value.backgroundColor = 'rgba(0, 0, 0, 0.75)'
    headerStyle.value.backdropFilter = 'blur(8px)'
  }
  else {
    headerStyle.value.backgroundColor = 'transparent'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
.my-header {
  height: 65px;
  padding: 0 15px;
  transition: background-color .5s ease;
  position: fixed;
  top: 0;
  z-index: 99;

  .menu__list {
    gap: 32px;
    .menu__list__item {
      color: #fff;
      font-size: 14px;
      transition: color .2s ease;
      font-weight: 500;
      &:hover {
        color: #ff6900;
      }
    }
  }
}
</style>
