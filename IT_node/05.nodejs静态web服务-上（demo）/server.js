const http=require('http')
const fs = require('fs')
const path = require('path')

var mimeModel=require('./model/getmime.js'); 

var server = http.createServer(function(req,res){
    var pathName = req.url
    if(pathName==='/'){
        pathName='/index.html'
    }
var extname=path.extname(pathName);
if(pathName!=='/favicon.ico'){
    fs.readFile('static'+pathName,function(err,data){
        if(err){
            console.log('404')
            fs.readFile('static/404.html',function(err,data){
                res.writeHead(404,{'Content-Type':"text/html;charset='utf-8'"})
                res.write(data)
                res.end()
            })
        }else{
            var mime = mimeModel.getMime(extname)
            res.writeHead(200,{'Content-Type':""+mime+";charset='utf-8'"})
            res.write(data)
            res.end()
        }
    })
}
    
})

server.listen(8081)