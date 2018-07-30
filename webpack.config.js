var webpack = require('webpack');

var path = require('path');

var inProd = (process.env.NODE_ENV === 'production');

var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {

    entry: {


        app: [


            './src/main.js',

            './src//main.scss'

        ]



    },

    output: {

        path: path.resolve(__dirname, './dist'),


        filename: '[name].js'

    },


    module: {

        rules: [

            {

              test: /\.s[ac]ss$/,

              use: ExtractTextPlugin.extract({

                  /*use: [
                      {

                          loader: 'css-loader',

                          options: { url: false }

                      },

                      'sass-loader'

                  ],
                   */

                  //use: ['raw-loader', 'sass-loader'],

                  use: ['css-loader', 'sass-loader'],

                  fallback: 'style-loader'

              })

            },

            {

                test: /\.png|jpe?g|gif$/,

                loader: 'file-loader',

                options: {

                    name:'images/[name].[ext]'

                }


            },




            ///Babel
            {
                test: /\.js$/,

                exclude: /node_modules/,

                loader: "babel-loader"

            }


        ]
    },





    plugins: [

        new ExtractTextPlugin('[name].css')

        /*new webpack.LoaderOptionsPlugin({

            minimize: inProd

        })*/


    ]


};


if (inProd) {

    module.exports.plugins.push(

        //new webpack.optimize.optimization.minimize

    );

}