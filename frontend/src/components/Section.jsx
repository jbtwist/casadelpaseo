import React from 'react'

function Section ({ sectionCss, titleCss, children, title, desc }) {
  // const divCss = 'py-10 px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8'
  const divCss = 'w-full py-10 px-4 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8'

  return (
    <section className={sectionCss}>
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
