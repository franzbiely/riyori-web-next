"use client";
// This is the first page splash screen

import Image from "next/image";
import "animate.css";
import styles from "./splash.module.css";
import React, { useState, useEffect } from "react";
import { init } from "next/dist/compiled/@vercel/og/satori";

var Window = { location: { search: "", href: "" } };
if (typeof window !== "undefined") {
  Window = window;
}

type Data = {
  photo: string;
};

export default function Splash() {
  const [productData, setProductData] = useState<Data>({
    photo: "",
  });
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

  const init = async () => {
    return new Promise(async (resolve, reject) => {
      const urlParams = new URLSearchParams(Window.location.search);

      const sid = urlParams.get("id") || "";
      const bid = urlParams.get("branch") || "";
      const tid = urlParams.get("table") || "";

      localStorage.setItem("store_Id", sid);
      localStorage.setItem("branch_Id", bid);
      localStorage.setItem("table_Id", tid);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/pos/transaction/status/?sid=${sid}&bid=${bid}&tid=${tid}`
      );
      const data = await response.json();

      console.log(data.status);
      if (data.status === "new") {
        setTimeout(() => {
          Window.location.href = "/confirm";
        }, 2000);
      } else if (data.status === "to_prepare") {
        setTimeout(() => {
          Window.location.href = "/orders";
        }, 2000);
      } else if (data.status === "awaiting_next_action") {
        setTimeout(() => {
          Window.location.href = "/payment";
        }, 2000);
      } else {
        setTimeout(() => {
          Window.location.href = "/opening";
        }, 2000);
      }
    });
  };
  useEffect(() => {
    fetchData();
    init();
  }, []);
  return (
    <main className={styles.main}>
      <Image
        className={styles.image}
        // src="/images/ryori-logo-icon.png"
        src={productData.photo}
        alt="Ryori"
        width={136}
        height={165}
      />
    </main>
  );
}
