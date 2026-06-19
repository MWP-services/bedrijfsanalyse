import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const navItems = [
  ['Home', '/'],
  ['Over de onderneming', '/over-de-onderneming'],
  ['Analyse', '/analyse'],
  ['Risicoanalyse', '/risicoanalyse'],
  ['Beleggingsadvies', '/beleggingsadvies'],
  ['Nieuws', '/nieuws'],
  ['Uitgewerkte opdrachten', '/uitgewerkte-opdrachten'],
  ['Bronnen', '/bronnen'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <NavLink className="brand" to="/" onClick={() => setOpen(false)}>
        <span className="brand-logo">
          <img src={logo} alt="KPN" />
        </span>
        <span>
          <strong>KPN Analyse</strong>
          <small>KPN</small>
        </span>
      </NavLink>
      <button className="nav-toggle" aria-label="Navigatie openen" onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {navItems.map(([label, path]) => (
          <NavLink key={path} to={path} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
