import styled from 'styled-components';

const SmallBox = () => (
  <Container role="button">
    <div className="overlay" />
  </Container>
);

const Container = styled.div`
  min-width: 17rem;
  min-height: 17rem;
  background-color: white;
  border-radius: 2.4rem;
  margin-right: 2.4rem;
  position:relative;

  .overlay{
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
`;

export default SmallBox;
