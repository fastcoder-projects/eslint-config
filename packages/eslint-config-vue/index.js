// eslint-disable-next-line @typescript-eslint/no-var-requires
const { isPackageExists } = require('local-pkg');

const isTs = isPackageExists('typescript');

module.exports = {
  extends: [
    isTs ? '@fastcoder/eslint-config-ts' : '@fastcoder/eslint-config-base',
    'plugin:vue/vue3-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: isTs ? { parser: '@typescript-eslint/parser' } : {},
  plugins: [
  ],
  rules: {
    // plugin:vue/vue3-recommended 中集成的一些规则重写

    // 关闭vue模板 同行属性数目限制
    'max-attributes-per-line': 'off',
  },
};
