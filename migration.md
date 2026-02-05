# 18기 메인 페이지 마이그레이션

## 개요

17기 → 18기 웹사이트 메인 페이지(`/`) 개편 작업

- **Figma**: https://www.figma.com/design/YGyiLIRYSn4J6VvDLTzj9S/18기-웹-최종?node-id=1-395
- **담당자**: nika
- **전략**: 기존 파일 유지, 새 파일로 교체

---

## 섹션 구성 비교

| 순서 | 18기 디자인 | 17기 기존 컴포넌트 | 작업 |
|------|------------|-------------------|------|
| 1 | Hero (로고 + 키링 + CTA) | MainIntroSection | 신규 작성 |
| 2 | Branding Text (Connect the ring / Find your key) | MainBrandingSection | 신규 작성 |
| 3 | 성과 통계 (9년, 100%, 76+, 1000+) | MainResultSection | 수정/재사용 검토 |
| 4 | Feature Cards (4개) | MainReasonSection | 신규 작성 |
| 5 | 세션 슬라이더 (Part Networking 등) | MainSessionSection | 신규 작성 |
| 6 | 프로젝트 (6개 카드) | MainProjectSection | 수정/재사용 검토 |
| 7 | FAQ (탭 + 아코디언) | - | 신규 작성 |
| 8 | 문의하기 (카카오톡/이메일) | - | 신규 작성 |
| 9 | 후원사 | MainSupportSection | 수정/재사용 검토 |
| 10 | Footer | Footer (공통) | 재사용 |

**제거 섹션**: MainBlogSection, MainRecruitSection

---

## TODO

### Phase 1: 섹션 컴포넌트 생성

- [ ] **1. Hero Section** (`src/features/Main/sections/v18/HeroSection.tsx`)
  - DEPROMEET 18 로고 (SVG)
  - 키링 이미지
  - "Connect the ring" / "Find your key" 태그라인
  - CTA 버튼 (모집 알림 받기 등)
  - 반응형: Desktop(1920/1280) / Mobile(360)

- [ ] **2. Branding Section** (`src/features/Main/sections/v18/BrandingSection.tsx`)
  - 텍스트 애니메이션: "Connect the ring", "Find your key"
  - "연결의 가치를 성장의 열쇠로" 슬로건
  - Framer Motion 스크롤 애니메이션

- [ ] **3. Stats Section** (`src/features/Main/sections/v18/StatsSection.tsx`)
  - 카운트업 애니메이션 (숫자)
  - 4개 통계: 9년, 100%, 76+, 1,000+
  - 반응형 그리드

- [ ] **4. Features Section** (`src/features/Main/sections/v18/FeaturesSection.tsx`)
  - 4개 Feature Card
  - 이미지 + 타이틀 + 설명
  - Hover 인터랙션 (이미지 1.1배 확대, 나머지 opacity 50%)

- [ ] **5. Sessions Section** (`src/features/Main/sections/v18/SessionsSection.tsx`)
  - 이미지 슬라이더/캐러셀
  - Stepper 네비게이션 (좌우 화살표 + 페이지 인디케이터)
  - 세션 정보: Part Networking, Pre-Launching Day 등

- [ ] **6. Projects Section** (`src/features/Main/sections/v18/ProjectsSection.tsx`)
  - 6개 프로젝트 카드 그리드
  - "프로젝트 전체 보기" 버튼
  - 기존 ProjectCard 컴포넌트 재사용 검토

- [ ] **7. FAQ Section** (`src/features/Main/sections/v18/FAQSection.tsx`)
  - 탭 네비게이션 (지원자격 / 면접관련 / 활동관련)
  - FAQ 아코디언 (펼침/접기)
  - FAQ 데이터 상수 파일 생성

- [ ] **8. Contact Section** (`src/features/Main/sections/v18/ContactSection.tsx`)
  - "궁금한 점이 있으신가요?" 타이틀
  - 카카오톡 문의 버튼 (hover: 채널 ID 노출)
  - 이메일 문의 버튼 (hover: 이메일 노출)

