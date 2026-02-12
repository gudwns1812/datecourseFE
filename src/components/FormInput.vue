<template>
  <div class="form-group" :class="{ checkbox: type === 'checkbox' }">
    <input
      v-if="type !== 'checkbox'"
      :type="type"
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
      :required="required"
      :disabled="disabled"
    />
    <input
      v-else
      type="checkbox"
      :id="id"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      :required="required"
      :disabled="disabled"
    />
    <label v-if="label" :for="id">{{ label }}</label>
    <small v-if="error" class="error-text">{{ error }}</small>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    modelValue: {
      type: [String, Boolean],
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'blur']
}
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group.checkbox {
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.form-group.checkbox input {
  width: auto;
  cursor: pointer;
}

.form-group.checkbox label {
  margin-bottom: 0;
  cursor: pointer;
  flex: 1;
}

label {
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
}

input {
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.95rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

input:disabled {
  background: #f5f5f5;
  cursor: not-allowed;
  opacity: 0.6;
}

.error-text {
  color: #cc3333;
  font-size: 0.85rem;
  margin-top: 0.3rem;
}
</style>
