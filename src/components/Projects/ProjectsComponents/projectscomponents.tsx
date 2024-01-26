'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'
import './projectscomponents.css'

gsap.registerPlugin(ScrollTrigger)

interface ProjectsComponentProps {
  title: string
  description: string
  h2Text?: string
  imagePath: string
  projectLink?: string
}

const ProjectsComponent: React.FC<ProjectsComponentProps> = ({
  title,
  description,
  h2Text,
  imagePath,
  projectLink,
}) => {
  const main = useRef<HTMLDivElement>(null)
  const span = useRef<HTMLSpanElement>(null)
  const titleWrap = useRef<HTMLDivElement>(null)
  const image = useRef<HTMLImageElement>(null)

  useGSAP(
    () => {
      gsap.to('.title', {
        y: 25,
        scale: 1,
        scrollTrigger: {
          trigger: span.current,
          start: 'bottom bottom',
          end: 'top 40%',
          scrub: true,
        },
      })

      gsap.to(image.current, {
        scale: 1,
        scrollTrigger: {
          trigger: image.current,
          start: 'bottom bottom',
          end: 'top 50%',
          scrub: true,
        },
      })
    },
    { scope: main },
  )

  return (
    <div className="content" ref={main}>
      <div className="titleWrap" ref={titleWrap}>
        <span className="title" ref={span}>
          {title}
        </span>
        <Image
          src={imagePath}
          alt="project image"
          width={1440}
          height={720}
          quality={100}
          ref={image}
          className="image"
        />
        {h2Text && <h2 className="h2">{h2Text}</h2>}
        <div
          className="descriptiondiv"
          style={{ paddingTop: h2Text ? '0' : '30px' }}
        >
          <p className="description">{description}</p>
          <p className="anchor">
            Explore the project{' '}
            <a href={projectLink} target="_blank">
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectsComponent
