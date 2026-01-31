/**
 * Blog 페이지 콘텐츠 영역 고정 너비
 * Figma: 82-2284 (1280+), 82-2419 (768~1279), 82-2487 (360~767)
 */
export const BLOG_CONTENT_WIDTH = {
  /** 1280px 이상 */
  desktop: 1200,
  /** 768px ~ 1279px */
  tablet: 688,
  /** 360px ~ 767px 고정, 360px 미만 max-width */
  mobile: 320,
} as const;
