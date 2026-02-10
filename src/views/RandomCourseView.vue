<template>
  <div class="random-course-container">
    <header class="header">
      <nav class="navbar">
        <h1 class="logo">🎯 DateCourse</h1>
        <div class="nav-links">
          <router-link to="/" class="nav-btn">홈</router-link>
          <router-link to="/login" class="nav-btn logout-btn">로그아웃</router-link>
        </div>
      </nav>
    </header>

    <section class="random-section">
      <div class="container">
        <h1>🎲 랜덤 데이트 코스</h1>
        <p class="subtitle">버튼을 눌러 설렘 가득한 데이트 코스를 추천받아보세요!</p>

        <div class="spin-area">
          <div class="course-display" :class="{ spinning: isSpinning }">
            <div class="course-card">
              <div class="course-icon">{{ currentCourse.icon }}</div>
              <h2>{{ currentCourse.name }}</h2>
              <p class="location">📍 {{ currentCourse.location }}</p>
              <p class="description">{{ currentCourse.description }}</p>
              <div class="rating">⭐ {{ currentCourse.rating }}</div>
            </div>
          </div>

          <button 
            @click="generateRandomCourse" 
            :disabled="isSpinning"
            class="spin-btn"
          >
            {{ isSpinning ? '뽑는 중...' : '🎲 새로운 코스 뽑기' }}
          </button>
        </div>
      </div>
    </section>

    <section class="nearby-section">
      <div class="container">
        <h2>🎯 주변 추천 장소</h2>
        <div class="nearby-grid">
          <div v-for="place in nearbyPlaces" :key="place.id" class="place-card">
            <div class="place-icon">{{ place.icon }}</div>
            <h3>{{ place.name }}</h3>
            <p class="place-category">{{ place.category }}</p>
            <p class="place-distance">{{ place.distance }}</p>
            <p class="place-description">{{ place.description }}</p>
            <div class="place-rating">⭐ {{ place.rating }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="course-history-section">
      <div class="container">
        <h2>📜 최근 추천받은 코스</h2>
        <div v-if="courseHistory.length > 0" class="history-list">
          <div v-for="(course, index) in courseHistory" :key="index" class="history-item">
            <span class="history-icon">{{ course.icon }}</span>
            <span class="history-name">{{ course.name }}</span>
            <span class="history-location">{{ course.location }}</span>
            <button class="save-btn" @click="saveCourse(course)">💾 저장</button>
          </div>
        </div>
        <p v-else class="empty-message">아직 추천받은 코스가 없습니다.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RandomCourseView',
  data() {
    return {
      isSpinning: false,
      currentCourse: {
        icon: '🌙',
        name: '한강 공원 야경 데이트',
        location: '한강공원',
        description: '낭만적인 야경과 함께하는 특별한 저녁',
        rating: '4.8'
      },
      nearbyPlaces: [
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
      ],
      courseHistory: [],
      courses: [
        {
          icon: '🌙',
          name: '한강 공원 야경 데이트',
          location: '한강공원',
          description: '낭만적인 야경과 함께하는 특별한 저녁'
        },
        {
          icon: '🌳',
          name: '서울숲 산책 데이트',
          location: '서울숲',
          description: '자연 속에서 즘기는 여유로운 시간'
        },
        {
          icon: '🎡',
          name: '롯데월드 데이트',
          location: '롯데월드',
          description: '짜릿한 기분과 신나는 추억 만들기'
        },
        {
          icon: '🏯',
          name: '경복궁 한복 데이트',
          location: '경복궁',
          description: '역사 속에서 느끼는 사랑'
        },
        {
          icon: '🌊',
          name: '해운대 해변 데이트',
          location: '해운대 해변',
          description: '파도 소리와 함께하는 로맨틱한 저녁'
        },
        {
          icon: '🍜',
          name: '명동 미식 투어',
          location: '명동',
          description: '세계 음식을 巡하는 미식 여행'
        },
        {
          icon: '🎪',
          name: '라이브 공연 감상',
          location: '올림픽공원',
          description: '음악과 함께 펼쳐지는 낭만'
        },
        {
          icon: '🏔️',
          name: '남산 트레킹 데이트',
          location: '남산',
          description: '함께 오르는 산, 함께 나누는 이야기'
        }
      ]
    }
  },
  methods: {
    generateRandomCourse() {
      this.isSpinning = true;
      
      // 회전 애니메이션
      let spins = 0;
      const spinInterval = setInterval(() => {
        const randomCourse = this.courses[Math.floor(Math.random() * this.courses.length)];
        this.currentCourse = randomCourse;
        spins++;
        
        if (spins > 15) {
          clearInterval(spinInterval);
          this.isSpinning = false;
          
          // 선택된 코스를 히스토리에 추가 (중복 제거)
          if (!this.courseHistory.some(c => c.name === this.currentCourse.name)) {
            this.courseHistory.unshift({ ...this.currentCourse });
            if (this.courseHistory.length > 5) {
              this.courseHistory.pop();
            }
          }
        }
      }, 100);
    },
    saveCourse(course) {
      alert(`"${course.name}"을 저장했습니다!`);
      // TODO: 백엔드에 저장 요청
    }
  },
  mounted() {
    // 초기 코스 설정
    this.currentCourse = this.courses[0];
  }
}
</script>

