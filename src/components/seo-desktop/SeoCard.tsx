"use client";
import React from "react";

/**
 * Interface for SeoCard component props.
 * 
 * @property {string} [title] - The title text to be displayed in the card.
 * @property {React.ReactNode} [children] - The child elements to be displayed inside the card.
 * @property {() => void} [onClick] - The function to be called when the card is clicked.
 * @property {boolean} [isActive] - Determines if the card is in an active state.
 */
interface ISeoCard {
  title?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}

/**
 * A card component used for SEO purposes. 
 * It displays a title and child elements, and can be clicked to trigger a function.
 * The card's appearance changes based on its active state.
 * 
 * @param {ISeoCard} props - The props for the component.
 * @returns {JSX.Element} The rendered SeoCard component.
 */
const SeoCard: React.FC<ISeoCard> = ({ title, children, onClick, isActive }: ISeoCard): JSX.Element => {
  return (
    <div className="flex flex-col w-full xl:max-w-lg h-[270px]">
      {/* Title of the card */}
      <span className={`text-xl ml-4 font-bold mb-4 ${isActive ? "text-[#631363]" : "text-[#6D6D6D]"}`}>
        {title}
      </span>
      {/* Container for children elements */}
      <div
        className={`flex w-full h-full rounded-3xl bg-[#E0E0E0] cursor-pointer ${isActive ? "border-2 border-[#631363]" : ""}`}
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
};

export default SeoCard;
