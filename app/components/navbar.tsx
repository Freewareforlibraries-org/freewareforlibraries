import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-teal-light shadow-sm sticky-top">
      <div className="container-fluid px-4">
        <Link className="navbar-brand text-teal-dark fw-bold d-flex align-items-center" href="/">
          Freeware for Libraries
        </Link>
        
        <button
          className="navbar-toggler border-0"
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-2">
            
            {/* About Us */}
            <li className="nav-item">
              <Link className="nav-link text-teal-dark fw-semibold px-3 py-2" href="/about">
                About Us
              </Link>
            </li>

            {/* Community Resources Mega Menu */}
            <li className="nav-item dropdown mega-menu position-static">
              <a
                className="nav-link dropdown-toggle text-teal-dark fw-semibold px-3 py-2"
                href="#"
                id="resourcesDropdown"
                role="button"
                aria-expanded="false"
              >
                Community Resources
              </a>
              <div className="dropdown-menu w-100 border-0 mega-menu-content" aria-labelledby="resourcesDropdown">
                <div className="container-fluid py-4">
                  <div className="row g-4">
                    
                    {/* Column 1 - Tech Resources */}
                    <div className="col-lg-3 col-md-6">
                      <div className="mega-menu-section">
                        <h6 className="dropdown-header">
                          <span className="header-icon">💻</span>
                          Tech Resources
                        </h6>
                        <Link className="dropdown-item" href="/tech-resources">
                          <span className="item-bullet">→</span>
                          Tech Resources Hub
                        </Link>
                        <Link className="dropdown-item" href="/resources/guides">
                          <span className="item-bullet">→</span>
                          Professional Development
                        </Link>
                        <Link className="dropdown-item" href="/resources/guides">
                          <span className="item-bullet">→</span>
                          Programming Ideas
                        </Link>
                      </div>
                    </div>

                    {/* Column 2 - Programming Ideas */}
                    <div className="col-lg-3 col-md-6">
                      <div className="mega-menu-section">
                        <h6 className="dropdown-header">
                          <span className="header-icon">🎯</span>
                          Programming Ideas
                        </h6>
                        <Link className="dropdown-item" href="/programming-gaming">
                          <span className="item-bullet">→</span>
                          Gaming in Your Library
                        </Link>
                        <Link className="dropdown-item" href="/programming-coding">
                          <span className="item-bullet">→</span>
                          Coding Classes
                        </Link>
                        <Link className="dropdown-item" href="/programming-coding">
                          <span className="item-bullet">→</span>
                          Digital Literacy
                        </Link>
                        <Link className="dropdown-item" href="/programming-coding">
                          <span className="item-bullet">→</span>
                          Resume Building
                        </Link>
                      </div>
                    </div>

                    {/* Column 3 - What We Offer */}
                    <div className="col-lg-3 col-md-6">
                      <div className="mega-menu-section">
                        <h6 className="dropdown-header">
                          <span className="header-icon">⚡</span>
                          What We Offer
                        </h6>
                        <Link className="dropdown-item" href="/services">
                          <span className="item-bullet">→</span>
                          Services Overview
                        </Link>
                        <Link className="dropdown-item" href="/wp">
                          <span className="item-bullet">→</span>
                          Wireless Printing Tool
                        </Link>
                      </div>
                    </div>

                    {/* Column 4 - Other Tools */}
                    <div className="col-lg-3 col-md-6">
                      <div className="mega-menu-section">
                        <h6 className="dropdown-header">
                          <span className="header-icon">🛠️</span>
                          Other Tools
                        </h6>
                        <Link className="dropdown-item" href="/alternatives">
                          <span className="item-bullet">→</span>
                          Alternative Apps Guide
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </li>

            {/* Blog */}
            <li className="nav-item">
              <Link className="nav-link text-teal-dark fw-semibold px-3 py-2" href="/blog">
                Blog
              </Link>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <Link 
                className="nav-link text-teal-dark fw-semibold px-3 py-2 contact-link" 
                href="/contact"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar