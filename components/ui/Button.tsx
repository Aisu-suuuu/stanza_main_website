'use client'

import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    'bg-primary text-primary-foreground',
    'hover:bg-primary/90',
    'shadow-lg shadow-primary/25 hover:shadow-primary/40',
    'border border-transparent'
  ),
  outline: cn(
    'bg-transparent text-foreground',
    'border border-primary hover:border-secondary',
    'hover:bg-primary/10'
  ),
  ghost: cn(
    'bg-transparent text-foreground',
    'border border-transparent',
    'hover:bg-foreground/5'
  ),
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-2.5 text-base gap-2',
  lg: 'px-8 py-3.5 text-lg gap-2.5',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center font-medium',
          'rounded-lg transition-all duration-300 ease-out',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'active:scale-[0.98]',
          // Disabled styles
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100',
          // Variant and size styles
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
