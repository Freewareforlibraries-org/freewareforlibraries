import React from 'react'

const MonitoringAndLoggingTools = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center">IT Monitoring & Logging Tools for Libraries</h1>
        <p className="fs-5 text-teal-mid text-center mb-3">
          Open-source monitoring and log management solutions for library IT infrastructure
        </p>
        <div className="alert alert-info border-0 shadow-sm mx-auto" style={{maxWidth: '800px'}} role="alert">
          <p className="mb-0 text-center">
            These tools help library IT staff monitor servers, network devices, applications, and logs for troubleshooting, 
            uptime tracking, and security auditing—all without expensive commercial software!
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
                  <td>Centralized Log Management</td>
                  <td>Graylog</td>
                  <td>Search, alerting, and dashboards for logs</td>
                </tr>
                <tr>
                  <td>Lightweight Log Aggregation</td>
                  <td>Grafana Loki</td>
                  <td>Integration with Grafana metrics</td>
                </tr>
                <tr>
                  <td>Full Observability Platform</td>
                  <td>SigNoz</td>
                  <td>Unified logs, metrics, and traces</td>
                </tr>
                <tr>
                  <td>Basic Server Monitoring</td>
                  <td>Monitorix</td>
                  <td>Lightweight graphs for CPU, memory, network</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Log Management */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-file-text"></i> Log Management
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Graylog</h5>
                  <p className="text-muted small mb-2">Centralized Log Management Platform</p>
                  <p className="card-text">Collects, indexes, and analyzes logs from multiple sources with dashboards, alerting, and powerful search capabilities for IT operations.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">Docker</span>
                    <span className="badge bg-teal-light text-teal-dark">Scalable</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://graylog.org/products/source-available" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://docs.graylog.org/docs" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Documentation</a>
                    <a href="https://github.com/Graylog2/graylog2-server" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">GitHub</a>
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
                  <h5 className="card-title text-teal-mid fw-bold">Grafana Loki</h5>
                  <p className="text-muted small mb-2">Lightweight Log Aggregation System</p>
                  <p className="card-text">Efficient log storage with lightweight indexing that integrates seamlessly with Grafana dashboards for visualization alongside metrics.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Docker</span>
                    <span className="badge bg-teal-light text-teal-dark">Kubernetes</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://grafana.com/oss/loki/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://grafana.com/docs/loki/latest/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Documentation</a>
                    <a href="https://github.com/grafana/loki" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Observability Platforms */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-speedometer2"></i> Observability Platforms
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">SigNoz</h5>
                  <p className="text-muted small mb-2">Unified Observability Platform</p>
                  <p className="card-text">Collects logs, metrics, and traces in one platform for holistic monitoring of applications and infrastructure with dashboards and alerting.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Docker</span>
                    <span className="badge bg-teal-light text-teal-dark">Kubernetes</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://signoz.io/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://docs.signoz.io/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Documentation</a>
                    <a href="https://github.com/SigNoz/signoz" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Monitoring */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-speedometer"></i> System Monitoring
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Monitorix</h5>
                  <p className="text-muted small mb-2">Lightweight System Monitoring Tool</p>
                  <p className="card-text">Provides graphs and metrics for system performance including CPU, memory, disk, and network usage. Lightweight and easy to deploy.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.monitorix.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.monitorix.org/documentation.html" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Documentation</a>
                    <a href="https://github.com/monitorix/monitorix" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MonitoringAndLoggingTools