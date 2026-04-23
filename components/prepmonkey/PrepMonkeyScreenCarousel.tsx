'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Slide = {
  src: string
  caption: string
}

interface PrepMonkeyScreenCarouselProps {
  slides: Slide[]
  autoplayMs?: number
}

const AUTOPLAY_DEFAULT = 4500
const PHONE_WIDTH = 180
const SLIDE_GAP = 32
const SLOT = PHONE_WIDTH + SLIDE_GAP

export default function PrepMonkeyScreenCarousel({
  slides,
  autoplayMs = AUTOPLAY_DEFAULT,
}: PrepMonkeyScreenCarouselProps) {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const count = slides.length

  const goTo = useCallback(
    (next: number) => {
      const normalized = ((next % count) + count) % count
      setActive(normalized)
    },
    [count],
  )

  const goNext = useCallback(() => goTo(active + 1), [active, goTo])
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo])

  useEffect(() => {
    if (isPaused) return
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % count)
    }, autoplayMs)
    return () => window.clearInterval(id)
  }, [isPaused, autoplayMs, count])

  useEffect(() => {
    videoRefs.current.forEach((el, i) => {
      if (!el) return
      if (i === active) {
        el.currentTime = 0
        el.play().catch(() => {})
      } else {
        el.pause()
      }
    })
  }, [active])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
    setIsPaused(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }

  const handleTouchEnd = () => {
    const delta = touchDeltaX.current
    touchStartX.current = null
    touchDeltaX.current = 0
    setIsPaused(false)
    if (Math.abs(delta) < 40) return
    if (delta < 0) goNext()
    else goPrev()
  }

  const getDistance = (i: number) => {
    const raw = i - active
    const half = Math.floor(count / 2)
    if (raw > half) return raw - count
    if (raw < -half) return raw + count
    return raw
  }

  const phoneHeight = Math.round(PHONE_WIDTH * (19.5 / 9))

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="relative mx-auto w-full overflow-hidden"
        style={{ height: phoneHeight + 40 }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, i) => {
          const distance = getDistance(i)
          const abs = Math.abs(distance)
          const isActive = abs === 0
          const scale = isActive ? 1 : abs === 1 ? 0.78 : 0.6
          const opacity = isActive ? 1 : abs === 1 ? 0.5 : 0
          const blur = isActive ? 0 : abs === 1 ? 4 : 8
          const zIndex = isActive ? 30 : abs === 1 ? 20 : 10
          return (
            <div
              key={slide.src}
              className="absolute top-1/2 left-1/2 transition-all ease-out"
              style={{
                width: PHONE_WIDTH,
                transform: `translate(calc(-50% + ${distance * SLOT}px), -50%) scale(${scale})`,
                opacity,
                filter: `blur(${blur}px)`,
                transitionDuration: '550ms',
                zIndex,
                pointerEvents: isActive ? 'auto' : 'none',
              }}
            >
              <PhoneFrame>
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el
                  }}
                  src={slide.src}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  loop
                  autoPlay
                  preload={abs <= 1 ? 'auto' : 'metadata'}
                />
              </PhoneFrame>
            </div>
          )
        })}

        <button
          type="button"
          aria-label="Previous screen"
          onClick={goPrev}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-40 h-11 w-11 md:h-12 md:w-12 rounded-full bg-surface-card/80 border border-border/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-surface-card hover:border-primary/50 transition-all"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next screen"
          onClick={goNext}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-40 h-11 w-11 md:h-12 md:w-12 rounded-full bg-surface-card/80 border border-border/60 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-surface-card hover:border-primary/50 transition-all"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-8 min-h-[4.5rem] text-center px-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="text-base md:text-lg text-foreground font-medium max-w-xl mx-auto"
          >
            {slides[active].caption}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to screen ${i + 1}`}
            onClick={() => goTo(i)}
            className="group relative h-2 rounded-full transition-all duration-300"
            style={{ width: i === active ? 28 : 8 }}
          >
            <span
              className={`block h-full w-full rounded-full transition-colors ${
                i === active ? 'bg-primary' : 'bg-foreground/25 group-hover:bg-foreground/50'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative rounded-[1.8rem] border border-border/60 bg-black shadow-2xl shadow-primary/20 overflow-hidden w-full"
      style={{ aspectRatio: '9 / 19.5' }}
    >
      {children}
    </div>
  )
}
