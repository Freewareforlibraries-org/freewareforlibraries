import React from 'react'

const Alternatives = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center">Free Alternative Applications</h1>
        <p className="fs-5 text-teal-mid text-center mb-3">
          Professional-grade free and open-source alternatives to expensive commercial software
        </p>
        <div className="alert alert-info border-0 shadow-sm mx-auto" style={{maxWidth: '800px'}} role="alert">
          <p className="mb-0 text-center">
            <strong>Pro Tip:</strong> Most of these applications are completely free and open-source. Some offer free versions with premium upgrades available.
          </p>
        </div>

        {/* Quick Reference Table */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3 text-center">Quick Reference Guide</h2>
          <div className="table-responsive">
            <table className="table table-hover shadow-sm">
              <thead className="bg-teal-mid text-white">
                <tr>
                  <th>Commercial Software</th>
                  <th>Free Alternative</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Adobe Photoshop</td>
                  <td>GIMP, Krita, Photopea</td>
                  <td>Photo editing, digital art</td>
                </tr>
                <tr>
                  <td>Adobe Illustrator</td>
                  <td>Inkscape, Vectr</td>
                  <td>Vector graphics, logos</td>
                </tr>
                <tr>
                  <td>Adobe Premiere Pro</td>
                  <td>DaVinci Resolve, Shotcut</td>
                  <td>Video editing</td>
                </tr>
                <tr>
                  <td>Adobe InDesign</td>
                  <td>Scribus, Canva</td>
                  <td>Page layout, publishing</td>
                </tr>
                <tr>
                  <td>Adobe Audition</td>
                  <td>Audacity, Ocenaudio</td>
                  <td>Audio editing, podcasts</td>
                </tr>
                <tr>
                  <td>Maya/3ds Max</td>
                  <td>Blender</td>
                  <td>3D modeling, animation</td>
                </tr>
                <tr>
                  <td>Microsoft Office</td>
                  <td>LibreOffice, Google Workspace</td>
                  <td>Documents, spreadsheets</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Graphic Design */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-palette"></i> Graphic Design & Photo Editing
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2"> Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">GIMP</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Photoshop</p>
                  <p className="card-text">Powerful image editor with advanced features for photo retouching, image composition, and graphic design.</p>
                  <p className="text-muted small mb-2"><strong>File Support:</strong> PSD, XCF, PNG, JPG, GIF, TIFF</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.gimp.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.gimp.org/downloads/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=gimp+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Krita</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Photoshop (Digital Painting)</p>
                  <p className="card-text">Professional digital painting application with excellent brush engines and illustration tools.</p>
                  <p className="text-muted small mb-2"><strong>File Support:</strong> KRA, PSD, PNG, JPG, TIFF</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://krita.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://krita.org/en/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=krita+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Photopea</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Photoshop (Web-based)</p>
                  <p className="card-text">Free online photo editor that works directly in your browser with PSD file support.</p>
                  <p className="text-muted small mb-2"><strong>File Support:</strong> PSD, XCF, Sketch, XD, CDR</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Web-based</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.photopea.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Open Application</a>
                    <span className="btn btn-sm btn-outline-secondary disabled">No Download Needed</span>
                    <a href="https://www.youtube.com/results?search_query=photopea+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
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
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2"> Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Inkscape</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Illustrator</p>
                  <p className="card-text">Professional vector graphics editor perfect for logos, illustrations, diagrams, and web graphics.</p>
                  <p className="text-muted small mb-2"><strong>File Support:</strong> SVG, AI, EPS, PDF, PNG</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://inkscape.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://inkscape.org/release/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=inkscape+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Vectr</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Illustrator (Simplified)</p>
                  <p className="card-text">Simple yet powerful vector graphics software for creating logos, presentations, and designs.</p>
                  <p className="text-muted small mb-2"><strong>File Support:</strong> SVG, PNG, JPG</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">Web-based</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://vectr.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://vectr.com/downloads/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=vectr+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
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
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2"> Most Popular</span>
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">DaVinci Resolve</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Premiere Pro</p>
                  <p className="card-text">Professional video editing, color correction, and audio post-production software used by Hollywood.</p>
                  <p className="text-muted small mb-2"><strong>Note:</strong> Free version available; Studio version requires purchase</p>
                  <p className="text-muted small mb-2"><strong>File Support:</strong> MP4, MOV, AVI, MKV, ProRes</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.blackmagicdesign.com/products/davinciresolve" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.blackmagicdesign.com/products/davinciresolve" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=davinci+resolve+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Shotcut</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Premiere Pro</p>
                  <p className="card-text">Free, open-source, cross-platform video editor with a wide range of features and format support.</p>
                  <p className="text-muted small mb-2"><strong>File Support:</strong> MP4, MOV, AVI, MKV, WebM, many more</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://shotcut.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://shotcut.org/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=shotcut+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">OpenShot</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Premiere Pro (Beginner-friendly)</p>
                  <p className="card-text">Easy-to-use video editor with powerful features, perfect for beginners and quick projects.</p>
                  <p className="text-muted small mb-2"><strong>File Support:</strong> MP4, AVI, MOV, WebM, FLV</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.openshot.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.openshot.org/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=openshot+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
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
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Scribus</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe InDesign</p>
                  <p className="card-text">Professional page layout application for creating magazines, newsletters, posters, and more.</p>
                  <p className="text-muted small mb-2"><strong>File Support:</strong> SLA, PDF, EPS, SVG</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.scribus.net/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.scribus.net/downloads/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=scribus+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2"> Most Popular</span>
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Canva (Free)</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe InDesign (Simplified)</p>
                  <p className="card-text">User-friendly design platform with thousands of templates for social media, presentations, and print.</p>
                  <p className="text-muted small mb-2"><strong>Note:</strong> Free version available; Pro features require subscription</p>
                  <p className="text-muted small mb-2"><strong>File Support:</strong> PNG, JPG, PDF, MP4, GIF</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Web-based</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Open Application</a>
                    <span className="btn btn-sm btn-outline-secondary disabled">No Download Needed</span>
                    <a href="https://www.youtube.com/results?search_query=canva+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
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
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2"> Most Popular</span>
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Blender</h5>
                  <p className="text-muted small mb-2">Alternative to: Maya, 3ds Max, Cinema 4D</p>
                  <p className="card-text">Complete 3D creation suite supporting modeling, animation, rendering, and video editing.</p>
                  <p className="text-muted small mb-2"><strong>File Support:</strong> BLEND, FBX, OBJ, STL, GLTF</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.blender.org/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=blender+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
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
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2"> Most Popular</span>
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Audacity</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Audition</p>
                  <p className="card-text">Multi-track audio editor and recorder for podcasts, music, and sound effects editing.</p>
                  <p className="text-muted small mb-2"><strong>File Support:</strong> MP3, WAV, AIFF, FLAC, OGG</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.audacityteam.org/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=audacity+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Ocenaudio</h5>
                  <p className="text-muted small mb-2">Alternative to: Adobe Audition (Simplified)</p>
                  <p className="card-text">Fast and easy-to-use audio editor with real-time preview of effects and VST plugin support.</p>
                  <p className="text-muted small mb-2"><strong>File Support:</strong> MP3, WAV, AIFF, FLAC, OGG</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.ocenaudio.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.ocenaudio.com/download" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=oceanaudio+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Office & Productivity */}

         <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-music-note-beamed"></i> Office & Productivity
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">LibreOffice</h5>
                  <p className="text-muted small mb-2">Alternative to: Microsoft Office</p>
                  <p className="card-text">Full-featured office suite with word processor, spreadsheet, presentation, and more.</p>
                  <p className="text-muted small mb-2"><strong>File Support:</strong> odt, doc, docx, rtf, txt, html, pdf, ods, xls, xlsx, csv, odp, ppt, pptx</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.libreoffice.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.libreoffice.org/download/download-libreoffice/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=LibreOffice+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

              <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2"> Most Popular</span>
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Google Docs (Free)</h5>
                  <p className="text-muted small mb-2">Alternative to: Microsoft Office</p>
                  <p className="card-text">Cloud-based productivity suite with Docs, Sheets, Slides, and real-time collaboration.</p>
                  <p className="text-muted small mb-2"><strong>File Support:</strong> doc, docx, odt, rtf, txt, pdf, html, xls, xlsx, csv, ods, ppt, pptx, odp, jpg, png, gif, svg, tif, tiff</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Web-based</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://docs.google.com" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.youtube.com/results?search_query=google+docs+tutorial" target="_blank" rel="noopener noreferrer" 
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

export default Alternatives