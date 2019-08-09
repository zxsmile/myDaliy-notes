const koa = require('koa')
const router = require('koa-router')()
const views = require('koa-views')
const  common = require('./module/common_test.js')
const bodyParser = require('koa-bodyparser')

var app = new koa()
app.use(views('views',{
    extension:'ejs'
}))
app.use(bodyParser())

router.get('/',async (ctx)=>{
    ctx.body='我是首页'
})

router.get('/login',async (ctx)=>{
   await ctx.render('index')
})

router.post('/doAdd',async (ctx)=>{
    // var data = await common.getPostData(ctx)
    // ctx.body=data
    ctx.body = ctx.request.body
})


app.use(router.routes())
app.use(router.allowedMethods())
app.listen(8081)