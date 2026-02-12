import React, { useState, useRef, useEffect } from 'react';
import AppHeader from '../components/AppHeader';
import CourseCard from '../components/CourseCard';
import PlaceCard from '../components/PlaceCard';
import axios from '../api/axios';

const RandomCourseView = () => {
    const [isSpinning, setIsSpinning] = useState(false);
    const [currentCourse, setCurrentCourse] = useState({
        icon: '❓',
        name: '어디로 떠나볼까요?',
        location: '랜덤 추천 대기중...',
        description: '아래 버튼을 눌러 설레는 데이트 장소를 확인해보세요!',
        rating: ''
    });

    const [courseHistory, setCourseHistory] = useState([]);

    const nearbyPlaces = [
        {
            id: 1,
            icon: '🍔',
            name: 'BBQ 한강점',
            category: '바비큐/고기',
            distance: '350m',
            description: '신선한 고기와 맥주의 완벽한 조합',
            rating: '4.6'
        },
        {
            id: 2,
            icon: '☕',
            name: '카페 더블샷',
            category: '카페',
            distance: '250m',
            description: '아늑한 분위기의 감성 카페',
            rating: '4.7'
        },
        {
            id: 3,
            icon: '🍽️',
            name: '이태리안 레스토랑',
            category: '이탈리안',
            distance: '420m',
            description: '정통 이탈리안 요리의 맛',
            rating: '4.5'
        },
        {
            id: 4,
            icon: '🎬',
            name: '강남 CGV',
            category: '영화관',
            distance: '600m',
            description: '함께 영화를 즐기는 데이트',
            rating: '4.4'
        },
        {
            id: 5,
            icon: '🛍️',
            name: '강남 쇼핑몰',
            category: '쇼핑',
            distance: '500m',
            description: '트렌디한 쇼핑 경험',
            rating: '4.3'
        },
        {
            id: 6,
            icon: '🎨',
            name: '미술관 & 갤러리',
            category: '문화',
            distance: '800m',
            description: '예술적 감성을 나누는 시간',
            rating: '4.6'
        }
    ];

    const dummyCourses = [
        { icon: '🌙', name: '한강 공원 야경 데이트', location: '한강공원', description: '낭만적인 야경과 함께하는 특별한 저녁' },
        { icon: '🌳', name: '서울숲 산책 데이트', location: '서울숲', description: '자연 속에서 즐기는 여유로운 시간' },
        { icon: '🎡', name: '롯데월드 데이트', location: '롯데월드', description: '짜릿한 기분과 신나는 추억 만들기' },
        { icon: '🏯', name: '경복궁 한복 데이트', location: '경복궁', description: '역사 속에서 느끼는 사랑' },
        { icon: '🌊', name: '해운대 해변 데이트', location: '해운대 해변', description: '파도 소리와 함께하는 로맨틱한 저녁' },
        { icon: '🍜', name: '명동 미식 투어', location: '명동', description: '세계 음식을 순회하는 미식 여행' },
        { icon: '🎪', name: '라이브 공연 감상', location: '올림픽공원', description: '음악과 함께 펼쳐지는 낭만' },
        { icon: '🏔️', name: '남산 트레킹 데이트', location: '남산', description: '함께 오르는 산, 함께 나누는 이야기' }
    ];

    const generateRandomCourse = async () => {
        if (isSpinning) return;
        setIsSpinning(true);

        // Client-side animation
        let spins = 0;
        const spinInterval = setInterval(() => {
            const randomCourse = dummyCourses[Math.floor(Math.random() * dummyCourses.length)];
            // Update state only for visual effect, final state comes from server
            setCurrentCourse(prev => ({ ...randomCourse }));
            spins++;
            if (spins > 12) {
                clearInterval(spinInterval);
            }
        }, 80);

        try {
            const res = await axios.get('v1/stations/random');
            const body = res.data;

            clearInterval(spinInterval);
            // Wait a bit for animation to settle
            await new Promise(r => setTimeout(r, 500));

            if (body && body.result === 'SUCCESS') {
                const data = body.data;

                const lineInfo = data.lineNumbers ? data.lineNumbers.join(' / ') : '';

                const newCourse = {
                    icon: '🚇',
                    name: data.stationName,
                    location: lineInfo,
                    description: data.stationAddress,
                    rating: 'New'
                };

                setCurrentCourse(newCourse);

                // Add to history (avoid duplicates)
                setCourseHistory(prevHistory => {
                    if (!prevHistory.some(c => c.name === newCourse.name)) {
                        const newHistory = [newCourse, ...prevHistory];
                        if (newHistory.length > 5) newHistory.pop();
                        return newHistory;
                    }
                    return prevHistory;
                });

            } else if (body && body.result === 'FAIL') {
                const msg = body.error && body.error.message ? body.error.message : '추천을 불러오지 못했습니다.';
                alert(msg);
            } else {
                alert('서버 응답이 올바르지 않습니다.');
            }
        } catch (err) {
            console.error('랜덤 지하철역 호출 오류', err);
            // Fallback to one of the dummy courses if server fails?
            // For now, alert as per original logic.
            alert('서버 연결에 실패했습니다.');
        } finally {
            setIsSpinning(false);
        }
    };

    const saveCourse = (course) => {
        alert(`"${course.name}"을 저장했습니다!`);
        // TODO: Backend save request
    };

    return (
        <div className="min-h-screen bg-[#fdfbfb]">
            <AppHeader />

            <section className="py-16 px-8 text-center">
                <div className="max-w-[1200px] mx-auto">
                    <h1 className="text-[3rem] mb-2 font-extrabold bg-gradient-to-br from-[#ff758c] to-[#ff7eb3] bg-clip-text text-transparent md:text-[2.2rem]">
                        🎲 랜덤 데이트 코스
                    </h1>
                    <p className="text-[1.2rem] text-[#666] mb-12">
                        버튼을 눌러 설렘 가득한 데이트 코스를 추천받아보세요!
                    </p>

                    <div className="flex flex-col items-center gap-12 mb-16">
                        <div className={`w-full max-w-[450px] perspective-1000 ${isSpinning ? 'animate-[flip_0.3s_infinite_linear]' : ''}`}>
                            <CourseCard
                                icon={currentCourse.icon}
                                name={currentCourse.name}
                                location={currentCourse.location}
                                description={currentCourse.description}
                                rating={currentCourse.rating}
                            />
                        </div>

                        <button
                            onClick={generateRandomCourse}
                            disabled={isSpinning}
                            className="bg-gradient-to-br from-[#ff758c] to-[#ff7eb3] text-white border-none py-5 px-14 text-[1.3rem] font-extrabold rounded-full cursor-pointer transition-all duration-300 shadow-[0_10px_25px_rgba(255,154,158,0.4)] relative overflow-hidden disabled:bg-[#ccc] disabled:cursor-wait disabled:shadow-none disabled:transform-none hover:not-disabled:-translate-y-1 hover:not-disabled:scale-105 hover:not-disabled:shadow-[0_15px_35px_rgba(255,154,158,0.6)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                        >
                            {isSpinning ? '뽑는 중...' : '🎲 새로운 랜덤 지하철역 뽑기'}
                        </button>
                    </div>
                </div>
                <style jsx>{`
                    @keyframes flip {
                        0% { transform: rotateY(0deg); }
                        50% { transform: rotateY(90deg); opacity: 0.8; }
                        100% { transform: rotateY(180deg); }
                    }
                `}</style>
            </section>

            <section className="py-20 px-8 bg-white rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-center text-[2.2rem] text-[#333] mb-12 font-extrabold">
                        🎯 주변 추천 장소
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 md:grid-cols-1">
                        {nearbyPlaces.map(place => (
                            <PlaceCard
                                key={place.id}
                                icon={place.icon}
                                name={place.name}
                                category={place.category}
                                distance={place.distance}
                                description={place.description}
                                rating={place.rating}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-8">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-center text-[2.2rem] text-[#333] mb-12 font-extrabold">
                        📜 최근 추천받은 코스
                    </h2>
                    {courseHistory.length > 0 ? (
                        <div className="max-w-[800px] mx-auto flex flex-col gap-6">
                            {courseHistory.map((course, index) => (
                                <div key={index} className="bg-white p-6 px-8 rounded-2xl flex items-center justify-between shadow-sm border-l-[6px] border-[#FF9A9E] transition-all duration-300 hover:translate-x-1 hover:shadow-md md:flex-col md:items-start md:gap-4 md:p-6">
                                    <span className="text-[2.5rem] mr-6 bg-[#fff5f5] w-[60px] h-[60px] rounded-full flex items-center justify-center md:mr-0 md:mb-2 md:w-12 md:h-12 md:text-2xl">
                                        {course.icon}
                                    </span>
                                    <span className="font-bold text-[#333] text-[1.1rem] flex-1">
                                        {course.name}
                                    </span>
                                    <span className="text-[#666] bg-[#f5f5f5] py-1.5 px-3.5 rounded-[20px] text-[0.9rem] mr-6 md:mr-0 md:mb-2">
                                        {course.location}
                                    </span>
                                    <button
                                        className="bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb] text-white border-none py-2.5 px-5 rounded-xl cursor-pointer transition-all duration-300 font-semibold text-[0.9rem] hover:scale-105 hover:shadow-[0_4px_10px_rgba(161,140,209,0.4)] md:w-full md:mt-2"
                                        onClick={() => saveCourse(course)}
                                    >
                                        💾 저장
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-[#aaa] text-[1.1rem] p-12 bg-white rounded-[20px] border border-dashed border-[#ddd]">
                            아직 추천받은 코스가 없습니다.
                        </p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default RandomCourseView;
