import Link from 'next/link';
import { Wrapper } from './Header.styles';
export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <Wrapper>
      <Link href="/">Home</Link>
      <nav>
        <Link href="/about">About</Link>
      </nav>
    </Wrapper>
  );
};

export default Header;
