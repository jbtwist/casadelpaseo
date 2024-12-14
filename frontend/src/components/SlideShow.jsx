import React, { useState } from 'react'
import { Carousel } from 'flowbite-react'
import { styles } from '../index'

function SlideShow ({ images }) {
  const [idx, setIdx] = useState(0)

  function onSlideChange (index) {
    setIdx(index)
  }
  return (
    <section className="w-full">
      <div className={styles.slideShow.carousel}>
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
