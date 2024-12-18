import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { styles } from '../index'

const CheckAvailability = ({ url, icon, alt }) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [iframeSrc, setIframeSrc] = useState('')

  const openModal = (url) => {
    setIframeSrc(url)
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
    setIframeSrc('')
  }
  return (
    <div className='flex flex-col items-stretch gap-4'>
      <button
        className={styles.checkAvailability.button}
        onClick={(e) => {
          e.preventDefault()
          openModal(url)
        }}
      >
        <span className='inline-block mr-2'>{t('availability')}</span>
        <img className='inline-block size-8'
          src={icon}
          alt={alt}
        />
      </button>
      {/* Modal */}
      {isOpen && (
        <div className={styles.checkAvailability.modal.container} onClick={closeModal}>
          <div className={styles.checkAvailability.modal.content}>
            <button
              onClick={closeModal}
              className={styles.checkAvailability.modal.closeButton}
            >
              &times;
            </button>

            <iframe
              src={iframeSrc}
              title='Embedded Website'
              className='w-full h-full'
              sandbox='allow-scripts allow-forms allow-popups'
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

export default CheckAvailability
