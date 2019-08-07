const http= require('http')
const url = require('url')

 var server=http.createServer(function(req,res){
     res.writeHead(200,{'Content-Type':"text/html:charser='utf-8'"})
     res.write('hell')
     //req返回浏览器响应信息
     //req.url获取浏览器url输入的信息
     //console.log(req.url)
     if(req.url!=='/favicon.ico'){
         //http://localhost:8081/news?aid=1&age=18
         //console.log(req.url) //返回 /news?aid=1&age=18
         var result = url.parse(req.url,true)//第一个参数是地址，第二个参数是true的话表示把get传值转换成对象
         console.log(result.query.aid)//获取url的get传值
     }
     res.end()
 })

server.listen(8081)