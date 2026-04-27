'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const revealElements = () => {
      const elements = document.querySelectorAll<HTMLElement>('[data-scroll]')

      if (!('IntersectionObserver' in window)) {
        elements.forEach((element) => element.classList.add('is-visible'))
        return undefined
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.16,
          rootMargin: '0px 0px -70px 0px',
        }
      )

      elements.forEach((element) => {
        element.classList.remove('is-visible')
        observer.observe(element)
      })

      return () => observer.disconnect()
    }

    let cleanup: (() => void) | undefined
    const frame = requestAnimationFrame(() => {
      cleanup = revealElements()
    })

    return () => {
      cancelAnimationFrame(frame)
      cleanup?.()
    }
  }, [pathname])

  return null
}
