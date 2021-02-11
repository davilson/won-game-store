import { Description, Illustration, Logo, Title, Wrapper } from './styles'
const Main = () => (
  <Wrapper>
    <Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo com React Avançado escrito ao lado"
    />
    <Title>React Avançado</Title>
    <Description>TypeScript, ReactJs, NextJs e Styled Components</Description>
    <Illustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor olhando para uma tela com código"
    />
  </Wrapper>
)

export default Main
