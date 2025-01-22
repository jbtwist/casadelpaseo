import React from "react";
import Activity from "./components/Activity";
import Restaurant from "./components/Restaurant";
import Section from "./components/Section";
import SlideShow from "./components/SlideShow";
import HouseSection from "./components/HouseSection";
import StickyMenu from "./components/StickyMenu";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t } = useTranslation();

  const imagesMeson = [
    process.env.PUBLIC_URL + "/media/meson/icon.jpg",
    process.env.PUBLIC_URL + "/media/meson/outside.jpg",
    process.env.PUBLIC_URL + "/media/meson/inside.jpg",
    process.env.PUBLIC_URL + "/media/meson/cheese.jpg",
    process.env.PUBLIC_URL + "/media/meson/breadcrumbs.jpg",
    process.env.PUBLIC_URL + "/media/meson/lomo.jpg",
    process.env.PUBLIC_URL + "/media/meson/skewers.jpg",
    process.env.PUBLIC_URL + "/media/meson/eggs.jpg",
    process.env.PUBLIC_URL + "/media/meson/ochios.jpg",
    process.env.PUBLIC_URL + "/media/meson/flamenquin.jpg"
  ];

  return (
    <section>
      <StickyMenu />
      <HouseSection />
      <Section id="restaurant" title={t("restaurantTitle")}>
        <Restaurant title={t("mesonTitle")} titleDesc={[t("mesonDesc")]} />
        <SlideShow images={imagesMeson} />
      </Section>
      <Section id="activities" title={t("activitiesTitle")}>
        <Activity
          title={t("castleVisitTitle")}
          titleDesc={[t("castleVisitDescP1"), t("castleVisitDescP2")]}
          src={process.env.PUBLIC_URL + "/media/activities/castle.jpg"}
          url="https://www.laencinaturismo.com/rutas/visita-guiada-castillo-de-banos-de-la-encina/"
        />
        <Activity
          title={t("camarinVisitTitle")}
          titleDesc={[t("camarinVisitDesc")]}
          src={process.env.PUBLIC_URL + "/media/activities/camarin.jpg"}
          url="https://www.laencinaturismo.com/rutas/del-medievo-al-barroco/"
        />
        <Activity
          title={t("sanctuaryTitle")}
          titleDesc={[t("sanctuaryDesc")]}
          src={process.env.PUBLIC_URL + "/media/activities/sanctuary.jpg"}
          url="https://www.laencinaturismo.com/rutas/santuario-de-la-virgen-de-la-encina/"
        />
        <Activity
          title={t("penalosaTitle")}
          titleDesc={[t("penalosaDesc")]}
          src={process.env.PUBLIC_URL + "/media/activities/penalosa.jpg"}
          url="https://www.laencinaturismo.com/rutas/penalosa-un-viaje-al-pasado/"
        />
        <Activity
          title={t("kayakTitle")}
          titleDesc={[t("kayakDesc")]}
          src={process.env.PUBLIC_URL + "/media/activities/kayak.jpg"}
          url="https://www.laencinaturismo.com/rutas/ruta-en-piragua-por-el-rumblar/"
        />
      </Section>
      <Footer />
    </section>
  );
}

export default App;
