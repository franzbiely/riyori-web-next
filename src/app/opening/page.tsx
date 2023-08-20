// This is the second page opening screen
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "animate.css";
import styles from "./opening.module.css";
import Link from "next/link";

type Data = {
  photo: string;
};

export default function Opening() {
  const [productData, setProductData] = useState<Data>({
    photo: "",
  });

  const store = localStorage.getItem("store_Id");
  async function fetchData() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/store/${localStorage.getItem(
          "store_Id"
        )}`
      );
      if (response.ok) {
        const data = await response.json();
        setProductData(data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.mainInner}>
        <Image
          className={styles.image}
          //   src="/images/ryori-brand.png"
          src={productData.photo}
          alt="Ryori"
          width={283}
          height={141}
        />
        <br />
        <br />
        <Link href="/menu">
          <button className="button-primary">Get Started</button>
        </Link>
      </div>
    </main>
  );
}
