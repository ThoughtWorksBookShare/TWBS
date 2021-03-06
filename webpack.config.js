let path = require("path");
module.exports = {
    entry: "./public/js/entry.js",
    output: {
        publicPath: '/',
        path: path.resolve(__dirname + "/public/dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]'
            }
        ]
    }
};