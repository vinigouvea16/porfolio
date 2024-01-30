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
  const heading = useRef<HTMLHeadingElement>(null)
  const titleWrap = useRef<HTMLDivElement>(null)
  const image = useRef<HTMLImageElement>(null)

  useGSAP(
    () => {
      gsap.to('.title', {
        y: 0,
        scale: 1,
        scrollTrigger: {
          trigger: heading.current,
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
        <h2 className="title" ref={heading}>
          {title}
        </h2>

        <Image
          src={imagePath}
          alt="project image"
          width={1440}
          height={720}
          quality={100}
          ref={image}
          className="image"
        />
        {h2Text && <h3 className="h3">{h2Text}</h3>}
        <div className="textWrap" style={{ paddingTop: h2Text ? '0' : '30px' }}>
          <p className="description">{description}</p>
          <div className="rounded">
            <a className="link" href={projectLink} target="_blank">
              Explore the project here
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsComponent
