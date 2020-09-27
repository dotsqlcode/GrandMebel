const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;


module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000
    },
    devtool: isDev ? 'cheap-inline-module-source-map' : false,
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/about.html'),
            filename: 'about.html'
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/fabrics.html'),
            filename: 'fabrics.html'
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/mechanisms.html'),
            filename: 'mechanisms.html'
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/shops.html'),
            filename: 'shops.html'
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/cooperation.html'),
            filename: 'cooperation.html'
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/service.html'),
            filename: 'service.html'
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/catalog.html'),
            filename: 'catalog.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDev,
                        } 
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: isDev,
                        }  
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: isDev,
                        } 
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDev,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: isDev,
                        }  
                    },
                ]
            },
            {
                test: /\.(gif|png|jpe?g)$/,
                exclude: path.resolve(__dirname, 'img/icons'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        }
                    },
                    // {
                    //     loader: 'image-webpack-loader',
                    //     options: {
                    //         mozjpeg: {
                    //           progressive: true,
                    //           quality: 80,
                    //           enabled: false
                    //         },
                    //         optipng: {
                    //           enabled: false,
                    //         },
                    //         pngquant: {
                    //           enabled: false,
                    //           quality: [0.65, 0.90],
                    //           speed: 4
                    //         },
                    //         gifsicle: {
                    //           interlaced: false,
                    //         },
                    //         webp: {
                    //           quality: 75
                    //         }
                    //     }
                    // }
                ]
            },
            {
                test: /\.svg$/,
                include: [
                    path.resolve(__dirname, 'src/img/icons')
                ],
                use: [
                    {
                        loader: 'svg-sprite-loader',
                    }
                ]
            },
        ]
    }
}