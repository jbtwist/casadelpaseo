import React from "react";
import { Navbar } from "flowbite-react";


function StickyMenu() {

  return (

    <Navbar fluid rounded className="sticky top-0 z-50">
      <Navbar.Brand href="#">
        <img src="/favicon.svg" className="mr-3 h-6 lg:h-9" alt="Icon" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">La casa del paseo</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>Inicio</Navbar.Link>
        <Navbar.Link href="#">La casa del paseo</Navbar.Link>
        <Navbar.Link href="#">La casa del tito curro</Navbar.Link>
        <Navbar.Link href="#">Meson Santos</Navbar.Link>
        <Navbar.Link href="#">Contacto</Navbar.Link>
        <Navbar.Link href="#">Sobre Nosotros</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default StickyMenu;
