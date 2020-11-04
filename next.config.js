const withImages = require('next-images')

module.exports = withImages({
    target: 'serverless',
    webpack: function(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'markdown-loader',
      })
      return config
    },
    sassOptions: {
      outputStyle: 'expanded',
      indentWidth: 4,
      prependData: `
        @use '@themes/vars' as vars;
        @use '@themes/breakpoints' as bp;
      `
    }
})