<template>
  <div class="auth-home">
    <AppHeader />

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
import AppHeader from '../components/AppHeader.vue'
import { useAuthStore } from '../stores/auth'
import { computed } from 'vue'

export default {
  name: 'AuthHomeView',
  components: {
    AppHeader
  },
  setup() {
    const auth = useAuthStore()
    const username = computed(() => auth.username || '회원')

    return {
      username
    }
  }
}
</script>

<style scoped>
.main-content { max-width:900px; margin:3rem auto; padding:1rem; text-align:center }
.primary { background:#667eea; color:white; padding:0.8rem 1.2rem; border:none; border-radius:6px; cursor:pointer }
</style>
