// 9th

import Innerpage from '@/components/innerpage';
import QuantityField from '@/components/quantityField';
import Search from '@/components/search';
import Subinnerpage from '@/components/subinnerpage';
import Table from '@/components/table';
import Image from 'next/image';
import layout from './../../components/layout.module.css';
import styles from "./payment.module.css";

export default function Payment() {
    return (
        <Subinnerpage title='Payment'> 
            <br />
            <ul className={styles.list}>
                <li className={`${styles.item} ${layout.container}`}>
                    {/* <Link to="/item"> */}
                    <Image className={`${layout.column}`} src="/images/cash-icon.png" alt="Ryori" width={33} height={18} />
                    <div className={`${layout.column} ${layout.f7} ${styles.item_meta}`}>Cash</div>
                    {/* </Link> */}
                </li>
                <li className={`${styles.item} ${layout.container}`}>
                    {/* <Link to="/item"> */}
                    <Image className={`${layout.column} `} src="/images/bank-cards.svg" alt="Ryori" width={30} height={28} />
                    <div className={`${layout.column} ${layout.f7} ${styles.item_meta}`}>Debit/Credit</div>
                    {/* </Link> */}
                </li>
                <li className={`${styles.item} ${layout.container}`}>
                    {/* <Link to="/item"> */}
                    <Image className={`${layout.column} `} src="/images/gcash.svg" alt="Ryori" width={62} height={62} />
                    <div className={`${layout.column} ${layout.f7} ${styles.item_meta}`}>Gcash</div>
                    {/* </Link> */}
                </li>
            </ul> 
            <br />
        </Subinnerpage>
    )
}