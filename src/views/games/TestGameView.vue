<script setup lang="ts">
import { useGameSessionStore } from '@/stores/gameSessionStore';
import router from '@/router';

const gameSessionStore = useGameSessionStore();

function leave() {
  gameSessionStore.leaveGame();
  router.push({ name: 'home' });
}
</script>

<template>
  <div class="">
    <h1>{{ gameSessionStore.gameType }}</h1>
    <v-btn @click="leave()">Leave</v-btn>
  </div>
</template>

<style lang="sass">
</style>
