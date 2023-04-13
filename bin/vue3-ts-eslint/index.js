module.exports = {
  // 整合vue3和ts的配置文件使之兼容
  extends: [
    // 两个基础配置  => 数组后面的优先级更改 所以vue3放后面
    './base/ts-eslint.cjs',
    './base/vue3-eslint.cjs',
  ],
  overrides: [
  ],
  parserOptions: {
    // vue解析器的配置
    parser: '@typescript-eslint/parser',
  },
  plugins: [],
  rules: {
  },
};