<style scoped>
.random-course-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f8f9fa;
  min-height: 100vh;
}

.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-btn {
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  color: white;
  background: transparent;
  border: 2px solid white;
}

.nav-btn:hover {
  background: white;
  color: #667eea;
}

.logout-btn {
  background: rgba(255, 255, 255, 0.2);
}

.random-section {
  padding: 3rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.random-section h1 {
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
}

.spin-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.course-display {
  width: 100%;
  max-width: 500px;
}

.course-display.spinning {
  animation: spin 0.1s linear;
}

@keyframes spin {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}

.course-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 3px solid #667eea;
}

.course-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: float 3s ease-in-out infinite;
}

.course-card h2 {
  font-size: 1.8rem;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.location {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1rem;
}

.description {
  color: #999;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.rating {
  font-size: 1.1rem;
  font-weight: bold;
  color: #667eea;
}

.spin-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
}

.spin-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.6);
}

.spin-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.nearby-section {
  padding: 3rem 2rem;
  background: white;
}

.nearby-section h2 {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
}

.nearby-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.place-card {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.place-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.2);
  border-color: #667eea;
}

.place-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.place-card h3 {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.3rem;
}

.place-category {
  font-size: 0.85rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.place-distance {
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 0.5rem;
}

.place-description {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.place-rating {
  font-weight: bold;
  color: #667eea;
}

.course-history-section {
  padding: 3rem 2rem;
}

.course-history-section h2 {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
}

.history-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.history-item {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--shadow);
  border-left: 4px solid #667eea;
}

.history-icon {
  font-size: 2rem;
  margin-right: 1rem;
}

.history-name {
  font-weight: bold;
  color: #333;
  flex: 1;
}

.history-location {
  color: #666;
  margin-right: 1rem;
}

.save-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.save-btn:hover {
  background: #764ba2;
  transform: scale(1.05);
}

.empty-message {
  text-align: center;
  color: #999;
  font-size: 1.1rem;
  padding: 2rem;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    width: 100%;
    gap: 0.5rem;
  }

  .nav-btn {
    flex: 1;
  }

  .random-section h1 {
    font-size: 2rem;
  }

  .course-card {
    padding: 1.5rem;
  }

  .course-icon {
    font-size: 3rem;
  }

  .nearby-grid {
    grid-template-columns: 1fr;
  }

  .history-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .save-btn {
    width: 100%;
    margin-top: 0.5rem;
  }
}
</style>
