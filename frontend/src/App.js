import React from 'react'
import BarSection from './components/BarSection'
import HouseSection from './components/HouseSection'
import StickyMenu from './components/stickyMenu'
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

  const imagesDescPaseo = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisl
     ante, pretium a mollis id, fermentum sed arcu. Fusce vel pulvinar urna,
     ut dignissim risus. Vivamus vehicula imperdiet venenatis. Morbi gravida
     cursus velit in mattis.`,
    `Morbi placerat eget lorem a volutpat. Pellentesque quam urna, bibendum in
     venenatis lobortis, tempor in mi. Donec justo mi, hendrerit et tincidunt
     quis, posuere sed erat. Donec vel velit eu tellus dictum malesuada.
     Aliquam feugiat, felis ut accumsan gravida, libero velit egestas nulla,
     ac iaculis nulla tortor in tellus. Maecenas dolor nibh, fringilla in odio
     quis, porttitor sollicitudin sem.`,
    `Maecenas sit amet elit nulla. Quisque viverra erat velit, ut vulputate
     quam molestie non. Proin vehicula sagittis elit eu accumsan. Etiam id
     viverra nisl. Etiam dui orci, vulputate id libero in, dignissim luctus
     massa. Nunc maximus mattis laoreet. Proin vel semper urna. Vivamus mollis
     eros lorem, sit amet volutpat metus molestie vitae.`
  ]

  const paseoBookingUrl = 'https://www.booking.com/hotel/es/la-casa-del-paseo.es.html'

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

  const imagesDescMeson = ['Slide 1', 'Slide 2', 'Slide 3']

  return (
    <section>
      <StickyMenu/>
      <HouseSection
        title={t('houseTitle')}
        titleDesc={t('titleDesc')}
        images={imagesPaseo}
        desc={imagesDescPaseo}
        url={paseoBookingUrl}
      />
      <BarSection
        title={t('mesonTitle')}
        titleDesc={t('mesonDesc')}
        images={imagesMeson}
        desc={imagesDescMeson}
      />
    </section>
  )
}

export default App
