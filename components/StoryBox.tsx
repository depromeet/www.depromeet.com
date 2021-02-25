import styled from 'styled-components';
import {
  Programmer, Designer, GreenQuote1, GreenQuote2, BlueQuote1, BlueQuote2,
} from '../public';
import { media } from '../styles/theme';

const StoryBox = ({ story }) => (
  <Container>
    {story.job === 'programmer' && <Programmer />}
    <Bubble job={story.job}>
      <div className="quote1">{story.job === 'programmer' ? <GreenQuote1 /> : <BlueQuote1 />}</div>
      <div className="quote2">{story.job === 'programmer' ? <GreenQuote2 /> : <BlueQuote2 />}</div>
      <div className="content no-scroll-bar">{story.content}
        <div className="content__person">{story.person}</div>
      </div>
    </Bubble>
    {story.job === 'designer' && <Designer />}
  </Container>
);

const Container = styled.div`
  display: flex;
  margin-top: 7.6rem;

  ${media.mobile} {
    margin-top: 9rem;
    position: relative;
    flex-direction: column;
    align-items: center;
    margin-left: 2.4rem;
    :last-child {
      margin-right: 2.4rem;
    }
    svg {
      position: absolute;
      top: -14rem;
      z-index: 1;
      width: 13.8rem;
    }
  }
`;

const Bubble = styled.div<{job: string}>`
  position: relative;
  background: #101010;
  width: 83.5rem;
  height: 24.2rem;
  border-radius: 3.2rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 3rem;

  ${media.mobile} {
    width: 26rem;
    height: 30rem;
    padding: 0 2rem 2rem;
    border-radius: 2.4rem;
    background-color: #212121;
    box-sizing: border-box;
    display: flex;
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
    ${media.mobile}{
      flex: 1;
      margin: 9rem 0 0 ;
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
      line-height: 1.rem;
      color: ${({ theme, job }) => (job === 'programmer' ? theme.color.green : '#194cff')};

      ${media.mobile} {
        margin-bottom: 1rem;
      }
    }
    b {
      color: ${({ theme, job }) => (job === 'programmer' ? theme.color.green : '#1271ff')};
      font-weight: 800;
    }
  }
`;

export default StoryBox;
