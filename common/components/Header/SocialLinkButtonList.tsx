import styled from '@emotion/styled';

export default function SocialLinkButtonList() {
  return (
    <Container>
      {socials.map(({ name, href }) => (
        <SocialLinkButton role="button" key={name} onClick={() => window.open(href)} tabIndex={0}>
          {name}
        </SocialLinkButton>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;

  margin: 32px 0 4px 0;
`;

const SocialLinkButton = styled.div`
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;

  text-align: center;
`;

const socials = [
  {
    href: 'https://medium.com/depromeet',
    name: 'medium',
  },
  {
    href: 'https://facebook.com/depromeet',
    name: 'facebook',
  },
  {
    href: 'https://instagram.com/depromeet',
    name: 'instagram',
  },
];
