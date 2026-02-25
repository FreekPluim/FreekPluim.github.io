"use client";

import React from "react";
import { createPortal } from "react-dom";
import DisableBodyScroll from "./DisableScroll";

interface PortfolioModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const PortfolioItemModal = ({
  isVisible,
  onClose,
  children,
}: PortfolioModalProps) => {
  const portalRoot =
    typeof window !== "undefined"
      ? document.getElementById("modal-root")
      : null;

  if (!portalRoot || !isVisible) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex flex-col justify-center items-center p-10">
      <DisableBodyScroll />
      {/* content wrapper */}
      <div
        className="cursor-pointer absolute inset-0 bg-gray bg-opacity-25 backdrop-blur-sm"
        id="wrapper"
        onClick={() => onClose()}
      />
      <div className="relative z-[10000] md:w-[700px] h-screen flex flex-col">
        <button
          className="cursor-pointer relative place-self-end text-xl"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className=" relative bg-[#23122e] border p-2 rounded-lg flex flex-col justify-center">
          <div className="max-h-150 lg:max-h-200 overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-purple-900 scrollbar-track-[#23122e] scrollbar-thumb-rounded-full">
            {children}
          </div>
        </div>
      </div>
    </div>,
    portalRoot,
  );
};

export default PortfolioItemModal;
