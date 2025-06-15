import { css } from '@emotion/react';

import { sectionGridBg } from '~/styles/background';

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
            <h3 css={titleStyles}>{value.title}</h3>
            <p css={descriptionStyles}>{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  padding: 40px 20px;
  ${sectionGridBg};
`;

const contentStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 1100px;
`;

const valueCardStyles = css`
  background: ${colors.white};
  border: 2px solid ${colors.blue500};
  padding: 32px;
  text-align: center;
  transition: all 0.2s ease;
  background: ${colors.primary.gray};
`;

const titleStyles = css`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.black};
  margin: 0 0 16px 0;
  line-height: 1.2;
  text-align: center;
`;

const descriptionStyles = css`
  font-size: 18px;
  color: ${colors.gray300};
  margin: 0;
  line-height: 1.5;
`;
