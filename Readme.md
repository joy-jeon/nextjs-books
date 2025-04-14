## 프로젝트 기술 요약

### 개발 환경 및 패키지 정보

- Next.js: ^14.2.28
- React: ^18.3.1
- Node.js: 18.20.7 (Volta로 고정)
- TypeScript: ^5.8.3
- CSS Modules
- Vercel 배포

### 사용한 주요 기능 (Next.js 내장 기능 중심)

- next/font/google: Google Fonts 최적화 및 자동 서브셋 처리
- generateMetadata(): 페이지별 동적 SEO 메타데이터 설정
- metadata.template / metadata.default: 공통 레이아웃 메타 정의
- next/navigation의 usePathname(): 현재 경로 기반 조건 렌더링
- app/ 기반 App Router 사용
- 동적 라우팅: /list/[id]
- html에 dark / light class를 적용하여 CSS 변수 기반 테마 전환

### 구현 목표

1. 홈 페이지 (/)

   - 전체 베스트셀러 카테고리 리스트 조회 및 링크 연결

2. 상세 페이지 (/list/[id])

   - 해당 카테고리의 도서 목록 출력 (이미지, 제목, 저자, 아마존 링크 포함)

3. 어바웃 페이지 (/about)

   - 프로젝트 소개 문구 제공

4. 공통 레이아웃 적용

   - Header 및 테마 토글 버튼 유지

5. 404 페이지 구성

   - 존재하지 않는 경로 접근 시 사용자 안내 문구 출력

6. 다크/라이트 테마 전환 기능
   - 버튼 클릭 시 <html>의 class 변경을 통해 CSS 변수 동적 전환

### 사용한 외부 API

- 카테고리 리스트 전체 조회  
  GET https://books-api.nomadcoders.workers.dev/lists

- 카테고리별 도서 리스트 조회  
  GET https://books-api.nomadcoders.workers.dev/list?name=카테고리명

### 기타 사항

- Volta를 통해 Node 버전 고정 (18.20.7)
- tsconfig.json에 절대경로 alias 설정 가능
- CSS Modules로 컴포넌트 단위 스타일링 유지
- 테마 상태에 따라 SVG 아이콘 조건부 렌더링
- 초기 메타데이터는 중앙 layout.tsx에서 전역 설정

### 배포 주소

- https://nextjs-books-nu.vercel.app/
