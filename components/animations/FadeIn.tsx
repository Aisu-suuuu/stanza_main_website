'use client'

import { type ReactNode } from 'react'
import { motion, type Variants, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

type Direction = 'up' | 'down' | 'left' | 'right'

export interface FadeInProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: Direction
  distance?: number
  once?: boolean
  amount?: number | 'some' | 'all'
}

const getDirectionOffset = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'up':
      return { y: distance, x: 0 }
    case 'down':
      return { y: -distance, x: 0 }
    case 'left':
      return { x: distance, y: 0 }
    case 'right':
      return { x: -distance, y: 0 }
    default:
      return { y: distance, x: 0 }
  }
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 40,
  once = true,
  amount = 0.3,
  ...props
}: FadeInProps) {
  const offset = getDirectionOffset(direction, distance)

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...offset,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Shorthand components for common directions
export function FadeInUp(props: Omit<FadeInProps, 'direction'>) {
  return <FadeIn {...props} direction="up" />
}

export function FadeInDown(props: Omit<FadeInProps, 'direction'>) {
  return <FadeIn {...props} direction="down" />
}

export function FadeInLeft(props: Omit<FadeInProps, 'direction'>) {
  return <FadeIn {...props} direction="left" />
}

export function FadeInRight(props: Omit<FadeInProps, 'direction'>) {
  return <FadeIn {...props} direction="right" />
}

// Scale fade in variant
export interface FadeInScaleProps extends Omit<FadeInProps, 'direction' | 'distance'> {
  scale?: number
}

export function FadeInScale({
  children,
  className,
  delay = 0,
  duration = 0.6,
  scale = 0.95,
  once = true,
  amount = 0.3,
  ...props
}: FadeInScaleProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      scale,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
