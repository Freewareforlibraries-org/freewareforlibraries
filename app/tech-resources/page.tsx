import React from 'react'
import Link from 'next/link'

const TechResources = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center">Tech Resources for Library IT</h1>
        <p className="fs-5 text-teal-mid text-center mb-3">
          Curated resources, tools, and communities for library technology professionals
        </p>
        <div className="alert alert-info border-0 shadow-sm mx-auto mb-5" style={{maxWidth: '800px'}} role="alert">
          <p className="mb-0 text-center">
            <strong>📚 Bookmark This:</strong> All resources listed are regularly used by library IT professionals worldwide.
          </p>
        </div>

        {/* Communities & Forums */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            Communities & Forums
          </h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Code4Lib</h5>
                  <p className="card-text">A community of library technologists sharing tools, ideas, and solutions.</p>
                  <div className="d-flex"></div>
                  <a href="https://code4lib.org/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow mt-auto">Visit Site</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Library IT Professionals Network</h5>
                  <p className="card-text">LinkedIn group for library technology professionals to network and share knowledge.</p>
                  <a href="https://www.linkedin.com/groups/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Resources */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
          Security & Privacy
          </h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Library Freedom Project</h5>
                  <p className="card-text">Resources for protecting patron privacy and intellectual freedom in libraries.</p>
                  <a href="https://libraryfreedom.org/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Site</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">LITA Security Resources</h5>
                  <p className="card-text">Library Information Technology Association's cybersecurity guidance.</p>
                  <a href="https://www.ala.org/lita/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Tools */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
        Development & Technical Tools
          </h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">GitHub</h5>
                  <p className="card-text">Version control and collaboration for library software projects.</p>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Site</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Stack Overflow</h5>
                  <p className="card-text">Q&A community for programming and technical troubleshooting.</p>
                  <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Site</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Docker Hub</h5>
                  <p className="card-text">Container platform for deploying library applications.</p>
                  <a href="https://hub.docker.com/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Open Source Library Systems */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            Open Source Library Systems
          </h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Koha</h5>
                  <p className="card-text">First open-source integrated library system (ILS) with a global community.</p>
                  <a href="https://koha-community.org/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Site</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Evergreen</h5>
                  <p className="card-text">Highly scalable open-source ILS designed for consortia.</p>
                  <a href="https://evergreen-ils.org/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Resources */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            Learning & Professional Development
          </h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Library Carpentry</h5>
                  <p className="card-text">Software and data skills training for library professionals.</p>
                  <a href="https://librarycarpentry.org/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Site</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">freeCodeCamp</h5>
                  <p className="card-text">Free coding education with certifications in web development.</p>
                  <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Site</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">WebJunction</h5>
                  <p className="card-text">OCLC's free online learning community for library staff.</p>
                  <a href="https://www.webjunction.org/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Standards & Best Practices */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            Standards & Best Practices
          </h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">W3C Web Accessibility Initiative</h5>
                  <p className="card-text">Guidelines and resources for making library websites accessible.</p>
                  <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Site</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Library of Congress Standards</h5>
                  <p className="card-text">Official standards for bibliographic and metadata management.</p>
                  <a href="https://www.loc.gov/standards/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TechResources