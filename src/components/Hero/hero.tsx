'use client'
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'
import { Wand2 } from 'lucide-react'
import { useRef, useState } from 'react'
import Magnetic from '../magnetic'
import style from './hero.module.scss'

gsap.registerPlugin(TextPlugin)

export function Hero() {
  const [curIndex, setCurIndex] = useState(0)
  const blurbRef = useRef(null)

  const blurbs = [
    '"General jsôn..."',
    '"execute npm 66"',
    '"it\'s over, Anakin! I have the tailwind"',
    '"Well, Hello there!"',
  ]

  const handleNextClick = () => {
    setCurIndex((prevIndex) => (prevIndex + 1) % blurbs.length)

    gsap.to(blurbRef.current, {
      text: {
        value: blurbs[curIndex],
      },
      ease: 'none',
      duration: 1.5,
    })
  }

  return (
    <div className={style.wrap}>
      <div className={style.container}>
        <h2 className={style.title} ref={blurbRef}>
          &quot;Well, Hello there!&quot;
        </h2>
      </div>
      <Magnetic>
        <button
          className={style.button}
          onClick={handleNextClick}
          aria-label="Change phrase"
        >
          <Wand2 />
        </button>
      </Magnetic>
    </div>
  )
}
