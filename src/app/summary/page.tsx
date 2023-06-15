// 8th

import Innerpage from '@/components/innerpage';
import QuantityField from '@/components/quantityField';
import Search from '@/components/search';
import Subinnerpage from '@/components/subinnerpage';
import Table from '@/components/table';
import Image from 'next/image';
import layout from './../../components/layout.module.css';
import styles from "./summary.module.css";

export default function Summary() {
    return (
        <Subinnerpage title='Summary'> 
            <br />
            <ul className={styles.list}>
                {[1,2,3,4].map((item, key) => (
                        <li className={`${styles.item} ${layout.container}`}>
                            {/* <Link to="/item"> */}
                            <Image className={`${styles.image} ${layout.column} ${layout.f2}`} src="/images/sample-chicken.png" alt="Ryori" width={45} height={35} />
                            <div className={`${styles.qty} ${layout.column} ${layout.f1}`}>
                                1 x
                            </div>
                            <div className={`${styles.item_meta} ${layout.column} ${layout.f6}`}>
                                <h6>Chicken Combo 1</h6>
                                <small>With riec and drink (12 oz)</small>
                            </div>
                            <div className={`${layout.column} ${layout.f1} ${styles.price}`}>P250</div>
                            {/* </Link> */}
                        </li>
                    ))
                }
            </ul> 
            <br />
            <div className={`${layout.container} ${styles.subtotal}`}>
                <div className={`${layout.column} ${layout.f6}`}>
                    Subtotal
                </div>
                <div className={`${layout.column}`}>₱1,270.00</div>
            </div>
            <div className={layout.container}>
                <div className={`${layout.column} ${layout.f6}`}>
                    Total
                </div>
                <div className={`${layout.column}`}>₱1,270.00</div>
            </div>
            <br />
            <button 
                // onClick={handleClick} 
            className="button-secondary">Pay</button>
        </Subinnerpage>
    )
}