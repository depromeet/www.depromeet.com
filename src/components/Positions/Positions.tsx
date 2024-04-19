import Image from 'next/image';
import { css, Theme } from '@emotion/react';

import { PositionsItem } from '~/components/Positions/PositionsItem';
import { POSITIONS } from '~/constant/position';
import { mediaQuery } from '~/styles/media';

import { MobilePositionItem } from './MobilePositionItem';

export function Positions() {
  return (
    <section css={layoutCss}>
      <div css={containerCss}>
        <div css={headerCss}>
          <div css={logosCss}>
            <Image src="/images/logo.svg" alt="디프만 로고" width={278} height={58} />
            <Image
              src="/images/recruit/2024-recruitment.svg"
              alt="모집 헤더"
              width={143}
              height={68}
            />
          </div>
          <div css={titleCss}>
            <h1>모집 직군</h1>
            <p>디프만은 다섯개의 직군에서 신규 회원을 모집하고 있습니다.</p>
          </div>
        </div>
        <div css={mobileHeaderCss}>
          <Image src="/images/logo.svg" alt="디프만 로고" width={278} height={58} />
          <div css={titleCss}>
            <h1>모집 직군</h1>
            <p>
              디프만은 다섯개의 직군에서 신규 회원을
              <br />
              모집하고 있습니다.
            </p>
          </div>
        </div>
        <div css={listCss}>
          {POSITIONS.map(({ ...info }) => (
            <PositionsItem key={info.type} {...info} />
          ))}
        </div>
        <div css={mobileListCss}>
          {POSITIONS.map(({ ...info }) => (
            <MobilePositionItem
              key={info.type}
              title={info.title}
              type={info.type}
              link={info.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const layoutCss = css`
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

const containerCss = css`
  width: 100%;
  margin-top: 10px;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 56px;
`;

const headerCss = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;

  ${mediaQuery('mobile')} {
    display: none;
  }
`;

const logosCss = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const mobileHeaderCss = css`
  display: none;

  ${mediaQuery('mobile')} {
    display: flex;
    flex-direction: column;
    gap: 80px;
    align-items: center;
  }
`;

const titleCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  > h1 {
    ${theme.typos.notosans.semibold20}
  }

  > p {
    ${theme.typos.notosans.regular20}
  }
`;

const listCss = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 960px; // TODO 전체 너비 상수화

  ${mediaQuery('tablet')} {
    width: 100%;
  }
  ${mediaQuery('mobile')} {
    display: none;
  }
`;

const mobileListCss = css`
  display: none;

  ${mediaQuery('mobile')} {
    padding: 0 16px;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
