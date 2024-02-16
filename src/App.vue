<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app class="app">
    <RouterView />
  </v-app>
</template>

<style scoped lang="sass">
.app
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
</style>
