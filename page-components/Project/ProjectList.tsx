import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import Projects from '../../components/Projects';
import projectsData from '../../resources/data/projects';
import { media } from '../../styles/theme';

export default function ProjectList() {
  const [expanded, setExpanded] = useState(false);

  const onClickExpandButton = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  const ArrowDownGreen = dynamic(
    () => import('../../resources/images/arrow_down_green.svg')
  );

  return (
    <ProjectSection>
      <Title>
        모든 작업물<sup>{projectsData.length}</sup>
      </Title>
      <Boxes>
        <Projects expanded={expanded} />
      </Boxes>
      <div
        className="button button__green"
        role="button"
        onClick={onClickExpandButton}
        onKeyDown={() => {}}
        tabIndex={0}
      >
        {expanded ? '접기' : '더보기'}
        <div className={`button--img ${expanded ? 'button--img__usd' : ''}`}>
          <ArrowDownGreen />
        </div>
      </div>
    </ProjectSection>
  );
}

const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 11.8rem;
  .button {
    border-radius: 2.7rem;
    font-size: 1.4rem;
    line-height: 1.7rem;
    padding: 1.2rem 3rem;
    width: fit-content;
    position: relative;
    display: ${projectsData.length > 12 ? 'flex' : 'none'};
    align-self: center;
    :hover {
      background-color: rgba(56, 227, 168, 0.3);
    }
    &__green {
      border: ${({ theme }) => `0.1rem solid ${theme.color.green}`};
      color: ${({ theme }) => theme.color.green};
    }
    &--img {
      width: 1.4rem;
      height: 1.4rem;
      margin-left: 0.8rem;
      margin-top: 0.1rem;
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;

      &__usd {
        transform: rotate(180deg);
      }
    }
  }
`;

const Boxes = styled.div`
  margin-bottom: 5.6rem;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 2.6rem;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 4rem;
  ${media.mobile} {
    font-size: 1.6rem;
  }
  sup {
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.2rem;
    margin-left: 1rem;
    vertical-align: super;
    ${media.mobile} {
      font-size: 1rem;
    }
  }
  .title--desc {
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 2rem;
    text-transform: uppercase;
    color: #ffffff;
    margin-left: 2.4rem;
    vertical-align: center;
    ${media.mobile} {
      display: none;
    }
  }
`;
