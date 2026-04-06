import { useState, useMemo, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams, useNavigate, Navigate } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import MobileHeader from './components/layout/MobileHeader'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import MenuSection from './components/sections/MenuSection'
import { useScrollSpy } from './hooks/useScrollSpy'
import categoriesMaster from './data/categories.json'

import menu1 from '../resources/menu_1.json'
import menu2 from '../resources/menu_2.json'
import menu3 from '../resources/menu_3.json'
import menu4 from '../resources/menu_4.json'
import desserts from '../resources/desserts.json'
import drinks from '../resources/drinks.json'
import dimsum from '../resources/dimsum.json'

const staticSectionData = {
  starters: {
    id: 'starters',
    translations: {
      es: {
        subtitle: '— Capítulo I',
        title: 'Starters & Dim Sum',
        description: 'Pequeños bocados de seda diseñados para despertar los sentidos del comensal.'
      },
      en: {
        subtitle: '— Chapter I',
        title: 'Starters & Dim Sum',
        description: 'Small silk bites designed to awaken the diner\'s senses.'
      },
      de: {
        subtitle: '— Kapitel I',
        title: 'Vorspeisen & Dim Sum',
        description: 'Kleine Seidenhappen, entworfen, um die Sinne des Gastes zu wecken.'
      }
    }
  },
  mains: {
    id: 'mains',
    translations: {
      es: {
        subtitle: '— Capítulo II',
        title: 'Principales',
        featuredDishName: 'Pato Laqueado Pekín',
        featuredDishDesc: 'Asado durante 24 horas en horno de leña de frutal. Servido con crepes finos, cebolleta, pepino y nuestra salsa secreta de la casa.'
      },
      en: {
        subtitle: '— Chapter II',
        title: 'Main Courses',
        featuredDishName: 'Peking Roast Duck',
        featuredDishDesc: 'Roasted for 24 hours in a fruit wood oven. Served with thin crepes, chives, cucumber and our secret house sauce.'
      },
      de: {
        subtitle: '— Kapitel II',
        title: 'Hauptgerichte',
        featuredDishName: 'Peking-Ente',
        featuredDishDesc: '24 Stunden im Obstholzofen geröstet. Serviert mit dünnen Crêpes, Schnittlauch, Gurke und unserer geheimen Haussauce.'
      }
    },
    featuredDish: {
      price: 65,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi8TTXuCLH0VenSof-ooVmoEEj2kvOhzsVw9C1hAPT8O8Yb7FjVOlLV7XbBzUlCuXueYVNPin3mOODtg0jkk_C-O_IkOf6gQ-zA9TdzJxXG9DqKjshCJb0QwtFOSDrR1P4LoVwnpIE5kYLeU6tvU_6Sxrk8vVSrMQaxAEn0zv9RxqWdGx-FrAMiSfOrXw9g4CpglGPQvLlc2tDSpQ-wJDL3ZVhU8wa_fe3AW8qUs16KZyYLmTnqF_ptjFoKe2AX5ufe_KF4VJoADU',
      alt: 'Traditional Peking Duck carved with crispy skin on a white porcelain plate, garnished with scallions and hoisin sauce'
    }
  },
  desserts: {
    id: 'desserts',
    translations: {
      es: {
        subtitle: '— El Epílogo',
        title: 'Postres & Tés'
      },
      en: {
        subtitle: '— The Epilogue',
        title: 'Desserts & Teas'
      },
      de: {
        subtitle: '— Der Epilog',
        title: 'Desserts & Tees'
      }
    },
    items: []
  },
  drinks: {
    id: 'drinks',
    translations: {
      es: {
        subtitle: '— El Brindis',
        title: 'Bodega y Bebidas'
      },
      en: {
        subtitle: '— The Toast',
        title: 'Cellar & Drinks'
      },
      de: {
        subtitle: '— Der Toast',
        title: 'Weinkeller & Getränke'
      }
    },
    items: []
  }
}

const drinkCategories = ['white_wine', 'red_wine', 'rose_wine', 'aperitifs', 'liquor', 'spirits', 'beer', 'soft_drinks']

