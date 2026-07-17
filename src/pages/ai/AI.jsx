import { motion } from 'framer-motion'
import aiLogo from '../../assets/ai/AI_logo.png'

export default function AI() {
  return (
    <div className="h-screen w-screen bg-ai">
      <nav className="flex items-center px-8 py-4">
        <motion.img
          layoutId="ai-logo"
          src={aiLogo}
          alt="AI"
          className="h-10 w-auto object-contain"
        />
      </nav>
    </div>
  )
}