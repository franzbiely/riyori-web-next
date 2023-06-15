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
import React, {useState} from 'react';
import TextField from '@mui/material/TextField';

export default function Rate() {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (event: React.ChangeEvent<{}>, value: number | null) => {
        setRating(value);
    };

    const inputStyles = {
        borderRadius: '15px',
    };

    return (
        <Subinnerpage title='Thank you!'> 
            <br /><br />
            <div className={`${styles.rate_container} ${layout.container}`}>
                <Image src="/images/green-circle.svg" alt="Thank You" width={120} height={120} />
                <h1 className={layout.h1}>Payment Received</h1>
                <h2>Thank you and come again!</h2>
            
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
                className="button-secondary">Pay</button>
            </div>

            
        </Subinnerpage>
    )
}