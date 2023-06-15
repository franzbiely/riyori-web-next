// This is the nt page summary screen
import Image from 'next/image';
import styles from "./splash.module.css";

export default function Summary() {
    return (
        <main className={styles.main}>
            <Image className='image' src="/images/ryori-logo-icon.png" alt="Ryori" width={136} height={165} />
        </main>
    )
}