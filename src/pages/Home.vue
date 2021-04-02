<template>
  <img
    alt="Vue logo"
    src="../assets/logo.png"
  >
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + Firebase" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  }
})
</script>
