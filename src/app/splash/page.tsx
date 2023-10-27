"use client";
// This is the first page splash screen

import Image from "next/image";
import "animate.css";
import styles from "./splash.module.css";
import React, { useState, useEffect } from "react";
import { init } from "next/dist/compiled/@vercel/og/satori";
import { decrypt, encrypt, parseQueryStringToObject, smartRedirect } from "@/utils/utils";

var Window = { location: { search: "", href: "" } };
if (typeof window !== "undefined") {
  Window = window;
}

type Data = {
  photo: string;
};

export default function Splash() {
  const crypto = require("crypto");

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

      const token = urlParams.get("token") || "";

      const _tokenData = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/decrypt/${token}`
      );
      const tokenData = await _tokenData.text();

      const queryString = tokenData;
      const tokenResult = parseQueryStringToObject(queryString);

      const sid = tokenResult.id;
      const bid = tokenResult.branch;
      const tid = tokenResult.table;

      localStorage.setItem("store_Id", sid);
      localStorage.setItem("branch_Id", bid);
      localStorage.setItem("table_Id", tid);

      smartRedirect()
    });
  };
  useEffect(() => {
    init();
    fetchData();
  }, []);
  return (
    <main className={styles.main}>
      <Image
        className={styles.image}
        src="/images/ryori-logo-icon.png"
        // src={productData.photo}
        alt="Ryori"
        width={136}
        height={165}
      />
    </main>
  );
}
