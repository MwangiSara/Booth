import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import topicsPhotos from '../views/TopicsPhotos.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
