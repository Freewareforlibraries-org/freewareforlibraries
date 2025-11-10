import React from 'react'

const LibraryPCManagement = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center">Public Access & Patron Computing</h1>
        <p className="fs-5 text-teal-mid text-center mb-3">
          Free and open-source tools for managing library public computers, sessions, and printing
        </p>
        <div className="alert alert-info border-0 shadow-sm mx-auto" style={{maxWidth: '800px'}} role="alert">
          <p className="mb-0 text-center">
            <strong>Pro Tip:</strong> These tools help libraries manage public computer access, enforce time limits, 
            restore systems to a clean state, and control printing quotas—all without expensive commercial software!
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
                  <td>Session Management & Reservations</td>
                  <td>Libki</td>
                  <td>Complete library PC management with printing</td>
                </tr>
                <tr>
                  <td>Print Management & Quotas</td>
                  <td>Libki, SavaPage</td>
                  <td>Tracking print jobs and user quotas</td>
                </tr>
                <tr>
                  <td>System Restore (Windows)</td>
                  <td>Toolwiz Time Freeze, UWF</td>
                  <td>Resetting PCs to clean state on reboot</td>
                </tr>
                <tr>
                  <td>System Restore (Linux)</td>
                  <td>Porteus Kiosk, Ofris</td>
                  <td>Locked-down public Linux terminals</td>
                </tr>
                <tr>
                  <td>Remote Monitoring & Control</td>
                  <td>Veyon</td>
                  <td>Managing multiple PCs from one location</td>
                </tr>
                <tr>
                  <td>Room/Resource Booking</td>
                  <td>LibreBooking, classroombookings</td>
                  <td>Scheduling computers and study rooms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Session Management & Reservations */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-calendar-check"></i> Session Management & Reservations
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Libki</h5>
                  <p className="text-muted small mb-2">Complete Library PC Management Solution</p>
                  <p className="card-text">Public PC reservations with session limits, first-come-first-served access, web admin interface, and integrated print quota management.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://libki.org/about/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://libki.org/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=libki+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">LibreBooking</h5>
                  <p className="text-muted small mb-2">Generic Booking System</p>
                  <p className="card-text">Open-source web-based booking system supporting multi-resource scheduling. Requires custom adaptation for PC session enforcement.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Web/Server</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://github.com/LibreBooking/app" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit GitHub</a>
                    <a href="https://github.com/LibreBooking/app" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=librebooking+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Classroom Bookings</h5>
                  <p className="text-muted small mb-2">Room & Computer Suite Booking</p>
                  <p className="card-text">Open-source booking system designed for room and computer suite scheduling with multi-user support. Primarily for bookings; needs custom integration for session enforcement.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Web/Server</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.classroombookings.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.classroombookings.com/self-host/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=classroombookings+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Print Management */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-printer"></i> Print Management
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Libki (Print Module)</h5>
                  <p className="text-muted small mb-2">Integrated Print Quota Management</p>
                  <p className="card-text">Optional print quotas per user and per printer, integrated with Libki's session management for a complete library solution.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://libki.org/about/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://libki.org/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=libki+print+management" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">SavaPage</h5>
                  <p className="text-muted small mb-2">Complete Print Tracking Solution</p>
                  <p className="card-text">Multi-platform print tracking with quotas, secure BYOD printing, and web portal. Often used in combination with Libki for full PC management.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.savapage.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="hhttps://wiki.savapage.org/doku.php?id=software_packages" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=savapage+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Baseline & Restore */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-arrow-clockwise"></i> Deepfreeze Alernative
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Recommended</span>
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Unified Write Filter (UWF)</h5>
                  <p className="text-muted small mb-2">Built-in Windows Feature</p>
                  <p className="card-text">Windows integrated feature that protects volumes by redirecting writes and discarding all changes on reboot. Supported and recommended for public or kiosk PCs.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Built-in / Free</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows Enterprise</span>
                    <span className="badge bg-teal-light text-teal-dark">Windows Education</span>
                    <span className="badge bg-teal-light text-teal-dark">Windows IoT</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://learn.microsoft.com/en-us/windows/iot/iot-enterprise/uwf-overview" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Documentation</a>
                    <a href="https://learn.microsoft.com/en-us/windows/iot/iot-enterprise/uwf-overview" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Setup Guide</a>
                    <a href="https://www.youtube.com/results?search_query=windows+unified+write+filter+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Toolwiz Time Freeze</h5>
                  <p className="text-muted small mb-2">Windows System Freeze Tool</p>
                  <p className="card-text">Freezes system changes and discards them on reboot. Best for Windows PCs and works well for small labs.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Free</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.toolwiz.com/products/toolwiz-time-freeze/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.toolwiz.com/products/toolwiz-time-freeze/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=toolwiz+time+freeze+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">RollBack Rx</h5>
                  <p className="text-muted small mb-2">Snapshot-based System Restore</p>
                  <p className="card-text">Snapshot-based restore solution that can roll back PCs to baseline. Free version may have limitations.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Free & Paid</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://horizondatasys.com/rollback-rx/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://horizondatasys.com/rollback-rx/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=rollback+rx+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Wioski</h5>
                  <p className="text-muted small mb-2">Self-healing Kiosk for Windows</p>
                  <p className="card-text">Self-healing kiosk that restores preset image on reboot. Niche solution with limited updates.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Free</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.wioski.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.wioski.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=wioski+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Porteus Kiosk</h5>
                  <p className="text-muted small mb-2">Locked-down Linux Kiosk OS</p>
                  <p className="card-text">Open-source locked-down kiosk operating system that resets fully on reboot. Ideal for self-service public PCs.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://porteus-kiosk.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://porteus-kiosk.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=porteus+kiosk+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Ofris</h5>
                  <p className="text-muted small mb-2">Linux System Freeze Tool</p>
                  <p className="card-text">Freezes system state and restores at reboot. Older Linux tool mainly designed for educational labs.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://github.com/tuxcrafter/ofris" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit GitHub</a>
                    <a href="https://github.com/tuxcrafter/ofris" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Documentation</a>
                    <a href="https://www.youtube.com/results?search_query=ofris+linux+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monitoring & Remote Control */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-display"></i> Monitoring & Remote Control
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Veyon</h5>
                  <p className="text-muted small mb-2">PC Monitoring & Control</p>
                  <p className="card-text">Monitor and control multiple PCs, lock/logoff users, and execute remote commands. Can complement session tools like Libki but doesn't handle printing or reservations.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://veyon.io/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://veyon.io/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=veyon+tutorial" target="_blank" rel="noopener noreferrer" 
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

export default LibraryPCManagement