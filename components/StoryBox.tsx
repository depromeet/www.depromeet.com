import styled from 'styled-components';
import {
  Designer, Programmer, GreenQuote1, GreenQuote2, BlueQuote1, BlueQuote2,
} from '../public';

const StoryBox = ({ story }) => (
  <Container>
    {story.job === 'programmer' && <Programmer />}
    <Bubble job={story.job}>
      <div className="quote1">{story.job === 'programmer' ? <GreenQuote1 /> : <BlueQuote1 />}</div>
      <div className="quote2">{story.job === 'programmer' ? <GreenQuote2 /> : <BlueQuote2 />}</div>
      <div className="content">{story.content}
        <div className="content__person">{story.person}</div>
      </div>
    </Bubble>
    {story.job === 'designer' && <Designer />}
  </Container>
);

const Container = styled.div`
  display: flex;
  margin-top: 7.6rem;
`;

const Bubble = styled.div<{job: string}>`
  position: relative;
  background: #101010;
  width: 83.5rem;
  height: 24.2rem;
  border-radius: 3.2rem;
  font-size: 1.8rem;
  line-height: 3rem;
  .quote1 {
    position: absolute;
    left: 2.1rem;
    top: -1.3rem;
  }
  .quote2 {
    position: absolute;
    right: 2.1rem;
    bottom: -1.3rem;
  }
  .content {
    white-space: pre-line;
    text-align: start;
    margin-top: 6.1rem;
    margin-left: 4rem;
    &__person {
      margin-top: 1.6rem;
      font-size: 1.4rem;
      color: ${({ theme, job }) => (job === 'programmer' ? theme.color.green :theme.color.blue)}
    }
  }
`;

export default StoryBox;
