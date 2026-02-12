<template>
  <div class="course-card">
    <div class="course-icon">{{ icon }}</div>
    <h2>{{ name }}</h2>
    <p class="location">📍 {{ location }}</p>
    <p class="description">{{ description }}</p>
    <div v-if="rating" class="rating">
      ⭐ {{ rating }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    rating: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.course-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.course-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.course-card h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.location {
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.95;
}

.description {
  font-size: 0.95rem;
  margin-bottom: 1rem;
  opacity: 0.9;
  line-height: 1.5;
}

.rating {
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
