import styles from "./layout.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [transactionId, setTransactionId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localTransactionId = localStorage.getItem("transaction_Id");
      setTransactionId(localTransactionId);
    }
  }, []);

  const footerContent = transactionId ? (
    <div className={styles.column}>
      <Link href={"/orders"}>
        <Image
          className="image"
          src="/images/basket-grey.svg"
          alt="Ryori"
          width={25}
          height={31}
        />
      </Link>
    </div>
  ) : (
    <div className={styles.column}>
      <Image
        className="image"
        src="/images/basket-grey.svg"
        alt="Ryori"
        width={25}
        height={31}
      />
    </div>
  );

  return (
    <div className={styles.footer}>
      <div className={`${styles.container}`}>
        <div className={styles.column}>
          <Link href={"/menu"}>
            <Image
              className="image"
              src="/images/home.svg"
              alt="Ryori"
              width={24}
              height={24}
            />
          </Link>
        </div>
        {/* <div className={styles.column}>
            <Image className='image' src="/images/qr-scan.svg" alt="Ryori" width={62} height={62} />          
          </div> */}
        <div className={styles.column}>{footerContent}</div>
      </div>
    </div>
  );
}
