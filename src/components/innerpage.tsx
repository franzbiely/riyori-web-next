import Header from './header';
import Footer from './footer';
import { ReactNode } from 'react';
import styles from "./layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export default function Innerpage({children}:LayoutProps) {
  return (
    <>
      <div className={styles.app_inner_page}>
          <Header />
            {children}
          <Footer />
      </div>
    </>
  )
}
