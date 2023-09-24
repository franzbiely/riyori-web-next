import React, { useState, useEffect } from "react";
import styles from "./layout.module.css";
import Image from "next/image";
import ryoriLogo from "../../public/images/ryori-logo-red-small.png";
import { toBase64, convertImage } from "@/utils/utils";
import Skeleton from "react-loading-skeleton";

type Data = {
  photo: string;
};
export default function Header() {
  const [greeting, setGreeting] = useState("");
  const [table_Id, setTableId] = useState<string | null>(null);
  const [storeImg, setStoreImg] = useState<Data>({
    photo: "",
  });

  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime >= 0 && currentTime < 12) {
      setGreeting("Good Morning");
    } else if (currentTime >= 12 && currentTime < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

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
    const storedTableId = localStorage.getItem("table_Id");
    if (typeof window !== "undefined" && storedTableId) {
      setTableId(storedTableId);
    }
    fetchStoreImg();
  }, []);
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.column}>
          <Image
            className="image"
            src="/images/ryori-logo-red-small.png"
            // src={storeImg.photo ? storeImg.photo : ryoriLogo}
            alt="Ryori"
            width={30}
            height={31}
            style={{
              width: "30px",
              height: "30px",
            }}
            loading="lazy"
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(convertImage(700, 475))}`}
          />
        </div>
        <div className={`${styles.column} ${styles.f8}`}>
          <h4 className={styles.greetings}>
            {greeting || <Skeleton />}
            {table_Id ? <small>Table {table_Id}</small> : <Skeleton />}
          </h4>
        </div>
      </div>
    </div>
  );
}
