var webpack = require('webpack');

var path = require('path');


module.exports = {

    entry: './src/main.js',

    output: {

        path: path.resolve(__dirname, './dist'),


        filename: 'bundle.js'

    },


    module: {

        rules: [

            {

                test: /\.css$/,

                //takes the array from right to left

                use: ['style-loader', 'css-loader']



            }


        ]
    }


};