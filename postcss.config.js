module.exports = {
  plugins: [
    require('autoprefixer'),
    {{#mobile}}
    require('postcss-pxtorem')({
      rootValue: 75,
      propList: ['*']
    }),
    {{/mobile}}
  ]
}
