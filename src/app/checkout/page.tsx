"use client"
// 6th page 
import Innerpage from '@/components/innerpage';
import QuantityField from '@/components/quantityField';
import Search from '@/components/search';
import Subinnerpage from '@/components/subinnerpage';
import Table from '@/components/table';
import TextField from '@mui/material/TextField';
import { init } from 'next/dist/compiled/@vercel/og/satori';
import Image from 'next/image';
import { ChangeEvent, useEffect, useLayoutEffect, useState } from 'react';
import layout from './../../components/layout.module.css';
import styles from "./checkout.module.css";
import Link from 'next/link';
import {formatCurrency, renderImage} from "./../../utils/utils"
interface i_Cart {
    id: number
    quantity: number,
    price: number
}
const i_Cart_default = {
    id: -1,
    quantity: 0,
    price: 0
}
var Window = {location:{search:'', href: ''}}
if(typeof window !== 'undefined') {
    Window = window
}

export default function Checkout() {
    const [cart, setCart] = useState<i_Cart[] | []>([i_Cart_default])
    const [notes, setNotes] = useState('')
    const [total, setTotal] = useState(0)

    const inputStyles = {
        borderRadius: '15px',
    };
    
    const init = async () => {
        const lcData = JSON.parse(localStorage.getItem('orders') || '[]')
        const ids = lcData.map((item: any) => (item.id)).join(',')

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menuItem/batch?ids=${ids}`);

        const data = await response.json();
        const newData = data.map((item:any) => {
            return {
                ...item,
                quantity: lcData.find((i:any) => i.id === item.id).qty
            }
        })
        setCart(newData)
    }
    const handleChangeQty = (id:number, qty:number) => {
        const newCart = [...cart]
        if(newCart[id]) {
            newCart[id].quantity = qty

            const newOrdersCache = newCart.map(item => {
                return {
                    id: item.id,
                    qty: item.quantity
                }
            })
            console.log('here I am', newOrdersCache)
            localStorage.setItem('orders', JSON.stringify(newOrdersCache))

            setCart(newCart)
        }
    }
    const handleClick = async () => {
        const newOrdersCache = cart.map(item => {
            return {
                id: item.id,
                qty: item.quantity
            }
        })
        const branch_Id = await localStorage.getItem('branch_Id')
        const table_Id = await localStorage.getItem('table_Id')
        localStorage.setItem('orders', JSON.stringify(newOrdersCache))
        localStorage.setItem('orderNotes', notes)
        

        const urlencoded = new URLSearchParams();
        urlencoded.append("status", 'new');
        urlencoded.append("branch_Id", branch_Id || '');
        urlencoded.append("notes", notes);
        urlencoded.append("table", table_Id || '');

        newOrdersCache.forEach((item) => {
            urlencoded.append("item", JSON.stringify(item));
        })

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pos/transaction`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlencoded
        });
        const data = await response.json();
        console.log({data})

        localStorage.setItem('transaction_Id', data.id)

        Window.location.href=`/confirm`
    }
    const handleOnChange = (element: ChangeEvent<HTMLInputElement>) => {
        setNotes(element.currentTarget.value)
    }
    const handleAddMore = () => {
        Window.location.href = `/menu`
    }

    useEffect(() => {
        console.log("Side effect 1 called")
        init();
    }, [])

    useEffect(() => {
        if(cart.length > 0) {
            /* @NOTICE: Spreading `cart` here is necessary since type of the state can not be reduced, 
            however the type of the value of the state can be, so this is a necessary hack. */
            const newTotal = [...cart].reduce((prev:number, cur: any) => {
                return prev + (cur.quantity * cur.price)
            }, 0)
            setTotal(newTotal);
        }
    }, [cart])

    // useEffect(() => {
    //     console.log("Side effect 2 called")
    //     
        
    // }, [setCart])
    return (
        <Subinnerpage title="Checkout">
            
            <ul className={styles.list}>
                {cart.map((item: any, key) => (
                        <li className={styles.item} key={key}>
                            {/* <Link to="/item"> */}
                            <Image className='image' src={renderImage(item.photo)} alt={item.title} width={107} height={71} />
                            <div className={styles.item_meta}>
                                <div>
                                    <h6>{item.title}</h6>
                                    <small>{item.description}</small>

                                    <div className={layout.container}>
                                        <div className={`${layout.column} ${layout.f8}`}>
                                            <QuantityField fontSize={'12px'} value={item.quantity} changeEvent={(qty:number) => {
                                                // console.log("the change Event is fired")
                                                handleChangeQty(key, qty)
                                            }}/>
                                        </div>
                                        <div className={`${layout.column}`}>{formatCurrency(item.price)}</div>
                                    </div>
                                </div>
                            </div>
                            {/* </Link> */}
                        </li>
                    ))
                }
            </ul>
            <br />
            <h4>Add notes for the chef.</h4>
            <small>example: "I alergic to seafoods. Halal only please."</small>
            <TextField
                multiline
                rows={4}
                variant="outlined"
                placeholder="Add food notes here..."
                name="notes"
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': inputStyles }}
                onChange={handleOnChange}
            /> <br />
            <br />
            <div className={layout.container}>
                <div className={`${layout.column} ${layout.f6}`}>
                    Total
                </div>
                <div className={`${layout.column}`}>{formatCurrency(total)}</div>
            </div>
            <br />
            <button onClick={handleAddMore}
            className="button-primary">Add More</button>
            <br /><br />
            <button 
                onClick={handleClick} 
            className="button-secondary">Checkout</button>
        </Subinnerpage>
    )
}