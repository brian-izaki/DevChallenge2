module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/css/theme.sass"`,
      },
      scss: {
        additionalData: `@import "~@/css/theme.scss";`,
      },
    },
  },
};
