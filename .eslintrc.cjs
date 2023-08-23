module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'plugin:vue/vue3-essential',
  // 代码不符合 Prettier 的标准时，会报一个 ESLint 错误，同时也可以通过 eslint --fix 来进行格式化。
  // 'plugin:prettier/recommended',
  // // 覆盖eslint格式配置, 需要写在extends最后面
  // 'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'no-var': 'error',
    'no-console': [1, { allow: ['warn', 'error'] }],
    // 禁止修改类声明的变量
    'no-const-assign': 2,
    'object-shorthand': 2,
    'no-unused-vars': [
      2,
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],
    'no-undef': 2,
    camelcase: 'off',
    'no-extra-boolean-cast': 'off',
    semi: ['error', 'always'],
    // 缩进
    indent: ['warn', 2, { 'SwitchCase': 1 }],
    /*
     * 强烈使用一致的反勾号``、双引号""或单引号''
     * 允许字符串使用单引号或者双引号，只要字符串中包含了一个其他引号，否则需要转义
     * 允许字符串使用反勾号
     */
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    // 不允许多个空行
    'no-multiple-empty-lines': [2, { max: 1 }],
    'eol-last': 1, // 要求文件末尾存在空行
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': [
      2,
      'always',
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ',',
        ],
      },
    ],
    // 要求操作符周围有空格
    'space-infix-ops': 2,
    // 数组元素之间需要一致的换行符
    'array-element-newline': [1,'consistent'],
    // 对象换行，允许所有对象属性放在同一行
    'object-property-newline': [1, { allowAllPropertiesOnSameLine: true }],
    // 关键字之前有空格
    'keyword-spacing': [1, { 'before': true }],
    // 冒号前加空格
    'key-spacing': ['error', { 'beforeColon': false }],
    // 强制块前间距的一致性
    'space-before-blocks': [1],
    // 强制花括号{}内使用换行符的一致性
    'object-curly-newline': [1,{ 'multiline': true }],
    // 花括号左右需要空格 对象文字、解构函数赋值和导入/导出说明符的大括号内强制使用一致的间距。
    'object-curly-spacing': ['error', 'always'],
    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格,
    'computed-property-spacing': [1,'never'],
    // 强制在圆括号内使用一致的空格,
    'space-in-parens': [1,'never'],
    // 箭头前后使用空格
    'arrow-spacing': [2,{ 'before': true,'after': true }],
    // 禁止重复的 case 标签
    'no-duplicate-case': 2,
    // 在创建对象字面量时不允许key值重复
    'no-dupe-keys': 2,
    // 禁止重复声明变量
    'no-redeclare': 2,
    // vue模板内操作符之间有空格
    'vue/space-infix-ops': 1,
    'vue/no-v-html': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-reserved-keys': 'off',
    'vue/comment-directive': 'off',
    'vue/prop-name-casing': 'off',
    'vue/one-component-per-file': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/v-on-event-hyphenation': 'off',
    // 每行的最大属性数
    'vue/max-attributes-per-line': [
      2,
      {
        'singleline': 4, // 处于单行时
        'multiline': 1, // 处于多行时
      },
    ],
    // 标签关闭规则，不做校验
    'vue/html-self-closing': ['warn', {
      'html': {
        'void': 'any',
        'normal': 'any',
        'component': 'any',
      },
      'svg': 'any',
      'math': 'any',
    }],
    // 冒号前加空格
    'vue/key-spacing': ['warn', { 'beforeColon': false }],
    // 花括号左右需要空格
    'vue/object-curly-spacing': ['error', 'always'],
    // 元素关闭尖括号能否另起一行
    'vue/multiline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off',
    // computed里不允许添加副作用
    'vue/no-side-effects-in-computed-properties': 'error',
    // 忽略import使用ignore的报错
    'import/no-unresolved': [
      2,
      {
        ignore: [
          '^@/',
          'virtual',
          'unplugin-auto-import',
          'unplugin-element-plus/vite',
        ],
      },
    ],
    eqeqeq: 2, // 必须使用全等
    'vue/eqeqeq': 2, // vue模板内必须使用全等
    // 关闭单行的元素必须换行处理
    'vue/singleline-html-element-content-newline': 0,
  },
};
