import React from 'react';

import styled from 'styled-components';
import { Footer } from '../components';

import TransparentHeader from '../components/TransparentHeader';
import ProjectList from '../containers/Project/ProjectList';
import ScheduleList from '../containers/Project/ScheduleList';

import { media } from '../styles/theme';

const Project = () => (
  <div className="no-scroll-bar" style={{ overflow: 'scroll' }}>
    <TransparentHeader />

    <CenterAlignedContainer>
      <div className="wrapper">
        <Catchphrase>
          <p>서비스 런칭부터 개선까지</p>
          <p>
            <b>경험에 성장을 더합니다.</b>
          </p>
        </Catchphrase>
        <ProjectList />
        <ScheduleList />
      </div>
    </CenterAlignedContainer>
    <Footer />
  </div>
);

const CenterAlignedContainer = styled.div`
  background-color: transparent;
  width: 114rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 2.4rem;
  margin-top: 30rem;
  margin-bottom: 16rem;
  ${media.mobile} {
    width: 100%;
    margin-top: 24rem;
    box-sizing: border-box;
    margin-bottom: 7rem;
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
