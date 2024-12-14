import React from 'react'
import { styles } from '../index'

function Section ({ id, children, title }) {
  return (
    <section className={styles.section.container} id={id}>
      <div className={styles.section.header}>
        <div className='w-full'>
          <h1 className={styles.section.title}>{title}</h1>
        </div>
      </div>
      <div className="my-8 px-4 lg:px-8">
        {children}
      </div>
    </section>
  )
}

export default Section
