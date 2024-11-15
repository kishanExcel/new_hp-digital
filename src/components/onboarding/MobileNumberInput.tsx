import React, { FC, useState } from "react";

interface MobileNumberInputProps {
  onMobileNumberChange: (mobileNumber: string) => void;
}

const MobileNumberInput: FC<MobileNumberInputProps> = ({
  onMobileNumberChange,
}) => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    let numericValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters

    if (numericValue.length > 3 && numericValue.length <= 6) {
      value = `(${numericValue.slice(0, 3)}) ${numericValue.slice(3)}`;
    } else if (numericValue.length > 6) {
      value = `(${numericValue.slice(0, 3)}) ${numericValue.slice(3, 6)}-${numericValue.slice(6, 10)}`;
    }

    setMobileNumber(value);
    onMobileNumberChange(numericValue); // This line sends the unformatted value to the parent component
  };

  return (
    <input
      type="text"
      className="w-full bg-white h-[33px] mt-[13px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] lg:py-8 lg:text-lg rounded-2xl lg:rounded-3xl"
      placeholder="Enter mobile number"
      value={mobileNumber}
      onChange={handleChange}
    />
  );
};

export default MobileNumberInput;
