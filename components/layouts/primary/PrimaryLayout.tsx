import { Container } from './PrimaryLayout.styles';

export interface IPrimaryLayout {
  children: any;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
      <Container>{children}</Container>
  );
};

export default PrimaryLayout;
