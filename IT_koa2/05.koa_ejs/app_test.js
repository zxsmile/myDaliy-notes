const koa = require('koa')
const router = require('koa-router')()

var app = new koa()

app.use(async (ctx,next)=>{
 await next()
 if(ctx.status===404){
   
         ctx.status = 404;
         ctx.body='这是一个404页面'
     
 }else{
     console.log(ctx.url)
 }
})

router.get('/',async (ctx)=>{
    ctx.body='首页'
})

router.get('/news',async (ctx)=>{
    ctx.body='我是新闻页'
})

router.get('/login',async (ctx)=>{
    ctx.body= '我是登录页面'
})
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(8081)