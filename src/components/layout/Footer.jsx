function Footer() {
  return (
    <footer className="bg-[#eae8e0] dark:bg-stone-900 full-width py-12 flex flex-col items-center justify-center space-y-4 w-full">
      <div className="flex space-x-8 mb-4">
        <a className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#5a403f] hover:text-[#1b1c17] transition-colors" href="#">
          Privacy
        </a>
        <a className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#5a403f] hover:text-[#1b1c17] transition-colors" href="#">
          Terms
        </a>
        <a className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#5a403f] hover:text-[#1b1c17] transition-colors" href="#">
          Contact
        </a>
      </div>
      <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
        © 2024 The Imperial Editorial. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer