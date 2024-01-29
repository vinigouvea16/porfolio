import gsap from 'gsap'
import React, { ReactElement, useEffect, useRef } from 'react'

interface MagneticProps {
  children: ReactElement
  animationProps?: {
    duration?: number
    ease?: string
  }
}

export default function Magnetic({
  children,
  animationProps = {},
}: MagneticProps) {
  const magnetic = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const currentMagnetic = magnetic.current

    const xTo = gsap.quickTo(currentMagnetic, 'x', {
      duration: animationProps.duration || 1,
      ease: animationProps.ease || 'elastic.out(1, 0.3)',
    })
    const yTo = gsap.quickTo(currentMagnetic, 'y', {
      duration: animationProps.duration || 1,
      ease: animationProps.ease || 'elastic.out(1, 0.3)',
    })

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const boundingBox = currentMagnetic?.getBoundingClientRect()

      if (boundingBox) {
        const { height, width, left, top } = boundingBox
        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)
        xTo(x)
        yTo(y)
      }
    }

    const handleMouseLeave = () => {
      xTo(0)
      yTo(0)
    }

    if (currentMagnetic) {
      currentMagnetic.addEventListener('mousemove', handleMouseMove)
      currentMagnetic.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (currentMagnetic) {
        currentMagnetic.removeEventListener('mousemove', handleMouseMove)
        currentMagnetic.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [animationProps])

  return React.cloneElement(children, {
    ref: magnetic,
  } as React.HTMLAttributes<HTMLDivElement>)
}
