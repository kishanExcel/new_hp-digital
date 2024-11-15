import React, { useEffect, useState } from "react";
import Layout from "../layout";
import TabNavigation from "../components/tabNavigation";
import CustomInput from "../components/customInput";
import CustomSelect from "../components/customSelect";
import ToggleSwitch from "../components/toggleSwitch";
import CreditCard from "../../../assets/images/P-credit-card.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useToast } from "../../../components/payments/components/toasterProvider";
import TabNavigationMobile from "../components/tabNavigationMobile";
import { useSession } from "next-auth/react";

const Index = () => {
  const [showDiscountCard, setShowDiscountCord] = useState(false);
  const [initialLoader, setInitialLoader] = useState(false);
  const [saving, setSaving] = useState(false);
  const [throwError, setError] = useState(false);
  const router = useRouter();
  const { showToast } = useToast();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      console.log("Session object:", session);
      setFormData({
        ...formData,
        userId: session?.userId,
        token: session?.session[0], // Make sure this path is correct
      });
    }
  }, [session]);

  const tabData = [
    {
      tabName: "Payment",
      tabUrl: "/Payment/insights",
    },
    {
      tabName: "Invoice ID#",
      tabUrl: "/Payment/quickInvoice",
    },
    {
      tabName: `Quick Invoice`,
      tabUrl: "/Payment/quickInvoice",
    },
    {
      tabName: `Virtual Terminal`,
      tabUrl: "/Payment/virtualTerminal/terminal",
    },
    {
      tabName: `Keyed Credit Card`,
      tabUrl: "/Payment/keyCreditCard",
    },
  ];

  const mobileTab = [
    {
      tabName: `Quick Invoice`,
      tabUrl: "/paymentDesktop/quickInvoice",
    },
    {
      tabName: `Virtual Terminal`,
      tabUrl: "/paymentDesktop/virtualTerminal/terminal",
    },
    {
      tabName: `Keyed Credit Card`,
      tabUrl: "/paymentDesktop/keyCreditCard",
    },
  ];

  const [accessType, setAccessType] = useState<any>(null);
  const [formData, setFormData] = useState({
    checkin_date: "2021-12-01",
    checkout_date: "2021-12-01",
    clerk_number: "AE1234",
    customer_id: "customerid",
    description: "some description",
    iias_ind: 1,
    image_front: "",
    image_back: "",
    installment: true,
    installment_number: 1,
    installment_count: 1,
    product_transaction_id: "31ef2344e2764888aaf17782",
    advance_deposit: false,
    no_show: false,
    notification_email_address: "johnsmith@smiths.com",
    order_number: "433659378839",
    po_number: "555555553123",
    quick_invoice_id: "31ef8bb9510646c28411c642",
    recurring: false,
    recurring_number: 1,
    room_num: "303",
    room_rate: 95,
    save_account: false,
    save_account_title: "John Account",
    subtotal_amount: 599,
    surcharge_amount: 100,
    tax: 0,
    tip_amount: 0,
    transaction_amount: 699,
    secondary_amount: 0,
    transaction_c1: "custom-data-1",
    transaction_c2: "custom-data-2",
    transaction_c3: "custom-data-3",
    bank_funded_only_override: false,
    allow_partial_authorization_override: false,
    auto_decline_cvv_override: false,
    auto_decline_street_override: false,
    auto_decline_zip_override: false,
    secure_auth_data: "vVwL7UNHCf8W8M2LAfvRChNHN7c%3D",
    secure_protocol_version: 2,
    secure_crytogram: "ZVVEVDJITHpTNE9yNlNHMUh0R0E=",
    secure_directory_server_transaction_id:
      "d65e93c3-35ab-41ba-b307-767bfc19eae",
    terminal_serial_number: "1234567890",
    threedsecure: true,
    account_holder_name: "smith",
    account_number: "5454545454545454",
    entry_mode_id: "K",
    exp_date: "0722",
    wallet_type: "000",
    token: session?.session[0],
    userId: session?.userId,
  });

  useEffect(() => {
    setInitialLoader(true);
    const { query } = router;
    setAccessType(query.mode);

    if (query.mode === "view" || query.mode === "update") {
      getccRefundRecord();
    } else setInitialLoader(false);
  }, []);
  const getccRefundRecord = async () => {
    const { query } = router;
    try {
      const id = query.id;
      const url = `/api/fortis/getCCSaleRecord?id=${id}`;
      const response = await fetch(url);
      if (!response.ok) {
        // Handle HTTP errors here
        console.error(`HTTP error! status: ${response.status}`);
        showToast(`HTTP error! status: ${response.status}`, "error");
        return;
      }
      const data = await response.json();
      const responseData = data.data;
      setFormData({
        ...responseData,
      });
    } catch (error) {
      console.error("Error submitting request:", error);
      showToast(`Error submitting request: ${error}`, "error");
    }
    setInitialLoader(false);
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  function stripBase64Metadata(base64String) {
    return base64String.replace(/^data:image\/[a-zA-Z]+;base64,/, "");
  }

  const creatCCSalesTerminal = async () => {
    setSaving(true);

    const bodyData = formData;

    if (
      !bodyData.transaction_amount ||
      Number(bodyData.transaction_amount) === 0
    ) {
      setSaving(false);
      setError(true);
      return showToast("Transaction Amount Required", "warning");
    }

    try {
      let response = null;
      const { query } = router;

      // Prepare the body data to send
      const formDataToSend = {
        ...bodyData,
        image_front: stripBase64Metadata(bodyData.image_front),
        image_back: stripBase64Metadata(bodyData.image_back),
      };

      // Set up the API request based on the accessType
      if (accessType === "update") {
        const id = query.id;
        response = await fetch(`/api/fortis/createCCSale/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formDataToSend), // Send JSON data
        });
      } else {
        response = await fetch("/api/fortis/createCCSale", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formDataToSend), // Send JSON data
        });
      }

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        showToast(`HTTP error! status: ${response.status}`, "error");

        setSaving(false);
        return;
      }

      const data = await response.json();
      if (accessType === "update") {
        setAccessType("view");
      }

      // setAccessType("view");

      showToast(`Request submitted successfully`, "success");
    } catch (error) {
      console.error("Error submitting request:", error);
      showToast("Error submitting request", "error");
    }

    setSaving(false);
  };

  const handleInputs = (e: any, model: any) => {
    if (model === "image_front" || model === "image_back") {
      const file = e.target.files[0]; // Access the file
      if (file) {
        convertFileToBase64(file).then((base64Image) => {
          setFormData({
            ...formData,
            [model]: base64Image, // Set the Base64 string
          });
        });
      }
    } else {
      setFormData({
        ...formData,
        [model]: e.target.value,
      });
    }
  };

  const setImage = async (e: any, model: string) => {
    const file = e.target.files[0];
    if (file) {
      const base64Image = await convertFileToBase64(file);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [model]: base64Image, // Store the Base64 string
      }));
    }
  };

  function handleCheckBox(model: string, e: any) {
    formData[model as keyof boolean] = e.target.checked;
    setFormData({
      ...formData,
    });
  }

  return (
    <Layout
      Childrens={
        <div className="px-[15px] pt-[18px] flex-1 flex flex-col h-full bg-cultured ">
          <div className="hidden md:block">
            <TabNavigation tabData={tabData} />
          </div>
          <div className="block md:hidden">
            <TabNavigationMobile tabsData={mobileTab} />
          </div>
          {initialLoader ? (
            <div>Loading...</div>
          ) : (
            <div className="h-full overflow-y-auto container mx-auto">
              <div className="bg-chinesWhite rounded-lg mb-4">
                <div className="w-full  bg-palatinatePurple rounded-lg mt-[16px] text-white">
                  <h5 className="md:text-[24px] text-[16px] font-bold  md:pl-[32px] pl-[16px] py-[10px]">
                    CC Sales
                  </h5>
                </div>
                <div className="px-[16px] py-[27px]">
                  <div className="md:grid grid-cols-3 gap-4">
                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Checkin Date
                      </label>
                      <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <CustomInput
                          disabled={accessType === "view"}
                          model="checkin_date"
                          value={formData.checkin_date}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type="date"
                          readOnly={false}
                        />
                      </div>
                    </div>
                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Checkout Date
                      </label>
                      <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <CustomInput
                          disabled={accessType === "view"}
                          model="checkout_date"
                          value={formData.checkout_date}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type="date"
                          readOnly={false}
                        />
                      </div>
                    </div>

                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Clerk Number
                      </label>
                      <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <CustomInput
                          disabled={accessType === "view"}
                          model="clerk_number"
                          value={formData.clerk_number}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type=""
                          readOnly={false}
                        />
                      </div>
                    </div>

                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Customer Id
                      </label>
                      <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <CustomInput
                          disabled={accessType === "view"}
                          model="customer_id"
                          value={formData.customer_id}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type=""
                          readOnly={false}
                        />
                      </div>
                    </div>

                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Description
                      </label>
                      <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <CustomInput
                          disabled={accessType === "view"}
                          model="description"
                          value={formData.description}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type=""
                          readOnly={false}
                        />
                      </div>
                    </div>

                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Image Front
                      </label>
                      <div className="relative flex items-center w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <input
                          type="file"
                          onChange={(e) => setImage(e, "image_front")}
                          disabled={accessType === "view"}
                          className="opacity-0 z-10 w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        />

                        <button className="absolute left-2 bg-chinesWhite h-[70%]  md:text-[20px] text-[12px] rounded-lg px-2">
                          Choose Image
                        </button>
                      </div>
                    </div>
                    <div className="mt-[6px] ">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Image Back
                      </label>
                      <div className="relative flex items-center w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <input
                          type="file"
                          onChange={(e) => setImage(e, "image_back")}
                          disabled={accessType === "view"}
                          className="opacity-0 z-10 w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                        />

                        <button className="absolute left-2 bg-chinesWhite h-[70%]  md:text-[20px] text-[12px] rounded-lg px-2">
                          Choose Image
                        </button>
                      </div>
                    </div>
                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Installment Number
                      </label>
                      <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <CustomInput
                          disabled={accessType === "view"}
                          model="installment_number"
                          value={formData.installment_number}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type="number"
                          readOnly={false}
                        />
                      </div>
                    </div>
                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Installment Count
                      </label>
                      <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <CustomInput
                          disabled={accessType === "view"}
                          model="installment_count"
                          value={formData.installment_count}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type="number"
                          readOnly={false}
                        />
                      </div>
                    </div>

                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Notification Email Address
                      </label>
                      <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <CustomInput
                          disabled={accessType === "view"}
                          model="notification_email_address"
                          value={formData.notification_email_address}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type="email"
                          readOnly={false}
                        />
                      </div>
                    </div>
                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Order Number
                      </label>
                      <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <CustomInput
                          disabled={accessType === "view"}
                          model="order_number"
                          value={formData.order_number}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type=""
                          readOnly={false}
                        />
                      </div>
                    </div>
                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        PO Number
                      </label>
                      <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <CustomInput
                          disabled={accessType === "view"}
                          model="po_number"
                          value={formData.po_number}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type=""
                          readOnly={false}
                        />
                      </div>
                    </div>

                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Room Number
                      </label>
                      <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <CustomInput
                          disabled={accessType === "view"}
                          model="room_num"
                          value={formData.room_num}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type="number"
                          readOnly={false}
                        />
                      </div>
                    </div>
                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Room Rate
                      </label>
                      <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <span>$</span>
                        <CustomInput
                          disabled={accessType === "view"}
                          model="room_rate"
                          value={formData.room_rate}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type="number"
                          readOnly={false}
                        />
                      </div>
                    </div>

                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Subtotal Amount
                      </label>
                      <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <span>$</span>{" "}
                        <CustomInput
                          disabled={accessType === "view"}
                          model="subtotal_amount"
                          value={formData.subtotal_amount}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type="number"
                          readOnly={false}
                        />
                      </div>
                    </div>

                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Tax
                      </label>
                      <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <span>$</span>{" "}
                        <CustomInput
                          disabled={accessType === "view"}
                          model="tax"
                          value={formData.tax}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type="number"
                          readOnly={false}
                        />
                      </div>
                    </div>

                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Tip Amount
                      </label>
                      <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <span>$</span>
                        <CustomInput
                          disabled={accessType === "view"}
                          model="tip_amount"
                          value={formData.tip_amount}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type="number"
                          readOnly={false}
                        />
                      </div>
                    </div>

                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Secondary Amount
                      </label>
                      <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <span>$</span>
                        <CustomInput
                          disabled={accessType === "view"}
                          model="secondary_amount"
                          value={formData.secondary_amount}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type="number"
                          readOnly={false}
                        />
                      </div>
                    </div>

                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Surcharge Amount
                      </label>
                      <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <span>$</span>
                        <CustomInput
                          disabled={accessType === "view"}
                          model="surcharge_amount"
                          value={formData.surcharge_amount}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type="number"
                          readOnly={false}
                        />
                      </div>
                    </div>
                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Transaction Amount
                      </label>
                      <div
                        className={`flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4] ${
                          throwError &&
                          !formData.transaction_amount &&
                          "border border-red"
                        }`}>
                        <span>$</span>
                        <CustomInput
                          disabled={accessType === "view"}
                          model="transaction_amount"
                          value={formData.transaction_amount}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type="number"
                          readOnly={false}
                        />
                      </div>
                    </div>

                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Transaction 1
                      </label>
                      <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <span>$</span>
                        <CustomInput
                          disabled={accessType === "view"}
                          model="transaction_c1"
                          value={formData.transaction_c1}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type="number"
                          readOnly={false}
                        />
                      </div>
                    </div>
                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Transaction 2
                      </label>
                      <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <span>$</span>{" "}
                        <CustomInput
                          disabled={accessType === "view"}
                          model="transaction_c2"
                          value={formData.transaction_c2}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type="nember"
                          readOnly={false}
                        />
                      </div>
                    </div>
                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Transaction 3
                      </label>
                      <div className="flex items-center md:text-[20px] text-[12px] w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <span>$</span>
                        <CustomInput
                          disabled={accessType === "view"}
                          model="transaction_c3"
                          value={formData.transaction_c3}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type="number"
                          readOnly={false}
                        />
                      </div>
                    </div>
                    <div className="mt-[6px]">
                      <label
                        htmlFor="invtitle"
                        className="md:text-[20px] text-[12px] font-bold text-darkSilverColor">
                        Wallet Type
                      </label>
                      <div className="w-full md:h-[56px] h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                        <CustomInput
                          disabled={accessType === "view"}
                          model="wallet_type"
                          value={formData.wallet_type}
                          onChange={handleInputs}
                          className="w-full md:text-[20px] text-[12px] bg-[#F4F4F4] h-full outline-none"
                          id="invtitle"
                          placeholder=""
                          type=""
                          readOnly={false}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mt-[6px]">
                    <input
                      disabled={accessType === "view"}
                      onChange={(e) =>
                        handleCheckBox("bank_funded_only_override", e)
                      }
                      checked={formData.bank_funded_only_override}
                      type="checkbox"
                      className="bg-limeGreen custom-checkbox"
                    />
                    <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                      Bank Funded Only Override
                    </h5>
                  </div>
                  <div className="flex items-center mt-[6px]">
                    <input
                      disabled={accessType === "view"}
                      onChange={(e) =>
                        handleCheckBox(
                          "allow_partial_authorization_override",
                          e
                        )
                      }
                      checked={formData.allow_partial_authorization_override}
                      type="checkbox"
                      className="bg-limeGreen custom-checkbox"
                    />
                    <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                      Allow Partial Authorization Override
                    </h5>
                  </div>
                  <div className="flex items-center mt-[6px]">
                    <input
                      disabled={accessType === "view"}
                      onChange={(e) =>
                        handleCheckBox("auto_decline_cvv_override", e)
                      }
                      checked={formData.auto_decline_cvv_override}
                      type="checkbox"
                      className="bg-limeGreen custom-checkbox"
                    />
                    <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                      Auto Decline CCV Override
                    </h5>
                  </div>
                  <div className="flex items-center mt-[6px]">
                    <input
                      disabled={accessType === "view"}
                      onChange={(e) =>
                        handleCheckBox("auto_decline_street_override", e)
                      }
                      checked={formData.auto_decline_street_override}
                      type="checkbox"
                      className="bg-limeGreen custom-checkbox"
                    />
                    <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                      Auto Decline Street Override
                    </h5>
                  </div>
                  <div className="flex items-center mt-[6px]">
                    <input
                      disabled={accessType === "view"}
                      onChange={(e) =>
                        handleCheckBox("auto_decline_zip_override", e)
                      }
                      checked={formData.auto_decline_zip_override}
                      type="checkbox"
                      className="bg-limeGreen custom-checkbox"
                    />
                    <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                      Auto Decline Zip Override
                    </h5>
                  </div>

                  <div className="flex items-center mt-[6px]">
                    <input
                      disabled={accessType === "view"}
                      onChange={(e) => handleCheckBox("threedsecure", e)}
                      checked={formData.threedsecure}
                      type="checkbox"
                      className="bg-limeGreen custom-checkbox"
                    />
                    <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                      Threed Secure
                    </h5>
                  </div>

                  <div className="flex items-center mt-[6px]">
                    <input
                      disabled={accessType === "view"}
                      onChange={(e) => handleCheckBox("installment", e)}
                      type="checkbox"
                      checked={formData.installment}
                      className="bg-limeGreen custom-checkbox"
                    />
                    <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                      Installment
                    </h5>
                  </div>
                  <div className="flex items-center mt-[6px]">
                    <input
                      disabled={accessType === "view"}
                      onChange={(e) => handleCheckBox("save_account", e)}
                      checked={formData.save_account}
                      type="checkbox"
                      className="bg-limeGreen custom-checkbox"
                    />
                    <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                      Save Account
                    </h5>
                  </div>
                  <div className="flex items-center mt-[6px]">
                    <input
                      disabled={accessType === "view"}
                      onChange={(e) => handleCheckBox("recurring", e)}
                      checked={formData.recurring}
                      type="checkbox"
                      className="bg-limeGreen custom-checkbox"
                    />
                    <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                      Recurring
                    </h5>
                  </div>
                  <div className="flex items-center mt-[6px]">
                    <input
                      disabled={accessType === "view"}
                      onChange={(e) => handleCheckBox("advance_deposit", e)}
                      checked={formData.advance_deposit}
                      type="checkbox"
                      className="bg-limeGreen custom-checkbox"
                    />
                    <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                      Advance Deposit
                    </h5>
                  </div>
                  <div className="flex items-center mt-[6px]">
                    <input
                      disabled={accessType === "view"}
                      onChange={(e) => handleCheckBox("no_show", e)}
                      checked={formData.no_show}
                      type="checkbox"
                      className="bg-limeGreen custom-checkbox"
                    />
                    <h5 className="md:text-[20px] text-[12px] font-bold ml-[13px] text-darkSilverColor">
                      No Show
                    </h5>
                  </div>

                  {accessType !== "view" && (
                    <div className="mt-[21px] mb-[16px] flex justify-end col-span-10">
                      <button
                        disabled={saving}
                        onClick={creatCCSalesTerminal}
                        className="md:text-[24px] text-[10px] font-bold md:py-[17px] py-[8px] rounded-lg px-[25px]  bg-limeGreen text-btnBlack">
                        {saving ? "Loading..." : "Save"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      }
    />
  );
};

export default Index;
