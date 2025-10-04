import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const VideoCard = ({ videoId, aspectRatio, index }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false)
  const cardRef = useRef(null)

  // YouTube embed + thumbnail URLs
  const embedUrl = `https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1&rel=0&showinfo=0`
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const fallbackThumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  // Enhanced entrance animation with depth
  useGSAP(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.92,
          rotateX: 8,
          transformPerspective: 1000
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1,
          ease: 'power3.out',
          delay: index * 0.08
        }
      )
    }
  }, [index])

  const handleIframeLoad = () => setIsLoaded(true)
  const handleIframeError = () => setHasError(true)
  const handleThumbnailLoad = () => setThumbnailLoaded(true)

  const handleThumbnailError = (e) => {
    if (e.target.src !== fallbackThumbnail) e.target.src = fallbackThumbnail
  }

  return (
    <div
      ref={cardRef}
      className={`video-container group relative ${aspectRatio || 'aspect-video'} w-full overflow-hidden rounded-xl lg:rounded-2xl bg-transparent transition-all duration-500 ease-out will-change-transform`}
      style={{
        background: 'transparent',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      {/* Loading Spinner */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-transparent">
          <div className="loading-spinner w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error Fallback with Thumbnail */}
      {hasError && (
        <div className="absolute inset-0 z-10">
          <img
            src={thumbnailUrl}
            alt={`Video ${index + 1} thumbnail`}
            className="w-full h-full object-cover"
            onLoad={handleThumbnailLoad}
            onError={handleThumbnailError}
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
            </div>
            <p className="text-sm text-white opacity-90">Watch on YouTube</p>
          </div>
        </div>
      )}

      {/* Video Embed */}
      {!hasError && (
        <iframe
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          src={embedUrl}
          title={`Project Video ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      )}

      {/* Click Redirect when error */}
      {hasError && (
        <button
          className="absolute inset-0 z-20 cursor-pointer"
          onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}
          aria-label={`Watch video ${index + 1} on YouTube`}
        />
      )}

      {/* Enhanced Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none rounded-xl lg:rounded-2xl" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{
        boxShadow: '0 20px 60px rgba(211, 253, 80, 0.15), 0 0 40px rgba(211, 253, 80, 0.1)'
      }} />
      <div className="absolute -inset-[1px] rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{
        background: 'linear-gradient(135deg, rgba(211, 253, 80, 0.2), transparent 40%, transparent 60%, rgba(211, 253, 80, 0.1))'
      }} />
    </div>
  )
}

export default VideoCard
