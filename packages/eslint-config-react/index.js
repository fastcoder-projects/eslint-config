// eslint-disable-next-line @typescript-eslint/no-var-requires
const { isPackageExists } = require('local-pkg');

const isTs = isPackageExists('typescript');

module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    isTs ? '@fastcoder/eslint-config-ts' : '@fastcoder/eslint-config-base',
    './libs/ant-design.js',
  ],
  rules: {
    // other
  },
};
