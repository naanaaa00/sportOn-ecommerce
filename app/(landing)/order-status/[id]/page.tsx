"use client";

import { useState } from "react";
import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submitted";

const OrderStatus = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    // Gunakan flex-col, justify-center, dan items-center untuk memusatkan konten
    <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        <h1 className="text-5xl font-bold text-center mb-12">Order Status</h1>
        
        {/* Kontainer untuk komponen status agar lebarnya konsisten */}
        <div className="flex justify-center">
          {isConfirmed ? <OrderConfirmed /> : <OrderSubmitted />}
        </div>
      </div>
    </main>
  );
};

export default OrderStatus;