import React from 'react'

function Restaurant ({ descCss, title, titleDesc }) {
  const titleCss = 'text-2xl lg:text-3xl md:text-4xl font-bold text-[#478942] border-b-2 border-[#478942]/60 inline-block pb-2'
  const titleDescCss = 'mt-6 text-gray-700 text-lg lg:text-base leading-relaxed text-left'
  return (
    <section>
      <div className={descCss}>
        <h3 className={titleCss}>
          {title}
        </h3>
      </div>
      <div>
        {titleDesc.map((description, index) => (
          <p key={index} className={titleDescCss}>
            {description}
          </p>
        ))}
      </div>
    </section>
  )
}

export default Restaurant
