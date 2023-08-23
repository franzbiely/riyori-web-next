import React, { useState, useEffect } from "react";
import styles from "./layout.module.css";
import Image from "next/image";
import ryoriLogo from "../../public/images/ryori-logo-red-small.png";

type Data = {
  photo: string;
};
export default function Header() {
  const table_Id = localStorage.getItem("table_Id");
  const [storeImg, setStoreImg] = useState<Data>({
    photo: "",
  });

  async function fetchStoreImg() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/store/${localStorage.getItem(
          "store_Id"
        )}`
      );
      if (response.ok) {
        const data = await response.json();
        setStoreImg(data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  useEffect(() => {
    fetchStoreImg();
  }, []);
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.column}>
          <Image
            className="image"
            // src="/images/ryori-logo-red-small.png"
            src={storeImg.photo ? storeImg.photo : ryoriLogo}
            alt="Ryori"
            width={30}
            height={31}
            style={{
              borderRadius: 100,
              overflow: "hidden",
              width: "30px",
              height: "30px",
            }}
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
