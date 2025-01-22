import React from "react";
import { Carousel } from "flowbite-react";

function SlideShow({ images }) {
  return (
    <section className="w-full">
      <div className="aspect-[16/9] w-full portrait:h-[288px] landscape:h-[360px] portrait:sm:h-[432px] landscape:sm:h-[480px] portrait:md:h-[576px] landscape:md:h-[720px] portrait:lg:h-[720px] landscape:lg:h-[864px] xl:h-[864px] mx-auto">
        <Carousel slideInterval={3000}>
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
