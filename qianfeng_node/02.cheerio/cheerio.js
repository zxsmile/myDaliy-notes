const http = require('http')
const cheerio = require('cheerio')

http.get('http://piao.qunar.com/ticket/detail_777857128.html?st=a3clM0QlRTUlOEMlOTclRTQlQkElQUMlMjZpZCUzRDIyNjclMjZ0eXBlJTNEMCUyNmlkeCUzRDElMjZxdCUzRHJlZ2lvbiUyNmFwayUzRDIlMjZzYyUzRFdXVyUyNmFidHJhY2UlM0Rid2QlNDAlRTUlQTQlOTYlRTUlOUMlQjAlMjZ1ciUzRCVFOCVBNSVCRiVFNSVBRSU4OSUyNmxyJTNEJUU4JUE1JUJGJUU1JUFFJTg5JTI2ZnQlM0QlN0IlN0Q%3D#from=',function(req,res){
    var html=''
    req.on('data',function(data){
        html+=data
    })
    req.on('end',function(){
       let $ = cheerio.load(html)
       //console.log(html)
       $('.mp-tickets').each((index,el)=>{
           console.log(el)
       })
    })
})