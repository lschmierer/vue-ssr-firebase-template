import { App as _App, createSSRApp } from 'vue'
import { Router } from 'vue-router'

import FirestoreRepository from './repositories/FirestoreRepository'

import { createRouter } from './router'
import { createStore } from './store'

import App from './App.vue'

export function createApp (): {app: _App, router: Router} {
  const app = createSSRApp(App)
  const router = createRouter()
  const store = createStore(new FirestoreRepository())
  app.use(router)
  app.use(store)
  return { app, router }
}
