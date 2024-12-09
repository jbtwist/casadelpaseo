import React from 'react'

function Section ({ sectionCss, children, title, desc }) {
  const divCss = 'py-10 px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8'
  const titleCss = 'text-2xl lg:text-3xl md:text-4xl font-bold text-[#478942] border-b-2 border-[#478942]/60 inline-block pb-2'
  const descCss = 'mt-6 text-gray-700 text-lg lg:text-base leading-relaxed lg:pr-8 text-left'
  return (
    <section className={sectionCss}>
      <div className={divCss}>
        <div className='flex-1'>
          <h2 className={titleCss}>{title}</h2>
          <p className={descCss}>{desc}</p>
        </div>
      </div>
      <div className="space-y-8 px-8">
        {children}
      </div>
    </section>
  )
}

export default Section
