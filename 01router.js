const Koa = require('koa')
const router = require('koa-router')()

const app = new Koa()

app.use(router.routes())
app.use(router.allowedMethods())

router.get('/', (ctx) => {
  ctx.body = 'Index page'
})

router.get('/news', (ctx) => {
  ctx.body = 'News page'
})

// koa get传值 http://www.baidu.com/newscontent?a=123&b=456
router.get('/newscontent', (ctx) => {
  console.log(ctx.query);
  console.log(ctx.querystring);
  console.log(ctx.url);
  console.log(ctx.request);
  console.log(ctx.body);
  let url = ctx.url
  let query = ctx.query
  let querystring = ctx.querystring
  let request = ctx.request
  let req_querystring = request.querystring
  let req_query = request.query
  ctx.body = {
    ctx,
    url,
    query,
    querystring,
    req_querystring,
    req_query,
    request
  }
})

// koa 动态路由 http://www.baidu.com/product/123
router.get('/product/:aid', (ctx) => {
  console.log(ctx.params)
  ctx.body = {
    ctx
  }
})



app.listen(3000)