import { defineConfig, devices } from '@playwright/test';

// Playwright E2E 테스트 설정 파일
// End-to-End 테스트를 위한 브라우저 자동화 구성
export default defineConfig({
  // 테스트 디렉토리 설정
  testDir: './e2e',
  // 실패한 테스트만 다시 실행하는 재시도 설정
  retries: process.env.CI ? 2 : 0,
  // 병렬 테스트 실행 시 사용할 작업 수
  workers: process.env.CI ? 1 : undefined,
  // CI 환경에서 실패 시 보고서 생성
  reporter: 'html',
  // 브라우저 설정
  use: {
    // 테스트베이스 URL
    baseURL: 'http://localhost:3000',
    // 스크린샷 캡처 (실패 시)
    screenshot: 'only-on-failure',
    // 스크린샷 캡처 (실패 시)
    trace: 'on-first-retry',
  },
  // 테스트 프로젝트 구성
  projects: [
    // Chromium 브라우저로 테스트
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
