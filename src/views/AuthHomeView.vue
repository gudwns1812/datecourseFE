<template>
  <div class="auth-home">
    <header class="header">
      <nav class="navbar">
        <h1><router-link to="/" class="logo">🎯 데이트코스</router-link></h1>
        <div class="nav-links">
          <button class="nav-btn" @click="handleLogout">로그아웃</button>
        </div>
      </nav>
    </header>

    <main class="main-content">
      <h2>환영합니다, {{ username }}님!</h2>
      <p></p>
      <div class="actions">
        <button @click="$router.push('/random-course')" class="primary">랜덤 코스 시작</button>
      </div>
    </main>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/auth'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'AuthHomeView',
  setup() {
    const auth = useAuthStore()
    const router = useRouter()
    const username = computed(() => auth.username || '회원')

    const handleLogout = () => {
      auth.logout()
      router.push('/')
    }

    return {
      username,
      handleLogout
    }
  }
}
</script>

<style scoped>
.main-content { max-width:900px; margin:3rem auto; padding:1rem; text-align:center }
.primary { background:#667eea; color:white; padding:0.8rem 1.2rem; border:none; border-radius:6px; cursor:pointer }
</style>
