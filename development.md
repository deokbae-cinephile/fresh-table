# development.md — `fresh-table` 개발 가이드

## 개발 환경 구축

### 필수 도구

- Node.js 20.x LTS
- pnpm 11.x
- Git

### 초기 설정

```bash
# 코드 체크아웃
git clone https://github.com/deokbae-cinephile/fresh-table.git
cd fresh-table

# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

## 아키텍처

### 폴더 구조

```
fresh-table/
├── app/              # Next.js App Router
├── src/
│   ├── components/   # 재사용 가능한 UI 컴포넌트
│   ├── features/     # 기능 단위 모듈 (페이지 + 비즈니스 로직)
│   ├── domain/       # 도메인 엔티티 및 값 객체
│   ├── hooks/        # 커스텀 훅 (데이터 페칭, 상태 관리)
│   ├── mocks/        # MSW Mock Server (테스트용)
│   ├── pages/        # 페이지 컴포넌트
│   ├── stores/       # 전역 상태 관리 (Zustand 등)
│   ├── styles/       # 전역 스타일 (Tailwind 설정)
│   ├── types/        # TypeScript 타입 정의
│   └── utils/        # 순수 유틸리티 함수
├── e2e/              # Playwright E2E 테스트
└── public/           # 정적 에셋
```

### 데이터 흐름

1. **페이지 컴포넌트** (`src/pages/`)가 사용자에게 UI 제공
2. **커스텀 훅** (`src/hooks/`)이 API 호출 및 상태 관리 담당
3. **도메인 엔티티** (`src/domain/`)가 비즈니스 로직 및 타입 정의
4. **상태 관리** (`src/stores/`)가 전역 상태 (장바구니, 로그인 등) 관리

### API 계층

- 모든 API 호출은 `src/hooks/` 또는 `src/stores/`에서 관리
- MSW (`src/mocks/`)로 API 호출 Mocking
- 실제 API 연동 시 `src/utils/api/`에 클라이언트 구현

## 테스트 가이드

### 유닛 테스트 (Vitest)

```bash
# 모든 유닛 테스트 실행
pnpm test

# 특정 테스트 파일만 실행
pnpm test src/components/Button.test.tsx
```

### E2E 테스트 (Playwright)

```bash
# 모든 E2E 테스트 실행
pnpm test:e2e

# 특정 브라우저로 실행
pnpm test:e2e --project=chromium

# UI 모드에서 디버깅
pnpm test:e2e --ui
```

### Mock Service Worker (MSW)

- API 호출은 `src/mocks/products.ts`에서 Mock 데이터 반환
- 테스트 시 `src/mocks/server.ts`에서 서버 인스턴스 생성
- 실제 API 연동 후 MSW Mock 제거

## 접근성 (A11y) 가이드

모든 컴포넌트는 WCAG 2.2 및 KWCAG 2.2 를 준수해야 합니다.

### 필수 체크리스트

- [ ] 시맨틱 HTML 태그 사용 (`<button>`, `<a>`, `<main>`, etc.)
- [ ] 키보드 내비게이션 지원 (Tab, Enter, Escape)
- [ ] 명도 대비 4.5:1 이상 (큰 글자 3:1)
- [ ] `alt` 속성 (이미지), `aria-label` (아이콘 버튼)
- [ ] 포커스 표시기 (`outline: none` 단독 금지, `:focus-visible` 사용)
- [ ] 화면 리더기 스크린 탐색 지원

### 테스트 도구

- ESLint `jsx-a11y` 플러그인
- axe-core (자동 접근성 검사)
- 키보드 테스트 (수동)

## 배포 가이드

### GitHub Pages

- `.github/workflows/deploy.yml`에 자동 배포 설정
- 빌드 출력: `.next/` 디렉토리
- URL: https://deokbae-cinephile.github.io/fresh-table

### 로컬 빌드

```bash
# 프로덕션 빌드
pnpm build

# 빌드 결과 확인
pnpm start
```

## 코드 품질 기준

- TypeScript Strict Mode (`strict: true`)
- `any` 타입 사용 금지
- ESLint + Prettier 규칙 준수
- 모든 기능 단위 테스트 포함 (유닛 + E2E)
- PR 생성 전 `pnpm lint`, `typecheck`, `test`, `test:e2e` 모두 통과

## 참고 자료

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Playwright Documentation](https://playwright.dev)
- [MSW Documentation](https://mswjs.io)
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [KWCAG 2.2 (한국형 웹 콘텐츠 접근성 지침)](https://github.com/krw3b/KWCAG2.1)
