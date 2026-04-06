import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import heroFallback from '../../../resources/image_background.png'

const texts = {
  es: {
    legacy: "Tradición y Excelencia",
    title: "Restaurante Chino\n HONG KONG II",
    description: "Cada plato y receta está repleto de años de experiencia. Descubre el verdadero buen sabor y disfruta de la auténtica comida china a tu alcance.",
    call: "Llamar",
    whatsapp: "WhatsApp",
    location: "Dónde Estamos",
    openMap: "Abrir Mapa"
  },
  en: {
    legacy: "Tradition and Excellence",
    title: "Chinese Restaurant\n HONG KONG II",
    description: "Every dish and recipe is filled with years of experience. Discover true great taste and enjoy authentic Chinese food at your fingertips.",
    call: "Call",
    whatsapp: "WhatsApp",
    location: "Find Us",
    openMap: "Open Map"
  },
  de: {
    legacy: "Tradition und Exzellenz",
    title: "Chinesisches Restaurant\n HONG KONG II",
    description: "Jedes Gericht und Rezept ist geprägt von jahrelanger Erfahrung. Entdecken Sie den wahren guten Geschmack und genießen Sie authentisches chinesisches Essen.",
    call: "Anrufen",
    whatsapp: "WhatsApp",
    location: "Standort",
    openMap: "Karte Öffnen"
  }
}

function Hero({ lang = 'es' }) {
  const containerRef = useRef(null)
  const t = texts[lang] || texts.es

  const [subtitle, mainTitle] = t.title.split('\n')
  const contactActions = [
    {
      href: 'tel:+34618085634',
      icon: 'call',
      eyebrow: t.call,
      label: '+34 618 085 634'
    },
    {
      href: 'tel:+34928070233',
      icon: 'call',
      eyebrow: t.call,
      label: '928 070 223'
    },
    {
      href: 'https://wa.me/34618085634',
      icon: 'chat',
      eyebrow: t.whatsapp,
      label: '+34 618 085 634',
      external: true
    },
    {
      href: 'https://maps.app.goo.gl/FEZs4RnNpNkw9Hwv7',
      icon: 'location_on',
      eyebrow: t.location,
      label: t.openMap,
      external: true
    }
  ]

  useGSAP(() => {
    gsap.to('.hero-bg', {
      scale: 1.05,
      duration: 20,
      ease: 'none',
      repeat: -1,
      yoyo: true
    })

    gsap.set('.hero-text, .hero-btn', { y: 30, autoAlpha: 0 })

    const tl = gsap.timeline()

    tl.to('.hero-text', {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.08
    }, 0)

    tl.to('.hero-btn', {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.08
    }, 0)
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden" id="portada">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#140608]"></div>
        <picture>
          <source
            media="(max-width: 900px)"
            srcSet="/hero/hero-mobile.webp"
            type="image/webp"
          />
          <source
            srcSet="/hero/hero-desktop.webp"
            type="image/webp"
          />
          <img 
            className="hero-bg absolute inset-0 block h-full w-full object-cover object-center"
            alt="Cinematic wide shot of a traditional luxury Hong Kong dining room with red silk lanterns, dark wood paneling, and soft atmospheric steam rising"
            src={heroFallback}
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-surface"></div>
      </div>
      <div className="relative z-10 px-6 py-8 md:px-20 max-w-4xl">
        <span className="hero-text text-[#e9c349] font-label uppercase tracking-[0.3em] text-xs mb-4 block opacity-0">
          {t.legacy}
        </span>
        <h1 className="flex flex-col mb-8">
          <span className="hero-text text-4xl md:text-5xl font-serif text-surface mb-2 tracking-wide drop-shadow-md opacity-0">
            {subtitle}
          </span>
          <span 
            className="hero-text text-6xl md:text-8xl text-primary-container leading-none tracking-wider drop-shadow-lg opacity-0" 
            style={{ 
              fontFamily: "'Fjalla One', sans-serif"
            }}
          >
            {mainTitle}
          </span>
        </h1>
        <p className="hero-text text-surface/90 text-lg md:text-xl font-body max-w-md leading-relaxed opacity-0">
          {t.description}
        </p>
        <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
          {contactActions.map(action => (
            <a
              key={action.href}
              href={action.href}
              target={action.external ? '_blank' : undefined}
              rel={action.external ? 'noreferrer' : undefined}
              className="hero-btn group flex items-center gap-3 rounded-2xl border border-white/12 bg-black/20 px-4 py-3 text-surface backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-black/30 opacity-0 invisible"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-surface/90 transition-colors group-hover:bg-white/14">
                <span className="material-symbols-outlined text-[20px]">{action.icon}</span>
              </span>
              <span className="min-w-0 flex-1">
                <span className="mb-1 block text-[10px] font-label uppercase tracking-[0.22em] text-surface/60">
                  {action.eyebrow}
                </span>
                <span className="block text-sm md:text-[15px] font-body font-semibold text-surface/95">
                  {action.label}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
