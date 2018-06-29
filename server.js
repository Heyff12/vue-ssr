const createApp = require('./app')

const bodyHead = {
  title: 'hello',
  meta: `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="description" content="Vue.js - The Progressive JavaScript Framework">
    `
}

server.get('*', (req, res) => {
  const context = {
    url: req.url
  }
  // const app = createApp(context)

  // renderer.renderToString(app, bodyHead, (err, html) => {
  //   // 处理错误……
  //   if (err) {
  //     res.status(500).end('Internal Server Error')
  //     return
  //   }
  //   res.end(html)
  // })


  createApp(context).then(app => {
    renderer.renderToString(app, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found')
        } else {
          res.status(500).end('Internal Server Error')
        }
      } else {
        res.end(html)
      }
    })
  })
})