
exports.getPostData=function(ctx){
    return new Promise(function(resolve,reject){
        
      try{
        var str=''
        ctx.req.on('data',function(data){
            str +=data
        })

        ctx.req.on('end',function(data){
            resolve(str)
        })
      }catch(err){
        reject(err)
      }
    })
}