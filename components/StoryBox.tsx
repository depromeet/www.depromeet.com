import styled from 'styled-components';
import { GreenQuote1, GreenQuote2, BlueQuote1, BlueQuote2 } from '../public';
import { media } from '../styles/theme';
import Mimoji from './mimoji';

const StoryBox = ({ story }) => (
  <Container>
    {story.job === 'programmer' && (
      <Mimoji className="mimoji-wrapper" src={story.mimoji} job={story.job} />
    )}
    <Bubble job={story.job}>
      <div className="quote1">
        {story.job === 'programmer' ? <GreenQuote1 /> : <BlueQuote1 />}
      </div>
      <div className="quote2">
        {story.job === 'programmer' ? <GreenQuote2 /> : <BlueQuote2 />}
      </div>
      <div className="content no-scroll-bar">
        {story.content}
        <div className="content__person">{story.person}</div>
      </div>
    </Bubble>
    {story.job === 'designer' && (
      <Mimoji className="mimoji-wrapper" src={story.mimoji} job={story.job} />
    )}
  </Container>
);

const Container = styled.div`
  display: flex;
  margin-top: 7.6rem;
  align-items: center;
  position: relative;

  ${media.mobile} {
    margin-top: 9rem;
    justify-content: center;
    align-items: stretch;
    margin-left: 2.4rem;
    :last-child {
      margin-right: 2.4rem;
    }
  }

  .mimoji-wrapper {
    ${media.mobile} {
      z-index: 2;
      position: absolute;
      top: -6rem;
    }
  }
`;

const Bubble = styled.div<{ job: string }>`
  position: relative;
  background: #101010;
  width: 83.5rem;
  height: 24.2rem;
  border-radius: 3.2rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 3rem;
  margin-left: ${({ job }) => (job === 'designer' ? 0 : '2.4rem')};
  margin-right: ${({ job }) => (job === 'designer' ? '2.4rem' : 0)};

  ${media.mobile} {
    width: 26rem;
    height: 100%;
    padding: 0 2rem 2rem;
    border-radius: 2.4rem;
    background-color: #212121;
    box-sizing: border-box;
    margin: 0;
  }

  .quote1 {
    position: absolute;
    left: 2.1rem;
    top: -1.3rem;
    ${media.mobile} {
      display: none;
    }
  }
  .quote2 {
    position: absolute;
    right: 2.1rem;
    bottom: -1.3rem;
    ${media.mobile} {
      display: none;
    }
  }
  .content {
    white-space: pre-line;
    text-align: start;
    margin-top: 6.1rem;
    margin: 4rem;
    ${media.mobile} {
      flex: 1;
      margin: 9rem 0 0;
      font-size: 1.4rem;
      line-height: 2.6rem;
      overflow-y: scroll;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
    &__person {
      margin-top: 1.6rem;
      font-size: 1.4rem;
      line-height: 1rem;
      color: ${({ theme, job }) =>
        job === 'programmer' ? theme.color.green : '#194cff'};

      ${media.mobile} {
        margin-bottom: 1rem;
      }
    }
    b {
      color: ${({ theme, job }) =>
        job === 'programmer' ? theme.color.green : '#1271ff'};
      font-weight: 800;
    }
  }
`;

export default StoryBox;
