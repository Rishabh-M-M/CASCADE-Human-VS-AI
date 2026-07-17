import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import NeonCursor from '../../components/NeonCursor'
import Divider from '../../components/Divider'
import humanLogo from '../../assets/human/Human_logo.svg'
import aiLogo from '../../assets/ai/AI_logo.png'
import { isHigh } from '../../utils/deviceTier'

export default function Versus() {
  const [showNeon, setShowNeon] = useState(false)
  const [hover, setHover] = useState(null)
  const [picked, setPicked] = useState(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const navigate = useNavigate()

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const isNarrow = windowWidth < 768

  const pickHuman = () => {
    setPicked('human')
    setShowNeon(false)
    setTimeout(() => navigate('/human'), 2200)
  }

  const pickAI = () => {
    setPicked('ai')
    setShowNeon(false)
    setTimeout(() => navigate('/ai'), 2200)
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {showNeon && !picked && isHigh && <NeonCursor />}

      <div className="absolute inset-0 bg-human bg-cover bg-center" />

      <div className="absolute inset-0 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">

        <div
          className={`flex flex-col justify-center items-center gap-8 ${!isNarrow ? 'cursor-human' : ''}`}
          onMouseEnter={() => !picked && !isNarrow && setHover('human')}
          onMouseLeave={() => !picked && !isNarrow && setHover(null)}
        >
          <motion.img layoutId="human-logo" src={humanLogo} alt="Human" className="h-24 md:h-32 object-contain border-0" />
          <AnimatePresence>
            {!picked && (
              <motion.button
                className={`border border-primary font-human text-xl md:text-2xl px-6 md:px-8 py-2 md:py-3 bg-white/60 ${!isNarrow ? 'cursor-human-pointer' : 'cursor-pointer'}`}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                onClick={pickHuman}
              >
                pick this side
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <div
          className={`bg-ai flex flex-col justify-center items-center gap-8 ${!isNarrow ? 'cursor-robo' : ''}`}
          onMouseEnter={() => { if (!picked && !isNarrow) { setShowNeon(true); setHover('ai') } }}
          onMouseLeave={() => { if (!picked && !isNarrow) { setShowNeon(false); setHover(null) } }}
        >
          <motion.img layoutId="ai-logo" src={aiLogo} alt="AI" className="h-24 md:h-32 object-contain border-0" />
          <AnimatePresence>
            {!picked && (
              <motion.button
                className={`box-shadow-neon font-mono text-xl md:text-2xl px-6 md:px-8 py-2 md:py-3 bg-dark text-light hover:text-ai-red-100 border-2 border-ai-red-300 hover:text-shadow-neon ${!isNarrow ? 'cursor-robo-pointer' : 'cursor-pointer'}`}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                onClick={pickAI}
              >
                pick this side
              </motion.button>
            )}
          </AnimatePresence>
        </div>

      </div>

      <Divider hover={hover} picked={picked} isNarrow={isNarrow} />

      <AnimatePresence>
        {picked === 'human' && (
          <motion.div className="absolute inset-0 flex justify-center items-center z-40 pointer-events-none"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.6 }}>
            <motion.img src={humanLogo} alt="Human"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.3, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="h-32 object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {picked === 'ai' && (
          <motion.div className="absolute inset-0 flex justify-center items-center z-40 pointer-events-none"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.5 }}>
            <motion.img src={aiLogo} alt="AI"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.3, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="h-32 object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!picked && (
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-human text-5xl md:text-6xl font-bold text-human-blue-300">V</span>
            <span className="font-sans text-5xl md:text-6xl font-bold text-ai-red-300">S</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}