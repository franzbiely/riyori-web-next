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
import { io, Socket } from "socket.io-client";
import { smartRedirect } from "./../../utils/utils";

var Window = { location: { search: "", href: "" } };
if (typeof window !== "undefined") {
  Window = window;
}

export default function Payment() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [openBank, setOpenBank] = useState(false);
  const [openGCash, setOpenGCash] = useState(false);
  const [inConfirm, setInConfirm] = useState(false);
  const [gcashData, setGcashData] = useState({
    phone: "",
    name: "",
    email: "",
  });
  const [bankData, setBankData] = useState({
    cardHolderName: "",
    cardNumber: "",
    amount: "",
    cvn: "",
    month: "",
    year: "",
  });

  const openBankField = () => {
    setOpenBank(!openBank);
    setOpenGCash(false);
  };

  const openGCashField = () => {
    setOpenGCash(!openGCash);
    setOpenBank(false);
  };

  const sendToSocket = async (socket: any, data: any) => {
    const branch_Id = await localStorage.getItem("branch_Id");
    socket.emit("join-channel-branch", { branch_Id });
    listenToSocket(socket);
    socket.emit("message-to-branch", {
      title: "Customer Ready to Pay",
      message: `Table #${data.table} is Paying`,
      branch_Id,
    });
  };
  const listenToSocket = async (socket: any) => {
    socket.on("join-channel-branch-response", (data: any) => {
      if (data) {
        console.log("You are connected to the branch socket.", {
          data,
          socket,
        });
      }
    });
    socket.on("message-to-branch-response", (data: any) => {
      if (data) {
        setIsLoading(false);
        setTimeout(() => {
          setInConfirm(true);
          console.log("Message successfully sent..", { data, socket });
        }, 100);
      }
    });
    socket.on("message-to-customer", (data: any) => {
      if (data) {
        smartRedirect();
      }
    });
  };

  const toPayCash = async () => {
    const transaction_Id = localStorage.getItem("transaction_Id") || "";
    const socket = io(process.env.NEXT_PUBLIC_API_URL || "");
    const urlencoded = new URLSearchParams();
    urlencoded.append("id", transaction_Id?.toString());
    urlencoded.append("status", "paying");
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

    const data = await response.json();
    sendToSocket(socket, data);
    Window.location.href = "/rate";
  };

  const debitPay = async () => {
    if (!bankData.cardHolderName || !bankData.cardNumber || !bankData.amount) {
      setError("All fields are required.");
    } else if (bankData.month.length !== 2) {
      setError("Month should 2 characters. Example: '06' ");
    } else if (bankData.year.length !== 4) {
      setError("Year should 4 characters. Example: '2030'");
    } else if (bankData.cvn.length !== 3) {
      setError("The last 3 digit of your Card Verification Number (CVN) ");
    } else {
      setError("");
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
    }
  };

  const handlePay = async () => {
    if (!gcashData.name || !gcashData.phone || !gcashData.email) {
      setError("All fields are required.");
    } else {
      setError("");
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

  const handleChange = (element: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = element.target;
    setBankData((prevFormData) => ({
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
        {/* <Link href="" onClick={openBankField}>
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
        </Link> */}
        {/* <Link href="" onClick={tempGcash}>
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
        </Link> */}
      </ul>

      <br />
      <hr />
      <br />
      {openBank && (
        <>
          <p className={styles.p}>Cardholder&apos;s Name</p>
          <TextField
            rows={1}
            variant="outlined"
            placeholder=""
            fullWidth
            name="cardHolderName"
            sx={{ "& .MuiOutlinedInput-root": inputStyles }}
            onChange={handleChange}
          />
          <br />
          <br />
          <p className={styles.p}>Card Number</p>
          <TextField
            rows={1}
            variant="outlined"
            placeholder=""
            fullWidth
            name="cardNumber"
            sx={{ "& .MuiOutlinedInput-root": inputStyles }}
            onChange={handleChange}
          />
          <br />
          <br />
          <p className={styles.p}>Amount</p>
          <TextField
            rows={1}
            variant="outlined"
            placeholder=""
            fullWidth
            name="amount"
            sx={{ "& .MuiOutlinedInput-root": inputStyles }}
            onChange={handleChange}
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
                name="month"
                type="number"
                sx={{
                  "& .MuiOutlinedInput-root": inputStyles,
                  "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
                    {
                      display: "none",
                    },
                }}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className={styles.p}>Expiration Year</p>
              <TextField
                rows={1}
                variant="outlined"
                placeholder="yyyy"
                fullWidth
                size="small"
                name="year"
                type="number"
                sx={{
                  "& .MuiOutlinedInput-root": inputStyles,
                  "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
                    {
                      display: "none",
                    },
                }}
                onChange={handleChange}
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
                name="cvn"
                sx={{
                  "& .MuiOutlinedInput-root": inputStyles,
                  "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
                    {
                      display: "none", // Hide the increment and decrement arrows
                    },
                }}
                onChange={handleChange}
              />
            </div>
          </div>

          <br />

          {error && <div className="error_message">{error}</div>}
          <button onClick={debitPay} className="button-secondary">
            Pay
          </button>
        </>
      )}
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
          {error && <div className="error_message">{error}</div>}
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
