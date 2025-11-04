import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>login</>} /> {/* Rotas individuais */}
        <Route path="/cadastro" element={<>CADASTRO</>} />{' '}
        {/* Rotas individuais */}
        <Route path="/home" element={<>HOME</>} /> {/* Rotas individuais */}
        <Route path="/leads" element={<>LEADS</>} /> {/* Rotas individuais */}
        <Route path="/perfil" element={<>PERFIL</>} /> {/* Rotas individuais */}
      </Routes>
    </Router>
  )
}
