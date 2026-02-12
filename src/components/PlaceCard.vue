<template>
  <div class="place-card">
    <div class="place-icon">{{ icon }}</div>
    <h3>{{ name }}</h3>
    <p class="place-category">{{ category }}</p>
    <p class="place-distance">{{ distance }}</p>
    <p class="place-description">{{ description }}</p>
    <div class="place-rating">⭐ {{ rating }}</div>
  </div>
</template>

<script>
export default {
  name: 'PlaceCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    distance: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    rating: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.place-card {
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.place-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.place-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.place-card h3 {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.place-category {
  font-size: 0.85rem;
  color: #667eea;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.place-distance {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.place-description {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
  margin-bottom: 0.5rem;
}

.place-rating {
  font-weight: 600;
  color: #ff9800;
}
</style>
