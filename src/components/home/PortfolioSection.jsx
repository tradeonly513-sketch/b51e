import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import PortfolioGallery from './PortfolioGallery'

const teasers = [
  { url: 'https://www.youtube.com/watch?v=xcD17BVK0hI', title: 'Portfolio Showcase 9' },   // Ella and Sam - 10
  { url: 'https://www.youtube.com/watch?v=QX08wn8Bi6E', title: 'Portfolio Showcase 6' },   // Summer & Mason - 9
  { url: 'https://www.youtube.com/watch?v=L9PMwOelcRk', title: 'Portfolio Showcase 11' },  // Good
  { url: 'https://www.youtube.com/watch?v=2qFnRXpSFn8', title: 'Portfolio Showcase 12' },  // Good
  { url: 'https://www.youtube.com/watch?v=j5Yo9w4QLf8', title: 'swipe right for more' },   // Maher and Cynthia - 9
  { url: 'https://www.youtube.com/watch?v=UZrSG4UUan8', title: 'Portfolio Showcase 2' },   // Angela and John - 9
  { url: 'https://www.youtube.com/watch?v=dCbp_xoNW1s', title: 'Portfolio Showcase 3' }    // Jessie & Michael - 9.5
]

const PortfolioSection = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.fromTo('.portfolio-section-wrapper',
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.portfolio-section-wrapper',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 75%',
      onEnter: () => setIsVisible(true),
      once: true
    })
  }, [])

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="min-h-screen section-dark-alt text-white relative depth-3 section-transition portfolio-section-wrapper"
    >
      <div className="cinematic-overlay"></div>
      <PortfolioGallery
        title="Our Portfolio"
        archiveButton={{
          text: "View Our Gallery",
          href: "/projects"
        }}
        videos={teasers}
        className=""
      />
    </section>
  )
}

export default PortfolioSection
