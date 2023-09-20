"use client";

// This is the 3rd page Menu screen
import Innerpage from "@/components/innerpage";
import Search from "@/components/search";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./menu.module.css";
import { renderImage } from "./../../utils/utils";
import { Loader } from "@/utils/loader";
import imagePlaceholder from "./../../../public/images/no-img.jpg";

interface Category_i {
  _id: number;
  title: string;
  photo: string;
  createdAt: string;
}
var Window = { location: { search: "", href: "" } };
if (typeof window !== "undefined") {
  Window = window;
}
export default function Menu() {
  const [isLoading, setIsLoading] = useState(false);

  const getAll = async () => {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL
      }/menuCategory?store_Id=${localStorage.getItem("store_Id")}`
    );
    const data = await response.json();
    setCategories(data);
  };
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAll();
  }, []);

  const handleBtn = (category: number) => {
    setIsLoading(true);
    Window.location.href = "/category?id=" + category;
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Innerpage>
      <br />
      {/* <Search /> */}
      <br />
      <h4>Categories</h4>
      <ul className={styles.menu_list}>
        {categories.map((category: Category_i, key: number) => (
          <li className={styles.menu_item} key={key}>
            <button onClick={() => handleBtn(category._id)}>
              {/* <Link prefetch={false} href={"/category?id=" + category.id}> */}
              {isLoading && (
                <div>
                  <Loader />
                </div>
              )}
              <div style={{ height: 40 }}>
                <Image
                  className="image"
                  src={renderImage(
                    category.photo ? category.photo : imagePlaceholder
                  )}
                  alt={category.title}
                  width={160}
                  height={65}
                />
                <h6>{category.title}</h6>
              </div>

              {/* </Link> */}
            </button>
          </li>
        ))}
      </ul>
      <br />
      {/* <h4>Add-ons</h4>
        //         <ul className={styles.addons_list}>
        //             <li>Coffee</li>
        //             <li>Coffee</li>
        //             <li>Coffee</li>
        //             <li>Coffee</li>
        //             <li>Coffee</li>
        //         </ul>
        //         <br />
        //         <h4>Top Sellers</h4>
        //         <ul className={styles.topsellers_list}>
        //             {[1,2,3].map((category, key) => (
        //                     <li className={styles.topsellers_item}>
        //                         <Image className='image' src="/images/sample-chicken.png" alt="Ryori" width={143} height={90} />
        //                         <div className={styles.topsellers_meta}>
        //                             <h6>Chicken</h6>
        //                             <small>P350</small>
        //                             <button
        //                                 // onClick={handleClick}
        //                             className="button-secondary">Add to Basket</button>
        //                         </div>
        //                     </li>
        //                 ))
        //             }
        //         </ul>*/}
    </Innerpage>
  );
}
