'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'relative bg-card rounded-2xl p-6',
          'transition-all duration-300 ease-out',
          // Border
          'border border-border',
          // Hover effect with gradient border
          hover && [
            'group',
            'before:absolute before:inset-0 before:rounded-2xl before:p-[1px]',
            'before:bg-primary',
            'before:opacity-0 before:transition-opacity before:duration-300',
            'hover:before:opacity-100',
            'before:-z-10',
            'hover:border-transparent',
            'hover:shadow-lg hover:shadow-primary/10',
            'hover:-translate-y-1',
          ],
          className
        )}
        {...props}
      >
        {/* Inner content wrapper for gradient border effect */}
        {hover ? (
          <div className="relative z-10 h-full w-full bg-card rounded-[calc(1rem-1px)]">
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    )
  }
)

Card.displayName = 'Card'

// Card Header component
const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 pb-4', className)}
      {...props}
    />
  )
)
CardHeader.displayName = 'CardHeader'

// Card Title component
const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-xl font-semibold leading-none tracking-tight text-foreground', className)}
      {...props}
    />
  )
)
CardTitle.displayName = 'CardTitle'

// Card Description component
const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-muted', className)}
      {...props}
    />
  )
)
CardDescription.displayName = 'CardDescription'

// Card Content component
const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('pt-0', className)}
      {...props}
    />
  )
)
CardContent.displayName = 'CardContent'

// Card Footer component
const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center pt-4', className)}
      {...props}
    />
  )
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
