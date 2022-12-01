import Background from '../../Background/Background';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout {
  children: any;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <main className={styles.main}>
        <Background />
        {children}
      </main>
    </>
  );
};

export default PrimaryLayout;
