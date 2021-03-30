import express, { Express, Request, Response } from 'express'
import compression from 'compression'
import { render } from '../src/ssr'
import template from '../dist/client/src/_index.html?raw'
import manifest from '../dist/client/ssr-manifest.json'

export async function createSSRHandler (): Promise<Express> {
  const app = express()
  app.use(compression())

  app.all('*', (req: Request, res: Response) => {
    const url = req.originalUrl

    render(url, manifest).then(([appHtml, preloadLinks]) => {
      const html = template
        .replace('<!--preload-links-->', preloadLinks)
        .replace(/[ \t\n\r]*<!--app-html-->[ \t\n\r]*/, appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    }).catch((err) => {
      console.log(err.stack)
      res.status(500).end(err.stack)
    })
  })

  return app
}
