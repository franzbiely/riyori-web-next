"use client"

import Header from './header';
import Footer from './footer';
import { ReactNode } from 'react';
import styles from "./layout.module.css";
import Subinnerheader from './subinnerheader';

type LayoutProps = {
  children: ReactNode;
  title: string
};

export default function Subinnerpage({title, children}:LayoutProps) {
  return (
    <>
      <div className={styles.app_inner_page}>
          <Subinnerheader title={title}/>
            {children}
          <Footer />
      </div>
    </>
  )
}
