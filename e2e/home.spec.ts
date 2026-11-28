// Playwright E2E 테스트 - 홈 페이지 기본 검증
// 홈 페이지가 정상적으로 로드되고 제목이 표시되는지 확인
import { test, expect } from '@playwright/test';

// 홈 페이지 로드 테스트
test('홈 페이지가 정상적으로 로드되어야 한다', async ({ page }) => {
  // 홈 페이지로 이동
  await page.goto('/');
  // 페이지 로딩 완료 대기
  await page.waitForLoadState('networkidle');
  // 페이지 상태 확인 (200 OK)
  await expect(page).toHaveTitle(/Fresh-table/);
});
