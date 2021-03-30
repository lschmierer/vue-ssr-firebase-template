import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory,
  Router
} from 'vue-router'

// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('./pages/*.vue')

const routes = Object.keys(pages).map((path) => {
  const pathMatch = path.match(/\.\/pages(.*)\.vue$/)
  if (pathMatch != null) {
    const name = pathMatch[1].toLowerCase()
    return {
      path: name === '/home' ? '/' : name,
      component: pages[path] // () => import('./pages/*.vue')
    }
  }
  throw new Error(`error creating route for '${path}'`)
})

routes.push({ path: '/:pathMatch(.*)', component: async () => await import('./pages/404.vue') })

export function createRouter (): Router {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR === true ? createMemoryHistory() : createWebHistory(),
    routes
  })
}
