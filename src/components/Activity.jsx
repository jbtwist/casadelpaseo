import React from "react";

function Activity({ title, titleDesc, url, src }) {
  return (
    <section className="py-10 px-4 lg:px-8">
      <div>
        <h3 className="text-2xl lg:text-3xl md:text-4xl font-bold text-[#478942] border-b-2 border-[#478942]/60 inline-block pb-2">
          <a href={url}>{title}</a>
        </h3>
      </div>
      <div>
        {titleDesc.map((description, index) => (
          <p
            key={index}
            className="my-6 text-gray-700 text-lg lg:text-base leading-relaxed text-left"
          >
            {description}
          </p>
        ))}
        <div className="flex lg:flex-row flex-col max-w-6xl mx-auto my-5">
          <a href={url} className="w-full">
            <img
              src={src}
              alt={title}
              className="h-64 w-full md:h-80 lg:h-96 xl:h-[30rem] 2xl:h-[35rem]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Activity;
