import React from 'react'
import { Carousel } from 'flowbite-react'
import { styles } from '../index'
import { useTranslation } from 'react-i18next'

function HouseCarousel () {
  const { t } = useTranslation()
  const images = [
    '/media/casadelpaseo/5.jpg',
    '/media/casadelpaseo/6.jpg',
    '/media/casadelpaseo/7.jpg',
    '/media/casadelpaseo/8.jpg',
    '/media/casadelpaseo/9.jpg',
    '/media/casadelpaseo/10.jpg',
    '/media/casadelpaseo/11.jpg',
    '/media/casadelpaseo/12.jpg',
    '/media/casadelpaseo/13.jpg',
    '/media/casadelpaseo/14.jpg',
    '/media/casadelpaseo/15.jpg',
    '/media/casadelpaseo/16.jpg',
    '/media/casadelpaseo/17.jpg',
    '/media/casadelpaseo/18.jpg'
  ]
  return (
    <Carousel slide={false}>
        {/* Slide 1 */}
        <div>
            <img
                src='/media/casadelpaseo/1.jpg'
                alt="picture"
                className="object-cover w-full h-full object-contain"
            />
            <div className={styles.houseSection.slides.slide1}>
                <p className={styles.houseSection.slides.text}>
                {t('paseoDesc1')}
                </p>
            </div>
        </div>
        {/* Slide 2 */}
        <div>
            <img
                src='/media/casadelpaseo/2.jpg'
                alt="picture"
                className="object-cover w-full h-full object-contain"
            />
            <div className={styles.houseSection.slides.slide2}>
                <p className={styles.houseSection.slides.text}>
                {t('paseoDesc2')}
                </p>
            </div>
        </div>
        {/* Slide 3 */}
        <div>
            <img
                src='/media/casadelpaseo/3.jpg'
                alt="picture"
                className="object-cover w-full h-full object-contain"
            />
            <div className={styles.houseSection.slides.slide3}>
                <p className={styles.houseSection.slides.text}>
                {t('paseoDesc3')}
                </p>
            </div>
        </div>
        {/* Slide 4 */}
        <div>
            <img
                src='/media/casadelpaseo/4.jpg'
                alt="picture"
                className="object-cover w-full h-full object-contain"
            />
            <div className={styles.houseSection.slides.slide3}>
                <p className="text-xs landscape:text-sm sm:text-sm sm:landscape:text-base md:text-base md:landscape:text-lg lg:text-lg lg:landscape:text-3xl font-medium sm:font-bold">
                {t('paseoDesc4')}
                </p>
            </div>
        </div>
        {/* Slide 5 onwards */}
        {images.map((image, index) => (
            <div key={index}>
                <img
                    src={image}
                alt="picture"
                className="object-cover w-full h-full object-contain"
            />
            </div>
        ))}
    </Carousel>
  )
}

export default HouseCarousel
