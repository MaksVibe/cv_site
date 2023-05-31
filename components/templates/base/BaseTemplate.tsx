import { Selector } from './BaseTemplate.styles';
export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <Selector>{sampleTextProp}</Selector>;
};

export default BaseTemplate;
