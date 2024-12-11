import React from 'react'

function Activity ({ descCss, title, titleDesc, url, src }) {
  const imageCss = 'h-64 w-full md:h-80 lg:h-96 xl:h-[30rem] 2xl:h-[35rem]'
  const titleCss = 'text-2xl lg:text-3xl md:text-4xl font-bold text-[#478942] border-b-2 border-[#478942]/60 inline-block pb-2'
  const titleDescCss = 'mt-6 text-gray-700 text-lg lg:text-base leading-relaxed text-left'
  
  return (
    <section className="py-10 px-4 lg:px-8 ">
      <div className={descCss}>
        <h3 className={titleCss}>
          <a href={url}>{title}</a>
        </h3>
      </div>
      <div>
        {titleDesc.map((description, index) => (
          <p key={index} className={titleDescCss}>
            {description}
          </p>
        ))}
        <div className="flex lg:flex-row flex-col max-w-6xl mx-auto">
          <div className="h-64 w-full md:h-80 lg:h-96 xl:h-[30rem] 2xl:h-[35rem] mx-auto my-3 border-4">
            <a href={url}>
              <img src={src} alt={title} className={imageCss}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activity
