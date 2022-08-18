import { css } from '@emotion/react';

import { SCHEDULE_LIST } from './constants';
import { ScheduleGraph } from './ScheduleGraph';

export default function ScheduleSection() {
  return (
    <section css={sectionCss}>
      <h3 css={headingCss}>모집 일정</h3>
      <div css={blockContainerCss}>
        <div css={recuritBlockCss}>맴버 모집 기간</div>
        <div css={activeBlockCss}>정규 황동 기간</div>
      </div>
      <div css={rangeContainerCss}>
        {SCHEDULE_LIST.map((schedule, index) => (
          <ScheduleGraph
            schedule={schedule}
            isLast={index + 1 === SCHEDULE_LIST.length}
            key={`${schedule.title}-${index}`}
          />
        ))}
      </div>
    </section>
  );
}

const sectionCss = css`
  width: 100%;
  margin-bottom: 180px;
`;

const headingCss = css`
  font-weight: 700;
  font-size: 42px;
  line-height: 140%;
`;

const blockContainerCss = css`
  display: flex;
  justify-content: space-between;

  max-width: 1000px;
  width: 100%;
  height: 42px;
  margin: 50px auto 0;
  padding: 0 30px;
`;

const recuritBlockCss = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 61.2%;
  height: 100%;

  background: #1b5bff;
  border-radius: 10px;

  font-weight: 700;
  font-size: 20px;
  line-height: 180%;
  color: #ffffff;
`;

const activeBlockCss = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100% - 61.2% - 2.4%);
  height: 100%;

  color: white;
  background: #1b1a1e;
  border-radius: 10px;

  font-weight: 600;
  font-size: 20px;
  line-height: 180%;

  color: #afaeb6;
`;

const rangeContainerCss = css`
  display: flex;
  align-items: flex-start;

  max-width: 1000px;
  height: 150px;
  margin: 40px auto 0;
  padding: 0 30px;
`;
