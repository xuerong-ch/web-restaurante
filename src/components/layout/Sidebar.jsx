import categoriesMaster from '../../data/categories.json'

function Sidebar({ categories = ['starters', 'mains', 'desserts'], activeId = 'starters', lang = 'es', onLangChange, isOpen, onClose }) {
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
          className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        ></div>
      )}

      <aside className={`flex flex-col justify-between py-12 px-8 h-screen w-64 fixed left-0 top-0 bg-[#fbf9f1] dark:bg-stone-950 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <div className="flex flex-col h-full overflow-hidden">
        <div className="hidden md:block space-y-1 mb-12 shrink-0">
          <h1 className="text-3xl font-serif text-[#6b000e] dark:text-red-800 tracking-tighter" style={{ fontFamily: "'Fjalla One', sans-serif" }}>
            HONG KONG II
          </h1>
          <p className="uppercase tracking-widest font-sans text-xs text-[#1b1c17] dark:text-stone-400 opacity-70">
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
                className={`font-bold border-b-2 pb-1 uppercase tracking-widest text-xs transition-all cursor-pointer ${
                  isActive 
                    ? 'text-[#960018] dark:text-red-500 border-[#e9c349] opacity-100' 
                    : 'text-[#1b1c17] dark:text-stone-400 border-transparent opacity-70 hover:opacity-100 hover:text-[#735c00]'
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
        <div className="hidden md:flex space-x-4 text-on-surface">
          <button 
            onClick={() => onLangChange('es')}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${lang === 'es' ? 'text-[#960018] dark:text-red-500' : 'text-[#1b1c17] dark:text-stone-300 opacity-80 hover:opacity-100 hover:text-[#960018] dark:hover:text-red-400'}`}
          >
            ES
          </button>
          <button 
            onClick={() => onLangChange('en')}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${lang === 'en' ? 'text-[#960018] dark:text-red-500' : 'text-[#1b1c17] dark:text-stone-300 opacity-80 hover:opacity-100 hover:text-[#960018] dark:hover:text-red-400'}`}
          >
            EN
          </button>
          <button 
            onClick={() => onLangChange('de')}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${lang === 'de' ? 'text-[#960018] dark:text-red-500' : 'text-[#1b1c17] dark:text-stone-300 opacity-80 hover:opacity-100 hover:text-[#960018] dark:hover:text-red-400'}`}
          >
            DE
          </button>
        </div>
      </div>
    </aside>
    </>
  )
}

export default Sidebar