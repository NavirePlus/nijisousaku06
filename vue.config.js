const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs',
  pages: {
    index: {
      entry: 'src/main.js',
      title: '#にじそうさく06 頒布情報 - Navire Plus'
    }
  }
})
