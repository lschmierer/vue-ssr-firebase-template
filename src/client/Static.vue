<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Static',
  setup () {
    if (import.meta.env.SSR === false) {
      // on the client side return a promise that never resolves
      // this results in the component never getting hydrated
      return new Promise(() => {})
    }
  }
})
</script>
