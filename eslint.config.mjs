import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import prettierRecommended from "eslint-config-prettier";
import globals from "globals";

const eslintConfig = defineConfig([
  // Next.js Core Web Vitals 규칙 적용 (React Hooks, a11y 포함)
  ...nextVitals,
  // Next.js TypeScript 규칙 적용
  ...nextTs,
  // TypeScript ESLint 규칙 활성화
  ...tseslint.configs.recommended,
  // JavaScript ESLint 기본 규칙 활성화
  js.configs.recommended,
  // React 플러그인 활성화
  react.configs.flat.recommended,
  // Prettier 규칙과 ESLint 규칙 충돌 방지
  prettierRecommended,
  // globals 설정 (Node.js, Browser, Testing, MSW)
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        // Vitest globals
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        // Playwright globals
        test: "readonly",
        // MSW globals
        http: "readonly",
        HttpResponse: "readonly",
      },
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // 파일 패턴별 규칙 적용
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // 엄격한 타입 검사 (any 사용 금지)
      "@typescript-eslint/no-explicit-any": "error",
      // 사용하지 않는 변수 경고
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      // React 컴포넌트 이름 규칙
      "react/react-in-jsx-scope": "off",
      // JSX 문법 검사
      "react/jsx-boolean-value": "error",
      "react/jsx-key": "error",
      "react/jsx-no-target-blank": "error",
    },
  },
  // 테스트 파일 패턴별 규칙 적용
  {
    files: ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts", "**/*.e2e.ts"],
    rules: {
      // 테스트 파일에서는 any 허용 (Mock 데이터용)
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
]);

export default eslintConfig;
