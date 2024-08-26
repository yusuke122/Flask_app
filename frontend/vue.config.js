const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  assetsDir: 'static',
  chainWebpack: config => {
  config.module.rules.delete('eslint');
}
};
