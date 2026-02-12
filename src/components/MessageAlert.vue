<template>
  <div v-if="message" class="message-alert" :class="type">
    <span class="message-text">{{ message }}</span>
    <button v-if="dismissible" @click="$emit('dismiss')" class="close-btn">✕</button>
  </div>
</template>

<script>
export default {
  name: 'MessageAlert',
  props: {
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      enum: ['error', 'success', 'warning', 'info'],
      default: 'info'
    },
    dismissible: {
      type: Boolean,
      default: true
    }
  },
  emits: ['dismiss']
}
</script>

<style scoped>
.message-alert {
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-weight: 500;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message-alert.error {
  background: #fee;
  color: #c33;
  border-left: 4px solid #c33;
}

.message-alert.success {
  background: #efe;
  color: #3c3;
  border-left: 4px solid #3c3;
}

.message-alert.warning {
  background: #ffe;
  color: #cc6500;
  border-left: 4px solid #cc6500;
}

.message-alert.info {
  background: #eef;
  color: #33c;
  border-left: 4px solid #33c;
}

.message-text {
  flex: 1;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: currentColor;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  opacity: 1;
}
</style>
