import { create } from 'zustand';
import axios from '../api/axios'; // Import the configured axios instance

const useAuthStore = create((set, get) => ({
    isLogin: false,
    username: null,
    initialized: false,

    setLogin: (username) => {
        set({ isLogin: true, username: username });
        console.log('로그인 완료:', get().isLogin);
    },

    init: async () => {
        try {
            // Avoid circular dependency by using a direct axios call if needed, 
            // but here we use the instance which should be fine as long as interceptors are set up.
            // Actually, circular dependency might be an issue if axios imports store.
            // Let's rely on the fact that axios.js imports the store *function*, not the instance execution context immediately.
            const res = await axios.get('/v1/auth/status');
            console.log('Auth status response:', res.data.data);
            set({
                isLogin: res.data.data.isLogin === true,
                username: res.data.data.username || null
            });
        } catch (error) {
            console.error('Failed to fetch auth status', error);
            set({ isLogin: false });
        } finally {
            set({ initialized: true });
        }
    },

    logout: async () => {
        try {
            await axios.post('/v1/auth/logout');
        } catch (error) {
            console.error("Logout failed", error);
        } finally {
            set({ isLogin: false, username: null });
            // Redirect handled by component or axios interceptor
            window.location.href = '/login';
        }
    }
}));

export default useAuthStore;
