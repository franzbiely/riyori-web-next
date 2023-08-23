// 7th
"use client";
import Innerpage from "@/components/innerpage";
import QuantityField from "@/components/quantityField";
import Search from "@/components/search";
import Subinnerpage from "@/components/subinnerpage";
import Table from "@/components/table";
import { i_TransactionItem } from "@/utils/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import layout from "./../../components/layout.module.css";
import styles from "./orders.module.css";
import { Loader } from "@/utils/loader";

var Window = { location: { search: "", href: "" } };
if (typeof window !== "undefined") {
  Window = window;
}

export default function Orders() {
  const [isLoading, setIsLoading] = useState(false);

  const [tableNumber, setTableNumber] = useState("0");
  const [ordersUi, setOrdersUi] = useState([]);
  const init = async () => {
    const transaction_Id = localStorage.getItem("transaction_Id");
    const table_Id = localStorage.getItem("table_Id") || "";

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/pos/transaction/${transaction_Id}`
    );
    const data = await response.json();
    console.log({ data });
    setTableNumber(table_Id);

    const newOrdersUi = data.transactionItem.map((item: i_TransactionItem) => {
      return {
        col1: item.quantity,
        col2: item.menuItem.title,
        col3: (
          <span className={styles[item.status]}>
            {item.status.toLocaleUpperCase()}
          </span>
        ),
      };
    });
    setOrdersUi(newOrdersUi);
  };
  const handleClick = () => {
    setIsLoading(true);
    Window.location.href = "/summary";
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <Subinnerpage title="My Orders">
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      <br />
      <div className={styles.orders}>
        <h3>
          <span className={styles.statusIndicator}></span>
          On Queue
        </h3>
        <div className={styles.order}>
          <Table header={`Table ${tableNumber}`} datas={ordersUi} />
        </div>
      </div>
      <br />
      <button onClick={handleClick} className="button-secondary">
        Ready to Pay
      </button>
    </Subinnerpage>
  );
}
