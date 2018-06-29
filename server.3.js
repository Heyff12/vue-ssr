const Vue = require('vue')
const server = require('express')()
// const renderer = require('vue-server-renderer').createRenderer()
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

// renderer.renderToString(app, (err, html) => {
//     console.log(html) // html 将是注入应用程序内容的完整页面
// })

const context = {
    title: 'hello',
    meta: `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="description" content="Vue.js - The Progressive JavaScript Framework">
    `
}

server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>访问的 URL 是： {{ url }}</div>`
    })

    renderer.renderToString(app, context, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        //     res.end(`
        //   <!DOCTYPE html>
        //   <html lang="en">
        //     <head><title>Hello</title></head>
        //     <body>${html}</body>
        //   </html>
        // `)
        console.log('打印-----------s--------------');
        console.log(html);
        console.log('打印-----------e--------------');

        res.end(html)
    })
})

server.listen(8080)