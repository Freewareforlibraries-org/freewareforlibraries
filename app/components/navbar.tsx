import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-teal-light text-cream-dark shadow">
      <div className="container-fluid">
        <Link className="navbar-brand text-teal-dark fw-bolder" href="/">Freeware for Libraries</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {/* About Us */}
            <li className="nav-item">
              <Link className="nav-link text-teal-dark hvr-grow" href="/about">About Us</Link>
            </li>

            {/* Community Resources Mega Menu */}
            <li className="nav-item dropdown mega-menu">
              <a
                className="nav-link dropdown-toggle text-teal-dark hvr-grow"
                href="#"
                id="resourcesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Community Resources
              </a>
              <div className="dropdown-menu p-4 mega-menu-content" aria-labelledby="resourcesDropdown">
                <div className="container">
                  <div className="row">

                    {/* Column 1 */}
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Tech Resources</h6>
                      <Link className="dropdown-item" href="/tech-resources">Tech Resources</Link>
                      <Link className="dropdown-item" href="/resources/guides">Professional Development</Link>
                      <Link className="dropdown-item" href="/resources/guides">Programming Ideas</Link>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Programming Ideas</h6>
                      <Link className="dropdown-item" href="/programming-gaming">Gaming in Your Library</Link>
                      <Link className="dropdown-item" href="/programming-coding">Coding Classes</Link>
                      <Link className="dropdown-item" href="/programming-coding">Digital Literacy</Link>
                      <Link className="dropdown-item" href="/programming-coding">Resume Building</Link>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-3">
                      <h6 className="dropdown-header">What We Offer</h6>
                      <Link className="dropdown-item" href="/services">Overview</Link>
                      <Link className="dropdown-item" href="/wp">Wireless Printing Tool</Link>
                    </div>

                    {/* Column 4 */}
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Other Tools</h6>
                      <Link className="dropdown-item" href="/alternatives">Alternative Application Guide</Link>
                    </div>

                  </div>
                </div>
              </div>
            </li>

                        {/* Digital Resources Mega Menu */}
            <li className="nav-item dropdown mega-menu">
              <a
                className="nav-link dropdown-toggle text-teal-dark hvr-grow"
                href="#"
                id="resourcesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Digital Resources
              </a>
              <div className="dropdown-menu p-4 mega-menu-content" aria-labelledby="resourcesDropdown">
                <div className="container">
                  <div className="row">

                    {/* Column 1 */}
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Tech Resources</h6>
                      <Link className="dropdown-item" href="/tech-resources">Tech Resources</Link>
                      <Link className="dropdown-item" href="/resources/guides">Professional Development</Link>
                      <Link className="dropdown-item" href="/resources/guides">Programming Ideas</Link>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Programming Ideas</h6>
                      <Link className="dropdown-item" href="/programming-gaming">Gaming in Your Library</Link>
                      <Link className="dropdown-item" href="/programming-coding">Coding Classes</Link>
                      <Link className="dropdown-item" href="/programming-coding">Digital Literacy</Link>
                      <Link className="dropdown-item" href="/programming-coding">Resume Building</Link>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-3">
                      <h6 className="dropdown-header">What We Offer</h6>
                      <Link className="dropdown-item" href="/services">Overview</Link>
                      <Link className="dropdown-item" href="/wp">Wireless Printing Tool</Link>
                    </div>

                    {/* Column 4 */}
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Other Tools</h6>
                      <Link className="dropdown-item" href="/alternatives">Alternative Application Guide</Link>
                    </div>

                  </div>
                </div>
              </div>
            </li>

            {/* Blog */}
            <li className="nav-item">
              <Link className="nav-link text-teal-dark hvr-grow" href="/blog">Blog</Link>
            </li>

            {/* Contact */}
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
