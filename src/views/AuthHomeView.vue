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
/* 링크 특유의 색상과 밑줄을 제거 */
.logo {
  text-decoration: none; /* 밑줄 제거 */
  color: inherit;       /* 부모 요소(h1)의 색상을 그대로 상속 */
  display: inline-block; /* 클릭 영역 확보 */
}

/* 마우스를 올렸을 때도 색상이 변하지 않게 하려면 */
.logo:hover {
  color: inherit;
}
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem 0;
}
.navbar {
  display:flex;
  justify-content:space-between;
  align-items:center;
  max-width:1200px;
  margin:0 auto;
  padding:0 2rem;
}
.logo { color: white; font-weight:700 }
.nav-btn { background: white; border:none; padding:0.5rem 1rem; border-radius:6px; cursor:pointer }
.main-content { max-width:900px; margin:3rem auto; padding:1rem; text-align:center }
.primary { background:#667eea; color:white; padding:0.8rem 1.2rem; border:none; border-radius:6px; cursor:pointer }
</style>
