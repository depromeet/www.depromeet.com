import { css } from '@emotion/react';

import { sectionBg } from '~/styles/background';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

import { colors } from '../../styles/colors';

export const ValueSection = () => {
  const values = [
    {
      id: 'responsibility',
      title: 'Responsibility & Ownership',
      description: '서비스에 책임감을 갖고, 주인의식을 바탕으로 끝까지 해내는 사람',
    },
    {
      id: 'collaboration',
      title: 'Collaboration & Sharing',
      description: '의견을 존중하며 적극적으로 소통하고, 지식과 경험을 나누며 함께 성장하는 사람',
    },
    {
      id: 'passion',
      title: 'Passion & Adventure',
      description: '새로운 도전을 즐기며, 열정을 가지고 주도적으로 해결책을 찾아나가는 사람',
    },
  ];

  return (
    <div css={containerStyles}>
      <div css={contentStyles}>
        <div css={titleStyles}>17기의 인재상</div>
        {values.map(value => (
          <div key={value.id} css={valueCardStyles}>
            <h3 css={semititleStyles}>{value.title}</h3>
            <p css={descriptionStyles}>{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  padding: 120px 20px;
  ${sectionBg};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 50px;
    width: 282px;
    height: 282px;
    background-image: url('/images/17th/shapes/compass.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top right;
    z-index: 0;
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -120px;
    left: -50px;
    width: 312px;
    height: 312px;
    background-image: url('/images/17th/shapes/pink_arrow.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom left;
    z-index: 3;
    opacity: 1;
    transform: rotate(18deg);
  }
`;

const contentStyles = css`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 1100px;
  align-items: center;
`;

const valueCardStyles = css`
  background: ${colors.white};
  border: 1px solid ${colors.blue500};
  padding: 28px 26px;
  text-align: center;
  transition: all 0.2s ease;
  width: 730px;
  background: ${colors.primary.gray};

  ${mediaQuery('tablet')} {
    width: 328px;
  }
  ${mediaQuery('mobile')} {
    width: 328px;
  }
`;

const titleStyles = css`
  ${theme.typosV3.pretendard.head1};
  font-weight: 600;
  margin: 0 0 16px 0;
  text-align: center;
`;

const semititleStyles = css`
  ${theme.typosV3.MartianMono.head3};
  font-weight: 500;
  letter-spacing: -4%;
  line-height: 109%;
  margin: 0 0 16px 0;
  line-height: 1.2;
  text-align: center;

  ${mediaQuery('tablet')} {
    ${theme.typosV3.MartianMono.body2};
    font-weight: 500;
    font-size: 17px;
  }
  ${mediaQuery('mobile')} {
    ${theme.typosV3.MartianMono.body2};
    font-weight: 500;
    font-size: 17px;
  }
`;

const descriptionStyles = css`
  ${theme.typosV3.pretendard.sub2Semibold};
  font-weight: 500;

  margin: 0;
  line-height: 1.5;

  ${mediaQuery('tablet')} {
    ${theme.typosV3.pretendard.sub4Semibold};
    font-weight: 500;
  }
  ${mediaQuery('mobile')} {
    ${theme.typosV3.pretendard.sub4Semibold};
    font-weight: 500;
  }
`;
