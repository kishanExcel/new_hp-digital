"use client";

import Image from "next/image";
import fortis from "@/assets/images/hubspark/fortis.svg";
import { useRouter } from "next/navigation";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import GooglePayButtonComponent from "./WalletPayment";

export default function PaymentHeader() {
  const amount = 48.0;
  const [selectedCompany, setSelectedCompany] = useState("fortis");
  //   const [clientToken, setClientToken] = useState(null);
  const router = useRouter();

  return (
    <div>
      {" "}
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Choose a payment method</CardTitle>
          <CardDescription>
            Enter your payment details to complete your order.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 p-2 w-full justify-center">
          <div className="flex items-center justify-center">
            <GooglePayButtonComponent googleJWT={"token"} />
          </div>
          <p className="w-full text-center text-sm font-semibold">or</p>
          <div className="flex items-center justify-center">
            <RadioGroup
              value={selectedCompany}
              onValueChange={(value) => setSelectedCompany(value)}>
              <div className="flex items-center gap-4">
                <RadioGroupItem
                  id="fortis"
                  onClick={() => router.push("/payments")}
                  value="fortis"
                />
                <Label htmlFor="fortis" className="font-medium text-lg">
                  Pay with
                </Label>
                <div className="ml-auto">
                  <Image
                    src={fortis}
                    alt="Stripe Logo"
                    width={80}
                    height={40}
                  />
                </div>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
