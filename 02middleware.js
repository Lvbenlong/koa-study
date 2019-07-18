const Koa = require('koa')
const router = require('koa-router')()

const app = new Koa()

app.use(async (ctx, next) => {
  console.log('应用级中间件,任何路由都会执行')
  next()
})
app.use((ctx, next) => {
  next()
  if (ctx.status === 404) {
    ctx.status = 404
    ctx.body = '404040404'
  }
})

app.use((ctx,next)=>{
  console.log(new Date());
  next(); /*当前路由匹配完成以后继续向下匹配*/
})


router.get('/', (ctx, next) => {
  console.log('路由级中间件')
  next()
})

router.get('/', (ctx) => {
  ctx.body = 'Index page1'
})

router.get('/news', (ctx) => {
  ctx.body = 'News page'
})


app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)