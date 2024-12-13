import React from 'react'

function Section ({ id, sectionCss, titleCss, children, title }) {
  const divCss = 'w-full py-10 px-4 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8'

  return (
    <section className={sectionCss} id={id}>
      <div className={divCss}>
        <div className='w-full'>
          <h1 className={titleCss}>{title}</h1>
        </div>
      </div>
      <div className="space-y-8 px-4 lg:px-8">
        {children}
      </div>
    </section>
  )
}

export default Section
