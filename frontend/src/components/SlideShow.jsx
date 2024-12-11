import React, { useState } from 'react'
import { Carousel } from 'flowbite-react'

function SlideShow ({ images }) {
  const [idx, setIdx] = useState(0)

  function onSlideChange (index) {
    setIdx(index)
  }

  const slideShowCss = 'h-64 w-full md:h-80 lg:h-96 xl:h-[30rem] 2xl:h-[35rem] mx-auto my-3 border-4'

  return (
    <section id="slideshow" className='flex lg:flex-row flex-col max-w-6xl mx-auto'>
      <div className={slideShowCss}>
        <Carousel slideInterval={5000} onSlideChange={onSlideChange}>
          {images.map((each, index) => (
            <img key={index} src={images[index]} alt="picture" className='object-cover w-full h-full'/>
          ))}
        </Carousel>
      </div>
    </section>
  )
};

export default SlideShow
