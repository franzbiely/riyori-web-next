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
export default function Category() {
    const getCurrentCategory = async () => {
        const urlParams = new URLSearchParams(window.location.search);

        const response = await fetch(`http://localhost:3000/menuCategory/${urlParams.get('id')}`);
        const data = await response.json();
        setCurrentCategory(data)
    }
    const getAll = async () => {
        const response = await fetch('http://localhost:3000/menuItem');
        const data = await response.json();
        setMenuItem(data)
    }
    const [menuItem, setMenuItem] = useState([])
    const [currentCategory, setCurrentCategory] = useState({
        title:''
    })

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
                            <Link href="/category">
                            <Image className='image' src='/images/sample-chicken.png' alt="Ryori" width={90} height={90} />
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