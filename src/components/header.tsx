import styles from "./layout.module.css";
import Image from "next/image";
export default function Header() {
  const table_Id = localStorage.getItem("table_Id");
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.column}>
          <Image
            className="image"
            src="/images/ryori-logo-red-small.png"
            alt="Ryori"
            width={25}
            height={31}
          />
        </div>
        <div className={`${styles.column} ${styles.f8}`}>
          <h4 className={styles.greetings}>
            Good morning!
            <small>Table {table_Id}</small>
          </h4>
        </div>
      </div>
    </div>
  );
}
