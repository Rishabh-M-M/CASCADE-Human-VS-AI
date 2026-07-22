import { Routes, Route } from 'react-router-dom'
import { LayoutGroup } from 'framer-motion'
import Versus from './pages/versus/Versus'
import Human from './pages/human/Human'
import AI from './pages/ai/AI'
import End from './pages/end/End'

export default function App() {
  return (
    <LayoutGroup>
      <Routes>
        <Route path="/" element={<Versus />} />
        <Route path="/human" element={<Human />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </LayoutGroup>
  )
}