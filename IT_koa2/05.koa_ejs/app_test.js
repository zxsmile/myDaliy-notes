const koa = require('koa')
const router = require('koa-router')()
const views = require('koa-views')

var app = new koa()
app.use(views('views',{
    extension:'ejs'
}))

app.use(async (ctx,next)=>{
 ctx.state.userinfo='张三'
 await next()
})

router.get('/',async (ctx)=>{
    let title='你好ejs'
    await ctx.render('index',{
        title:title
    })
})

router.get('/news',async (ctx)=>{r
    ctx.body='我是新闻页'
})

router.get('/login',async (ctx)=>{
    ctx.body= '我是登录页面'
})
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(8081)