import Link from 'next/link';
import { Container } from '../layouts/primary/PrimaryLayout.styles';
import { Content, Nav, Wrapper } from './Header.styles';
export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
        <Link href="/">M.P.</Link>
        <Nav>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#about">About</Link>
          <Link href="#contacts">Contacts</Link>
        </Nav>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Header;
