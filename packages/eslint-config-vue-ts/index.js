module.exports = {
  // 整合vue3和ts的配置文件使之兼容
  extends: [
    // 两个基础配置  => 数组后面的优先级更高 所以vue3放后面
    '@fastcoder/eslint-config-ts',
    '@fastcoder/eslint-config-vue',
  ],
  plugins: [
  ],
  parserOptions: {
    // vue解析器的配置
    parser: '@typescript-eslint/parser',
  },
  rules: {
  },
};
