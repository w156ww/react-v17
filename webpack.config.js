const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: ["react-hot-loader/patch", path.resolve(__dirname, "src", "index.js")],
    },
    output: {
        filename: "[name].bundle-[fullhash:8].js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom",
            "@": path.resolve(__dirname, "src"),
        },
        extensions: [".js", ".jsx", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                },
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                exclude: /node_modules/,
                loader: "url-loader",
                options: {
                    limit: 10240,
                    name: "assets/img/[name].[hash:8].[ext]",
                },
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                exclude: /node_modules/,
                loader: "file-loader",
                options: {
                    name: "assets/font/[name].[hash:8].[ext]",
                },
            },
            {
                test: /\.(csv|tsv)$/,
                exclude: /node_modules/,
                loader: "csv-loader",
            },
            {
                test: /\.xml$/,
                exclude: /node_modules/,
                loader: "xml-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),
    ],
};
