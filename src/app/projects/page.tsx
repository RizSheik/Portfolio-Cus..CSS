import { notFound } from 'next/navigation'
import { Header } from "@/components/header"
import Image from "next/image"

const projects = [
  { id: 1, title: "Project 1", description: "A detailed description of Project 1", slug: "project-1" },
  { id: 2, title: "Project 2", description: "A detailed description of Project 2", slug: "project-2" },
  { id: 3, title: "Project 3", description: "A detailed description of Project 3", slug: "project-3" },
]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="bg-gray-900 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image
              src="/placeholder.svg"
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-teal-400">{project.title}</h1>
            <p className="text-gray-300 text-lg">{project.description}</p>
          </div>
        </div>
      </div>
    </main>
  )
}

