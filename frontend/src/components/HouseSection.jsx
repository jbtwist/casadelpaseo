import React from 'react'
import SlideShow from './SlideShow'
import CheckAvailability from './CheckAvailability'
import LocationMap from './LocationMap'
import { useTranslation } from 'react-i18next'

function HouseSection ({ sectionCss, images, url }) {
  const { t } = useTranslation()
  
  return (
    <section className={sectionCss} id="house-section">
      <div className="space-y-8 px-4 lg:px-2">
        <SlideShow images={images}/>
      </div>
      {/* Info section */}
      <div className="w-full px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Booking section */}
          <div className="w-full h-[420px] lg:w-1/2 lg:h-[420px] md:w-[65vw] md:h-[300px] mx-auto bg-white shadow-md p-6 lg:p-4 md:p-2">
            <div className="rounded-lg p-6 lg:p-4 md:p-2">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-lg font-semibold">{t('visitUs')}</h3>
                <CheckAvailability
                  url={url}
                  icon="/media/Booking.svg"
                  alt="Check availability at Booking"
                />
              </div>
            </div>
            <div className="rounded-lg p-6 lg:p-4 md:p-2 mt-6 lg:mt-4 md:mt-2">
              <p className="text-base">{t('contactUs')}</p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-2">
                <li>{t('betterPrices')}</li>
                <li>{t('personalAttention')}</li>
              </ul>
              <a
                href="#contact"
                className="inline-block mt-6 lg:mt-4 md:mt-2 bg-[#478942] text-white px-6 py-2 rounded-lg hover:bg-[#386c35] transition-colors"
              >
                {t('stickyMenu.contact')}
              </a>
            </div>
          </div>

          {/* Map section */}
          <div className="w-full h-[420px] lg:w-1/2 lg:h-[420px] md:w-[65vw] md:h-[300px] mx-auto border border-[#478942] rounded-lg overflow-hidden shadow-md">
            <LocationMap />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HouseSection
