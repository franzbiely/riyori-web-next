"use client";
// 5th page
import Innerpage from "@/components/innerpage";
import QuantityField from "@/components/quantityField";
import Search from "@/components/search";
import Subinnerpage from "@/components/subinnerpage";
import Table from "@/components/table";
import Image from "next/image";
import { useEffect, useState } from "react";
import layout from "./../../components/layout.module.css";
import styles from "./product.module.css";
import { renderImage } from "./../../utils/utils";
import { Loader } from "@/utils/loader";
import imagePlaceholder from "./../../../public/images/no-img.jpg";

var Window = { location: { search: "", href: "" } };
if (typeof window !== "undefined") {
  Window = window;
}

export default function Product() {
  const [isLoading, setIsLoading] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [detail, setDetail] = useState<any>({
    photo: "",
  });

  const getProductDetail = async () => {
    const urlParams = new URLSearchParams(Window.location.search);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/branchItem/${urlParams.get("id")}`
    );
    const data = await response.json();
    setDetail(data);
  };
  const handleClick = () => {
    const urlParams = new URLSearchParams(Window.location.search);
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const indexIfExist = orders.findIndex(
      (item: any) => item.id === parseInt(urlParams.get("id") || "")
    );
    if (indexIfExist !== -1) {
      orders[indexIfExist].qty += quantity;
    } else {
      orders.push({
        _id: detail.menuItem._id,
        qty: quantity,
      });
    }
    localStorage.setItem("orders", JSON.stringify(orders));
    setIsLoading(true);
    Window.location.href = "/checkout";
  };
  const handleOnChange = (value: number) => {
    setQuantity(value);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  useEffect(() => {
    setIsLoading(false);
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <Subinnerpage title="">
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      <Image
        className={styles.featured_image}
        // src={imagePlaceholder}
        src={renderImage(detail?.photo ? detail.photo : imagePlaceholder)}
        alt="Ryori"
        width={283}
        height={192}
      />
      <br />
      <div className={layout.container}>
        <div className={`${layout.column} ${layout.f6}`}>
          <h4>{detail.title}</h4>
          <small>{detail.description}</small>
          <br />
          <QuantityField changeEvent={handleOnChange} value={quantity} />
        </div>
        <div className={`${layout.column} ${layout.right}`}>
          <h4>₱{detail.price}</h4>
        </div>
      </div>
      {/* <Table header="Select Add-Ons" datas={[]} /> */}
      <br />
      <button onClick={handleClick} className="button-secondary">
        Add To Order
      </button>
    </Subinnerpage>
  );
}
