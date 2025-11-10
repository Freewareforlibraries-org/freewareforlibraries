import React from 'react'

const WorkbookGuide = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center mb-4">How to Create a Library Technology Workbook</h1>
        
        <div className="mx-auto mb-5" style={{maxWidth: '900px'}}>
          <p className="lead text-center mb-5">
            Creating a Technology Workbook for your library helps organize and plan all aspects of your IT infrastructure, from hardware and software to support, budgeting, and maintenance. Follow these steps to create a comprehensive and actionable workbook.
          </p>
        </div>

        {/* Main Content in Single Column */}
        <div className="mx-auto" style={{maxWidth: '900px'}}>
          
          {/* Step 1 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>1</span>
              Define the Workbook Purpose and Scope
            </h2>
            <ol className="mb-3">
              <li className="mb-2"><strong>Identify why you need a Technology Workbook:</strong> document inventory, plan upgrades, track maintenance, evaluate technology needs</li>
              <li className="mb-2"><strong>Decide the scope:</strong> all library branches or a single location, all technology (hardware/software) or specific systems (ILS, print management, PC reservation)</li>
              <li className="mb-2"><strong>Choose format:</strong> Word, Excel, PDF, or a digital HTML form</li>
            </ol>
          </div>

          {/* Step 2 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>2</span>
              Gather Library Information
            </h2>
            <p className="mb-3">Create a cover page with:</p>
            <ul className="mb-3">
              <li>Library Name</li>
              <li>Branch / Location</li>
              <li>Prepared by</li>
              <li>Date</li>
              <li>Version / Revision</li>
            </ul>
            <div className="alert alert-info border-0">
              <p className="mb-0"><strong>Note:</strong> This ensures the workbook is easily identifiable and trackable over time.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>3</span>
              Define Vision & Strategic Goals
            </h2>
            <p className="mb-3">Include sections for:</p>
            <ul className="mb-3">
              <li><strong>Mission of the library</strong></li>
              <li><strong>Vision for technology</strong> (how technology supports library goals)</li>
              <li><strong>Strategic technology goals</strong> (e.g., public WiFi coverage, hardware refresh cycles, print management updates)</li>
              <li><strong>Key success metrics</strong> (how you will measure achievement)</li>
            </ul>
            <div className="alert alert-success border-0">
              <p className="mb-0"><strong>Tip:</strong> Keep goals specific, measurable, achievable, relevant, and time-bound (SMART).</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>4</span>
              Document Current Infrastructure
            </h2>
            
            <h5 className="text-teal-mid fw-bold mb-3">Hardware Inventory</h5>
            <p className="mb-2">List all hardware including PCs, servers, printers, network devices. Include:</p>
            <ul className="mb-4">
              <li>Quantity</li>
              <li>Location</li>
              <li>Purchase Date</li>
              <li>Warranty Expiry</li>
              <li>Condition</li>
              <li>Notes</li>
            </ul>

            <h5 className="text-teal-mid fw-bold mb-3">Network & Connectivity</h5>
            <p className="mb-2">Document:</p>
            <ul className="mb-4">
              <li>ISP and bandwidth</li>
              <li>Wired/wireless coverage</li>
              <li>Network hardware (routers, switches, access points)</li>
              <li>Backup/failover plan</li>
            </ul>

            <h5 className="text-teal-mid fw-bold mb-3">Software & Systems</h5>
            <p className="mb-2">Include:</p>
            <ul className="mb-4">
              <li>ILS/LMS system</li>
              <li>Print management system</li>
              <li>PC reservation system</li>
              <li>Operating systems used</li>
              <li>Licenses and support contracts</li>
            </ul>

            <h5 className="text-teal-mid fw-bold mb-3">Staff Skills & Support</h5>
            <p className="mb-2">Document:</p>
            <ul className="mb-0">
              <li>Internal IT staff and responsibilities</li>
              <li>External vendors/support</li>
              <li>Training summary</li>
              <li>Existing policies</li>
            </ul>
          </div>

          {/* Step 5 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>5</span>
              Conduct Needs & Gap Analysis
            </h2>
            <ol className="mb-3">
              <li className="mb-2">List what works well</li>
              <li className="mb-2">List what needs improvement</li>
              <li className="mb-2">Identify gaps (hardware, software, training, staffing)</li>
              <li className="mb-2">Prioritize needs (High/Medium/Low)</li>
              <li className="mb-2">Estimate costs for each item</li>
            </ol>
            <div className="alert alert-success border-0">
              <p className="mb-0"><strong>Tip:</strong> Use this analysis to guide your action plan.</p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>6</span>
              Develop an Action Plan & Timeline
            </h2>
            <p className="mb-3">Create a table with:</p>
            <ul className="mb-3">
              <li>Goal / Project</li>
              <li>Start Date</li>
              <li>End Date</li>
              <li>Responsible Person</li>
              <li>Budget Estimate</li>
              <li>Status (Planned, In Progress, Completed)</li>
            </ul>
            <div className="alert alert-info border-0">
              <p className="mb-0"><strong>Note:</strong> This ensures accountability and keeps projects on track.</p>
            </div>
          </div>

          {/* Step 7 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>7</span>
              Plan Budget & Funding
            </h2>
            <p className="mb-3">Include:</p>
            <ul className="mb-0">
              <li>Hardware refresh budget (next 3–5 years)</li>
              <li>Software/licensing budget</li>
              <li>Support/maintenance budget</li>
              <li>Funding sources (grants, internal, consortium)</li>
              <li>Contingency or risk plan</li>
            </ul>
          </div>

          {/* Step 8 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>8</span>
              Define Support & Maintenance Plan
            </h2>
            <p className="mb-3">Document:</p>
            <ul className="mb-3">
              <li>Preventive maintenance schedule</li>
              <li>Spare inventory & replacement strategy</li>
              <li>Incident response workflow</li>
              <li>Backup & disaster recovery plan</li>
              <li>Vendor/warranty tracking</li>
              <li>Accessibility/assistive technology support</li>
            </ul>
            <div className="alert alert-success border-0">
              <p className="mb-0"><strong>Tip:</strong> Establish a schedule and assign responsibility to ensure consistent maintenance.</p>
            </div>
          </div>

          {/* Step 9 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>9</span>
              Set Evaluation & Review Processes
            </h2>
            <ol className="mb-0">
              <li className="mb-2">Define metrics to track (uptime, ticket resolution, patron satisfaction)</li>
              <li className="mb-2">Set review schedule (annual, biannual)</li>
              <li className="mb-2">Assign responsible person(s)</li>
              <li className="mb-2">Create a process to update the workbook regularly</li>
            </ol>
          </div>

          {/* Step 10 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>10</span>
              Include Appendices
            </h2>
            <p className="mb-3">Attach supporting documents such as:</p>
            <ul className="mb-0">
              <li>Extended hardware inventory</li>
              <li>Network diagrams</li>
              <li>Policies & procedures</li>
              <li>Vendor contacts</li>
              <li>Additional notes</li>
            </ul>
          </div>

          {/* Tips for Success */}
          <div className="mb-5 p-4 bg-light rounded">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-star me-2"></i>Tips for Success
            </h2>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-success me-2 mt-1" style={{fontSize: '1.2rem'}}></i>
                  <p className="mb-0"><strong>Keep the workbook updated regularly</strong> to reflect current infrastructure and plans</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-success me-2 mt-1" style={{fontSize: '1.2rem'}}></i>
                  <p className="mb-0"><strong>Use tables, checklists, and input fields</strong> for clarity and ease of use</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-success me-2 mt-1" style={{fontSize: '1.2rem'}}></i>
                  <p className="mb-0"><strong>Tailor content</strong> to your library's size, staff, and technology needs</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-success me-2 mt-1" style={{fontSize: '1.2rem'}}></i>
                  <p className="mb-0"><strong>Ensure digital accessibility</strong> and usability if sharing online</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="p-4 bg-white shadow-sm rounded text-center">
            <h4 className="text-teal-mid fw-bold mb-3">Ready to Get Started?</h4>
            <p className="mb-4">This approach will help you create a structured, actionable, and easy-to-use Library Technology Workbook to manage your IT infrastructure effectively.</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <span className="badge bg-teal-light text-teal-dark" style={{fontSize: '0.9rem', padding: '8px 16px'}}>
                <i className="bi bi-clipboard-check me-2"></i>Organized Planning
              </span>
              <span className="badge bg-teal-light text-teal-dark" style={{fontSize: '0.9rem', padding: '8px 16px'}}>
                <i className="bi bi-graph-up me-2"></i>Track Progress
              </span>
              <span className="badge bg-teal-light text-teal-dark" style={{fontSize: '0.9rem', padding: '8px 16px'}}>
                <i className="bi bi-people me-2"></i>Team Accountability
              </span>
              <span className="badge bg-teal-light text-teal-dark" style={{fontSize: '0.9rem', padding: '8px 16px'}}>
                <i className="bi bi-arrow-repeat me-2"></i>Continuous Improvement
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WorkbookGuide