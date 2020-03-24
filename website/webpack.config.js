const webpack = require('webpack');
const path = require('path');

const outputPath = path.resolve(__dirname, 'static')

module.exports = {
    entry: [
        './src/index.tsx'
    ],
    output: {
        filename: 'bundle.js',
        path: outputPath,
        publicPath: '/'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre'
            },
            {
                test: /\.css$/,
                exclude: /\.useable\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    node: { fs: 'empty', net: 'empty' },
    devtool: 'source-map',

    plugins: [
        new webpack.WatchIgnorePlugin([
            /\.js$/,
            /\.d\.ts$/
        ]),
        new webpack.ProgressPlugin()
    ]
};
