import React, { useState, useEffect } from "react";
import styles from "./layout.module.css";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import ryoriLogo from "../../public/images/ryori-logo-red-small.png";

type Data = {
  photo: string;
};

export default function Subinnerheader({ title = "" }) {
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

  const handleBack = () => {
    window && window.history.back();
  };
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.column}>
          <Image
            className="image"
            src={storeImg.photo ? storeImg.photo : ryoriLogo}
            alt="Ryori"
            width={25}
            height={31}
            style={{ borderRadius: 100 }}
          />
        </div>
        <div className={`${styles.column} ${styles.f8}`}>
          <h4 className={styles.greetings}>{title}</h4>
        </div>
        <div>
          <CloseIcon style={{ cursor: "pointer" }} onClick={handleBack} />
        </div>
      </div>
    </div>
  );
}
