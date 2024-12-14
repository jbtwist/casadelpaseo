import React from 'react'
import Activity from './components/Activity'
import Restaurant from './components/Restaurant'
import Section from './components/Section'
import SlideShow from './components/SlideShow'
import HouseSection from './components/HouseSection'
import StickyMenu from './components/StickyMenu'
import Footer from './components/Footer'
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

  return (
    <section>
      <StickyMenu/>
      <HouseSection
        images={imagesPaseo}
        url='https://www.booking.com/hotel/es/la-casa-del-paseo.es.html'
      />
      <Section
        id='restaurant'
        title={t('restaurantTitles')}
      >
        <Restaurant
          title={t('mesonTitle')}
          titleDesc={[t('mesonDesc')]}
        />
        <SlideShow images={imagesMeson}/>
      </Section>
      <Section
        id='activities'
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
      <Footer/>
    </section>
  )
}

export default App
