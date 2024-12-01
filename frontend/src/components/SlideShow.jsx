import React, {useState} from 'react';
import {Carousel} from 'flowbite-react';

function SlideShow({id, images, desc}){
  const [idx, setIdx] = useState(0);

  function slideChange(from, to) {
    setIdx(to);
  }

  return (
    <section id="slideshow" className='flex lg:flex-row flex-col border-2'>
      <div className="h-64 w-full lg:h-80 lg:w-8/12 xl:h-96 2xl:h-96 m-3 border-4 ">
        <Carousel slideInterval={5000}>
          {images.map((each, index) => (
            <img key={index} src={images[index]} alt="TODO"/>
          ))}
        </Carousel>
      </div>
      <div className="place-content-center lg:w-4/12 w-full m-3 border-4">
        <p>{desc[idx]}</p>
      </div>`
    </section>
  );
};

function Container ({url}) {
  return (
    <>
      <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${url})` }}/>
      </div>
    </>
  );
}

export default SlideShow;
