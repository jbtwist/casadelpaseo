import React from "react";
import SlideShow from "./SlideShow"

function Section({title, titleDesc, images, desc}) {

  return (
    // <div className="max-w-screen-xl place-self-center my-52 mx-22" >
    <section className="lg:w-8/12 w-12/12 py-12 px-6 bg-gray-50 place-self-center text-center my-52 mx-22">
      <SectionTitle title={title} desc={titleDesc}/>
      <SlideShow images={images} desc={desc}/>
    </section>
  );
}

function SectionTitle({title, desc}) {
  return (
    <section className="py-8 lg:py-12 px-4 lg:px-6 bg-gray-100">
      <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-gray-800 text-center border-b-4 border-blue-500 inline-block pb-2 max-w-full">
        {title}
      </h2>
      <p className="mt-6 text-gray-600 text-lg lg:text-base leading-relaxed max-w-prose mx-auto">
        {desc}
      </p>
    </section>
  )
}

export default Section;
