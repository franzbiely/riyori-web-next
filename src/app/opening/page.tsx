// This is the second page opening screen
import React from 'react';
import Image from 'next/image';
import styles from "./opening.module.css";

export default function Opening() {
    const handleClick = () => {
        console.log('Button clicked!');
    };
    return (
        <main className={styles.main}>
            <div className={styles.mainInner}>
                <Image className='image' src="/images/ryori-brand.png" alt="Ryori" width={283} height={141} />
                <br /><br />
                <button 
                    // onClick={handleClick} 
                className="button-primary">Get Started</button>
            </div>
        </main>
    )
}