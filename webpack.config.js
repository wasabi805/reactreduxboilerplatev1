const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports ={

    entry: './src/app.js',
    output: {

        path: `${__dirname}/dist`,
        filename: 'app.bundle.js'
    },

    // Module for application's css
    // NOTE: 'use' and 'loaders can be used interchangeably'
    //NOTE: Also order matters, css starts reading from right-to-left, back-to-front
    module:{
        rules:[
            {test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader', use: ['css-loader', 'sass-loader']
                    }
                )
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
        open: true
    },

    plugins: [

        new HtmlWebpackPlugin({
            title: 'Project Template',
            minify:{collapseWhiteSpace: true},
            hash: true,
            template: './src/ejs/index.ejs'
        }),

        new ExtractTextPlugin("styles.css")

    ]
};

