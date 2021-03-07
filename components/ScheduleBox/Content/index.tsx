import styled from 'styled-components';
import { ReactNode } from 'react';
import { media } from '../../../styles/theme';
import StepLottie, { LottieProps } from '../../StepLottie';
import Description from './Description';
import Animation from './Animation';
import Spacer from './Spacer';

type ScheduleBoxContentProps = {
  desc: ReactNode,
  lottie: LottieProps,
} & Partial<{className: string}>;

const Content = ({ className, desc, lottie }: ScheduleBoxContentProps) => (
  <div className={className}>
    <Description>{desc}</Description>
    <Spacer className="mobile__none" />
    <Animation>
      <div className="lottie-container">
        <StepLottie lottie={lottie} />
      </div>
    </Animation>
  </div>
);

export default styled(Content)`
  display: flex;
  ${media.mobile} {
    justify-content: space-between;
    align-items: center;
  }
  .lottie-container {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
