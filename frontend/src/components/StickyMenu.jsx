import React, { useState, useEffect } from 'react'
import { Dropdown, Navbar } from 'flowbite-react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

function StickyMenu () {
  const { t } = useTranslation()

  const options = [
    { id: 'es', src: '/media/spain-flag.svg', alt: 'Spanish', idx: 0 },
    { id: 'en', src: '/media/english-flag.svg', alt: 'English', idx: 1 }
  ]

  const [lang, setLang] = useState(0)
  const [activeSection, setActiveSection] = useState('house-section')

  function changeLang (index) {
    setLang(index)
    i18next.changeLanguage(options[index].id)
  }

  function scrollToSection (e, sectionId) {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  useEffect(() => {
    // IntersectionObserver to detect when a section is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, {
      threshold: 0.10
    })
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])

  return (
    <Navbar fluid rounded className="sticky top-0 z-50 bg-white shadow-md" id="stickyMenu">
      <Navbar.Brand href="#house-section" className="hover:opacity-90">
        <Dropdown
          label={<img src={options[lang].src} alt={options[lang].alt} className="mr-3 h-6 lg:h-9" />}
          dismissOnClick={false}>
          {options.filter((_, idx) => idx !== lang).map((option, index) => (
            <Dropdown.Item
              key={option.alt}
              onClick={() => changeLang(option.idx)}
            >
              <img src={option.src} alt={option.alt} className="mr-3 h-6 lg:h-9"/>
            </Dropdown.Item>
          ))}
        </Dropdown>
        <span className="self-center whitespace-nowrap text-xl font-semibold text-[#478942]">
          {t('houseTitle')}
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="#house-section"
          onClick={(e) => scrollToSection(e, 'house-section')}
          className={`${activeSection === 'house-section' ? 'active text-[#2A5327] font-bold' : 'text-[#478942]'}`}
        >
          <span className="text-xl">{t('houseTitle')}</span>
        </Navbar.Link>
        <Navbar.Link
          href="#restaurant-section"
          onClick={(e) => scrollToSection(e, 'restaurant-section')}
          className={`${activeSection === 'restaurant-section' ? 'active text-[#2A5327] font-bold' : 'text-[#478942]'}`}
        >
          <span className="text-xl">{t('restaurantTitles')}</span>
        </Navbar.Link>
        <Navbar.Link
          href="#activities-section"
          onClick={(e) => scrollToSection(e, 'activities-section')}
          className={`${activeSection === 'activities-section' ? 'active text-[#2A5327] font-bold' : 'text-[#478942]'}`}
        >
          <span className="text-xl">{t('activities')}</span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default StickyMenu
