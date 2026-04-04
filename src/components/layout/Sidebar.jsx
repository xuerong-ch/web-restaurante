function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col justify-between py-12 px-8 h-screen w-64 fixed left-0 top-0 bg-[#fbf9f1] dark:bg-stone-950">
      <div className="flex flex-col space-y-12">
        <div className="space-y-1">
          <h1 className="text-3xl font-serif text-[#6b000e] dark:text-red-800 tracking-tighter">
            The Imperial
          </h1>
          <p className="uppercase tracking-widest font-sans text-xs text-on-surface-variant">
            Editorial
          </p>
        </div>
        <nav className="flex flex-col space-y-6">
          <a className="text-[#960018] dark:text-red-500 font-bold border-b-2 border-[#e9c349] pb-1 uppercase tracking-widest text-xs" href="#portada">
            Portada
          </a>
          <a className="text-[#1b1c17] dark:text-stone-400 opacity-70 hover:opacity-100 transition-opacity hover:text-[#735c00] uppercase tracking-widest text-xs" href="#starters">
            Starters
          </a>
          <a className="text-[#1b1c17] dark:text-stone-400 opacity-70 hover:opacity-100 transition-opacity hover:text-[#735c00] uppercase tracking-widest text-xs" href="#mains">
            Mains
          </a>
          <a className="text-[#1b1c17] dark:text-stone-400 opacity-70 hover:opacity-100 transition-opacity hover:text-[#735c00] uppercase tracking-widest text-xs" href="#desserts">
            Desserts
          </a>
        </nav>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4">
          <button className="text-xs font-label uppercase tracking-widest hover:text-secondary transition-colors">
            ES
          </button>
          <button className="text-xs font-label uppercase tracking-widest opacity-40 hover:text-secondary transition-colors">
            EN
          </button>
          <button className="text-xs font-label uppercase tracking-widest opacity-40 hover:text-secondary transition-colors">
            DE
          </button>
        </div>
        <img 
          alt="The Imperial Editorial Logo" 
          className="w-12 h-12 grayscale opacity-80" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCawTRP70oUF9pPrLtvW1D5ch1vEO3t0D1IlhsdAjsq_5cYkMSykchVay8d4nCidIpENQyHHNdzBQXp7wMKCtE5lFvMvfJMpltN0AiinZMkU_T_PRdQn34vjA7qnbQj0uE1-75wjQZUJkz7IUI4TX26k8pBHj7M4AxdSzUie3CLzsZYjIT6xN_Fk2LTMYiC2dLeQXiGcmI19IJpAXfNEXNBtQ03gPlWDYUENKkPYp7Il3ifIzAzFGBL5mjwfgMFsloTESY8WxBqwVI"
        />
      </div>
    </aside>
  )
}

export default Sidebar