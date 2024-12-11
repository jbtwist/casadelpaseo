import React from 'react'
import SlideShow from './SlideShow'
import CheckAvailability from './CheckAvailability'

function HouseSection ({ sectionCss, title, titleDesc, images, url }) {
  const divCss = 'w-full py-10 px-4 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8'
  
  return (
    <section className={sectionCss}>
      <div className={divCss}>
        <div className='w-full'>
          <HouseTitleSection title={title} desc={titleDesc} url={url}/>
        </div>
      </div>
      <div className="space-y-8 px-4 lg:px-8">
        <SlideShow images={images}/>
      </div>
    </section>
  )
}

function HouseTitleSection ({ title, desc, url }) {
  const divCss = 'flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8'
  const titleCss = 'text-2xl lg:text-3xl md:text-4xl font-bold text-[#478942] border-b-2 border-[#478942]/60 inline-block pb-2'
  const descCss = 'mt-6 text-gray-700 text-lg lg:text-base leading-relaxed lg:pr-8'
  const checkAvailabilityCss = 'border border-[#478942] rounded-lg bg-white hover:bg-gray-50 transition-colors duration-200 self-start lg:self-center flex-shrink-0'
  
  return (
    <div className={divCss}>
      <div className='flex-1'>
        <h2 className={titleCss}>{title}</h2>
        <p className={descCss}>{desc}</p>
      </div>
      <div className={checkAvailabilityCss}>
        <CheckAvailability
          url={url}
          icon="/media/Booking.svg"
          alt="Check availability at Booking"
        />
      </div>
    </div>
  )
}

export default HouseSection
