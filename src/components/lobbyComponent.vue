<script setup lang="ts">
import { useGameSessionStore } from '@/stores/gameSessionStore';
import { toRef } from 'vue';
import router from '@/router';

const gameSessionStore = useGameSessionStore();
const gameid = toRef(gameSessionStore, 'gameid');

function start() {
  gameSessionStore.startGame();
}

function leave() {
  console.log('leaving')
  gameSessionStore.leaveGame();
  router.push({ name: 'home' });
}
</script>

<template>
  <v-container class="justify-center fill-height">
    <v-card class="lobby-card" rounded elevation="10">
      <v-card-title>Game code: {{ gameid }}</v-card-title>
      <v-card-subtitle>{{ gameSessionStore.gameType }}</v-card-subtitle>
      <v-divider></v-divider>
      <v-card-text>
        <h2>Players</h2>
        <br>
        <ul>
          <li v-for="player in gameSessionStore.players">{{ player }}</li>
        </ul>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="start()">Start</v-btn>
        <v-btn @click="leave()">Leave</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped lang="sass">
.lobby-card
  padding: 20px
  margin: 20px
</style>