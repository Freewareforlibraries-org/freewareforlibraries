import React from 'react'

const LibraryManagementSystems = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center mb-5">Library Management & Discovery Systems</h1>
        
        {/* Main Content in Single Column */}
        <div className="mx-auto" style={{maxWidth: '900px'}}>
          
          <div className="mb-5 text-center">
            <p className="lead mb-4">
              These systems form the backbone of a library's technical infrastructure. They handle cataloging, circulation, acquisitions, patron management, and discovery (searching across the library's holdings and digital resources).
            </p>
            <p className="text-muted">Below are some of the most widely used and well-supported open-source options, including their features, technical notes, and community resources.</p>
          </div>

          {/* Integrated Library Systems */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-bookmark-check"></i> Integrated Library Systems (ILS)
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  Koha <span className="badge bg-success ms-2">Open Source</span> <span className="badge bg-warning text-dark ms-2">Most Popular</span>
                </h5>
                <p className="text-muted small mb-2">World's First Open-Source ILS</p>
              </div>
              
              <p className="mb-3">Koha is the world's first open-source Integrated Library System, originally developed in New Zealand in 1999. It's now used by thousands of libraries worldwide and is actively maintained by a global community of developers and librarians.</p>

              <p className="mb-2"><strong>Core Features:</strong></p>
              <ul className="mb-3">
                <li><strong>Cataloging:</strong> MARC21 and UNIMARC support, Z39.50/SRU integration, authority control, customizable frameworks</li>
                <li><strong>Circulation:</strong> Check-in/check-out, holds and reserves management, fine calculation and payment, patron notifications (email, SMS)</li>
                <li><strong>Acquisitions:</strong> Vendor management, budget tracking, order processing, serials management</li>
                <li><strong>Patron Management:</strong> Patron accounts and records, customizable categories, self-service portal (OPAC), reading history tracking</li>
              </ul>

              <p className="mb-2"><strong>Technical Specifications:</strong></p>
              <ul className="mb-3">
                <li><strong>Backend:</strong> Perl</li>
                <li><strong>Database:</strong> MySQL/MariaDB</li>
                <li><strong>Web Server:</strong> Apache</li>
                <li><strong>Search Engine:</strong> Zebra or Elasticsearch</li>
                <li><strong>Server Requirements:</strong> Linux server (Debian/Ubuntu recommended), minimum 2GB RAM (4GB+ recommended)</li>
              </ul>

              <p className="mb-2"><strong>Key Advantages:</strong></p>
              <ul className="mb-3">
                <li>Cost-effective with no licensing fees (only hosting and support costs)</li>
                <li>Active global community of developers and users</li>
                <li>Translated into 70+ languages</li>
                <li>Highly customizable and flexible</li>
                <li>Mature and stable platform with continuous development</li>
              </ul>

              <p className="mb-2"><strong>Community & Support:</strong></p>
              <ul className="mb-3">
                <li>Comprehensive manual and wiki available</li>
                <li>Active mailing lists for users and developers</li>
                <li>Real-time help on IRC (#koha channel)</li>
                <li>Multiple vendors offer paid support and hosting</li>
                <li>Annual KohaCon conference brings together developers and users</li>
              </ul>

              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Best For:</strong> Libraries of all sizes looking for a mature, feature-rich ILS with strong community support. Particularly good for libraries wanting control over their system and the ability to customize.</p>
              </div>

              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Open Source</span>
                <span className="badge bg-teal-light text-teal-dark">Mature & Stable</span>
                <span className="badge bg-teal-light text-teal-dark">Highly Customizable</span>
                <span className="badge bg-teal-light text-teal-dark">Multilingual</span>
              </div>

              <a href="https://koha-community.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow me-2">Official Website</a>
              <a href="https://koha-community.org/documentation/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary hvr-grow me-2">Documentation</a>
              <a href="https://github.com/Koha-Community/Koha" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary hvr-grow">GitHub</a>
            </div>

            {/* Placeholder for additional systems */}
            <div className="mb-4 p-4 bg-light rounded">
              <h5 className="text-teal-mid fw-bold mb-3 text-center">Additional ILS Systems</h5>
              <p className="mb-3 text-center">This guide will be expanded to include additional open-source Integrated Library Systems such as:</p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <span className="badge bg-secondary" style={{fontSize: '0.9rem', padding: '8px 16px'}}>Evergreen</span>
                <span className="badge bg-secondary" style={{fontSize: '0.9rem', padding: '8px 16px'}}>FOLIO</span>
                <span className="badge bg-secondary" style={{fontSize: '0.9rem', padding: '8px 16px'}}>OpenBiblio</span>
              </div>
            </div>
          </div>

          {/* Discovery Systems */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-search"></i> Discovery Systems
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">What Are Discovery Systems?</h5>
              </div>
              
              <p className="mb-3">Discovery systems provide unified search interfaces that go beyond traditional library catalogs (OPACs). They allow patrons to search across multiple resources simultaneously—including the library catalog, digital collections, databases, institutional repositories, and more.</p>

              <p className="mb-2"><strong>Key Features:</strong></p>
              <ul className="mb-3">
                <li><strong>Unified Search:</strong> Search across catalog, databases, digital collections, and external resources in one interface</li>
                <li><strong>Faceted Navigation:</strong> Refine results by format, date, author, subject, availability, and more</li>
                <li><strong>Relevancy Ranking:</strong> Intelligent algorithms prioritize the most relevant results</li>
                <li><strong>Enriched Content:</strong> Book covers, summaries, reviews, and related recommendations</li>
              </ul>

              <div className="alert alert-info border-0 mb-0">
                <p className="mb-0"><strong>ℹ️ Coming Soon:</strong> Detailed coverage of open-source discovery systems including VuFind, Blacklight, and others with implementation guides and comparison information.</p>
              </div>
            </div>
          </div>

          {/* Implementation Considerations */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-list-check"></i> Implementation Considerations
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-3">Before You Choose</h5>
                <ul className="mb-0">
                  <li>Assess your library's size and complexity</li>
                  <li>Evaluate your technical capacity (in-house vs. hosted)</li>
                  <li>Consider your budget for implementation and ongoing support</li>
                  <li>Review integration needs with existing systems</li>
                  <li>Survey your staff's technical comfort level</li>
                </ul>
              </div>

              <div>
                <h5 className="text-teal-mid fw-bold mb-3">Implementation Options</h5>
                <ul className="mb-0">
                  <li><strong>Self-Hosted:</strong> Install and maintain on your own servers</li>
                  <li><strong>Cloud-Hosted:</strong> Use a commercial hosting provider</li>
                  <li><strong>Consortium:</strong> Share hosting with other libraries</li>
                  <li><strong>Hybrid:</strong> Local installation with vendor support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mb-5 p-4 bg-light rounded">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-info-circle"></i> Additional Resources
            </h2>
            
            <div className="row g-3">
              <div className="col-md-4">
                <div className="p-3 bg-white rounded h-100">
                  <h6 className="text-teal-mid fw-bold mb-2">Community Forums</h6>
                  <p className="small mb-0">Connect with other libraries using these systems, ask questions, and share experiences</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 bg-white rounded h-100">
                  <h6 className="text-teal-mid fw-bold mb-2">Vendor Directories</h6>
                  <p className="small mb-0">Find commercial support providers for installation, hosting, and customization services</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 bg-white rounded h-100">
                  <h6 className="text-teal-mid fw-bold mb-2">Migration Guides</h6>
                  <p className="small mb-0">Step-by-step documentation for migrating data from legacy systems to open-source platforms</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="p-4 bg-white shadow-sm rounded text-center">
            <h4 className="text-teal-mid fw-bold mb-3">Ready to Explore Library Management Systems?</h4>
            <p className="mb-4">Open-source library systems offer powerful features, flexibility, and community support without the high costs of proprietary solutions. Start by evaluating your needs, then explore the options that best fit your library.</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <span className="badge bg-teal-light text-teal-dark" style={{fontSize: '0.9rem', padding: '8px 16px'}}>
                <i className="bi bi-unlock me-2"></i>Open Source
              </span>
              <span className="badge bg-teal-light text-teal-dark" style={{fontSize: '0.9rem', padding: '8px 16px'}}>
                <i className="bi bi-cash-coin me-2"></i>Cost-Effective
              </span>
              <span className="badge bg-teal-light text-teal-dark" style={{fontSize: '0.9rem', padding: '8px 16px'}}>
                <i className="bi bi-people-fill me-2"></i>Community Support
              </span>
              <span className="badge bg-teal-light text-teal-dark" style={{fontSize: '0.9rem', padding: '8px 16px'}}>
                <i className="bi bi-sliders me-2"></i>Customizable
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LibraryManagementSystems