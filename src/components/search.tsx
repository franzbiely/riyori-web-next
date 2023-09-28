"use client";

import styles from "./layout.module.css";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <div className={styles.search}>
      <TextField
        disabled={true}
        fullWidth
        placeholder="Search food here"
        id="fullWidth"
        className={styles.search}
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start" className={styles.inputAdornment}>
              <SearchIcon style={{ color: "#000" }} />
            </InputAdornment>
          ),
          style: {},
          inputProps: {
            style: {
              fontFamily: "inherit",
              padding: "6px", // Adjust the padding value as needed
              backgroundColor: "#f6f6f6",
            },
          },
        }}
      />
    </div>
  );
}
