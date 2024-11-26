'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link href="/" className="logo">
          Rizwan Sheikh
        </Link>
        <nav className="nav-menu">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="#projects" className="nav-link">Projects</Link>
          <Link href="#contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

