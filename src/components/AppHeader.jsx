import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/authStore';

const AppHeader = () => {
    const { isLogin, logout } = useAuthStore();
    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === '/';

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/50 shadow-sm py-3">
            <nav className="max-w-[1200px] mx-auto px-8 flex justify-between items-center md:px-4">
                <h1>
                    <Link to="/" className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#ff758c] to-[#ff7eb3] md:text-2xl">
                        🎯 데이트코스
                    </Link>
                </h1>
                <div className="flex gap-6 items-center md:gap-2">
                    {(!isLogin && isHomePage) ? (
                        <>
                            <Link to="/login" className="inline-flex items-center justify-center h-10 px-5 text-sm font-semibold rounded-full border border-[#ff758c] text-[#ff758c] transition-all duration-300 hover:bg-[#ff758c] hover:text-white md:px-3 md:text-xs">
                                로그인
                            </Link>
                            <Link to="/register" className="inline-flex items-center justify-center h-10 px-5 text-sm font-semibold rounded-full text-white bg-gradient-to-br from-[#ff758c] to-[#ff7eb3] shadow-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,154,158,0.5)] hover:-translate-y-0.5 md:px-3 md:text-xs">
                                회원가입
                            </Link>
                        </>
                    ) : (
                        <>
                            {isLogin ? (
                                <>
                                    <Link to="/home-auth" className="inline-flex items-center justify-center h-10 px-5 text-sm font-semibold rounded-full border border-transparent text-gray-500 transition-all duration-300 hover:text-[#ff758c] hover:-translate-y-0.5 md:px-3 md:text-xs">
                                        마이페이지
                                    </Link>
                                    <button
                                        className="inline-flex items-center justify-center h-10 px-5 text-sm font-semibold rounded-full border border-transparent text-gray-500 bg-transparent transition-all duration-300 hover:text-[#ff4b4b] md:px-3 md:text-xs"
                                        onClick={handleLogout}
                                    >
                                        로그아웃
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="inline-flex items-center justify-center h-10 px-5 text-sm font-semibold rounded-full border border-[#ff758c] text-[#ff758c] transition-all duration-300 hover:bg-[#ff758c] hover:text-white md:px-3 md:text-xs">
                                        로그인
                                    </Link>
                                    <Link to="/register" className="inline-flex items-center justify-center h-10 px-5 text-sm font-semibold rounded-full text-white bg-gradient-to-br from-[#ff758c] to-[#ff7eb3] shadow-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,154,158,0.5)] hover:-translate-y-0.5 md:px-3 md:text-xs">
                                        회원가입
                                    </Link>
                                </>
                            )}
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default AppHeader;
