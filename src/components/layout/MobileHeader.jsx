function MobileHeader() {
  return (
    <header className="flex md:hidden justify-between items-center px-6 py-4 w-full bg-[#fbf9f1]/85 dark:bg-stone-950/85 backdrop-blur-xl sticky top-0 z-50 border-b border-[#8e706e]/15">
      <h2 className="text-xl font-serif text-[#6b000e] dark:text-red-800">
        The Imperial
      </h2>
      <button className="text-[#960018]">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  )
}

export default MobileHeader