import { useState, useEffect, useRef } from 'react'

export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(null)
  const observerRef = useRef(null)
  const visibleElements = useRef(new Map())

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return

    // Set initial active id if none is set
    if (!activeId && sectionIds.length > 0) {
      setActiveId(sectionIds[0])
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            visibleElements.current.set(entry.target.id, entry.intersectionRatio)
          } else {
            visibleElements.current.delete(entry.target.id)
          }
        })

        if (visibleElements.current.size > 0) {
          let maxRatio = -1
          let currentActiveId = null
          
          // Map iterates in insertion order, so we might want to prioritize based on DOM order or just maxRatio
          visibleElements.current.forEach((ratio, id) => {
            if (ratio > maxRatio) {
              maxRatio = ratio
              currentActiveId = id
            }
          })

          if (currentActiveId) {
            setActiveId(currentActiveId)
          }
        }
      },
      {
        rootMargin: '-10% 0px -40% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
      }
    )

    sectionIds.forEach(id => {
      const element = document.getElementById(id)
      if (element) observerRef.current.observe(element)
    })

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
      visibleElements.current.clear()
    }
  }, [sectionIds]) // Removed activeId from dependencies so it doesn't reconnect observer on activeId change

  return activeId
}