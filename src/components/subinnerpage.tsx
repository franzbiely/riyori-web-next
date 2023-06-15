"use client"

import Header from './header';
import Footer from './footer';
import { ReactNode } from 'react';
import styles from "./layout.module.css";
import Subinnerheader from './subinnerheader';

type LayoutProps = {
  children: ReactNode;
};

export default function Subinnerpage({children}:LayoutProps) {
  return (
    <>
      <div className={styles.app_inner_page}>
          <Subinnerheader />
            {children}
          <Footer />
      </div>
    </>
  )
}
