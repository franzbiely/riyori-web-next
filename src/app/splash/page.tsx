// This is the first page splash screen
import Image from 'next/image';
import styles from "./splash.module.css";

export default function Splash() {
    return (
        <main className={styles.main}>
            <Image className='image' src="/images/ryori-logo-icon.png" alt="Ryori" width={136} height={165} />
        </main>
    )
}