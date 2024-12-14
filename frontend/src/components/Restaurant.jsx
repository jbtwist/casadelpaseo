import React from 'react'
import { styles } from '../index'
function Restaurant ({ title, titleDesc }) {
  return (
    <section>
      <div className={styles.titleDesc}>
        <h3 className={styles.title}>
          {title}
        </h3>
      </div>
      <div>
        {titleDesc.map((description, index) => (
          <p key={index} className={styles.titleDesc}>
            {description}
          </p>
        ))}
      </div>
    </section>
  )
}

export default Restaurant
