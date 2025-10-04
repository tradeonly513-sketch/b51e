import { useGSAP } from '@gsap/react'
import VideoGrid from '../components/projects/VideoGrid'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import PageWrapper from '../components/common/PageWrapper'
import { Link } from 'react-router-dom'

/**
 * Projects component - Now displays YouTube videos in a responsive grid
 * 
 * Key changes from original:
 * - Replaced image URLs with YouTube video IDs
 * - Updated layout to support 3-4 videos per row on desktop, 2 on tablet, 1 on mobile
 * - Removed "Voir le projet" overlay (not needed for videos)
 * - Added proper spacing and responsive design for video content
 * - Structured to easily support 31+ videos without layout issues
 */
const Projects = () => {

  // Cinematic Long Highlights section - 5 videos
  const cinematicLongHighlights = [
    { videoId: 'j5Yo9w4QLf8' },
    { videoId: 'UZrSG4UUan8' },
    { videoId: 'dCbp_xoNW1s' },
    { videoId: 'GtQxWgD9v0s' },
    { videoId: 'x2QE07ybrM4' }
  ]

  // Highlights section - 5 videos
  const highlights = [
    { videoId: 'QX08wn8Bi6E' },
    { videoId: 'QY1b-DwrfVk' },
    { videoId: 'pRd1BnUKhwk' },
    { videoId: 'xcD17BVK0hI' },
    { videoId: 'LqkLRfDQZqQ' }
  ]

  // Teasers section - 5 videos
  const teasers = [
    { videoId: 'L9PMwOelcRk' },
    { videoId: '2qFnRXpSFn8' },
    { videoId: 'YM1TZnbcbOs' },
    { videoId: 'QstSPHan4oE' },
    { videoId: 'HQlRBpUM1pQ' }
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.fromTo('.video-container', 
      {
        opacity: 0,
        scale: 0.95,
        y: 30
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: {
          amount: 0.4
        },
        scrollTrigger: {
          trigger: '.video-container',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )

    gsap.fromTo('.section-title',
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  return (
    <PageWrapper className='section-dark'>
      <div className="cinematic-overlay"></div>
      <div className='container mx-auto section-padding mb-[30vh] sm:mb-[40vh] lg:mb-[50vh]'>
      {/* Page Header */}
      <div className='pt-[25vh] sm:pt-[30vh] lg:pt-[35vh] component-margin flex flex-col items-center justify-center text-center'>
        <div className='floating-panel-dark space-y-8 sm:space-y-10 lg:space-y-12 mx-auto'>
          <h1 className='font-[font2] heading-responsive-xl uppercase text-white text-layer-3 text-glow'>
            A Curated Collection of Love Stories
          </h1>
          <div className='flex justify-center items-center'>
            <Link 
              to='/contact'
              className='btn-pill btn-primary h-12 sm:h-16 lg:h-20 px-8 sm:px-12 lg:px-16 inline-flex items-center justify-center group'
            >
              <span className='font-[font2] text-base sm:text-xl lg:text-2xl'>
                Get In Touch Today
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className='projects-content space-y-16 sm:space-y-24 lg:space-y-32'>
        {/* Highlights Section */}
        <section className='floating-panel-dark space-y-8 sm:space-y-10 lg:space-y-12 flex flex-col items-center'>
          <h2 className='section-title font-[font2] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase text-center text-layer-2 text-glow'>
            Highlights
          </h2>
          <div className="w-full max-w-6xl">
            <VideoGrid
              videos={highlights}
              gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              aspectRatio="aspect-video"
            />
          </div>
        </section>

        {/* Cinematic Long Highlights Section */}
        <section className='floating-panel-dark space-y-8 sm:space-y-10 lg:space-y-12 flex flex-col items-center'>
          <h2 className='section-title font-[font2] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase text-center text-layer-2 text-glow'>
            Cinematic Long Highlights
          </h2>
          <div className="w-full max-w-6xl">
            <VideoGrid
              videos={cinematicLongHighlights}
              gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              aspectRatio="aspect-video"
            />
          </div>
        </section>

        {/* Teasers Section */}
        <section className='floating-panel-dark space-y-8 sm:space-y-10 lg:space-y-12 flex flex-col items-center'>
          <h2 className='section-title font-[font2] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase text-center text-layer-2 text-glow'>
            Teasers
          </h2>
          <div className="w-full max-w-6xl">
            <VideoGrid
              videos={teasers}
              gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              aspectRatio="aspect-video"
            />
          </div>
        </section>
      </div>
      </div>
    </PageWrapper>
  )
}

export default Projects
