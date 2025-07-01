// @ts-check
import stylistic from '@stylistic/eslint-plugin'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
  }),
  {
    rules: {
      // 允许在 Vue 组件中定义多个根元素
      'vue/no-multiple-template-root': ['off'],
    },
  },
)
