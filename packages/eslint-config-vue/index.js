// eslint-disable-next-line @typescript-eslint/no-var-requires
const { isPackageExists } = require('local-pkg');

const isTs = isPackageExists('typescript');

module.exports = {
  extends: [
    isTs ? 'ts' : 'js',
  ],
};
