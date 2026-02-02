'use client'

import { cn } from '@/lib/utils'

export interface GradientOrbProps {
  size?: number
  top?: string
  left?: string
  right?: string
  bottom?: string
  className?: string
  blur?: number
  opacity?: number
  colors?: {
    from?: string
    via?: string
    to?: string
  }
  animationDuration?: number
  animationDelay?: number
  enable3D?: boolean
  showOrbitRing?: boolean
}

export function GradientOrb({
  size = 400,
  top,
  left,
  right,
  bottom,
  className,
  blur = 60,
  opacity = 0.4,
  colors = {
    from: '#8B5CF6',
    via: '#A855F7',
    to: '#EC4899',
  },
  animationDuration = 6,
  animationDelay = 0,
  enable3D = false,
  showOrbitRing = false,
}: GradientOrbProps) {
  // 3D sphere effect with multiple layered gradients
  const threeDBackground = `
    radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 20%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(0,0,0,0.3) 0%, transparent 40%),
    radial-gradient(ellipse at 40% 40%, ${colors.from} 0%, transparent 50%),
    radial-gradient(ellipse at center, ${colors.from} 0%, ${colors.via || colors.from} 35%, ${colors.to || colors.via || colors.from} 60%, rgba(124, 58, 237, 0.8) 80%, transparent 100%)
  `

  const simpleBackground = `radial-gradient(circle at center, ${colors.from} 0%, ${colors.via || colors.from} 40%, ${colors.to || colors.via || colors.from} 100%)`

  // 3D glow effect with multiple shadow layers
  const threeDBoxShadow = `
    0 0 60px rgba(139, 92, 246, 0.6),
    0 0 120px rgba(168, 85, 247, 0.4),
    0 0 180px rgba(236, 72, 153, 0.2),
    inset 0 0 60px rgba(255,255,255,0.15),
    inset -20px -20px 60px rgba(0,0,0,0.3)
  `

  const positionStyles: React.CSSProperties = {
    ...(top !== undefined && { top }),
    ...(left !== undefined && { left }),
    ...(right !== undefined && { right }),
    ...(bottom !== undefined && { bottom }),
    width: size,
    height: size,
    filter: enable3D ? `blur(${Math.max(blur * 0.3, 5)}px)` : `blur(${blur}px)`,
    opacity,
    background: enable3D ? threeDBackground : simpleBackground,
    boxShadow: enable3D ? threeDBoxShadow : undefined,
    animationDuration: `${animationDuration}s`,
    animationDelay: `${animationDelay}s`,
  }

  // Orbit ring styles
  const orbitRingSize = size * 1.4
  const orbitRingStyles: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: orbitRingSize,
    height: orbitRingSize,
    transform: 'translate(-50%, -50%) rotateX(70deg)',
    borderRadius: '50%',
    border: '2px solid transparent',
    background: `linear-gradient(90deg, transparent 0%, ${colors.from}40 25%, ${colors.via || colors.from}60 50%, ${colors.to || colors.from}40 75%, transparent 100%) border-box`,
    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    boxShadow: `0 0 20px ${colors.from}40, 0 0 40px ${colors.via || colors.from}30`,
  }

  return (
    <div
      className={cn(
        'absolute pointer-events-none',
        className
      )}
      style={{
        ...(top !== undefined && { top }),
        ...(left !== undefined && { left }),
        ...(right !== undefined && { right }),
        ...(bottom !== undefined && { bottom }),
        width: showOrbitRing ? orbitRingSize : size,
        height: showOrbitRing ? orbitRingSize : size,
      }}
      aria-hidden="true"
    >
      {/* Main sphere */}
      <div
        className={cn(
          'absolute rounded-full',
          'animate-float',
          showOrbitRing && 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        )}
        style={{
          ...positionStyles,
          top: showOrbitRing ? '50%' : undefined,
          left: showOrbitRing ? '50%' : undefined,
          right: showOrbitRing ? undefined : positionStyles.right,
          bottom: showOrbitRing ? undefined : positionStyles.bottom,
        }}
      />

      {/* Orbit ring */}
      {showOrbitRing && enable3D && (
        <div
          className="animate-spin-slow"
          style={{
            ...orbitRingStyles,
            animationDuration: `${animationDuration * 3}s`,
          }}
        />
      )}

      {/* Secondary highlight for extra 3D depth */}
      {enable3D && (
        <div
          className={cn(
            'absolute rounded-full opacity-60',
            showOrbitRing && 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          )}
          style={{
            width: size * 0.3,
            height: size * 0.3,
            top: showOrbitRing ? `calc(50% - ${size * 0.25}px)` : `${size * 0.15}px`,
            left: showOrbitRing ? `calc(50% - ${size * 0.15}px)` : `${size * 0.2}px`,
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      )}
    </div>
  )
}

// Preset orb configurations for common use cases
export function PrimaryOrb({ className, ...props }: Partial<GradientOrbProps>) {
  return (
    <GradientOrb
      size={500}
      colors={{
        from: '#8B5CF6',
        via: '#A855F7',
        to: '#EC4899',
      }}
      blur={80}
      opacity={0.3}
      className={className}
      {...props}
    />
  )
}

export function SecondaryOrb({ className, ...props }: Partial<GradientOrbProps>) {
  return (
    <GradientOrb
      size={300}
      colors={{
        from: '#06B6D4',
        via: '#3B82F6',
        to: '#8B5CF6',
      }}
      blur={60}
      opacity={0.25}
      animationDelay={2}
      className={className}
      {...props}
    />
  )
}

export function AccentOrb({ className, ...props }: Partial<GradientOrbProps>) {
  return (
    <GradientOrb
      size={200}
      colors={{
        from: '#EC4899',
        via: '#F43F5E',
        to: '#F97316',
      }}
      blur={50}
      opacity={0.2}
      animationDelay={4}
      className={className}
      {...props}
    />
  )
}

// 3D sphere preset with orbit ring
export function Sphere3D({ className, ...props }: Partial<GradientOrbProps>) {
  return (
    <GradientOrb
      size={400}
      colors={{
        from: '#8B5CF6',
        via: '#A855F7',
        to: '#EC4899',
      }}
      blur={20}
      opacity={0.9}
      enable3D={true}
      showOrbitRing={true}
      className={className}
      {...props}
    />
  )
}

// 3D sphere without orbit ring
export function Sphere3DSimple({ className, ...props }: Partial<GradientOrbProps>) {
  return (
    <GradientOrb
      size={350}
      colors={{
        from: '#8B5CF6',
        via: '#A855F7',
        to: '#EC4899',
      }}
      blur={15}
      opacity={0.85}
      enable3D={true}
      showOrbitRing={false}
      className={className}
      {...props}
    />
  )
}
