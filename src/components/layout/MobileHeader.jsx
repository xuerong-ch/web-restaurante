function MobileHeader({ onToggleMenu = () => {}, lang = 'es', onLangChange = () => {} }) {
  return (
    <header className="flex lg:hidden justify-between items-center px-6 py-4 w-full bg-surface/85 dark:bg-stone-950/85 backdrop-blur-xl sticky top-0 z-50 border-b border-outline/15">
      <h2 className="text-xl font-display text-primary dark:text-red-800">
        HONG KONG II
      </h2>
      <div className="flex items-center space-x-4">
        <div className="flex space-x-3 text-on-surface">
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
        </div>
        <button className="text-primary-container flex items-center" onClick={onToggleMenu}>
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </div>
    </header>
  )
}

export default MobileHeader