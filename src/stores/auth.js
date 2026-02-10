import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router' // 1. 라우터 인스턴스를 직접 가져옵니다.

axios.defaults.withCredentials = true;

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLogin: false,
    username: null,
    initialized: false,
  }),
  actions: {
    async init() {
      try {
        const res = await axios.get('/v1/auth/status')
        console.log('Auth status response:', res.data.data)
        this.isLogin = res.data.data.isLogin === true
        this.username = res.data.data.username || null
      } catch {
        console.error('Failed to fetch auth status')
        this.isLogin = false
      } finally {
        this.initialized = true
      }
    },
    setLogin(username) {
      this.isLogin = true;
      this.username = username;
      console.log('로그인 완료:', this.isLogin);
    },
    async logout() {
        try {
        await axios.post('/v1/auth/logout'); // 서버 세션 죽이기
        } finally {
        // 서버 요청이 성공하든 실패하든 프론트 상태는 초기화
        this.isLogin = false;
        this.username = '';
        // 홈으로 이동 (컴포넌트에서 호출 시 처리해도 됨)
        router.push('/login');
        }
    } 
  }
})