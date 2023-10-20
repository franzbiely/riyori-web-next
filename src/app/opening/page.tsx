// This is the second page opening screen
"use client";

import React, { ChangeEvent, useState, useEffect } from "react";
import Image from "next/image";
import "animate.css";
import styles from "./opening.module.css";
import Link from "next/link";
import { Loader } from "@/utils/loader";
import ryoriLogo from "../../../public/images/ryori-logo-icon.png";
import TextField from "@mui/material/TextField";

type Data = {
  photo: string;
};

var Window = { location: { search: "", href: "" } };
if (typeof window !== "undefined") {
  Window = window;
}

export default function Opening() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
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
  const handleOnChange = (element: ChangeEvent<HTMLInputElement>) => {
    setName(element.currentTarget.value);
  };
  const inputStyles = {
    marginTop: "5px",
    backgroundColor: "#FFFFFF",
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBtn = () => {
    setIsLoading(true);
    localStorage.setItem("name", name);
    Window.location.href = `/menu`;
  };

  return (
    <main className={styles.main}>
      <div className={styles.mainInner}>
        <Image
          className={styles.image}
          // src="/images/ryori-brand.png"
          src={productData.photo ? productData.photo : ryoriLogo}
          alt="Ryori"
          width={283}
          height={141}
        />
        {/* <br /> */}
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter your name"
          value={name}
          fullWidth
          size="small"
          onChange={handleOnChange}
          sx={{ "& .MuiOutlinedInput-root": inputStyles }}
        />
        <br />
        <br />

        <button onClick={handleBtn} className="button-primary">
          {isLoading && (
            <div>
              <Loader />
            </div>
          )}
          Get Started
        </button>
      </div>
    </main>
  );
}
