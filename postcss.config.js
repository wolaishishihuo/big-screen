export default {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 192, // 基准大小，比如设计稿1920px，可以设为100让计算更简单
      propList: ['*'], // 所有属性都转
      selectorBlackList: ['.ignore'], // 忽略 .ignore 开头的类
      unitPrecision: 3,
      exclude: /node_modules/i
    }
  }
};
