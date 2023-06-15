"use client"
// 6th page 
import Innerpage from '@/components/innerpage';
import QuantityField from '@/components/quantityField';
import Search from '@/components/search';
import Subinnerpage from '@/components/subinnerpage';
import Table from '@/components/table';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import layout from './../../components/layout.module.css';
import styles from "./checkout.module.css";

export default function Checkout() {
    const inputStyles = {
        borderRadius: '15px',
    };
    return (
        <Subinnerpage>
            <TextField
                multiline
                rows={4}
                variant="outlined"
                placeholder="Add food notes here..."
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': inputStyles }}
            /> 
            <br />
            <ul className={styles.list}>
                {[1,2,3,4].map((item, key) => (
                        <li className={styles.item}>
                            {/* <Link to="/item"> */}
                            <Image className='image' src="/images/sample-chicken.png" alt="Ryori" width={107} height={71} />
                            <div className={styles.item_meta}>
                                <div>
                                    <h6>Chicken Combo 1</h6>
                                    <small>With riec and drink (12 oz)</small>

                                    <div className={layout.container}>
                                        <div className={`${layout.column} ${layout.f8}`}>
                                            <QuantityField fontSize={'12px'}/>
                                        </div>
                                        <div className={`${layout.column}`}>P250</div>
                                    </div>
                                </div>
                            </div>
                            {/* </Link> */}
                        </li>
                    ))
                }
            </ul>
            <br />
            <div className={layout.container}>
                <div className={`${layout.column} ${layout.f6}`}>
                    Total
                </div>
                <div className={`${layout.column}`}>₱1,270.00</div>
            </div>
            <br />
            <button 
                // onClick={handleClick} 
            className="button-secondary">Checkout</button>
        </Subinnerpage>
    )
}