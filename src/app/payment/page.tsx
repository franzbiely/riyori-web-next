// 9th
"use client";
import Innerpage from "@/components/innerpage";
import QuantityField from "@/components/quantityField";
import Search from "@/components/search";
import Subinnerpage from "@/components/subinnerpage";
import Table from "@/components/table";
import Image from "next/image";
import Link from "next/link";
import layout from "./../../components/layout.module.css";
import styles from "./payment.module.css";
import TextField from "@mui/material/TextField";
import { ChangeEvent, useState, useEffect } from "react";
import { Loader } from "@/utils/loader";

var Window = { location: { search: "", href: "" } };
if (typeof window !== "undefined") {
  Window = window;
}

export default function Payment() {
  const [isLoading, setIsLoading] = useState(false);

  const [openBank, setOpenBank] = useState(false);
  const [openGCash, setOpenGCash] = useState(false);
  const [gcashData, setGcashData] = useState({
    phone: "",
    name: "",
    email: "",
  });
  const [bankData, setBankData] = useState({
    cardHolderName: "",
    cardNumber: "",
    cvn: "",
  });

  const openBankField = () => {
    setOpenBank(!openBank);
  };

  const openGCashField = () => {
    setOpenGCash(!openGCash);
  };

  const toPayCash = async () => {
    const transaction_Id = localStorage.getItem("transaction_Id") || "";

    const urlencoded = new URLSearchParams();
    urlencoded.append("id", transaction_Id?.toString());
    urlencoded.append("status", "to_pay_cash");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/pos/transaction/${transaction_Id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlencoded,
      }
    );
    // const data = await response.json();
    // console.log(data);
    // if (data.redirect) {
    Window.location.href = "/rate";
    // }
  };

  const debitPay = async () => {
    const transaction_Id = localStorage.getItem("transaction_Id") || "";

    const urlencoded = new URLSearchParams();
    urlencoded.append("_id", transaction_Id?.toString());
    urlencoded.append("cardHolderName", bankData.cardHolderName);
    urlencoded.append("cardNumber", bankData.cardNumber);
    urlencoded.append("cvn", bankData.cvn);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/pos/transaction/create-payment/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlencoded,
      }
    );

    const data = await response.json();

    if (data.redirect) {
      setIsLoading(true);
      Window.location.href = data.redirect;
    }
  };
  const handlePay = async () => {
    const transaction_Id = localStorage.getItem("transaction_Id") || "";

    const urlencoded = new URLSearchParams();
    urlencoded.append("_id", transaction_Id?.toString());
    urlencoded.append("phone", gcashData.phone);
    urlencoded.append("email", gcashData.email);
    urlencoded.append("name", gcashData.name);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/pos/transaction/create-payment/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlencoded,
      }
    );

    const data = await response.json();

    if (data.redirect) {
      setIsLoading(true);
      Window.location.href = data.redirect;
    }
  };

  useEffect(() => {
    setIsLoading(false);
    return () => {
      setIsLoading(false);
    };
  }, []);

  const handleOnChange = (element: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = element.target;
    setGcashData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const inputStyles = {
    borderRadius: "15px",
  };

  return (
    <Subinnerpage title="Payment">
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      <br />
      <ul className={styles.list}>
        <Link href="" onClick={toPayCash}>
          <li className={`${styles.item} ${layout.container}`}>
            {/* <Link to="/item"> */}

            <Image
              className={`${layout.column}`}
              src="/images/cash-icon.png"
              alt="Ryori"
              width={33}
              height={18}
            />
            <div
              className={`${layout.column} ${layout.f7} ${styles.item_meta}`}
            >
              Cash
            </div>
            {/* </Link> */}
          </li>
        </Link>
        <Link href="" onClick={openBankField}>
          <li className={`${styles.item} ${layout.container}`}>
            <Image
              className={`${layout.column} `}
              src="/images/bank-cards.svg"
              alt="Ryori"
              width={30}
              height={28}
            />
            <div
              className={`${layout.column} ${layout.f7} ${styles.item_meta}`}
            >
              Debit/Credit
            </div>
          </li>
        </Link>
        <Link href="" onClick={openGCashField}>
          <li className={`${styles.item} ${layout.container}`}>
            <Image
              className={`${layout.column} `}
              src="/images/gcash.svg"
              alt="Ryori"
              width={62}
              height={62}
            />
            <div
              className={`${layout.column} ${layout.f7} ${styles.item_meta}`}
            >
              Gcash
            </div>
          </li>
        </Link>
      </ul>

      <br />
      <hr />
      <br />
      {openBank && (
        <>
          <p className={styles.p}>Cardholder's Name</p>
          <TextField
            rows={1}
            variant="outlined"
            placeholder=""
            fullWidth
            name="name"
            sx={{ "& .MuiOutlinedInput-root": inputStyles }}
            onChange={handleOnChange}
          />
          <br />
          <br />
          <p className={styles.p}>Card Number</p>
          <TextField
            rows={1}
            variant="outlined"
            placeholder=""
            fullWidth
            name="name"
            sx={{ "& .MuiOutlinedInput-root": inputStyles }}
            onChange={handleOnChange}
          />
          <br />
          <br />

          <div className={`${layout.column} ${styles.row_meta}`}>
            <div>
              <p className={styles.p}>Expiration Month</p>
              <TextField
                rows={1}
                variant="outlined"
                placeholder="mm"
                fullWidth
                size="small"
                name="email"
                type="number"
                sx={{
                  "& .MuiOutlinedInput-root": inputStyles,
                  "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
                    {
                      display: "none", // Hide the increment and decrement arrows
                    },
                }}
                onChange={handleOnChange}
              />
            </div>
            <div>
              <p className={styles.p}>Expiration Year</p>
              <TextField
                rows={1}
                variant="outlined"
                placeholder="mm"
                fullWidth
                size="small"
                name="email"
                type="number"
                sx={{
                  "& .MuiOutlinedInput-root": inputStyles,
                  "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
                    {
                      display: "none", // Hide the increment and decrement arrows
                    },
                }}
                onChange={handleOnChange}
              />
            </div>
            <div>
              <p className={styles.p}>CVN</p>
              <TextField
                rows={1}
                variant="outlined"
                placeholder=""
                fullWidth
                type="number"
                size="small"
                name="email"
                sx={{
                  "& .MuiOutlinedInput-root": inputStyles,
                  "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
                    {
                      display: "none", // Hide the increment and decrement arrows
                    },
                }}
                onChange={handleOnChange}
              />
            </div>
          </div>

          <br />
          <br />
          <button onClick={debitPay} className="button-secondary">
            Pay
          </button>
        </>
      )}
      <br />
      <br />
      {openGCash && (
        <>
          <p className={styles.p}>Enter Name: </p>
          <TextField
            rows={1}
            variant="outlined"
            placeholder=""
            fullWidth
            name="name"
            sx={{ "& .MuiOutlinedInput-root": inputStyles }}
            onChange={handleOnChange}
          />
          <br />
          <br />
          <p className={styles.p}>Enter G-Cash Number: </p>
          <TextField
            rows={1}
            variant="outlined"
            placeholder=""
            fullWidth
            name="phone"
            sx={{ "& .MuiOutlinedInput-root": inputStyles }}
            onChange={handleOnChange}
          />
          <br />
          <br />
          <p className={styles.p}>Amount </p>
          <TextField
            rows={1}
            variant="outlined"
            placeholder=""
            fullWidth
            name="email"
            sx={{ "& .MuiOutlinedInput-root": inputStyles }}
            onChange={handleOnChange}
          />
          <br />
          <br />
          <button onClick={handlePay} className="button-secondary">
            Pay
          </button>
        </>
      )}
      <br />
      <br />
    </Subinnerpage>
  );
}
