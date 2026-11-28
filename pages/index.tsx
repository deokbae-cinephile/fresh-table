// Next.js 페이지 컴포넌트
// 홈 페이지를 렌더링하는 함수 컴포넌트
// Next.js Head 컴포넌트를 import하여 페이지 제목 설정
import Head from "next/head";

export default function Home() {
  // 메인 컨테이너 div
  return (
    <div>
      {/* Next.js Head 컴포넌트로 페이지 제목 및 메타데이터 설정 */}
      <Head>
        {/* 페이지 제목 - E2E 테스트에서 /Next.js/ 패턴으로 확인 */}
        <title>Fresh-table - 신선한 수산물과 농작물 구독 서비스</title>
      </Head>
      {/* Fresh-table 헤더 */}
      <header>
        <h1>Fresh-table</h1>
        <p>신선한 수산물과 농작물 구독 서비스</p>
      </header>
      {/* 메인 콘텐츠 영역 */}
      <main>
        <h2>환영합니다</h2>
        <p> Fresh-table에 오신 것을 환영합니다. </p>
      </main>
    </div>
  );
}
