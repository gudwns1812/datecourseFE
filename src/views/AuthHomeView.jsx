import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import useAuthStore from '../stores/authStore';

const AuthHomeView = () => {
    const { username } = useAuthStore();
    const navigate = useNavigate();

    return (
        <div className="font-sans text-[#333] min-h-screen bg-[#fdfbfb]">
            <AppHeader />

            <main className="max-w-[900px] mx-auto my-20 p-12 text-center bg-white rounded-[30px] shadow-lg border border-white/80">
                <h2 className="text-[2.5rem] font-extrabold mb-4 bg-gradient-to-br from-[#ff758c] to-[#ff7eb3] bg-clip-text text-transparent">
                    환영합니다, {username || '회원'}님!
                </h2>
                <p className="text-[#666] text-[1.1rem] mb-12">
                    {/* Add any subtext if needed */}
                </p>
                <div className="actions">
                    <button
                        onClick={() => navigate('/random-course')}
                        className="bg-gradient-to-br from-[#ff758c] to-[#ff7eb3] text-white py-4 px-10 border-none rounded-full cursor-pointer text-[1.1rem] font-bold transition-all duration-300 shadow-[0_10px_20px_rgba(255,154,158,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(255,154,158,0.5)]"
                    >
                        랜덤 코스 시작
                    </button>
                </div>
            </main>
        </div>
    );
};

export default AuthHomeView;
