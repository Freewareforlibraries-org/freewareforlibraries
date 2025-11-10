import React from 'react'

const LibraryCommunities = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center">Communities & Forums</h1>
        <div className="alert alert-info border-0 shadow-sm mx-auto mb-4" style={{maxWidth: '800px'}} role="alert">
          <p className="mb-0 text-center">
            These communities connect you with thousands of library technology professionals 
            sharing solutions, best practices, and support for IT challenges in libraries!
          </p>
        </div>

        {/* Main Content in Single Column */}
        <div className="mx-auto" style={{maxWidth: '900px'}}>
          
          {/* Reddit Communities */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-reddit"></i> Reddit Communities
            </h2>
            
            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  r/Libraries <span className="badge bg-warning text-dark ms-2">Most Active</span>
                </h5>
                <p className="text-muted small mb-2">General Library Discussion with Strong Tech Presence</p>
              </div>
              <p className="mb-3">A subreddit covering all types of libraries (public, academic, special) with plenty of tech and IT-focused discussions. Popular topics include library IT departments, public WiFi management, patron device support, and library PC setups.</p>
              <p className="mb-2"><strong>What You'll Find:</strong></p>
              <ul className="mb-3">
                <li>Peer discussions about technology issues in libraries</li>
                <li>Questions like "Does your library have an IT department?"</li>
                <li>Practical advice on patron support and public computer management</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong> Tip:</strong> Use search filters like "library IT" or "public library technology" to find relevant threads. Post specific "How do you..." questions for best responses.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">All Library Types</span>
                <span className="badge bg-teal-light text-teal-dark">Technology</span>
                <span className="badge bg-teal-light text-teal-dark">IT Support</span>
              </div>
              <a href="https://www.reddit.com/r/Libraries/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit r/Libraries</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">r/librarians</h5>
                <p className="text-muted small mb-2">Library Staff Community with Tech Discussions</p>
              </div>
              <p className="mb-3">Broader library staff-oriented subreddit with less IT focus but still relevant for library technology roles. Features discussions about why libraries lag in technology adoption and practical IT challenges.</p>
              <p className="mb-2"><strong>What You'll Find:</strong></p>
              <ul className="mb-3">
                <li>Threads like "Libraries and technology, why are we always behind?"</li>
                <li>Staff perspectives on technology implementation</li>
                <li>Career advice for library technology professionals</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong> Tip:</strong> Post specific IT challenges like "patron device support in public library" to get targeted, practical responses from library staff.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Library Staff</span>
                <span className="badge bg-teal-light text-teal-dark">Professional Development</span>
                <span className="badge bg-teal-light text-teal-dark">Tech Challenges</span>
              </div>
              <a href="https://www.reddit.com/r/librarians/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit r/librarians</a>
            </div>
          </div>

          {/* Library-Specific Forums */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-chat-square-text"></i> Library-Specific Forums
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Library20 – Public Libraries 2.0 Forum</h5>
                <p className="text-muted small mb-2">Web & Technology Discussion for Public Libraries</p>
              </div>
              <p className="mb-3">A forum within the Library20 network dedicated to discussions about public libraries and web/technology topics. Covers library websites, digital programs, and technology services.</p>
              <p className="mb-2"><strong>What You'll Find:</strong></p>
              <ul className="mb-3">
                <li>Discussions about library websites and online services</li>
                <li>Digital programming strategies and implementation</li>
                <li>Technology service models for public libraries</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong> Tip:</strong> Browse older threads for inspiration and proven solutions, then post your library's specific tech questions for community feedback.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Public Libraries</span>
                <span className="badge bg-teal-light text-teal-dark">Web Tech</span>
                <span className="badge bg-teal-light text-teal-dark">Digital Services</span>
              </div>
              <a href="https://library20.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Library20</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  PLIX – Public Library Innovation Exchange <span className="badge bg-success ms-2">STEAM Focus</span>
                </h5>
                <p className="text-muted small mb-2">Innovation & STEAM in Public Libraries</p>
              </div>
              <p className="mb-3">Forum focused on innovation and STEAM (Science, Technology, Engineering, Arts, Math) programming in public libraries, developed through MIT Media Lab's PLIX initiative.</p>
              <p className="mb-2"><strong>What You'll Find:</strong></p>
              <ul className="mb-3">
                <li>Maker-space implementation and management discussions</li>
                <li>Technology programming for public libraries</li>
                <li>Library staff experiences with STEAM education</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong> Tip:</strong> Perfect if your IT role intersects with maker labs, digital inclusion programs, or innovative technology services. Rich resource for creative tech implementations.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Maker Spaces</span>
                <span className="badge bg-teal-light text-teal-dark">STEAM</span>
                <span className="badge bg-teal-light text-teal-dark">Innovation</span>
              </div>
              <a href="https://discuss.plix.media.mit.edu/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit PLIX Forum</a>
            </div>
          </div>

          {/* Professional Mailing Lists */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-envelope"></i> Professional Mailing Lists
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  ALA Discussion Lists <span className="badge bg-warning text-dark ms-2">Professional</span>
                </h5>
                <p className="text-muted small mb-2">American Library Association Email Lists</p>
              </div>
              <p className="mb-3">The American Library Association offers multiple specialized listservs and discussion lists covering various library topics including dedicated technology-focused lists.</p>
              <p className="mb-2"><strong>What You'll Find:</strong></p>
              <ul className="mb-3">
                <li>Specialized email lists for library technology topics</li>
                <li>Section-based discussions (library tech, public libraries, academic)</li>
                <li>Announcements of resources, webinars, and professional development</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong> Tip:</strong> Join relevant sections like CORE (library technology) or PLA (public libraries) to receive targeted postings and participate in specialized discussions.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Professional Association</span>
                <span className="badge bg-teal-light text-teal-dark">Email Lists</span>
                <span className="badge bg-teal-light text-teal-dark">Specialized Topics</span>
              </div>
              <a href="https://www.ala.org/news/member-news/discussion-lists" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Browse ALA Lists</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">IFLA Mailing Lists</h5>
                <p className="text-muted small mb-2">International Federation of Library Associations</p>
              </div>
              <p className="mb-3">International library professional mailing lists including an Information Technology Section, providing global perspectives on library technology and services.</p>
              <p className="mb-2"><strong>What You'll Find:</strong></p>
              <ul className="mb-3">
                <li>Global perspectives on library technology implementation</li>
                <li>Technology services in public libraries around the world</li>
                <li>International standards and best practices</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong> Tip:</strong> Excellent for benchmarking your library's IT practices against global standards. Subscribe to gain international perspectives on common challenges.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">International</span>
                <span className="badge bg-teal-light text-teal-dark">IT Section</span>
                <span className="badge bg-teal-light text-teal-dark">Global Standards</span>
              </div>
              <a href="https://www.ifla.org/mailing-lists/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">View IFLA Lists</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">PUBLIB Electronic Discussion List</h5>
                <p className="text-muted small mb-2">Long-Running Public Library Discussion List</p>
              </div>
              <p className="mb-3">One of the oldest and most active mailing lists for public library issues, including extensive discussions about technology implementation, patron services, and IT challenges.</p>
              <p className="mb-2"><strong>What You'll Find:</strong></p>
              <ul className="mb-3">
                <li>Active discussions among public librarians nationwide</li>
                <li>Technology questions and solutions specific to public libraries</li>
                <li>Real-world experiences from library practitioners</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong> Tip:</strong> Excellent for public library context rather than academic libraries. Great community for questions about patron-facing technology and public services.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Public Libraries</span>
                <span className="badge bg-teal-light text-teal-dark">Active Community</span>
                <span className="badge bg-teal-light text-teal-dark">Established</span>
              </div>
              <a href="https://www.webjunction.org/explore-topics/publib.html" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Learn About PUBLIB</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Technology Mailing Lists for Libraries</h5>
                <p className="text-muted small mb-2">SUNY Librarians Association Directory</p>
              </div>
              <p className="mb-3">Comprehensive listing of technology-oriented library mailing lists including CIRCPLUS (circulation systems) and EDTECH (educational technology) covering library systems and infrastructure.</p>
              <p className="mb-2"><strong>What You'll Find:</strong></p>
              <ul className="mb-3">
                <li>Niche technical discussions about circulation systems</li>
                <li>Network infrastructure and systems administration</li>
                <li>Library-specific technical implementations</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong> Tip:</strong> If your role covers library system infrastructure or integrated library systems (ILS), these technical lists provide deep expertise and troubleshooting support.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Technical</span>
                <span className="badge bg-teal-light text-teal-dark">Systems</span>
                <span className="badge bg-teal-light text-teal-dark">Infrastructure</span>
              </div>
              <a href="https://sunyla.org/technology/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Browse Tech Lists</a>
            </div>
          </div>

          {/* Tech-Adjacent Communities */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-tools"></i> Tech-Adjacent Communities
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Linux Mint Forums – Library Use Cases</h5>
                <p className="text-muted small mb-2">Open Source OS for Public Library Computers</p>
              </div>
              <p className="mb-3">While not library-specific, Linux Mint forums contain valuable threads about using Linux in public library settings, particularly for public access computers and workstations.</p>
              <p className="mb-2"><strong>What You'll Find:</strong></p>
              <ul className="mb-3">
                <li>Practical advice about Linux deployment in libraries</li>
                <li>OS configuration for public computer environments</li>
                <li>Implementation challenges and solutions</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong> Tip:</strong> Use for technical solution ideas and OS implementation strategies rather than library-community discussion. Search for "library" or "public computer" threads.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Linux</span>
                <span className="badge bg-teal-light text-teal-dark">Open Source</span>
                <span className="badge bg-teal-light text-teal-dark">Public Computers</span>
              </div>
              <a href="https://forums.linuxmint.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Linux Mint Forums</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Raspberry Pi Forums – Library Maker Spaces</h5>
                <p className="text-muted small mb-2">Low-Cost Tech & Maker Projects for Libraries</p>
              </div>
              <p className="mb-3">Not strictly a library forum, but contains valuable content about libraries using Raspberry Pi for public programs, maker spaces, and low-cost technology solutions.</p>
              <p className="mb-2"><strong>What You'll Find:</strong></p>
              <ul className="mb-3">
                <li>Practical maker kit setup guides</li>
                <li>Low-cost technology implementations in libraries</li>
                <li>Public library event ideas using Raspberry Pi</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong> Tip:</strong> Extremely useful if you manage or plan library IT/maker-space programs. Search for "library" to find relevant discussions and project ideas.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Maker Spaces</span>
                <span className="badge bg-teal-light text-teal-dark">Low-Cost Tech</span>
                <span className="badge bg-teal-light text-teal-dark">Programming</span>
              </div>
              <a href="https://forums.raspberrypi.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Raspberry Pi Forums</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LibraryCommunities