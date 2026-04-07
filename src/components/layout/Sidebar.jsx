import categoriesMaster from '../../data/categories.json'

function Sidebar({ categories = ['starters', 'mains', 'desserts'], activeId = 'starters', lang = 'es', onLangChange, onBrandClick, isOpen, onClose }) {
  const handleScroll = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    if (onClose) onClose()
  }

  return (
    <>
      {/* Overlay para móviles */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        ></div>
      )}

      <aside className={`flex flex-col justify-between py-12 px-8 h-screen w-64 fixed left-0 top-0 bg-surface dark:bg-stone-950 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      <div className="flex flex-col h-full overflow-hidden">
        <div className="hidden lg:block space-y-1 mb-12 shrink-0">
          <button
            type="button"
            onClick={onBrandClick}
            className="text-left text-3xl font-display text-primary dark:text-red-800 tracking-tighter cursor-pointer transition-opacity hover:opacity-85"
          >
            HONG KONG II
          </button>
          <p className="uppercase tracking-widest font-sans text-xs text-on-surface dark:text-stone-400 opacity-70">
            Restaurante Chino
          </p>
        </div>
        <nav className="flex flex-col space-y-6 overflow-y-auto flex-1 pr-2 pb-4 scrollbar-hide">
          {categories.map(categoryId => {
            const isActive = activeId === categoryId
            const name = categoriesMaster[categoryId]?.[lang] || categoriesMaster[categoryId]?.es || categoryId
            
            return (
              <a 
                key={categoryId}
                onClick={(e) => handleScroll(e, categoryId)}
                className={`block font-bold border-b-2 pb-1 uppercase tracking-widest text-xs transition-all cursor-pointer ${
                  isActive 
                    ? 'text-primary-container dark:text-red-500 border-secondary opacity-100' 
                    : 'text-on-surface dark:text-stone-400 border-transparent opacity-70 hover:opacity-100 hover:text-secondary'
                }`}
                href={`#${categoryId}`}
              >
                {name}
              </a>
            )
          })}
        </nav>
      </div>
      <div className="flex flex-col space-y-4 shrink-0 pt-4">
        {/* Los botones de idioma se han movido al MobileHeader en vista móvil, pero los mantenemos en el Sidebar para la vista de PC */}
        <div className="hidden lg:flex space-x-4 text-on-surface">
          <button 
            onClick={() => onLangChange('es')}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${lang === 'es' ? 'text-primary-container dark:text-red-500' : 'text-on-surface dark:text-stone-300 opacity-80 hover:opacity-100 hover:text-primary-container dark:hover:text-red-400'}`}
          >
            ES
          </button>
          <button 
            onClick={() => onLangChange('en')}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${lang === 'en' ? 'text-primary-container dark:text-red-500' : 'text-on-surface dark:text-stone-300 opacity-80 hover:opacity-100 hover:text-primary-container dark:hover:text-red-400'}`}
          >
            EN
          </button>
          <button 
            onClick={() => onLangChange('de')}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${lang === 'de' ? 'text-primary-container dark:text-red-500' : 'text-on-surface dark:text-stone-300 opacity-80 hover:opacity-100 hover:text-primary-container dark:hover:text-red-400'}`}
          >
            DE
          </button>
          <button 
            onClick={() => onLangChange('cn')}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${lang === 'cn' ? 'text-primary-container dark:text-red-500' : 'text-on-surface dark:text-stone-300 opacity-80 hover:opacity-100 hover:text-primary-container dark:hover:text-red-400'}`}
          >
            CN
          </button>
        </div>
      </div>
    </aside>
    </>
  )
}

export default Sidebar
