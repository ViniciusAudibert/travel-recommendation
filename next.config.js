const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const Dotenv = require('dotenv-webpack')

module.exports = withCSS(
  withSass({
    webpack(config, options) {
      config.plugins.push(new Dotenv())

      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 100000,
          },
        },
      })

      return config
    },
  })
)
