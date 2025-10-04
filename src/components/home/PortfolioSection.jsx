import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import PortfolioGallery from './PortfolioGallery'

const teasers = [
  { url: 'https://www.youtube.com/watch?v=j5Yo9w4QLf8', title: 'swipe right for more' },
  { url: 'https://www.youtube.com/watch?v=UZrSG4UUan8', title: 'Portfolio Showcase 2' },
  { url: 'https://www.youtube.com/watch?v=dCbp_xoNW1s', title: 'Portfolio Showcase 3' },
  { url: 'https://www.youtube.com/watch?v=GtQxWgD9v0s', title: 'Portfolio Showcase 4' },
  { url: 'https://www.youtube.com/watch?v=x2QE07ybrM4', title: 'Portfolio Showcase 5' },
  { url: 'https://www.youtube.com/watch?v=QX08wn8Bi6E', title: 'Portfolio Showcase 6' },
  { url: 'https://www.youtube.com/watch?v=QY1b-DwrfVk', title: 'Portfolio Showcase 7' },
  { url: 'https://www.youtube.com/watch?v=pRd1BnUKhwk', title: 'Portfolio Showcase 8' },
  { url: 'https://www.youtube.com/watch?v=xcD17BVK0hI', title: 'Portfolio Showcase 9' },
  { url: 'https://www.youtube.com/watch?v=LqkLRfDQZqQ', title: 'Portfolio Showcase 10' },

  // continued to 15
  { url: 'https://www.youtube.com/watch?v=L9PMwOelcRk', title: 'Portfolio Showcase 11' },
  { url: 'https://www.youtube.com/watch?v=2qFnRXpSFn8', title: 'Portfolio Showcase 12' },
  { url: 'https://www.youtube.com/watch?v=YM1TZnbcbOs', title: 'Portfolio Showcase 13' },
  { url: 'https://www.youtube.com/watch?v=QstSPHan4oE', title: 'Portfolio Showcase 14' },
  { url: 'https://www.youtube.com/watch?v=HQlRBpUM1pQ', title: 'Portfolio Showcase 15' }
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
