<template>
  <h1>{{ msg }}</h1>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  async setup () {
    return {
      msg: 'About'
    }
  }
})
</script>

<style scoped>
h1 {
  color: red;
}
</style>
