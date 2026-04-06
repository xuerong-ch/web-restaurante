import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import categoriesMaster from '../../data/categories.json'

gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.config({ ignoreMobileResize: true })

function MenuSection({ variant = 'starters', sectionData = { items: [] }, lang = 'es' }) {
  const containerRef = useRef(null)
  const { id, subtitle, title, description, featuredDish, items = [], layoutType } = sectionData

  useGSAP(() => {
    const elements = gsap.utils.toArray('.menu-animate')
    
    elements.forEach((el) => {
      gsap.fromTo(el, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      )
    })
  }, { scope: containerRef })

  // Refresh ScrollTrigger positions when language changes and layout shifts
  useEffect(() => {
    // A small timeout ensures the DOM has updated its layout sizes before refreshing
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 50)
    return () => clearTimeout(timeout)
  }, [lang])

  const bgClass = variant === 'mains' ? 'bg-surface-container-low' : 'bg-surface'

  const getItemText = (item, field) => {
    return item.translations?.[lang]?.[field] || item.translations?.['es']?.[field] || item[field]
  }

  const renderStarters = () => (
    <>
      {featuredDish && (
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 menu-animate">
          <div className="order-2 lg:order-1">
            <span className="text-secondary font-label uppercase tracking-[0.1em] text-[10px] mb-4 block">
              Recomendado
            </span>
            <h3 className="text-3xl font-serif text-primary mb-4">
              {featuredDish.name}
            </h3>
            <p className="text-on-surface-variant font-body mb-8 leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{ __html: featuredDish.description }} />
            <div className="flex items-baseline space-x-4">
              <span className="text-2xl font-serif text-on-surface">{featuredDish.price}</span>
              <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Euros</span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              alt={featuredDish.alt} 
              src={featuredDish.image}
            />
          </div>
        </div>
      )}
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id} className="py-2 menu-animate">
            <div className="flex justify-between items-end group w-full">
              <span className="text-xl font-serif text-on-surface group-hover:text-primary transition-colors pr-4 max-w-[75%]">
                {getItemText(item, 'title') || item.name}
              </span>
              <div className="flex-1 border-b border-dashed border-outline-variant/40 group-hover:border-primary/40 transition-colors mb-1.5"></div>
              <span className="text-lg font-serif text-secondary shrink-0 pl-4">{item.price}</span>
            </div>
            <div className="max-w-md mt-2">
              <p className="text-sm text-on-surface-variant font-body whitespace-pre-line" dangerouslySetInnerHTML={{ __html: getItemText(item, 'description') || item.description }} />
            </div>
          </div>
        ))}
      </div>
    </>
  )

  const renderMains = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
      {featuredDish && (
        <div className="lg:col-span-7 menu-animate">
          <img 
            className="w-full aspect-video object-cover" 
            alt={featuredDish.alt} 
            src={featuredDish.image}
          />
          <div className="mt-8">
            <span className="text-secondary font-label uppercase tracking-[0.1em] text-[10px] mb-4 block">
              Especialidad de la Casa
            </span>
            <h3 className="text-4xl font-serif text-primary mb-4">{featuredDish.name}</h3>
            <p className="text-on-surface-variant font-body mb-6 max-w-lg" dangerouslySetInnerHTML={{ __html: featuredDish.description }} />
            <span className="text-2xl font-serif text-on-surface">{featuredDish.price}</span>
          </div>
        </div>
      )}
      <div className="lg:col-span-5 flex flex-col justify-center menu-animate">
        <div className="bg-surface p-12 shadow-sm">
          <h3 className="text-2xl font-serif text-on-surface mb-6">Joyas del Wok</h3>
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between items-end group w-full">
                  <span className="text-lg font-serif text-primary group-hover:text-primary transition-colors pr-3 max-w-[75%]">
                    {getItemText(item, 'title') || item.name}
                  </span>
                  <div className="flex-1 border-b border-dashed border-outline-variant/40 group-hover:border-primary/40 transition-colors mb-1.5"></div>
                  <p className="text-sm font-serif text-secondary shrink-0 pl-3">{item.price}</p>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 max-w-[85%] whitespace-pre-line" dangerouslySetInnerHTML={{ __html: getItemText(item, 'description') || item.description }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderDesserts = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {items.map((item) => (
        <div key={item.id} className="text-center menu-animate">
          {item.image && (
            <div className="mb-8 overflow-hidden rounded-[2rem] bg-surface-container-low p-3 shadow-[0_18px_50px_rgba(27,28,23,0.08)] ring-1 ring-black/5">
              <img 
                className="w-full aspect-square rounded-[1.4rem] object-cover object-center transition-transform duration-700 hover:scale-[1.01]" 
                alt={item.alt} 
                src={item.image}
              />
            </div>
          )}
          <h3 className="text-xl font-serif text-on-surface mb-2">{item.name}</h3>
          <p className="text-sm text-on-surface-variant font-body mb-4 px-4 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: getItemText(item, 'description') || item.description }} />
          <span className="text-lg font-serif text-secondary">{item.price}</span>
        </div>
      ))}
    </div>
  )

  const renderDrinks = () => {
    // Agrupar items por subcategoría (por ejemplo: "white_wine", "beer", etc.)
    const groupedItems = items.reduce((acc, item) => {
      const sub = item.subcategory || 'otros'
      if (!acc[sub]) acc[sub] = []
      acc[sub].push(item)
      return acc
    }, {})

    return (
      <div className="space-y-16">
        {Object.entries(groupedItems).map(([subcat, subItems]) => (
          <div key={subcat} className="menu-animate">
            <h3 className="text-2xl font-serif text-primary border-b border-outline-variant/30 pb-4 mb-8">
              {categoriesMaster[subcat]?.[lang] || categoriesMaster[subcat]?.es || subcat}
            </h3>
            <div className="grid lg:grid-cols-2 gap-x-12 gap-y-6">
              {subItems.map((item) => (
                <div key={item.id} className="flex justify-between items-end group w-full">
                  <span className="text-lg font-serif text-on-surface group-hover:text-primary transition-colors pr-3 max-w-[75%]">
                    {getItemText(item, 'title') || item.name}
                  </span>
                  <div className="flex-1 border-b border-dashed border-outline-variant/40 group-hover:border-primary/40 transition-colors mb-1.5"></div>
                  <span className="text-md font-serif text-secondary shrink-0 pl-3">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderContent = () => {
    switch(variant) {
      case 'mains':
        return renderMains()
      case 'desserts':
        return renderDesserts()
      case 'drinks':
        return renderDrinks()
      default:
        return renderStarters()
    }
  }

  return (
    <section ref={containerRef} className={`py-24 px-6 sm:px-12 lg:px-20 ${bgClass}`} id={id}>
      <div className={`flex flex-col lg:flex-row justify-between items-end mb-20 gap-8 menu-animate ${variant === 'desserts' ? 'hidden' : ''}`}>
        <div className="max-w-xl">
          <span className="text-secondary font-label uppercase tracking-[0.2em] text-[10px] mb-2 block">
            {subtitle}
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif italic text-on-surface">{title}</h2>
        </div>
        {description && (
          <p className="text-on-surface-variant font-body italic text-sm lg:text-base max-w-xs text-right">
            {description}
          </p>
        )}
      </div>
      {variant === 'desserts' && (
        <div className="text-center mb-20 menu-animate">
          <span className="text-secondary font-label uppercase tracking-[0.2em] text-[10px] mb-2 block">
            {subtitle}
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif italic text-on-surface">{title}</h2>
        </div>
      )}
      {renderContent()}
    </section>
  )
}

export default MenuSection
