import React, { useState } from "react";
import { Carousel } from "flowbite-react";

function SlideShow({ images }) {
  const [idx, setIdx] = useState(0);

  function onSlideChange(index) {
    setIdx(index);
  }
  return (
    <section className="w-full">
      <div className="aspect-[16/9] w-full portrait:h-[288px] landscape:h-[360px] portrait:sm:h-[432px] landscape:sm:h-[480px] portrait:md:h-[576px] landscape:md:h-[720px] portrait:lg:h-[720px] landscape:lg:h-[864px] xl:h-[864px] mx-auto">
        <Carousel slideInterval={5000} onSlideChange={onSlideChange}>
          {images.map((each, index) => (
            <img
              key={index}
              src={images[index]}
              alt={index}
              className="object-cover w-full h-full"
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default SlideShow;
