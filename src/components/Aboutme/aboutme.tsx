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
    // x !== null && y !== null ? `${x - size / 2}px ${y - size / 2}px` : '0 0'
    x !== null && y !== null ? `${x - size / 2}px ${y - size / 1.2}px` : '0 0'

  // const birthdate = new Date('1994-06-06')
  // const today = new Date()
  // const age =
  //   today.getFullYear() -
  //   birthdate.getFullYear() -
  //   (today.getMonth() < birthdate.getMonth() ||
  //   (today.getMonth() === birthdate.getMonth() &&
  //     today.getDate() < birthdate.getDate())
  //     ? 1
  //     : 0)
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
        <div className={`${styles.mobile} ${styles.mobileHidden}`}>
          -Tap over the text-
        </div>
        <p
          onMouseEnter={() => {
            setIsHovered(true)
          }}
          onMouseLeave={() => {
            setIsHovered(false)
          }}
        >
          Hi, my name is Vinicius
          <br />
          <br />
          I&apos;m a Brazilian FullStack developer navigating my career
          transition. Currently,
          <br /> I am actively involved in freelance projects and eagerly
          exploring new job opportunities. #OpenToWork
        </p>
      </motion.div>

      <div className={styles.body}>
        <div className={styles.mobile}>-Tap over the text-</div>
        <p>
          Hi, my name is Vinicius
          <br />
          <br />
          I&apos;m a Brazilian <span>FrontEnd developer</span> in the midst of a
          career transition. Currently, I am actively involved in freelance
          projects and eagerly exploring new job opportunities.{' '}
          <span>#OpenToWork</span>
        </p>
      </div>
    </main>
  )
}
