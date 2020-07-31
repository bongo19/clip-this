module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    },
    index: {
      entry: './src/popup/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
  }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: './src/background.js'
        },
        contentScripts: {
          entries: {
            'content-script': [
              'src/content-scripts/content-script.js'
            ]
          }
        }
      }
    }
  }
}
