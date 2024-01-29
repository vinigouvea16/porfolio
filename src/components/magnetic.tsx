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
    const xTo = gsap.quickTo(magnetic.current, 'x', {
      duration: animationProps.duration || 1,
      ease: animationProps.ease || 'elastic.out(1, 0.3)',
    })
    const yTo = gsap.quickTo(magnetic.current, 'y', {
      duration: animationProps.duration || 1,
      ease: animationProps.ease || 'elastic.out(1, 0.3)',
    })

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const boundingBox = magnetic.current?.getBoundingClientRect()

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

    if (magnetic.current) {
      magnetic.current.addEventListener('mousemove', handleMouseMove)
      magnetic.current.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (magnetic.current) {
        magnetic.current.removeEventListener('mousemove', handleMouseMove)
        magnetic.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [animationProps])

  return React.cloneElement(children, {
    ref: magnetic,
  } as React.HTMLAttributes<HTMLDivElement>)
}
