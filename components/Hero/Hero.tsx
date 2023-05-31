import Background from '../Background/Background';
import { Selector } from './Hero.styles';
export interface IHero {}

const Hero: React.FC<IHero> = () => {
  return <Selector>
    <Background />
  </Selector>;
};

export default Hero;
