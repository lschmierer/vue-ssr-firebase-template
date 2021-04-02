import { App as _App, createSSRApp } from 'vue'
import { Router } from 'vue-router'

import { createRouter } from './router'

import App from './App.vue'

export function createApp (): {app: _App, router: Router} {
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  return { app, router }
}
