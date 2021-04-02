import { createApp } from '../main'

const { app, router } = createApp()
router.isReady().then(() => {
  const instance = app.mount('#app')
  app._container._vnode = instance.$.vnode
}).catch((err) => { throw err })
