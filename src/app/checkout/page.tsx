"use client";
// 6th page
import Innerpage from "@/components/innerpage";
import QuantityField from "@/components/quantityField";
import Search from "@/components/search";
import Subinnerpage from "@/components/subinnerpage";
import Table from "@/components/table";
import TextField from "@mui/material/TextField";
import { init } from "next/dist/compiled/@vercel/og/satori";
import Image from "next/image";
import { ChangeEvent, useEffect, useLayoutEffect, useState } from "react";
import layout from "./../../components/layout.module.css";
import styles from "./checkout.module.css";
import stylesConfirm from "./../confirm/confirm.module.css";
import Link from "next/link";
import {
  convertImage,
  formatCurrency,
  renderImage,
  smartRedirect,
  toBase64,
} from "./../../utils/utils";
import { io, Socket } from "socket.io-client";
import { Loader } from "@/utils/loader";
import imagePlaceholder from "./../../../public/images/no-img.jpg";
import Skeleton from "react-loading-skeleton";

interface i_Cart {
  _id: number;
  quantity: number;
  price: number;
}
const i_Cart_default = {
  _id: -1,
  quantity: 0,
  price: 0,
};
var Window = { location: { search: "", href: "" } };
if (typeof window !== "undefined") {
  Window = window;
}

