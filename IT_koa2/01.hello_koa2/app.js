const koa = require('koa')

const app = new koa()

app.use(async (ctx) =>{
    ctx.response.body = 'hello koa2'
})


app.listen(8081)