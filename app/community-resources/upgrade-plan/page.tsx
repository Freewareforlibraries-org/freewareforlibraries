import React from 'react'

const TechUpgradePlan = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center mb-4">How to Create a Public Library Technology Upgrade Plan</h1>
        
        <div className="mx-auto mb-5" style={{maxWidth: '900px'}}>
          <p className="lead text-center mb-5">
            A Technology Upgrade Plan helps public libraries systematically update hardware, software, and infrastructure while minimizing disruptions and staying within budget. Follow this step-by-step guide to create an effective plan.
          </p>
        </div>

        {/* Main Content in Single Column */}
        <div className="mx-auto" style={{maxWidth: '900px'}}>
          
          {/* Step 1 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>1</span>
              Define the Purpose and Scope
            </h2>
            <div className="mb-3">
              <h6 className="fw-bold">Purpose</h6>
              <p className="mb-3">Identify why you need an upgrade plan (replace outdated hardware, improve services, enhance network performance, expand digital resources).</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Scope</h6>
              <p className="mb-3">Determine which branches, systems, or equipment the plan will cover (public PCs, staff computers, ILS, print management, WiFi, servers, network equipment).</p>
            </div>
            <div>
              <h6 className="fw-bold">Timeline</h6>
              <p className="mb-0">Set a planning horizon (e.g., 3–5 years) for budgeting and implementation.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>2</span>
              Inventory Existing Technology
            </h2>
            <p className="mb-3">Create a detailed inventory of all current systems and equipment:</p>
            
            <div className="mb-3">
              <h6 className="fw-bold text-teal-mid">Hardware</h6>
              <p className="mb-0">PCs, laptops, printers, scanners, servers, network devices, projectors</p>
            </div>
            
            <div className="mb-3">
              <h6 className="fw-bold text-teal-mid">Software</h6>
              <p className="mb-0">ILS, LMS, print management, PC reservation systems, productivity tools</p>
            </div>
            
            <div className="mb-3">
              <h6 className="fw-bold text-teal-mid">Network</h6>
              <p className="mb-0">ISP, bandwidth, wired/wireless coverage, switches, routers, WiFi access points</p>
            </div>
            
            <div className="mb-3">
              <h6 className="fw-bold text-teal-mid">Condition & Lifespan</h6>
              <p className="mb-0">Note age, warranty, and expected remaining lifespan</p>
            </div>

            <div className="alert alert-success border-0 mt-3">
              <p className="mb-0"><strong>💡 Tip:</strong> A spreadsheet or database works best to track inventory, including serial numbers, locations, and support contracts.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>3</span>
              Assess Needs and Gaps
            </h2>
            <ol className="mb-0">
              <li className="mb-3">
                <strong>Performance Assessment:</strong> Identify hardware or software that is slow, failing, or unsupported
              </li>
              <li className="mb-3">
                <strong>Service Needs:</strong> Determine what upgrades are required to support patrons and staff efficiently
              </li>
              <li className="mb-0">
                <strong>Prioritize Upgrades:</strong> Classify needs as High, Medium, or Low priority based on criticality, risk, and impact on library services
              </li>
            </ol>
          </div>

          {/* Step 4 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>4</span>
              Define Upgrade Goals
            </h2>
            <ul className="mb-3">
              <li className="mb-2">Improve system reliability and performance</li>
              <li className="mb-2">Replace end-of-life hardware and software</li>
              <li className="mb-2">Enhance public and staff technology experience</li>
              <li className="mb-2">Support emerging digital services (e.g., makerspaces, VR, online resources)</li>
              <li className="mb-2">Ensure accessibility and inclusivity for all patrons</li>
            </ul>
            <div className="alert alert-success border-0">
              <p className="mb-0"><strong>💡 Tip:</strong> Make goals SMART (Specific, Measurable, Achievable, Relevant, Time-bound).</p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>5</span>
              Develop an Action Plan
            </h2>
            <p className="mb-3">Create a detailed table with:</p>
            
            <div className="table-responsive mb-3">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Upgrade Project</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Responsible Staff</th>
                    <th>Estimated Cost</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Replace 20 public PCs</td>
                    <td>01/2026</td>
                    <td>03/2026</td>
                    <td>IT Manager</td>
                    <td>$15,000</td>
                    <td><span className="badge bg-info">Planned</span></td>
                  </tr>
                  <tr>
                    <td>Upgrade network switches</td>
                    <td>02/2026</td>
                    <td>04/2026</td>
                    <td>Network Specialist</td>
                    <td>$5,000</td>
                    <td><span className="badge bg-info">Planned</span></td>
                  </tr>
                  <tr>
                    <td>Update print management software</td>
                    <td>03/2026</td>
                    <td>05/2026</td>
                    <td>Systems Admin</td>
                    <td>$2,500</td>
                    <td><span className="badge bg-info">Planned</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="alert alert-success border-0">
              <p className="mb-0"><strong>💡 Tip:</strong> Assign responsibility and track status to ensure accountability.</p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>6</span>
              Budget and Funding
            </h2>
            <ul className="mb-0">
              <li className="mb-2"><strong>Hardware Budget:</strong> Include costs for PCs, laptops, printers, servers, and network devices</li>
              <li className="mb-2"><strong>Software Budget:</strong> Licenses, updates, and support contracts</li>
              <li className="mb-2"><strong>Support/Maintenance Budget:</strong> Outsourced IT support or in-house IT staffing</li>
              <li className="mb-2"><strong>Funding Sources:</strong> Library budget, grants, partnerships, or consortium contributions</li>
              <li className="mb-0"><strong>Contingency:</strong> Plan for unforeseen costs</li>
            </ul>
          </div>

          {/* Step 7 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>7</span>
              Risk Management
            </h2>
            <p className="mb-3">Identify potential risks and mitigation strategies:</p>
            <ul className="mb-0">
              <li className="mb-2">Delays in delivery or installation</li>
              <li className="mb-2">Budget shortfalls</li>
              <li className="mb-2">Staff training needs</li>
              <li className="mb-2">Compatibility issues with existing systems</li>
              <li className="mb-0">Security and data protection risks</li>
            </ul>
          </div>

          {/* Step 8 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>8</span>
              Implementation Schedule
            </h2>
            <ul className="mb-0">
              <li className="mb-2">Phase upgrades to minimize service disruption</li>
              <li className="mb-2">Schedule downtime or temporary closures if needed</li>
              <li className="mb-2">Communicate with staff and patrons about upcoming changes</li>
              <li className="mb-0">Coordinate with vendors for installation, configuration, and support</li>
            </ul>
          </div>

          {/* Step 9 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>9</span>
              Training and Support
            </h2>
            <ul className="mb-0">
              <li className="mb-2">Provide staff training on new hardware and software</li>
              <li className="mb-2">Document troubleshooting procedures</li>
              <li className="mb-0">Ensure ongoing technical support is available during and after implementation</li>
            </ul>
          </div>

          {/* Step 10 */}
          <div className="mb-5 p-4 bg-white shadow-sm rounded">
            <h2 className="text-teal-mid fw-bolder mb-4">
              <span className="badge bg-teal-mid text-white me-3" style={{fontSize: '1.2rem'}}>10</span>
              Evaluation and Review
            </h2>
            <ul className="mb-0">
              <li className="mb-2">Establish KPIs to measure success (uptime, ticket resolution, patron satisfaction, network speed)</li>
              <li className="mb-2">Schedule regular review meetings</li>
              <li className="mb-0">Update the upgrade plan as needed based on feedback, technology changes, or new funding opportunities</li>
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
                  <p className="mb-0"><strong>Keep the plan realistic and budget-conscious</strong> to ensure successful implementation</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-success me-2 mt-1" style={{fontSize: '1.2rem'}}></i>
                  <p className="mb-0"><strong>Use tables and charts</strong> to track inventory, costs, and timelines effectively</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-success me-2 mt-1" style={{fontSize: '1.2rem'}}></i>
                  <p className="mb-0"><strong>Make the plan accessible</strong> to library staff and decision-makers</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-success me-2 mt-1" style={{fontSize: '1.2rem'}}></i>
                  <p className="mb-0"><strong>Regularly update the plan</strong> to reflect completed upgrades and future needs</p>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-success me-2 mt-1" style={{fontSize: '1.2rem'}}></i>
                  <p className="mb-0"><strong>Incorporate feedback from both staff and patrons</strong> to improve service quality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="p-4 bg-white shadow-sm rounded text-center">
            <h4 className="text-teal-mid fw-bold mb-3">Ready to Build Your Upgrade Plan?</h4>
            <p className="mb-4">This structured approach ensures your public library's technology is up-to-date, reliable, and ready to support staff and patron needs for years to come.</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <span className="badge bg-teal-light text-teal-dark" style={{fontSize: '0.9rem', padding: '8px 16px'}}>
                <i className="bi bi-gear me-2"></i>Systematic Updates
              </span>
              <span className="badge bg-teal-light text-teal-dark" style={{fontSize: '0.9rem', padding: '8px 16px'}}>
                <i className="bi bi-cash-stack me-2"></i>Budget Control
              </span>
              <span className="badge bg-teal-light text-teal-dark" style={{fontSize: '0.9rem', padding: '8px 16px'}}>
                <i className="bi bi-shield-check me-2"></i>Minimal Disruption
              </span>
              <span className="badge bg-teal-light text-teal-dark" style={{fontSize: '0.9rem', padding: '8px 16px'}}>
                <i className="bi bi-arrow-up-circle me-2"></i>Improved Services
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TechUpgradePlan