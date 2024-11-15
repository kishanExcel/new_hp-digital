"use client";

import { useEffect, useState, useCallback } from "react";
import Script from "next/script";
import { LoaderIcon } from "lucide-react";

interface Token {
  clientToken: string;
}

export default function FortisCheckout({ clientToken }: Token) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const handleScriptLoad = useCallback(() => {
    setIsScriptLoaded(true);
    try {
      if (window.Commerce) {
        try {
          const elements = new window.Commerce.elements(clientToken);

          elements.create({
            container: "#payment",
            theme: "default",
            floatingLabels: true,
            showReceipt: true,
            appearance: {
              colorButtonSelectedBackground: "#363636",
              colorButtonSelectedText: "#ffffff",
              colorButtonActionBackground: "#00d1b2",
              colorButtonActionText: "#ffffff",
              colorButtonBackground: "#ffffff",
              colorButtonText: "#363636",
              colorFieldBackground: "#ffffff",
              colorFieldBorder: "#dbdbdb",
              colorText: "#4a4a4a",
              colorLink: "#485fc7",
              fontSize: "16px",
              marginSpacing: "0.5rem",
              borderRadius: "4px",
            },
            fields: {
              billing: [
                { name: "address", required: true, value: "123 Street" },
                { name: "country", required: true, value: "US" },
                { name: "state", required: true, value: "Florida" },
                { name: "city", required: false },
                { name: "postal_code", required: true },
              ],
              additional: [
                { name: "email_address", required: true },
                { name: "phone_number", required: false },
                { name: "description", required: false },
                {
                  name: "order_number",
                  required: true,
                  readOnly: true,
                  value: "12345",
                },
                { name: "clerk_number", required: false },
                {
                  name: "transaction_api_id",
                  hidden: true,
                  value: "4503434346",
                },
                {
                  name: "transaction_custom_1",
                  hidden: true,
                  value: "my custom value",
                },
                {
                  name: "transaction_custom_2",
                  hidden: true,
                  value: "my custom value",
                },
                {
                  name: "transaction_custom_3",
                  hidden: true,
                  value: "my custom value",
                },
              ],
              custom: [
                {
                  type: "text",
                  name: "my_text",
                  label: "Custom Text Input",
                  value: "",
                  required: false,
                  pattern: /\w{1,9}/,
                },
                {
                  type: "email",
                  name: "my_email",
                  label: "Notification email address ",
                  required: true,
                },
                {
                  type: "date",
                  name: "my_date",
                  label: "Chekcin date",
                  required: false,
                  format: "MM/DD/YYYY",
                },
                {
                  type: "date",
                  name: "my_date",
                  label: "Chekcout date",
                  required: false,
                  format: "MM/DD/YYYY",
                },
                {
                  type: "select",
                  name: "my_select",
                  label: "Custom Select Input",
                  required: false,
                  value: "1",
                  options: [
                    { value: "1", text: "Option 1" },
                    { value: "2", text: "Option 2" },
                  ],
                },
                {
                  type: "checkbox",
                  name: "my_checkbox",
                  label:
                    "I agreed all the terms and condition made by hubspark",
                  value: "on",
                  required: false,
                  checked: true,
                },
              ],
            },
          });
        } catch (error) {
          console.error("Error initializing Commerce.elements:", error);
        }
      } else {
        console.error("Commerce is not defined on the window object.");
      }
    } catch (error) {
      console.error("Error initializing Commerce.elements:", error);
    }
  }, [clientToken]);
  useEffect(() => {
    handleScriptLoad();
  }, [clientToken, handleScriptLoad]);

  if (!clientToken) {
    return (
      <div>
        <h2>Please wait....</h2>
        <p>Or refresh the page if it&apos;s taking too long.</p>
      </div>
    );
  }

  return (
    <div className="p-2">
      <div id="payment"></div>
      <Script
        src="https://js.sandbox.fortis.tech/commercejs-v1.0.0.min.js"
        onLoad={handleScriptLoad}
      />
    </div>
  );
}
