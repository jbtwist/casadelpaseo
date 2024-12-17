import React from 'react'
import HouseCarousel from './HouseCarousel'
import CheckAvailability from './CheckAvailability'
import LocationMap from './LocationMap'
import { useTranslation } from 'react-i18next'
import { styles } from '../index'

function HouseSection ({ images, url }) {
  const { t } = useTranslation()
  return (
    <>
      <div id="house" className="w-full aspect-[16/9]">
        <HouseCarousel/>
      </div>
    <section className={styles.section.container}>
      {/* Info section */}
      <div className="w-full px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Booking section */}
          <div className={styles.houseSection.bookingSection}>
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
          <div className={styles.houseSection.mapSection}>
            <LocationMap />
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default HouseSection
