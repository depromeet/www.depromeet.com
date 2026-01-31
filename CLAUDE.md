# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Depromeet 공식 웹사이트 (www.depromeet.com) - Next.js 13 기반의 정적 웹사이트

## Commands

```bash
npm run dev          # 개발 서버 실행
npm run build        # 프로덕션 빌드
npm run lint         # ESLint 검사
npm run lint:fix     # ESLint 자동 수정
npm run test         # Vitest 테스트 실행
npm run storybook    # Storybook 실행 (포트 6006)
```

## Architecture

### Directory Structure
- `src/pages/` - Next.js 페이지 라우팅 (index, about, recruit, project, blog, apply)
- `src/components/` - 재사용 가능한 UI 컴포넌트
- `src/features/` - 페이지별 feature 컴포넌트 (About, Blog, Main, Project, Recruit, Common)
- `src/constant/` - 정적 데이터 (프로젝트, 블로그, FAQ, 리뷰 등)
- `src/styles/` - 스타일 관련 유틸리티 및 테마
- `src/hooks/` - 커스텀 React 훅

### Tech Stack
- **Framework**: Next.js 13 (Pages Router)
- **Styling**: Emotion (CSS-in-JS) with `css` prop
- **Animation**: Framer Motion
- **State**: Jotai
- **Testing**: Vitest + Testing Library

### Path Alias
`~/` 로 `src/` 디렉토리 참조 (예: `import { Button } from '~/components/Button'`)

### Responsive Design
`src/styles/media.ts`의 `mediaQuery` 함수 사용:
- `mediaQuery('mobile')` - max-width: 767px
- `mediaQuery('tablet')` - max-width: 1023px
- `mediaQuery('pc')` - min-width: 1024px

### SVG
SVG 파일은 `@svgr/webpack`을 통해 React 컴포넌트로 import 가능

### Import Order (ESLint 자동 정렬)
1. react > next > @ > a~z
2. ~ (내부 모듈)
3. 상대 경로 (./ > ../)
