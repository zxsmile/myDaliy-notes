/* npm install md5-node

  注意：以后安装模块的时候我们要把这个模块写入到package.json这个配置文件
       
       -- npm install md5-node --save    或者   npm install md5-node --save-dev
       
       --   npm install md5-node --save       写入到package.json 里面的  dependencies
          
           --- dependencie 配置当前程序所依赖的其他包
       
       --npm install md5-node --save-dev   写入到package.json 里面的  devDependencies
    
          --- devDependencie 配置当前程序所依赖的其他包，只会下载模块，而不下载这些模块的测试和文档框架


      --这样在package.json所在文件夹中使用npm install下载依赖时，会把dependencies或devDependencies中所以的模块都会下载下来

 cnpm install  表示安装package.json 里面的依赖


 有时候的话 npm install 模块

 下载不下来  或者很慢

 如果安装完成淘宝镜像就可以用 cnpm 安装

/* npm install 模块   /  cnpm install 模块




var md5=require('md5-node');

console.log(md5('123456'));



var sd = require('silly-datetime');

var d=sd.format(new Date(), 'YYYY-MM-DD');

console.log(d);
