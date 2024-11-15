import TabNavigation from "../../../components/payments/components/tabNavigation";
import React, { useEffect, useState } from "react";
import Layout from "../layout";
import ArrowUp from "../../../assets/images/P-arrow-up.svg";
import Image from "next/image";
import TransactionCard from "../../../components/payments/components/transactionCard";
import SearchBox from "../../../components/payments/components/searchBox";
import QuickInvoiceListDesktop from "../../paymentDesktop/quickInvoice/invoiceList"
import Link from "next/link";

import {
  faEye,
  faPenToSquare,
  faRemove,
  faReply
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useToast } from '../../../components/payments/components/toasterProvider';
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";


interface ListInterface {
  title: string;
  invoice_number: string;
  invAmount: number;
  id: string;
}

function index() {
  const [listData, setListData] = useState<ListInterface[]>([]);
  const [filteredData, setFilteredData] = useState<ListInterface[]>([]);
  const isMobile = useClientMediaQuery('(max-width: 769px)')

  const [loader, setLoader] = useState(false);
  const { showToast } = useToast()

  const tabData = [
    {
      tabName: "Insight",
      tabUrl: "/paymentDesktop/insights",
    },
    {
      tabName: "Transactions",
      tabUrl: "/paymentDesktop/transactions",
    },
  ];

  const getInvoiceList = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        "/api/fortis/getInvoiceList?page[number]=1&page[size]=50",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        // Handle HTTP errors here
        console.error(`HTTP error! status: ${response.status}`);
        return;
      }

      const data = await response.json();
      console.log("data",data);

      data.list.map((inv: any) => {
        let amount = 0;
        inv.item_list.map((item: any) => (amount += item.amount));
        inv.invAmount = amount;
      });

      setListData(data.list);
      setFilteredData(data.list);      
    } catch (error) {
      console.error("Error submitting request:", error);
      showToast("Error submitting request:", "error");
      // Handle other types of errors (e.g., network errors)
    }
    setLoader(false);
  };

  useEffect(() => {
    getInvoiceList();
  }, []);

  const deleteInvoiceRecord = async (deleteId: any) => {
    try {
      const url = `/api/fortis/deleteInvoiceRecord?id=${deleteId}`;
      const response = await fetch(url, {
        method: "DELETE",
      });      
      if (!response.ok) {
        // Handle HTTP errors here
        console.error(`HTTP error! status: ${response.status}`);
        showToast(`HTTP error! status: ${response.status}`, "error");
        return;
      }

      const data = await response.json();
      const responseData = data.data;
      
      showToast("Request delete successfully", "success");
      getInvoiceList();
    } catch (error) {
      console.error("Error submitting request:", error);
      showToast("Error submitting request:", "error");
    }
  };
  const resendInvoice = async (invoiceId: any) => {
    try {
      const url = `/api/fortis/resendInvoice?id=${invoiceId}`;
      const response = await fetch(url, {
        method: "POST",
      });      
      if (!response.ok) {
        // Handle HTTP errors here
        console.error(`HTTP error! status: ${response.status}`);
        showToast(`HTTP error! status: ${response.status}`, "error");
        return;
      }

      const data = await response.json();
      const responseData = data.data;
      
      showToast("Resend successfully", "error");
      getInvoiceList();
    } catch (error) {
      console.error("Error submitting request:", error);
      showToast("Error submitting request:", "error");
    }
  };


  const handleSearch = (searchQuery: string) => {
    if (searchQuery === "") {
      setFilteredData(listData);
    } else {
      const filtered = listData.filter(
        (invoice) =>
          invoice.title
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          (invoice.invoice_number)
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          (String(invoice.invAmount)).includes(searchQuery)
      );
      setFilteredData(filtered);
    }
  };

  if (isMobile) {
    return (
      <Layout
        hHeading="Payments"
        Childrens={
          <div className=" pt-[18px] flex-1 flex flex-col h-full bg-cultured ">
            <div className="px-[15px]">
              <TabNavigation tabsData={tabData} />
            </div>

            <div className="flex justify-end px-[15px] mt-[15px]">
              <button className="px-[9px] py-[8px] rounded-lg bg-palatinatePurple text-cultured text-[10px] font-bold mr-1">
                Add Contact
              </button>
              <button className="px-[9px] py-[8px] rounded-lg bg-palatinatePurple text-cultured text-[10px] font-bold mr-1">
                Add Account Vault
              </button>
              <Link
                href={{
                  pathname: "/paymentDesktop/quickInvoice",
                  query: {
                    tabName: "Quick Invoice",
                  },
                }}
              >
                <button className="px-[9px] py-[8px] rounded-lg bg-palatinatePurple text-cultured text-[10px] font-bold">
                  Add Quick Invoice
                </button>
              </Link>
            </div>

            <div>
              <div className="px-[15px] mt-[15px]">
                <SearchBox onSearch={handleSearch} Component="Invoice" />
              </div>
            </div>

            <div className="section flex-1 pt-[18px] overflow-y-auto">
              {loader ? (
                <div>Loading...</div>
              ) : (
                filteredData.map((ls, index) => (
                  // <TransactionCard query={{mode:'view', id:ls.id}} pathname="/Payment/quickInvoice" name={ls.title} invDate={ls.invoice_number} amount={ls.invAmount} key={index} status="Paid" />
                  <div className="flex pb-[17px] border-b-[.5px] border-chinesWhite px-[15px] pt-[4px] ">
                    <div className="flex-1">
                      <h5 className="text-[19px] font-bold text-darkSilverColor">
                        {ls.title}
                      </h5>
                      <h5 className="text-[19px]  text-darkSilverColor">
                        {ls.invoice_number}
                      </h5>
                    </div>
                    <div className="flex items-end flex-col">
                      <h5 className="text-[15px] font-bold text-palatinatePurple">
                        ${ls.invAmount}
                      </h5>
                      <h5 className="text-[14px] font-bold text-limeGreen ">
                        {"Paid"}
                      </h5>

                      <div className="flex items-center justify-around">
                        <div className=" text-[12px] font-bold  mr-1 flex text-palatinatePurple">
                          <Link
                            href={{
                              pathname: "/paymentDesktop/quickInvoice",
                              query: { mode: "view", id: ls.id },
                            }}
                          >
                            <FontAwesomeIcon icon={faEye} />
                          </Link>
                        </div>
                        <Link
                          href={{
                            pathname: "/paymentDesktop/quickInvoice",
                            query: { mode: "update", id: ls.id },
                          }}
                        >
                          <div className="text-[12px] font-bold mr-1 inline-block text-palatinatePurple">
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </div>
                        </Link>
                        <button
                          onClick={() => {
                            deleteInvoiceRecord(ls.id);
                          }}
                        >
                          <div className="text-[12px] font-bold mr-1 inline-block text-palatinatePurple">
                            <FontAwesomeIcon icon={faRemove} />
                          </div>
                        </button>
                        <button
                          onClick={() => {
                            resendInvoice(ls.id);
                          }}
                        >
                          <div className="text-[12px] font-bold mr-1 inline-block text-palatinatePurple">
                            <FontAwesomeIcon icon={faReply} />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        }
      />
    );
  } else return <QuickInvoiceListDesktop />


}

export default index;
