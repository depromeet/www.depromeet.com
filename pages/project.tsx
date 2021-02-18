import styled from 'styled-components';
import Image from 'next/image';
import React from 'react';
import { Header, Footer } from '../components';
import SmallBox from '../components/SmallBox';
import ScheduleBox from '../components/ScheduleBox';
import { steps } from '../public/schedule';

const Project = () => (
  <>
    <Header />
    <TopBackground>
      <Image
        src="/project_background_image.svg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </TopBackground>
    <CenterAlignedContainer>
      <Catchphrase>
        서비스 런칭부터 개선까지 <br />
        <span className="catchphrase__bold"> 경험에 성장을 더합니다. </span>
      </Catchphrase>
      <AllProjects />
      <AllSchedule />
    </CenterAlignedContainer>
    <Footer />
  </>
);

const AllProjects = () => (
  <ProjectSection>
    <Title>
      모든 작업물<sup>30</sup>
    </Title>
    <Boxes>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(() => (
        <div className="project--item" key="project-$index" role="button">
          <SmallBox />
          <div className="project--item__overlay" />
          <div className="project--title">프로젝트 명</div>
        </div>
      ))}
    </Boxes>
    <div className="button button__green" role="button">
      더보기
      <div className="button--img">
        <Image
          src="/arrow_down_green.svg"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>
    </div>
  </ProjectSection>
);

const AllSchedule = () => (
  <ScheduleSection>
    <Title>
      15주간 여정
      <span className="title--desc">Depromeet 9기는 매주 토요일 15주간 진행됩니다.</span>
    </Title>
    <Schedules>
      {steps.map((v, idx) => (
        <ScheduleBox detail={v} key="steps-$idx" index={idx} />
      ))}
    </Schedules>
  </ScheduleSection>
);

const TopBackground = styled.div`
  z-index:-10;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 43.4rem;
`;

const CenterAlignedContainer = styled.div`
  /* position: relative; */
  width: 114rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Catchphrase = styled.div`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 3.6rem;
  line-height: 5.6rem;
  letter-spacing: -0.03em;
  color: #FFFFFF;
  margin-top: 30rem;
  margin-bottom: 7.8rem;
  .catchphrase__bold {
    font-weight: bold;
  }
`;

const Title = styled.h1`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 800;
  font-size: 2.2rem;
  line-height: 2.6rem;
  letter-spacing: -0.03em;
  color: #FFFFFF;
  margin-bottom: 4rem;
  sup { 
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.2rem;
    margin-left: 1rem;
    vertical-align: super;
  }
  .title--desc {
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 2rem;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-left: 2.4rem;
    vertical-align: center;
  }
`;

const Boxes = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template: repeat(2, 1fr) / repeat(6, 1fr);
  gap: 3.2rem 2.4rem;
  margin-bottom: 5.6rem;
  .project--item {
    width: 17rem;
    height: 21rem;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    position: relative;
    &__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 17rem;
      opacity: 0;
      background-color: black;
      :hover {
        opacity: 0.2;
      }
    }
  }
  .project--title {
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-weight: 800;
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-align: center;
    letter-spacing: -0.03em;
    color: #FFFFFF;
  }
`;

const ProjectSection = styled.div`
  display: flex;
  flex-direction:column;
  margin-bottom: 11.8rem;
  .button{
    border-radius: 2.7rem;
    font-size: 1.4rem;
    line-height: 1.7rem;
    padding: 1.2rem 3rem;
    width: fit-content;
    position: relative;
    display: flex;
    align-self: center;
    :hover {
      background-color: #001401;
    }
    &__green {
      border: ${({ theme }) => `0.1rem solid ${theme.color.green}`};
      color: ${({ theme }) => theme.color.green};
    }
    &--img{ 
      width: 1.4rem;
      height: 1.4rem;
      margin-left: 0.8rem;
      position: relative;
      display:inline-block;
    }
  }
`;

const ScheduleSection = styled.div`
  margin-bottom: 16rem;
`;

const Schedules = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.2rem 0;
`;

export default Project;
