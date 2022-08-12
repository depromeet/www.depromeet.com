import Image from 'next/image';

import { css } from '@emotion/react';
import { Section } from 'common/components';
import { useDeviceContext } from 'common/hooks';

import { Inflearn, Wanted, Nipa } from '../../assets/images/sponsor';

export default function Sponsor() {
  const device = useDeviceContext();

  return (
    <Section>
      <Section.Title css={device === 'mobile' && { fontSize: 16 }}>
        후원사
        {device !== 'mobile' && (
          <Section.SubText>DEPROMEET 11기는 해당 후원사의 지원을 통해 진행됩니다.</Section.SubText>
        )}
      </Section.Title>

      <Section.Content css={device === 'mobile' ? contentMobileStyles : contentStyles}>
        <Inflearn />
        <Wanted />
        <Nipa />
      </Section.Content>
    </Section>
  );
}

const contentStyles = css`
  position: relative;
  box-sizing: border-box;
  width: 1140px;
  height: 260px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 32px;
  padding: 40px 48px;
  background-color: #191919;
`;

const contentMobileStyles = css`
  ${contentStyles};

  flex-direction: column;
  justify-content: space-evenly;
  align-items: cetner;

  width: 100%;
  height: 320px;

  border-radius: 20px;
  padding: 22px 22px;

  & > svg {
    width: 55%;
  }
`;
