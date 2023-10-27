import * as crypto from "crypto";

export const renderImage = (image) => {
  return image || "/images/ryori-brand.png";
};

export const formatCurrency = (amount) => {
  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  });

  return formatter.format(amount);
};

export const encrypt = (text) => {
  const SECRET_KEY = "your-secret-key";
  const ALGORITHM = "aes-256-cbc";
  const cipher = crypto.createCipher(ALGORITHM, SECRET_KEY);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};

export const decrypt = (encryptedText) => {
  const SECRET_KEY = "your-secret-key";
  const ALGORITHM = "aes-256-cbc";
  const decipher = crypto.createDecipher(ALGORITHM, SECRET_KEY);
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};

export const parseQueryStringToObject = (queryString) => {
  const resultObject = Object.fromEntries(new URLSearchParams(queryString));

  for (const key in resultObject) {
    if (!isNaN(resultObject[key])) {
      resultObject[key] = parseFloat(resultObject[key]);
    }
  }

  return resultObject;
};

export const convertImage = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#ccc" offset="20%" />
        <stop stop-color="#ddd" offset="50%" />
        <stop stop-color="#ccc" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#ccc" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

export const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const smartRedirect = async () => {
  const sid = localStorage.getItem("store_Id");
  const bid = localStorage.getItem("branch_Id");
  const tid = localStorage.getItem("table_Id");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pos/transaction/status/?sid=${sid}&bid=${bid}&tid=${tid}`
  );
  const data = await response.json();

  if (data) {
    const orders = localStorage.getItem("orders") || "";
    if (orders.length > 0) {
      setTimeout(() => {
        window.location.href = "/confirm";
      }, 500);
    } else if (data.status === "draft") {
      setTimeout(() => {
        window.location.href = "/confirm";
      }, 500);
    } else if (data.status === "new") {
      setTimeout(() => {
        window.location.href = "/orders";
      }, 500);
    } else if (data.status === "cooking") {
      setTimeout(() => {
        window.location.href = "/orders";
      }, 500);
    } else if (data.status === "ready") {
      setTimeout(() => {
        window.location.href = "/orders";
      }, 500);
    } else if (data.status === "served") {
      localStorage.setItem("transaction_Id", data["_id"]);
      setTimeout(() => {
        window.location.href = "/summary";
      }, 500);
    } else if (data.status === "awaiting_next_action") {
      setTimeout(() => {
        window.location.href = "/payment";
      }, 500);
    } else {
      localStorage.removeItem("orders");
      localStorage.removeItem("orderNotes");
      localStorage.removeItem("transaction_Id");
      setTimeout(() => {
        window.location.href = "/opening";
      }, 1000);
    }
  }
};
