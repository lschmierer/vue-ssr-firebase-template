<!-- eslint-disable vue/no-v-html -->
<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineAsyncComponent(async () => {
  return defineComponent({
    name: 'Static',
    setup () {
      if (import.meta.env.SSR !== true) {
        // on the client side return a promise that never resolves
        // this results in the component never getting hydrated
        return new Promise(() => {})
      }
    }
  })
})
</script>
