"use client";
// This is the first page splash screen

import Image from "next/image";
import "animate.css";
import styles from "./splash.module.css";
import React, { useState, useEffect } from "react";
import { init } from "next/dist/compiled/@vercel/og/satori";
import { decrypt, encrypt, parseQueryStringToObject } from "@/utils/utils";

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
      const tokenData = await _tokenData.text()

      const queryString = tokenData;
      const tokenResult = parseQueryStringToObject(queryString);

      const sid = tokenResult.id;
      const bid = tokenResult.branch;
      const tid = tokenResult.table;

      localStorage.setItem("store_Id", sid);
      localStorage.setItem("branch_Id", bid);
      localStorage.setItem("table_Id", tid);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/pos/transaction/status/?sid=${sid}&bid=${bid}&tid=${tid}`
      );
      const data = await response.json();

      const orders = localStorage.getItem("orders") || "";
      
      if (orders.length > 0) {
        setTimeout(() => {
          Window.location.href = "/confirm";
        }, 500);
      }
      //  else if (data.status === "new") {
      //   setTimeout(() => {
      //     Window.location.href = "/confirm";
      //   }, 500);
      // }
      else if (data.status === "to_prepare") {
        setTimeout(() => {
          Window.location.href = "/orders";
        }, 500);
      } else if (data.status === "served") {
        setTimeout(() => {
          Window.location.href = "/summary";
        }, 500);
      } else if (data.status === "awaiting_next_action") {
        setTimeout(() => {
          Window.location.href = "/payment";
        }, 500);
      } else {
        localStorage.removeItem("orders");
        localStorage.removeItem("orderNotes");
        localStorage.removeItem("transaction_Id");
        setTimeout(() => {
          Window.location.href = "/opening";
        }, 1000);
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
        src="/images/ryori-logo-icon.png"
        // src={productData.photo}
        alt="Ryori"
        width={136}
        height={165}
      />
    </main>
  );
}
