import Background from '../Background/Background';
import LastProject from '../LastProject/LastProject';
import { Container } from '../layouts/primary/PrimaryLayout.styles';
import { Content, Description, Heading, SubHeading } from './Hero.styles';
export interface IHero {}

const Hero: React.FC<IHero> = () => {
  return (
    <Background>
      <Container>
        <Content>
          <SubHeading>Full stack developer</SubHeading>
          <Heading>Maksym Parunov</Heading>
          <Description>
            I develop web applications for various platforms and specialize in
            server development
          </Description>
          <LastProject />
        </Content>
      </Container>
    </Background>
  );
};

export default Hero;
