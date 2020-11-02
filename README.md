#### 目的
* 从0搭建环境，熟悉生态和各类 webpack 配置
* 可以了解各个插件，各个模块的功能，无论在开发模式还是打包模式，都能清楚的知道经过了那些插件的转换
* 脱离脚手架的限制。

#### 项目
react v17.0 + webpack 5 

#### 日志
2020/10/23
* entry 入口配置完成
* output 输出配置完成
* resolve.alias 别名添加
* devtool 开发模式采用 `inline-source-map`
* devServer 添加 port、hot、contentBase、compress
* module 添加 css jsx file csv xml 等解析 loader
* optimization 添加 moduleIds 为 named
* 插件添加 HtmlWebpackPlugin  MiniCssExtractPlugin webpack.HotModuleReplacementPlugin
* 添加 react-hot-loader 插件，支持 react 的模块热替换（HMR），添加@hot-loader/react-dom 插件，支持 hooks 组件 的模块热替换
* 命令行添加 --progress ，支持运行和打包时进度显示

2020/10/26
* 分离 webpack.config.js 配置，分为 webpack.dev 和 webpack.prod
* 添加全局 DefinePlugin 配置，添加 process.env.NODE_NEV 变量

2020/10/27
* 自动对 js jsx json 文件补充扩展名
* 开发模式不再自动清除dist文件
* devServer 添加 host: 0.0.0.0 配置，服务器外部可访问

2020/10/28
* 删除 sideEffect: false 配置，修复运行和打包 css 文件没有效果的问题
* 添加 postcss 编译工具，添加 postcss-preset-env postcss 插件，打包自动添加前缀
* 添加 scss/less 配置
* devServer 添加 `logLevel: silent` `clientLogLevel: silent` 配置，禁止在浏览器控制台打印编译信息
* devServer 添加 `historyApiFallback` 配置，在 history 模式下，任意 404 响应都会跳转 index.html
* devServer 将 `open: true` 修改为 `open: 'http://127.0.0.1:8080'`
* 添加 eslint 设置，采用 alloy/react 规则
* 添加 css module 配置
* 删除 start 命令时的 --progress，否则在开发模式下，控制台会打印出进度
* 添加 redux react-redux 包

2020/11/2
* 添加 dev.sh build.sh 自动化shell脚本



#### 运行
##### 常规方式
```
yarn start
// or
npm run start
```

##### shell脚本
```
sh dev.sh
```

#### 打包
##### 常规方式
```
yarn build
or
npm run build
```

##### shell脚本
```
sh build.sh
```




