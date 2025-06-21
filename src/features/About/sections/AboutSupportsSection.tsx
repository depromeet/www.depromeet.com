import { css } from '@emotion/react';

import { Supports } from '~/components/Supports';
import { DEPROMEET_EMAIL } from '~/constant/depromeet';
import { sectionBg } from '~/styles/background';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

export const AboutSupportsSection = () => {
  return (
    <div css={[layoutCss]}>
      <Supports />

      <a css={supportButtonCss} href={DEPROMEET_EMAIL}>
        후원 문의하기
      </a>
    </div>
  );
};

const layoutCss = css`
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${sectionBg};
`;

const supportButtonCss = css`
  padding: 12px 38px;
  margin-top: 92px;
  border-radius: 50px;
  color: ${colors.grey['00']};
  background-color: ${colors.grey[500]};
  ${theme.typosV2.pretendard.semibold20}

  ${mediaQuery('mobile')} {
    padding: 16px 28px;
    margin-top: 62px;
    border-radius: 50px;
    ${theme.typosV2.pretendard.bold16}
  }
`;
