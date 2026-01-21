"use client";

import Image from "next/image";
import Button from "../ui/button";
import { FiRefreshCw } from "react-icons/fi";

const OrderSubmitted = () => {
  const reloadOrderStatus = () => {
    window.location.reload();
  };

  return (
    // Menggunakan max-w-2xl (sekitar 672px) agar proporsinya bagus
    // Menambahkan shadow-md untuk estetika
    <div className="bg-white w-full max-w-2xl p-10 md:p-16 flex flex-col items-center shadow-md rounded-sm">
      <div className="relative w-28 h-28 mb-6 mt-4">
         <Image
        src="/images/icon-order-submitted.svg"
        width={117}
        height={117}
        alt="order submitted"
        className="mb-4"
      />
      </div>
      
      <h2 className="text-3xl font-bold mb-4 text-center">Order Submitted!!</h2>
      
      <p className="text-center text-gray-600 mb-10 leading-relaxed">
        Your Order is recorded in our system, we are still confirming the
        payment status, please wait and your order status will be updated in
        less than 12 hours.
      </p>
      
      <Button 
        variant="dark" 
        className="w-full py-4 flex items-center justify-center gap-3 text-lg" 
        onClick={reloadOrderStatus}
      >
        <FiRefreshCw className="animate-spin-hover" />
        Refresh Order Status
      </Button>
    </div>
  );
};

export default OrderSubmitted;