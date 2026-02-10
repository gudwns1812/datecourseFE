import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      // 1. /v1으로 시작하는 모든 요청을 타겟 주소로 보냅니다.
      '/v1': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        // 필요하다면 rewrite 설정 (백엔드 경로에 /v1이 포함되어 있다면 필요 없음)
        // rewrite: (path) => path.replace(/^\/v1/, '') 
      }
    }
  }
})