// This is the second page opening screen
import React from 'react';
import Image from 'next/image';
import 'animate.css'
import styles from "./opening.module.css";
import Link from 'next/link';

export default function Opening() {
    return (
        <main className={styles.main}>
            <div className={styles.mainInner}>
                <Image className={styles.image} src="/images/ryori-brand.png" alt="Ryori" width={283} height={141} />
                <br /><br />
                <Link href="/menu"><button className="button-primary">Get Started</button></Link>
            </div>
        </main>
    )
}