export default function Checkout() {
  const [isLoading, setIsLoading] = useState(false);

  const [cart, setCart] = useState<i_Cart[] | []>([]);
  const [notes, setNotes] = useState("");
  const [total, setTotal] = useState(0);
  const [inConfirm, setInConfirm] = useState(false)
  // const [apiCalled, setApiCalled] = useState(false);
  

  const inputStyles = {
    borderRadius: "15px",
  };

  const init = async () => {
    const lcData = JSON.parse(localStorage.getItem("orders") || "");
    if (lcData === "") {
      return;
    }
    const ids = lcData.map((item: any) => item._id).join(",");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/menuItem/batch?ids=${ids}`
    );

    const data = await response.json();
    const newData = data.map((item: any) => {
      return {
        ...item,
        quantity: lcData.find((i: any) => i._id === item._id).qty,
      };
    });
    setCart(newData);
    
  };
  const handleChangeQty = (_id: number, qty: number) => {
    const newCart = [...cart];
    if (newCart[_id]) {
      newCart[_id].quantity = qty;

      const newOrdersCache = newCart.map((item) => {
        return {
          _id: item._id,
          qty: item.quantity,
        };
      });
      localStorage.setItem("orders", JSON.stringify(newOrdersCache));

      setCart(newCart);
    }
  };
  const sendToSocket = async (socket, data) => {
    
    const branch_Id = await localStorage.getItem("branch_Id");
    socket.emit('join-channel-branch', { branch_Id})
    listenToSocket(socket);
    socket.emit('message-to-branch', {
      title: "Customer Just Ordered",
      message: `A customer has placed an order on table #${data.table}`,
      branch_Id
    })
  }
  const listenToSocket = async (socket) => {
    socket.on('join-channel-branch-response', data => {
      if (data) {
        console.log('You are connected to the branch socket.', {data, socket})
      }
    });
    socket.on('message-to-branch-response', data => {
      if (data) {
        setIsLoading(false);
        setTimeout(() => {
          setInConfirm(true)
          console.log('Message successfully sent..', {data, socket})
        }, 100)
      }
    });
    socket.on('message-to-customer', data => {
      if (data) {
        smartRedirect()
      }
    })
  }

  const handleClick = async () => {
    setIsLoading(true)
    const customer_name = await localStorage.getItem("customer_name");
    const socket = io(process.env.NEXT_PUBLIC_API_URL || "");
    const urlencoded = new URLSearchParams();
    const branch_Id = await localStorage.getItem("branch_Id");
    const table_Id = await localStorage.getItem("table_Id");
    
    urlencoded.append("status", "draft");
    urlencoded.append("branch_Id", branch_Id || "");
    urlencoded.append("notes", notes);
    urlencoded.append("table", table_Id || "");

    socket.on('connect', async () => {
      cart.forEach((item) => {
        urlencoded.append("item", JSON.stringify({
          _id: item._id,
          qty: item.quantity,
          customer_name: customer_name,
          customer_socket: socket.id
        }));
      });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/pos/transaction`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: urlencoded,
        }
      );
      const data = await response.json();
      
      sendToSocket(socket, data);
      localStorage.setItem("transaction_Id", data.id);
    })
    
    localStorage.removeItem("orders");
    localStorage.removeItem("orderNotes");
  };
  const handleOnChange = (element: ChangeEvent<HTMLInputElement>) => {
    setNotes(element.currentTarget.value);
  };
  const handleAddMore = () => {
    Window.location.href = `/menu`;
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      /* @NOTICE: Spreading `cart` here is necessary since type of the state can not be reduced, 
            however the type of the value of the state can be, so this is a necessary hack. */
      const newTotal = [...cart].reduce((prev: number, cur: any) => {
        return prev + cur.quantity * cur.price;
      }, 0);
      setTotal(newTotal);
    }
  }, [cart]);

  return (
    <Subinnerpage title="Checkout">
      {
        inConfirm ? 
        <div className={`${stylesConfirm.confirm_container} ${layout.container}`}>
          <Image
            src="/images/green-circle.svg"
            alt="Thank You"
            width={120}
            height={120}
          />
          <h1 className={layout.h1}>Please wait...</h1>
          <h2>Our Staff will confirm your order in a moment.</h2>
          <br />
          <p>
            For now, you could quit the app and rescan to check your food&apos;s
            status.
          </p>
        </div>
        : (cart.length > 0) ? (
          <>
            <ul className={styles.list}>
              {cart.map((item: any, key) => (
                <li className={styles.item} key={key}>
                  <Image
                    className="image"
                    src={renderImage(item.photo ? item.photo : imagePlaceholder)}
                    alt={item.title}
                    width={107}
                    height={71}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      convertImage(700, 475)
                    )}`}
                  />
                  <div className={styles.item_meta}>
                    <div>
                      <h6>{item.title}</h6>
                      <small>{item.description}</small>

                      <div className={layout.container}>
                        <div className={`${layout.column} ${layout.f8}`}>
                          <QuantityField
                            fontSize={"12px"}
                            value={item.quantity}
                            changeEvent={(qty: number) => {
                              // console.log("the change Event is fired")
                              handleChangeQty(key, qty);
                            }}
                          />
                        </div>
                        <div className={`${layout.column}`}>
                          {formatCurrency(item.price)}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <br />
            <h4>Add notes for the chef.</h4>
            <small>
              example: &quot;I alergic to seafoods. Halal only please.&quot;
            </small>
            <TextField
              multiline
              rows={4}
              variant="outlined"
              placeholder="Add food notes here..."
              name="notes"
              fullWidth
              sx={{ "& .MuiOutlinedInput-root": inputStyles }}
              onChange={handleOnChange}
            />
            <br />
            <br />
            <div className={layout.container}>
              <div className={`${layout.column} ${layout.f6}`}>Total</div>
              <div className={`${layout.column}`}>{formatCurrency(total)}</div>
            </div>
            <br />
            <button onClick={handleAddMore} className="button-primary">
              Add More
            </button>
            <br />
            <br />
            <button onClick={handleClick} className="button-secondary">
              Checkout
            </button>
          </>
        ) : (
          <>
            <Skeleton height={150} />
            <br />
            <h4>
              <Skeleton />
            </h4>
            <small>
              <Skeleton />
            </small>
            <Skeleton height={100} />
            <br />
            <br />
            <div className={layout.container}>
              <Skeleton />
            </div>
            <br />
            <Skeleton height={50} />
            <br />
            <br />
            <Skeleton height={50} />
          </>
        )
      }
    </Subinnerpage>
  );
}
