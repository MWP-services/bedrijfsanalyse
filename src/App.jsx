import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Analysis from './pages/Analysis.jsx'
import Assignments from './pages/Assignments.jsx'
import Company from './pages/Company.jsx'
import Home from './pages/Home.jsx'
import InvestmentAdvice from './pages/InvestmentAdvice.jsx'
import News from './pages/News.jsx'
import Risks from './pages/Risks.jsx'
import Sources from './pages/Sources.jsx'
import Swot from './pages/Swot.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/over-de-onderneming" element={<Company />} />
          <Route path="/analyse" element={<Analysis />} />
          <Route path="/risicoanalyse" element={<Risks />} />
          <Route path="/swot" element={<Swot />} />
          <Route path="/beleggingsadvies" element={<InvestmentAdvice />} />
          <Route path="/nieuws" element={<News />} />
          <Route path="/uitgewerkte-opdrachten" element={<Assignments />} />
          <Route path="/bronnen" element={<Sources />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
