import { css } from '@emotion/react';

import { POSITION_ICON_BASE } from '~/constants/images';
import { colors } from '~/styles/constants';

import ProjectDetailLink from './ProjectDetailLink';
import { Project } from '../project/constants';

export default function MobileProjectDetailSection({
  generation,
  title,
  catchphrase,
  prize,
  team,
  designers,
  frontends,
  backends,
  description,
  ios,
  android,
  web,
  behance,
  github,
}: Project) {
  return (
    <section css={sectionCss}>
      <header css={headerCss}>
        <h1 css={headingCss}>
          <span>{generation}기</span>
          {title}
        </h1>
        <p css={catchphraseCss}>{catchphrase}</p>

        {prize !== 'Default' && <div css={prizeWrapperCss}>{prize}</div>}
      </header>

      <article css={teamArticleCss}>
        <h2 css={teamHeadingCss}>
          {generation}기 {team}
        </h2>

        <table css={tableCss}>
          {designers && (
            <tr css={trCss}>
              <td css={partTdCss}>DESIGN</td>
              {designers.map(designer => (
                <td key={designer} css={memberTdCss}>
                  {designer}
                </td>
              ))}
            </tr>
          )}
          {frontends && (
            <tr css={trCss}>
              <td css={partTdCss}>FRONTEND</td>
              {frontends.map(frontend => (
                <td key={frontend} css={memberTdCss}>
                  {frontend}
                </td>
              ))}
            </tr>
          )}
          {backends && (
            <tr css={trCss}>
              <td css={partTdCss}>BACKEND</td>
              {backends.map(backend => (
                <td key={backend} css={memberTdCss}>
                  {backend}
                </td>
              ))}
            </tr>
          )}
        </table>
      </article>

      <article css={descriptionArticleCss}>
        <p css={descriptionCss}>{description}</p>
        <div css={linkWrapperCss}>
          {ios && <ProjectDetailLink type="앱스토어" link={ios} />}
          {android && <ProjectDetailLink type="플레이스토어" link={android} />}
          {web && <ProjectDetailLink type="WEB" link={web} />}
          {behance && <ProjectDetailLink type="비핸스" link={behance} />}
          {github && <ProjectDetailLink type="깃허브" link={github} />}
        </div>
      </article>
    </section>
  );
}

const sectionCss = css`
  width: 100%;
  margin-bottom: 60px;
`;

const headerCss = css`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 10px;

  border-bottom: solid 1px ${colors.black};
`;

const headingCss = css`
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 20px;
  line-height: 28px;

  margin-bottom: 20px;

  & span {
    width: 54px;
    height: 34px;
    color: ${colors.white};
    background-color: ${colors.black};
    margin-right: 12px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    font-size: 12px;
    line-height: 140%;
  }
`;

const catchphraseCss = css`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
`;

const prizeWrapperCss = css`
  position: absolute;
  top: 20px;
  right: 0;

  width: 54px;
  height: 54px;

  background-image: url(${POSITION_ICON_BASE}/project-prize.webp);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

const teamArticleCss = css`
  padding-top: 30px;
  padding-bottom: 40px;
  border-bottom: solid 1px ${colors.black};
`;

const teamHeadingCss = css`
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;

  margin-bottom: 16px;
`;

const tableCss = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const trCss = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const partTdCss = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  width: 84px;
`;

const memberTdCss = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${colors.gray600};
`;

const descriptionArticleCss = css`
  padding: 30px 0;
  border-bottom: solid 1px black;
`;

const descriptionCss = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;

  margin-bottom: 20px;
`;

const linkWrapperCss = css`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 15px;
`;
