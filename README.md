# 🚀 InfkitAI 랜딩페이지

AI 기반 콘텐츠 변환 서비스를 위한 현대적이고 반응형 랜딩페이지입니다. 유튜브 영상을 다양한 플랫폼에 맞는 콘텐츠로 자동 변환하는 InfkitAI 서비스를 소개합니다.

## ✨ 주요 기능

### 🎯 핵심 서비스 소개

- **실시간 데모**: 유튜브 URL 입력으로 실제 콘텐츠 변환 체험
- **플랫폼별 최적화**: 블로그, 인스타그램, 트위터 등 각 플랫폼에 맞는 콘텐츠 생성
- **AI 트렌드 분석**: 최신 트렌드를 반영한 콘텐츠 제안

### 🎨 사용자 경험

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기 최적화
- **부드러운 애니메이션**: Framer Motion을 활용한 스크롤 애니메이션
- **직관적인 UI**: shadcn/ui 컴포넌트 시스템 기반의 일관된 디자인
- **다크 테마**: 현대적인 그라데이션과 글래스모피즘 효과

### 📝 사용자 정보 수집

- **3단계 폼**: 기본정보 → 활동정보 → 목표설정
- **실시간 검증**: 폼 입력 검증 및 피드백
- **성공 애니메이션**: 가입 완료 시 부드러운 전환 효과

## 🛠️ 기술 스택

### 프론트엔드 프레임워크

- **Next.js 15.3.2** - App Router 사용
- **React 19.0.0** - 최신 React 기능 활용
- **TypeScript 5** - 타입 안전성 보장

### UI/UX 라이브러리

- **Tailwind CSS 4** - 유틸리티 기반 스타일링
- **shadcn/ui** - 재사용 가능한 컴포넌트 시스템
- **Radix UI** - 접근성 중심의 헤드리스 컴포넌트
- **Framer Motion** - 부드러운 애니메이션 효과
- **Lucide React** - 아이콘 라이브러리

### 개발 도구

- **ESLint** - 코드 품질 관리
- **PostCSS** - CSS 후처리
- **class-variance-authority** - 조건부 스타일링

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃 (폰트, 메타데이터)
│   ├── page.tsx           # 메인 랜딩페이지
│   ├── globals.css        # 글로벌 스타일 및 Tailwind
│   └── favicon.ico        # 파비콘
├── components/            # 재사용 컴포넌트
│   └── ui/               # shadcn/ui 컴포넌트
│       ├── button.tsx    # 버튼 컴포넌트
│       ├── card.tsx      # 카드 컴포넌트
│       ├── input.tsx     # 입력 컴포넌트
│       └── badge.tsx     # 배지 컴포넌트
└── lib/                  # 유틸리티 함수
    └── utils.ts          # 클래스명 병합 유틸리티
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0.0 이상
- npm, yarn, pnpm 또는 bun

### 설치 및 실행

1. **저장소 클론**

```bash
git clone https://github.com/your-username/infkit-ai-landing-page.git
cd infkit-ai-landing-page
```

2. **의존성 설치**

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
# 또는
bun install
```

3. **개발 서버 실행**

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```

4. **브라우저에서 확인**
   [http://localhost:3000](http://localhost:3000)에서 결과를 확인하세요.

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 코드 검사
npm run lint
```

## 🎨 디자인 시스템

### 색상 팔레트

- **주요 색상**: Purple-Pink 그라데이션 (`from-purple-500 to-pink-500`)
- **배경**: 다크 테마 기반 (`slate-900`, `purple-900`)
- **텍스트**: 화이트/그레이 계열
- **액센트**: 네온 효과의 보라/핑크 조합

### 타이포그래피

- **주 폰트**: Geist Sans (Next.js 최적화)
- **모노스페이스**: Geist Mono
- **반응형 크기**: `text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl`

### 애니메이션

- **스크롤 애니메이션**: Framer Motion의 `whileInView` 사용
- **호버 효과**: `hover:scale-105`, `hover:bg-white/10`
- **로딩 상태**: 스피너와 펄스 효과

## 📱 페이지 구성

### 1. 헤더 (Header)

- 고정 헤더, 반투명 배경
- 로고 및 네비게이션 메뉴

### 2. 히어로 섹션 (Hero Section)

- 핵심 메시지 및 CTA 버튼
- 실시간 데모 기능
- 플랫폼 아이콘 표시

### 3. 기능 소개 (Features Section)

- 3개 주요 기능 카드
- 호버 애니메이션 효과

### 4. 사용법 안내 (How It Works)

- 3단계 프로세스 설명
- 순차적 애니메이션

### 5. 고객 후기 (Testimonials)

- 3개 고객 후기 카드
- 별점 시스템

### 6. 요금제 (Pricing)

- 단일 요금제 정보
- 할인 혜택 강조

### 7. 가입 폼 (Sign Up Form)

- 3단계 사용자 정보 수집
- 실시간 폼 검증
- 성공 애니메이션

### 8. 푸터 (Footer)

- 4개 섹션 그리드 레이아웃
- 연락처 정보

## 🔧 커스터마이징

### 색상 변경

`src/app/globals.css`에서 CSS 변수를 수정하여 색상을 변경할 수 있습니다.

### 컴포넌트 수정

`src/components/ui/` 폴더의 컴포넌트들을 수정하여 디자인을 커스터마이징할 수 있습니다.

### 애니메이션 조정

`src/app/page.tsx`의 Framer Motion variants를 수정하여 애니메이션을 조정할 수 있습니다.

## 📊 성능 최적화

- **Next.js App Router**: 최신 라우팅 시스템
- **서버 컴포넌트**: 기본 서버 사이드 렌더링
- **이미지 최적화**: SVG 아이콘 사용
- **폰트 최적화**: Next.js 폰트 최적화 기능
- **CSS 최적화**: Tailwind CSS의 사용하지 않는 스타일 제거

## 🌐 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 기타 플랫폼

- **Netlify**: `npm run build` 후 `out` 폴더 배포
- **AWS S3**: 정적 웹사이트 호스팅
- **GitHub Pages**: GitHub Actions를 통한 자동 배포

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

- **이메일**: support@infkitai.com
- **전화**: 1588-0000
- **웹사이트**: [https://infkitai.com](https://infkitai.com)

## 🙏 감사의 말

- [Next.js](https://nextjs.org/) - 강력한 React 프레임워크
- [Tailwind CSS](https://tailwindcss.com/) - 유틸리티 기반 CSS 프레임워크
- [shadcn/ui](https://ui.shadcn.com/) - 아름다운 컴포넌트 라이브러리
- [Framer Motion](https://www.framer.com/motion/) - 부드러운 애니메이션 라이브러리
- [Lucide](https://lucide.dev/) - 아이콘 라이브러리

---

⭐ 이 프로젝트가 도움이 되었다면 별표를 눌러주세요!
