// MSW Mock Server 설정 파일
// API 호출을 가로채서 Mock 데이터 반환
import { setupServer } from 'msw/node';
// 제품 목록 API Mock 핸들러 불러오기
import { handlers } from './products';

// MSW 서버 인스턴스 생성
// 테스트 실행 전 모든 API 호출을 Mock으로 대체
export const server = setupServer(...handlers);
