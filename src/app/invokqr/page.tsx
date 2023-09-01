"use client"
import QRCodeGenerator from "@/components/QRCodeGenerator";
import { useEffect, useState } from "react";

const Invokqr = () => {
    const [redirectUrl, setRedirectUrl] = useState('')
    useEffect(() => {
        if(typeof window !== "undefined") {

            const urlParams = new URLSearchParams(window.location.search);
            setRedirectUrl(urlParams.get("text") || ''); // Replace with your desired URL
        }
    }, [])

  return (
    <div>   
      <QRCodeGenerator url={redirectUrl} size="300" />
    </div>
  );
};

export default Invokqr;
