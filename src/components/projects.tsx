'use client'

import { useEffect, useRef } from 'react'
import Image from "next/image"
import Link from "next/link"

const projects = [
  { 
    id: 1, 
    title: "Basic Website in Multipage Working", 
    description: "A full website built with HTML,CSS", 
    slug: "Website-pages",
    imageUrl: "/images/project1.jpg",
    deployLink: "https://website-page-gamma.vercel.app/"
  },
  { 
    id: 2, 
    title: "Resume Builder", 
    description: "Make simple Resume page built with HTML,CSS", 
    slug: "Resume Builder",
    imageUrl: "/images/project2.jpg",
    deployLink: "https://resume-builder-ten-gules.vercel.app/"
  },
  { 
    id: 3, 
    title: "Website colne GI-AWMD", 
    description: "A responsive Website built with Next.js & Tailwind.CSS", 
    slug: "Governor Sindh Initiative for Artificial Intelligence, Web 3.0 & Metaverse",
    imageUrl: "/images/project3.jpg",
    deployLink: "https://assignment9-ashy.vercel.app/"
  },
  { 
    id: 4, 
    title: "Responsive Navebar & Cards", 
    description: "A Responsive Navebar & Card in Next.js & Tailwind.CSS", 
    slug: "A laptop Website Responsive Navebar & Cards",
    imageUrl: "/images/project4.jpg",
    deployLink: "https://social-analytics-example.vercel.app"
  },
  { 
    id: 5, 
    title: "Responsive WebSite Page", 
    description: "A Responsive Website pages in Next.js & Tailwind.CSS", 
    slug: "A laptop Website Responsive pages ",
    imageUrl: "/images/project5.jpg",
    deployLink: "https://class-10-rosy.vercel.app"
  },
  { 
    id: 6, 
    title: "Advance ToDo App", 
    description: "A Responsive Todo App in Next.js & Tailwind.CSS", 
    slug: "ToDo Appt",
    imageUrl: "/images/project6.jpg",
    deployLink: "https://advance-todo-app-nu.vercel.app/"
  }
]

export function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up')
            entry.target.style.animationDelay = `${index * 150}ms`
          }
        })
      },
      { threshold: 0.1 }
    )

    if (projectsRef.current) {
      projectsRef.current.querySelectorAll('.project-card').forEach((card) => {
        observer.observe(card)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid" ref={projectsRef}>
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <Image
                src={project.imageUrl}
                alt={`${project.title} preview`}
                width={400}
                height={300}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <Link href={`/projects/${project.slug}`} className="project-link">
                    Learn More
                  </Link>
                  <a 
                    href={project.deployLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

