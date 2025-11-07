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
                      <h6 className="dropdown-header">Community Resources</h6>
                      <Link className="dropdown-item" href="/tech-resources">Communities & Forums</Link>
                      <Link className="dropdown-item" href="/resources/guides">Library Organizations</Link>
                      <Link className="dropdown-item" href="/resources/guides">Learning & Proffessional Developement</Link>
                      <Link className="dropdown-item" href="/programming-coding">Budgeting & Grants</Link>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Technical Resources</h6>
                      <Link className="dropdown-item" href="/programming-gaming">Security and Privacy</Link>
                      <Link className="dropdown-item" href="/programming-coding">IT Infrastructure</Link>
                      <Link className="dropdown-item" href="/programming-coding">Hardware & Software Support</Link>
                      <Link className="dropdown-item" href="/programming-coding">Upgrade plan</Link>
                      <Link className="dropdown-item" href="/programming-coding">Technology Workbook</Link>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Websites & Web Applications</h6>
                      <Link className="dropdown-item" href="/wp">Development & Technical Tools</Link>
                      <Link className="dropdown-item" href="/wp">Standards & Beest Practices</Link>
                      <Link className="dropdown-item" href="/wp">Hosting Solutions</Link>
                    </div>

                    {/* Column 4 */}
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Programming and Digital Literacy</h6>
                      <Link className="dropdown-item" href="/programming-gaming">Gaming in Your Library</Link>
                      <Link className="dropdown-item" href="/programming-coding">Coding Classes</Link>
                      <Link className="dropdown-item" href="/programming-coding">Digital Literacy</Link>
                      <Link className="dropdown-item" href="/programming-coding">Resume Building</Link>
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
                      <h6 className="dropdown-header">FFL Apps</h6>
                      <Link className="dropdown-item" href="/wp">Wireless Printing App</Link>
                      <Link className="dropdown-item" href="/resources/guides">Blogs for Libraries!</Link>
                      <Link className="dropdown-item" href="/resources/guides">Incident Mangement Tool</Link>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Open Source</h6>
                      <Link className="dropdown-item" href="/services">Integrated Library Systems (ILS)</Link>
                      <Link className="dropdown-item" href="/programming-coding">Alternative Computer Applications</Link>
                      <Link className="dropdown-item" href="/programming-coding">Digital Repositories / Archives</Link>
                      <Link className="dropdown-item" href="/programming-coding">Catalog & Discovery Interfaces (OPAC / Discovery Layers)</Link>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Open Source Tools for IT</h6>
                      <Link className="dropdown-item" href="/services">Network Management & Security</Link>
                      <Link className="dropdown-item" href="/wp">Servers, Virtualization & Deployment</Link>
                      <Link className="dropdown-item" href="/services">Backup, Storage & File Sharing</Link>
                      <Link className="dropdown-item" href="/wp">Identity, Access, and Authentication</Link>
                       <Link className="dropdown-item" href="/services">Monitoring, Logging & Analytics</Link>
                      <Link className="dropdown-item" href="/wp">Security & Maintenance</Link>
                      
                    </div>

                    {/* Column 4 */}
                    <div className="col-md-3">
                      <h6 className="dropdown-header"></h6>
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
