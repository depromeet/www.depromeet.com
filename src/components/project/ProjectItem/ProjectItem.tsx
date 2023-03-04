import Image from 'next/image';
import { css } from '@emotion/react';

import { colors } from '~/styles/constants';
import { body2Css, subtitle1Css } from '~/styles/css';

import { Project } from '../constants';

interface Props {
  project: Project;
}
export default function ProjectItem({ project }: Props) {
  return (
    <div css={wrapperCss}>
      {/* <Image src={project.image} alt="project image" fill /> */}
      <div css={contentsWrapperCss}>
        <span>{project.generation}기</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <button css={detailBtnCss}>
          <Image src={'/project/detailBtn.webp'} alt="" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}

const wrapperCss = css`
  background: black;
`;

const contentsWrapperCss = css`
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
    bottom: 30px;
    left: 30px;
  }
`;

const detailBtnCss = css`
  position: absolute;
  bottom: 40px;
  right: 40px;
`;
