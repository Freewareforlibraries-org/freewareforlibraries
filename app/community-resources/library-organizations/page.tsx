import React from 'react'

const LibraryOrganizations = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center">Library Organizations</h1>
        <div className="pb-3 mb-3">
          
        </div>

        {/* Main Content in Single Column */}
        <div className="mx-auto" style={{maxWidth: '900px'}}>
          
          {/* Major National Organizations */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-building"></i> Major National Library Organizations
            </h2>
            
            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  ALA
                </h5>
                <p className="text-muted small mb-2">American Library Association</p>
              </div>
              <p className="mb-3">The oldest and largest library association in the world. Provides leadership, resources, and advocacy for all types of libraries. Strong technology divisions including LITA (Library and Information Technology Association).</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> United States - All Library Types</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">All Libraries</span>
                <span className="badge bg-teal-light text-teal-dark">Technology</span>
                <span className="badge bg-teal-light text-teal-dark">Advocacy</span>
              </div>
              <a href="https://www.ala.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">PLA</h5>
                <p className="text-muted small mb-2">Public Library Association</p>
              </div>
              <p className="mb-3">Division of ALA dedicated to public libraries. Provides resources, conferences, publications, and advocacy specifically for public library professionals and institutions.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> United States - Public Libraries</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Public Libraries</span>
                <span className="badge bg-teal-light text-teal-dark">Programming</span>
                <span className="badge bg-teal-light text-teal-dark">Community</span>
              </div>
              <a href="https://www.ala.org/pla/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">ACRL</h5>
                <p className="text-muted small mb-2">Association of College & Research Libraries</p>
              </div>
              <p className="mb-3">Division of ALA serving academic and research librarians. Focus on information literacy, scholarly communication, open access, and academic library standards and best practices.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> United States - Academic Libraries</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Academic</span>
                <span className="badge bg-teal-light text-teal-dark">Research</span>
                <span className="badge bg-teal-light text-teal-dark">Higher Education</span>
              </div>
              <a href="https://www.ala.org/acrl/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">AASL</h5>
                <p className="text-muted small mb-2">American Association of School Librarians</p>
              </div>
              <p className="mb-3">Division of ALA focused on school library programs. Provides standards, advocacy, professional development, and resources for school librarians supporting K-12 education.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> United States - School Libraries</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">K-12 Schools</span>
                <span className="badge bg-teal-light text-teal-dark">Education</span>
                <span className="badge bg-teal-light text-teal-dark">Student Learning</span>
              </div>
              <a href="https://www.ala.org/aasl/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Urban Libraries Council</h5>
                <p className="text-muted small mb-2">Innovation Consortium for City Libraries</p>
              </div>
              <p className="mb-3">Network of North America's leading public library systems. Focus on innovation, technology adoption, best practices, and leadership development for urban libraries serving large metropolitan areas.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> North America - Urban Public Libraries</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Urban Libraries</span>
                <span className="badge bg-teal-light text-teal-dark">Innovation</span>
                <span className="badge bg-teal-light text-teal-dark">Leadership</span>
              </div>
              <a href="https://www.urbanlibraries.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">ARL</h5>
                <p className="text-muted small mb-2">Association of Research Libraries</p>
              </div>
              <p className="mb-3">Non-profit organization of leading research libraries in North America. Influences forces affecting scholarly communication, supports equitable access to research materials, and advances research library leadership.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> North America - Research Libraries</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Research</span>
                <span className="badge bg-teal-light text-teal-dark">Scholarly Communication</span>
                <span className="badge bg-teal-light text-teal-dark">Collections</span>
              </div>
              <a href="https://www.arl.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
            </div>
          </div>

          {/* Technology-Focused Organizations */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-laptop"></i> Technology-Focused Organizations
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  LITA
                </h5>
                <p className="text-muted small mb-2">Library and Information Technology Association</p>
              </div>
              <p className="mb-3">Division of ALA focusing on library automation, networks, standards, and information technology. Provides education, publications, and networking for library technology professionals. Now merged into CORE division.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> United States - Library Technology</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Technology</span>
                <span className="badge bg-teal-light text-teal-dark">Automation</span>
                <span className="badge bg-teal-light text-teal-dark">Standards</span>
              </div>
              <a href="https://www.ala.org/core/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit CORE Website</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  Code4Lib
                </h5>
                <p className="text-muted small mb-2">Library Software Development Community</p>
              </div>
              <p className="mb-3">Volunteer-driven community for library technologists. Focuses on open source software development, technology innovation, and collaboration. Annual conference and active mailing list for developers and technology practitioners.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> International - Library Developers</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Open Source</span>
                <span className="badge bg-teal-light text-teal-dark">Development</span>
                <span className="badge bg-teal-light text-teal-dark">Community</span>
              </div>
              <a href="https://code4lib.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">LYRASIS</h5>
                <p className="text-muted small mb-2">Library Technology Collaborative</p>
              </div>
              <p className="mb-3">Non-profit membership organization supporting libraries, museums, and archives. Provides technology services, digital preservation, open source software support, and collaborative solutions for cultural heritage institutions.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> United States - Technology Services</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Technology Services</span>
                <span className="badge bg-teal-light text-teal-dark">Digital Preservation</span>
                <span className="badge bg-teal-light text-teal-dark">Collaboration</span>
              </div>
              <a href="https://www.lyrasis.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">CNI</h5>
                <p className="text-muted small mb-2">Coalition for Networked Information</p>
              </div>
              <p className="mb-3">Organization advancing digital information and networked environments for scholarship and education. Convenes stakeholders to address challenges in digital scholarship, preservation, and library technology infrastructure.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> United States - Digital Infrastructure</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Digital Scholarship</span>
                <span className="badge bg-teal-light text-teal-dark">Infrastructure</span>
                <span className="badge bg-teal-light text-teal-dark">Policy</span>
              </div>
              <a href="https://www.cni.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
            </div>
          </div>

          {/* Digital Libraries & Preservation */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-archive"></i> Digital Libraries & Preservation
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">DLF</h5>
                <p className="text-muted small mb-2">Digital Library Federation</p>
              </div>
              <p className="mb-3">Community of practitioners advancing digital library research, development, and practice. Focus on digital collections, metadata, preservation, and access. Provides forums, working groups, and collaborative projects.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> United States - Digital Libraries</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Digital Collections</span>
                <span className="badge bg-teal-light text-teal-dark">Metadata</span>
                <span className="badge bg-teal-light text-teal-dark">Preservation</span>
              </div>
              <a href="https://www.diglib.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">CLIR</h5>
                <p className="text-muted small mb-2">Council on Library and Information Resources</p>
              </div>
              <p className="mb-3">Independent nonprofit that forges strategies to enhance research, teaching, and learning in partnership with libraries, cultural institutions, and communities. Focus on digital preservation and data curation.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> United States - Research & Preservation</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Digital Preservation</span>
                <span className="badge bg-teal-light text-teal-dark">Data Curation</span>
                <span className="badge bg-teal-light text-teal-dark">Research</span>
              </div>
              <a href="https://www.clir.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">DPC</h5>
                <p className="text-muted small mb-2">Digital Preservation Coalition</p>
              </div>
              <p className="mb-3">Membership organization enabling members to deliver resilient long-term access to digital content. International focus on digital preservation advocacy, guidance, and community building for archives and libraries.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> International - Digital Preservation</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Long-term Access</span>
                <span className="badge bg-teal-light text-teal-dark">Standards</span>
                <span className="badge bg-teal-light text-teal-dark">Advocacy</span>
              </div>
              <a href="https://www.dpconline.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
            </div>
          </div>

          {/* International Organizations */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-globe"></i> International Library Organizations
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  IFLA
                </h5>
                <p className="text-muted small mb-2">International Federation of Library Associations and Institutions</p>
              </div>
              <p className="mb-3">Global voice of the library and information profession. Sets international standards, advocates for libraries worldwide, and facilitates international cooperation. Annual World Library and Information Congress.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> International - All Libraries</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Global Standards</span>
                <span className="badge bg-teal-light text-teal-dark">Advocacy</span>
                <span className="badge bg-teal-light text-teal-dark">International Cooperation</span>
              </div>
              <a href="https://www.ifla.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">LIBER</h5>
                <p className="text-muted small mb-2">Association of European Research Libraries</p>
              </div>
              <p className="mb-3">Principal association of research libraries in Europe. Focus on shaping the research library landscape, particularly around open science, digital skills, research infrastructure, and innovative services.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> Europe - Research Libraries</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Open Science</span>
                <span className="badge bg-teal-light text-teal-dark">Research Infrastructure</span>
                <span className="badge bg-teal-light text-teal-dark">Europe</span>
              </div>
              <a href="https://libereurope.eu/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">OCLC</h5>
                <p className="text-muted small mb-2">Online Computer Library Center</p>
              </div>
              <p className="mb-3">Global library cooperative providing shared technology services, research, and community programs. Maintains WorldCat and offers cataloging, resource sharing, and library management solutions to thousands of libraries worldwide.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> International - Library Cooperative</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Cataloging</span>
                <span className="badge bg-teal-light text-teal-dark">Resource Sharing</span>
                <span className="badge bg-teal-light text-teal-dark">Technology Services</span>
              </div>
              <a href="https://www.oclc.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
            </div>
          </div>

          {/* Specialty & Regional Organizations */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-diagram-3"></i> Specialty & Regional Organizations
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">ARLIS/NA</h5>
                <p className="text-muted small mb-2">Art Libraries Society of North America</p>
              </div>
              <p className="mb-3">Professional organization for art information professionals. Focuses on issues related to art documentation, visual resources, and architecture libraries. Provides networking and professional development.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> North America - Art Libraries</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Art & Architecture</span>
                <span className="badge bg-teal-light text-teal-dark">Visual Resources</span>
                <span className="badge bg-teal-light text-teal-dark">Documentation</span>
              </div>
              <a href="https://www.arlisna.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">MLA</h5>
                <p className="text-muted small mb-2">Medical Library Association</p>
              </div>
              <p className="mb-3">Professional organization for health sciences information professionals. Focus on medical and health information, evidence-based practice, and professional development for medical librarians and informaticists.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> International - Health Sciences Libraries</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Health Sciences</span>
                <span className="badge bg-teal-light text-teal-dark">Medical Information</span>
                <span className="badge bg-teal-light text-teal-dark">Evidence-Based Practice</span>
              </div>
              <a href="https://www.mlanet.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">SLA</h5>
                <p className="text-muted small mb-2">Special Libraries Association</p>
              </div>
              <p className="mb-3">Professional association for information professionals working in specialized environments. Serves corporate, academic, government, and independent information centers with focus on business intelligence and specialized research.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> International - Special Libraries</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Corporate Libraries</span>
                <span className="badge bg-teal-light text-teal-dark">Business Intelligence</span>
                <span className="badge bg-teal-light text-teal-dark">Specialized Research</span>
              </div>
              <a href="https://www.sla.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">State Library Associations</h5>
                <p className="text-muted small mb-2">Regional Professional Networks</p>
              </div>
              <p className="mb-3">Nearly every U.S. state has its own library association providing regional advocacy, continuing education, networking, and support. These associations often have technology committees and offer state-specific resources and conferences.</p>
              <p className="text-muted small mb-2"><strong>Scope:</strong> State/Regional - All Libraries</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Regional Advocacy</span>
                <span className="badge bg-teal-light text-teal-dark">Local Networking</span>
                <span className="badge bg-teal-light text-teal-dark">State-Specific</span>
              </div>
              <a href="https://www.ala.org/aboutala/affiliates/chapters/state/stateregional" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Find Your State Association</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LibraryOrganizations