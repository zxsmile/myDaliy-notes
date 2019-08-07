const fs = require('fs')

//1.判断服务器上面有没有upload目录。没有创建这个目录。   （图片上传）

// fs.stat('upload',function(err,stats){
//     if(err){
//        fs.mkdir('upload',function(err){
//            if(err){
//                console.log(err)
//                return false
//            }
//            console.log('创建成功')
//        })
//     }else{
//          console.log('目录已存在')
//          console.log(stats.isDirectory())
//     }
   
// })

//2. 找出html目录下面的所有的目录，然后打印出来
//  var filesArr = [];
// fs.readdir('html',function(err,files){
//     if(err){
//         console.log(err)
//         return false
//     }else{
       
//         for(let i=0;i<files.length;i++){
//             fs.stat('html/'+files[i],function(err,stats){
//                 if(stats.isDirectory()){
//                    filesArr.push(files[i])
//                 }
                
//             })
//             console.log(filesArr)//可以取到filesArr
//         }
//         console.log(filesArr)//取不到filesArr
//     }
// })

var filesArr=[]
fs.readdir('html',function(err,files){
    if(err){
        console.log(err)
        return false
    }else{
        (function getfile(i){
            
            if(i==files.length){
                console.log('目录:')
                console.log(filesArr)
                return false
            }
           fs.stat('html/'+files[i],function(err,stats){
            
            if(stats.isDirectory()){
                 filesArr.push(files[i])
           }
             getfile(++i)            
           })
        })(0)
    }
})