import StickyMenu from './components/stickyMenu';
import './App.css';
import Section from './components/Section';

function App() {
  const titlePaseo = "La casa del paseo";

  const descPaseo = `La Casa del Paseo es un alojamiento rural con capacidad para 8 personas con una superficie
  construida de 200 m2 más una superficie ajardinada de 40 m2 y un patio de 80. Dispone de 4 dormitorios, uno en
  planta baja, dos cuartos de baño completos con ducha, cocina grande totalmente equipada y un gran salón con
  chimenea de leña. Situada en una zona privilegiada de Baños de la Encina, en un amplio paseo a 50 metros de la
  ermita del Cristo del Llano que alberga un camarín barroco espectacular.`;

  const imagesPaseo = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  const imagesDescPaseo = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisl ante, pretium a mollis id, fermentum sed arcu. Fusce vel pulvinar urna, ut dignissim risus. Vivamus vehicula imperdiet venenatis. Morbi gravida cursus velit in mattis.",
      "Morbi placerat eget lorem a volutpat. Pellentesque quam urna, bibendum in venenatis lobortis, tempor in mi. Donec justo mi, hendrerit et tincidunt quis, posuere sed erat. Donec vel velit eu tellus dictum malesuada. Aliquam feugiat, felis ut accumsan gravida, libero velit egestas nulla, ac iaculis nulla tortor in tellus. Maecenas dolor nibh, fringilla in odio quis, porttitor sollicitudin sem.",
      "Maecenas sit amet elit nulla. Quisque viverra erat velit, ut vulputate quam molestie non. Proin vehicula sagittis elit eu accumsan. Etiam id viverra nisl. Etiam dui orci, vulputate id libero in, dignissim luctus massa. Nunc maximus mattis laoreet. Proin vel semper urna. Vivamus mollis eros lorem, sit amet volutpat metus molestie vitae."
  ];

  const titleCurro = "La casa del tito curro";

  const descCurro = `Descubre el encanto de nuestra casa rural, un refugio perfecto rodeado de naturaleza.
  Disfruta de cómodas habitaciones, vistas espectaculares y espacios acogedores ideales para desconectar y
  relajarte. Ubicada a pocos minutos de rutas de senderismo, ríos y paisajes únicos, nuestra casa te invita
  a vivir una experiencia inolvidable en plena tranquilidad.`;

  return (
    <>
      <StickyMenu/>
      <Section title={titlePaseo} titleDesc={descPaseo} images={imagesPaseo} desc={imagesDescPaseo}/>
      <Section title={titleCurro} titleDesc={descCurro} images={imagesPaseo} desc={imagesDescPaseo}/>
    </>
  );
}

export default App;
