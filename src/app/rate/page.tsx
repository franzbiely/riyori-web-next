"use client"
// 9th

import Innerpage from '@/components/innerpage';
import QuantityField from '@/components/quantityField';
import Search from '@/components/search';
import Subinnerpage from '@/components/subinnerpage';
import Table from '@/components/table';
import { Rating } from '@mui/material';
import Image from 'next/image';
import layout from './../../components/layout.module.css';
import styles from "./rate.module.css";
import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';

var Window = {location:{search:'', href: ''}}
if(typeof window !== 'undefined') {
    Window = window
}

export default function Rate() {
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState({
        title: 'Loading...',
        content: 'We are now checking your transaction status'
    })

    const handleRatingChange = (event: React.ChangeEvent<{}>, value: number | null) => {
        setRating(value);
    };

    const init = async () => {
        const transaction_Id = localStorage.getItem('transaction_Id')
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pos/transaction/status/${transaction_Id}`);
        const data = await response.json();
        console.log({data})
        if(data.status === 'succeeded') {
            setContent({
                title: 'Thank you!',
                content: 'Thank you very much for your dining experience!'
            }) 
        }
        if(data.status === 'awaiting_payment_method') {
            setContent({
                title: 'Awaiting Payment Method',
                content: 'Please settle your payment method first.'
            }) 
        }
    }

    useEffect(() => {
        init();
    },[])

    const inputStyles = {
        borderRadius: '15px',
    };

    return (
        <Subinnerpage title={content.title}> 
            <br /><br />
            <div className={`${styles.rate_container} ${layout.container}`}>
                <Image src="/images/green-circle.svg" alt="Thank You" width={120} height={120} />
                <h1 className={layout.h1}>{content.title}</h1>
                <h2>{content.content}</h2>
            
                <br />
                <h3>Please rate us</h3>
                <Rating
                    name="star-rating"
                    value={rating}
                    onChange={handleRatingChange}
                    max={5}
                    precision={1}
                    size="large"
                    />
                <br />
                <p className={styles.p}>Do you have any thoughts you'd like to share?</p>
                <TextField
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder=""
                    fullWidth
                    sx={{ '& .MuiOutlinedInput-root': inputStyles }}
                /> 
                <br />
                <button 
                    // onClick={handleClick} 
                className="button-secondary">Submit</button>
            </div>

            
        </Subinnerpage>
    )
}