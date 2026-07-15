import { Routes, Route } from 'react-router-dom'
import Versus from './pages/versus/Versus'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Versus />} />
    </Routes>
  )
}