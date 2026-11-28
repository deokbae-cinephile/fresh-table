# Changelog

모든 중요한 변경 사항의 기록입니다.

형식: `## x.y.z - YYYY-MM-DD`

---

## 0.1.0 - 2024-11-28

### Added

- Next.js 16.4.6 + React 19.3.0 프로젝트 초기 세팅
- TypeScript 5.9.3 Strict Mode 설정
- Tailwind CSS 4.3.3 + Turbopack 설정
- Vitest 3.2.7 (유닛 테스트) 환경 설정
- Playwright 1.65.1 (E2E 테스트) 환경 설정
- MSW 2.15.0 (Mock Service Worker) 설정
  - 제품 목록 API Mock (`/api/products`)
  - 수산물 22종 Mock 데이터
  - 농작물 20종 Mock 데이터
- ESLint 9.39.5 + Prettier 3.5.0 설정
  - 접근성 검사 (jsx-a11y) 활성화 (WCAG 2.2 / KWCAG 2.2)
  - 엄격한 TypeScript 타입 검사 (`any` 사용 금지)
- GitHub Actions CI/CD 워크플로우
  - `.github/workflows/ci.yml` (코드 품질 검사)
  - `.github/workflows/deploy.yml` (GitHub Pages 자동 배포)
- 표준 디렉터리 구조 생성
  - `src/{components,features,domain,hooks,mocks,pages,stores,styles,types,utils}`
  - `e2e/` (Playwright 테스트)
  - `public/{crops,seafood}` (이미지 에셋)
- 문서 초기화
  - `README.md`
  - `CLAUDE.md`
  - `development.md`
  - `CHANGELOG.md`
- Git 계정 설정 (`deokbae-cinephile`)
- AGENTS.md (에이전트 지침서)
