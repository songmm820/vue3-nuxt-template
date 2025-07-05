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
      // 禁止在 Vue 组件中使用多个属性定义在一行
      'vue/max-attributes-per-line': ['off'],
      // 禁止在 Vue 组件中第一个参数换行
      'vue/first-attribute-linebreak': ['off'],
      // 强制在多行元素的内容之前和之后使用换行符
      'vue/multiline-html-element-content-newline': ['off'],
      // vue 每行最大字数
      'vue/max-len': ['error', {
        code: 120,
        template: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }],
    },
  },
)
