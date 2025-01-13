import React from "react";
import HouseCarousel from "./HouseCarousel";
import CheckAvailability from "./CheckAvailability";
import LocationMap from "./LocationMap";
import { useTranslation } from "react-i18next";

function HouseSection({ images, url }) {
  const { t } = useTranslation();
  return (
    <>
      <div id="house" className="w-full aspect-[16/9]">
        <HouseCarousel />
      </div>
      <section
        id="house"
        className="w-full py-10 px-4 lg:px-8 lg:w-10/12 w-11/12 py-4 my-4 mx-auto shadow-lg rounded-lg place-self-center"
      >
        {/* Info section */}
        <div className="w-full px-4 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Booking section */}
            <div className="w-full h-[420px] lg:w-1/2 lg:h-[420px] md:w-[65vw] md:h-[300px] mx-auto bg-white shadow-md p-6 lg:p-4 md:p-2">
              <div className="p-3 portrait:p-4 landscape:p-3 sm:p-4 md:p-3 lg:p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base portrait:text-lg landscape:text-base sm:text-lg md:text-xl font-bold">
                    {t("visitUs")}
                  </h3>
                  <CheckAvailability
                    url={url}
                    icon="/media/Booking.svg"
                    alt="Check availability at Booking"
                  />
                </div>
              </div>
              <div className="rounded-lg p-3 portrait:p-4 sm:p-4 md:p-3 lg:p-4 mt-3 portrait:mt-4 sm:mt-4 md:mt-3 lg:mt-4">
                <p className="text-base">{t("contactUs")}</p>
                <ul className="list-disc list-inside space-y-1 portrait:space-y-2 mt-2 portrait:mt-3 ml-2">
                  <li>{t("betterPrices")}</li>
                  <li>{t("personalAttention")}</li>
                </ul>
                <a
                  href="#contact"
                  className="inline-block mt-6 lg:mt-4 md:mt-2 bg-[#478942] text-white px-6 py-2 rounded-lg hover:bg-[#386c35] transition-colors"
                >
                  {t("stickyMenu.contact")}
                </a>
              </div>
            </div>

            {/* Map section */}
            <div className="w-full h-[300px] landscape:h-[250px] portrait:h-[300px] sm:landscape:h-[280px] sm:h-[300px] sm:portrait:h-[320px] md:h-[350px] md:landscape:h-[300px] md:w-[65vw] md:portrait:h-[380px] landscape:lg:w-1/2 landscape:lg:h-[420px]  mx-auto rounded-lg overflow-hidden shadow-md">
              <LocationMap />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HouseSection;
