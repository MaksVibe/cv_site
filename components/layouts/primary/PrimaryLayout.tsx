import Header from '../../Header/Header';

export interface IPrimaryLayout {
  children: any;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PrimaryLayout;
