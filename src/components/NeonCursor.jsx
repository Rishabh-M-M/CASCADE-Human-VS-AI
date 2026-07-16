import { useEffect, useRef } from 'react'

export default function NeonCursor() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const W = window.innerWidth / 2
    const H = window.innerHeight
    canvas.width = W
    canvas.height = H

    const trail = []
    const TRAIL = 35
    const mouse = { x: -999, y: -999 }

    const onMove = (e) => {
      mouse.x = e.clientX - window.innerWidth / 2
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    let frame
    const animate = () => {
      frame = requestAnimationFrame(animate)
      ctx.clearRect(0, 0, W, H)

      trail.unshift({ x: mouse.x + 20, y: mouse.y + 55 })
      if (trail.length > TRAIL) trail.pop()

      if (trail.length < 2) return

      ctx.shadowColor = '#DA2324'
      ctx.shadowBlur = 12

      for (let i = 1; i < trail.length; i++) {
        const alpha = 1 - i / trail.length
        const width = (1 - i / trail.length) * 6

        ctx.beginPath()
        ctx.moveTo(trail[i - 1].x, trail[i - 1].y)
        ctx.lineTo(trail[i].x, trail[i].y)
        ctx.strokeStyle = `rgba(218, 35, 36, ${alpha * 0.9})`
        ctx.lineWidth = width
        ctx.lineCap = 'round'
        ctx.stroke()
      }

      ctx.shadowBlur = 20
      ctx.beginPath()
      ctx.arc(trail[0].x, trail[0].y, 3, 0, Math.PI * 2)
      ctx.fillStyle = '#fff'
      ctx.fill()
      ctx.shadowBlur = 0
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: '50%', pointerEvents: 'none', zIndex: 9999 }}
    />
  )
}