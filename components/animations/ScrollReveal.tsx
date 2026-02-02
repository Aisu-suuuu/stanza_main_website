'use client'

import { Children, type ReactNode, type ReactElement, cloneElement, isValidElement } from 'react'
import { motion, type Variants, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface ScrollRevealProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  staggerChildren?: number
  once?: boolean
  amount?: number | 'some' | 'all'
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
}

const getDirectionOffset = (direction: ScrollRevealProps['direction'], distance: number) => {
  switch (direction) {
    case 'up':
      return { y: distance, x: 0 }
    case 'down':
      return { y: -distance, x: 0 }
    case 'left':
      return { x: distance, y: 0 }
    case 'right':
      return { x: -distance, y: 0 }
    case 'none':
      return { x: 0, y: 0 }
    default:
      return { y: distance, x: 0 }
  }
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { delay: number; staggerChildren: number }) => ({
    opacity: 1,
    transition: {
      delayChildren: custom.delay,
      staggerChildren: custom.staggerChildren,
    },
  }),
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.1,
  once = true,
  amount = 0.2,
  direction = 'up',
  distance = 30,
  ...props
}: ScrollRevealProps) {
  const offset = getDirectionOffset(direction, distance)

  const childVariants: Variants = {
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
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  const childArray = Children.toArray(children)

  return (
    <motion.div
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      custom={{ delay, staggerChildren }}
      {...props}
    >
      {childArray.map((child, index) => {
        if (isValidElement(child)) {
          return (
            <motion.div key={index} variants={childVariants}>
              {child}
            </motion.div>
          )
        }
        return child
      })}
    </motion.div>
  )
}

// Individual reveal item for more control
export interface ScrollRevealItemProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: ReactNode
  className?: string
}

export function ScrollRevealItem({ children, className, ...props }: ScrollRevealItemProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Grid-specific stagger reveal
export interface ScrollRevealGridProps extends ScrollRevealProps {
  columns?: number
}

export function ScrollRevealGrid({
  children,
  className,
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.08,
  once = true,
  amount = 0.1,
  columns = 3,
  ...props
}: ScrollRevealGridProps) {
  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  const childArray = Children.toArray(children)

  return (
    <motion.div
      className={cn('grid', className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      custom={{ delay, staggerChildren }}
      {...props}
    >
      {childArray.map((child, index) => {
        if (isValidElement(child)) {
          return (
            <motion.div key={index} variants={childVariants}>
              {child}
            </motion.div>
          )
        }
        return child
      })}
    </motion.div>
  )
}

// List-specific stagger reveal
export interface ScrollRevealListProps extends Omit<ScrollRevealProps, 'direction'> {
  as?: 'ul' | 'ol'
}

export function ScrollRevealList({
  children,
  className,
  delay = 0,
  duration = 0.4,
  staggerChildren = 0.06,
  once = true,
  amount = 0.2,
  as = 'ul',
}: ScrollRevealListProps) {
  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  const childArray = Children.toArray(children)

  if (as === 'ol') {
    return (
      <motion.ol
        className={cn(className)}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        custom={{ delay, staggerChildren }}
      >
        {childArray.map((child, index) => {
          if (isValidElement(child)) {
            return (
              <motion.li key={index} variants={childVariants}>
                {child}
              </motion.li>
            )
          }
          return child
        })}
      </motion.ol>
    )
  }

  return (
    <motion.ul
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      custom={{ delay, staggerChildren }}
    >
      {childArray.map((child, index) => {
        if (isValidElement(child)) {
          return (
            <motion.li key={index} variants={childVariants}>
              {child}
            </motion.li>
          )
        }
        return child
      })}
    </motion.ul>
  )
}
