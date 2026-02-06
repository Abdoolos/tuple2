import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Marketing from './pages/Marketing'
import Labs from './pages/Labs'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/labs" element={<Labs />} />
      </Routes>
    </div>
  )
}

export default App
