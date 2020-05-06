const cssModuleRegex = /\.module\.css$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const cssRegex = /\.css$/;
const sassRegex = /\.(scss|sass)$/;

const cssRule = {
  test: cssRegex,
  exclude: cssModuleRegex,
  use: [
    {
      loader: 'style-loader',
      options: { attributes: { srcType: 'css' } }
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
      }
    },
    {
      loader: 'postcss-loader'
    },
  ]
}
const cssModuleRule = {
  test: cssModuleRegex,
  use: [
    {
      loader: 'style-loader',
      options: { attributes: { srcType: 'cssModule' } }
    },
    {
      loader: 'css-loader',
      options: {
        modules: {
          mode: 'local',
          localIdentName: '[path]_[name]__[local]--[hash:base64:5]',
        },
        importLoaders: 1
      }
    },
    'postcss-loader'
  ]
}
const sassRule = {
  test: sassRegex,
  exclude: sassModuleRegex,
  use: [
    {
      loader: 'style-loader',
      options: { attributes: { srcType: 'sass' } }
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
      }
    },
    {
      loader: 'postcss-loader'
    },
    'sass-loader'
  ]
}
const sassModuleRule = {
  test: sassModuleRegex,
  use: [
    {
      loader: 'style-loader',
      options: { attributes: { srcType: 'sassModule' } }
    },
    {
      loader: 'css-loader',
      options: {
        modules: {
          mode: 'local',
          localIdentName: '[path]_[name]__[local]--[hash:base64:5]',
        },
        importLoaders: 1
      }
    },
    'postcss-loader',
    'sass-loader',
  ],
}
module.exports = [
  cssRule,
  cssModuleRule,
  sassRule,
  sassModuleRule
]