import React, { useEffect, useState } from "react";
import Layout from "../layout";
import TabNavigation from "../../../components/payments/components/tabNavigation";
import CustomInput from "../../../components/payments/components/customInput";
import CustomSelect from "../../../components/payments/components/customSelect";
import ToggleSwitch from "../../../components/payments/components/toggleSwitch";
import CreditCard from "../../../assets/images/P-credit-card.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useToast } from "../../../components/payments/components/toasterProvider";
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";

import TerminalDesktop from "../../paymentDesktop/virtualTerminal/terminal";
import { useSession } from "next-auth/react";

const Index = () => {
  const [showDiscountCard, setShowDiscountCord] = useState(false);
  const [initialLoader, setInitialLoader] = useState(false);
  const [savingLoader, setSavingLoader] = useState(false);
  const [throwError, setError] = useState(false);
  const [locationOptions, setLocationOptions] = useState<any>([]);
  const [locationObject, setLocationObject] = useState<any>({});
  const { showToast } = useToast();
  const { data: session, status } = useSession();
  const isMobile = useClientMediaQuery("(max-width: 769px)");
  useEffect(() => {
    if (session) {
      console.log("Session object:", session);
      setFormData({
        ...formData,
        token: session?.session[0], // Make sure this path is correct
      });
    }
  }, [session]);

  const tabData = [
    {
      tabName: "Quick Invoice",
      tabUrl: "/Payment/quickInvoice",
    },
    {
      tabName: "Terminal Device",
      tabUrl: "/Payment/virtualTerminal/terminal",
    },
    {
      tabName: `Keyed Credit Card`,
      tabUrl: "/Payment/keyedCreditCard",
    },
  ];
  const [accessType, setAccessType] = useState<any>(null);
  const router = useRouter();
  const [formData, setFormData] = useState({
    location_id: "",
    terminal_application_id: "11e5b57c3a2969ce952ff621",
    terminal_manufacturer_code: "100",
    title: "My terminal",
    serial_number: "",
    debit: false,
    emv: false,
    cashback_enable: false,
    print_enable: false,
    sig_capture_enable: false,
    terminal_cvm_id: "11ea0c440de708f88b56f1b3",
    local_ip_address: "192.168.0.10",
    port: 10009,
    terminal_timeouts: {
      card_entry_timeout: 47,
      device_terms_prompt_timeout: 30,
      overall_timeout: 125,
      pin_entry_timeout: 40,
      signature_input_timeout: 35,
      signature_submit_timeout: 38,
      status_display_time: 12,
      tip_cashback_timeout: 25,
      transaction_timeout: 17,
    },
    location_api_id: "location_api_id52",
    terminal_api_id: "terminal_api_id84",
    header_line_1: "line 1 sample",
    header_line_2: "line 2 sample",
    header_line_3: "line 3 sample",
    header_line_4: "line 4 sample",
    header_line_5: "line 5 sample",
    trailer_line_1: "trailer 1 sample",
    trailer_line_2: "trailer 2 sample",
    trailer_line_3: "trailer 3 sample",
    trailer_line_4: "trailer 4 sample",
    trailer_line_5: "trailer 5 sample",
    default_checkin: "2025-12-01",
    default_checkout: "2025-12-12",
    default_room_rate: 56,
    default_room_number: "303",
    is_provisioned: false,
    tip_enable: false,
    validated_decryption: false,
    communication_type: "http",
    active: true,
    token: session?.session[0],
  });

  useEffect(() => {
    const { query } = router;
    setInitialLoader(true);
    setAccessType(query.mode);

    if (query.mode === "view" || query.mode === "update") {
      getTerminalRecord();
    } else setInitialLoader(false);

    getLocationOptions();
  }, []);

  const getLocationOptions = async () => {
    const response = await fetch(`/api/fortis/getLocations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    let locList: any = [];
    data.list.map((loc: any) => {
      locList.push(
        `${loc.address.street1}-${loc.address.city}-${loc.address.state}-${loc.address.country}`
      );
      locationObject[
        `${loc.address.street1}-${loc.address.city}-${loc.address.state}-${loc.address.country}`
      ] = loc.id;
    });

    setLocationOptions(locList);
  };

  const getTerminalRecord = async () => {
    const { query } = router;
    try {
      const id = query.id;
      const url = `/api/fortis/getTerminalRecord?id=${id}`;
      const response = await fetch(url);
      if (!response.ok) {
        // Handle HTTP errors here
        showToast(`HTTP error! status: ${response.status}`, "error");
        return;
      }

      const data = await response.json();
      const responseData = data.data;
      setFormData({
        location_id: locationObject[formData.location_id],
        terminal_application_id: responseData.terminal_application_id,
        terminal_manufacturer_code: responseData.terminal_manufacturer_code,
        title: responseData.title,
        serial_number: responseData.serial_number,
        debit: responseData.debit,
        emv: responseData.emv,
        cashback_enable: responseData.cashback_enable,
        print_enable: responseData.print_enable,
        sig_capture_enable: responseData.sig_capture_enable,
        terminal_cvm_id: responseData.terminal_cvm_id,
        local_ip_address: responseData.local_ip_address,
        port: responseData.port,
        terminal_timeouts: {
          card_entry_timeout: responseData.card_entry_timeout,
          device_terms_prompt_timeout: responseData.device_terms_prompt_timeout,
          overall_timeout: responseData.overall_timeout,
          pin_entry_timeout: responseData.pin_entry_timeout,
          signature_input_timeout: responseData.signature_input_timeout,
          signature_submit_timeout: responseData.signature_submit_timeout,
          status_display_time: responseData.status_display_time,
          tip_cashback_timeout: responseData.tip_cashback_timeout,
          transaction_timeout: responseData.transaction_timeout,
        },
        location_api_id: responseData.location_api_id,
        terminal_api_id: responseData.terminal_api_id,
        header_line_1: responseData.header_line_1,
        header_line_2: responseData.header_line_2,
        header_line_3: responseData.header_line_3,
        header_line_4: responseData.header_line_4,
        header_line_5: responseData.header_line_5,
        trailer_line_1: responseData.trailer_line_1,
        trailer_line_2: responseData.trailer_line_2,
        trailer_line_3: responseData.trailer_line_3,
        trailer_line_4: responseData.trailer_line_4,
        trailer_line_5: responseData.trailer_line_5,
        default_checkin: responseData.default_checkin,
        default_checkout: responseData.default_checkout,
        default_room_rate: responseData.default_room_rate,
        default_room_number: responseData.default_room_number,
        is_provisioned: responseData.is_provisioned,
        tip_enable: responseData.tip_enable,
        validated_decryption: responseData.validated_decryption,
        communication_type: responseData.communication_type,
        active: responseData.active,
        token: session?.session[0],
      });
    } catch (error) {
      console.error("Error submitting request:", error);
      showToast(`Error submitting request: ${error}`, "error");
    }
    setInitialLoader(false);
  };

  const createTerminal = async () => {
    setSavingLoader(true);
    setError(false);
    const bodyData = {
      ...formData,
      serial_number: generateRandomDigitString(),
    };
    console.log("bodyData", bodyData);
    if (!bodyData.title) {
      setError(true);
      setSavingLoader(false);

      return showToast("title Field Required", "warning");
    }
    try {
      let response = null;
      const { query } = router;

      if (accessType === "update") {
        const id = query.id;
        response = await fetch(`/api/fortis/updateTerminal?id=${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(bodyData),
        });
      } else {
        response = await fetch("/api/fortis/createTerminal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(bodyData),
        });
      }

      // setSavingoader(false)

      if (!response.ok) {
        // Handle HTTP errors here
        setSavingLoader(false);
        console.error(`HTTP error! status: ${response.status}`);
        showToast(`HTTP error! status: ${response.status}`, "error");
        return;
      }

      const data = await response.json();
      if (accessType === "update") {
        setAccessType("view");
      }

      router.push("Payment/virtualTerminal/terminalList");

      setAccessType("view");

      showToast("Request submitted successfully", "success");
    } catch (error) {
      console.error("Error submitting request:", error);
      showToast(`Error submitting request: error`, "error");
      // Handle other types of errors (e.g., network errors)
    }
    setSavingLoader(false);
  };

  const handleInputs = (e: any, model: any) => {
    setFormData({
      ...formData,
      [model]: e.target.value,
    });
  };

  function handleCheckBox(model: string, e: any) {
    formData[model as keyof boolean] = e.target.checked;
    setFormData({
      ...formData,
    });
  }

  const handleSelect = (e: any, model: string) => {
    setFormData({
      ...formData,
      [model]: e.target.value,
    });
  };
  function generateRandomDigitString(length: number = 8): string {
    let randomDigits = "";
    for (let i = 0; i < length; i++) {
      const randomDigit = Math.floor(Math.random() * 10); // generates a digit between 0 and 9
      randomDigits += randomDigit.toString();
    }
    return randomDigits;
  }

  if (isMobile) {
    return (
      <Layout
        hHeading="Payments"
        Childrens={
          <div className="px-[15px] pt-[18px] flex-1 flex flex-col h-full bg-cultured ">
            <TabNavigation tabsData={tabData} />
            <div className="h-full overflow-y-auto">
              <div className="bg-chinesWhite rounded-lg mb-4">
                <div className="w-full  bg-palatinatePurple rounded-lg mt-[16px] text-white">
                  <h5 className="text-[16px] font-bold  pl-[15px] py-[10px]">
                    Terminal
                  </h5>
                </div>
                <div className=" px-[16px] py-[27px]">
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="text-[12px] font-bold text-darkSilverColor">
                      Title
                    </label>
                    <div
                      className={`w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4] ${throwError && !formData.title && "border border-red"}`}>
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.title}
                        model="title"
                        onChange={handleInputs}
                        className={`w-full text-[12px] bg-[#F4F4F4] h-full outline-none `}
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="location"
                      className="text-[12px] font-bold text-darkSilverColor">
                      Location
                    </label>
                    <div className="w-full h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                      <select
                        className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="location"
                        name=""
                        disabled={accessType === "view"}
                        onChange={(e) => handleSelect(e, "location_id")}>
                        {locationOptions.map((loc: string) => (
                          <option value={loc}>{loc}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="text-[12px] font-bold text-darkSilverColor">
                      Header Line 1
                    </label>
                    <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.header_line_1}
                        model="header_line_1"
                        onChange={handleInputs}
                        className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="text-[12px] font-bold text-darkSilverColor">
                      Header Line 2
                    </label>
                    <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.header_line_2}
                        model="header_line_2"
                        onChange={handleInputs}
                        className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="text-[12px] font-bold text-darkSilverColor">
                      Header Line 3
                    </label>
                    <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.header_line_3}
                        model="header_line_3"
                        onChange={handleInputs}
                        className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="text-[12px] font-bold text-darkSilverColor">
                      Header Line 4
                    </label>
                    <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.header_line_4}
                        model="header_line_4"
                        onChange={handleInputs}
                        className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="text-[12px] font-bold text-darkSilverColor">
                      Header Line 5
                    </label>
                    <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.header_line_5}
                        model="header_line_5"
                        onChange={handleInputs}
                        className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="text-[12px] font-bold text-darkSilverColor">
                      Trailer Line 1
                    </label>
                    <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.trailer_line_1}
                        model="trailer_line_1"
                        onChange={handleInputs}
                        className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="text-[12px] font-bold text-darkSilverColor">
                      Trailer Line 2
                    </label>
                    <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.trailer_line_2}
                        model="trailer_line_2"
                        onChange={handleInputs}
                        className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="text-[12px] font-bold text-darkSilverColor">
                      Trailer Line 3
                    </label>
                    <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.trailer_line_3}
                        model="trailer_line_3"
                        onChange={handleInputs}
                        className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="text-[12px] font-bold text-darkSilverColor">
                      Trailer Line 4
                    </label>
                    <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.trailer_line_4}
                        model="trailer_line_4"
                        onChange={handleInputs}
                        className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>
                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="text-[12px] font-bold text-darkSilverColor">
                      Trailer Line 5
                    </label>
                    <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.trailer_line_5}
                        model="trailer_line_5"
                        onChange={handleInputs}
                        className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="text-[12px] font-bold text-darkSilverColor">
                      Default Checkin
                    </label>
                    <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.default_checkin}
                        model="default_checkin"
                        onChange={handleInputs}
                        className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="date"
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="text-[12px] font-bold text-darkSilverColor">
                      Default Checkout
                    </label>
                    <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.default_checkout}
                        model="default_checkout"
                        onChange={handleInputs}
                        className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="date"
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="text-[12px] font-bold text-darkSilverColor">
                      Default Room Rate
                    </label>
                    <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.default_room_rate}
                        model="default_room_rate"
                        onChange={handleInputs}
                        className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type="number"
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <label
                      htmlFor="invtitle"
                      className="text-[12px] font-bold text-darkSilverColor">
                      Default Room Number
                    </label>
                    <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                      <CustomInput
                        disabled={accessType === "view"}
                        value={formData.default_room_number}
                        model="default_room_number"
                        onChange={handleInputs}
                        className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                        id="invtitle"
                        placeholder=""
                        type=""
                        readOnly={accessType === "view"}
                      />
                    </div>
                  </div>

                  <div className="flex items-center mt-[6px]">
                    <input
                      onChange={(e) => handleCheckBox("is_provisioned", e)}
                      disabled={accessType === "view"}
                      type="checkbox"
                      checked={formData.is_provisioned}
                      className="bg-limeGreen"
                    />
                    <h5 className="text-[11px] font-bold ml-[13px] text-darkSilverColor">
                      Provisioned
                    </h5>
                  </div>
                  <div className="flex items-center mt-[6px]">
                    <input
                      onChange={(e) => handleCheckBox("tip_enable", e)}
                      disabled={accessType === "view"}
                      type="checkbox"
                      checked={formData.tip_enable}
                      className="bg-limeGreen"
                    />
                    <h5 className="text-[11px] font-bold ml-[13px] text-darkSilverColor">
                      Tip Enable
                    </h5>
                  </div>
                  <div className="flex items-center mt-[6px]">
                    <input
                      onChange={(e) => handleCheckBox("cashback_enable", e)}
                      disabled={accessType === "view"}
                      type="checkbox"
                      checked={formData.cashback_enable}
                      className="bg-limeGreen"
                    />
                    <h5 className="text-[11px] font-bold ml-[13px] text-darkSilverColor">
                      Cashback Enable
                    </h5>
                  </div>
                  <div className="flex items-center mt-[6px]">
                    <input
                      onChange={(e) => handleCheckBox("debit", e)}
                      disabled={accessType === "view"}
                      type="checkbox"
                      checked={formData.debit}
                      className="bg-limeGreen"
                    />
                    <h5 className="text-[11px] font-bold ml-[13px] text-darkSilverColor">
                      Debit
                    </h5>
                  </div>
                  <div className="flex items-center mt-[6px]">
                    <input
                      onChange={(e) => handleCheckBox("active", e)}
                      disabled={accessType === "view"}
                      type="checkbox"
                      checked={formData.active}
                      className="bg-limeGreen"
                    />
                    <h5 className="text-[11px] font-bold ml-[13px] text-darkSilverColor">
                      Active
                    </h5>
                  </div>
                  {accessType !== "view" && (
                    <div className="mt-[21px] mb-[16px] flex justify-end col-span-10">
                      <button
                        disabled={savingLoader}
                        onClick={createTerminal}
                        className="text-[10px] font-bold py-[6px] rounded-lg px-[19px]  bg-limeGreen text-btnBlack">
                        {savingLoader ? "Loadin..." : "Save"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        }
      />
    );
  } else return <TerminalDesktop />;
};

export default Index;

export async function getServerSideProps(context: any) {
  const { mode } = context.params || context.query;
  return {
    props: {
      mode: mode || null, // Provide the ID as a prop
    },
  };
}
