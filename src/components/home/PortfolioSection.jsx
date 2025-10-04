import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import PortfolioGallery from './PortfolioGallery'

const teasers = [
  { url: 'https://www.youtube.com/watch?v=j5Yo9w4QLf8', title: 'Maher & Cynthia — 9' },
  { url: 'https://www.youtube.com/watch?v=UZrSG4UUan8', title: 'Angela & John — 9' },
  { url: 'https://www.youtube.com/watch?v=dCbp_xoNW1s', title: 'Jessie & Michael — 9.5' },
  { url: 'https://www.youtube.com/watch?v=GtQxWgD9v0s', title: 'Austin & Katie — 8.5' },
  { url: 'https://www.youtube.com/watch?v=x2QE07ybrM4', title: 'Vincent & Alley — 8.5' },
  { url: 'https://www.youtube.com/watch?v=QX08wn8Bi6E', title: 'Summer & Mason — 9' },
  { url: 'https://www.youtube.com/watch?v=QY1b-DwrfVk', title: 'Hailey & Nicholas — 8.5' },
  { url: 'https://www.youtube.com/watch?v=pRd1BnUKhwk', title: 'Denny & Beckie — 8' },
  { url: 'https://www.youtube.com/watch?v=xcD17BVK0hI', title: 'Ella & Sam — 10' },
  { url: 'https://www.youtube.com/watch?v=LqkLRfDQZqQ', title: 'Brandon & Juliana — 8.5' },
  { url: 'https://www.youtube.com/watch?v=L9PMwOelcRk', title: 'Extra Video — L9PMwOelcRk' },
  { url: 'https://www.youtube.com/watch?v=2qFnRXpSFn8', title: 'Extra Video — 2qFnRXpSFn8 (Good)' },
  { url: 'https://www.youtube.com/watch?v=YM1TZnbcbOs', title: 'Extra Video — YM1TZnbcbOs (Good)' },
  { url: 'https://www.youtube.com/watch?v=QstSPHan4oE', title: 'Extra Video — QstSPHan4oE (Good)' },
  { url: 'https://www.youtube.com/watch?v=HQlRBpUM1pQ', title: 'Extra Video — HQlRBpUM1pQ (Good)' }
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
