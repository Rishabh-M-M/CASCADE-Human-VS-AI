import { useEffect, useRef, useState } from 'react'
import rough from 'roughjs'

export default function ScribblyCard({ children, className = '', color = 'color-human-blue-400' }) {
  const svgRef = useRef()
  const containerRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [dims, setDims] = useState({ w: 0, h: 0 })

  useEffect(() => {
    if (!containerRef.current) return
    const { offsetWidth: w, offsetHeight: h } = containerRef.current
    setDims({ w, h })
  }, [])

  useEffect(() => {
    if (!svgRef.current || !dims.w) return
    const svg = svgRef.current
    svg.innerHTML = ''

    const rc = rough.svg(svg)
    const padding = 6

    const rect = rc.rectangle(padding, padding, dims.w - padding * 2, dims.h - padding * 2, {
      stroke: color,
      strokeWidth: hovered ? 2.5 : 1.5,
      roughness: hovered ? 2.8 : 1.8,
      fill: 'none',
      bowing: 1.2,
    })

    svg.appendChild(rect)

    // animate stroke draw on hover
    const path = svg.querySelector('path')
    if (path) {
      const len = path.getTotalLength?.() || 600
      if (hovered) {
        path.style.strokeDasharray = len
        path.style.strokeDashoffset = len
        path.style.transition = 'stroke-dashoffset 0.6s ease'
        requestAnimationFrame(() => { path.style.strokeDashoffset = 0 })
      } else {
        path.style.strokeDasharray = ''
        path.style.strokeDashoffset = ''
        path.style.transition = ''
      }
    }
  }, [dims, hovered, color])

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: 'visible' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}