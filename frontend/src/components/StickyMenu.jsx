import React, { useState } from 'react'
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

  function changeLang (index) {
    setLang(index)
    i18next.changeLanguage(options[index].id)
  }

  return (
    <Navbar fluid rounded className="sticky top-0 z-50 bg-white shadow-md" id="stickyMenu">
      <Navbar.Brand href="#" className="hover:opacity-90">
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
        <Navbar.Link href="#" className="text-[#478942] hover:text-[#386c35]" active>
          {t('stickyMenu.home')}
        </Navbar.Link>
        <Navbar.Link href="#">{t('houseTitle')}</Navbar.Link>
        <Navbar.Link href="#">{t('mesonTitle')}</Navbar.Link>
        <Navbar.Link href="#">{t('activities')}</Navbar.Link>
        <Navbar.Link href="#">{t('stickyMenu.contact')}</Navbar.Link>
        <Navbar.Link href="#">{t('stickyMenu.about')}</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default StickyMenu
