"use client"
// 4th page
import Innerpage from '@/components/innerpage';
import Search from '@/components/search';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from "./category.module.css";

interface Menu_i {
    id: number,
    title: string,
    photo: string,
    price: string,
    quantity: string,
    description: string,
    cookingTime: string,
    createdAt: string,
}
const urlParams = new URLSearchParams(window.location.search);
export default function Category() {
    const [menuItem, setMenuItem] = useState([])
    const [currentCategory, setCurrentCategory] = useState({
        title:''
    })

    const getCurrentCategory = async () => {
        

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menuCategory/${urlParams.get('id')}`);
        const data = await response.json();
        setCurrentCategory(data)
    }
    const getAll = async () => {
        const branch_Id = localStorage.getItem('branch_Id')
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/branchItem/?branch_Id=${branch_Id}&category_Id=${urlParams.get('id')}`);
        const data = await response.json();
        setMenuItem(data)
    }
    

    useEffect(() => {
        getCurrentCategory();
        getAll();
    },[])
    return (
        <Innerpage>
            <Search />
            <br />
            <h4>{(currentCategory.title)}</h4>
            <br />
            <ul className={styles.categories}>
                {menuItem.map((item: Menu_i) => (
                        <li className={styles.category}>
                            <Link href={`/product/?id=${item.id}`}>
                                <Image className='image' src={item.photo} alt="Ryori" width={90} height={90} />
                                <div className={styles.category_meta}>
                                    <h6>{item.title}</h6>
                                    <small>P{item.price}</small>
                                    <button 
                                        // onClick={handleClick} 
                                    className="button-secondary">Add to Basket</button>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </Innerpage>
    )
}