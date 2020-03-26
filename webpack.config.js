const path = require('path');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, 'server/public'),
        filename: 'bundle.js'
      },
    resolve: {
    extensions: ['.js', '.jsx']
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader')
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
      contentBase: './server/public'
    }
}