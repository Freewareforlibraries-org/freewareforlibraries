import React from 'react'

const LibraryIdentityManagement = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center">Identity, Access, and Authentication Tools</h1>
        <p className="fs-5 text-teal-mid text-center mb-3">
          Free and open-source solutions for managing user identities and centralized authentication in public libraries
        </p>
        <div className="alert alert-info border-0 shadow-sm mx-auto" style={{maxWidth: '800px'}} role="alert">
          <p className="mb-0 text-center">
            These tools help libraries implement centralized user management, LDAP directories, and single sign-on authentication—all without expensive commercial software!
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
                  <td>Complete Identity Management</td>
                  <td>FreeIPA</td>
                  <td>Linux environments with centralized auth</td>
                </tr>
                <tr>
                  <td>Enterprise LDAP Directory</td>
                  <td>389 Directory Server</td>
                  <td>High-performance user/group storage</td>
                </tr>
                <tr>
                  <td>Lightweight Directory Service</td>
                  <td>OpenLDAP</td>
                  <td>Foundation for authentication systems</td>
                </tr>
                <tr>
                  <td>Java-based LDAP/Kerberos</td>
                  <td>Apache Directory Server</td>
                  <td>Organizations using Java infrastructure</td>
                </tr>
                <tr>
                  <td>Easy LDAP Management</td>
                  <td>FusionDirectory</td>
                  <td>Web-based user/group administration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Identity Management & Directory Services */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-person-badge"></i> Identity Management & Directory Services
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">FreeIPA</h5>
                  <p className="text-muted small mb-2">Complete Identity Management System</p>
                  <p className="card-text">Centralized authentication, authorization, and account information management. Integrates with Linux servers and is Active Directory-compatible.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">LDAP</span>
                    <span className="badge bg-teal-light text-teal-dark">Kerberos</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.freeipa.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.freeipa.org/page/Downloads" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=freeipa+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Recommended</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">389 Directory Server</h5>
                  <p className="text-muted small mb-2">Enterprise-Grade LDAP Directory</p>
                  <p className="card-text">Enterprise-grade LDAP directory server maintained by Red Hat. Ideal for storing user and group information with high performance and reliability.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">LDAP</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://directory.fedoraproject.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://directory.fedoraproject.org/docs/389ds/download.html" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=389+directory+server+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">OpenLDAP</h5>
                  <p className="text-muted small mb-2">Lightweight Directory Protocol</p>
                  <p className="card-text">Lightweight, open-source LDAP implementation for centralized directory management. Foundation for many authentication systems.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> OpenLDAP Public License</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                    <span className="badge bg-teal-light text-teal-dark">LDAP</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.openldap.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.openldap.org/software/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=openldap+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Apache Directory Server</h5>
                  <p className="text-muted small mb-2">Java-based LDAP & Kerberos</p>
                  <p className="card-text">Java-based LDAP and Kerberos server with GUI tools (Apache Directory Studio) for easier administration.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache License 2.0</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                    <span className="badge bg-teal-light text-teal-dark">Java</span>
                    <span className="badge bg-teal-light text-teal-dark">LDAP</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://directory.apache.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://directory.apache.org/apacheds/downloads.html" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=apache+directory+server+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">FusionDirectory</h5>
                  <p className="text-muted small mb-2">Web-based LDAP Management</p>
                  <p className="card-text">Web interface for managing LDAP data, works well with OpenLDAP. Simplifies user and group management with an intuitive GUI.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Web/Server</span>
                    <span className="badge bg-teal-light text-teal-dark">LDAP</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.fusiondirectory.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.fusiondirectory.org/en/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=fusiondirectory+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mb-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="text-teal-mid fw-bold mb-3">
                <i className="bi bi-info-circle"></i> Getting Started with Identity Management
              </h3>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <h5 className="text-teal-mid">Why Use Identity Management?</h5>
                  <ul className="text-muted">
                    <li>Centralized user authentication across multiple systems</li>
                    <li>Single sign-on (SSO) capabilities for library services</li>
                    <li>Simplified user account management</li>
                    <li>Enhanced security with consistent password policies</li>
                    <li>Integration with existing library management systems</li>
                  </ul>
                </div>
                <div className="col-md-6 mb-3">
                  <h5 className="text-teal-mid">Common Use Cases</h5>
                  <ul className="text-muted">
                    <li>Managing staff and patron accounts centrally</li>
                    <li>Authenticating users for public computers</li>
                    <li>Integrating with ILS and digital library platforms</li>
                    <li>Controlling access to WiFi and network resources</li>
                    <li>Providing unified login for multiple library services</li>
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

export default LibraryIdentityManagement