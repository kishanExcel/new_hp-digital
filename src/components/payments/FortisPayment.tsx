"use client";

// import { loadStripe } from "@stripe/stripe-js";
import FortisCheckout from "./FortisElement";

import { Card } from "@/components/ui/card";
if (process.env.NEXT_PUBLIC_FORTIS_PUBLIC_KEY === undefined) {
  throw new Error("Please provide a public key");
}

interface Payment {
  clientToken: string;
}

export default function Payment({ clientToken }: Payment) {
  return (
    <div>
      {" "}
      <Card className="w-full max-w-md">
        <FortisCheckout clientToken={clientToken} />
      </Card>
    </div>
  );
}
