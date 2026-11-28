import { defineConfig } from 'vitest/config';

// Vitest 설정 파일
// React 프로젝트의 유닛 테스트를 위한 Vitest 구성
export default defineConfig({
  // 테스트 환경 설정
  test: {
    // Node.js 환경에서 테스트 실행 (DOM 테스트 필요 시 jsdom 설치)
    environment: 'node',
    // 테스트 실행 전 globals export
    globals: true,
    // 테스트 환경 설정 파일
    setupFiles: ['./vitest.setup.ts'],
    // e2e/ 폴더는 Vitest 테스트에서 제외 (Playwright 전용)
    exclude: ['e2e/**'],
    // 테스트 커버리지 보고서 생성
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
});
