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
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);