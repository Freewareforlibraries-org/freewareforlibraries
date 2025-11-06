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
            <Link className="nav-link text-teal-dark hvr-grow"  href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-teal-dark hvr-grow" href="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-teal-dark hvr-grow"  href="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-teal-dark hvr-grow"  href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar