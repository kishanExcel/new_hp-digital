import TabNavigation from "../../../components/payments/components/tabNavigation";
import React, { useEffect, useState } from 'react';
import Layout from "../layout"
import ArrowUp from "../../../assets/images/P-arrow-up.svg"
import Image from "next/image";
import TransactionCard from "../../../components/payments/components/transactionCard";
import SearchBox from "../../../components/payments/components/searchBOx"
import Link from "next/link";
import { faEye, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useToast } from '../../../components/payments/components/toasterProvider';
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";
import TerminalListDesktop from "../../paymentDesktop/virtualTerminal/terminalList"


interface ListInterface {
    title: string;
    default_checkout: any
    id: any

}

function index() {
    const [listData, setListData] = useState<ListInterface[]>([])
    const [filteredData, setFilteredData] = useState<ListInterface[]>([]);
    const { showToast } = useToast();
    const isMobile = useClientMediaQuery('(max-width: 769px)')

    const [loader, setLoader] = useState(false)
    const tabData = [
        {
            tabName: "Insight",
            tabUrl: "/Payment/insights",
        },
        {
            tabName: "Transactions",
            tabUrl: "/Payment/transactions",
        }
    ]

    useEffect(() => {
        getTerminalList()
    }, [])

    const getTerminalList = async () => {
        setLoader(true)
        try {
            const response = await fetch('/api/fortis/getTerminalList?page[number]=1&page[size]=50', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',

                }
            });

            if (!response.ok) {
                // Handle HTTP errors here
                console.error(`HTTP error! status: ${response.status}`);
                showToast(`HTTP error! status: ${response.status}`, 'error')

                return;
            }

            const data = await response.json();



            setListData(data.list)
            setFilteredData(data.list);

        } catch (error) {
            console.error('Error submitting request:', error);
            showToast(`Error submitting request: ${error}`, 'error')

            // Handle other types of errors (e.g., network errors)
        }
        setLoader(false)
    }

    const handleSearch = (searchQuery: string) => {
        if (searchQuery === "") {
            setFilteredData(listData);
        } else {
            const filtered = listData.filter(
                (terminal) =>
                    terminal.title
                        ?.toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    terminal.default_checkout
                        ?.toLowerCase()
                        .includes(searchQuery.toLowerCase())
            );
            setFilteredData(filtered);
        }
    };

    if (isMobile) {

        return (
            <Layout hHeading="Payments" Childrens={
                <div className=" pt-[18px] flex-1 flex flex-col h-full bg-cultured ">
                    <div className="px-[15px]">

                        <TabNavigation tabsData={tabData} />
                    </div>

                    <div className="flex justify-end px-[15px] mt-[15px]">
                        <button className="px-[9px] py-[8px] rounded-lg bg-palatinatePurple text-cultured text-[10px] font-bold mr-1">Add Contact</button>
                        <button className="px-[9px] py-[8px] rounded-lg bg-palatinatePurple text-cultured text-[10px] font-bold mr-1">Add Account Vault</button>
                        <Link href={{
                            pathname: "/Payment/quickInvoice",
                            query: {
                                tabName: "Quick Invoice",
                            },
                        }}>
                            <button className="px-[9px] py-[8px] rounded-lg bg-palatinatePurple text-cultured text-[10px] font-bold">Add Quick Invoice</button>
                        </Link>
                    </div>

                    <div>
                        <div className="px-[15px] mt-[15px]">
                            <SearchBox onSearch={handleSearch} Component="Terminal" />
                        </div>
                    </div>

                    <div className="section flex-1 pt-[18px] overflow-y-auto">
                        {
                            !loader ? filteredData.map((data) => (
                                <div className='flex pb-[17px] border-b-[.5px] border-chinesWhite px-[15px] pt-[4px] '>
                                    <div className='flex-1'>
                                        <h5 className='text-[19px] font-bold text-darkSilverColor'>{data.title}</h5>
                                        <h5 className='text-[19px]  text-darkSilverColor'>{data.default_checkout}</h5>
                                    </div>
                                    <div className='flex items-end '>
                                        <h5 className='text-[15px] font-bold text-palatinatePurple'></h5>
                                        {/* <h5 className='text-[14px] font-bold text-limeGreen '>{status}</h5> */}


                                        <div className='text-[12px] font-bold inline-block mr-1 text-palatinatePurple'><Link href={{
                                            pathname: "/Payment/virtualTerminal/terminal",
                                            query: {
                                                mode: 'view',
                                                id: data.id
                                            }
                                        }}><FontAwesomeIcon icon={faEye} /></Link></div>

                                        <div className='text-[12px] font-bold inline-block text-palatinatePurple'>
                                            <Link href={{
                                                pathname: "/Payment/virtualTerminal/terminal",
                                                query: {
                                                    mode: 'update',
                                                    id: data.id
                                                }
                                            }}>
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </Link></div>
                                    </div>
                                </div>
                            )) : <div className="text-center">Loading...</div>
                        }
                        {/* <TransactionCard pathname="" query={{}} name="Alexis Mcconnell" invDate="04/02/17 Invoice ID Number" amount="$2,450.00" status="Paid" /> */}
                    </div>
                </div>
            } />
        )
    } else return <TerminalListDesktop />


}

export default index;