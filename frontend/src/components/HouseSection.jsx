import React from 'react';
import SlideShow from './SlideShow';
import CheckAvailability from './CheckAvailability';

function HouseSection({title, titleDesc, images, desc, url}) {
  return (
    <section className="lg:w-8/12 w-12/12 py-12
                        px-6 my-52 mx-22
                        bg-gray-50
                        place-self-center text-center"
    >
      <HouseTitleSection title={title} desc={titleDesc} url={url}/>
      <SlideShow images={images} desc={desc}/>
    </section>
  );
}

function HouseTitleSection({title, desc, url}) {
  return (
    <section className="py-8 lg:py-12 px-4 lg:px-6
                      bg-gray-100
                        text-left"
    >
      <div className='flex justify-between'>
        <h2 className="text-2xl lg:text-3xl md:text-4xl
                       font-bold text-gray-800 text-center
                       border-b-4 border-blue-500
                       inline-block pb-2 max-w-full"
        >
          {title}
        </h2>
        <div className='border-1 border-black rounded bg-white'>
          <CheckAvailability
            url={url}
            icon="/media/Booking.svg"
            alt="Check availability at Booking"
          />
        </div>
      </div>
      <p className="mt-6
                  text-gray-600 text-lg lg:text-base leading-relaxed
                    max-w-prose mx-auto"
      >
        {desc}
      </p>
    </section>
  );
}

export default HouseSection;
