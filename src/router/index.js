import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import RandomCourseView from '../views/RandomCourseView.vue'
import AuthHomeView from '../views/AuthHomeView.vue'
import { useAuthStore } from '../stores/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/random-course',
    name: 'RandomCourse',
    component: RandomCourseView,
    meta: { requiresAuth: true }
  },
  {
    path: '/home-auth',
    name: 'AuthHome',
    component: AuthHomeView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  if (!auth.initialized) return next(false)

  if (to.meta.requiresAuth && !auth.isLogin) {
    return next('/login')
  }

  console.log('isLogin:', auth.isLogin)
  if (to.path === '/' && auth.isLogin) {
    return next('/home-auth')
  }

  next()
})

export default router;