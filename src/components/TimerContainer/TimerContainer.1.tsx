import { Timer } from './Timer';
import { containerCss, gradientCss, layoutCss, headingCss, buttonCss } from './TimerContainer';

export function TimerContainer() {
  return (
    <div css={containerCss}>
      <div css={gradientCss} />
      <div css={layoutCss}>
        <div>
          <div css={headingCss}>
            <h1>DEPROMEET</h1>
            <p>디프만은 디자이너와 개발자가 만나 서비스 기획부터 론칭까지</p>
            <p>하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다</p>
          </div>
          <Timer deadlineDay={DEADLINE_DATE} />
          <button css={buttonCss}>14기 지원하기</button>
        </div>
      </div>
    </div>
  );
}
