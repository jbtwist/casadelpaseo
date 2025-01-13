import React from "react";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaDesktop } from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-[#478942] text-white py-8">
      <section id="about" className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-2xl" />
              <span>Paseo Santo Cristo 6, Baños de la Encina, Jaén</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-2xl" />
              <a href="tel:+34690318058">+34 690 318 058</a>
            </div>
          </div>
          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <FaEnvelope className="text-2xl" />
                <a href="mailto:ejemplo@email.com">{t("contactUs")}</a>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <FaDesktop className="text-2xl" />
                <a
                  href="https://www.laencinaturismo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 underline"
                >
                  {t("villageWebsite")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
