import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, Leads, Login, Profile, Registration } from './pages'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Rotas individuais */}
        <Route path="/cadastro" element={<Registration />} />{' '}
        {/* Rotas individuais */}
        <Route path="/home" element={<Home />} /> {/* Rotas individuais */}
        <Route path="/leads" element={<Leads />} /> {/* Rotas individuais */}
        <Route path="/perfil" element={<Profile />} /> {/* Rotas individuais */}
      </Routes>
    </Router>
  )
}
