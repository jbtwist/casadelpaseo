import React from 'react'

function Activity ({ descCss, title, titleDesc, url, src }) {
  const imageCss = 'h-64 w-full md:h-80 lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem] object-cover'
  const titleCss = 'text-2xl lg:text-3xl md:text-4xl font-bold text-[#478942] border-b-2 border-[#478942]/60 inline-block pb-2'
  const titleDescCss = 'mt-6 text-gray-700 text-lg lg:text-base leading-relaxed text-left'
  return (
    <section className="py-10 px-8">
      <div className={descCss}>
        <h2 className={titleCss}>
          <a href={url}>{title}</a>
        </h2>
      </div>
      <div>
        {titleDesc.map((description, index) => (
          <p key={index} className={titleDescCss}>
            {description}
          </p>
        ))}
        <div className="mt-6">
          <a href={url}>
            <img src={src} alt={title} className={imageCss}/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Activity
