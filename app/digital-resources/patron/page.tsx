import React from 'react'

const PatronEngagementPlatforms = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center">Patron Engagement & Library Management</h1>
        <p className="fs-5 text-teal-mid text-center mb-3">
          Software for patron engagement, marketing, library automation, and community building
        </p>
        <div className="alert alert-info border-0 shadow-sm mx-auto" style={{maxWidth: '800px'}} role="alert">
          <p className="mb-0 text-center">
            These platforms help libraries engage patrons through targeted communications, manage events and spaces, 
            streamline operations, and build stronger community connections!
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
                  <th>Recommended Platform</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Marketing & Patron Communications</td>
                  <td>Patron Point, LibraryAware</td>
                  <td>Targeted campaigns and newsletters</td>
                </tr>
                <tr>
                  <td>Event & Room Booking</td>
                  <td>LibCal (Springshare)</td>
                  <td>Programming calendars and space scheduling</td>
                </tr>
                <tr>
                  <td>Patron Q&A & Chat Support</td>
                  <td>LibAnswers (Springshare)</td>
                  <td>Multi-channel reference services</td>
                </tr>
                <tr>
                  <td>Integrated Library System (Open Source)</td>
                  <td>Koha</td>
                  <td>Full ILS with IT support capability</td>
                </tr>
                <tr>
                  <td>Cloud ILS for Small Libraries</td>
                  <td>LibraryWorld</td>
                  <td>Affordable cloud-based automation</td>
                </tr>
                <tr>
                  <td>Enhanced Catalog Experience</td>
                  <td>BiblioCommons</td>
                  <td>Community features and patron engagement</td>
                </tr>
                <tr>
                  <td>Analytics & Insights</td>
                  <td>OrangeBoy, WhoFi</td>
                  <td>Data-driven engagement strategies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Marketing & Communications */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-megaphone"></i> Marketing & Communications
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Popular</span>
                    <span className="badge bg-success">Medium-Large</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Patron Point</h5>
                  <p className="text-muted small mb-2">CRM-Style Marketing Platform</p>
                  <p className="card-text">Patron engagement platform with CRM-style marketing, patron segmentation, and targeted communications. Ideal for libraries with active data and marketing needs.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Commercial (varies by size)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">CRM</span>
                    <span className="badge bg-teal-light text-teal-dark">Segmentation</span>
                    <span className="badge bg-teal-light text-teal-dark">Campaigns</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.patronpoint.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.youtube.com/results?search_query=patron+point+library" target="_blank" rel="noopener noreferrer" 
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
                    <span className="badge bg-success">All Sizes</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">LibraryAware</h5>
                  <p className="text-muted small mb-2">Modern Library Engagement Tools</p>
                  <p className="card-text">Marketing and communications platform for newsletters, social media outreach, and displays. Perfect for libraries emphasizing outreach and promotion.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Subscription</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Newsletters</span>
                    <span className="badge bg-teal-light text-teal-dark">Social Media</span>
                    <span className="badge bg-teal-light text-teal-dark">Displays</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.libraryaware.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.youtube.com/results?search_query=libraryaware+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Management & Patron Support */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-calendar-event"></i> Event Management & Patron Support
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Popular</span>
                    <span className="badge bg-success">All Sizes</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">LibCal (Springshare)</h5>
                  <p className="text-muted small mb-2">Event & Space Booking</p>
                  <p className="card-text">Event, room, and space booking platform for library programming. Integrates with programming calendar and engagement efforts. Part of Springshare's suite.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Subscription</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Events</span>
                    <span className="badge bg-teal-light text-teal-dark">Rooms</span>
                    <span className="badge bg-teal-light text-teal-dark">Scheduling</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://springshare.com/libcal/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.youtube.com/results?search_query=libcal+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Medium-Large</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">LibAnswers (Springshare)</h5>
                  <p className="text-muted small mb-2">Multi-Channel Patron Support</p>
                  <p className="card-text">Patron Q&A, chat, and multi-channel support platform. Excellent for medium to large libraries focused on reference and engagement services.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Subscription</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Q&A</span>
                    <span className="badge bg-teal-light text-teal-dark">Chat</span>
                    <span className="badge bg-teal-light text-teal-dark">Reference</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://springshare.com/libanswers/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.youtube.com/results?search_query=libanswers+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Library Systems */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-server"></i> Integrated Library Systems (ILS)
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-info text-dark">Open Source</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Koha</h5>
                  <p className="text-muted small mb-2">Open Source ILS</p>
                  <p className="card-text">Full-featured open-source integrated library system with social sharing and tagging features. Best for small to large libraries with IT support capability.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Free (hosting/support costs)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Open Source</span>
                    <span className="badge bg-teal-light text-teal-dark">Full ILS</span>
                    <span className="badge bg-teal-light text-teal-dark">Social Features</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://koha-community.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
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
                    <span className="badge bg-warning text-dark me-2">Recommended</span>
                    <span className="badge bg-info text-dark">Small-Medium</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">LibraryWorld</h5>
                  <p className="text-muted small mb-2">Cloud-Based ILS</p>
                  <p className="card-text">Affordable cloud-based ILS designed for smaller public libraries and branches. Easy to use with annual subscription pricing.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Annual subscription</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Cloud-Based</span>
                    <span className="badge bg-teal-light text-teal-dark">Affordable</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.libraryworld.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.youtube.com/results?search_query=libraryworld+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">All Sizes</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Alexandria</h5>
                  <p className="text-muted small mb-2">Library Automation System</p>
                  <p className="card-text">Library automation system for cataloging and circulation. Used by school and public libraries to manage essential workflows efficiently.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Commercial license</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Cataloging</span>
                    <span className="badge bg-teal-light text-teal-dark">Circulation</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.goalexandria.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.youtube.com/results?search_query=alexandria+library+software" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-info text-dark">Small Libraries</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Mandarin</h5>
                  <p className="text-muted small mb-2">Web-Based Management</p>
                  <p className="card-text">Web-based library management system supporting essential workflows for smaller public or school libraries.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Subscription</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Web-Based</span>
                    <span className="badge bg-teal-light text-teal-dark">Simple</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.mlasolutions.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.youtube.com/results?search_query=mandarin+library+software" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">All Sizes</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Accessit Library</h5>
                  <p className="text-muted small mb-2">Library Management with User Features</p>
                  <p className="card-text">Library management system with user-facing features for school and public libraries. Streamlines operations while enhancing patron experience.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Subscription</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">User-Facing</span>
                    <span className="badge bg-teal-light text-teal-dark">Management</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://accessitlibrary.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.youtube.com/results?search_query=accessit+library+software" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Small-Medium</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Surpass</h5>
                  <p className="text-muted small mb-2">Library Automation System</p>
                  <p className="card-text">Library automation with patron management modules for public, corporate, and small to mid-sized libraries. Essential for engagement workflows.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Subscription</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Automation</span>
                    <span className="badge bg-teal-light text-teal-dark">Patron Management</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.surpasssoftware.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.youtube.com/results?search_query=surpass+library+software" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Patron Engagement Platforms */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-people"></i> Enhanced Patron Engagement
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Popular</span>
                    <span className="badge bg-success">Medium-Large</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">BiblioCommons</h5>
                  <p className="text-muted small mb-2">Library Engagement Platform</p>
                  <p className="card-text">Enhanced catalog experience with patron interface and community features. Ideal for medium to large public libraries focused on patron experience.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Commercial license</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Catalog</span>
                    <span className="badge bg-teal-light text-teal-dark">Community</span>
                    <span className="badge bg-teal-light text-teal-dark">Social</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.bibliocommons.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.youtube.com/results?search_query=bibliocommons+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Medium-Large</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Innovative Interfaces (VEGA LX)</h5>
                  <p className="text-muted small mb-2">Advanced Engagement Suite</p>
                  <p className="card-text">Patron engagement and event/room management suite for public libraries seeking advanced engagement capabilities and integrated workflows.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Commercial license</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Events</span>
                    <span className="badge bg-teal-light text-teal-dark">Engagement</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.iii.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.youtube.com/results?search_query=innovative+interfaces+vega" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics & Insights */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-graph-up"></i> Analytics & Insights
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Recommended</span>
                    <span className="badge bg-success">Data-Driven</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">OrangeBoy</h5>
                  <p className="text-muted small mb-2">Patron Analytics & Marketing</p>
                  <p className="card-text">Analytics and patron-engagement insights with marketing support. Perfect for public libraries wanting data-driven engagement and marketing strategies.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Commercial license</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Analytics</span>
                    <span className="badge bg-teal-light text-teal-dark">Marketing</span>
                    <span className="badge bg-teal-light text-teal-dark">Insights</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.orangeboyinc.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.youtube.com/results?search_query=orangeboy+library" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Community Spaces</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">WhoFi</h5>
                  <p className="text-muted small mb-2">WiFi Analytics Platform</p>
                  <p className="card-text">WiFi analytics and space-usage data for libraries and community spaces. Provides insights into patron behavior and space utilization patterns.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Subscription</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">WiFi Analytics</span>
                    <span className="badge bg-teal-light text-teal-dark">Space Usage</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.whofi.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.youtube.com/results?search_query=whofi+analytics" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Efficiency Tools */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-tools"></i> Operational Efficiency Tools
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-info text-dark">Small Libraries</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Libstick</h5>
                  <p className="text-muted small mb-2">Label Printing & Operations</p>
                  <p className="card-text">Label printing and operational tool supporting quicker workflows. Helps smaller libraries streamline operations, freeing up staff time for patron engagement.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Some free/open-source</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Labels</span>
                    <span className="badge bg-teal-light text-teal-dark">Efficiency</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://libstick.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.youtube.com/results?search_query=libstick+library" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Guidelines */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-lightbulb"></i> Choosing the Right Platform
          </h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">
                    <i className="bi bi-check-circle"></i> Key Considerations
                  </h5>
                  <ul className="mb-0">
                    <li><strong>Library Size:</strong> Match platform capabilities to your patron base and staff resources</li>
                    <li><strong>Budget:</strong> Balance free/open-source vs. commercial solutions based on support needs</li>
                    <li><strong>Integration:</strong> Ensure compatibility with existing ILS and systems</li>
                    <li><strong>Staff Capacity:</strong> Consider technical expertise required for implementation</li>
                    <li><strong>Engagement Goals:</strong> Align platform features with strategic priorities</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">
                    <i className="bi bi-star"></i> Best Practices
                  </h5>
                  <ul className="mb-0">
                    <li><strong>Start Small:</strong> Pilot with one platform before expanding</li>
                    <li><strong>Train Staff:</strong> Invest in thorough staff training and documentation</li>
                    <li><strong>Measure Impact:</strong> Track usage metrics and patron feedback</li>
                    <li><strong>Promote Actively:</strong> Market new tools through multiple channels</li>
                    <li><strong>Iterate:</strong> Continuously improve based on data and feedback</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Comparison by Use Case */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-diagram-3"></i> Platform Combinations for Common Scenarios
          </h2>
          <div className="accordion" id="scenarioAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#scenario1">
                  <strong>Scenario 1: Small Library Starting Fresh</strong>
                </button>
              </h2>
              <div id="scenario1" className="accordion-collapse collapse show" data-bs-parent="#scenarioAccordion">
                <div className="accordion-body">
                  <p><strong>Recommended Stack:</strong></p>
                  <ul>
                    <li><strong>ILS:</strong> LibraryWorld (affordable, cloud-based)</li>
                    <li><strong>Marketing:</strong> LibraryAware (user-friendly newsletters and social media)</li>
                    <li><strong>Events:</strong> LibCal (easy scheduling and room booking)</li>
                  </ul>
                  <p className="text-muted mb-0">This combination provides essential functionality without overwhelming a small team.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#scenario2">
                  <strong>Scenario 2: Medium Library with IT Support</strong>
                </button>
              </h2>
              <div id="scenario2" className="accordion-collapse collapse" data-bs-parent="#scenarioAccordion">
                <div className="accordion-body">
                  <p><strong>Recommended Stack:</strong></p>
                  <ul>
                    <li><strong>ILS:</strong> Koha (open-source with customization options)</li>
                    <li><strong>Marketing:</strong> Patron Point (advanced segmentation and campaigns)</li>
                    <li><strong>Events:</strong> LibCal (comprehensive event management)</li>
                    <li><strong>Support:</strong> LibAnswers (multi-channel patron service)</li>
                  </ul>
                  <p className="text-muted mb-0">Balances cost savings with powerful features for growing engagement needs.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#scenario3">
                  <strong>Scenario 3: Large Library with Marketing Focus</strong>
                </button>
              </h2>
              <div id="scenario3" className="accordion-collapse collapse" data-bs-parent="#scenarioAccordion">
                <div className="accordion-body">
                  <p><strong>Recommended Stack:</strong></p>
                  <ul>
                    <li><strong>ILS:</strong> Innovative Interfaces VEGA LX (integrated engagement suite)</li>
                    <li><strong>Catalog Enhancement:</strong> BiblioCommons (community features)</li>
                    <li><strong>Marketing:</strong> Patron Point (data-driven campaigns)</li>
                    <li><strong>Analytics:</strong> OrangeBoy (deep insights and predictions)</li>
                    <li><strong>Space Analytics:</strong> WhoFi (understand patron movement and usage)</li>
                  </ul>
                  <p className="text-muted mb-0">Comprehensive solution for data-driven patron engagement at scale.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Considerations */}
        <div className="mb-5">
          <div className="alert alert-warning border-0 shadow-sm">
            <h5 className="alert-heading">
              <i className="bi bi-exclamation-triangle"></i> Budget Planning Tips
            </h5>
            <p className="mb-2">When budgeting for patron engagement platforms, consider:</p>
            <ul className="mb-0">
              <li><strong>Implementation Costs:</strong> Training, data migration, and setup time</li>
              <li><strong>Ongoing Licensing:</strong> Annual subscriptions typically range from $1,000-$50,000+ depending on library size</li>
              <li><strong>Support Contracts:</strong> For open-source solutions like Koha, budget for hosting and technical support</li>
              <li><strong>Staff Time:</strong> Ongoing management and content creation requires dedicated staff hours</li>
              <li><strong>Integration:</strong> May need custom development to connect different systems</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PatronEngagementPlatforms