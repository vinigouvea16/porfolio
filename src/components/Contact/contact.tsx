'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Magnetic from '../magnetic'
import styles from './contact.module.scss'
export default function Contact() {
  const [localTime, setLocalTime] = useState(getFormattedLocalTime())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLocalTime(getFormattedLocalTime())
    }, 60000)

    return () => clearInterval(intervalId)
  })

  function getFormattedLocalTime() {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const timezoneOffset = now.getTimezoneOffset() / 60
    const timezoneString =
      timezoneOffset >= 0 ? `GMT+${timezoneOffset}` : `GMT${timezoneOffset}`

    return `${formatTimeComponent(hours)}:${formatTimeComponent(minutes)} ${timezoneString}`
  }

  function formatTimeComponent(component: number) {
    return component < 10 ? `0${component}` : component
  }

  return (
    <footer className={styles.body}>
      <div className={styles.title}>
        <Image
          alt={'image'}
          src="/profile2.png"
          width={100}
          height={100}
          className={styles.img}
        />

        <h2>
          Let&apos;s work <br />
          together
        </h2>
      </div>

      <div className={styles.nav}>
        <Magnetic animationProps={{ duration: 4, ease: 'elastic.out(1, 0.3)' }}>
          <div className={styles.rounded}>
            <p>
              <a href="mailto:contact@tailvinicss.dev">
                contact@tailvinicss.dev
              </a>
            </p>
          </div>
        </Magnetic>
        <Magnetic animationProps={{ duration: 4, ease: 'elastic.out(1, 0.3)' }}>
          <div className={styles.rounded}>
            <p>
              <a href="https://wa.me/+5541996844811">+55 41 99684 4811</a>
            </p>
          </div>
        </Magnetic>
      </div>

      <div className={styles.info}>
        <div className={styles.infoFooter}>
          <span className={styles.span}>
            <h3>Version</h3>
            <p>2024 © Edition</p>
          </span>
          <span className={styles.span}>
            <h3>Local Time</h3>
            <p>{localTime}</p>
          </span>
        </div>

        <div className={styles.socials}>
          <h3>Socials</h3>

          <div className={styles.svgs}>
            <Magnetic>
              <p>
                <a
                  href="https://github.com/vinigouvea16"
                  target="_blank"
                  aria-label="My Github Profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
                  </svg>
                </a>
                {/* GitHub */}
              </p>
            </Magnetic>

            <Magnetic>
              <p>
                <a
                  href="https://www.linkedin.com/in/vinicius-gouvea-969008289/"
                  target="_blank"
                  aria-label="My LinkedIn Profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="64"
                    height="64"
                    viewBox="0 0 50 50"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                </a>
                {/* Linkedin */}
              </p>
            </Magnetic>
          </div>
        </div>
      </div>
    </footer>
  )
}
