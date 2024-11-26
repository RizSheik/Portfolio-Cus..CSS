import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="animate-fade-in">
            <div className="hero-image">
              <Image
                src="/images/mypic.JPEG"
                alt="Profile"
                width={200}
                height={200}
                priority
              />
            </div>
          </div>
          <div className="animate-slide-up">
            <h1 className="hero-title">FULL STACK DEVELOPER</h1>
            <h2 className="hero-subtitle">Hi, I'm Rizwan</h2>
            <p className="hero-description">
            I'm a full stack developer (React.js & Node.js) with a focus on creating 
            (and occasionally desiging) exceptional digital experiences that are fast, 
            accessible,visually appealing,and responsive.Even though I have been creating web application, 
            I still love it as if it was someting new.
            </p>
            <Link href="#projects" className="button">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

