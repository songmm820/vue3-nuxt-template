/**
 * 导入prettier的ESLint推荐配置
 * 这是为了确保代码风格与prettier的格式化风格保持一致
 * ESLint是一个用于识别和报告JavaScript代码中模式的工具，以促进代码一致性和避免错误
 * Prettier是一个有自己配置的代码格式化工具，这个导入的配置将ESLint规则调整为与Prettier的格式化规则一致
 */

import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginVue from "eslint-plugin-vue";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
// 导入eslint配置项以配合Prettier使用
import eslintConfigPrettier from "eslint-config-prettier";

/**
 * ESLint配置数组，用于定义代码检查规则
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  {
    ignores: [
      "node_modules",
      "dist",
      ".gitignore",
      "package.json",
      "package-lock.json",
      "dist-ssr",
      "*.local",
      ".npmrc",
      ".DS_Store",
      "dev-dist",
      "dist_electron",
      "*.d.ts",
      "src/assets/**",
      ".nuxt",
    ],
  },
  // 应用JavaScript ESLint推荐的规则配置
  eslint.configs.recommended,
  // 应用TypeScript ESLint推荐的规则配置
  ...tseslint.configs.recommended,
  // vue3 基础推荐规则
  // ...eslintPluginVue.configs["flat/recommended"],
  ...eslintPluginVue.configs["flat/essential"],
  // 引入ESLint配置中的Prettier规范
  eslintConfigPrettier,
  // 使用 ESLint 插件 Prettier 的推荐配置
  eslintPluginPrettierRecommended,
  // 配置忽略项，指定在某些操作或任务中不应被处理的目录或文件
  { ignores: ["dist/**", "node_modules/**", "src/types/**"] },
  // 配置文件匹配规则，指定应被处理的文件类型
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: tseslint.parser,
      },
    },
    rules: {
      // 禁止使用 var
      "no-var": "error",
      // 禁止使用未声明的变量
      "no-undef": "error",
      // console log 警告
      "no-console": "warn",
      // 最后一行不使用逗号
      "comma-dangle": ["error", "never"],
      // 注释前后需要空格
      "spaced-comment": ["error"],
    },
  },
  // Vue文件的ESLint配置
  {
    files: ["**/*.vue"],
    rules: {
      // 允许使用单个单词命名
      "vue/multi-word-component-names": "off",
      // 不允许在计算属性中使用异步操作
      "vue/no-async-in-computed-properties": "error",
      // 禁止在props中直接修改值
      "vue/no-mutating-props": "error",
      // 禁止在模板中使用未使用的组件
      "vue/no-unused-components": "error",
      // 强制render必须有函数返回值
      "vue/require-render-return": "error",
      // 强制v-for必须有key
      "vue/require-v-for-key": "error",
      // 强制组件props参数使用连字符命名
      "vue/attribute-hyphenation": "error",
      // 强制为组件定义名称大小写定义样式以实现一致性
      "vue/component-definition-name-casing": ["error", "PascalCase"],
      // 强制在组件的props中定义默认值
      "vue/require-default-prop": "error",
      // 强制prop定义应始终尽可能详细，至少指定类型
      "vue/require-prop-types": "error",
      "vue/component-name-in-template-casing": ["error", "PascalCase", {}],
    },
  },
];
