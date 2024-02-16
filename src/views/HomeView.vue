<script setup lang="ts">
</script>

<template>
  <v-container class="justify-center fill-height">
    <div>
      <h1 style="text-align: center;">Welcome to Jackbox Game</h1>
      <div class="home-container">
        <v-btn color="primary" class="home-btn" to="create">Create Game</v-btn>
        <v-btn color="primary" class="home-btn" to="join">Join Game</v-btn>
      </div>
    </div>
  </v-container>
</template>

<style scoped lang="sass">
.home-container 
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

.home-btn
  margin: 10px
  height: 200px !important
  width: 200px
</style>
