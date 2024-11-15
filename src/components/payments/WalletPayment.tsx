"use client";

import GooglePayButton from "@google-pay/button-react";

interface GooglePayButtonType {
  googleJWT: string;
}

const GooglePayButtonComponent = ({ googleJWT }: GooglePayButtonType) => {
  // const paymentRequest = {
  //   apiVersion: 2,
  //   apiVersionMinor: 0,
  //   allowedPaymentMethods: [
  //     {
  //       type: "CARD" as const, // Ensure this is typed correctly
  //       parameters: {
  //         allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
  //         allowedCardNetworks: ["MASTERCARD", "VISA"],
  //       },
  //       tokenizationSpecification: {
  //         type: "PAYMENT_GATEWAY" as const, // Ensure this is typed correctly
  //         parameters: {
  //           gateway: "example",
  //           gatewayMerchantId: "exampleGatewayMerchantId",
  //         },
  //       },
  //     },
  //   ],
  //   merchantInfo: {
  //     merchantId: "12345678901234567890",
  //     merchantName: "Example Merchant",
  //   },
  //   transactionInfo: {
  //     totalPriceStatus: "FINAL",
  //     totalPrice: "123.45",
  //     currencyCode: "USD",
  //   },
  // };

  // const onLoadPaymentData = (paymentData: any) => {
  //   const paymentDataWithJWT = {
  //     ...paymentData,
  //     googleJWT,
  //   };
  //   fetch("/api/fortis/processPayment", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(paymentDataWithJWT),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Payment processed:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  return (
    <GooglePayButton
      environment="TEST"
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["MASTERCARD", "VISA"],
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example",
                gatewayMerchantId: "exampleGatewayMerchantId",
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: "12345678901234567890",
          merchantName: "Demo Merchant",
        },
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPriceLabel: "Total",
          totalPrice: "100.00",
          currencyCode: "USD",
          countryCode: "US",
        },
      }}
      onLoadPaymentData={(paymentRequest) => {
        console.log("load payment data", paymentRequest);
      }}
      buttonType="buy"
    />
  );
};

export default GooglePayButtonComponent;
