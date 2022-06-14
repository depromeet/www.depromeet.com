import Image from 'next/image';
import React from 'react';
import { ListChildComponentProps } from 'react-window';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';
import { useProjectInfo } from 'modules/project/hooks';

import { RightArrow } from '../../assets';
import { Project } from '../../utils/projects';
import { getContentItemPosition, getResponsiveContentWidth } from '../../utils/position';

import DeployLinkSection from './DeployLinkSection';
import ScrollController from './ScrollController';

type Props = Omit<ListChildComponentProps, keyof OwnProps> & OwnProps;

type OwnProps = {
  project: Project;
  width: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function Card({ project, width, onPrev, onNext, index, style }: Props) {
  const device = useDeviceContext();

  const { id: currentIndex } = useProjectInfo();

  const { ios, android, web, title, image, catchphrase, description, generation, team, icon } = project;

  return (
    <Container
      key={index}
      device={device}
      style={{
        ...style,
        left: `${getContentItemPosition(width, index, style.left?.toString())}px`,
        width: `${getResponsiveContentWidth(width)}px`,
      }}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
    >
      {currentIndex === index && (
        <ScrollController index={currentIndex} width={width} onPrev={onPrev} onNext={onNext} />
      )}

      {device !== 'mobile' && (
        <ImageWrapper>
          <Image src={`/projects/${image}`} alt={`${title}`} layout="fill" objectFit="scale-down" />
        </ImageWrapper>
      )}

      <DetailSection device={device}>
        <div>
          <Title device={device}>{title}</Title>

          <CatchPhrase device={device} css={device === 'mobile' && { display: 'flex' }}>
            {device === 'mobile' && <Image src={`/projects/${icon}`} alt={`${title}`} width={72} height={72} />}
            <div css={device === 'mobile' && { width: 190, marginLeft: 16 }}>{catchphrase}</div>
          </CatchPhrase>

          {device !== 'mobile' && <DeployLinkSection deployLink={{ ios, android, web }} />}
        </div>

        <div css={device === 'mobile' && { marginBottom: 23 }}>
          <Label device={device}>프로젝트 소개</Label>

          <Description
            device={device}
            css={css`
              -ms-overflow-style: none;
              scrollbar-width: none;
              position: relative;

              ::-webkit-scrollbar {
                display: none;
              }
            `}
          >
            {description}
          </Description>

          <Link href={mediumLink} device={device}>
            자세히 보기
            <RightArrow
              css={css`
                width: ${device === 'mobile' ? '10px' : '14px'};
                height: ${device === 'mobile' ? '10px' : '14px'};
                margin: ${device === 'mobile' ? '0 0 1px 8px' : '1px 0 0 8px'};
              `}
            />
          </Link>

          <TeamTitle device={device}>
            {generation}기 {team}
          </TeamTitle>

          <TeamContainer css={device === 'mobile' && { overflowY: 'scroll' }}>
            {(['designers', 'frontends', 'backends'] as const).map((job) => (
              <Team key={job} device={device}>
                <Job device={device}>{job.slice(0, -1)}</Job>
                <Member device={device}>{project[job]?.join(' ∙ ')}</Member>
              </Team>
            ))}
          </TeamContainer>
        </div>

        {device === 'mobile' && <DeployLinkSection deployLink={{ ios, android, web }} />}
      </DetailSection>
    </Container>
  );
}

const mediumLink =
  'https://depromeet.medium.com/%EB%94%94%ED%94%84%EB%A7%8C-9%EA%B8%B0-%ED%8C%8C%EC%9D%B4%EB%84%90-%EB%B0%9C%ED%91%9C-7c89e2cd426c';

const Container = styled.div<{ device: Device }>`
  z-index: 1;
  position: relative;
  width: 800px;
  height: 840px;
  left: 520px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  opacity: 1;
  background-color: #212121;
  border-radius: 36px;
  margin-left: 56px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      box-sizing: border-box;
      width: 314px;
      height: 650px;

      justify-content: flex-start;

      border-radius: 24px;
      margin-left: 11px;
      padding: 25px 20px;
    `}
`;

const DetailSection = styled.section<{ device: Device }>`
  box-sizing: border-box;
  display: grid;
  grid-template: 1fr / 172px 468px;
  gap: 0 57px;

  height: 420px;
  width: 100%;

  color: #fff;
  word-break: keep-all;
  padding: 48px 56px 0;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      padding: 0;
      display: flex;
      flex-direction: column;
    `}
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 420px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const CatchPhrase = styled.div<{ device: Device }>`
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;

  margin-bottom: 32px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 18px;
      line-height: 28px;

      margin-bottom: 4rem;
    `}
`;

const Title = styled.div<{ device: Device }>`
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  margin-bottom: 16px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 24px;
      line-height: 40px;
    `}
`;

const Label = styled.div<{ device: Device }>`
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;

  margin: 0 10px 20px 0;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 12px;
      margin-bottom: 10px;
    `}
`;

const Description = styled.div<{ device: Device }>`
  overflow-y: hidden;
  max-height: 110px;

  font-size: 16px;
  line-height: 28px;
  margin-bottom: 10px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      overflow-y: scroll;
      max-height: 127px;

      font-size: 14px;
      line-height: 26px;
      margin-bottom: 24px;
    `}
`;

const Link = styled.a<{ device: Device }>`
  all: unset;
  display: flex;
  flex-direction: row;

  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 40px;
  color: #38e3a8;
  cursor: pointer;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 12px;
      align-items: center;
    `}
`;

const TeamTitle = styled.div<{ device: Device }>`
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;

  margin: 0 100px 20px 0;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 12px;
      margin-bottom: 10px;
    `}
`;

const TeamContainer = styled.div`
  max-height: 82px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Team = styled.div<{ device: Device }>`
  display: grid;
  grid-template: repeat(auto-fill, 1fr) / 70px 1fr;
  grid-auto-flow: column;
  justify-content: start;
  gap: 14px 8px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      grid-template-columns: 45px 1fr;
    `}
`;

const Job = styled.span<{ device: Device }>`
  width: 90px;
  font-size: 14px;
  font-weight: 500;
  line-height: 28px;
  text-transform: uppercase;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      width: 50px;
      font-size: 12px;
      line-height: 26px;
      margin-top: 2px;
    `}
`;

const Member = styled.span<{ device: Device }>`
  font-size: 16px;
  line-height: 28px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-weight: 400;
      font-size: 14px;
      line-height: 26px;

      margin-left: 23px;
    `}
`;
