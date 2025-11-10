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
                      <Link className="dropdown-item" href="/community-resources/community-forums">Communities & Forums</Link>
                      <Link className="dropdown-item" href="/community-resources/library-organizations">Library Organizations</Link>
                      <Link className="dropdown-item" href="/community-resources/professional-development">Learning & Professional Development</Link>
                      <Link className="dropdown-item" href="/community-resources/budgeting-grants">Budgeting & Grants</Link>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Technical Resources</h6>
                      <Link className="dropdown-item" href="/community-resources/security-privacy">Security and Privacy</Link>
                      <Link className="dropdown-item" href="/community-resources/it-infrastructure">IT Infrastructure</Link>
                      <Link className="dropdown-item" href="/community-resources/technology-workbook">Upgrade plan</Link>
                      <Link className="dropdown-item" href="/community-resources/upgrade-plan">Technology Workbook</Link>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Website Mangement</h6>
                      <Link className="dropdown-item" href="/community-resources/development-tools">Development Tools</Link>
                      <Link className="dropdown-item" href="/community-resources/developer-best-practices">Standards & Best Practices</Link>
                      <Link className="dropdown-item" href="/community-resources/accessibility">Accessibility</Link>
                      <Link className="dropdown-item" href="/community-resources/hosting-options">Hosting Solutions</Link>
                    </div>

                    {/* Column 4 */}
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Programming and Digital Literacy</h6>
                      <Link className="dropdown-item" href="/community-resources/gaming-programming">Gaming in Your Library</Link>
                      <Link className="dropdown-item" href="/community-resources/programming-coding">Coding Classes</Link>
                      <Link className="dropdown-item" href="/community-resources/programming-digital">Digital Literacy</Link>
                      <Link className="dropdown-item" href="/community-resources/programming-resume">Resume Building</Link>
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
                      <Link className="dropdown-item" href="/resources/guides">Incident Management Tool</Link>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-3">
                      <h6 className="dropdown-header">Open Source</h6>
                      <Link className="dropdown-item" href="/digital-resources/library-management">Library Management & Discovery</Link>
                      <Link className="dropdown-item" href="/digital-resources/pc-management">Public Access & Patron Computing</Link>
                      <Link className="dropdown-item" href="/programming-coding">Makerspace, Coding, & Creative Tools</Link>
                      <Link className="dropdown-item" href="/programming-coding">Website, CMS, and Communication</Link>
                       <Link className="dropdown-item" href="/services">Learning & Digital Literacy Platforms</Link>
                      <Link className="dropdown-item" href="/programming-coding">IT Infrastructure & Support</Link>
                      <Link className="dropdown-item" href="/programming-coding">Data, Research, and Analytics</Link>
                      <Link className="dropdown-item" href="/programming-coding">Patron Engagement & Programming</Link>
                       <Link className="dropdown-item" href="/programming-coding">Accessibility & Assistive Technology</Link>
                      <Link className="dropdown-item" href="/digital-resources/privacy-security">Privacy & Security</Link>
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
                      <h6 className="dropdown-header">Guides</h6>
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
