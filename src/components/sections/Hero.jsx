function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden" id="portada">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          alt="Cinematic wide shot of a traditional luxury Hong Kong dining room with red silk lanterns, dark wood paneling, and soft atmospheric steam rising" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPB0OXaQQI3SObocjP9DUP8IBmdVfpJe6GUJhOXagne0FnFXs-Q_91x4yhMYBvXDBKscXoUrv6iKh30Df62OcJaUsuy6PdIRWe-XM00kSpjWZiiwrLiexGMDmolGlJqUfFBcYavN-u-AqZsock20GXM-G5YVM8WL13ECo4sypsN3-R7mGGsbR_XGN7uCdN0t_FX8kOYwvIMj-L2Yh_x5YhM-6oZea8uzWBmMd0kHb4D_-Nt1qtxUrumLDv20bqEVtIC9lXm2EBPGs"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent opacity-90 md:opacity-100"></div>
      </div>
      <div className="relative z-10 px-8 md:px-20 max-w-4xl">
        <span className="text-secondary font-label uppercase tracking-[0.3em] text-xs mb-4 block">
          Hong Kong Legacy
        </span>
        <h1 className="text-6xl md:text-8xl font-serif italic text-primary leading-tight mb-6 letter-spacing-tight">
          El Ritual del Sabor Imperial
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl font-body max-w-md leading-relaxed mb-12">
          Una crónica gastronómica que trasciende fronteras. La herencia de la Dinastía Qing reimaginada en el corazón de la modernidad.
        </p>
        <div className="flex items-center space-x-8">
          <button className="bg-primary-container text-on-primary px-10 py-4 font-label uppercase tracking-widest text-xs hover:bg-primary transition-all duration-500">
            Explorar Menú
          </button>
          <div className="hidden md:block h-px w-24 bg-outline-variant"></div>
          <span className="hidden md:block text-xs font-label uppercase tracking-widest text-outline">
            Est. 1924
          </span>
        </div>
      </div>
      <div className="absolute right-12 bottom-0 h-1/2 w-px bg-secondary-fixed-dim hidden lg:block opacity-40"></div>
    </section>
  )
}

export default Hero