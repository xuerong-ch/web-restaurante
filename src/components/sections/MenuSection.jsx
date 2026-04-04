function MenuSection({ variant = 'starters', sectionData }) {
  const { id, subtitle, title, description, featuredDish, items, layoutType } = sectionData

  const bgClass = variant === 'mains' ? 'bg-surface-container-low' : 'bg-surface'

  const renderStarters = () => (
    <>
      {featuredDish && (
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 md:order-1">
            <span className="text-secondary font-label uppercase tracking-[0.1em] text-[10px] mb-4 block">
              Recomendado
            </span>
            <h3 className="text-3xl font-serif text-primary mb-4">
              {featuredDish.name}
            </h3>
            <p className="text-on-surface-variant font-body mb-8 leading-relaxed">
              {featuredDish.description}
            </p>
            <div className="flex items-baseline space-x-4">
              <span className="text-2xl font-serif text-on-surface">{featuredDish.price}</span>
              <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Euros</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              alt={featuredDish.alt} 
              src={featuredDish.image}
            />
          </div>
        </div>
      )}
      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row md:items-baseline justify-between py-6 border-b border-outline-variant/15">
            <div className="max-w-md">
              <h4 className="text-xl font-serif text-on-surface mb-1">{item.name}</h4>
              <p className="text-sm text-on-surface-variant font-body">{item.description}</p>
            </div>
            <span className="text-lg font-serif text-secondary mt-2 md:mt-0">{item.price}</span>
          </div>
        ))}
      </div>
    </>
  )

  const renderMains = () => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
      {featuredDish && (
        <div className="md:col-span-7">
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
            <p className="text-on-surface-variant font-body mb-6 max-w-lg">
              {featuredDish.description}
            </p>
            <span className="text-2xl font-serif text-on-surface">{featuredDish.price}</span>
          </div>
        </div>
      )}
      <div className="md:col-span-5 flex flex-col justify-center">
        <div className="bg-surface p-12 shadow-sm">
          <h3 className="text-2xl font-serif text-on-surface mb-6">Joyas del Wok</h3>
          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={index}>
                <h4 className="text-lg font-serif text-primary">{item.name}</h4>
                <p className="text-xs text-on-surface-variant mt-2">{item.description}</p>
                <p className="text-sm font-serif text-secondary mt-1">{item.price}</p>
                {index < items.length - 1 && <div className="h-px bg-outline-variant/20 mt-8"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderDesserts = () => (
    <div className="grid md:grid-cols-3 gap-12">
      {items.map((item, index) => (
        <div key={index} className="text-center">
          <img 
            className="w-full aspect-square object-cover mb-8" 
            alt={item.alt} 
            src={item.image}
          />
          <h3 className="text-xl font-serif text-on-surface mb-2">{item.name}</h3>
          <p className="text-sm text-on-surface-variant font-body mb-4 px-4">{item.description}</p>
          <span className="text-lg font-serif text-secondary">{item.price}</span>
        </div>
      ))}
    </div>
  )

  const renderContent = () => {
    switch(variant) {
      case 'mains':
        return renderMains()
      case 'desserts':
        return renderDesserts()
      default:
        return renderStarters()
    }
  }

  return (
    <section className={`py-24 px-8 md:px-20 ${bgClass}`} id={id}>
      <div className={`flex flex-col md:flex-row justify-between items-end mb-20 gap-8 ${variant === 'desserts' ? 'hidden' : ''}`}>
        <div className="max-w-xl">
          <span className="text-secondary font-label uppercase tracking-[0.2em] text-[10px] mb-2 block">
            {subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-on-surface">{title}</h2>
        </div>
        {description && (
          <p className="text-on-surface-variant font-body italic text-sm md:text-base max-w-xs text-right">
            {description}
          </p>
        )}
      </div>
      {variant === 'desserts' && (
        <div className="text-center mb-20">
          <span className="text-secondary font-label uppercase tracking-[0.2em] text-[10px] mb-2 block">
            {subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-on-surface">{title}</h2>
        </div>
      )}
      {renderContent()}
    </section>
  )
}

export default MenuSection