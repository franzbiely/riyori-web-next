"use client";
// 4th page
import Innerpage from "@/components/innerpage";
import Search from "@/components/search";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./category.module.css";
import { formatCurrency, renderImage } from "./../../utils/utils";
import { Loader } from "@/utils/loader";
import imagePlaceholder from "./../../../public/images/no-img.jpg";

interface Menu_i {
  _id: number;
  title: string;
  photo: string;
  price: string;
  quantity: string;
  description: string;
  cookingTime: string;
  createdAt: string;
}
var Window = { location: { search: "", href: "" } };
if (typeof window !== "undefined") {
  Window = window;
}

export default function Category() {
  const [isLoading, setIsLoading] = useState(false);

  const [menuItem, setMenuItem] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({
    title: "",
  });

  const getCurrentCategory = async () => {
    const urlParams = new URLSearchParams(Window.location.search);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/menuCategory/${urlParams.get("id")}`
    );
    const data = await response.json();
    setCurrentCategory(data);
  };
  const getAll = async () => {
    const urlParams = new URLSearchParams(Window.location.search);
    const branch_Id = localStorage.getItem("branch_Id");
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL
      }/branchItem/?branch_Id=${branch_Id}&category_Id=${urlParams.get("id")}`
    );
    const data = await response.json();
    setMenuItem(data);
  };

  useEffect(() => {
    getCurrentCategory();
    getAll();
    setIsLoading(false);
  }, []);

  const handleBtn = (item: number) => {
    setIsLoading(true);
    Window.location.href = "../product/?id=" + item;
    // setIsLoading(false);
  };

  return (
    <Innerpage>
      {/* <Search /> */}

      <br />
      <h4>{currentCategory.title}</h4>
      <br />
      <ul className={styles.categories}>
        {menuItem.map((item: Menu_i, key: number) => (
          <li className={styles.category} key={key}>
            <button className={styles.btn} onClick={() => handleBtn(item._id)}>
              {/* <Link href={`/product/?id=${item.id}`}> */}
              {isLoading && (
                <div>
                  <Loader />
                </div>
              )}
              <Image
                className="image"
                src={imagePlaceholder}
                // src={renderImage(item.photo ? item.photo : imagePlaceholder)}
                alt="Ryori"
                width={90}
                height={90}
              />
              <div className={styles.category_meta}>
                <h6>{item.title}</h6>
                <small>{formatCurrency(item.price)}</small>
                <button
                  // onClick={handleClick}
                  className="button-secondary"
                >
                  Add to Basket
                </button>
              </div>
              {/* </Link> */}
            </button>
          </li>
        ))}
      </ul>
    </Innerpage>
  );
}
