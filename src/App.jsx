import Sidebar from './components/layout/Sidebar'
import MobileHeader from './components/layout/MobileHeader'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import MenuSection from './components/sections/MenuSection'

const startersData = {
  id: 'starters',
  subtitle: '— Capítulo I',
  title: 'Starters & Dim Sum',
  description: 'Pequeños bocados de seda diseñados para despertar los sentidos del comensal.',
  featuredDish: {
    name: 'Har Gow de Langosta Real',
    description: 'Transparente y delicada masa de almidón de trigo rellena de langosta fresca del Mar de China, jengibre joven y un toque de oro comestible.',
    price: '18',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2cefaJik7Pv5BRmcHjOPtCN6aVxO7U0MeuJrrzNPqCxyjqx10ldP5616k5SkNiFwmUjZ9qgfz_mQYq_W0WXf8eZziqBlGdzJ36sBonlr9UZG5BMGryzRiouHZ9iV7D6yfYOEvGmTT5FIRtVUaCMc4zdb1NuGFMTpMD9OpaSxjeJFa6V5kpWqwbMf-58SqT5_72NPo9QdxDhN_6k2I3nRvp02NrWUSKT_ud4tLI9amKzmHY0H2FoF8gSsx7hvh-5DpCJ8QS1yxW4c',
    alt: 'Close-up of three delicate shrimp dumplings in a bamboo steamer with soft steam rising and dark atmospheric background'
  },
  items: [
    {
      name: 'Siu Mai Tradicional',
      description: 'Cerdo ibérico, setas shiitake y huevas de pez volador.',
      price: '14'
    },
    {
      name: 'Rollos de Primavera Imperial',
      description: 'Vegetales de temporada salteados al wok con salsa de ciruela casera.',
      price: '12'
    },
    {
      name: 'Wonton de Szechuan',
      description: 'Bocadillos de pollo en aceite de chile tostado y sésamo negro.',
      price: '15'
    }
  ]
}

const mainsData = {
  id: 'mains',
  subtitle: '— Capítulo II',
  title: 'Principales',
  featuredDish: {
    name: 'Pato Laqueado Pekín',
    description: 'Asado durante 24 horas en horno de leña de frutal. Servido con crepes finos, cebolleta, pepino y nuestra salsa secreta Imperial.',
    price: '65',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi8TTXuCLH0VenSof-ooVmoEEj2kvOhzsVw9C1hAPT8O8Yb7FjVOlLV7XbBzUlCuXueYVNPin3mOODtg0jkk_C-O_IkOf6gQ-zA9TdzJxXG9DqKjshCJb0QwtFOSDrR1P4LoVwnpIE5kYLeU6tvU_6Sxrk8vVSrMQaxAEn0zv9RxqWdGx-FrAMiSfOrXw9g4CpglGPQvLlc2tDSpQ-wJDL3ZVhU8wa_fe3AW8qUs16KZyYLmTnqF_ptjFoKe2AX5ufe_KF4VJoADU',
    alt: 'Traditional Peking Duck carved with crispy skin on a white porcelain plate, garnished with scallions and hoisin sauce'
  },
  items: [
    {
      name: 'Solomillo al Estilo Cantonés',
      description: 'Dados de solomillo salteados con pimienta negra y ajo fermentado.',
      price: '32'
    },
    {
      name: 'Lubina al Vapor con Soja',
      description: 'Filete de lubina salvaje con jengibre, cilantro y aceite de sésamo caliente.',
      price: '28'
    },
    {
      name: "Bogavante 'Ginger & Scallion'",
      description: 'Bogavante azul salteado al wok con jengibre fresco y cebolleta china.',
      price: '45'
    }
  ]
}

const dessertsData = {
  id: 'desserts',
  subtitle: '— El Epílogo',
  title: 'Postres & Tés',
  items: [
    {
      name: 'Milhojas de Matcha',
      description: 'Capas de hojaldre crujiente con crema ligera de té matcha de grado ceremonial.',
      price: '10',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnIddmccixZA0itoiWcP4ITa23WZsbXUPyEL4N07yhpPVOf3TDnWO9D1SS14kSh4kflHxyHDEeo89jO8KPU0ne4wXImERlCoEWjJtuSeIlERv34PhzOLqOhL22uWU01U3IB0fzJCa5Vwm4706UdagfezoBl8rqlgIx-t0A_Ae69TRBxEtmiLx9xjCTXjDLqQhCCyKJ9r4FsOEq7GkZaLscdjfYI_6-6XHTgMbZMve2rBl2PMcCDiW2AyOMTvmcY29WtHaMtUqPSk0',
      alt: 'Artisanal matcha green tea cake with delicate layers and white chocolate decoration on a minimalist plate'
    },
    {
      name: 'Bolas de Sésamo Calientes',
      description: 'Mochi de arroz glutinoso relleno de pasta de judía roja dulce.',
      price: '8',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO3je_qYsXxl_59nvXWg9o1AYI-YidB_Zss1imG8ugFlt2xe0RBZCKUFGg1fSPFrB4D1fr4QmSIeWKEFvuPU7MsdVngoOzp0cIGxfwQoE05jKwM6LEcGulw-0RJt0LEwAgAqfZ8dc7TvuAeeqdVsADodxEwcnu_LrRrQ4wGxhx0bWefVqiWgcgOvx5mCjTj-lX6Eo8ztp4xBjwmGF-xjjnjiyNd-3577hhjVbDw9DLIt5gELRMaqd-FVsQPdbHLn_OoFsLHEt_JDw',
      alt: 'Golden fried sesame balls coated in seeds, served in a wooden bowl with a warm honey drizzle'
    },
    {
      name: 'Selección de Té Imperial',
      description: 'Tés raros recolectados en las montañas de Yunnan, servidos en ceremonia.',
      price: '12',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB98Gulwy4C-GaOXKIBPOPQM27l0pKTQzH6ADhcyCaiV_I9QMUT1aI7JRZb8seFXrFVe6qxEWj75IcfvPlyURCxmCNMYdUXuFDyRaDWCEJtCzN2ZuJ7rvwhbLxKryM4GmeqIc13HyfXXMQeYbDDVuc5GLNv0mizqr5YN4TVEVsfPq6NfYJgWJ4ElMhjSnvrvya9rb4b8TtBZUIkyt1uSHhax-NUZjuAGFvqbZN8miBx5kTRSYyxQRYswynci0N3kvBOD80qUKo0XA',
      alt: 'Traditional Chinese tea ceremony set with porcelain cups and dark loose leaf tea on a wooden tray'
    }
  ]
}

function ReservationButton() {
  return (
    <button className="fixed bottom-10 right-10 z-40 bg-primary text-on-primary w-20 h-20 shadow-[0_0_32px_rgba(107,0,14,0.15)] flex flex-col items-center justify-center group hover:bg-primary-container transition-all duration-500">
      <span className="material-symbols-outlined text-2xl mb-1 group-hover:scale-110 transition-transform">calendar_month</span>
      <span className="text-[8px] font-label uppercase tracking-widest">Reserva</span>
    </button>
  )
}

function App() {
  return (
    <>
      <Sidebar />
      <MobileHeader />
      <main className="md:pl-64">
        <Hero />
        <MenuSection variant="starters" sectionData={startersData} />
        <MenuSection variant="mains" sectionData={mainsData} />
        <MenuSection variant="desserts" sectionData={dessertsData} />
        <Footer />
      </main>
      <ReservationButton />
    </>
  )
}

export default App