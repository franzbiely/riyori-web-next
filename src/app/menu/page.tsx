// This is the 3rd page Menu screen
import Innerpage from '@/components/innerpage';
import Search from '@/components/search';
import Image from 'next/image';
import styles from "./menu.module.css";

export default function Menu() {
    return (
        <Innerpage>
            <Search />
            <br />
            <h4>Categories</h4>
            <ul className={styles.menu_list}>
                {[1,2,3,4,5,6].map((category, key) => (
                        <li className={styles.menu_item}>
                            {/* <Link to="/category"> */}
                                <Image className='image' src="/images/sample-chicken.png" alt="Ryori" width={143} height={65} />
                                <h6>Chicken</h6>
                            {/* </Link> */}
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