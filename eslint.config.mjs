// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
// Your custom configs here
export default withNuxt().prepend(
  // ...Prepend some flat configs in front

  {
    rules: {
      // ...override some rules
      // 禁止使用 var
      'no-var': 'error',
      // 禁止使用未声明的变量
      'no-undef': 'error',
      // console log 警告
      'no-console': 'warn',
      // 注释前后需要空格
      '@stylistic/spaced-comment': ['error'],
      // 尾随逗号
      '@stylistic/comma-dangle': ['error', 'always'],
    },
  },
)

// ...you can chain more operations as needed
