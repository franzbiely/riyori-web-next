// 7th

import Innerpage from '@/components/innerpage';
import QuantityField from '@/components/quantityField';
import Search from '@/components/search';
import Subinnerpage from '@/components/subinnerpage';
import Table from '@/components/table';
import Image from 'next/image';
import layout from './../../components/layout.module.css';
import styles from "./orders.module.css";

export default function Orders() {
    return (
        <Subinnerpage title='My Orders'> 
            <br />
            <div className={styles.orders}>
                <h3>
                    <span className={styles.statusIndicator}></span>
                    Table 7</h3>
                    <div className={styles.order}>
                        <Table
                        header={''}
                        datas={[
                            {col1: '1', col2: 'Chicken Combo 1', col3: (<span className={styles.preparing}>Preparing</span>)},
                            {col1: '1', col2: 'Fish Combo 1', col3: (<span className={styles.served}>Served</span>)},
                            {col1: '2', col2: 'Pork Combo 1', col3: (<span className={styles.serving}>Serving</span>)},
                            {col1: '1', col2: 'Beef Combo 1', col3: (<span className={styles.preparing}>Preparing</span>)}
                        ]}/>
                    </div>
            </div>
            <br />
            <button 
                // onClick={handleClick} 
            className="button-secondary">Ready to Pay</button>
        </Subinnerpage>
    )
}