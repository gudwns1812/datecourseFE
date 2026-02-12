<template>
  <div class="home-container">
    <AppHeader />

    <section class="hero">
      <div class="hero-content">
        <h2>연인과 함께하는 특별한 데이트</h2>
        <p>고민하지 말고, 랜덤으로 시작하는 설렘!</p>
        <button class="cta-btn" @click="$router.push('/login')">시작하기</button>
      </div>
      <div class="hero-image">🗺️</div>
    </section>

    <section class="features">
      <h2>DateCourse의 특징</h2>
      <div class="feature-grid">
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

    <section class="how-it-works">
      <h2>어떻게 작동하나요?</h2>
      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <h3>회원가입</h3>
          <p>간편하게 가입하세요</p>
        </div>
        <div class="step-arrow">→</div>
        <div class="step">
          <div class="step-number">2</div>
          <h3>로그인</h3>
          <p>계정으로 로그인하세요</p>
        </div>
        <div class="step-arrow">→</div>
        <div class="step">
          <div class="step-number">3</div>
          <h3>랜덤 선택</h3>
          <p>버튼 한 번으로 시작</p>
        </div>
        <div class="step-arrow">→</div>
        <div class="step">
          <div class="step-number">4</div>
          <h3>코스 확인</h3>
          <p>주변 정보 확인하기</p>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>&copy; 2026 DateCourse. 모든 연인들의 행복한 데이트를 응원합니다! ❤️</p>
    </footer>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import FeatureCard from '../components/FeatureCard.vue'

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    FeatureCard
  }
}
</script>

<style scoped>
.home-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.signup-btn {
  background: white;
  color: #667eea;
}

.signup-btn:hover {
  background: #f0f0f0;
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 3rem;
  border-radius: 10px;
  margin: 3rem auto;
}

.hero-content {
  flex: 1;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-btn {
  background: white;
  color: #667eea;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.hero-image {
  font-size: 5rem;
  flex: 1;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.features {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.features h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #333;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.how-it-works {
  background: #f8f9fa;
  padding: 4rem 2rem;
  margin-top: 3rem;
}

.how-it-works h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #333;
}

.steps {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
}

.step {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  flex: 1;
  min-width: 150px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.step-number {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1rem;
}

.step h3 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.step p {
  color: #666;
  font-size: 0.9rem;
}

.step-arrow {
  font-size: 2rem;
  color: #667eea;
  font-weight: bold;
}

.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    padding: 3rem 1rem;
  }

  .hero h2 {
    font-size: 1.8rem;
  }

  .hero-image {
    font-size: 3rem;
  }

  .steps {
    flex-direction: column;
  }

  .step-arrow {
    transform: rotate(90deg);
  }

  .nav-links {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
