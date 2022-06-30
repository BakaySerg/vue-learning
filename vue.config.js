module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // @ == src
        additionalData: `@import "~@/assets/var.scss";`
      }
    },
    sourceMap: true
  }
}