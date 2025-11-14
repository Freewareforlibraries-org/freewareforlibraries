import React from 'react'

const LibraryWebTools = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center">Website & Data Management</h1>
        <p className="fs-5 text-teal-mid text-center mb-3">
          Free and open-source tools for library websites, analytics, collaboration, and digital collections
        </p>
        <div className="alert alert-info border-0 shadow-sm mx-auto" style={{maxWidth: '800px'}} role="alert">
          <p className="mb-0 text-center">
            Build your library's digital presence with powerful open-source tools for content management, 
            data insights, team collaboration, and digital asset management—all without expensive licenses!
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
                  <td>Easy Website Management</td>
                  <td>WordPress</td>
                  <td>User-friendly CMS with vast plugin ecosystem</td>
                </tr>
                <tr>
                  <td>Enterprise/Multi-branch Sites</td>
                  <td>Drupal, Backdrop CMS</td>
                  <td>Scalable, multilingual library networks</td>
                </tr>
                <tr>
                  <td>Privacy-focused Analytics</td>
                  <td>Matomo, Plausible</td>
                  <td>Self-hosted website tracking</td>
                </tr>
                <tr>
                  <td>Data Dashboards</td>
                  <td>Metabase, Grafana</td>
                  <td>Visualizing library metrics and operations</td>
                </tr>
                <tr>
                  <td>Staff Collaboration</td>
                  <td>Nextcloud, Rocket.Chat</td>
                  <td>File sharing and team communication</td>
                </tr>
                <tr>
                  <td>Digital Collections</td>
                  <td>Islandora, Dataverse</td>
                  <td>Managing library digital assets and archives</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Website / CMS Platforms */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-globe"></i> Website / CMS Platforms
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">WordPress</h5>
                  <p className="text-muted small mb-2">User-Friendly Content Management</p>
                  <p className="card-text">Very popular CMS with large ecosystem of themes and plugins. Excellent for library websites needing ease of use and extensive customization options.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://wordpress.org/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=wordpress+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Drupal</h5>
                  <p className="text-muted small mb-2">Enterprise-Grade CMS</p>
                  <p className="card-text">Powerful and scalable CMS ideal for library networks, multilingual sites, or multi-branch organizations requiring robust content architecture.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.drupal.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.drupal.org/download" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=drupal+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Backdrop CMS</h5>
                  <p className="text-muted small mb-2">Simplified Drupal Fork</p>
                  <p className="card-text">A fork of Drupal 7 designed for small-to-medium organizations. Simpler than full Drupal while maintaining power and flexibility.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://backdropcms.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://backdropcms.org/download" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=backdrop+cms+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Grav</h5>
                  <p className="text-muted small mb-2">Flat-File CMS</p>
                  <p className="card-text">Lightweight, flat-file CMS with no database required. Focused on simplicity, speed, and easy content management through Markdown.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> MIT (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://getgrav.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://getgrav.org/downloads" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=grav+cms+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Joomla!</h5>
                  <p className="text-muted small mb-2">Mid-Level CMS</p>
                  <p className="card-text">Mid-level CMS with strong extensibility and built-in multilingual support. Good option for non-technical staff with various site needs.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.joomla.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.joomla.org/download.html" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=joomla+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Wagtail</h5>
                  <p className="text-muted small mb-2">Python/Django CMS</p>
                  <p className="card-text">Python/Django-based CMS with modern workflow features. Ideal if your IT team works in Python and wants contemporary content management.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> BSD (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://wagtail.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://docs.wagtail.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Documentation</a>
                    <a href="https://www.youtube.com/results?search_query=wagtail+cms+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Strapi</h5>
                  <p className="text-muted small mb-2">Headless CMS</p>
                  <p className="card-text">API-first headless CMS where content is managed centrally but can serve multiple front ends (web, mobile apps, digital signage).</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> MIT (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://strapi.io/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://github.com/strapi/documentation" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=strapi+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Concrete CMS</h5>
                  <p className="text-muted small mb-2">In-Context Editing CMS</p>
                  <p className="card-text">Flexible CMS with in-context editing and modular blocks, making it easy for content editors to manage pages visually.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> MIT (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.concretecms.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.concretecms.com/download" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=concrete+cms+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics / Data-Insight Tools */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-graph-up"></i> Analytics / Data-Insight Tools
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Recommended</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Matomo</h5>
                  <p className="text-muted small mb-2">Privacy-Friendly Web Analytics</p>
                  <p className="card-text">Open-source, self-hosted website analytics platform. Excellent for libraries mindful of user privacy while gaining valuable insights.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Self-hosted</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://matomo.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://matomo.org/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=matomo+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Plausible Analytics</h5>
                  <p className="text-muted small mb-2">Minimalist Privacy Analytics</p>
                  <p className="card-text">Lightweight, privacy-first analytics with simple interface. Perfect for simpler web-analytics needs without complexity.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> AGPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Self-hosted</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://plausible.io/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://github.com/plausible/docs" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=plausible+analytics+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Metabase</h5>
                  <p className="text-muted small mb-2">Business Intelligence Dashboard</p>
                  <p className="card-text">Open-source tool for building dashboards and querying data. Useful for aggregating library system data with website analytics.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> AGPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Self-hosted</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.metabase.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.metabase.com/start/oss/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=metabase+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Apache Superset</h5>
                  <p className="text-muted small mb-2">Advanced Data Visualization</p>
                  <p className="card-text">More advanced dashboard and visualization tool. Good for deeper data insight across library operations and complex metrics.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Self-hosted</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://superset.apache.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://github.com/apache/superset" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=apache+superset+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Grafana</h5>
                  <p className="text-muted small mb-2">Operational Metrics Dashboard</p>
                  <p className="card-text">Often used for monitoring and dashboards. Useful for displaying operational or usage metrics publicly or internally.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> AGPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Self-hosted</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://grafana.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://grafana.com/grafana/download" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=grafana+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration / Communication Tools */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-people"></i> Collaboration / Communication Tools
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
                  <p className="text-muted small mb-2">Self-Hosted Collaboration Suite</p>
                  <p className="card-text">Self-hosted file-sharing, calendars, notes, and collaboration platform. Ideal for library staff across multiple branches.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> AGPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Self-hosted</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://nextcloud.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://nextcloud.com/install/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=nextcloud+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Rocket.Chat</h5>
                  <p className="text-muted small mb-2">Team Communication Platform</p>
                  <p className="card-text">Open-source chat and team communication platform. Good alternative to proprietary chat tools with integrations and file sharing.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> MIT (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Self-hosted</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://rocket.chat/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://docs.rocket.chat/deploy/deploy-rocket.chat" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=rocket.chat+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Mattermost</h5>
                  <p className="text-muted small mb-2">Team Collaboration Platform</p>
                  <p className="card-text">Another open-source team collaboration and chat platform with integrations and file sharing capabilities for library staff.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Various (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Self-hosted</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://mattermost.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://docs.mattermost.com/guides/deployment.html" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=mattermost+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Tiki Wiki CMS Groupware</h5>
                  <p className="text-muted small mb-2">Wiki + Collaboration + CMS</p>
                  <p className="card-text">Combines wiki, collaboration, and CMS features. Useful for internal knowledge-base and team collaboration in one platform.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> LGPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://tiki.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://tiki.org/Get-Tiki" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=tiki+wiki+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">EGroupware</h5>
                  <p className="text-muted small mb-2">Groupware Suite</p>
                  <p className="card-text">Open-source groupware suite with file sharing, calendar, and task management tailored for organizations with multiple staff.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Self-hosted</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.egroupware.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.egroupware.org/download" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=egroupware+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Library-Specific / Data-Management & Digital Collections */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-archive"></i> Library-Specific / Digital Collections
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Recommended</span>
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Islandora</h5>
                  <p className="text-muted small mb-2">Digital Repository System</p>
                  <p className="card-text">Open-source digital repository and asset management system built on Drupal. Excellent for managing library digital collections.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://islandora.ca/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.islandora.ca/get-islandora" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Documentation</a>
                    <a href="https://www.youtube.com/results?search_query=islandora+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Dataverse</h5>
                  <p className="text-muted small mb-2">Research Data Repository</p>
                  <p className="card-text">Open-source web application for sharing, preserving, and citing research data. Useful for academic and public libraries with data repositories.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://dataverse.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://github.com/IQSS/dataverse/releases" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Documentation</a>
                    <a href="https://www.youtube.com/results?search_query=dataverse+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">DokuWiki</h5>
                  <p className="text-muted small mb-2">Simple Wiki Platform</p>
                  <p className="card-text">Lightweight wiki platform with no database needed. Good for internal staff knowledge base and documentation.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.dokuwiki.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://github.com/splitbrain/dokuwiki-downloader" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Install Guide</a>
                    <a href="https://www.youtube.com/results?search_query=dokuwiki+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Directus</h5>
                  <p className="text-muted small mb-2">Headless CMS / Data Platform</p>
                  <p className="card-text">Could be used by libraries to manage structured metadata and API publishing of collection data with flexible data models.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://directus.io/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://docs.directus.io/getting-started/installation/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Installation</a>
                    <a href="https://www.youtube.com/results?search_query=directus+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Baserow</h5>
                  <p className="text-muted small mb-2">Open-Source Database Platform</p>
                  <p className="card-text">Spreadsheet-style collaborative database. Could support library catalogs, project tracking, and outreach logs.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> MIT (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Self-hosted</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://baserow.io/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://github.com/baserow/baserow/tree/develop/docs" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=baserow+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Tips */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3 text-center">
            <i className="bi bi-lightbulb"></i> Implementation Tips
          </h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card h-100 border-primary">
                <div className="card-body">
                  <h5 className="card-title text-primary"><i className="bi bi-arrow-right-circle"></i> Start Small</h5>
                  <p className="card-text">Pick a core stack (e.g., WordPress for website + Matomo for analytics + Nextcloud for staff collaboration) and expand as you gain capacity.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-success">
                <div className="card-body">
                  <h5 className="card-title text-success"><i className="bi bi-people-fill"></i> Match Tools to Staffing</h5>
                  <p className="card-text">If your IT/tech team is small, choose tools with easier setup and strong community support. Dedicated developers can handle more flexible tools.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-warning">
                <div className="card-body">
                  <h5 className="card-title text-warning"><i className="bi bi-shield-check"></i> Data Governance</h5>
                  <p className="card-text">Create policies for content publishing, analytics tracking, staff access, backups, and security updates.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-info">
                <div className="card-body">
                  <h5 className="card-title text-info"><i className="bi bi-diagram-3"></i> Plan Integration</h5>
                  <p className="card-text">Think about how your website, analytics, collaboration, and collection systems communicate to avoid creating data silos.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-danger">
                <div className="card-body">
                  <h5 className="card-title text-danger"><i className="bi bi-book"></i> Training & Documentation</h5>
                  <p className="card-text">Provide staff training on adopted tools and maintain internal documentation (e.g., in a wiki) for workflows.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-secondary">
                <div className="card-body">
                  <h5 className="card-title text-secondary"><i className="bi bi-universal-access"></i> Accessibility & User Focus</h5>
                  <p className="card-text">Ensure accessibility for patrons, mobile responsiveness, searchability, and clear navigation on public-facing sites.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LibraryWebTools