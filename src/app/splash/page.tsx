"use client"
// This is the first page splash screen
import Image from 'next/image';
import 'animate.css'
import styles from "./splash.module.css";
import { useEffect } from 'react';
import { init } from 'next/dist/compiled/@vercel/og/satori';

var Window = {location:{search:'', href: ''}}
if(typeof window !== 'undefined') {
    Window = window
}
export default function Splash() {
    const init = async () => {
        return new Promise(async (resolve, reject) => {
            const urlParams = new URLSearchParams(Window.location.search);

            const sid = urlParams.get('id') || ''
            const bid = urlParams.get('branch') || ''
            const tid = urlParams.get('table') || ''

            localStorage.setItem('store_Id', sid)
            localStorage.setItem('branch_Id', bid)
            localStorage.setItem('table_Id', tid)

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pos/transaction/status/?sid=${sid}&bid=${bid}&tid=${tid}`);
            const data = await response.json();

            console.log(data.status)
            if(data.status === 'new') {
                setTimeout(() => {
                    Window.location.href="/confirm"
                }, 2000)
            }
            else if(data.status === 'to_prepare') {
                setTimeout(() => {
                    Window.location.href="/orders"
                }, 2000)
            }
            else if(data.status === 'awaiting_next_action') {
                setTimeout(() => {
                    Window.location.href="/payment"
                }, 2000)
            }
            else {
                setTimeout(() => {
                    Window.location.href="/opening"
                }, 2000)
            }
        })
    }
    useEffect(() => {
        init();
    }, [])
    return (
        <main className={styles.main}>
            <Image className={styles.image} src="/images/ryori-logo-icon.png" alt="Ryori" width={136} height={165} />
        </main>
    )
}