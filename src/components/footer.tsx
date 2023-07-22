import styles from "./layout.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={`${styles.container}`}>
          <div className={styles.column}>
            <Image className='image' src="/images/home.svg" alt="Ryori" width={24} height={24} />          
          </div>
          <div className={styles.column}>
            <Image className='image' src="/images/qr-scan.svg" alt="Ryori" width={62} height={62} />          
          </div>
          <div className={styles.column}>
            <Link href={'/checkout'}><Image className='image' src="/images/basket-grey.svg" alt="Ryori" width={25} height={31} /></Link>
          </div>
      </div>
    </div>
  )
}
