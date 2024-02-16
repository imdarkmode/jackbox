<script setup lang="ts">
import { ref } from 'vue'
import { useGameSessionStore } from '@/stores/gameSessionStore';
import type * as IClient from '@/types/IClient';

const gameSessionStore = useGameSessionStore()
const gameid = ref('')
const name = ref('')
const gameidRules = [
  (value: number) => {
    if (value) return true
    return 'You must enter a game ID'
  },
  (value: number) => {
    if (value) return true
    return 'Game ID must be 4 characters'
  }
]
const nameRules = [
  (value: string) => {
    if (value) return true
    return 'You must enter a name'
  }
]

function connect() {
  let request: IClient.IJoinGame = {
    username: name.value,
    gameid: gameid.value
  }
  gameSessionStore.joinGame(request)
}

</script>

<template>
  <v-container class="justify-center fill-height">
    <v-sheet rounded :elevation="10" class="join-sheet ">
      <h1>Enter Game ID</h1>
      <v-text-field class="join-field" v-model="name" :rules="nameRules" :counter="10" label="Name" required
        hide-details></v-text-field>
      <v-text-field class="join-field" v-model="gameid" :rules="gameidRules" :counter="10" label="Game ID" required
        hide-details></v-text-field>
      <v-btn block color="primary" @click="connect()">
        Connect
      </v-btn>
    </v-sheet>
  </v-container>
</template>

<style lang="sass">
.join-sheet 
  padding: 20px 
  margin: 20px

.join-field
  margin-bottom: 25px
</style>@/types/interfaces@/types/IServer