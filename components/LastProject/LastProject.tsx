import ProjImg from '../../assets/images/cc-proj.png';
import {
  Content,
  Description,
  Heading,
  Imag,
  Wrapper,
} from './LastProject.styles';

export interface ILastProject {}

const LastProject: React.FC<ILastProject> = () => {
  return (
    <Wrapper>
      <a
        href="https://www.unit9.com/project/coke-zero-sugar-take-a-taste"
        target="_blank"
      >
        <Imag
          src={ProjImg.src}
          alt="Coca-cola project"
          width={400}
          height={210}
        />
      </a>
      <Content>
        <Heading>Last project</Heading>
        <Description href="https://www.unit9.com/project/coke-zero-sugar-take-a-taste">
          Coke Zero Sugar | Mobile Game
        </Description>
      </Content>
    </Wrapper>
  );
};

export default LastProject;
