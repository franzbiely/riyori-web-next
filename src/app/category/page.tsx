// 4th page
import Innerpage from '@/components/innerpage';
import Search from '@/components/search';
import Image from 'next/image';
import styles from "./category.module.css";

export default function Category() {
    return (
        <Innerpage>
            <Search />
            <br />
            <h4>Chicken</h4>
            <br />
            <ul className={styles.categories}>
                {[1,2,3,4].map((category, key) => (
                        <li className={styles.category}>
                            {/* <Link to="/category"> */}
                            <Image className='image' src="/images/sample-chicken.png" alt="Ryori" width={90} height={90} />
                            <div className={styles.category_meta}>
                                <h6>Chicken Combo 1</h6>
                                <small>P350</small>
                                <button 
                                    // onClick={handleClick} 
                                className="button-secondary">Add to Basket</button>
                            </div>
                            {/* </Link> */}
                        </li>
                    ))
                }
            </ul>
        </Innerpage>
    )
}