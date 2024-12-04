import React from 'react'
import Section from './components/Section'
import StickyMenu from './components/stickyMenu'
import {useTranslation} from 'react-i18next';
import './App.css'
import './i18n'

function App () {
  const {t} = useTranslation();

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

  const titleCurro = 'La casa del tito curro'

  const descCurro = `Descubre el encanto de nuestra casa rural, un refugio
    perfecto rodeado de naturaleza. Disfruta de cómodas habitaciones, vistas
    espectaculares y espacios acogedores ideales para desconectar y relajarte.
    Ubicada a pocos minutos de rutas de senderismo, ríos y paisajes únicos,
    nuestra casa te invita a vivir una experiencia inolvidable en plena
    tranquilidad.`

  return (
    <section>
      <StickyMenu/>
      <Section
        title={t('houseTitle')}
        titleDesc={t('titleDesc')}
        images={imagesPaseo}
        desc={imagesDescPaseo}
        url={paseoBookingUrl}
      />
      <Section
        title={titleCurro}
        titleDesc={descCurro}
        images={imagesPaseo}
        desc={imagesDescPaseo}
      />
    </section>
  )
}

export default App
