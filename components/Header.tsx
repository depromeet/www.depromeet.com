import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const Logo = dynamic(() => import('../public/gnb_logo.svg'));

const Header = () => (
  <Container>
    <div style={{ cursor: 'pointer' }}><Logo /></div>
    <ButtonContainer>
      <RouterBtn routerName="about" path="/" />
      <RouterBtn routerName="project" path="/project" />
      <RouterBtn routerName="contact" path="/contact" />
      <Button role="button">9기에서 만나기</Button>
    </ButtonContainer>
  </Container>
);

const RouterBtn = ({ routerName, path }) => {
  const router = useRouter();
  const pathname = useRouter().pathname;

  const handleRouting = () => router.push(path);

  return (
    <RouterButton
      role="button"
      onClick={handleRouting}
      onKeyPress={handleRouting}
      tabIndex={0}
      isSame={path === pathname}
    >
      {routerName.toUpperCase()}
      {path === pathname && <Underline />}
    </RouterButton>
  );
};

const Container = styled.div`
  position: fixed;
  background-color: black;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 8rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  width: auto;
  font-size: 1.5rem;
  font-weight: 800;
  padding: 1.2rem 2.4rem;
  background-color: ${({ theme }) => theme.color.blue};
  border-radius: 2.7rem;
  margin-left: 0.7rem;
`;

const RouterButton = styled.div<{isSame: boolean}>`
  position: relative;
  font-family: Montserrat;
  margin-right: 3.4rem;
  font-size: 1.4rem;
  font-weight: ${({ isSame }) => (isSame ? 800 : 500)};
`;

const Underline = styled.div`
  cursor: default;
  position: absolute;
  width: 100%;
  height: 0.2rem;
  background-color: white;
  margin-top: 0.8rem;
`;

export default Header;
