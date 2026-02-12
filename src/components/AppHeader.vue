<template>
  <header class="app-header">
    <nav class="navbar">
      <h1><router-link to="/" class="logo">🎯 데이트코스</router-link></h1>
      <div class="nav-links">
        <template v-if="isHomePage">
          <!-- 홈화면: 항상 로그인/회원가입 -->
          <router-link to="/login" class="nav-btn login-btn">로그인</router-link>
          <router-link to="/register" class="nav-btn signup-btn">회원가입</router-link>
        </template>
        <template v-else>
          <!-- 다른 페이지: 마이페이지/로그아웃 -->
          <router-link to="/home-auth" class="nav-btn">마이페이지</router-link>
          <button class="nav-btn logout-btn" @click="handleLogout">로그아웃</button>
        </template>
      </div>
    </nav>
  </header>
</template>

<script>
import { useAuthStore } from '../stores/auth'
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'AppHeader',
  setup() {
    const auth = useAuthStore()
    const router = useRouter()
    const route = useRoute()
    
    const isAuthenticated = computed(() => auth.token !== null)
    const isHomePage = computed(() => route.path === '/')

    const handleLogout = () => {
      auth.logout()
      router.push('/')
    }

    return {
      isAuthenticated,
      isHomePage,
      handleLogout
    }
  }
}
</script>

<style scoped>
.app-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.navbar {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.logo {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  transition: opacity 0.3s ease;
}

.logo:hover {
  opacity: 0.9;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-btn {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  background: transparent;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-btn:hover {
  background: white;
  color: #667eea;
}

.login-btn {
  color: white;
  background: transparent;
  border: 2px solid white;
}

.login-btn:hover {
  background: white;
  color: #667eea;
}

.signup-btn {
  background: white;
  color: #667eea;
  border: 2px solid white;
}

.signup-btn:hover {
  background: transparent;
  color: white;
}

.logout-btn {
  background: rgba(255, 255, 255, 0.2);
}

.logout-btn:hover {
  background: white;
  color: #667eea;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .nav-links {
    width: 100%;
    gap: 0.5rem;
  }

  .nav-btn {
    flex: 1;
    text-align: center;
  }
}
</style>
