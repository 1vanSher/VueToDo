import ToDoDetail from '@/views/ToDoDetail.vue'
import ToDoList from '@/views/ToDoList.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', redirect: '/todo' },
  { path: '/todo', component: ToDoList },
  { path: '/todo/:id', component: ToDoDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export {router}