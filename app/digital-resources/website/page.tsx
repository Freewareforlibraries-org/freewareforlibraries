import React from 'react'

const WebsiteCMSTools = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center">Website & CMS Platforms</h1>
        <p className="fs-5 text-teal-mid text-center mb-3">
          Open-source tools for library websites, analytics, collaboration, and digital collections
        </p>

        <div className="alert alert-info border-0 shadow-sm mx-auto" style={{ maxWidth: '800px' }} role="alert">
          <p className="mb-0 text-center">
            Build and manage professional library websites, track analytics, enable staff collaboration, and preserve digital collections—all with free and open-source solutions!
          </p>
        </div>

        {/* Quick Reference Table */}
        {/* ... (your table and sections go here unchanged) ... */}

        {/* Collaboration Tools */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-people"></i> Collaboration & Communication Tools
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Nextcloud</h5>
                  <p className="text-muted small mb-2">Self-Hosted Collaboration Platform</p>
                  <p className="card-text">
                    Self-hosted file-sharing, calendars, notes, and collaboration platform. Ideal for library staff across branches.
                  </p>
                  <p className="text-muted small mb-2"><strong>License:</strong> AGPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Web/Server</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://nextcloud.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://nextcloud.com/install/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Install
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=nextcloud+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WebsiteCMSTools;
