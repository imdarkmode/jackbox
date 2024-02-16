<script setup lang="ts">
import { ref } from 'vue'
import { useGameSessionStore } from '@/stores/gameSessionStore'
import type * as IClient from '@/types/IClient';

const gameSessionStore = useGameSessionStore()
const gameTypes = ['Lashquip', 'Murder Trivia Party', 'Anotha Game', 'Subscribe!']
const name = ref('')
const nameRules = [
  (value: string) => {
    if (value) return true
    return 'You must enter a name'
  }
]

function connect(gameType: string) {
  let request: IClient.ICreateGame = {
    username: name.value,
    gameType: gameType
  }
  gameSessionStore.createGame(request)
}

</script>

<template>
  <v-container class="justify-center fill-height">
    <v-sheet rounded :elevation="10" class="create-sheet">
      <h1 style="text-align: center;">Choose a Game</h1>
      <v-form>
        <v-text-field class="name-field" v-model="name" :counter="10" :rules="nameRules" label="Name" required
          hide-details></v-text-field>
        <v-btn v-for="gameType in gameTypes" class="create-btn" block color="primary" @click="connect(gameType)">
          {{ gameType }}
        </v-btn>
      </v-form>
    </v-sheet>
  </v-container>
</template>

<style lang="sass">
.create-sheet 
  padding: 20px 
  margin: 20px

.create-btn
  height: 150px !important
  width: 150px
  margin-bottom: 15px

.name-field
  margin-bottom: 25px

</style>@/types/interfaces@/types/IServer