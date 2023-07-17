"use client"
// This is the first page splash screen
import Image from 'next/image';
import 'animate.css'
import styles from "./splash.module.css";
import { useEffect } from 'react';


export default function Splash() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        localStorage.setItem('store_Id', urlParams.get('id') || '')
        localStorage.setItem('branch_Id', urlParams.get('branch') || '')
        const timer = setTimeout(() => {
            window.location.href="/opening"
        }, 2000)
        return () => clearTimeout(timer);
    }, [])
    return (
        <main className={styles.main}>
            <Image className={styles.image} src="/images/ryori-logo-icon.png" alt="Ryori" width={136} height={165} />
        </main>
    )
}