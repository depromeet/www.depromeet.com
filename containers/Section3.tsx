import styled from 'styled-components';

import StoryBox from '../components/StoryBox';
import { stories } from '../resources/data/reviews';
import { media } from '../styles/theme';

export default function Section3() {
  return (
    <Container>
      <Title>
        <p>지금까지 우리들의</p>
        <p>
          <b>프로덕트</b> 이야기
        </p>
      </Title>
      <Boxes>
        {stories.map((story, idx) => (
          <StoryBox key={idx.toString()} story={story} />
        ))}
      </Boxes>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  margin-top: 178px;
`;

const Title = styled.div`
  font-size: 60px;
  line-height: 80px;

  b {
    font-weight: 800;
  }

  ${media.mobile} {
    font-size: 28px;
    font-weight: 300;
    line-height: 40px;
  }
`;

const Boxes = styled.div`
  ${media.mobile} {
    overflow-x: scroll;
    display: flex;
    width: 100%;
  }
`;
