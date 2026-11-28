# Fresh Table (프레쉬 테이블)

신선한 수산물과 농작물 구독 및 판매 전문 서비스

## 기술 스택

- **프레임워크**: Next.js 16.4.6 (App Router)
- **언어**: TypeScript 5.9.3 (Strict Mode)
- **스타일링**: Tailwind CSS 4.3.3
- **테스트**: Vitest 3.2.7 (유닛), Playwright 1.65.1 (E2E)
- **Mocking**: MSW 2.15.0 (Mock Service Worker)

## 기능

- 수산물과 농작물 목록 화면 (필터링, 호버/터치 상세 정보)
- 로그인, 회원가입, 주문, 결제
- 구독 서비스, 바로 구매 서비스, 장바구니 담기
- 마이페이지 (주문 내역, 배송 상태)

## 개발 환경 설정

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 테스트 실행
pnpm test        # 유닛 테스트 (Vitest)
pnpm test:e2e    # E2E 테스트 (Playwright)

# 코드 품질 검사
pnpm lint        # ESLint
pnpm typecheck   # TypeScript 타입 검사
```

## 프로젝트 구조

```
fresh-table/
├── app/              # Next.js App Router (라우팅, 레이아웃)
├── src/              # 소스 코드
│   ├── components/   # 재사용 가능한 UI 컴포넌트
│   ├── features/     # 기능 단위 모듈
│   ├── domain/       # 도메인 로직 및 엔티티
│   ├── hooks/        # 커스텀 훅
│   ├── mocks/        # MSW Mock Server 및 테스트 데이터
│   ├── pages/        # 페이지 컴포넌트
│   ├── stores/       # 상태 관리 (Zustand 등)
│   ├── styles/       # 전역 스타일
│   ├── types/        # TypeScript 타입 정의
│   └── utils/        # 유틸리티 함수
├── e2e/              # Playwright E2E 테스트
├── public/           # 정적 에셋 (이미지, 아이콘)
│   ├── crops/        # 농작물 이미지
│   └── seafood/      # 수산물 이미지
└── .github/          # GitHub Actions 워크플로우
```

## 테스트

```bash
# 모든 테스트 실행
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
```

## 배포

GitHub Pages에 자동 배포됩니다.

- **URL**: https://deokbae-cinephile.github.io/fresh-table
- **워크플로우**: `.github/workflows/deploy.yml`


