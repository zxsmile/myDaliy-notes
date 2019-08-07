const http= require('http')


 var server=http.createServer(function(req,res){
     res.writeHead(200,{'Content-Type':"text/html:charser='utf-8'"})//设置响应头部
     res.write('hello')
     
     res.end()
 })

server.listen(8081)