
//引入http模块
var http=require('http');

//fs模块

var fs=require('fs');

//path模块
var path=require('path');  /*nodejs自带的模块*/


var mimeModel=require('./model/getmime.js');

//console.log(mime.getMime('.css'));   //获取文件类型

http.createServer(function(req,res){



	//http://localhost:8001/news.html    /news.html
	//http://localhost:8001/index.html    /index.html

	//css/dmb.bottom.css

	var pathname=req.url;
	if(pathname=='/'){
		pathname='/index.html'; /*默认加载的首页*/
	}

	//获取文件的后缀名
	var extname=path.extname(pathname);

	if(pathname!='/favicon.ico'){  /*过滤请求favicon.ico*/
		//console.log(pathname);
		//文件操作获取 static下面的index.html

		fs.readFile('static/'+pathname,function(err,data){

			if(err){  /*么有这个文件*/

				console.log('404');

				fs.readFile('static/404.html',function(error,data404){
					if(error){
						console.log(error);
					}
					res.writeHead(404,{"Content-Type":"text/html;charset='utf-8'"});
					res.write(data404);
					res.end(); /*结束响应*/
				})

			}else{ /*返回这个文件*/

				var mime=mimeModel.getMime(extname);  /*获取文件类型*/
				res.writeHead(200,{"Content-Type":""+mime+";charset='utf-8'"});
				res.write(data);
				res.end(); /*结束响应*/
			}


		})


	}



}).listen(8001);




