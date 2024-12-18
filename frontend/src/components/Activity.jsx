import React from 'react'
import { styles } from '../index'

function Activity ({ title, titleDesc, url, src }) {
  return (
    <section className="py-10 px-4 lg:px-8">
      <div>
        <h3 className={styles.title}>
          <a href={url}>{title}</a>
        </h3>
      </div>
      <div>
        {titleDesc.map((description, index) => (
          <p key={index} className={styles.titleDesc}>
            {description}
          </p>
        ))}
        <div className={styles.activity.container}>
          <a href={url} className="w-full">
            <img src={src} alt={title} className={styles.activity.image}/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Activity
