module.exports = ({ file, options, env }) => ({
  parser: false,
  plugins: {
    'postcss-cssnext': {},
    autoprefixer: {},
    cssnano: env === 'production' ? {} : false,
  },
})
