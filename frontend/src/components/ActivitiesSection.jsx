import React from 'react'

function ActivitySection ({ title, titleDesc, url, src }) {
  return (
    <section className="lg:w-8/12 w-12/12 py-12
                        px-6 my-52 mx-22
                        bg-gray-50
                        place-self-center text-center"
    >
      <ActivityTitleSection title={title} desc={titleDesc} url={url} src={src}/>
    </section>
  )
}

function ActivityTitleSection ({ title, desc, url, src }) {
  return (
    <section className="py-8 lg:py-12 px-4 lg:px-6
    bg-gray-100
      text-left"
    >
      <div className='flex justify-between'>
        <h2 className="text-2xl lg:text-3xl md:text-4xl
             font-bold text-gray-800 text-center
             border-b-4 border-blue-500
             inline-block pb-2 max-w-full"
        >
        <a href={url}>{ title }</a>
        </h2>
      </div>
      <div> {/* TODO: Fix styles */}
        {desc.map((description, index) => (
          <p key={index} className="mt-6
          text-gray-600 text-lg lg:text-base leading-relaxed
          max-w-prose mx-auto"
          >
            {description}
          </p>
        ))}
        <a href={url}><img src={src}/></a>
      </div>
    </section>
  )
}

export default ActivitySection
