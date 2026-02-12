import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import FeatureCard from '../components/FeatureCard';

const HomeView = () => {
    const navigate = useNavigate();

    return (
        <div className="overflow-x-hidden">
            <AppHeader />

            {/* Hero Section */}
            <section className="relative flex items-center justify-between max-w-[1200px] mx-auto my-8 mb-20 px-8 py-32 bg-[#ff758c] text-white text-center rounded-[30px] overflow-hidden shadow-xl md:flex-col md:py-16 md:px-6 md:my-4 md:mb-12">
                <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none z-0"></div>

                <div className="flex-1 text-left pl-8 z-10 md:pl-0 md:text-center">
                    <h2 className="text-[3.5rem] mb-6 font-bold leading-tight md:text-[2.2rem]">
                        연인과 함께하는 특별한 데이트
                    </h2>
                    <p className="text-[1.4rem] mb-10 opacity-95 font-medium">
                        고민하지 말고, 랜덤으로 시작하는 설렘!
                    </p>
                    <button
                        className="bg-white text-[#ff758c] border-none py-[1.2rem] px-[3rem] text-[1.2rem] font-bold rounded-full cursor-pointer transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg hover:bg-white"
                        onClick={() => navigate('/login')}
                    >
                        시작하기
                    </button>
                </div>
                <div className="flex-1 text-[12rem] animate-[float_4s_ease-in-out_infinite] drop-shadow-2xl z-10 md:text-[8rem] md:mt-8 md:-order-1 md:mb-8">
                    🗺️
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-8 max-w-[1200px] mx-auto">
                <h2 className="text-center text-[2.5rem] mb-16 text-[#333] font-extrabold relative after:content-[''] after:block after:w-[60px] after:h-[4px] after:bg-gradient-to-br after:from-[#ff758c] after:to-[#ff7eb3] after:mx-auto after:mt-4 after:rounded-sm">
                    DateCourse의 특징
                </h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
                    <FeatureCard
                        icon="🎲"
                        title="랜덤 데이트 코스"
                        description="어디로 갈지 결정 못하셨다면? 랜덤으로 설레는 데이트 코스를 추천해드립니다."
                    />
                    <FeatureCard
                        icon="📍"
                        title="주변 정보"
                        description="추천받은 코스 주변의 맛집, 카페, 문화시설 등 다양한 정보를 한눈에 확인하세요."
                    />
                    <FeatureCard
                        icon="❤️"
                        title="나만의 코스"
                        description="마음에 드는 코스를 저장하고 나중에 언제든 확인할 수 있습니다."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="bg-white py-24 px-8 mt-20 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-transparent before:to-[rgba(255,154,158,0.05)] before:pointer-events-none">
                <h2 className="text-center text-[2.5rem] mb-16 text-[#333] font-extrabold relative z-10">
                    어떻게 작동하나요?
                </h2>
                <div className="flex justify-center items-center gap-8 flex-wrap max-w-[1100px] mx-auto relative z-10 md:flex-col md:gap-6">
                    <div className="bg-white p-10 rounded-3xl text-center flex-1 min-w-[200px] shadow-md transition-transform duration-300 border border-black/5 hover:-translate-y-1">
                        <div className="bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb] text-white w-[60px] h-[60px] rounded-full flex items-center justify-center text-[1.8rem] font-extrabold mx-auto mb-6 shadow-[0_4px_10px_rgba(161,140,209,0.4)]">
                            1
                        </div>
                        <h3 className="text-[#333] mb-3 text-[1.3rem] font-bold">회원가입</h3>
                        <p className="text-[#666] text-[0.95rem]">간편하게 가입하세요</p>
                    </div>
                    <div className="text-[2rem] text-[#e0e0e0] font-light md:rotate-90">→</div>
                    <div className="bg-white p-10 rounded-3xl text-center flex-1 min-w-[200px] shadow-md transition-transform duration-300 border border-black/5 hover:-translate-y-1">
                        <div className="bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb] text-white w-[60px] h-[60px] rounded-full flex items-center justify-center text-[1.8rem] font-extrabold mx-auto mb-6 shadow-[0_4px_10px_rgba(161,140,209,0.4)]">
                            2
                        </div>
                        <h3 className="text-[#333] mb-3 text-[1.3rem] font-bold">로그인</h3>
                        <p className="text-[#666] text-[0.95rem]">계정으로 로그인하세요</p>
                    </div>
                    <div className="text-[2rem] text-[#e0e0e0] font-light md:rotate-90">→</div>
                    <div className="bg-white p-10 rounded-3xl text-center flex-1 min-w-[200px] shadow-md transition-transform duration-300 border border-black/5 hover:-translate-y-1">
                        <div className="bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb] text-white w-[60px] h-[60px] rounded-full flex items-center justify-center text-[1.8rem] font-extrabold mx-auto mb-6 shadow-[0_4px_10px_rgba(161,140,209,0.4)]">
                            3
                        </div>
                        <h3 className="text-[#333] mb-3 text-[1.3rem] font-bold">랜덤 선택</h3>
                        <p className="text-[#666] text-[0.95rem]">버튼 한 번으로 시작</p>
                    </div>
                    <div className="text-[2rem] text-[#e0e0e0] font-light md:rotate-90">→</div>
                    <div className="bg-white p-10 rounded-3xl text-center flex-1 min-w-[200px] shadow-md transition-transform duration-300 border border-black/5 hover:-translate-y-1">
                        <div className="bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb] text-white w-[60px] h-[60px] rounded-full flex items-center justify-center text-[1.8rem] font-extrabold mx-auto mb-6 shadow-[0_4px_10px_rgba(161,140,209,0.4)]">
                            4
                        </div>
                        <h3 className="text-[#333] mb-3 text-[1.3rem] font-bold">코스 확인</h3>
                        <p className="text-[#666] text-[0.95rem]">주변 정보 확인하기</p>
                    </div>
                </div>
            </section>

            <footer className="bg-white text-[#666] text-center p-12 mt-0 border-t border-black/5">
                <p className="text-[0.9rem]">&copy; 2026 DateCourse. 모든 연인들의 행복한 데이트를 응원합니다! ❤️</p>
            </footer>
        </div>
    );
};

export default HomeView;
