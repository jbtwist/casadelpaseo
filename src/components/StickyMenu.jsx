import React, { useState, useEffect, useCallback } from "react";
import { Dropdown, Navbar } from "flowbite-react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function StickyMenu() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const defaultLanguage = i18n.language;

  const options = [
    { id: "es", src: "/media/spain-flag.svg", alt: "Spanish", idx: 0 },
    { id: "en", src: "/media/english-flag.svg", alt: "English", idx: 1 },
  ];

  const [lang, setLang] = useState(
    options.findIndex((option) => option.id === defaultLanguage),
  );
  const [activeSection, setActiveSection] = useState("house");
  const [isScrolled, setIsScrolled] = useState(false);

  function changeLang(index) {
    setLang(index);
    i18next.changeLanguage(options[index].id);
  }

  const scrollToSection = useCallback((e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const checkPoint = 100;
      const sections = document.querySelectorAll(
        "#house, #restaurant, #activities, #about",
      );
      const isNearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;
      if (isNearBottom) {
        setActiveSection("about");
        setIsScrolled(true);
        return;
      }
      let currentSection = null;
      // Check if the point is in any of the sections
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= checkPoint && rect.bottom >= checkPoint) {
          currentSection = section.id;
        }
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dynamic classes for the menu
  const navbarClasses = `sticky top-0 z-50 transition-all duration-300 ${
    isScrolled ? "bg-white shadow-md" : "bg-white/80"
  }`;

  return (
    <Navbar fluid rounded className={navbarClasses} id="stickyMenu">
      <Navbar.Brand href="#house" className="hover:opacity-90">
        <Dropdown
          label={
            <img
              src={options[lang].src}
              alt={options[lang].alt}
              className="mr-3 h-6 lg:h-9"
            />
          }
          dismissOnClick={false}
        >
          {options
            .filter((_, idx) => idx !== lang)
            .map((option) => (
              <Dropdown.Item
                key={option.alt}
                onClick={() => changeLang(option.idx)}
              >
                <img
                  src={option.src}
                  alt={option.alt}
                  className="mr-3 h-6 lg:h-9"
                />
              </Dropdown.Item>
            ))}
        </Dropdown>
        <span
          className={`self-center whitespace-nowrap text-xl font-semibold ${"text-[#478942]"}`}
        >
          {t("houseTitle")}
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {["house", "restaurant", "activities", "about"].map((section) => (
          <Navbar.Link
            key={section}
            href={`#${section}`}
            onClick={(e) => scrollToSection(e, section)}
            className={`${
              activeSection === section
                ? "active text-[#2A5327] font-bold"
                : "text-[#478942]"
            }`}
          >
            <span className="text-xl">{t(`${section}Title`)}</span>
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default StickyMenu;
