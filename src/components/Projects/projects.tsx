'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import ProjectsComponent from './ProjectsComponents/projectscomponents'
import './projects.css'

export default function Projects() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })
  const height = useTransform(scrollYProgress, [0, 1], [100, 0])

  const projectsData = [
    {
      title: 'JavaDelight',
      h2Text: 'ジャワディライト',
      description:
        "JavaDelight is a fictional Japanese coffee shop project that I developed, seamlessly blending modern aesthetics with traditional elements. Inspired by the Neo-brutalist style and its harmony with the Japanese alphabet, the project showcases a visually captivating layout. Emphasizing creative design and cultural richness, JavaDelight incorporates smart componentization and state management techniques learned from Rocketseat's Ignite course. The technical aspects involve state immutability, local storage for persistence, and efficient ReactJS practices. Key functionalities include dynamic product listing, intuitive cart management, personalized address forms, and automatic total value calculation. This project, reflects a passion for web development and a commitment to tackling new challenges.",
      imagePath: '/javadelight1.png',
      projectLink: 'https://java-delight.vercel.app/',
    },
    {
      title: 'Upload.Ai',
      description:
        'This application allow us to effortlessly upload videos, perform on-the-fly transcriptions right in the browser, and generate concise summaries and title suggestions. With the freedom to customize prompts for the integrated OpenAI AI, it opens up endless possibilities for creative outcomes - perfect for content creators.',
      projectLink: 'https://upload-ai-theta.vercel.app/',
      imagePath: '/uploadai1.png',
    },
    {
      title: 'Food Explorer',
      description:
        'This project is a CRUD system featuring an interactive menu designed for the fictional restaurant Food Explorer. It showcases the practical application of acquired knowledge throughout my FullStack course. In development, I utilized React with Styled Components to craft an engaging and highly interactive user interface. The back-end was built using Node.js with Express to ensure the efficiency and robustness of the API. The project offers different access levels for users. They can explore common application routes, add dishes to favorites, place items in the cart, and view dish details. Additionally, administrators possess special privileges, enabling them to view detailed dish information, add new dishes, edit existing dish details, and remove items from the system. This project represents a comprehensive web development experience, covering both front-end and back-end aspects to create a versatile and efficient application. To test it you can either create your own account or access as Admin to check the differences between the routes, using the email: sa@email.com password: 123',
      imagePath: '/foodexplorer.png',
      projectLink: 'https://foodexplorervinigouvea.netlify.app/',
    },
  ]

  return (
    <div className="containerProject" ref={container}>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectsComponent {...project} />
          {index !== projectsData.length - 1 && (
            <div className="separatorLine" />
          )}
        </React.Fragment>
      ))}
      <motion.div style={{ height }} className="circleContainer">
        <div className="circle"></div>
      </motion.div>
    </div>
  )
}
