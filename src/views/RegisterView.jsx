import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import MessageAlert from '../components/MessageAlert';

const RegisterView = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        nickname: '',
        agreeTerms: false
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });

    const [statusMessage, setStatusMessage] = useState({
        message: '',
        type: '' // 'error' or 'success'
    });

    const navigate = useNavigate();

    const handleInputChange = (field, value) => {
        setForm(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const validatePassword = () => {
        let passwordError = '';
        let passwordConfirmError = '';

        if (form.password.length > 0 && form.password.length < 8) {
            passwordError = '비밀번호는 8자 이상이어야 합니다.';
        }

        if (form.passwordConfirm.length > 0 && form.password !== form.passwordConfirm) {
            passwordConfirmError = '비밀번호가 일치하지 않습니다.';
        }

        setErrors(prev => ({
            ...prev,
            password: passwordError,
            passwordConfirm: passwordConfirmError
        }));
    };

    useEffect(() => {
        validatePassword();
    }, [form.password, form.passwordConfirm]);

    const isFormValid =
        form.username.length > 0 &&
        form.email.length > 0 &&
        form.password.length >= 8 &&
        form.password === form.passwordConfirm &&
        form.nickname.length > 0 &&
        form.agreeTerms &&
        !errors.password &&
        !errors.passwordConfirm;

    const handleRegister = (e) => {
        e.preventDefault();
        if (!isFormValid) {
            setStatusMessage({ message: '모든 필드를 올바르게 입력해주세요.', type: 'error' });
            return;
        }

        console.log('회원가입 시도:', {
            username: form.username,
            email: form.email,
            nickname: form.nickname
        });

        setStatusMessage({ message: '회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.', type: 'success' });

        setTimeout(() => {
            navigate('/login');
        }, 2000);
    };

    return (
        <div className="min-h-screen flex justify-center items-center p-8 bg-[#fdfbfb] bg-[radial-gradient(circle_at_top_right,#fee_0%,transparent_40%),radial-gradient(circle_at_bottom_left,#eef_0%,transparent_40%)]">
            <h1 className="absolute top-8 left-8 m-0 z-10">
                <Link to="/" className="text-[1.8rem] font-extrabold bg-gradient-to-br from-[#ff758c] to-[#ff7eb3] bg-clip-text text-transparent">
                    🎯 데이트코스
                </Link>
            </h1>
            <div className="bg-white rounded-3xl shadow-lg p-12 w-full max-w-[480px] relative overflow-hidden border border-white/80 mt-8 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[6px] before:bg-gradient-to-br before:from-[#ff758c] before:to-[#ff7eb3] md:p-6">
                <h2 className="text-center text-[2rem] text-[#333] mb-10 font-extrabold">
                    회원가입
                </h2>

                {statusMessage.message && (
                    <MessageAlert
                        message={statusMessage.message}
                        type={statusMessage.type}
                        onDismiss={() => setStatusMessage({ message: '', type: '' })}
                    />
                )}

                <form onSubmit={handleRegister} className="flex flex-col gap-5">
                    <FormInput
                        id="username"
                        value={form.username}
                        onChange={(val) => handleInputChange('username', val)}
                        type="text"
                        label="아이디"
                        placeholder="아이디를 입력하세요"
                        required
                        error={errors.username}
                    />

                    <FormInput
                        id="email"
                        value={form.email}
                        onChange={(val) => handleInputChange('email', val)}
                        type="email"
                        label="이메일"
                        placeholder="이메일을 입력하세요"
                        required
                        error={errors.email}
                    />

                    <FormInput
                        id="password"
                        value={form.password}
                        onChange={(val) => handleInputChange('password', val)}
                        type="password"
                        label="비밀번호"
                        placeholder="비밀번호를 입력하세요 (8자 이상)"
                        required
                        error={errors.password}
                    />

                    <FormInput
                        id="passwordConfirm"
                        value={form.passwordConfirm}
                        onChange={(val) => handleInputChange('passwordConfirm', val)}
                        type="password"
                        label="비밀번호 확인"
                        placeholder="비밀번호를 다시 입력하세요"
                        required
                        error={errors.passwordConfirm}
                    />

                    <FormInput
                        id="nickname"
                        value={form.nickname}
                        onChange={(val) => handleInputChange('nickname', val)}
                        type="text"
                        label="닉네임"
                        placeholder="닉네임을 입력하세요"
                        required
                    />

                    <FormInput
                        id="agree"
                        value={form.agreeTerms}
                        onChange={(val) => handleInputChange('agreeTerms', val)}
                        type="checkbox"
                        label="이용약관 및 개인정보 수집에 동의합니다"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-gradient-to-br from-[#ff758c] to-[#ff7eb3] text-white p-[1.1rem] border-none rounded-xl text-[1.1rem] font-bold cursor-pointer transition-all duration-300 mt-4 shadow-[0_4px_15px_rgba(255,154,158,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,154,158,0.6)] disabled:bg-[#ccc] disabled:cursor-not-allowed disabled:shadow-none hover:disabled:transform-none"
                        disabled={!isFormValid}
                    >
                        회원가입
                    </button>
                </form>

                <div className="text-center mt-10 text-[#666] text-[0.95rem] border-t border-[#f0f0f0] pt-6">
                    <p>이미 계정이 있으신가요? <Link to="/login" className="text-[#ff758c] font-semibold ml-1.5 hover:underline">로그인</Link></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterView;
