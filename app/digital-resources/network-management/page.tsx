import React from 'react';

const NetworkMonitoringTools = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">
        <h1 className="display-1 text-teal-mid fw-bolder text-center">Network Monitoring & Management</h1>
        <p className="fs-5 text-teal-mid text-center mb-3">
          Tools for monitoring networks, servers, and infrastructure in library environments
        </p>
        <div className="alert alert-info border-0 shadow-sm mx-auto" style={{ maxWidth: '800px' }} role="alert">
          <p className="mb-0 text-center">
            These tools help library IT staff monitor network performance, troubleshoot issues, document infrastructure, and ensure reliable service for patrons and staff!
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
                  <td>Network & Device Monitoring</td>
                  <td>PRTG, Zabbix</td>
                  <td>Small to medium libraries needing visibility</td>
                </tr>
                <tr>
                  <td>Enterprise-Grade Monitoring</td>
                  <td>SolarWinds NPM</td>
                  <td>Larger library systems with complex networks</td>
                </tr>
                <tr>
                  <td>Real-Time System Monitoring</td>
                  <td>Netdata</td>
                  <td>Quick insights for single branches</td>
                </tr>
                <tr>
                  <td>Infrastructure Documentation</td>
                  <td>NetBox</td>
                  <td>Managing many devices, IPs, and locations</td>
                </tr>
                <tr>
                  <td>Network Troubleshooting</td>
                  <td>Wireshark</td>
                  <td>Deep packet analysis for WiFi and connectivity issues</td>
                </tr>
                <tr>
                  <td>Network Testing & Simulation</td>
                  <td>GNS3</td>
                  <td>Testing changes before production deployment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Comprehensive Network Monitoring */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-hdd-network"></i> Comprehensive Network Monitoring
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Popular</span>
                    <span className="badge bg-success">Small-Medium</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Paessler PRTG</h5>
                  <p className="text-muted small mb-2">Sensor-Based Network Monitor</p>
                  <p className="card-text">
                    Network, server, and device monitoring via sensors using SNMP, WMI, and packet sniffing. Excellent visibility for multiple devices across library branches.
                  </p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Commercial (sensor-based pricing)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">SNMP</span>
                    <span className="badge bg-teal-light text-teal-dark">Dashboards</span>
                    <span className="badge bg-teal-light text-teal-dark">Alerting</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.paessler.com/prtg" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.paessler.com/prtg/download" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary hvr-grow">Download Trial</a>
                    <a href="https://www.youtube.com/results?search_query=prtg+network+monitor+tutorial" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            {/* SolarWinds NPM */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Enterprise</span>
                    <span className="badge bg-danger text-white">Large Systems</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">SolarWinds NPM</h5>
                  <p className="text-muted small mb-2">Enterprise Network Performance Monitor</p>
                  <p className="card-text">
                    Enterprise-grade network monitoring and performance management with multi-protocol support, advanced alerting, and comprehensive dashboards for larger library systems.
                  </p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Commercial license</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Enterprise</span>
                    <span className="badge bg-teal-light text-teal-dark">Multi-Protocol</span>
                    <span className="badge bg-teal-light text-teal-dark">Advanced</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.solarwinds.com/network-performance-monitor" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.solarwinds.com/network-performance-monitor/registration" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary hvr-grow">Free Trial</a>
                    <a href="https://www.youtube.com/results?search_query=solarwinds+npm+tutorial" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Zabbix */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-info text-dark">Open Source</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Zabbix</h5>
                  <p className="text-muted small mb-2">Open-Source Monitoring Platform</p>
                  <p className="card-text">
                    Open-source monitoring for network devices and servers with SNMP support, distributed monitoring, and scalability. Great for libraries with tech staff willing to self-support.
                  </p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Free (open-source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Open Source</span>
                    <span className="badge bg-teal-light text-teal-dark">Scalable</span>
                    <span className="badge bg-teal-light text-teal-dark">SNMP</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.zabbix.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.zabbix.com/download" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=zabbix+tutorial" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* The rest of your component (Infrastructure, Real-Time, Network Documentation, Troubleshooting, Implementation Guidelines) would continue exactly as before. */}

      </div>
    </div>
  );
};

export default NetworkMonitoringTools;
