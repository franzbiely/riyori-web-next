"use client"

// This is the 3rd page Menu screen
import Innerpage from '@/components/innerpage';
import Search from '@/components/search';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from "./menu.module.css";

interface Category_i {
    id: number,
    title: string,
    photo: string,
    createdAt: string,
}
export default function Menu() {
    const getAll = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menuCategory?store_Id=${localStorage.getItem('store_Id')}`);
        const data = await response.json();
        setCategories(data)
    }
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getAll();
    },[])
    return (
        <Innerpage>
            <Search />
            <br />
            <h4>Categories</h4>
            <ul className={styles.menu_list}>
                {categories.map((category: Category_i) => (
                        <li className={styles.menu_item}>
                            <Link href={'/category?id=' + category.id}>
                                <Image className='image' src={category.photo} alt={category.title} width={143} height={65} />
                                <h6>{category.title}</h6>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <br />
            <h4>Add-ons</h4>
            <ul className={styles.addons_list}>
                <li>Coffee</li>
                <li>Coffee</li>
                <li>Coffee</li>
                <li>Coffee</li>
                <li>Coffee</li>
            </ul>
            <br />
            <h4>Top Sellers</h4>
            <ul className={styles.topsellers_list}>
                {[1,2,3].map((category, key) => (
                        <li className={styles.topsellers_item}>
                            <Image className='image' src="/images/sample-chicken.png" alt="Ryori" width={143} height={90} />
                            <div className={styles.topsellers_meta}>
                                <h6>Chicken</h6>
                                <small>P350</small>
                                <button 
                                    // onClick={handleClick} 
                                className="button-secondary">Add to Basket</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </Innerpage>
    )
}