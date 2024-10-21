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
      title: 'Daniel Paiva',
      h2Text: 'Wildlife Photography Portfolio',
      description:
        "This project was developed for Daniel Paiva, a wildlife photographer and expedition guide. The site was designed with a clean, modern aesthetic, utilizing Figma and Dribbble for inspiration, with a focus on showcasing Daniel's photography. The site was built using the latest version of Next.js (App Router), which included challenges such as integrating a photo gallery with Cloudinary’s API. The gallery features modals, animated navigation, and dedicated media-sharing URLs. Additionally, I implemented advanced features like Intercepting Routes and Parallel Routes to enhance user experience, and used next-intl for seamless multi-language support. This project highlights both front-end and back-end expertise, offering a dynamic, user-friendly interface that allows for an engaging showcase of Daniel’s work.",
      imagePath: '/images/danpaiva.png',
      projectLink: 'https://danpaiva-wildlife.vercel.app/pt-BR',
    },
    {
      title: 'Papoula Hub',
      h2Text: 'The StoryTelling Hub',
      description:
        'This project was developed for a Creative Hub in partnership with PPG-ARTES from UNESPAR (Universidade Estadual do Paraná), funded by the Lei Paulo Gustavo, focused on producing short films based on scientific research. I was responsible for creating an accessible application form for the selection process, incorporating LIBRAS (Brazilian Sign Language) accessibility through integrated videos. The form was also integrated with the AirTable API to automate candidate data management and streamline the selection process for organizers. Additionally, I designed a landing page for the company, using references from Dribbble and Pinterest and ensuring the design aligned with the visual identity provided. This project balanced aesthetic and functional aspects to deliver an engaging and accessible solution.',
      imagePath: '/images/papoula2.png',
      projectLink: 'https://papoula-hub.vercel.app/',
    },
    {
      title: 'JavaDelight',
      h2Text: 'ジャワディライト',
      description:
        "JavaDelight is a fictional Japanese coffee shop project that I developed, seamlessly blending modern aesthetics with traditional elements. Inspired by the Neo-brutalist style and its harmony with the Japanese alphabet, the project showcases a visually captivating layout. Emphasizing creative design and cultural richness, JavaDelight incorporates smart componentization and state management techniques learned from Rocketseat's Ignite course. The technical aspects involve state immutability, local storage for persistence, and efficient ReactJS practices. Key functionalities include dynamic product listing, intuitive cart management, personalized address forms, and automatic total value calculation. This project, reflects a passion for web development and a commitment to tackling new challenges.",
      imagePath: '/images/javadelight1.png',
      projectLink: 'https://java-delight.vercel.app/',
    },
    // {
    //   title: 'Upload.Ai',
    //   description:
    //     'This application allow us to effortlessly upload videos, perform on-the-fly transcriptions right in the browser, and generate concise summaries and title suggestions. With the freedom to customize prompts for the integrated OpenAI AI, it opens up endless possibilities for creative outcomes - perfect for content creators.',
    //   projectLink: 'https://upload-ai-theta.vercel.app/',
    //   imagePath: '/images/uploadai1.png',
    // },
    // {
    //   title: 'Food Explorer',
    //   description:
    //     'This project is a CRUD system featuring an interactive menu designed for the fictional restaurant Food Explorer. It showcases the practical application of acquired knowledge throughout my FullStack course. In development, I utilized React with Styled Components to craft an engaging and highly interactive user interface. The back-end was built using Node.js with Express to ensure the efficiency and robustness of the API. The project offers different access levels for users. They can explore common application routes, add dishes to favorites, place items in the cart, and view dish details. Additionally, administrators possess special privileges, enabling them to view detailed dish information, add new dishes, edit existing dish details, and remove items from the system. This project represents a comprehensive web development experience, covering both front-end and back-end aspects to create a versatile and efficient application. To test it you can either create your own account or access as Admin to check the differences between the routes, using the email: sa@email.com password: 123',
    //   imagePath: '/images/foodexplorer.png',
    //   projectLink: 'https://foodexplorervinigouvea.netlify.app/',
    // },
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
