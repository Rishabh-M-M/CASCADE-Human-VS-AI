import { motion } from 'framer-motion'
import Footer from '../../components/Footer'

const aiLogo = `${import.meta.env.BASE_URL}assets/ai/AI_logo.png`

export default function AI() {
  return (
    <div className="h-screen w-screen bg-ai flex flex-col">
      <nav className="flex items-center px-8 py-4">
        <motion.img layoutId="ai-logo" src={aiLogo} alt="AI" className="h-10 w-auto object-contain" />
      </nav>
      <div className="flex-1" />
      <Footer textClass="text-light" />
    </div>
  )
}