'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { cn } from '@/lib/utils'

/* ─── Step Data ─── */

interface ProcessStep {
  number: number
  title: string
  description: string
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: 'Get in touch',
    description:
      'Drop us a message or call \u2014 tell us your vision, your goals, and even your wildest business dreams. We\u2019re all ears.',
  },
  {
    number: 2,
    title: 'Map the masterplan',
    description:
      'We turn your ideas into a clear, step-by-step strategy that\u2019s built for action, growth, and results.',
  },
  {
    number: 3,
    title: 'Bring it to life',
    description:
      'From legal setup to branding magic, we handle the details so your business is ready to launch in style.',
  },
  {
    number: 4,
    title: 'Grow without limits',
    description:
      'We stick with you, fine-tuning strategies and unlocking opportunities to take your business to the next level.',
  },
]

const ACCENT = '#DF7AFE'
const ACCENT_DARK = '#814AC8'

/*
 * Each step sits at a fixed angle on the arc.
 * To bring a step to top-center (0°), the arc rotates by -angle.
 *
 * Step 1 at -90° → arc rotates to +90° to center it
 * Step 2 at -30° → arc rotates to +30°
 * Step 3 at +30° → arc rotates to -30°
 * Step 4 at +90° → arc rotates to -90°
 *
 * 60° between adjacent steps = sin(60°) × 1200 ≈ 1040px offset,
 * which pushes neighbors fully off-screen.
 */
const STEP_ANGLES = [-90, -30, 30, 90]

/* ─── Main Component ─── */

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Arc rotation: holds at each step, transitions between them
  const arcRotation = useTransform(
    scrollYProgress,
    [0, 0.18, 0.25, 0.43, 0.50, 0.68, 0.75, 1.0],
    [90, 90, 30, 30, -30, -30, -90, -90]
  )

  return (
    <section
      ref={sectionRef}
      className="relative bg-background scroll-mt-20"
      style={{ height: '450vh', marginTop: '-1px' }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* ── Header ── */}
        <div className="px-6 sm:px-10 lg:px-16 pt-10 sm:pt-14 lg:pt-16 relative z-20">
          {/* OUR PROCESS badge + divider line */}
          <div className="flex items-center gap-4 mb-5 sm:mb-6">
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <div
                className="w-2.5 h-2.5 rounded-[2px]"
                style={{ backgroundColor: ACCENT }}
              />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: ACCENT }}
              >
                Our Process
              </span>
            </div>
            <div className="flex-1 h-px bg-foreground/10" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight max-w-3xl">
            Making{' '}
            <span
              className="inline-block px-2 py-0.5 rounded-md"
              style={{ background: `linear-gradient(135deg, ${ACCENT_DARK}, ${ACCENT})`, color: '#ffffff' }}
            >
              business magic
            </span>{' '}
            in four moves
          </h2>
        </div>

        {/* ── Arc area (desktop) ── */}
        <div className="hidden sm:block flex-1 relative overflow-hidden">
          <DesktopArc arcRotation={arcRotation} />
        </div>

        {/* ── Mobile timeline ── */}
        <div className="flex sm:hidden flex-1 w-full overflow-hidden">
          <MobileTimeline scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   Desktop Arc — rotating circle with step content attached
   ═══════════════════════════════════════════ */

