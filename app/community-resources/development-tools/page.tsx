import React from 'react'

const WebDevTools = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center mb-4">Website Development & Management Tools</h1>
        
        <div className="mx-auto mb-5" style={{maxWidth: '900px'}}>
          <p className="lead text-center mb-5">
            Essential development and technical tools for website management and development—with guidance on what each is good for and how you might use them in a library or public services context.
          </p>
        </div>

        {/* Main Content in Single Column */}
        <div className="mx-auto" style={{maxWidth: '900px'}}>
          
          {/* Content Management Systems */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-layout-text-window me-2"></i>Content Management Systems (CMS)
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  Drupal <span className="badge bg-success ms-2">Free & Open Source</span>
                </h5>
                <p className="text-muted small mb-2">Powerful Open-Source CMS</p>
              </div>
              <p className="mb-3">A free, open-source CMS with extensive flexibility for websites of all sizes, featuring robust modules and enterprise-grade capabilities.</p>
              <p className="mb-2"><strong>Best For Libraries:</strong></p>
              <ul className="mb-3">
                <li>Robust module ecosystem for extended functionality</li>
                <li>Multilingual support for diverse communities</li>
                <li>Community and knowledge-base features</li>
                <li>Complex content structures and workflows</li>
                <li>Large-scale library systems with multiple departments</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Library Use Case:</strong> Ideal for library websites needing advanced features like event management, multilingual content, community forums, or integration with multiple systems.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Enterprise-Grade</span>
                <span className="badge bg-teal-light text-teal-dark">Multilingual</span>
                <span className="badge bg-teal-light text-teal-dark">Modular</span>
              </div>
              <a href="https://www.drupal.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Drupal</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  Joomla <span className="badge bg-success ms-2">Free & Open Source</span>
                </h5>
                <p className="text-muted small mb-2">Flexible Open-Source CMS</p>
              </div>
              <p className="mb-3">Another open-source CMS option that strikes a balance between flexibility and ease of use, suitable for mid-sized library websites.</p>
              <p className="mb-2"><strong>Best For Libraries:</strong></p>
              <ul className="mb-3">
                <li>Mid-sized library sites with moderate complexity</li>
                <li>Organizations wanting less overhead than enterprise systems</li>
                <li>Libraries needing good extension options without excessive complexity</li>
                <li>Teams with limited technical resources</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Library Use Case:</strong> Perfect for branch libraries or medium-sized systems that need more than a basic site but don't require enterprise-level complexity.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Mid-Sized Sites</span>
                <span className="badge bg-teal-light text-teal-dark">User-Friendly</span>
                <span className="badge bg-teal-light text-teal-dark">Balanced</span>
              </div>
              <a href="https://www.joomla.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Joomla</a>
            </div>
          </div>

          {/* Code Editors / IDEs */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-code-slash me-2"></i>Code Editors & IDEs
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  Visual Studio Code <span className="badge bg-warning text-dark ms-2">Most Popular</span> <span className="badge bg-success ms-2">Free</span>
                </h5>
                <p className="text-muted small mb-2">Cross-Platform Code Editor by Microsoft</p>
              </div>
              <p className="mb-3">Popular, cross-platform code editor with extensive extension ecosystem, intelligent code completion, and built-in Git support.</p>
              <p className="mb-2"><strong>Best For Libraries:</strong></p>
              <ul className="mb-3">
                <li>Library IT staff doing custom web modules</li>
                <li>Website maintenance and updates</li>
                <li>Small site edits and customizations</li>
                <li>Working with multiple programming languages</li>
                <li>Collaborative development with version control</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Library Use Case:</strong> Essential tool for any library IT staff member who maintains or customizes your website, creates custom integrations, or works with web-based systems.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Free</span>
                <span className="badge bg-teal-light text-teal-dark">Extensions</span>
                <span className="badge bg-teal-light text-teal-dark">Git Integration</span>
              </div>
              <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit VS Code</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Sublime Text</h5>
                <p className="text-muted small mb-2">Lightweight, Fast Code Editor</p>
              </div>
              <p className="mb-3">Lightweight code editor known for speed and efficiency, with a clean interface and powerful features for developers comfortable with code.</p>
              <p className="mb-2"><strong>Best For Libraries:</strong></p>
              <ul className="mb-3">
                <li>Quick edits and rapid development</li>
                <li>Staff comfortable with code wanting something simpler</li>
                <li>Fast performance on older hardware</li>
                <li>Multiple file editing with split views</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Library Use Case:</strong> Great for quick CSS tweaks, template edits, or configuration file updates when you need speed and simplicity.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Lightweight</span>
                <span className="badge bg-teal-light text-teal-dark">Fast</span>
                <span className="badge bg-teal-light text-teal-dark">Efficient</span>
              </div>
              <a href="https://www.sublimetext.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Sublime Text</a>
            </div>
          </div>

          {/* Frameworks & Toolkits */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-box-seam me-2"></i>Frameworks & Development Toolkits
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Yeoman</h5>
                <p className="text-muted small mb-2">Web Application Scaffolding Tool</p>
              </div>
              <p className="mb-3">Scaffolding tool that helps you kickstart new web applications and projects with pre-configured templates and best practices.</p>
              <p className="mb-2"><strong>Best For Libraries:</strong></p>
              <ul className="mb-3">
                <li>Building new web applications or modules</li>
                <li>Creating custom library event calendars</li>
                <li>Developing room reservation systems</li>
                <li>Starting projects with standardized structures</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Library Use Case:</strong> When you need to create a custom web tool (like an event registration system or digital exhibit), Yeoman helps you start with a solid foundation.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Scaffolding</span>
                <span className="badge bg-teal-light text-teal-dark">Templates</span>
                <span className="badge bg-teal-light text-teal-dark">Best Practices</span>
              </div>
              <a href="https://yeoman.io/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Yeoman</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Google Web Toolkit (GWT)</h5>
                <p className="text-muted small mb-2">Java to JavaScript Compiler</p>
              </div>
              <p className="mb-3">Toolkit for building JavaScript front-end applications using Java, allowing Java developers to create browser-based applications.</p>
              <p className="mb-2"><strong>Best For Libraries:</strong></p>
              <ul className="mb-3">
                <li>Organizations with existing Java development teams</li>
                <li>Libraries with Java/JS heavy infrastructure</li>
                <li>Complex web applications requiring Java backend integration</li>
              </ul>
              <div className="alert alert-info border-0 mb-3">
                <p className="mb-0"><strong>Note:</strong> More specialized tool—may not be needed unless your library has a development team already using Java/JavaScript heavily.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Java</span>
                <span className="badge bg-teal-light text-teal-dark">Specialized</span>
                <span className="badge bg-teal-light text-teal-dark">Enterprise</span>
              </div>
              <a href="https://www.gwtproject.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit GWT</a>
            </div>
          </div>

          {/* Dev Workflow & Collaboration */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-git me-2"></i>Development Workflow & Collaboration
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  GitHub <span className="badge bg-warning text-dark ms-2">Industry Standard</span>
                </h5>
                <p className="text-muted small mb-2">Code Hosting & Collaboration Platform</p>
              </div>
              <p className="mb-3">Code hosting and collaboration platform using Git version control, enabling teams to work together on website code, track changes, and manage projects.</p>
              <p className="mb-2"><strong>Best For Libraries:</strong></p>
              <ul className="mb-3">
                <li>Multiple staff or contractors editing website code</li>
                <li>Version control for modules and content</li>
                <li>Collaborative development workflows</li>
                <li>Tracking changes and managing releases</li>
                <li>Open-source project contributions</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Library Use Case:</strong> Essential if you have multiple people working on your website or if you use contractors—helps prevent conflicts and maintains a history of all changes.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Version Control</span>
                <span className="badge bg-teal-light text-teal-dark">Collaboration</span>
                <span className="badge bg-teal-light text-teal-dark">Open Source</span>
              </div>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit GitHub</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  Postman <span className="badge bg-success ms-2">Free Version Available</span>
                </h5>
                <p className="text-muted small mb-2">API Development & Testing Tool</p>
              </div>
              <p className="mb-3">Comprehensive tool for testing, developing, and documenting APIs, making it easy to work with external services and integrations.</p>
              <p className="mb-2"><strong>Best For Libraries:</strong></p>
              <ul className="mb-3">
                <li>Testing connections to library catalogs</li>
                <li>Integrating with ILS APIs</li>
                <li>Working with reservation systems</li>
                <li>Connecting to external databases</li>
                <li>Troubleshooting third-party integrations</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Library Use Case:</strong> If your website connects to your ILS, patron database, event system, or any external APIs, Postman is invaluable for testing and troubleshooting these connections.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">API Testing</span>
                <span className="badge bg-teal-light text-teal-dark">Integration</span>
                <span className="badge bg-teal-light text-teal-dark">Debugging</span>
              </div>
              <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Postman</a>
            </div>
          </div>

          {/* Design & UI Tools */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-palette me-2"></i>Design & UI Tools
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Adobe Fonts</h5>
                <p className="text-muted small mb-2">Professional Font Library for Web</p>
              </div>
              <p className="mb-3">Extensive library of high-quality fonts for web use, integrated with Adobe Creative Cloud, ensuring consistent typography and professional branding.</p>
              <p className="mb-2"><strong>Best For Libraries:</strong></p>
              <ul className="mb-3">
                <li>Consistent typography across library website and materials</li>
                <li>Professional branding and visual identity</li>
                <li>Accessible, readable fonts for all users</li>
                <li>Multilingual font support</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Library Use Case:</strong> When designing your library site, Adobe Fonts helps maintain consistent typography that matches your print materials and supports your brand identity.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Typography</span>
                <span className="badge bg-teal-light text-teal-dark">Branding</span>
                <span className="badge bg-teal-light text-teal-dark">Professional</span>
              </div>
              <a href="https://fonts.adobe.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Adobe Fonts</a>
            </div>
          </div>

          {/* Build Tools & Bundlers */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-gear me-2"></i>Build Tools & Automation
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Webpack</h5>
                <p className="text-muted small mb-2">Module Bundler for Modern Web Apps</p>
              </div>
              <p className="mb-3">Module bundler for JavaScript and CSS that packages your website's code into optimized bundles for production deployment.</p>
              <p className="mb-2"><strong>Best For Libraries:</strong></p>
              <ul className="mb-3">
                <li>Websites with lots of front-end custom code</li>
                <li>JavaScript modules and advanced UI components</li>
                <li>Optimizing site performance and load times</li>
                <li>Managing complex asset dependencies</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Library Use Case:</strong> If your library website has custom JavaScript features (interactive maps, dynamic search, real-time availability), Webpack helps optimize and bundle this code efficiently.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Bundling</span>
                <span className="badge bg-teal-light text-teal-dark">Optimization</span>
                <span className="badge bg-teal-light text-teal-dark">Performance</span>
              </div>
              <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Webpack</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Gulp</h5>
                <p className="text-muted small mb-2">Task Automation Toolkit</p>
              </div>
              <p className="mb-3">Automation tool for repetitive development tasks like minification, compilation, and asset processing, streamlining website updates and maintenance.</p>
              <p className="mb-2"><strong>Best For Libraries:</strong></p>
              <ul className="mb-3">
                <li>Automating repetitive development tasks</li>
                <li>Minifying CSS and JavaScript for faster loading</li>
                <li>Processing and optimizing images</li>
                <li>Streamlining frequent website updates</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Library Use Case:</strong> Especially helpful for libraries that frequently update their website—automates tasks like image optimization, code minification, and deployment processes.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Automation</span>
                <span className="badge bg-teal-light text-teal-dark">Workflow</span>
                <span className="badge bg-teal-light text-teal-dark">Efficiency</span>
              </div>
              <a href="https://gulpjs.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Gulp</a>
            </div>
          </div>

          {/* Getting Started Guide */}
          <div className="mb-5 p-4 bg-light rounded">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-compass me-2"></i>Getting Started: Which Tools Do You Need?
            </h2>
            
            <div className="row g-4">
              <div className="col-md-6">
                <div className="p-3 bg-white rounded h-100">
                  <h5 className="text-teal-mid fw-bold mb-3">
                    <i className="bi bi-star-fill text-warning me-2"></i>Essential for Most Libraries
                  </h5>
                  <ul className="mb-0">
                    <li>A CMS (Drupal or Joomla)</li>
                    <li>Visual Studio Code</li>
                    <li>GitHub (if multiple people edit code)</li>
                  </ul>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="p-3 bg-white rounded h-100">
                  <h5 className="text-teal-mid fw-bold mb-3">
                    <i className="bi bi-lightning-fill text-primary me-2"></i>If You Have Integrations
                  </h5>
                  <ul className="mb-0">
                    <li>Postman (for API testing)</li>
                    <li>Version control (GitHub)</li>
                    <li>API documentation tools</li>
                  </ul>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="p-3 bg-white rounded h-100">
                  <h5 className="text-teal-mid fw-bold mb-3">
                    <i className="bi bi-gear-fill text-success me-2"></i>For Custom Development
                  </h5>
                  <ul className="mb-0">
                    <li>Yeoman (for starting projects)</li>
                    <li>Webpack or Gulp (for optimization)</li>
                    <li>Build automation tools</li>
                  </ul>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="p-3 bg-white rounded h-100">
                  <h5 className="text-teal-mid fw-bold mb-3">
                    <i className="bi bi-brush-fill text-danger me-2"></i>For Design & Branding
                  </h5>
                  <ul className="mb-0">
                    <li>Adobe Fonts (typography)</li>
                    <li>Design system tools</li>
                    <li>Asset management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="p-4 bg-white shadow-sm rounded text-center">
            <h4 className="text-teal-mid fw-bold mb-3">Ready to Enhance Your Web Development Workflow?</h4>
            <p className="mb-4">Start with the essentials and add specialized tools as your needs grow. Most libraries benefit from a solid CMS, a good code editor, and version control—then build from there based on your specific requirements.</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <span className="badge bg-teal-light text-teal-dark" style={{fontSize: '0.9rem', padding: '8px 16px'}}>
                <i className="bi bi-tools me-2"></i>Professional Tools
              </span>
              <span className="badge bg-teal-light text-teal-dark" style={{fontSize: '0.9rem', padding: '8px 16px'}}>
                <i className="bi bi-speedometer2 me-2"></i>Efficient Workflow
              </span>
              <span className="badge bg-teal-light text-teal-dark" style={{fontSize: '0.9rem', padding: '8px 16px'}}>
                <i className="bi bi-people me-2"></i>Team Collaboration
              </span>
              <span className="badge bg-teal-light text-teal-dark" style={{fontSize: '0.9rem', padding: '8px 16px'}}>
                <i className="bi bi-graph-up me-2"></i>Better Results
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WebDevTools