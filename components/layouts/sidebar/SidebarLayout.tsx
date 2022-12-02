import Link from 'next/link';

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.navLink}>
        Home
      </Link>
      <Link href="/about" className={styles.navLink}>
        About
      </Link>
    </nav>
  );
};

export default SidebarLayout;

const styles = {
  nav: `
    h-full w-40 flex flex-col p-8 shadow-3xl
    bg-gradient-to-r from-green-400/25 to-green-900/20
  `,
  navLink: `
    bg-white text-neutral-800 my-2 py-2 px-3
    rounded
    hover:ml-0.5 hover:bg-green-200
    focus:ml-0.5 focus:bg-green-200
  `,
};
