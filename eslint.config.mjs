// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['pages/**/*.vue', 'layouts/**/*.vue', 'components/**/*.vue'],
    rules: {
      // 允许在 Vue 组件中定义多个根元素
      'vue/no-multiple-template-root': ['off'],
      // 允许在 Vue 组件中使用单个单词单词的组件名
      'vue/multi-word-component-names': ['off'],
      // 使用单引号
      'quotes': ['error', 'single'],
    },
  },
)
