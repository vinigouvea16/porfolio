import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

export default function Magnetic({ children, animationProps = {} }) {
  const magnetic = useRef(null)

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, 'x', {
      duration: animationProps.duration || 1,
      ease: animationProps.ease || 'elastic.out(1, 0.3)',
    })
    const yTo = gsap.quickTo(magnetic.current, 'y', {
      duration: animationProps.duration || 1,
      ease: animationProps.ease || 'elastic.out(1, 0.3)',
    })

    magnetic.current.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      xTo(x)
      yTo(y)
    })
    magnetic.current.addEventListener('mouseleave', (e) => {
      xTo(0)
      yTo(0)
    })
  }, [animationProps])

  return React.cloneElement(children, { ref: magnetic })
}
