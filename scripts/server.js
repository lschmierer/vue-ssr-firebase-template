// @ts-check
const fs = require('fs')
const path = require('path')
const express = require('express')

async function createDevServer () {
  const resolve = (p) => path.resolve(__dirname, p)

  const app = express()

  const vite = await require('vite').createServer({
    logLevel: 'info',
    server: {
      middlewareMode: true
    }
  })
  // use vite's connect instance as middleware
  app.use(vite.middlewares)

  app.all('*', async (req, res) => {
    try {
      const url = req.originalUrl

      // always read fresh template in dev
      let template = fs.readFileSync(resolve('../index.html'), 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      const render = (await vite.ssrLoadModule('./src/server')).render

      const [appHtml, preloadLinks] = await render(url, {})

      const html = template
        .replace(/[ \n\r\t]*<!--preload-links-->[ \n\r\t]*/, preloadLinks)
        .replace(/[ \n\r\t]*<!--app-html-->[ \n\r\t]*/, appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      vite.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })

  return { app, vite }
}

createDevServer().then(({ app }) =>
  app.listen(3000, () => {
    console.log('http://localhost:3000')
  })
)
