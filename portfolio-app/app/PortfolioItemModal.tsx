"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const PortfolioItemModal = ({ isVisible, onClose, children }) => {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalRoot(document.getElementById("modal-root"));
  }, []);

  if (!portalRoot || !isVisible) return null;

  const handleClose = (e) => {
    onClose();
    console.log(isVisible);
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex justify-center items-center">
      {/* content wrapper */}
      <div
        className="cursor-pointer absolute inset-0 bg-gray bg-opacity-25 backdrop-blur-sm"
        id="wrapper"
        onClick={() => onClose()}
      />
      <div className="relative z-[10000] w-[700px] max-h-210 flex flex-col">
        <button
          className="cursor-pointer relative place-self-end text-xl"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className=" relative bg-[#23122e] border p-2 rounded-lg flex flex-col justify-center">
          <div className="max-h-200 overflow-hidden scroll">{children}</div>
        </div>
      </div>
    </div>,
    portalRoot,
  );
};

export default PortfolioItemModal;
