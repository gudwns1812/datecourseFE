<template>
  <div class="register-container">
    <div class="register-box">
      <h1><router-link to="/" class="logo">🎯 데이트코스</router-link></h1>
      <h2>회원가입</h2>
      
      <form @submit.prevent="handleRegister" class="register-form">
        <div class="form-group">
          <label for="username">아이디</label>
          <input
            type="text"
            id="username"
            v-model="form.username"
            placeholder="아이디를 입력하세요"
            required
          />
          <small v-if="usernameError" class="error-text">{{ usernameError }}</small>
        </div>

        <div class="form-group">
          <label for="email">이메일</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="이메일을 입력하세요"
            required
          />
          <small v-if="emailError" class="error-text">{{ emailError }}</small>
        </div>

        <div class="form-group">
          <label for="password">비밀번호</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            placeholder="비밀번호를 입력하세요 (8자 이상)"
            required
            @input="validatePassword"
          />
          <small v-if="passwordError" class="error-text">{{ passwordError }}</small>
        </div>

        <div class="form-group">
          <label for="passwordConfirm">비밀번호 확인</label>
          <input
            type="password"
            id="passwordConfirm"
            v-model="form.passwordConfirm"
            placeholder="비밀번호를 다시 입력하세요"
            required
          />
          <small v-if="passwordConfirmError" class="error-text">{{ passwordConfirmError }}</small>
        </div>

        <div class="form-group">
          <label for="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            v-model="form.nickname"
            placeholder="닉네임을 입력하세요"
            required
          />
        </div>

        <div class="form-group checkbox">
          <input
            type="checkbox"
            id="agree"
            v-model="form.agreeTerms"
            required
          />
          <label for="agree">이용약관 및 개인정보 수집에 동의합니다</label>
        </div>

        <button type="submit" class="register-btn" :disabled="!isFormValid">회원가입</button>
      </form>

      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>

      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>

      <div class="register-footer">
        <p>이미 계정이 있으신가요? <router-link to="/login">로그인</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        nickname: '',
        agreeTerms: false
      },
      usernameError: '',
      emailError: '',
      passwordError: '',
      passwordConfirmError: '',
      errorMessage: '',
      successMessage: ''
    }
  },
  computed: {
    isFormValid() {
      return (
        this.form.username.length > 0 &&
        this.form.email.length > 0 &&
        this.form.password.length >= 8 &&
        this.form.password === this.form.passwordConfirm &&
        this.form.nickname.length > 0 &&
        this.form.agreeTerms &&
        !this.usernameError &&
        !this.emailError &&
        !this.passwordError &&
        !this.passwordConfirmError
      );
    }
  },
  methods: {
    validatePassword() {
      if (this.form.password.length < 8) {
        this.passwordError = '비밀번호는 8자 이상이어야 합니다.';
      } else {
        this.passwordError = '';
      }
      
      if (this.form.passwordConfirm && this.form.password !== this.form.passwordConfirm) {
        this.passwordConfirmError = '비밀번호가 일치하지 않습니다.';
      } else {
        this.passwordConfirmError = '';
      }
    },
    handleRegister() {
      if (!this.isFormValid) {
        this.errorMessage = '모든 필드를 올바르게 입력해주세요.';
        return;
      }

      // 비밀번호 확인
      if (this.form.password !== this.form.passwordConfirm) {
        this.passwordConfirmError = '비밀번호가 일치하지 않습니다.';
        return;
      }

      // TODO: 백엔드와 연동
      console.log('회원가입 시도:', {
        username: this.form.username,
        email: this.form.email,
        nickname: this.form.nickname
      });

      this.successMessage = '회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.';
      this.errorMessage = '';
      
      setTimeout(() => {
        this.$router.push('/login');
      }, 2000);
    }
  },
  watch: {
    'form.password': function() {
      this.validatePassword();
    },
    'form.passwordConfirm': function() {
      this.validatePassword();
    }
  }
}
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.register-box {
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  padding: 3rem;
  width: 100%;
  max-width: 450px;
}

.register-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #667eea;
}

.register-box h2 {
  text-align: center;
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 2rem;
  font-weight: 600;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group.checkbox {
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.form-group.checkbox input {
  width: auto;
  cursor: pointer;
}

.form-group.checkbox label {
  margin-bottom: 0;
  cursor: pointer;
}

.error-text {
  color: #c33;
  font-size: 0.85rem;
  margin-top: 0.3rem;
}

.register-btn {
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

.register-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
}

.register-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.register-btn:active:not(:disabled) {
  transform: translateY(0);
}

.register-footer {
  text-align: center;
  margin-top: 2rem;
  color: #666;
  font-size: 0.95rem;
}

.register-footer a {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.register-footer a:hover {
  color: #764ba2;
}

@media (max-width: 480px) {
  .register-box {
    padding: 2rem;
  }

  .register-box h2 {
    font-size: 1.5rem;
  }

  .register-form {
    gap: 1rem;
  }
}
</style>
