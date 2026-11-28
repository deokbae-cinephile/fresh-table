# CLAUDE.md — `fresh-table` 프로젝트 Claude Code 지침서

이 파일은 Claude Code 에이전트가 `fresh-table` 프로젝트를 개발할 때 참조하는 문서입니다.

## 핵심 규칙

- 모든 응답, 코드 주석, 커밋 메시지는 한국어로 작성
- `any` 타입 사용 금지, 엄격한 TypeScript Strict Mode 적용
- 로딩/에러/빈 데이터 상태 처리 필수
- WCAG 2.2 / KWCAG 2.2 접근성 준수

## 기술 스택

- Next.js 16.4.6 + React 19.3.0 + TypeScript 5.9.3
- Tailwind CSS 4.3.3
- Vitest 3.2.7 (유닛), Playwright 1.65.1 (E2E)
- MSW 2.15.0 (Mock Service Worker)

## 개발 명령어

```bash
pnpm dev       # 개발 서버
pnpm build     # 프로덕션 빌드
pnpm lint      # ESLint 검사
pnpm typecheck # TypeScript 타입 검사
pnpm test      # Vitest 유닛 테스트
pnpm test:e2e  # Playwright E2E 테스트
```

## 프로젝트 구조

- `app/`: Next.js App Router (라우팅, 레이아웃)
- `src/`: 소스 코드 (컴포넌트, 도메인, 훅, 상태 관리)
- `e2e/`: Playwright E2E 테스트
- `public/`: 정적 에셋 (이미지, 아이콘)

## Git 워크플로우

- 브랜치 전략: `main` 기반 Git Flow
- 커밋 메시지: Conventional Commits (`feat:`, `fix:`, `refactor:`, etc.)
- 버전 관리: Semantic Versioning (0.1.0)
- PR 생성 전 `pnpm lint`, `typecheck`, `test`, `test:e2e` 모두 통과 필수
