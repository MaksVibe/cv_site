import Background from '../../Background/Background';

export interface IPrimaryLayout {
  children: any;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <main className="flex h-screen text-white">
        <Background />
        {children}
      </main>
    </>
  );
};

export default PrimaryLayout;
