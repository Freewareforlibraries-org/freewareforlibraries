import React from 'react'

const Alternatives = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center">Free Alternative Applications</h1>
        <p className="fs-5 text-teal-mid text-center mb-5">
          Professional-grade free and open-source alternatives to expensive commercial software
        </p>

        {/* Graphic Design */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-palette"></i> Graphic Design & Photo Editing
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">GIMP</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Photoshop</p>
                  <p className="card-text">Powerful image editor with advanced features for photo retouching, image composition, and graphic design.</p>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <a href="https://www.gimp.org/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow mt-3">Visit Site</a>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Krita</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Photoshop (Digital Painting)</p>
                  <p className="card-text">Professional digital painting application with excellent brush engines and illustration tools.</p>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <a href="https://krita.org/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow mt-3">Visit Site</a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Photopea</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Photoshop (Web-based)</p>
                  <p className="card-text">Free online photo editor that works directly in your browser with PSD file support.</p>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge bg-teal-light text-teal-dark">Web-based</span>
                  </div>
                  <a href="https://www.photopea.com/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow mt-3">Visit Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vector Graphics */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-vector-pen"></i> Vector Graphics & Illustration
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Inkscape</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Illustrator</p>
                  <p className="card-text">Professional vector graphics editor perfect for logos, illustrations, diagrams, and web graphics.</p>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <a href="https://inkscape.org/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow mt-3">Visit Site</a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Vectr</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Illustrator (Simplified)</p>
                  <p className="card-text">Simple yet powerful vector graphics software for creating logos, presentations, and designs.</p>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">Web-based</span>
                  </div>
                  <a href="https://vectr.com/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow mt-3">Visit Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Editing */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-film"></i> Video Editing
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">DaVinci Resolve</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Premiere Pro</p>
                  <p className="card-text">Professional video editing, color correction, and audio post-production software used by Hollywood.</p>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <a href="https://www.blackmagicdesign.com/products/davinciresolve" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow mt-3">Visit Site</a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Shotcut</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Premiere Pro</p>
                  <p className="card-text">Free, open-source, cross-platform video editor with a wide range of features and format support.</p>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <a href="https://shotcut.org/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow mt-3">Visit Site</a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">OpenShot</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Premiere Pro (Beginner-friendly)</p>
                  <p className="card-text">Easy-to-use video editor with powerful features, perfect for beginners and quick projects.</p>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <a href="https://www.openshot.org/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow mt-3">Visit Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Publishing */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-file-earmark-text"></i> Desktop Publishing & Layout
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Scribus</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe InDesign</p>
                  <p className="card-text">Professional page layout application for creating magazines, newsletters, posters, and more.</p>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <a href="https://www.scribus.net/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow mt-3">Visit Site</a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Canva (Free)</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe InDesign (Simplified)</p>
                  <p className="card-text">User-friendly design platform with thousands of templates for social media, presentations, and print.</p>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge bg-teal-light text-teal-dark">Web-based</span>
                  </div>
                  <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow mt-3">Visit Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D & Animation */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-box"></i> 3D Modeling & Animation
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Blender</h5>
                  <p className="text-muted small mb-2">Alternative to: Maya, 3ds Max, Cinema 4D</p>
                  <p className="card-text">Complete 3D creation suite supporting modeling, animation, rendering, and video editing.</p>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow mt-3">Visit Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audio Editing */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-music-note-beamed"></i> Audio Editing & Production
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Audacity</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Audition</p>
                  <p className="card-text">Multi-track audio editor and recorder for podcasts, music, and sound effects editing.</p>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow mt-3">Visit Site</a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Ocenaudio</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Audition (Simplified)</p>
                  <p className="card-text">Fast and easy-to-use audio editor with real-time preview of effects and VST plugin support.</p>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <a href="https://www.ocenaudio.com/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow mt-3">Visit Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office & Productivity */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-briefcase"></i> Office & Productivity
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">LibreOffice</h5>
                  <p className="text-muted small mb-2">Alternative to: Microsoft Office</p>
                  <p className="card-text">Full-featured office suite with word processor, spreadsheet, presentation, and more.</p>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <a href="https://www.libreoffice.org/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow mt-3">Visit Site</a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">Google Workspace (Free)</h5>
                  <p className="text-muted small mb-2">Alternative to: Microsoft Office</p>
                  <p className="card-text">Cloud-based productivity suite with Docs, Sheets, Slides, and real-time collaboration.</p>
                  <div className="d-flex gap-2 flex-wrap">
                    <span className="badge bg-teal-light text-teal-dark">Web-based</span>
                  </div>
                  <a href="https://workspace.google.com/" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-sm bg-teal-mid text-white hvr-grow mt-3">Visit Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Alternatives