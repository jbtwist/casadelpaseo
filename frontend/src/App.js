import React from 'react'
import Activity from './components/Activity'
import Restaurant from './components/Restaurant'
import Section from './components/Section'
import SlideShow from './components/SlideShow'
import HouseSection from './components/HouseSection'
import StickyMenu from './components/StickyMenu'
import { useTranslation } from 'react-i18next'
import './App.css'
import './i18n'

function App () {
  const { t } = useTranslation()
  const imagesPaseo = [
    'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
  ]

  const imagesMeson = [
    '/media/meson/icon.jpg',
    '/media/meson/principal.jpg',
    '/media/meson/flamenquin.jpg',
    '/media/meson/escalopin.jpg',
    '/media/meson/cucharro.jpg',
    '/media/meson/gambas.jpg',
    '/media/meson/huevos.jpg',
    '/media/meson/tarta_queso.jpg'
  ]

  const sectionCss = 'w-full py-10 px-4 lg:px-8 lg:w-10/12 w-11/12 py-4 my-4 mx-auto bg-gray-50 shadow-lg rounded-lg place-self-center'
  const sectionTitleCss = 'text-4xl lg:text-5xl md:text-6xl font-bold text-[#478942] bg-clip-text text-center transition-transform duration-300 hover:scale-110'

  return (
    <section>
      <StickyMenu/>
      <HouseSection
        sectionCss={sectionCss}
        title={t('houseTitle')}
        images={imagesPaseo}
        url='https://www.booking.com/hotel/es/la-casa-del-paseo.es.html'
      />
      <Section
        id='restaurant-section'
        sectionCss={sectionCss}
        titleCss={sectionTitleCss}
        title={t('restaurantTitles')}
      >
        <Restaurant
          title={t('mesonTitle')}
          titleDesc={[t('mesonDesc')]}
        />
        <SlideShow images={imagesMeson}/>
      </Section>
      <Section
        id='activities-section'
        sectionCss={sectionCss}
        titleCss={sectionTitleCss}
        title={t('activities')}
      >
        <Activity
          title={t('castleVisitTitle')}
          titleDesc={[t('castleVisitDescP1'), t('castleVisitDescP2')]}
          src='/media/activities/castle.jpg'
          url='https://www.laencinaturismo.com/rutas/visita-guiada-castillo-de-banos-de-la-encina/'
        />
        <Activity
          title={t('camarinVisitTitle')}
          titleDesc={[t('camarinVisitDesc')]}
          src='/media/activities/camarin.jpg'
          url='https://www.laencinaturismo.com/rutas/del-medievo-al-barroco/'
        />
        <Activity
          title={t('sanctuaryTitle')}
          titleDesc={[t('sanctuaryDesc')]}
          src='/media/activities/sanctuary.jpg'
          url='https://www.laencinaturismo.com/rutas/santuario-de-la-virgen-de-la-encina/'
        />
        <Activity
          title={t('penalosaTitle')}
          titleDesc={[t('penalosaDesc')]}
          src='/media/activities/penalosa.jpg'
          url='https://www.laencinaturismo.com/rutas/penalosa-un-viaje-al-pasado/'
        />
        <Activity
          title={t('kayakTitle')}
          titleDesc={[t('kayakDesc')]}
          src='/media/activities/kayak.jpg'
          url='https://www.laencinaturismo.com/rutas/ruta-en-piragua-por-el-rumblar/'
        />
      </Section>
    </section>
  )
}

export default App
