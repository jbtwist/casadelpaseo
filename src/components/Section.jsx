import React from "react";

function Section({ id, children, title }) {
  return (
    <section
      className="w-full py-10 px-4 lg:px-8 lg:w-10/12 w-11/12 py-4 my-4 mx-auto shadow-lg rounded-lg place-self-center"
      id={id}
    >
      <div className="w-full py-10 px-4 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="w-full">
          <h1 className="text-4xl lg:text-5xl md:text-6xl font-bold text-[#478942] bg-clip-text text-center transition-transform duration-300 hover:scale-110">
            {title}
          </h1>
        </div>
      </div>
      <div className="my-8 px-4 lg:px-8">{children}</div>
    </section>
  );
}

export default Section;
