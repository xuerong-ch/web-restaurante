const texts = {
  es: {
    rights: "Todos los derechos reservados."
  },
  en: {
    rights: "All rights reserved."
  },
  de: {
    rights: "Alle Rechte vorbehalten."
  },
  cn: {
    rights: "版权所有。"
  }
}

function Footer({ lang = 'es' }) {
  const t = texts[lang] || texts.es

  return (
    <footer className="bg-surface-container-high dark:bg-stone-900 full-width py-12 flex flex-col items-center justify-center space-y-4 w-full">
      <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-on-surface-variant text-center px-4">
        © {new Date().getFullYear()} Restaurante Hongkong. {t.rights}
      </p>
    </footer>
  )
}

export default Footer