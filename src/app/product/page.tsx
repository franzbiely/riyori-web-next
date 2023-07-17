"use client"
// 5th page
import Innerpage from '@/components/innerpage';
import QuantityField from '@/components/quantityField';
import Search from '@/components/search';
import Subinnerpage from '@/components/subinnerpage';
import Table from '@/components/table';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import layout from './../../components/layout.module.css';
import styles from "./product.module.css";

var Window = {location:{search:'', href: ''}}
if(typeof window !== 'undefined') {
    Window = window
}

export default function Product() {
    const [detail, setDetail] = useState<any>({
        photo: ''
    })
    
    const urlParams = new URLSearchParams(Window.location.search);

    const getProductDetail = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/branchItem/${urlParams.get('id')}`);
        const data = await response.json();
        setDetail(data)
    }
    const handleClick = () => {
        Window.location.href= "/checkout"
    }

    useEffect(() => {
        getProductDetail();
    },[])
    return (
        <Subinnerpage title="">
            <Image className={styles.featured_image} src={detail?.photo} alt="Ryori" width={283} height={192} />
            <br />
            <div className={layout.container}>
                <div className={`${layout.column} ${layout.f6}`}>
                    <h4>{detail.title}</h4>
                    <small>{detail.description}</small>
                    <br />
                    <QuantityField />
                </div>
                <div className={`${layout.column} ${layout.right}`}>
                    <h4>P{detail.price}</h4>
                </div>
            </div>
            <Table header="Select Add-Ons"/>
            <br />
            <button 
                onClick={handleClick} 
            className="button-secondary">Add To Order</button>
        </Subinnerpage>
    )
}