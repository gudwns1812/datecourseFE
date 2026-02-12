import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/authStore';
import FormInput from '../components/FormInput';
import MessageAlert from '../components/MessageAlert';
import axios from '../api/axios';

const LoginView = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const { setLogin } = useAuthStore();
    const navigate = useNavigate();

    const handleInputChange = (field, value) => {
        setForm(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!form.username || !form.password) {
            setErrorMessage('아이디와 비밀번호를 입력해주세요.');
            return;
        }

        setLoading(true);

        try {
            const res = await axios.post('/v1/auth/login', {
                loginId: form.username,
                password: form.password
            });

            const data = res.data;

            if (data && data.result === 'SUCCESS') {
                setLogin(data.data.username);
                navigate('/home-auth');
            } else if (data && data.result === 'FAIL') {
                const msg = data.error && data.error.message ? data.error.message : '로그인에 실패했습니다.';
                setErrorMessage(msg);
            } else {
                setErrorMessage('서버 응답을 처리할 수 없습니다.');
            }
        } catch (err) {
            console.error('로그인 오류', err);
            if (err.response && err.response.data && err.response.data.error) {
                setErrorMessage(err.response.data.error.message || '로그인에 실패했습니다.');
            } else {
                setErrorMessage('서버 연결에 실패했습니다.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center p-8 bg-[#fdfbfb] bg-[radial-gradient(circle_at_top_left,#fee_0%,transparent_40%),radial-gradient(circle_at_bottom_right,#eef_0%,transparent_40%)]">
            <h1 className="absolute top-8 left-8 m-0 z-10">
                <Link to="/" className="text-[1.8rem] font-extrabold bg-gradient-to-br from-[#ff758c] to-[#ff7eb3] bg-clip-text text-transparent">
                    🎯 데이트코스
                </Link>
            </h1>
            <div className="bg-white rounded-3xl shadow-lg p-12 w-full max-w-[420px] relative overflow-hidden border border-white/80 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[6px] before:bg-gradient-to-br before:from-[#ff758c] before:to-[#ff7eb3] md:p-6">
                <h2 className="text-center text-[2rem] text-[#333] mb-10 font-extrabold">
                    로그인
                </h2>

                <MessageAlert message={errorMessage} type="error" />

                <form onSubmit={handleLogin} className="flex flex-col gap-6">
                    <FormInput
                        id="username"
                        value={form.username}
                        onChange={(val) => handleInputChange('username', val)}
                        type="text"
                        label="아이디"
                        placeholder="아이디를 입력하세요"
                        required
                    />

                    <FormInput
                        id="password"
                        value={form.password}
                        onChange={(val) => handleInputChange('password', val)}
                        type="password"
                        label="비밀번호"
                        placeholder="비밀번호를 입력하세요"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-gradient-to-br from-[#ff758c] to-[#ff7eb3] text-white p-[1.1rem] border-none rounded-xl text-[1.1rem] font-bold cursor-pointer transition-all duration-300 mt-4 shadow-[0_4px_15px_rgba(255,154,158,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,154,158,0.6)] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
                        disabled={loading}
                    >
                        {loading ? '로그인 중...' : '로그인'}
                    </button>
                </form>

                <div className="text-center mt-10 text-[#666] text-[0.95rem] border-t border-[#f0f0f0] pt-6">
                    <p>아직 계정이 없으신가요? <Link to="/register" className="text-[#ff758c] font-semibold ml-1.5 hover:underline">회원가입</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginView;
