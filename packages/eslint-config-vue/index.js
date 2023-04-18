module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  plugins: [
  ],
  rules: {
    // plugin:vue/vue3-recommended 中集成的一些规则重写

    // 关闭vue模板 同行属性数目限制
    'max-attributes-per-line': 'off',
  },
};
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { isPackageExists } = require('local-pkg');

const isTs = isPackageExists('typescript');

module.exports = {
  extends: [
    isTs ? 'ts' : 'js',
  ],
};
