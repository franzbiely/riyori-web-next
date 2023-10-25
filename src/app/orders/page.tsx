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
    const table_Id = localStorage.getItem("table_Id") || "";
    const store_Id = localStorage.getItem("store_Id") || "";
    const branch_Id = localStorage.getItem("branch_Id") || "";

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/pos/transaction/status/?sid=${store_Id}&bid=${branch_Id}&tid=${table_Id}`
    );
    const data = await response.json();
    setTableNumber(table_Id);

    const transaction_Id = data._id;
    localStorage.setItem("transaction_Id", transaction_Id);

    const newOrdersUi = data.transactionItems.map((item: i_TransactionItem) => {
      return {
        col1: item.quantity,
        col2: item.menuItem.title,
        col3: (
          <span className={styles[item.status]}>
            {item.status.toLocaleUpperCase()}
          </span>
        ),
        colName: item.customer_name,
      };
    });
    setOrdersUi(newOrdersUi);

    console.log(newOrdersUi);
  };
  const handleClick = () => {
    setIsLoading(true);
    Window.location.href = "/summary";
  };
  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    setIsLoading(false);
    return () => {
      setIsLoading(false);
    };
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
