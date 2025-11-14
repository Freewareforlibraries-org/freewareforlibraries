import React from 'react'

const MakerspaceTools = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center">Makerspace, Coding, & Creative Tools</h1>
        <p className="fs-5 text-teal-mid text-center mb-3">
          Free and open-source tools for digital literacy, STEM, and maker programming
        </p>
        <div className="alert alert-info border-0 shadow-sm mx-auto" style={{maxWidth: '800px'}} role="alert">
          <p className="mb-0 text-center">
            These tools empower libraries to offer coding education, creative design, 3D printing, and video production—all without expensive software licenses!
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
                  <td>Coding Education (Kids)</td>
                  <td>Scratch, Blockly</td>
                  <td>Visual programming for beginners</td>
                </tr>
                <tr>
                  <td>Coding Education (Advanced)</td>
                  <td>Processing</td>
                  <td>Creative coding and interactive art</td>
                </tr>
                <tr>
                  <td>Image Editing</td>
                  <td>GIMP, Krita</td>
                  <td>Photo manipulation and digital painting</td>
                </tr>
                <tr>
                  <td>Vector Graphics</td>
                  <td>Inkscape</td>
                  <td>Logo design and illustrations</td>
                </tr>
                <tr>
                  <td>3D Modeling</td>
                  <td>Blender, FreeCAD</td>
                  <td>3D design and animation</td>
                </tr>
                <tr>
                  <td>3D Printing</td>
                  <td>PrusaSlicer, OpenSCAD</td>
                  <td>Preparing models for 3D printers</td>
                </tr>
                <tr>
                  <td>Audio Editing</td>
                  <td>Audacity</td>
                  <td>Recording and editing audio</td>
                </tr>
                <tr>
                  <td>Video Production</td>
                  <td>OBS Studio, Kdenlive, Shotcut</td>
                  <td>Recording and editing video content</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Coding Education */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-code-slash"></i> Coding Education
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Scratch</h5>
                  <p className="text-muted small mb-2">Visual Programming for Kids</p>
                  <p className="card-text">Block-based visual programming language designed for children ages 8-16. Create interactive stories, games, and animations while learning coding concepts.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Open Source</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Web-based</span>
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Mac</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://scratch.mit.edu/download" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=scratch+programming+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Blockly</h5>
                  <p className="text-muted small mb-2">Visual Programming Library</p>
                  <p className="card-text">Google's visual block programming library. Can be integrated into educational platforms and used to teach programming logic through drag-and-drop blocks.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Web-based</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://developers.google.com/blockly" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://developers.google.com/blockly/guides/get-started/get-the-code" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=blockly+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">Processing</h5>
                  <p className="text-muted small mb-2">Creative Coding Environment</p>
                  <p className="card-text">Flexible software sketchbook and language for learning to code within visual arts context. Perfect for creating interactive graphics and animations.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Mac</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://processing.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://processing.org/download" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=processing+coding+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Creative Design & Media */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-palette"></i> Creative Design & Media
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Blender</h5>
                  <p className="text-muted small mb-2">3D Creation Suite</p>
                  <p className="card-text">Professional-grade 3D modeling, animation, rendering, and video editing suite. Used by studios worldwide and perfect for advanced maker projects.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Mac</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.blender.org/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=blender+beginner+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">GIMP</h5>
                  <p className="text-muted small mb-2">Image Editing Software</p>
                  <p className="card-text">Powerful photo manipulation and image editing tool. Free alternative to Photoshop with layers, filters, and professional-grade features.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Mac</span>
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
                    <span className="badge bg-warning text-dark me-2">Recommended</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Inkscape</h5>
                  <p className="text-muted small mb-2">Vector Graphics Editor</p>
                  <p className="card-text">Professional vector graphics software for logos, illustrations, diagrams, and designs. Free alternative to Adobe Illustrator with SVG support.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Mac</span>
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
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Krita</h5>
                  <p className="text-muted small mb-2">Digital Painting Software</p>
                  <p className="card-text">Professional painting program designed for concept art, texture painting, and illustrations. Excellent for digital artists with brush engines and layer support.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Mac</span>
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
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Audacity</h5>
                  <p className="text-muted small mb-2">Audio Recording & Editing</p>
                  <p className="card-text">Easy-to-use multi-track audio editor and recorder. Perfect for podcasts, music editing, and audio restoration for library programs.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Mac</span>
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
          </div>
        </div>

        {/* 3D Printing & Design */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-box"></i> 3D Printing & Design
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">FreeCAD</h5>
                  <p className="text-muted small mb-2">Parametric 3D Modeler</p>
                  <p className="card-text">Open-source parametric 3D CAD modeler designed for engineering and product design. Great for mechanical parts and technical designs.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> LGPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Mac</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.freecad.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.freecad.org/downloads.php" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=freecad+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <h5 className="card-title text-teal-mid fw-bold">OpenSCAD</h5>
                  <p className="text-muted small mb-2">Script-based 3D Modeling</p>
                  <p className="card-text">Programmers' solid 3D CAD modeler using script descriptions. Perfect for parametric designs and teaching computational thinking through 3D modeling.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Mac</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://openscad.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://openscad.org/downloads.html" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=openscad+tutorial" target="_blank" rel="noopener noreferrer" 
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
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">PrusaSlicer</h5>
                  <p className="text-muted small mb-2">3D Printer Slicer Software</p>
                  <p className="card-text">Powerful slicer software that prepares 3D models for printing. Works with most 3D printers and provides excellent print quality control.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> AGPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Mac</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.prusa3d.com/page/prusaslicer_424/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.prusa3d.com/page/prusaslicer_424/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=prusaslicer+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Creation */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-camera-video"></i> Video Creation
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">OBS Studio</h5>
                  <p className="text-muted small mb-2">Screen Recording & Streaming</p>
                  <p className="card-text">Free and open-source software for video recording and live streaming. Perfect for creating tutorials, recording presentations, and streaming library events.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Mac</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://obsproject.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://obsproject.com/download" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=obs+studio+tutorial" target="_blank" rel="noopener noreferrer" 
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
                  <p className="text-muted small mb-2">Video Editor</p>
                  <p className="card-text">Free, cross-platform video editor with wide format support. User-friendly interface with professional features for creating library program videos.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Mac</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.shotcut.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.shotcut.org/download/" target="_blank" rel="noopener noreferrer" 
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
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Kdenlive</h5>
                  <p className="text-muted small mb-2">Professional Video Editor</p>
                  <p className="card-text">Full-featured non-linear video editor with multi-track editing, effects, and transitions. Ideal for more advanced video production projects.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Mac</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://kdenlive.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://kdenlive.org/en/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=kdenlive+tutorial" target="_blank" rel="noopener noreferrer" 
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

export default MakerspaceTools