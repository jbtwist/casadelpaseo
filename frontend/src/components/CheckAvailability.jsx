import React, {useState} from 'react';

const CheckAvailability = ({url, icon, alt}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeSrc, setIframeSrc] = useState('');

  const openModal = (url) => {
    setIframeSrc(url);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setIframeSrc('');
  };
  return (
    <div className='inline-block px-2 py-2'>
      <button
        onClick={(e) => {
          e.preventDefault();
          openModal(url);
        }}
      >
        <span className='inline-block mr-2'>Comprobar Disponibilidad:</span>
        <img className='inline-block size-8'
          src={icon}
          alt={alt}
        />
      </button>
      {/* Modal */}
      {isOpen && (
        <div className='
          fixed inset-0
          bg-black bg-opacity-50
          flex items-center justify-center
          z-50'
          onClick={closeModal}
        >
          <div className='
          bg-white p-6 rounded shadow-lg
          w-full max-w-6xl h-3/4
          overflow-hidden relative'
          >
            <button
              onClick={closeModal}
              className='absolute top-2 right-2 text-red-500 hover:text-red-700'
            >
              &times;
            </button>

            <iframe
              src={iframeSrc}
              title='Embedded Website'
              className='w-full h-full'
              sandbox='allow-scripts allow-same-origin'
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckAvailability;
