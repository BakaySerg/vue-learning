module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // @ == src
        data: `@import "~@/assets/var.scss";`
      }
    },
    sourceMap: true
  }
}