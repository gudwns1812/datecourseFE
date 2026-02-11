<template>
  <div class="login-container">
    <div class="login-box">
      <h1><router-link to="/" class="logo">🎯 데이트코스</router-link></h1>
      <h2>로그인</h2>
      
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">아이디</label>
          <input
            type="text"
            id="username"
            v-model="form.username"
            placeholder="아이디를 입력하세요"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">비밀번호</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>

        <button type="submit" class="login-btn">로그인</button>
      </form>

      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>

      <div class="login-footer">
        <p>아직 계정이 없으신가요? <router-link to="/register">회원가입</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/auth'

export default {
  name: 'LoginView',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    async handleLogin() {
      this.errorMessage = '';
      if (!this.form.username || !this.form.password) {
        this.errorMessage = '아이디와 비밀번호를 입력해주세요.';
        return;
      }

      try {
        const res = await fetch('/v1/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            loginId: this.form.username,
            password: this.form.password
          })
        });

        const data = await res.json();

        if (data && data.result === 'SUCCESS') {
          const auth = useAuthStore()
          auth.setLogin(data.data)
          this.errorMessage = '';
          this.$router.push('/home-auth');
        } else if (data && data.result === 'FAIL') {
          const msg = data.error && data.error.message ? data.error.message : '로그인에 실패했습니다.';
          this.errorMessage = msg;
        } else {
          this.errorMessage = '서버 응답을 처리할 수 없습니다.';
        }
      } catch (err) {
        console.error('로그인 오류', err);
        this.errorMessage = '서버 연결에 실패했습니다.';
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.login-box {
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  padding: 3rem;
  width: 100%;
  max-width: 400px;
}

.login-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #667eea;
}

.login-box h2 {
  text-align: center;
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 2rem;
  font-weight: 600;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.login-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 1rem;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
}

.login-btn:active {
  transform: translateY(0);
}

.login-footer {
  text-align: center;
  margin-top: 2rem;
  color: #666;
  font-size: 0.95rem;
}

.login-footer a {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.login-footer a:hover {
  color: #764ba2;
}

@media (max-width: 480px) {
  .login-box {
    padding: 2rem;
  }

  .login-box h2 {
    font-size: 1.5rem;
  }
}
</style>
