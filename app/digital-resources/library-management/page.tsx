import React from 'react'

const LibraryManagementSystems = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center">Library Management & Discovery Systems</h1>
        <p className="fs-5 text-teal-mid text-center mb-3">
          Free and open-source tools for cataloging, circulation, acquisitions, and discovery
        </p>
        <div className="alert alert-info border-0 shadow-sm mx-auto" style={{maxWidth: '800px'}} role="alert">
          <p className="mb-0 text-center">
            These systems form the backbone of a library's technical infrastructure, handling everything from cataloging and circulation to patron management and resource discovery - all without expensive commercial software!
          </p>
        </div>

        {/* Quick Reference Table */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3 text-center">Quick Reference Guide</h2>
          <div className="table-responsive">
            <table className="table table-hover shadow-sm">
              <thead className="bg-teal-mid text-white">
                <tr>
                  <th>Need</th>
                  <th>Recommended Tool</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Complete Library System</td>
                  <td>Koha</td>
                  <td>Full-featured ILS with global support</td>
                </tr>
                <tr>
                  <td>Consortium Libraries</td>
                  <td>Evergreen</td>
                  <td>Multi-library shared systems</td>
                </tr>
                <tr>
                  <td>Modern Cloud-Native</td>
                  <td>FOLIO</td>
                  <td>Next-generation library services platform</td>
                </tr>
                <tr>
                  <td>Small Libraries</td>
                  <td>OpenBiblio</td>
                  <td>Simple, lightweight operations</td>
                </tr>
                <tr>
                  <td>Resource Discovery</td>
                  <td>VuFind, Blacklight</td>
                  <td>Enhanced patron search experience</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Integrated Library Systems */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-bookmark-check"></i> Integrated Library Systems (ILS)
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Koha</h5>
                  <p className="text-muted small mb-2">World's First Open-Source ILS</p>
                  <p className="card-text">Complete ILS with cataloging (MARC21/UNIMARC), circulation, acquisitions, serials, patron management, and OPAC. Used by thousands of libraries worldwide with active community support.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">Perl</span>
                    <span className="badge bg-teal-light text-teal-dark">MySQL</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://koha-community.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://koha-community.org/download-koha/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=koha+ils+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Evergreen</h5>
                  <p className="text-muted small mb-2">Consortium-Focused ILS</p>
                  <p className="card-text">Highly scalable ILS designed for library consortia. Features robust circulation, acquisitions, cataloging, and a powerful web-based staff client. Ideal for multi-library systems.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">PostgreSQL</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://evergreen-ils.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://evergreen-ils.org/downloads/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=evergreen+ils+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">FOLIO</h5>
                  <p className="text-muted small mb-2">Next-Generation Library Services Platform</p>
                  <p className="card-text">Modern, cloud-native library services platform with microservices architecture. Offers modular apps for circulation, acquisitions, e-resources, and more. The future of library systems.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Cloud-Native</span>
                    <span className="badge bg-teal-light text-teal-dark">Microservices</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.folio.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.folio.org/platform/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=folio+library+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">OpenBiblio</h5>
                  <p className="text-muted small mb-2">Simple ILS for Small Libraries</p>
                  <p className="card-text">Easy-to-use ILS designed for small libraries and schools. Features basic cataloging, circulation, and OPAC. Perfect for organizations with limited technical resources.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">PHP</span>
                    <span className="badge bg-teal-light text-teal-dark">MySQL</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="http://obiblio.sourceforge.net/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://sourceforge.net/projects/obiblio/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=openbiblio+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discovery Systems */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-search"></i> Discovery Systems
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">VuFind</h5>
                  <p className="text-muted small mb-2">Library Resource Discovery Portal</p>
                  <p className="card-text">Flexible discovery system that searches across your catalog, digital collections, and external resources. Features faceted search, user accounts, and extensive customization options.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">PHP</span>
                    <span className="badge bg-teal-light text-teal-dark">Solr</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://vufind.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://vufind.org/vufind/downloads.html" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=vufind+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Blacklight</h5>
                  <p className="text-muted small mb-2">Ruby-based Discovery Interface</p>
                  <p className="card-text">Modern discovery interface built on Ruby on Rails and Solr. Highly customizable with a strong developer community. Used by major research libraries worldwide.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Ruby on Rails</span>
                    <span className="badge bg-teal-light text-teal-dark">Solr</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://projectblacklight.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://github.com/projectblacklight/blacklight" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=blacklight+discovery+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Considerations */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-list-check"></i> Implementation Considerations
          </h2>
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="row g-4">
                <div className="col-md-6">
                  <h5 className="text-teal-mid fw-bold mb-3">Before You Choose</h5>
                  <ul className="mb-0">
                    <li>Assess your library's size and complexity</li>
                    <li>Evaluate your technical capacity (in-house vs. hosted)</li>
                    <li>Consider your budget for implementation and ongoing support</li>
                    <li>Review integration needs with existing systems</li>
                    <li>Survey your staff's technical comfort level</li>
                  </ul>
                </div>
                <div className="col-md-6">
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
          </div>
        </div>

      </div>
    </div>
  )
}

export default LibraryManagementSystems