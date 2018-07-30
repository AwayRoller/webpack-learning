var webpack = require('webpack');

var path = require('path');

var inProd = (process.env.NODE_ENV === 'production');


module.exports = {

    entry: './src/main.js',

    output: {

        path: path.resolve(__dirname, './dist'),


        filename: 'bundle.js'

    },


    module: {

        rules: [

            {

              test: /\.s[ac]ss$/,

              //compile sass to css but nothing more
              //use: ['sass-loader']

              //I need a css and a style loader too
              use: ['style-loader', 'css-loader', 'sass-loader']

            },

            {

                test: /\.css$/,

                //takes the array from right to left

                use: ['style-loader', 'css-loader']

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





    ]


};


if (inProd) {

    module.exports.plugins.push(

        //new webpack.optimize.optimization.minimize

    );

}