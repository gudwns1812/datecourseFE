import axios from 'axios';
// We need to import the store to use it in interceptors. 
// However, direct import might cause issues if not careful.
// useAuthStore is a hook. We can use useAuthStore.getState() to access state outside components.
import useAuthStore from '../stores/authStore';

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
            // 서버에서 "너 세션 죽었어"라고 401을 보낸 상황
            const { logout } = useAuthStore.getState();

            // Zustand store update for UI
            useAuthStore.setState({ isLogin: false, username: null });

            alert('세션이 만료되어 로그아웃되었습니다.');

            // React Router handles navigation, but outside components we use window.location
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default instance;
