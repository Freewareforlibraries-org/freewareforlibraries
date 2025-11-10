import React from 'react'

const LibraryTraining = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center">Library Technology Training & Professional Development</h1>
        <p className="fs-5 text-teal-mid text-center mb-3">
          Online courses, webinars, and continuing education for library IT professionals
        </p>
        <div className="alert alert-info border-0 shadow-sm mx-auto" style={{maxWidth: '800px'}} role="alert">
          <p className="mb-0 text-center">
            <strong>Pro Tip:</strong> These resources offer technology training, digital services education, 
            and IT professional development specifically designed for library professionals—many are free or low-cost!
          </p>
        </div>

        {/* Main Content in Single Column */}
        <div className="mx-auto" style={{maxWidth: '900px'}}>
          
          {/* Major Learning Platforms */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-mortarboard"></i> Major Learning Platforms
            </h2>
            
            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  WebJunction <span className="badge bg-warning text-dark ms-2">Most Popular</span> <span className="badge bg-success ms-2">Many Free</span>
                </h5>
                <p className="text-muted small mb-2">OCLC Learning Portal for Library Staff</p>
              </div>
              <p className="mb-3">A comprehensive learning portal from OCLC offering webinars, self-paced courses, and on-demand training specifically designed for library staff at all levels.</p>
              <p className="mb-2"><strong>Why for Library IT Pros:</strong></p>
              <ul className="mb-3">
                <li>Covers digital collections, technology workflows, and infrastructure topics</li>
                <li>Features "Digital Collections Stewardship" series and technology best practices</li>
                <li>Regular webinars on emerging library technology trends</li>
              </ul>
              <p className="mb-2"><strong>Cost:</strong> Many offerings are free; certificates of completion available</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Tip:</strong> Subscribe to their event calendar and filter for "technology" or "digital" topics to stay current with relevant training opportunities.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Free Resources</span>
                <span className="badge bg-teal-light text-teal-dark">Webinars</span>
                <span className="badge bg-teal-light text-teal-dark">Self-Paced</span>
              </div>
              <a href="https://www.webjunction.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit WebJunction</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Library Juice Academy</h5>
                <p className="text-muted small mb-2">Professional Online Courses for Information Professionals</p>
              </div>
              <p className="mb-3">Online courses aimed at librarians, archivists, and other information professionals with strong focus on modern library technology and digital practices.</p>
              <p className="mb-2"><strong>Why for IT-Oriented Staff:</strong></p>
              <ul className="mb-3">
                <li>Courses include metadata management, digital workflows, and library systems</li>
                <li>Information literacy for tech staff and digital service design</li>
                <li>Linked data, RDA, and modern cataloging technologies</li>
              </ul>
              <p className="mb-2"><strong>Cost:</strong> Paid courses with varying lengths (typically 4-8 weeks)</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Tip:</strong> Choose a course that aligns with a specific technology gap you're working on, such as metadata, linked data, or library systems administration.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Paid Courses</span>
                <span className="badge bg-teal-light text-teal-dark">Metadata</span>
                <span className="badge bg-teal-light text-teal-dark">Digital Workflows</span>
              </div>
              <a href="https://libraryjuiceacademy.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Library Juice Academy</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Library Journal & School Library Journal PD</h5>
                <p className="text-muted small mb-2">Professional Development Courses & Workshops</p>
              </div>
              <p className="mb-3">Online professional development courses ranging from crash courses (2-hour sessions) to multi-week workshops covering current library trends and technologies.</p>
              <p className="mb-2"><strong>Relevance:</strong></p>
              <ul className="mb-3">
                <li>Excellent for library IT professionals keeping up with trends</li>
                <li>Topics include digitization, technology in libraries, and service design</li>
                <li>Regular updates on emerging technologies and best practices</li>
              </ul>
              <p className="mb-2"><strong>Cost:</strong> Paid courses; group discounts available</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Tip:</strong> If your library supports a team, the group rate can make professional development cost-effective for multiple staff members.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Paid Courses</span>
                <span className="badge bg-teal-light text-teal-dark">Group Discounts</span>
                <span className="badge bg-teal-light text-teal-dark">Trends</span>
              </div>
              <a href="https://www.libraryjournal.com/page/pd-courses" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">View LJ Courses</a>
            </div>
          </div>

          {/* Association-Based Training */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-bank"></i> Association-Based Training
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">ALSC – eLearning & Webinars</h5>
                <p className="text-muted small mb-2">Association for Library Service to Children</p>
              </div>
              <p className="mb-3">Offers 4-6 week online courses and webinars covering library professional development with focus on youth services and technology.</p>
              <p className="mb-2"><strong>Relevance:</strong></p>
              <ul className="mb-3">
                <li>While children & youth services-oriented, covers technology and digital services extensively</li>
                <li>Helps IT professionals understand service design for youth-oriented library tech</li>
                <li>Includes maker spaces, digital literacy programs, and educational technology</li>
              </ul>
              <p className="mb-2"><strong>Cost:</strong> Paid webinars & courses (some free options available)</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Tip:</strong> If your library IT role supports youth/teen services, maker spaces, or digital literacy programs, this training is highly relevant.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Youth Services</span>
                <span className="badge bg-teal-light text-teal-dark">Digital Literacy</span>
                <span className="badge bg-teal-light text-teal-dark">Maker Spaces</span>
              </div>
              <a href="https://www.ala.org/alsc/elearning" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Explore ALSC eLearning</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">ACRL – eLearning & Free PD</h5>
                <p className="text-muted small mb-2">Association of College and Research Libraries</p>
              </div>
              <p className="mb-3">Provides multi-week asynchronous online courses specifically for academic library staff, plus regular free webinars on current topics.</p>
              <p className="mb-2"><strong>Relevance:</strong></p>
              <ul className="mb-3">
                <li>Perfect if you work in an academic library or support research library systems</li>
                <li>Courses cover digital collections, data services, and technology planning</li>
                <li>Regular free webinars on scholarly communication and library technology</li>
              </ul>
              <p className="mb-2"><strong>Cost:</strong> Variable (some free webinars, some paid courses)</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Tip:</strong> Look for their "technology" or "digital services" tracks. Free webinars are excellent for staying current without budget constraints.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Academic Libraries</span>
                <span className="badge bg-teal-light text-teal-dark">Free Webinars</span>
                <span className="badge bg-teal-light text-teal-dark">Digital Collections</span>
              </div>
              <a href="https://www.ala.org/acrl/professional-development" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">View ACRL Training</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  IFLA Webinars <span className="badge bg-success ms-2">Free</span>
                </h5>
                <p className="text-muted small mb-2">International Federation of Library Associations</p>
              </div>
              <p className="mb-3">Global library association offering free webinars for library and information professionals around the world, providing international perspectives on library technology.</p>
              <p className="mb-2"><strong>Relevance:</strong></p>
              <ul className="mb-3">
                <li>Broader perspective on library tech trends and innovations globally</li>
                <li>Professional development in library IT from international experts</li>
                <li>Network building with global library technology community</li>
              </ul>
              <p className="mb-2"><strong>Cost:</strong> Mostly free</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Tip:</strong> Excellent for staying current on international best practices and library innovation. Great for benchmarking your work against global standards.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">International</span>
                <span className="badge bg-teal-light text-teal-dark">Free</span>
                <span className="badge bg-teal-light text-teal-dark">Global Perspective</span>
              </div>
              <a href="https://www.ifla.org/news/webinars/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Browse IFLA Webinars</a>
            </div>
          </div>

          {/* Regional & State Resources */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-geo-alt"></i> Regional & State Resources
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  State Library Training Programs <span className="badge bg-success ms-2">Often Free</span>
                </h5>
                <p className="text-muted small mb-2">Regional Training & Certification Resources</p>
              </div>
              <p className="mb-3">State libraries often offer training, continuing education, and certification programs for library staff and support staff, typically at low or no cost.</p>
              <p className="mb-2"><strong>Example Programs:</strong></p>
              <ul className="mb-3">
                <li>Washington State Library offers comprehensive training and certification</li>
                <li>Arkansas State Library provides technology-oriented training for in-state libraries</li>
                <li>Most state libraries have dedicated professional development portals</li>
              </ul>
              <p className="mb-2"><strong>Relevance:</strong></p>
              <ul className="mb-3">
                <li>Often lower cost or free, funded by state grants</li>
                <li>Tailored to public and community libraries in your region</li>
                <li>Excellent for library IT staff in public library systems</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Tip:</strong> Check your own state library (Arkansas State Library) for similar programs and technology-oriented training specific to your region.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">State-Funded</span>
                <span className="badge bg-teal-light text-teal-dark">Public Libraries</span>
                <span className="badge bg-teal-light text-teal-dark">Regional Focus</span>
              </div>
              <a href="https://www.library.arkansas.gov/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Arkansas State Library</a>
            </div>
          </div>

          {/* Free & Low-Cost Options */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-gift"></i> Free & Low-Cost Training Options
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  Free Webinar Aggregators <span className="badge bg-success ms-2">Free</span>
                </h5>
                <p className="text-muted small mb-2">Curated Lists for Library Professionals</p>
              </div>
              <p className="mb-3">Curated lists and portals offering many free webinars for library professionals, with regular technology-focused topics.</p>
              <p className="mb-2"><strong>What You'll Find:</strong></p>
              <ul className="mb-3">
                <li>Technology-oriented topics like digital collections and AI in libraries</li>
                <li>Tech infrastructure, cybersecurity, and systems management</li>
                <li>Metadata, discovery, and digital services webinars</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Tip:</strong> Bookmark a webinar aggregator and set alerts for "technology", "digital services", "metadata", or "IT infrastructure" to catch relevant training.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Free</span>
                <span className="badge bg-teal-light text-teal-dark">Webinars</span>
                <span className="badge bg-teal-light text-teal-dark">Diverse Topics</span>
              </div>
              <a href="https://www.webjunction.org/events/webjunction.html" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">WebJunction Free Webinars</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  LiRN Network <span className="badge bg-success ms-2">Free</span>
                </h5>
                <p className="text-muted small mb-2">Professional Development for Library Staff</p>
              </div>
              <p className="mb-3">Offers curriculum of free professional development programs in structured learning paths covering electronic resources, library skills, and technology topics via Zoom and recordings.</p>
              <p className="mb-2"><strong>Relevance:</strong></p>
              <ul className="mb-3">
                <li>Especially useful for electronic resources and e-resource licensing</li>
                <li>Covers vendor systems and digital resource management</li>
                <li>Overlaps library IT and resource management perfectly</li>
              </ul>
              <p className="mb-2"><strong>Cost:</strong> Free</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Tip:</strong> Attend Zoom sessions live if possible to ask questions in real-time, then view recordings later for reference and review.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Free</span>
                <span className="badge bg-teal-light text-teal-dark">Electronic Resources</span>
                <span className="badge bg-teal-light text-teal-dark">Live + Recorded</span>
              </div>
              <a href="https://lirn.net/professional-development/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit LiRN Network</a>
            </div>
          </div>

          {/* Technical IT Training */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-code-square"></i> Specialized Technology Training
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">General IT Certifications & Training</h5>
                <p className="text-muted small mb-2">Broader Tech Education Platforms</p>
              </div>
              <p className="mb-3">While not library-specific, general IT certifications and training platforms can strengthen core technical skills essential for library IT roles.</p>
              <p className="mb-2"><strong>Platforms to Consider:</strong></p>
              <ul className="mb-3">
                <li><strong>LinkedIn Learning:</strong> Cloud computing, systems administration, cybersecurity</li>
                <li><strong>Universal Class:</strong> IT certifications often available free through library cards</li>
                <li><strong>Coursera/edX:</strong> University-level IT and computer science courses</li>
                <li><strong>CompTIA/AWS:</strong> Industry-standard IT certifications</li>
              </ul>
              <p className="mb-2"><strong>Relevance:</strong></p>
              <ul className="mb-3">
                <li>Library IT roles often require core IT skills (networks, servers, cloud, security)</li>
                <li>Certifications provide credibility and structured learning paths</li>
                <li>Many libraries offer free access to these platforms for staff</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Tip:</strong> Use general IT training alongside library-specific professional development to strengthen your technical foundation. Check if your library offers free access to LinkedIn Learning or similar platforms.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">IT Skills</span>
                <span className="badge bg-teal-light text-teal-dark">Certifications</span>
                <span className="badge bg-teal-light text-teal-dark">Cloud/Security</span>
              </div>
              <a href="https://www.linkedin.com/learning/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow me-2">LinkedIn Learning</a>
              <a href="https://www.universalclass.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary hvr-grow">Universal Class</a>
            </div>
          </div>

          {/* Professional Development Planning Guide */}
          <div className="mb-5">
            <div className="alert alert-primary border-0 shadow-sm">
              <h4 className="alert-heading text-teal-mid fw-bold">
                <i className="bi bi-calendar-check"></i> Building Your Professional Development Plan
              </h4>
              <hr />
              <p className="mb-2"><strong>Start with Free Resources:</strong> Begin with WebJunction, IFLA webinars, and state library offerings to explore topics without budget constraints.</p>
              <p className="mb-2"><strong>Identify Skill Gaps:</strong> Choose targeted paid courses (Library Juice Academy, LJ) that address specific knowledge gaps in your role.</p>
              <p className="mb-2"><strong>Stay Current:</strong> Subscribe to webinar calendars and set up alerts for technology topics relevant to your position.</p>
              <p className="mb-2"><strong>Combine Library & IT Training:</strong> Mix library-specific courses with general IT certifications for comprehensive professional development.</p>
              <p className="mb-2"><strong>Network While Learning:</strong> Attend live sessions when possible to build connections with other library technology professionals.</p>
              <p className="mb-0"><strong>Track Your Progress:</strong> Many platforms offer certificates—maintain a portfolio of completed training for career advancement.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LibraryTraining