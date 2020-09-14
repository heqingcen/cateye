module.exports = {
  publicPath: './',
  devServer:{
    disableHostCheck: true
  }
}
// 配置@相关路径
const path = require('path');
function resolve(dir) {
return path.join(__dirname, dir)
}
module.exports = {
chainWebpack: (config)=>{
config.resolve.alias
.set('@', resolve('src'))
.set('@a',resolve('src/assets'))
.set('@c',resolve('src/components'))
.set('@r',resolve('src/router'))
}
}