'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import useMousePosition from '../../utils/useMousePosition'
import styles from './aboutme.module.scss'

interface MousePosition {
  x: number | null
  y: number | null
}

export function AboutMe() {
  const [isHovered, setIsHovered] = useState(false)
  const mousePosition: MousePosition = useMousePosition() || {
    x: null,
    y: null,
  }

  const { x, y } = mousePosition || { x: null, y: null }
  const size = isHovered ? 300 : 40
  const maskPosition =
    x !== null && y !== null ? `${x - size / 2}px ${y - size / 2}px` : '0 0'

  const birthdate = new Date('1994-06-06')
  const today = new Date()
  const age =
    today.getFullYear() -
    birthdate.getFullYear() -
    (today.getMonth() < birthdate.getMonth() ||
    (today.getMonth() === birthdate.getMonth() &&
      today.getDate() < birthdate.getDate())
      ? 1
      : 0)
  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: maskPosition,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true)
          }}
          onMouseLeave={() => {
            setIsHovered(false)
          }}
        >
          Hi, my name is Vinicius <br />
          <br />
          I&apos;m a {age} yo brazillian FullStack developer transitioning
          careers. Currently, I am engaged in freelance work and open to job
          opportunities #OpenToWork
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          Hi, my name is Vinicius
          <br />
          <br />
          I&apos;m a {age} yo brazillian <span>FrontEnd developer </span>{' '}
          transitioning careers. Currently, I am engaged in freelance work and
          open to job opportunities <span>#OpenToWork</span>
        </p>
      </div>
    </main>
  )
}
