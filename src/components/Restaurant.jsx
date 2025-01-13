import React from "react";

function Restaurant({ title, titleDesc }) {
  return (
    <section>
      <div className="my-6 text-gray-700 text-lg lg:text-base leading-relaxed text-left">
        <h3 className="text-2xl lg:text-3xl md:text-4xl font-bold text-[#478942] border-b-2 border-[#478942]/60 inline-block pb-2">
          {title}
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
      </div>
    </section>
  );
}

export default Restaurant;
