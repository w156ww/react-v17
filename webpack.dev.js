const { merge } = require("webpack-merge");
const base = require("./webpack.config.js");
const path = require("path");
const portfinder = require('portfinder');


module.exports = new Promise((resolve, reject) => {
    portfinder.getPort({port: 8081, stopPort: 9999}, (err, port) => {
        if (err) {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject(8081)
        } else {
            console.log('项目运行端口：', port)
            resolve(merge(base, {
                mode: "development",
                devtool: "inline-source-map",
                devServer: {
                    contentBase: path.resolve(__dirname, "public"),
                    compress: true, // gzip 压缩
                    host: "0.0.0.0", // 设置为 0.0.0.0, 服务器外部可访问
                    port: port,
                    hot: true,
                    open: "http://127.0.0.1:8081",
                    // inline: true,
                    // logLevel: "silent",
                    clientLogLevel: "silent", // 内联模式下，关掉浏览器控制台的打印信息，新版本 node warn 无效
                    // historyApiFallback: true,
                },
                module: {
                    rules: [
                        {
                            test: /\.css$/i,
                            exclude: /node_moudles/,
                            use: ["style-loader", "css-loader"],
                        },
                        {
                            test: /\.s[ac]ss$/,
                            exclude: /node_modules/,
                            use: ["style-loader", "css-loader", "sass-loader"],
                        },
                        {
                            test: /\.less$/i,
                            exclude: /node_modules/,
                            use: ["style-loader", "css-loader", "less-loader"],
                        },
                    ],
                },
            }))
        }
    })
})
