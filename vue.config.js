const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  alias:{
    'assets': '@/assets',
    'common': '@/common',
    'components': '@/components',
    'network': '@/network',
    'views': '@/views',
  }
})
