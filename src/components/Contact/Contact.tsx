import Link from 'next/link';
import { css, Theme } from '@emotion/react';

import { SectionTitle } from '~/components/SectionTitle';
import { CONTACT_INFO } from '~/constant/contactInfo';
import { commonLayoutCss } from '~/styles/layout';
import { mediaQuery } from '~/styles/media';

export function Contact() {
  return (
    <div css={[commonLayoutCss, layoutCss]}>
      <SectionTitle label="Contact" title="디프만에 대해 궁금한게 있으신가요?" />
      <ul css={infoListCss}>
        {CONTACT_INFO.map(footer => (
          <li key={footer.name}>
            <Link css={InfoCss} href={footer.href} target="_blank">
              <span css={infoNameCss}>{footer.name}</span>
              <span>{footer.detail}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const layoutCss = css`
  margin-top: 150px;
  margin-bottom: 150px;
  ${mediaQuery('tablet')} {
    margin-top: 150px;
    margin-bottom: 150px;
  }
  ${mediaQuery('mobile')} {
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;

const infoListCss = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  ${mediaQuery('mobile')} {
    gap: 10px;
  }
`;

const InfoCss = (theme: Theme) => css`
  ${theme.typos.pretendard.body1};
  background-color: ${theme.colors.black400};
  color: ${theme.colors.gray20};
  width: 470px;
  height: 172px;
  padding: 48px 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  ${mediaQuery('tablet')} {
    width: 100%;
  }

  ${mediaQuery('mobile')} {
    font-size: 0.8rem;
    width: 100%;
    height: 96px;
    padding: 16px 8px;
  }
`;

const infoNameCss = (theme: Theme) => css`
  ${theme.typos.decimal.subTitle1};
  color: ${theme.colors.blue300};
`;
