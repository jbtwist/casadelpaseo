import React, { useState } from 'react'
import { Carousel } from 'flowbite-react'

function SlideShow ({ images }) {
  const [idx, setIdx] = useState(0)

  function onSlideChange (index) {
    setIdx(index)
  }

  const slideShowCss = 'w-full h-[40vh] md:h-[70vh] lg:w-full lg:h-[85vh] mx-auto border-4'

  return (
    <section className="w-full">
      <div className={slideShowCss}>
        <Carousel slideInterval={5000} onSlideChange={onSlideChange}>
          {images.map((each, index) => (
            <img
              key={index}
              src={images[index]}
              alt="picture"
              className="object-cover w-full h-full"
            />
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default SlideShow