- [ ] **9. Sponsors Section** (`src/features/Main/sections/v18/SponsorsSection.tsx`)
  - 후원사 로고 그리드
  - "후원 문의하기" 버튼
  - 기존 데이터 재사용 검토

### Phase 2: 공통 컴포넌트

- [ ] **Button 컴포넌트** - 18기 디자인 스타일 적용
- [ ] **Stepper 컴포넌트** - 슬라이더 네비게이션용
- [ ] **Tab 컴포넌트** - FAQ 탭용
- [ ] **Accordion 컴포넌트** - FAQ 아이템용

### Phase 3: 에셋 및 상수

**필수 이미지 (Figma에서 export 필요):**
- [ ] `public/images/18th/keyring.png` - Hero 섹션 키링 이미지
- [ ] `public/images/18th/feature-1.png` - Feature 카드 1 (협업/동료)
- [ ] `public/images/18th/feature-2.png` - Feature 카드 2 (네트워킹)
- [ ] `public/images/18th/feature-3.png` - Feature 카드 3 (런칭행사)
- [ ] `public/images/18th/feature-4.png` - Feature 카드 4 (프로덕트)
- [ ] `public/images/18th/session-1.png` ~ `session-7.png` - 세션 슬라이더 이미지

**재사용 가능 (기존 이미지 활용):**
- [x] 후원사 로고 - `/images/17th/support/sponsor-*.png`
- [x] 프로젝트 이미지 - `/images/project/17기/*.png`

**상수 데이터:**
- [x] FAQ 데이터 - FAQSection.tsx 내 하드코딩 (필요시 분리)

### Phase 4: 페이지 통합

- [ ] `src/pages/index.tsx` 에서 v18 섹션으로 교체
- [ ] SEO 메타데이터 업데이트 (18기)
- [ ] 반응형 테스트 (Desktop / Tablet / Mobile)

### Phase 5: 정리

- [ ] 사용하지 않는 17기 컴포넌트 정리 (선택적)
- [ ] 코드 리뷰 및 린트 수정

---

## 파일 구조 (예상)

```
src/features/Main/
├── sections/
│   ├── v18/                          # 18기 신규 섹션
│   │   ├── index.ts
│   │   ├── HeroSection.tsx
│   │   ├── BrandingSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── SessionsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── SponsorsSection.tsx
│   ├── MainIntroSection.tsx          # 17기 (유지)
│   └── ...
├── components/
│   ├── Stepper.tsx                   # 슬라이더 네비게이션
│   ├── Tab.tsx                       # FAQ 탭
│   └── Accordion.tsx                 # FAQ 아코디언
```

---

## 이미지 최적화

이미지 파일 추가 시 **메타데이터 제거 + 압축** 필수:

### CLI 도구 (권장)

```bash
# pngquant (PNG 압축)
brew install pngquant
pngquant --quality=65-80 --strip image.png

# jpegoptim (JPEG 압축 + 메타데이터 제거)
brew install jpegoptim
jpegoptim --strip-all --max=80 image.jpg

# imageoptim-cli (통합 도구)
npm install -g imageoptim-cli
imageoptim "public/images/**/*.{png,jpg}"

# sharp (Node.js - 빌드 스크립트용)
npx sharp-cli --input image.png --output optimized.png --quality 80
```

### 웹 서비스

- https://tinypng.com (기존 사용)
- https://squoosh.app (Google, 브라우저 기반)

### Next.js 자동 최적화

Next.js Image 컴포넌트 사용 시 자동 최적화:
```tsx
import Image from 'next/image';
<Image src="/images/hero.png" width={800} height={600} alt="hero" />
```

---

## 참고 사항

- 반응형 브레이크포인트: `mediaQuery('mobile')` (max-width: 767px)
- 애니메이션: Framer Motion 사용
- 스타일링: Emotion CSS-in-JS
- 기존 코드 참고하여 패턴 유지
