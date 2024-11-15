import { faEye, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

interface transactionCardProps {
  id: string;
  name: string;
  status: string;
  invDate: string;
  amount: string | number;
  query: any;
  pathname: string;
}

const TransactionCard: React.FC<transactionCardProps> = ({
  id,
  amount,
  status,
  invDate,
  name,
  pathname,
  query,
}) => {
  return (
    <div className="flex pb-[17px] border-b-[.5px] border-chinesWhite px-[15px] pt-[4px] ">
      <div className="flex-1">
        <h5 className="text-[19px] font-bold text-darkSilverColor">{name}</h5>
        <h5 className="text-[19px] text-darkSilverColor">{invDate}</h5>
      </div>
      <div className="flex items-end flex-col">
        <h5 className="text-[15px] font-bold text-palatinatePurple">
          {amount}
        </h5>
        <h5
          className={`text-[14px] font-bold ${
            status == "Paid" ? "text-limeGreen" : "text-[orange]"
          } `}
        >
          {status}
        </h5>
        <Link
          href={{
            pathname: "/Payment/transactions/transactionView",
            query: {
              id,
            },
          }}
        >
          <div className="text-[12px] font-bold inline-block mr-1 text-palatinatePurple">
            <FontAwesomeIcon icon={faEye} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TransactionCard;
