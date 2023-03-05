import Image from 'next/image';
import { css } from '@emotion/react';

import useMediaQuery from '~/hooks/use-media-query';
import { colors, mediaQuery } from '~/styles/constants';
import { body2Css, subtitle1Css } from '~/styles/css';

import { Project } from '../constants';

interface Props {
  project: Project;
}
export default function ProjectItem({ project }: Props) {
  const isMobile = useMediaQuery('xs');
  return (
    <div css={wrapperCss}>
      <Image
        src={`/projects/${project.thumbnail}`}
        alt="project image"
        fill
        sizes={isMobile ? '343px' : '384px'}
        css={thumbnailCss}
      />
      <div css={gradientCss} />
      <div css={isMobile ? mobileContentsWrapperCss : contentsWrapperCss}>
        <span>{project.generation}기</span>
        <h3>{project.title}</h3>
        <p>{project.catchphrase}</p>
        <button css={detailBtnCss}>
          <Image src={'/project/detailBtn.webp'} alt="" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}

const wrapperCss = css`
  background: black;
  position: relative;
  ${mediaQuery('xs')} {
    width: 343px;
    height: 268px;
  }
`;

const gradientCss = css`
  position: absolute;
  bottom: 0;
  background: linear-gradient(180deg, #121212 0%, rgba(18, 18, 18, 0) 100%);
  transform: rotate(-180deg);
  width: 100%;
  height: 172px;
`;

const thumbnailCss = css`
  object-fit: cover;
  object-position: center;
`;

const contentsWrapperCss = css`
  opacity: 0;
  &:hover {
    opacity: 1;
  }
  width: 100%;
  height: 100%;
  position: relative;
  text-align: left;
  color: ${colors.white};
  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    text-decoration: underline;
    position: absolute;
    top: 158px;
    left: 30px;
  }
  h3 {
    ${subtitle1Css}
    position: absolute;
    top: 188px;
    left: 30px;
  }
  p {
    ${body2Css}
    position: absolute;
    top: 226px;
    left: 30px;
    width: 230px;
  }
`;

const mobileContentsWrapperCss = css`
  height: 100%;
  color: ${colors.white};
  position: relative;
  text-align: left;
  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    position: absolute;
    left: 20px;
    top: 146px;
  }
  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    position: absolute;
    left: 20px;
    top: 176px;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    position: absolute;
    left: 20px;
    top: 208px;
    width: 267px;
  }
`;

const detailBtnCss = css`
  position: absolute;
  bottom: 40px;
  right: 40px;
  ${mediaQuery('xs')} {
    bottom: 20px;
    right: 20px;
  }
`;
