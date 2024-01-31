import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateGameView.vue'
import JoinView from '../views/JoinGameView.vue'
import LobbyView from '@/views/LobbyView.vue'
import TestGameView from "@/views/games/TestGameView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
    },
    {
      path: '/join',
      name: 'join',
      component: JoinView
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: LobbyView
    },
    {
      path: '/test_game',
      name: 'test_game',
      component: TestGameView
    },
  ]
})

export default router
