import React from 'react'

const LibraryPrivacy = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center mb-5">Privacy & Security Resources</h1>
        
        {/* Main Content in Single Column */}
        <div className="mx-auto" style={{maxWidth: '900px'}}>
          
          {/* Core Privacy Resources */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-shield-lock"></i> Core Privacy Resources
            </h2>
            
            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  ALA Privacy Tool Kit <span className="badge bg-warning text-dark ms-2">Essential</span>
                </h5>
                <p className="text-muted small mb-2">American Library Association</p>
              </div>
              <p className="mb-3">Core library-focused guidance, templates, and background on privacy and confidentiality in libraries. This is your foundational resource for building privacy policies and procedures.</p>
              <p className="mb-2"><strong>What You'll Find:</strong></p>
              <ul className="mb-3">
                <li>Privacy policy templates tailored for libraries</li>
                <li>Background on privacy principles and confidentiality</li>
                <li>Practical guidance for implementing privacy protections</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Tip:</strong> Start here when creating or updating your library's privacy policy. Use the templates as a foundation and customize for your specific needs.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Policy Templates</span>
                <span className="badge bg-teal-light text-teal-dark">Foundational</span>
                <span className="badge bg-teal-light text-teal-dark">Best Practices</span>
              </div>
              <a href="https://www.ala.org/advocacy/privacy/toolkit" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit ALA Privacy Tool Kit</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">ALA State Privacy Laws</h5>
                <p className="text-muted small mb-2">American Library Association</p>
              </div>
              <p className="mb-3">Overview showing that most U.S. states protect library records and how laws vary state-by-state. Essential when responding to subpoenas or law enforcement requests.</p>
              <p className="mb-2"><strong>Why It Matters:</strong></p>
              <ul className="mb-3">
                <li>48 states plus DC have statutory protections for library records</li>
                <li>Language and exceptions differ significantly by state</li>
                <li>Critical for knowing your legal obligations and patron rights</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Tip:</strong> Keep a quick state-law cheat sheet for your legal team. Know your state's specific protections before responding to any records request.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Legal Guidance</span>
                <span className="badge bg-teal-light text-teal-dark">State Laws</span>
                <span className="badge bg-teal-light text-teal-dark">Compliance</span>
              </div>
              <a href="https://www.ala.org/advocacy/privacy/statelaws" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">View State Privacy Laws</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  ALA Library Privacy Guidelines & Checklists <span className="badge bg-success ms-2">Practical</span>
                </h5>
                <p className="text-muted small mb-2">American Library Association</p>
              </div>
              <p className="mb-3">Practical, step-by-step checklists for operational privacy including data minimization, retention, notices, and audits. Great for building policies and standard operating procedures.</p>
              <p className="mb-2"><strong>Key Features:</strong></p>
              <ul className="mb-3">
                <li>Step-by-step implementation checklists</li>
                <li>Data minimization and retention guidelines</li>
                <li>Privacy audit frameworks</li>
                <li>Patron notification templates</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Tip:</strong> Use these checklists to conduct a privacy audit of your current systems and identify gaps in your privacy protections.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Checklists</span>
                <span className="badge bg-teal-light text-teal-dark">Data Minimization</span>
                <span className="badge bg-teal-light text-teal-dark">Audits</span>
              </div>
              <a href="https://www.ala.org/advocacy/privacy/guidelines" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">View Privacy Checklists</a>
            </div>
          </div>

          {/* Vendor & System Management */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-diagram-3"></i> Vendor & System Management
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">ALA Guidelines for Library Management Systems</h5>
                <p className="text-muted small mb-2">American Library Association</p>
              </div>
              <p className="mb-3">Vendor-contract guidance covering data ownership, retention, and security expectations you should require in RFPs or contracts.</p>
              <p className="mb-2"><strong>What to Include in Contracts:</strong></p>
              <ul className="mb-3">
                <li>Library ownership of patron data</li>
                <li>Vendor compliance with state privacy laws</li>
                <li>Notice requirements before data sharing</li>
                <li>Security controls and breach notification</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Tip:</strong> Use this guidance as contract language inspiration when negotiating with ILS/LMS vendors. Insist on these protections before signing.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Vendor Contracts</span>
                <span className="badge bg-teal-light text-teal-dark">RFPs</span>
                <span className="badge bg-teal-light text-teal-dark">Data Ownership</span>
              </div>
              <a href="https://www.ala.org/advocacy/privacy/guidelines/library-management-systems" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">View LMS Guidelines</a>
            </div>
          </div>

          {/* Digital Security Tools */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-tools"></i> Digital Security Tools & Training
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  IMLS Privacy Field Guides <span className="badge bg-success ms-2">Free</span>
                </h5>
                <p className="text-muted small mb-2">Institute of Museum and Library Services</p>
              </div>
              <p className="mb-3">Grant-funded, librarian-friendly "how-to" guides on digital security basics, privacy audits, talking with patrons, and vendor/privacy lifecycle. Useful for training and workshops.</p>
              <p className="mb-2"><strong>Topics Covered:</strong></p>
              <ul className="mb-3">
                <li>Digital security basics for library staff</li>
                <li>Conducting privacy audits</li>
                <li>Communicating with patrons about privacy</li>
                <li>Vendor privacy lifecycle management</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Tip:</strong> Perfect for staff training sessions. Use the field guide exercises to map data flows and identify privacy risks in your systems.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Training Materials</span>
                <span className="badge bg-teal-light text-teal-dark">Privacy Audits</span>
                <span className="badge bg-teal-light text-teal-dark">Staff Development</span>
              </div>
              <a href="https://www.imls.gov/our-work/priority-areas/digital-privacy-libraries" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Access IMLS Guides</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  Electronic Frontier Foundation (EFF) <span className="badge bg-success ms-2">Free Tools</span>
                </h5>
                <p className="text-muted small mb-2">Electronic Frontier Foundation</p>
              </div>
              <p className="mb-3">Practical tools and advocacy resources for libraries, including browser extensions like Privacy Badger for public computers and guidance on limiting tracking.</p>
              <p className="mb-2"><strong>Resources for Libraries:</strong></p>
              <ul className="mb-3">
                <li>Privacy Badger browser extension (free tracking blocker)</li>
                <li>Technical controls for public computers</li>
                <li>Guidance on protecting patron privacy online</li>
                <li>Best practices for digital security</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Tip:</strong> Install Privacy Badger on all public browsers to automatically block trackers and protect patron browsing privacy.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Browser Tools</span>
                <span className="badge bg-teal-light text-teal-dark">Tracking Protection</span>
                <span className="badge bg-teal-light text-teal-dark">Technical Guidance</span>
              </div>
              <a href="https://www.eff.org/issues/privacy" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow me-2">EFF Privacy Resources</a>
              <a href="https://privacybadger.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary hvr-grow">Privacy Badger</a>
            </div>
          </div>

          {/* Implementation Checklist */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-check2-square"></i> Quick Implementation Checklist
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Essential Privacy & Security Steps</h5>
                <p className="text-muted small mb-2">Start Here for Maximum Impact</p>
              </div>
              
              <div className="mb-4">
                <h6 className="fw-bold mb-2">1. Policy & Documentation</h6>
                <ul className="mb-0">
                  <li><strong>Adopt a written Privacy Policy</strong> — State what you collect, why, how long you keep it, and how patrons can request deletion/access (base on ALA checklists)</li>
                  <li><strong>Document retention periods</strong> — Set clear timelines for circulation data, computer logs, security camera footage</li>
                </ul>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-2">2. Data Minimization</h6>
                <ul className="mb-0">
                  <li><strong>Collect only what's necessary</strong> — E.g., a barcode for checkout; avoid collecting DOB where not required</li>
                  <li><strong>Automate secure deletion</strong> — Set systems to automatically purge unnecessary data</li>
                </ul>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-2">3. Public Computer Protection</h6>
                <ul className="mb-0">
                  <li><strong>Default to private browsing modes</strong> — Clear user profiles/logs between sessions</li>
                  <li><strong>Install tracking blockers</strong> — Privacy Badger or similar on all public browsers</li>
                  <li><strong>Use clean-state restoration</strong> — Disk-freeze solutions or Windows UWF to restore clean state</li>
                </ul>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-2">4. Technical Security</h6>
                <ul className="mb-0">
                  <li><strong>Encrypt in transit and at rest</strong> — Require HTTPS for all library sites; encrypt sensitive backups</li>
                  <li><strong>Review vendor contracts</strong> — Insist on library data ownership, compliance with state laws, and security controls</li>
                </ul>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-2">5. Staff Training & Response</h6>
                <ul className="mb-0">
                  <li><strong>Train staff on privacy basics</strong> — How to respond to law enforcement requests (who to escalate)</li>
                  <li><strong>Create incident response checklist</strong> — Document steps for handling privacy breaches or legal requests</li>
                </ul>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-2">6. Ongoing Audits</h6>
                <ul className="mb-0">
                  <li><strong>Run periodic privacy audits</strong> — Follow ALA/IMLS field guide exercises to map data flows</li>
                  <li><strong>Identify and reduce unnecessary exposure</strong> — Which systems collect which fields? Where can you minimize?</li>
                </ul>
              </div>

              <div className="alert alert-info border-0 mt-4 mb-0">
                <p className="mb-0"><strong>🎯 Pro Tip:</strong> Don't try to implement everything at once. Start with a written privacy policy and data minimization, then add technical controls and training over time.</p>
              </div>
            </div>
          </div>

          {/* Legal Considerations */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-briefcase"></i> Legal Considerations & Response Planning
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Know Your State Law</h5>
              </div>
              <p className="mb-3">48 states plus DC have statutory protections for library records, but language and exceptions differ significantly. Keep a quick state-law cheat sheet accessible for your legal team.</p>
              <div className="alert alert-warning border-0 mb-3">
                <p className="mb-0"><strong>⚠️ Important:</strong> Understand your state's specific protections and exceptions before you receive any legal request for patron data.</p>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Responding to Legal Demands</h5>
              </div>
              <p className="mb-3">ALA guidance explains what to do when served with subpoenas or search warrants. Have a clear escalation path established before you need it.</p>
              <p className="mb-2"><strong>Key Steps:</strong></p>
              <ul className="mb-3">
                <li>Require a court order for patron records</li>
                <li>Immediately consult legal counsel</li>
                <li>Provide only the minimum information required</li>
                <li>Document the request and your response</li>
                <li>Know who in your organization handles these requests</li>
              </ul>
              <div className="alert alert-success border-0 mb-0">
                <p className="mb-0"><strong>💡 Tip:</strong> Create a one-page "Legal Request Response Protocol" for your staff with clear escalation contacts and steps to follow.</p>
              </div>
            </div>
          </div>

          {/* Need More Help? */}
          <div className="mb-5">
            <div className="p-4 bg-light rounded text-center">
              <h4 className="text-teal-mid fw-bold mb-3">Need Help Implementing These Resources?</h4>
              <p className="mb-3">Looking for customized materials for your library? Consider:</p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">📄 <strong>Ready-to-publish "Privacy & Security" web page</strong> for your library website</li>
                <li className="mb-2">📋 <strong>Staff privacy SOP</strong> with step-by-step procedures</li>
                <li className="mb-2">🔍 <strong>Privacy policy audit</strong> with suggested edits tied to ALA/IMLS guidance</li>
              </ul>
              <p className="text-muted small mb-0">Contact your IT department or library administration to discuss implementing these privacy protections.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LibraryPrivacy