<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a
      href="https://code.visualstudio.com/"
      target="_blank"
    >VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >Vetur</a>
    or
    <a
      href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
      target="_blank"
    >ESLint</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >Vite Docs</a> |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Docs</a>
  </p>

  <button @click="increment">
    count is: {{ count }}
  </button><br>

  (dynamic)<br>
  <Static>
    <button @click="increment">
      count is: {{ count }}
    </button><br>
    (static)
  </Static>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { useStore } from '../store'

import Static from '../client/Static.vue'

export default defineComponent({
  components: { Static },
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  async setup () {
    const store = useStore()

    await store.dispatch('counter/load')

    return {
      count: computed(() => store.state.counter.count),
      increment: () => store.dispatch('counter/increment')
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
