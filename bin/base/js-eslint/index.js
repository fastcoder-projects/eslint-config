module.exports = {
  extends: [
    // 官方推荐的初始规则配置
    'eslint:recommended',
  ],
  overrides: [
  ],
  plugins: [

  ],
  // "parser"
  // eslint原生js的规则重写
  rules: {
    // 文件末尾空行
    'eol-last': ['error', 'always'],
    // Best Practices
    // return 返回的数据类型要一致
    'consistent-return': 'error',
    // 强制不省略块代码的大括号
    'curly': 'error',
    // 强制使用 === 和 !==
    'eqeqeq': 'error',
    // 禁止出现多个空格
    'no-multi-spaces': 'error',

    // 变量声明Variables
    // 不允许初始化变量为undefined
    'no-undef-init': 'error',

    // 风格
    // 代码块大括号风格 只有一行的代码块运行大括号在一行
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // 分号位置
    'semi-style': ['error', 'last'],
    // 操作符前后必须有空格
    'space-infix-ops': ['error', { int32Hint: false }],
    // 逗号与空格风格·
    'comma-spacing': ['error'],
    // 变量命名小驼峰
    'camelcase': 'error',
    // 要求拖尾逗号 当和} ] 不在同一行
    'comma-dangle': ['error', 'always-multiline'],
    // 缩进两空格
    'indent': ['error', 2],
    // 构造函数首字母大写
    'new-cap': 'error',

    // es6
    // 箭头函数必须大括号
    'arrow-body-style': ['error', 'always'],
    // 箭头函数必须小括号
    'arrow-parens': ['error', 'always'],

    // 关闭的规则
    // 关闭禁止使用arguments 防抖函数
    'prefer-rest-params': 'off',
    // 关闭禁止在case里声明变量
    'no-case-declarations': 'off',

    // 其他插件的配置 暂时不使用
    // 'import/extensions': 'off',
    // 'no-use-before-define': 'off',
    // 'import/prefer-default-export': 'off',
  },
};
