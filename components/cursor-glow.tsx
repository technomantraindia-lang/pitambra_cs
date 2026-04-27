'use client'

import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const mainGlowRef = useRef<HTMLDivElement>(null)
  const ringGlowRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)
  const lastPointerRef = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }

      frameRef.current = requestAnimationFrame(() => {
        const target = e.target as HTMLElement | null
        const isPointer = Boolean(target?.closest('a, button, [role="button"], .group, .cursor-pointer'))
        const mainGlow = mainGlowRef.current
        const ringGlow = ringGlowRef.current

        if (!mainGlow || !ringGlow) return

        mainGlow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
        ringGlow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`

        if (lastPointerRef.current !== isPointer) {
          mainGlow.dataset.pointer = String(isPointer)
          ringGlow.dataset.pointer = String(isPointer)
          lastPointerRef.current = isPointer
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <>
      {/* Main glow cursor */}
      <div
        ref={mainGlowRef}
        data-pointer="false"
        className="cursor-glow pointer-events-none fixed left-0 top-0 z-[9999] h-3.5 w-3.5 rounded-full bg-gradient-to-r from-secondary via-amber-300 to-primary opacity-80 shadow-[0_0_24px_rgba(245,158,11,0.4)] transition-[height,width,opacity] duration-200 data-[pointer=true]:h-[18px] data-[pointer=true]:w-[18px] data-[pointer=true]:opacity-95 max-md:hidden"
      />
      {/* Secondary glow */}
      <div
        ref={ringGlowRef}
        data-pointer="false"
        className="cursor-glow pointer-events-none fixed left-0 top-0 z-[9998] h-12 w-12 rounded-full border-2 border-amber-500/45 bg-[radial-gradient(circle,rgba(245,158,11,0.12),rgba(255,255,255,0))] shadow-[0_0_32px_rgba(245,158,11,0.16)] transition-[height,width,border-color,background,box-shadow] duration-200 data-[pointer=true]:h-[68px] data-[pointer=true]:w-[68px] data-[pointer=true]:border-sky-400/70 data-[pointer=true]:bg-[radial-gradient(circle,rgba(56,189,248,0.16),rgba(255,255,255,0))] data-[pointer=true]:shadow-[0_0_40px_rgba(56,189,248,0.22)] max-md:hidden"
      />
    </>
  )
}
