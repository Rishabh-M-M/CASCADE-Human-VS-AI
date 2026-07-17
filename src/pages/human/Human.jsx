import { motion } from 'framer-motion'
import humanLogo from '../../assets/human/Human_logo.svg'

export default function Human() {
  return (
    <div className="h-screen w-screen bg-human bg-cover bg-center">
      <nav className="flex items-center px-8 py-4">
        <motion.img
          layoutId="human-logo"
          src={humanLogo}
          alt="Human"
          className="h-10 w-auto object-contain"
        />
      </nav>
    </div>
  )
}