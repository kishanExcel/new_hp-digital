import { BuilderYPSvgs } from "@/svgs/citations-builder/svgs";
import { CircleX } from "lucide-react";
import React, { useCallback, useEffect, useRef } from "react";

interface ModalProps {
  closeModal: () => void;
  fontSize?: string;

}

const typography: React.CSSProperties = {
  color: "#6D6D6D",
  textAlign: "center",
  fontFamily: "Arial",
  fontSize: "11px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};

/**
 * BuilderModel component
 * 
 * Displays a modal with information about Yellow Pages and an option to cancel. 
 * Closes the modal when clicking outside of it.
 * 
 * @param {Function} closeModal - Function to close the modal.
 * @returns {JSX.Element} The rendered modal component.
 */
const BuilderModel = ({ closeModal, fontSize="11px" }: ModalProps): JSX.Element => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      // Close modal if click is outside of the modal content
      if (event.target !== modalRef.current) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    // Add event listener for click outside modal
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal content */}
      <div className="bg-white w-[380px] pt-3 h-[250px] rounded-lg" ref={modalRef}>
        <div className="rounded-3xl gap-3 flex-col flex justify-center items-center">
          <div className="z-20">
            {/* Icon */}
            <BuilderYPSvgs />
          </div>

          <div className="flex w-[340px] z-10 -mt-12  justify-center items-center bg-[#E0E0E0] h-[135px] rounded-2xl">
            {/* Modal text */}
            <span className="flex " style={{...typography,fontSize:fontSize}}>
              Yellow Pages remains one of the most trusted names in business listings. 
              Together with DexKnows and Superpages, this listing network boasts 80 
              million users per month and forms a powerful channel to get your business 
              noticed by prospective customers.
            </span>
          </div>
        </div>
        <div className="flex w-full py-6 justify-end -ml-4 p-2">
          {/* Cancel button */}
          <button
            onClick={closeModal}
            className="px-4 py-2 rounded-2xl bg-[#A0002A]"
            style={{ ...typography, color: "white" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuilderModel;
