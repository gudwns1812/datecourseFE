<template>
  <div class="login-container">
    <div class="login-box">
      <h1 class="login-title">🎯 DateCourse</h1>
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
    handleLogin() {
      if (this.form.username && this.form.password) {
        // TODO: 백엔드와 연동
        console.log('로그인 시도:', this.form);
        this.errorMessage = '';
        // 임시로 홈으로 이동
        this.$router.push('/');
      } else {
        this.errorMessage = '아이디와 비밀번호를 입력해주세요.';
      }
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.form-group input {
  padding: 0.8rem;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
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

.error-message {
  background: #fee;
  color: #c33;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  font-size: 0.9rem;
  border: 1px solid #fcc;
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
