import React, { useEffect, useState } from "react";
import Layout from "../layout";
import TabNavigation from "../../../components/payments/components/tabNavigation";
import CustomInput from "../../../components/payments/components/customInput";
import CustomSelect from "../../../components/payments/components/customSelect";
import ToggleSwitch from "../../../components/payments/components/toggleSwitch";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "../../../components/payments/components/toasterProvider";
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";
import QuickInvoiceDesktop from "../../paymentDesktop/quickInvoice";
import { useSession } from "next-auth/react";

const Index = () => {
  const [showDiscountCard, setShowDiscountCord] = useState(false);
  const [enable, setEnable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setErrr] = useState(false);
  const [accessType, setAccessType] = useState<any>(null);
  const [savingLoader, setSavingoader] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [locationOptions, setLocationOptions] = useState<any>([]);
  const [locationObject, setLocationObject] = useState<any>({});
  const { showToast } = useToast();
  const isMobile = useClientMediaQuery("(max-width: 769px)");
  const { data: session, status } = useSession();

  const router = useRouter();

  const [formData, setFormData] = useState({
    // Your existing form data state
    items: [{ name: "", quantity: "", unitPrice: "" }],
    title: "",
    contact_id: "",
    dueDate: "",
    locationId: "",
    allowOverPay: false,
    bankFundedOnlyOverride: true,
    email: "",
    customerId: "",
    expireDate: "",
    allowPartialPar: false,
    sendEmail: false,
    invoiceNumber: "",
    itemHeader: "",
    itemFooter: "",
    amountDue: 0,
    notificationEmail: "",
    statusId: 0,
    statusCode: 0,
    note: "",
    notificationDayB4DueDay: 0,
    notificationDayAfterDueDay: 0,
    notificationOnDueDate: false,
    sendTextToPay: false,
    remainingBalance: 0,
    singlePaymentMinAmount: 0,
    singlePaymentMaxAmount: 0,
    cellPhone: "",
    token: session?.session[0],
    contact_id: session?.userId,
  });

  useEffect(() => {
    const { query } = router;
    setAccessType(query.mode);
    if (query.mode === "view" || query.mode === "update") {
      getInvoiceRecord();
    }

    getLocationOptions();
  }, []);

  useEffect(() => {
    if (session) {
      console.log("Session object:", session);
      setFormData({
        ...formData,
        token: session?.session[0], // Make sure this path is correct
      });
    }
  }, [session]);

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
    data?.list?.map((loc: any) => {
      locList.push(
        `${loc.address.street1}-${loc.address.city}-${loc.address.state}-${loc.address.country}`
      );
      // setLocationObject({
      //   ...locationObject,
      //   [`${loc.address.city}-${loc.address.state}-${loc.address.country}`]: loc.id

      // })
      locationObject[
        `${loc.address.street1}-${loc.address.city}-${loc.address.state}-${loc.address.country}`
      ] = loc.id;
    });

    setLocationOptions(locList);
  };

  const getInvoiceRecord = async () => {
    const { query } = router;
    setLoading(true);
    try {
      const id = query.id;
      const url = `/api/fortis/getInvoiceRecord?id=${id}`;
      const response = await fetch(url);
      if (!response.ok) {
        // Handle HTTP errors here
        console.error(`HTTP error! status: ${response.status}`);
        showToast(`HTTP error! status: ${response.status}`, "error");
        return;
      }

      const data = await response.json();
      const responseData = data.data;

      let items = responseData.item_list.map((itm: any) => {
        return {
          name: itm.name,
          quantity: itm.quantity,
          unitPrice: itm.amount,
        };
      });

      setFormData({
        ...formData,
        items: [...items],
        title: responseData.title,
        dueDate: responseData.due_date,
        locationId: responseData.location_id,
        allowOverPay: responseData.allow_overpayment,
        bankFundedOnlyOverride: responseData.bank_funded_only_override,
        email: responseData.email,
        customerId: responseData.customer_id,
        expireDate: responseData.expire_date,
        allowPartialPar: responseData.allow_partial_pay,
        sendEmail: responseData.send_email,
        invoiceNumber: responseData.invoice_number,
        itemHeader: responseData.item_header,
        itemFooter: responseData.item_footer,
        amountDue: responseData.amount_due,
        notificationEmail: responseData.notification_email,
        statusId: responseData.status_id,
        statusCode: responseData.status_code,
        note: responseData.note,
        notificationDayB4DueDay: responseData.notification_days_before_due_date,
        notificationDayAfterDueDay:
          responseData.notification_days_after_due_date,
        notificationOnDueDate: responseData.notification_on_due_date,
        sendTextToPay: responseData.send_text_to_pay,
        remainingBalance: responseData.remaining_balance,
        singlePaymentMinAmount: responseData.single_payment_min_amount,
        singlePaymentMaxAmount: responseData.single_payment_max_amount,
        cellPhone: responseData.cell_phone,
        token: session?.session[0],
        contact_id: session?.userId,
      });
    } catch (error) {
      console.error("Error submitting request:", error);
      showToast(`Error submitting request: ${error}`, "error");
    }

    setLoading(false);
  };

  const handleChange = (
    e: { target: { name: string; value: string | number } },
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedItems = [...formData.items];
    (updatedItems[index] as any)[name] = value;
    setFormData({ ...formData, items: updatedItems });
  };

  const handleAddItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { name: "", quantity: "", unitPrice: "" }],
    });
  };

  const handleToggle = () => {
    setEnable((prevState) => !prevState);
  };

  const tabData = [
    {
      tabName: "Quick Invoice",
      tabUrl: "/Payment/quickInvoice",
    },
    {
      tabName: "Virtual Terminal",
      tabUrl: "/Payment/virtualTerminal",
    },
    {
      tabName: `Keyed Credit Card`,
      tabUrl: "/Payment/keyedCreditCard",
    },
  ];

  function generateRandomAlphanumeric(length: any) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const createInvoice = async () => {
    setErrr(false);
    let isRowValid = true;
    const itemList = formData.items.map((itm) => {
      if (!itm.name || !itm.unitPrice) {
        isRowValid = false;
      }
      return {
        name: itm.name,
        amount: Number(itm.unitPrice) || 0,
      };
    });

    if (formData.title && formData.dueDate && isRowValid) {
      setSavingoader(true);

      const bodyData = {
        title: formData.title,
        due_date: formData.dueDate,
        item_list: itemList,
        location_id: locationObject[formData.locationId], //from background
        allow_overpayment: formData.allowOverPay,
        bank_funded_only_override: formData.bankFundedOnlyOverride,
        email: formData.email,
        customer_id: session?.user?.id, //from background
        expire_date: formData.expireDate,
        allow_partial_pay: formData.allowPartialPar,
        invoice_number: "invoice12345", //from background
        item_header: formData.itemHeader,
        item_footer: formData.itemFooter,
        amount_due: Number(formData.amountDue),
        send_email: formData.sendEmail,
        notification_email: session?.email, //from background
        status_id: 1, //from background
        status_code: 1, //from background
        note: formData.note,
        notification_days_before_due_date:
          Number(formData.notificationDayB4DueDay) || 0,
        notification_days_after_due_date:
          Number(formData.notificationDayAfterDueDay) || 0,
        notification_on_due_date: formData.notificationOnDueDate,
        send_text_to_pay: false, //from background
        remaining_balance: Number(formData.remainingBalance) || 0,
        single_payment_min_amount: Number(formData.singlePaymentMinAmount) || 0,
        single_payment_max_amount: Number(formData.singlePaymentMaxAmount) || 0,
        cell_phone: formData.cellPhone,
        quick_invoice_api_id: generateRandomAlphanumeric(17),
        attach_files_to_email: false,
        files: [],
        tags: [],
        token: session?.session[0],
        contact_id: session?.userId,
      };

      try {
        let response = null;
        const { query } = router;
        if (accessType === "update") {
          const id = query.id;
          response = await fetch(`/api/fortis/updateInvoice?id=${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(bodyData),
          });
        } else {
          console.log("bodyData", bodyData);
          response = await fetch("/api/fortis/createInvoice", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(bodyData),
          });
        }

        setSavingoader(false);

        if (!response.ok) {
          // Handle HTTP errors here
          console.error(`HTTP error! status: ${response.status}`);
          showToast(`Error submitting request: ${response.status}`, "error");

          return;
        }

        const data = await response.json();
        console.log("data", data);
        if (accessType === "update") {
          setAccessType("view");

          // router.push("Payment/quickInvoice/invoiceList")
        }

        showToast(`Request submitted successfully`, "success");

        setAccessType("view");
      } catch (error) {
        console.error("Error submitting request:", error);
        showToast(`Error submitting request: ${error}`, "error");

        // Handle other types of errors (e.g., network errors)
      }
    } else {
      setErrr(true);

      showToast("Field The Required Data", "warning");
    }
  };

  const inputHandler = (model: string, e: any) => {
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

  if (isMobile) {
    return (
      <Layout
        hHeading="Payments"
        Childrens={
          <div className="px-[15px] pt-[18px] flex-1 flex flex-col h-full bg-cultured ">
            <TabNavigation tabsData={tabData} />
            <div className="h-full overflow-y-auto">
              <div>
                <div className="bg-chinesWhite  rounded-lg">
                  <div className="w-full  bg-palatinatePurple rounded-lg mt-[16px] text-white">
                    <h5 className="text-[16px] font-bold  pl-[15px] py-[10px]">
                      Quick Invoice
                    </h5>
                  </div>
                  {loading ? (
                    <div className="h-screen">Loading ...</div>
                  ) : (
                    <div className="px-[16px] py-[27px]">
                      <Input
                        disabled={accessType === "view"}
                        label="Expire Date"
                        type="date"
                        id=""
                        model="expireDate"
                        placeholder=""
                        readOnly={false}
                        value={formData.expireDate}
                        onChange={inputHandler}
                      />
                      <Input
                        disabled={accessType === "view"}
                        label="Due Date"
                        type="date"
                        id=""
                        model="dueDate"
                        placeholder=""
                        readOnly={false}
                        value={formData.dueDate}
                        onChange={inputHandler}
                      />
                      {isError && !formData.dueDate && (
                        <div className="text-red text-[10px] p-0 m-0">
                          This Field is Required
                        </div>
                      )}

                      <Input
                        disabled={accessType === "view"}
                        label="Title"
                        type=""
                        value={formData.title}
                        id=""
                        model="title"
                        placeholder=""
                        readOnly={false}
                        onChange={inputHandler}
                      />
                      {isError && !formData.title && (
                        <div className="text-red text-[10px] p-0 m-0">
                          This Field is Required
                        </div>
                      )}

                      <div className="col-span-2">
                        <label
                          htmlFor="location"
                          className="text-[12px] font-bold text-darkSilverColor">
                          Location
                        </label>
                        <div className="w-full h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                          <select
                            disabled={accessType === "view"}
                            className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                            id="location"
                            name=""
                            onChange={(e) => handleSelect(e, "locationId")}>
                            {locationOptions.map((loc: string) => (
                              <option value={loc}>{loc}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <Input
                        disabled={accessType === "view"}
                        label="Email"
                        type="email"
                        id=""
                        model="email"
                        placeholder=""
                        readOnly={false}
                        value={formData.email}
                        onChange={inputHandler}
                      />
                      <Input
                        disabled={accessType === "view"}
                        label="Item Header"
                        id=""
                        model="itemHeader"
                        placeholder=""
                        readOnly={false}
                        type=""
                        value={formData.itemHeader}
                        onChange={inputHandler}
                      />
                      <Input
                        disabled={accessType === "view"}
                        label="Item Footer"
                        type=""
                        id=""
                        model="itemFooter"
                        placeholder=""
                        readOnly={false}
                        value={formData.itemFooter}
                        onChange={inputHandler}
                      />
                      <Input
                        sign="$"
                        disabled={accessType === "view"}
                        label="Amount Due"
                        type="number"
                        id=""
                        model="amountDue"
                        placeholder=""
                        readOnly={false}
                        value={formData.amountDue}
                        onChange={inputHandler}
                      />
                      <Input
                        disabled={accessType === "view"}
                        label="Notification Email"
                        id=""
                        model="notificationEmail"
                        placeholder=""
                        readOnly={false}
                        type="email"
                        value={formData.notificationEmail}
                        onChange={inputHandler}
                      />
                      <Input
                        disabled={accessType === "view"}
                        label="Note"
                        type=""
                        id=""
                        model="note"
                        placeholder=""
                        readOnly={false}
                        value={formData.note}
                        onChange={inputHandler}
                      />
                      <Input
                        disabled={accessType === "view"}
                        label="Notification Day Before Due Date "
                        id=""
                        model="notificationDayB4DueDay"
                        placeholder=""
                        readOnly={false}
                        type="number"
                        value={formData.notificationDayB4DueDay}
                        onChange={inputHandler}
                      />
                      <Input
                        disabled={accessType === "view"}
                        label="Notification Day After Due Date "
                        id=""
                        model="notificationDayAfterDueDay"
                        placeholder=""
                        readOnly={false}
                        type="number"
                        value={formData.notificationDayAfterDueDay}
                        onChange={inputHandler}
                      />
                      <Input
                        sign="$"
                        disabled={accessType === "view"}
                        label="Remaining Balance"
                        type="number"
                        id=""
                        model="remainingBalance"
                        placeholder=""
                        readOnly={false}
                        value={formData.remainingBalance}
                        onChange={inputHandler}
                      />
                      <Input
                        sign="$"
                        disabled={accessType === "view"}
                        label="Single Payment Min Amount"
                        id=""
                        model="singlePaymentMinAmount"
                        placeholder=""
                        readOnly={false}
                        type="number"
                        value={formData.singlePaymentMinAmount}
                        onChange={inputHandler}
                      />
                      <Input
                        sign="$"
                        disabled={accessType === "view"}
                        label="Single Payment Max Amount"
                        id=""
                        model="singlePaymentMaxAmount"
                        placeholder=""
                        readOnly={false}
                        type="number"
                        value={formData.singlePaymentMaxAmount}
                        onChange={inputHandler}
                      />
                      <Input
                        disabled={accessType === "view"}
                        label="Cell Phone"
                        type="number"
                        id=""
                        model="cellPhone"
                        placeholder=""
                        readOnly={false}
                        value={formData.cellPhone}
                        onChange={inputHandler}
                      />

                      <div className="pt-[16px]  grid grid-cols-10 gap-2">
                        <div className="col-span-12">
                          <div className="">
                            {formData.items.map((item, index) => (
                              <div
                                className="flex justify-between "
                                key={index}>
                                <div className="mx-1">
                                  <label className="text-[12px]">Item:</label>

                                  <input
                                    className="w-full h-[27px] bg-[#F4F4F4] px-2 outline-none text-[12px] rounded-lg"
                                    type="text"
                                    name="name"
                                    value={item.name}
                                    disabled={accessType === "view"}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                  {isError && !item.name && (
                                    <div className="text-red text-[10px] p-0 m-0">
                                      This Field is Required
                                    </div>
                                  )}
                                </div>
                                <div className="mx-1">
                                  <label className="text-[12px]">
                                    Quantity:
                                  </label>
                                  <input
                                    className="w-full h-[27px] bg-[#F4F4F4] px-2 outline-none mx-1 text-[12px] rounded-lg"
                                    type="number"
                                    name="quantity"
                                    value={item.quantity}
                                    disabled={accessType === "view"}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                                <div className="mx-1">
                                  <label className="text-[12px]">
                                    Unit Price:
                                  </label>
                                  <input
                                    className="w-full h-[27px] bg-[#F4F4F4] px-2 outline-none mx-1 text-[12px] rounded-lg"
                                    type="number"
                                    name="unitPrice"
                                    disabled={accessType === "view"}
                                    value={item.unitPrice}
                                    onChange={(e) => handleChange(e, index)}
                                  />

                                  {isError && !item.unitPrice && (
                                    <div className="text-red text-[10px] p-0 m-0">
                                      This Field is Required
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-[12px] flex justify-end col-span-10 relative">
                            <button
                              disabled={accessType === "view"}
                              onClick={handleAddItem}
                              className="text-[10px] font-bold py-[6px] rounded-lg px-[8px] bg-limeGreen text-btnBlack">
                              + Add Item
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center mt-[6px]">
                        <input
                          disabled={accessType === "view"}
                          type="checkbox"
                          className="bg-limeGreen"
                          onChange={(e) => handleCheckBox("allowOverPay", e)}
                          checked={formData.allowOverPay}
                        />
                        <h5 className="text-[11px] font-bold ml-[13px] text-darkSilverColor">
                          Allow Over Payment
                        </h5>
                      </div>
                      <div className="flex items-center mt-[6px]">
                        <input
                          disabled={accessType === "view"}
                          type="checkbox"
                          className="bg-limeGreen"
                          onChange={(e) =>
                            handleCheckBox("bankFundedOnlyOverride", e)
                          }
                          checked={formData.bankFundedOnlyOverride}
                        />
                        <h5 className="text-[11px] font-bold ml-[13px] text-darkSilverColor">
                          Bank Funded Only Override
                        </h5>
                      </div>
                      <div className="flex items-center mt-[6px]">
                        <input
                          disabled={accessType === "view"}
                          type="checkbox"
                          className="bg-limeGreen"
                          onChange={(e) => handleCheckBox("allowPartialPar", e)}
                          checked={formData.allowPartialPar}
                        />
                        <h5 className="text-[11px] font-bold ml-[13px] text-darkSilverColor">
                          Allow Partial Pay
                        </h5>
                      </div>
                      <div className="flex items-center mt-[6px]">
                        <input
                          disabled={accessType === "view"}
                          type="checkbox"
                          className="bg-limeGreen"
                          onChange={(e) => handleCheckBox("sendEmail", e)}
                          checked={formData.sendEmail}
                        />
                        <h5 className="text-[11px] font-bold ml-[13px] text-darkSilverColor">
                          Send Email
                        </h5>
                      </div>
                      <div className="flex items-center mt-[6px]">
                        <input
                          disabled={accessType === "view"}
                          type="checkbox"
                          className="bg-limeGreen"
                          onChange={(e) =>
                            handleCheckBox("notificationOnDueDate", e)
                          }
                          checked={formData.notificationOnDueDate}
                        />
                        <h5 className="text-[11px] font-bold ml-[13px] text-darkSilverColor">
                          Notification On Due Date
                        </h5>
                      </div>
                      {/* <div className='flex items-center mt-[6px]'>
                    <input type="checkbox" className='bg-limeGreen' onChange={(e) => handleCheckBox('sendTextToPay', e)} checked={formData.sendTextToPay} />
                    <h5 className='text-[11px] font-bold ml-[13px] text-darkSilverColor'>
                      Send Text To Pay
                    </h5>
                  </div> */}
                      {/* <div className="w-full flex flex-col flex-1 col-span-12 items-end mt-[30px]  bg-[#6D6D6D] rounded-lg p-2">
                    <h5 className="text-[10px] font-bold text-cultured">
                      Subtotal: $ 0.00
                    </h5>
                    <h5 className="text-[10px] font-bold text-cultured">
                      Add Discount: $ 0.00
                    </h5>
                    <h5 className="text-[10px] font-bold text-cultured">
                      Sales Tax: $ 0.00
                    </h5>
                    <h5 className="text-[12px] font-bold text-cultured">
                      Total: $ 0.00
                    </h5>
                  </div> */}
                    </div>
                  )}
                </div>
              </div>
              <div></div>
              <div className="mb-[61px]">
                {accessType != "view" && (
                  <div className="mt-[12px] flex justify-end col-span-10">
                    <button
                      disabled={savingLoader}
                      onClick={createInvoice}
                      className="relative items-center justify-center text-[10px] font-bold py-[6px] rounded-lg px-[19px] mr-[13px] bg-limeGreen text-btnBlack">
                      {savingLoader ? <div> Loading...</div> : "Save"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        }
      />
    );
  } else return <QuickInvoiceDesktop />;
};

export default Index;

interface CustomInputProps {
  placeholder: string;
  type: string;
  id: string;
  readOnly: boolean;
  onChange: void | any;
  model: string;
  label: string;
  value: any;
  disabled: boolean;
  sign?: string;
}

const Input: React.FC<CustomInputProps> = ({
  placeholder,
  type,
  readOnly,
  id,
  onChange,
  value,
  label,
  disabled,
  sign,
  model,
}) => {
  return (
    <div>
      <label
        htmlFor="dueDate"
        className="text-[12px] font-bold text-darkSilverColor">
        {label}
      </label>
      <div className="flex w-full h-[27px] items-center rounded-lg px-2 bg-[#F4F4F4]">
        <span className="text-[12px]">{sign}</span>
        <input
          id={id}
          type={type}
          readOnly={readOnly}
          placeholder={placeholder}
          className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
          onInput={(e) => onChange(model, e)}
          value={value}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const { mode } = context.params || context.query;
  return {
    props: {
      mode: mode || null, // Provide the ID as a prop
    },
  };
}
