import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import topicsPhotos from '../views/TopicsPhotos.vue'
import RickMortyHome from '../views/RickMortyHome.vue'
import RickMortyPhotos from '../views/RickMortyPhotos.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true
  },
  {
    path: '/topicsPhotos/:slug/photos',
    name: 'topicsPhotos',
    component: topicsPhotos,
    props: true
  },
  {
    path: '/RickMortyHome',
    name: 'RickMortyHome',
    component: RickMortyHome,
    props: true
  },
  {
    path: '/RickMortyPhotos/:name',
    name: 'RickMortyPhotos',
    component: RickMortyPhotos,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
