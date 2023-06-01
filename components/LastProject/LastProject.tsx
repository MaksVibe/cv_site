import {
  Content,
  Description,
  Heading,
  Img,
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
        <Img />
      </a>
      <Content>
        <Heading>Last project</Heading>
        <Description>Coke Zero Sugar | Mobile Game</Description>
      </Content>
    </Wrapper>
  );
};

export default LastProject;