function DesktopArc({
  arcRotation,
}: {
  arcRotation: MotionValue<number>
}) {
  const arcSize = 2400
  const radius = arcSize / 2

  return (
    <div className="relative w-full h-full">
      {/*
       * The giant circle. Only the top ~18% is visible.
       * Positioned so its top edge is ~18% into this container.
       * The circle ROTATES on scroll, carrying all step content with it.
       */}
      {/* Glow effect behind the arc */}
      <div
        className="absolute rounded-full blur-3xl opacity-30"
        style={{
          width: arcSize * 0.95,
          height: arcSize * 0.5,
          left: '50%',
          top: '18%',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(180deg, rgba(129, 74, 200, 0.4) 0%, rgba(223, 122, 254, 0.2) 50%, transparent 100%)',
        }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: arcSize,
          height: arcSize,
          left: '50%',
          top: '18%',
          translateX: '-50%',
          backgroundColor: 'var(--surface-card, #141414)',
          border: '1.5px solid rgba(129, 74, 200, 0.3)',
          boxShadow: '0 -20px 80px -20px rgba(223, 122, 254, 0.3), 0 -10px 40px -10px rgba(129, 74, 200, 0.2), inset 0 -20px 60px -20px rgba(223, 122, 254, 0.1)',
          rotate: arcRotation,
        }}
      >
        {/*
         * Each step's content is a child of the rotating circle.
         * Positioned at its fixed angle on the arc.
         *
         * Wrapper: sits at the circle's center (50%, 50%), rotated to the step's angle.
         * Inner content: translated up by radius to reach the arc edge.
         *
         * When the arc rotates to center this step (total rotation = 0°),
         * the text appears upright. When off-center, text is naturally tilted.
         */}
        {steps.map((step, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: 0,
              height: 0,
              transform: `rotate(${STEP_ANGLES[i]}deg)`,
            }}
          >
            {/* Content block translated to the arc edge */}
            <div
              className="flex flex-col items-center text-center"
              style={{
                width: 400,
                transform: `translateX(-50%) translateY(-${radius - 25}px)`,
              }}
            >
              {/* "STEP" label */}
              <span
                className="text-[11px] font-semibold tracking-[0.3em] uppercase mb-3"
                style={{ color: ACCENT }}
              >
                Step
              </span>

              {/* Step number circle (outlined) */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3.5"
                style={{ border: `1.5px solid ${ACCENT_DARK}` }}
              >
                <span
                  className="text-lg font-bold"
                  style={{ color: ACCENT }}
                >
                  {step.number}
                </span>
              </div>

              {/* Vertical connector line */}
              <div
                className="w-px h-14 mb-5"
                style={{ backgroundColor: ACCENT }}
              />

              {/* Step title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                {step.title}
              </h3>

              {/* Step description */}
              <p className="text-base lg:text-lg text-muted leading-relaxed max-w-[340px] mx-auto">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   Mobile Timeline
   ═══════════════════════════════════════════ */

function MobileTimeline({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>
}) {
  return (
    <div className="relative flex flex-col w-full px-6 py-8">
      {/* Vertical connecting line */}
      <div
        className="absolute left-[38px] top-8 bottom-8 w-px"
        style={{ backgroundColor: `${ACCENT}20` }}
      />

      {steps.map((step, i) => (
        <MobileStep
          key={i}
          step={step}
          index={i}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  )
}

function MobileStep({
  step,
  index,
  scrollYProgress,
}: {
  step: ProcessStep
  index: number
  scrollYProgress: MotionValue<number>
}) {
  const rangeStart = index * 0.25
  const rangeMid = rangeStart + 0.125
  const rangeEnd = (index + 1) * 0.25

  const opacity = useTransform(
    scrollYProgress,
    index === 0
      ? [0, 0.05, rangeEnd]
      : index === 3
        ? [rangeStart, rangeMid, 1]
        : [rangeStart, rangeMid, rangeEnd],
    index === 0
      ? [1, 1, 0.3]
      : index === 3
        ? [0.3, 1, 1]
        : [0.3, 1, 0.3]
  )

  const scale = useTransform(
    scrollYProgress,
    [rangeStart, rangeMid, rangeEnd],
    [0.97, 1, 0.97]
  )

  return (
    <motion.div
      className="flex items-start gap-4 py-6 relative"
      style={{ opacity, scale }}
    >
      <div
        className={cn(
          'flex-shrink-0 w-10 h-10 rounded-full',
          'flex items-center justify-center relative z-10',
          'bg-background'
        )}
        style={{ border: `2px solid ${ACCENT_DARK}` }}
      >
        <span
          className="text-sm font-bold"
          style={{ color: ACCENT }}
        >
          {step.number}
        </span>
      </div>

      <div className="pt-1.5">
        <span
          className="text-[10px] font-semibold tracking-[0.25em] uppercase block mb-1"
          style={{ color: ACCENT }}
        >
          Step {step.number}
        </span>
        <h3 className="text-xl font-bold text-foreground mb-1.5">
          {step.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

export default Process
