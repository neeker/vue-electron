module.exports = {
  install: function (Vue) {
    Object.defineProperties(Vue.prototype, {
      $electron: {
        get () {
          return {
            ...require('electron'),
            remote: {
              ...require('@electron/remote'),
              main: require('@electron/remote/main'),
              renderer: require('@electron/remote/renderer')
            },
          }
        },
      },
    })
  },
}
