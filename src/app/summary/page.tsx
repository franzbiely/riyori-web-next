// 8th
"use client";
import Innerpage from "@/components/innerpage";
import QuantityField from "@/components/quantityField";
import Search from "@/components/search";
import Subinnerpage from "@/components/subinnerpage";
import Table from "@/components/table";
import Image from "next/image";
import { useEffect, useState } from "react";
import layout from "./../../components/layout.module.css";
import styles from "./summary.module.css";
import { renderImage } from "./../../utils/utils";
import { Loader } from "@/utils/loader";
import imagePlaceholder from "./../../../public/images/no-img.jpg";

var Window = { location: { search: "", href: "" } };
if (typeof window !== "undefined") {
  Window = window;
}

export default function Summary() {
  const [isLoading, setIsLoading] = useState(false);

  const [tableNumber, setTableNumber] = useState("0");
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [orders, setOrders] = useState([
    {
      quantity: 0,
      menuItem: {
        title: "",
        description: "",
        price: "",
        photo: "",
      },
    },
  ]);

  const init = async () => {
    const transaction_Id = localStorage.getItem("transaction_Id");
    const table_Id = localStorage.getItem("table_Id") || "";
    const store_Id = localStorage.getItem("store_Id") || "";
    const branch_Id = localStorage.getItem("branch_Id") || "";

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/pos/transaction/status/?sid=${store_Id}&bid=${branch_Id}&tid=${table_Id}`
    );
    const data = await response.json();
    setTableNumber(table_Id);

    setOrders(data.transactionItem);
  };
  const handleClick = () => {
    setIsLoading(true);
    Window.location.href = "/payment";
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

  useEffect(() => {
    if (orders.length > 0) {
      /* @NOTICE: Spreading `orders` here is necessary since type of the state can not be reduced, 
            however the type of the value of the state can be, so this is a necessary hack. */
      const newTotal = [...orders].reduce((prev: number, cur: any) => {
        return prev + cur.quantity * cur.menuItem.price;
      }, 0);
      setSubtotal(newTotal);
      setTotal(newTotal);
    }
  }, [orders]);

  return (
    <Subinnerpage title="Summary">
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      <br />
      <ul className={styles.list}>
        {orders.map((item: any, key) => (
          <li className={`${styles.item} ${layout.container}`} key={key}>
            {/* <Link to="/item"> */}
            <Image
              className={`${styles.image} ${layout.column} ${layout.f2}`}
              // src={imagePlaceholder}
              src={renderImage(item?.photo ? item.photo : imagePlaceholder)}
              alt="Ryori"
              width={45}
              height={35}
            />
            <div className={`${styles.qty} ${layout.column} ${layout.f1}`}>
              {item.quantity} x
            </div>
            <div
              className={`${styles.item_meta} ${layout.column} ${layout.f6}`}
            >
              <h6>{item.menuItem.title}</h6>
              <small>{item.menuItem.description}</small>
            </div>
            <div className={`${layout.column} ${layout.f1} ${styles.price}`}>
              P{item.menuItem.price}
            </div>
            {/* </Link> */}
          </li>
        ))}
      </ul>
      <br />
      <div className={`${layout.container} ${styles.subtotal}`}>
        <div className={`${layout.column} ${layout.f6}`}>Subtotal</div>
        <div className={`${layout.column}`}>₱{subtotal}</div>
      </div>
      <div className={layout.container}>
        <div className={`${layout.column} ${layout.f6}`}>Total</div>
        <div className={`${layout.column}`}>₱{total}</div>
      </div>
      <br />
      <button onClick={handleClick} className="button-secondary">
        Go to Payment
      </button>
    </Subinnerpage>
  );
}
