import styled from "styled-components";
import { Button, FacebookButton } from "../components/Button.styled";
import { StyledLink } from "../components/Link.styled";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <>
      <Container>
        <Button variant="primary">Styled Button</Button>
        <Button variant="secondary">Styled Button</Button>
        <FacebookButton>Facebook</FacebookButton>
        <StyledLink href={"/horoscope"}>Teste NExt Link</StyledLink>
      </Container>
    </>
  );
}
