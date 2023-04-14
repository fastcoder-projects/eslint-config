module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    // 引入本地js的配置
    './js-eslint.cjs',
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  // '@typescript-eslint'的相关规则重写
  rules: {
    // 从github 用户：callmecalcal 老哥那的库取来的 没正式了解过
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'semi' } }],
    '@typescript-eslint/type-annotation-spacing': ['error', {}],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-use-before-define': ['error', { ignoreTypeReferences: true }],
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};
