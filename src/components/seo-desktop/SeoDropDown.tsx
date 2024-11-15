import React, { memo, useCallback, useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  onSelect: (option: Option) => void;
}

const SeoDropDown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  
  const toggleDropdown = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, [setIsOpen]);

  const handleOptionClick = React.useCallback(
    (option: Option) => {
      setSelectedOption(option);
      setIsOpen(false);
      onSelect(option);
    },
    [onSelect]
  );

  return (
    <div className="relative inline-block w-64">
      <div
        className="p-2  rounded cursor-pointer flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <span className="text-[#631363]">
          {selectedOption ? selectedOption.label : "Select an option"}
        </span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </div>
      {isOpen && (
        <div className="absolute mt-1 w-full  border rounded-3xl bg-white  border-gray-900  shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="p-2 m-1 cursor-pointer hover:text-[#631363] text-center hover:bg-gray-100 hover:rounded-3xl"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(SeoDropDown);
