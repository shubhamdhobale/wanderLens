import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="absolute top-0 left-0 w-full px-8 py-4 flex justify-between items-center z-30 bg-black opacity-30">
        <h1 className="text-2xl font-[Playfair_Display] text-white drop-shadow">WanderLens</h1>
        <ul className="flex gap-6 text-white font-medium">
          <Link to='/treks'>Treks</Link>
          <Link to='/journal'>Journal</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header