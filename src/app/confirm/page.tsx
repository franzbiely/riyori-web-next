"use client"
// 9th

import Subinnerpage from '@/components/subinnerpage';
import Image from 'next/image';
import layout from './../../components/layout.module.css';
import styles from "./confirm.module.css";
import React, {} from 'react';

var Window = {location:{search:'', href: ''}}
if(typeof window !== 'undefined') {
    Window = window
}

export default function Confirm() {    

    return (
        <Subinnerpage title="Waiting for our staff to confirm.."> 
            <br /><br />
            <div className={`${styles.confirm_container} ${layout.container}`}>
                <Image src="/images/green-circle.svg" alt="Thank You" width={120} height={120} />
                <h1 className={layout.h1}>Please wait...</h1>
                <h2>Our Staff will confirm your order in a moment.</h2>
                <br />
                <p>For now, you could quit the app and rescan to check your food's status.</p>
            </div>

            
        </Subinnerpage>
    )
}