module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  overrides: [
  ],
  plugins: [

  ],
  rules: {
    // plugin:vue/vue3-recommended 中集成的一些规则重写

    // 关闭vue模板 同行属性数目限制
    'max-attributes-per-line': 'off',
  },
};
