export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className="bg-violet-100">{sampleTextProp}</div>;
};

export default BaseTemplate;