const allJsonData = [menu1, menu2, menu3, menu4, desserts, drinks, dimsum]
const itemsByCategory = {}

allJsonData.forEach(data => {
  const items = data.items || data
  const itemList = Array.isArray(items) ? items : [items]
  
  itemList.forEach(item => {
    if (!item.category) return
    
    // Group drinks
    const isDrink = drinkCategories.includes(item.category)
    const targetCategory = isDrink ? 'drinks' : item.category
    
    if (!itemsByCategory[targetCategory]) {
      itemsByCategory[targetCategory] = []
    }
    
    const mappedItem = {
      id: item.id,
      name: item.translations?.es?.title || item.id, // Fallback original name
      translations: item.translations || {},
      description: item.translations?.es?.description || '',
      price: item.price,
      subcategory: isDrink ? item.category : null // Store original category for grouping
    }
    if (item.image) mappedItem.image = item.image
    if (item.alt) mappedItem.alt = item.alt
    
    itemsByCategory[targetCategory].push(mappedItem)
  })
})

const keysWithoutDrinksAndDimSum = Object.keys(itemsByCategory).filter(k => k !== 'drinks' && k !== 'dim_sum')

// order: drinks, starters, dim_sum, ...rest
const orderedCategories = ['drinks', 'starters', 'dim_sum', ...keysWithoutDrinksAndDimSum.filter(k => k !== 'starters')]
const categoriesIds = ['portada', ...orderedCategories]

function MainContent() {
  const { lang: urlLang } = useParams()
  const navigate = useNavigate()

  // Verify language, if invalid, redirect to /es
  const isValidLang = ['es', 'en', 'de'].includes(urlLang)
  if (!isValidLang) {
    return <Navigate to="/es" replace />
  }

  const lang = urlLang || 'es'

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeId = useScrollSpy(categoriesIds)

  const setLang = (newLang) => {
    // Preserve current hash on language change
    const currentHash = window.location.hash
    navigate(`/${newLang}${currentHash}`, { replace: true })
  }

  // Effect to scroll to hash on load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [lang]) // Re-run if lang changes (optional)

  const sidebarCategories = orderedCategories // without 'portada'

  const sectionsToRender = useMemo(() => {
    return orderedCategories.map(categoryId => {
      const items = itemsByCategory[categoryId] || []
      const staticData = staticSectionData[categoryId] || {}
      const t = staticData.translations?.[lang] || staticData.translations?.es || {}
      
      const sectionItems = staticData.items && staticData.items.length > 0 ? staticData.items : items
      
      let featuredDish = null
      if (staticData.featuredDish) {
        featuredDish = {
          ...staticData.featuredDish,
          name: t.featuredDishName || staticData.featuredDish.name,
          description: t.featuredDishDesc || staticData.featuredDish.description
        }
      }

      const sectionData = {
        id: categoryId,
        subtitle: t.subtitle || `— ${categoriesMaster[categoryId]?.[lang] || categoriesMaster[categoryId]?.es || categoryId}`,
        title: t.title || categoriesMaster[categoryId]?.[lang] || categoriesMaster[categoryId]?.es || categoryId,
        description: t.description || '',
        featuredDish,
        items: sectionItems
      }
      
      let variant = 'starters'
      if (categoryId === 'desserts') variant = 'desserts'
      else if (categoryId === 'mains') variant = 'mains'
      else if (categoryId === 'drinks') variant = 'drinks'

      return (
        <MenuSection 
          key={categoryId} 
          variant={variant} 
          sectionData={sectionData} 
          lang={lang}
        />
      )
    })
  }, [lang])

  return (
    <>
      <Sidebar 
        categories={sidebarCategories} 
        activeId={activeId} 
        lang={lang} 
        onLangChange={setLang}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <MobileHeader 
        onToggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        lang={lang}
        onLangChange={setLang}
      />
      <main className="lg:pl-64">
        <Hero lang={lang} />
        {sectionsToRender}
        <Footer lang={lang} />
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:lang" element={<MainContent />} />
        <Route path="*" element={<Navigate to="/es" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
