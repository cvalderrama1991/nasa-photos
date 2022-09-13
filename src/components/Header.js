import { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaWindowClose } from "react-icons/fa"

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)

  const navLinks =
    "text-white h-16 w-full border-b border-white rounded flex items-center justify-center bg-black"

  return (
    <div className="w-full fixed top-0 left-0 h-12 bg-black z-10">
      <header className="h-full flex items-center justify-between container mx-auto px-2 relative">
        <div>
          <Link to="/nasa-photos" className="text-red-500 font-bold text-xl">
            HOME
          </Link>
        </div>
        <nav>
          <div>
            <button
              className="text-white flex"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              {navOpen ? <FaWindowClose size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <ul
            className={`absolute transition-all grid left-0 w-full ${
              navOpen ? "translate-y-0" : "-translate-y-[400px]"
            }`}
          >
            <li>
              <Link
                to="/pic-of-day"
                className={navLinks}
                onClick={() => setNavOpen(false)}
              >
                POD
              </Link>
            </li>
            <li>
              <Link
                to="/pics-of-the-day"
                className={navLinks}
                onClick={() => setNavOpen(false)}
              >
                POD+5
              </Link>
            </li>
            <li>
              <Link
                to="/mars"
                className={navLinks}
                onClick={() => setNavOpen(false)}
              >
                Mars Rover
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
