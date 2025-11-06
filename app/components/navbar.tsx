import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-teal-light text-cream-dark shadow">
      <div className="container-fluid">
        <Link className="navbar-brand text-teal-dark fw-bolder" href="/">Freeware for Libraries</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link text-teal-dark hvr-grow" href="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-teal-dark hvr-grow" href="/about">About Us</Link>
            </li>

            {/* Free Apps Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-teal-dark hvr-grow" href="#" id="freeAppsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Free Apps
              </a>
              <ul className="dropdown-menu" aria-labelledby="freeAppsDropdown">
                <li><Link className="dropdown-item" href="/free-apps/hosted">Hosted Web Apps</Link></li>
                <li><Link className="dropdown-item" href="/free-apps/alternatives">Alternatives Application</Link></li>
              </ul>
            </li>

            {/* Resources Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-teal-dark hvr-grow" href="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Resources
              </a>
              <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                <li><Link className="dropdown-item" href="/resources/tech">Tech Resources</Link></li>
                <li><Link className="dropdown-item" href="/resources/guides">Guides & Tutorials</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-teal-dark hvr-grow" href="/community">Community</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-teal-dark hvr-grow" href="/events">Events</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-teal-dark hvr-grow" href="/blog">Blog</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-teal-dark hvr-grow" href="/contact">Contact</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
