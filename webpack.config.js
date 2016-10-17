const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssnano = require('cssnano');

const webpackConfig = {
  entry   : './src/app.js',
  name    : 'app',
  target  : 'web',
  devtool : 'source-map',
  output  : {
    path: './docs/',
    filename: `app.[chunkhash].js`,
  },
  resolve : {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions : ['', '.js', '.jsx', '.json']
  },
  module : {}
};

webpackConfig.plugins = [
  new HtmlWebpackPlugin({
    title    : 'Drew Butler | Techincal Advisor and Website Developer',
    template : './src/index.html',
    hash     : false,
    favicon  : null, //paths.client('static/favicon.ico'),
    filename : 'index.html',
    inject   : 'body',
    minify   : {
      collapseWhitespace : true
    }
  })
];

webpackConfig.module.loaders = [{
  test    : /\.(js|jsx)$/,
  exclude : /node_modules/,
  loader  : 'babel',
  query   : {
    cacheDirectory : true,
    presets        : ['es2015', 'react']
  }
}, {
  test   : /\.json$/,
  loader : 'json'
}];

webpackConfig.module.loaders.push({
  test    : /\.scss$/,
  exclude : null,
  loaders : [
    'style',
    'css?sourceMap&-minimize',
    'postcss',
    'sass?sourceMap'
  ]
});


webpackConfig.module.loaders.push({
  test    : /\.css$/,
  exclude : null,
  loaders : [
    'style',
    'css?sourceMap&-minimize',
    'postcss'
  ]
});

webpackConfig.sassLoader = {
  includePaths : './src/styles'
};

webpackConfig.postcss = [
  cssnano({
    autoprefixer : {
      add      : true,
      remove   : true,
      browsers : ['last 2 versions']
    },
    discardComments : {
      removeAll : true
    },
    discardUnused : false,
    mergeIdents   : false,
    reduceIdents  : false,
    safe          : true
  })
];

webpackConfig.module.loaders.push(
  { test: /\.woff(\?.*)?$/,  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
  { test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
  { test: /\.otf(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype' },
  { test: /\.ttf(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
  { test: /\.eot(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]' },
  { test: /\.svg(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
  { test: /\.(png|jpg)$/,    loader: 'url?limit=8192&name=img/[name].[ext]' }
);

module.exports = webpackConfig;
