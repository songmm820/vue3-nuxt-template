import type { RouterConfig } from '@nuxt/schema'

/**
 * 路由配置
 */
export default <RouterConfig>{
  scrollBehavior(_to, _from, _savedPosition) {
    // 滚动到顶部
    return { top: 0, left: 0 }
  },
}
