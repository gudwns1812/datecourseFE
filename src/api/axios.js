import axios from 'axios';
import { useAuthStore } from '@/stores/auth';
import router from '@/router';

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: '/',
  withCredentials: true // 세션 쿠키를 포함
});

// 응답 인터셉터 추가
instance.interceptors.response.use(
  (response) => response, // 200번대 응답은 그냥 통과
  (error) => {
    if (error.response && error.response.status === 401) {
      //서버에서 "너 세션 죽었어"라고 401을 보낸 상황
      const auth = useAuthStore();
      auth.logout(); // 스토어 초기화 (isLogin = false 등)
      
      alert('세션이 만료되어 로그아웃되었습니다.');
      router.push('/login');
    }
    return Promise.reject(error);
  }
);

export default instance;