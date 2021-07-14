import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PersonsList from '../views/PersonsList.vue'
import EditPerson from '../views/EditPerson.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/persons',
    name: 'Persons',
    component: PersonsList
  },
  {
    path: '/edit/:id',
    name: 'EditPerson',
    component: EditPerson,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
