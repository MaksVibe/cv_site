import Link from 'next/link';
import { Wrapper, Nav } from './Header.styles';
export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <Wrapper>
      <Link href="/">M.P.</Link>
      <Nav>
        <Link href="#portfolio">Portfolio</Link>
        <Link href="#about">About</Link>
        <Link href="#contacts">Contacts</Link>
      </Nav>
    </Wrapper>
  );
};

export default Header;
