import React from 'react'

const LibraryPrivacySecurity = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center">Privacy & Security</h1>
        <p className="fs-5 text-teal-mid text-center mb-3">
          Free and open-source tools for protecting patron data and ensuring safe library access
        </p>
        <div className="alert alert-info border-0 shadow-sm mx-auto" style={{maxWidth: '800px'}} role="alert">
          <p className="mb-0 text-center">
            <strong>Pro Tip:</strong> These tools help libraries safeguard patron privacy, secure communications, 
            block malicious content, and manage passwords—all essential for maintaining patron trust and data security!
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
                  <td>Password Management</td>
                  <td>Bitwarden, KeePassXC</td>
                  <td>Secure password storage and sharing</td>
                </tr>
                <tr>
                  <td>Encrypted Communication</td>
                  <td>Signal, Element (Matrix)</td>
                  <td>Private messaging for staff and patrons</td>
                </tr>
                <tr>
                  <td>Network Ad & Tracker Blocking</td>
                  <td>Pi-hole</td>
                  <td>Library-wide privacy and bandwidth savings</td>
                </tr>
                <tr>
                  <td>Antivirus Protection</td>
                  <td>ClamAV</td>
                  <td>Scanning files and email attachments</td>
                </tr>
                <tr>
                  <td>Web Browsing Privacy</td>
                  <td>Privacy Badger, uBlock Origin</td>
                  <td>Blocking trackers on public computers</td>
                </tr>
                <tr>
                  <td>Secure File Sharing</td>
                  <td>OnionShare, Cryptomator</td>
                  <td>Anonymous sharing and encrypted storage</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Password Management */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-key"></i> Password Management
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Bitwarden</h5>
                  <p className="text-muted small mb-2">Cloud & Self-Hosted Password Manager</p>
                  <p className="card-text">User-friendly password manager with cloud sync or self-hosted options. Perfect for staff credential management and patron password education.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (GPL)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Mobile</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://bitwarden.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://bitwarden.com/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=bitwarden+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">KeePassXC</h5>
                  <p className="text-muted small mb-2">Offline Password Manager</p>
                  <p className="card-text">Completely offline password database with no cloud dependency. Ideal for maximum privacy and control over sensitive library credentials.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (GPL)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://keepassxc.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://keepassxc.org/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=keepassxc+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Vaultwarden</h5>
                  <p className="text-muted small mb-2">Self-Hosted Bitwarden Server</p>
                  <p className="card-text">Lightweight self-hosted implementation of Bitwarden server. Perfect for libraries wanting full control over password data without cloud services.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (GPL)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Self-Hosted</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://github.com/dani-garcia/vaultwarden" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit GitHub</a>
                    <a href="https://github.com/dani-garcia/vaultwarden/wiki" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=vaultwarden+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Encrypted Communication */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-shield-lock"></i> Encrypted Communication
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Signal</h5>
                  <p className="text-muted small mb-2">End-to-End Encrypted Messaging</p>
                  <p className="card-text">Gold standard for encrypted messaging with voice and video calls. Excellent for sensitive patron communications and staff coordination.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (GPL)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Mobile</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://signal.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://signal.org/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=signal+app+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Element (Matrix)</h5>
                  <p className="text-muted small mb-2">Decentralized Secure Messaging</p>
                  <p className="card-text">Open, federated messaging platform with end-to-end encryption. Can be self-hosted for complete control over library communications.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (Apache 2.0)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Mobile</span>
                    <span className="badge bg-teal-light text-teal-dark">Web</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://element.io/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://element.io/download" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=element+matrix+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Jitsi Meet</h5>
                  <p className="text-muted small mb-2">Secure Video Conferencing</p>
                  <p className="card-text">Open-source video conferencing platform with encryption. Self-host for private virtual programs, meetings, and patron consultations.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (Apache 2.0)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Web</span>
                    <span className="badge bg-teal-light text-teal-dark">Self-Hosted</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://jitsi.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-quickstart" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=jitsi+meet+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Network Privacy & Security */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-shield-check"></i> Network Privacy & Security
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Recommended</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Pi-hole</h5>
                  <p className="text-muted small mb-2">Network-Wide Ad & Tracker Blocking</p>
                  <p className="card-text">DNS-level ad and tracker blocking for entire library network. Improves privacy, reduces bandwidth usage, and protects against malicious domains.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (EUPL)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Raspberry Pi</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">Docker</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://pi-hole.net/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://github.com/pi-hole/pi-hole/#one-step-automated-install" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Install Guide</a>
                    <a href="https://www.youtube.com/results?search_query=pi-hole+setup+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">pfSense</h5>
                  <p className="text-muted small mb-2">Advanced Firewall & Router</p>
                  <p className="card-text">Enterprise-grade firewall with deep packet inspection, VPN support, and traffic shaping. Comprehensive network security for larger libraries.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (Apache 2.0)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">FreeBSD</span>
                    <span className="badge bg-teal-light text-teal-dark">Hardware Appliance</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.pfsense.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.pfsense.org/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=pfsense+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Suricata</h5>
                  <p className="text-muted small mb-2">Intrusion Detection System</p>
                  <p className="card-text">Real-time network threat detection and prevention. Monitors network traffic for suspicious activity and potential security breaches.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (GPL)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">Network Appliance</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://suricata.io/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://docs.suricata.io/en/latest/quickstart.html" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=suricata+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Antivirus & Malware Protection */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-bug"></i> Antivirus & Malware Protection
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">ClamAV</h5>
                  <p className="text-muted small mb-2">Open-Source Antivirus Engine</p>
                  <p className="card-text">Industry-standard open-source antivirus with regular updates. Perfect for scanning email attachments, file uploads, and shared documents.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (GPL)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.clamav.net/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.clamav.net/downloads" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=clamav+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">ClamTk</h5>
                  <p className="text-muted small mb-2">GUI for ClamAV</p>
                  <p className="card-text">User-friendly graphical interface for ClamAV. Makes virus scanning accessible to staff without command-line experience.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (GPL)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://gitlab.com/dave_m/clamtk/-/wikis/home" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Wiki</a>
                    <a href="https://gitlab.com/dave_m/clamtk/-/wikis/Downloads" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=clamtk+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">YARA</h5>
                  <p className="text-muted small mb-2">Malware Research & Detection</p>
                  <p className="card-text">Pattern-matching tool for identifying and classifying malware samples. Advanced tool for security-conscious libraries doing threat analysis.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (BSD)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://virustotal.github.io/yara/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://github.com/virustotal/yara" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=yara+malware+detection+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Browser Privacy Tools */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-browser-chrome"></i> Browser Privacy Tools
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Recommended</span>
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">uBlock Origin</h5>
                  <p className="text-muted small mb-2">Efficient Content Blocker</p>
                  <p className="card-text">Wide-spectrum blocker that protects against ads, trackers, and malware domains. Essential for public computer browsers.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (GPL)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Browser Extension</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://ublockorigin.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://github.com/gorhill/uBlock#installation" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=ublock+origin+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Privacy Badger</h5>
                  <p className="text-muted small mb-2">Automatic Tracker Blocker</p>
                  <p className="card-text">Learns to block invisible trackers automatically. Developed by EFF, ideal for protecting patron browsing privacy on public computers.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (GPL)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Browser Extension</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://privacybadger.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://privacybadger.org/#install" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=privacy+badger+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">HTTPS Everywhere</h5>
                  <p className="text-muted small mb-2">Force Encrypted Connections</p>
                  <p className="card-text">Automatically switches thousands of sites from insecure HTTP to secure HTTPS. Protects patron data from eavesdropping on public networks.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (GPL)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Browser Extension</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.eff.org/https-everywhere" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.eff.org/https-everywhere" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=https+everywhere+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* File Security & Encryption */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-file-lock"></i> File Security & Encryption
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">VeraCrypt</h5>
                  <p className="text-muted small mb-2">Disk & File Encryption</p>
                  <p className="card-text">Create encrypted volumes and secure entire drives. Essential for protecting sensitive library data on portable drives and backups.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.veracrypt.fr/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.veracrypt.fr/en/Downloads.html" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=veracrypt+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Cryptomator</h5>
                  <p className="text-muted small mb-2">Cloud Storage Encryption</p>
                  <p className="card-text">Encrypt files before uploading to cloud storage. Perfect for libraries using cloud services while maintaining data privacy.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (GPL)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Mobile</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://cryptomator.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://cryptomator.org/downloads/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=cryptomator+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">OnionShare</h5>
                  <p className="text-muted small mb-2">Anonymous File Sharing</p>
                  <p className="card-text">Share files securely and anonymously using Tor network. Ideal for sensitive document sharing with whistleblowers or vulnerable patrons.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (GPL)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://onionshare.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://onionshare.org/#download" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=onionshare+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Privacy Tools */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-incognito"></i> Additional Privacy Tools
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">BleachBit</h5>
                  <p className="text-muted small mb-2">System Cleaner & Privacy Tool</p>
                  <p className="card-text">Clears cache, cookies, temporary files, and browsing history. Essential for maintaining patron privacy on shared public computers.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (GPL)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.bleachbit.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.bleachbit.org/download" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=bleachbit+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">OpenVPN</h5>
                  <p className="text-muted small mb-2">Secure VPN Solution</p>
                  <p className="card-text">Create secure encrypted tunnels for remote access. Allows staff to securely access library systems from home or branch locations.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source (GPL)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://openvpn.net/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://openvpn.net/community-downloads/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=openvpn+setup+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
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

export default LibraryPrivacySecurity