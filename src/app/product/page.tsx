// 5th page
import Innerpage from '@/components/innerpage';
import QuantityField from '@/components/quantityField';
import Search from '@/components/search';
import Subinnerpage from '@/components/subinnerpage';
import Table from '@/components/table';
import Image from 'next/image';
import layout from './../../components/layout.module.css';
import styles from "./product.module.css";

export default function Product() {
    return (
        <Subinnerpage>
            <Image className={styles.featured_image} src="/images/sample-chicken.png" alt="Ryori" width={283} height={192} />
            <br />
            <div className={layout.container}>
                <div className={`${layout.column} ${layout.f6}`}>
                    <h4>Chicken Combo 1</h4>
                    <small>With rice and drink (12 oz)</small>
                    <br />
                    <QuantityField />
                </div>
                <div className={`${layout.column} ${layout.right}`}>
                    <h4>P250</h4>
                </div>
            </div>
            <Table />
            <br />
            <button 
                // onClick={handleClick} 
            className="button-secondary">Get Started</button>
        </Subinnerpage>
    )
}