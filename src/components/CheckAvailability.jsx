import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const CheckAvailability = ({ icon, alt }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");  

  const openModal = (url) => {
    setIframeSrc(url);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setIframeSrc("");
  };
  return (
    <div className="flex flex-col items-stretch gap-4">
      <button
        className="inline-flex items-center justify-center border-2 border-[#478942] my-auto bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors h-fit"
        onClick={(e) => {
          e.preventDefault();
          openModal('https://www.booking.com/hotel/es/la-casa-del-paseo.es.html');
        }}
      >
        <span className="inline-block mr-2">{t("availability")}</span>
        <img className="inline-block size-8" src={icon} alt={alt} />
      </button>
      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-6xl h-3/4 overflow-hidden relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              &times;
            </button>

            <iframe
              src={iframeSrc}
              title="Embedded Website"
              className="w-full h-full"
              sandbox="allow-scripts allow-forms allow-popups"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckAvailability;
