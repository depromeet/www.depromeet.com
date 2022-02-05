import React from 'react';

import styled from 'styled-components';
import { Footer } from '../components';

import TransparentHeader from '../components/TransparentHeader';
import ProjectList from '../containers/Project/ProjectList';
import ScheduleList from '../containers/Project/ScheduleList';

import { media } from '../styles/theme';

const Project = () => (
  <div className="no-scroll-bar" style={{ overflow: 'scroll' }}>
    <Background />

    <TransparentHeader />

    <Container>
      <div>
        <Catchphrase>
          <p>서비스 런칭부터 개선까지</p>
          <p>
            <b>경험에 성장을 더합니다.</b>
          </p>
        </Catchphrase>
        <ProjectList />
        <ScheduleList />
      </div>
    </Container>
    <Footer />
  </div>
);

const Background = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    150.23deg,
    rgba(49, 107, 255, 0.97) 5.68%,
    rgba(0, 0, 0, 0.97) 31.37%
  );
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: transparent;
  margin: 300px 0 340px 0;
  padding: 0 24px;

  ${media.mobile} {
    box-sizing: border-box;

    margin: 300px 0 240px 0;
    width: 100%;
  }
`;

const Catchphrase = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 3.6rem;
  line-height: 5.6rem;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 7.8rem;

  ${media.mobile} {
    font-weight: 300;
    font-size: 2.8rem;
    line-height: 4rem;
  }

  b {
    font-weight: bold;
    ${media.mobile} {
      font-weight: 800;
    }
  }
`;

export default Project;
