const path = require("path");
require("babel-polyfill")
module.exports = {
    entry: ['babel-polyfill', "./index.js"],

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".js", ".jsx", "*"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["@babel/env", "@babel/react"],
                    },
                },
            },
        ],
    },
};
