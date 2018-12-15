const path = require("path");
const HtmlWepackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 7000;

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
            test:/\.js$/,
            exclude: /node_modules/,
            use:{
                loader: "babel-loader"
            }
        },
        {
            test:/\.s?css$/,
            use:["style-loader","css-loader","sass-loader"]
        }
    ]
    },
    plugins:[
        new HtmlWepackPlugin({
            template: "./public/index.html"
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
    }
}