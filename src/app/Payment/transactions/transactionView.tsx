import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "../layout";
import Image from "next/image";
import Verified from "../../../assets/images/P-verified.svg";
import RightChevron from "../../../assets/images/right-chevron.svg";
import DownArrow from "../../../assets/images/P-arrow-down.svg";
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";
import TransactionViewDesktop from "../../paymentDesktop/transaction/transactionView";

const TransactionView = () => {
  const router = useRouter();
  const { id } = router.query;
  const [transaction, setTransaction] = useState<any>(null);
  const [showActions, setShowActions] = useState(false);
  const isMobile = useClientMediaQuery("(max-width: 769px)");

  const fetchTransactionDetails = async (transactionId: string) => {
    try {
      const response = await fetch(
        `/api/fortis/getTransaction?id=${transactionId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        return;
      }

      const data = await response.json();

      setTransaction(data.data);
    } catch (error) {
      console.error("Error fetching transaction details:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchTransactionDetails(id as string);
    }
  }, [id]);

  if (isMobile) {
    return (
      <Layout
        hHeading={`#${transaction?.invoice_number || "Invoice ID Number"}`}
        Childrens={
          <div>
            <div className="h-[55px] w-full flex justify-between px-[30px] items-center bg-white rounded-bl-3xl rounded-br-3xl">
              <div className="flex">
                <Image src={Verified} alt="" />
                <div className="ml-[16px]">
                  <h5 className="text-[16px] font-bold text-darkSilverColor">
                    {transaction?.status_code === 101 ? "Paid" : "Pending"}
                  </h5>
                  <h5 className="text-[12px] font-normal text-darkSilverColor">
                    {transaction
                      ? new Date(
                          transaction.created_ts * 1000
                        ).toLocaleDateString()
                      : ""}
                  </h5>
                </div>
              </div>
              <h5 className="text-[12px] font-normal text-darkSilverColor">
                Posted
              </h5>
            </div>
            <div className="relative px-[16px] flex justify-end mt-[21px]">
              <button
                onClick={() => setShowActions(!showActions)}
                className="inline bg-palatinatePurple text-[11px] rounded-lg text-white py-[7px] px-[11px]">
                Actions{" "}
                <Image className="inline ml-[5px]" src={DownArrow} alt="" />
              </button>
              {showActions && (
                <div className="absolute px-1 py-[7px] text-right -bottom-16 right-[16px] h-[60px] w-[117px] bg-white border border-palatinatePurple rounded-lg">
                  <h5 className="text-[10px] ripple text-palatinatePurple">
                    Cancel Order & Refund
                  </h5>
                  <h5 className="text-[10px] ripple text-palatinatePurple">
                    Send Receipt
                  </h5>
                  <h5 className="text-[10px] ripple text-palatinatePurple">
                    View/Print Receipt
                  </h5>
                </div>
              )}
            </div>
            <div className="px-[16px]">
              <div>
                <h5 className="text-palatinatePurple font-bold text-[16px]">
                  Summary
                </h5>
              </div>
              <div className="card py-[12px] mt-[11px] bg-white rounded-lg">
                <div className="flex justify-between py-[12px] px-[13px] border-b-[.5px] border-chinesWhite">
                  <h5 className="font-semibold text-[#6D6D6D]">
                    Monthly Reccuring Services
                  </h5>
                  <h5>${transaction?.transaction_amount / 100}</h5>
                </div>
                <div className="mt-[12px]">
                  <div className="flex justify-between py-[12px] px-[13px] border-b-[.5] border-chinesWhite">
                    <h5 className="font-semibold text-[#6D6D6D]">Subtotal</h5>
                    <h5>${transaction?.transaction_amount / 100}</h5>
                  </div>
                  <div className="flex justify-between py-[12px] px-[13px] border-b-[.5] border-chinesWhite">
                    <h5 className="font-semibold text-[#6D6D6D]">Total</h5>
                    <h5>${transaction?.transaction_amount / 100}</h5>
                  </div>
                  <div className="flex justify-between py-[12px] px-[13px] border-b-[.5] border-chinesWhite">
                    <h5 className="font-semibold text-[#6D6D6D]">
                      Amount Paid
                    </h5>
                    <h5 className="text-limeGreen font-semibold">
                      ${transaction?.transaction_amount / 100}
                    </h5>
                  </div>
                </div>
              </div>

              <div className="mt-[19px]">
                <h5 className="text-palatinatePurple font-bold text-[16px]">
                  Customer
                </h5>
              </div>

              <div className="card bg-white py-[10px] px-[11px] mt-[11px] rounded-lg">
                <h5 className="text-[14px] font-bold text-darkSilverColor">
                  {transaction?.account_holder_name}
                </h5>
                <h5 className="text-[14px] text-darkSilverColor">
                  {transaction
                    ? new Date(
                        transaction.created_ts * 1000
                      ).toLocaleDateString()
                    : ""}
                </h5>
              </div>

              <div className="mt-[19px]">
                <h5 className="text-palatinatePurple font-bold text-[16px]">
                  History
                </h5>
              </div>

              <div className="card bg-white py-[10px] px-[11px] mt-[11px] rounded-lg flex mb-[50px]">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h5 className="text-[14px] font-bold text-darkSilverColor">
                      #{transaction?.invoice_number}
                    </h5>
                    <h5 className="text-[14px] text-darkSilverColor">
                      ${transaction?.transaction_amount / 100}
                    </h5>
                  </div>

                  <div className="flex justify-between">
                    <h5 className="text-[14px] text-darkSilverColor">
                      {transaction
                        ? new Date(
                            transaction.created_ts * 1000
                          ).toLocaleDateString()
                        : ""}
                    </h5>
                    <h5 className="text-[14px] text-darkSilverColor">Posted</h5>
                  </div>
                </div>
                <button className="w-[10px] ms-2 flex justify-end items-center">
                  <Image src={RightChevron} alt="" />
                </button>
              </div>
            </div>
          </div>
        }
      />
    );
  } else return <TransactionViewDesktop />;
};

export default TransactionView;
