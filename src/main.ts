import { createSSRApp, App as _App } from 'vue'
import { Router } from 'vue-router'

import { createRouter } from './router'
import App from './App.vue'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp (): {app: _App, router: Router} {
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  return { app, router }
}
