'use client'

import { useMemo } from 'react'
import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface AnimatedTextProps {
  text: string
  className?: string
  animate?: boolean
  delay?: number
  duration?: number
  staggerChildren?: number
  gradient?: boolean
  gradientColors?: {
    from?: string
    via?: string
    to?: string
  }
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { staggerChildren: number; delay: number }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.staggerChildren,
      delayChildren: custom.delay,
    },
  }),
}

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(10px)',
  },
  visible: (custom: { duration: number }) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: custom.duration,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

export function AnimatedText({
  text,
  className,
  animate = true,
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.08,
  gradient = true,
  gradientColors = {
    from: '#814AC8',
    via: '#DF7AFE',
    to: '#DF7AFE',
  },
  as: Component = 'span',
}: AnimatedTextProps) {
  const words = useMemo(() => text.split(' '), [text])

  const gradientStyle = gradient
    ? {
        backgroundImage: `linear-gradient(90deg, ${gradientColors.from} 0%, ${gradientColors.via || gradientColors.from} 50%, ${gradientColors.to || gradientColors.via || gradientColors.from} 100%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }
    : undefined

  // Non-animated version
  if (!animate) {
    return (
      <Component
        className={cn('inline-block', className)}
        style={gradientStyle}
      >
        {text}
      </Component>
    )
  }

  // Animated version with word-by-word reveal
  return (
    <motion.span
      className={cn('inline-flex flex-wrap', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={{ staggerChildren, delay }}
      style={gradientStyle}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block mr-[0.25em]"
          variants={wordVariants}
          custom={{ duration }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Character-by-character animation variant
export interface AnimatedCharactersProps extends Omit<AnimatedTextProps, 'staggerChildren'> {
  staggerChildren?: number
}

export function AnimatedCharacters({
  text,
  className,
  animate = true,
  delay = 0,
  duration = 0.3,
  staggerChildren = 0.02,
  gradient = true,
  gradientColors = {
    from: '#814AC8',
    via: '#DF7AFE',
    to: '#DF7AFE',
  },
  as: Component = 'span',
}: AnimatedCharactersProps) {
  const characters = useMemo(() => text.split(''), [text])

  const gradientStyle = gradient
    ? {
        backgroundImage: `linear-gradient(90deg, ${gradientColors.from} 0%, ${gradientColors.via || gradientColors.from} 50%, ${gradientColors.to || gradientColors.via || gradientColors.from} 100%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }
    : undefined

  if (!animate) {
    return (
      <Component
        className={cn('inline-block', className)}
        style={gradientStyle}
      >
        {text}
      </Component>
    )
  }

  const charVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <motion.span
      className={cn('inline-flex', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={{ staggerChildren, delay }}
      style={gradientStyle}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block"
          variants={charVariants}
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
