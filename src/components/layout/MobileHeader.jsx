function MobileHeader({ onToggleMenu, lang = 'es', onLangChange }) {
  return (
    <header className="flex md:hidden justify-between items-center px-6 py-4 w-full bg-[#fbf9f1]/85 dark:bg-stone-950/85 backdrop-blur-xl sticky top-0 z-50 border-b border-[#8e706e]/15">
      <h2 className="text-xl font-serif text-[#6b000e] dark:text-red-800" style={{ fontFamily: "'Fjalla One', sans-serif" }}>
        HONG KONG II
      </h2>
      <div className="flex items-center space-x-4">
        <div className="flex space-x-3 text-on-surface">
          <button 
            onClick={() => onLangChange?.('es')}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${lang === 'es' ? 'text-[#960018] dark:text-red-500' : 'text-[#1b1c17] dark:text-stone-300 opacity-80 hover:opacity-100 hover:text-[#960018] dark:hover:text-red-400'}`}
          >
            ES
          </button>
          <button 
            onClick={() => onLangChange?.('en')}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${lang === 'en' ? 'text-[#960018] dark:text-red-500' : 'text-[#1b1c17] dark:text-stone-300 opacity-80 hover:opacity-100 hover:text-[#960018] dark:hover:text-red-400'}`}
          >
            EN
          </button>
          <button 
            onClick={() => onLangChange?.('de')}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${lang === 'de' ? 'text-[#960018] dark:text-red-500' : 'text-[#1b1c17] dark:text-stone-300 opacity-80 hover:opacity-100 hover:text-[#960018] dark:hover:text-red-400'}`}
          >
            DE
          </button>
        </div>
        <button className="text-[#960018] flex items-center" onClick={onToggleMenu}>
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </div>
    </header>
  )
}

export default MobileHeader