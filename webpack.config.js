const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    devServer: {
        // contentBase: path.resolve(__dirname, './src'),
        historyApiFallback: true
    },
    entry: {
        popup: path.resolve(__dirname, "./src/index-popup.js"),
        settings: path.resolve(__dirname, "./src/index-settings.js"),
        foreground: path.resolve(__dirname, "./src/index-foreground.js")
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                {
                                    'plugins': ['@babel/plugin-proposal-class-properties']
                                }
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'popup.html',
            template: 'src/entry-popup.html',
            chunks: ['popup']
        }),
        new HtmlWebpackPlugin({
            filename: 'settings.html',
            template: 'src/entry-settings.html',
            chunks: ['settings']
        }),
        new HtmlWebpackPlugin({
            filename: 'foreground.html',
            template: 'src/entry-foreground.html',
            chunks: ['foreground']
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/manifest.json', to: '[name].[ext]' },
                { from: 'src/background.js', to: '[name].[ext]' },
                { from: 'src/inject_script.js', to: '[name].[ext]' },
                { from: 'src/*.png', to: '[name].[ext]' }
            ]
        }),
        new CleanWebpackPlugin()
    ]
}