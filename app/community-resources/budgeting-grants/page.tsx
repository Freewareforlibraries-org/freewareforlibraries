import React from 'react'

const LibraryGrantsFunding = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center mb-5">Grants & Funding</h1>

        {/* Main Content in Single Column */}
        <div className="mx-auto" style={{maxWidth: '900px'}}>
          
          {/* Federal & National Grants */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-flag"></i> Federal & National Grant Programs
            </h2>
            
            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  LSTA Grants <span className="badge bg-warning text-dark ms-2">Major Funding</span>
                </h5>
                <p className="text-muted small mb-2">Library Services and Technology Act</p>
              </div>
              <p className="mb-3">Federal funds distributed through the Institute of Museum and Library Services (IMLS) to state library agencies, which then award grants to individual libraries for technology, digital resources, and infrastructure projects.</p>
              <p className="mb-2"><strong>What It Covers:</strong></p>
              <ul className="mb-3">
                <li>Technology upgrades and infrastructure improvements</li>
                <li>Digital resources and collections development</li>
                <li>Website development and digital access initiatives</li>
                <li>Equipment purchases and technology training</li>
              </ul>
              <p className="mb-2"><strong>Eligibility:</strong> Public libraries, academic libraries, research libraries, school libraries (varies by state)</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Key Note:</strong> If your website build includes technology upgrades or digital access improvements, you may qualify for LSTA funding. Contact your state library agency for application details and deadlines.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Federal Funding</span>
                <span className="badge bg-teal-light text-teal-dark">Technology</span>
                <span className="badge bg-teal-light text-teal-dark">Infrastructure</span>
              </div>
              <a href="https://www.imls.gov/grants/available/grants-state-library-administrative-agencies" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow me-2">IMLS Website</a>
             </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">ALA Grants & Awards</h5>
                <p className="text-muted small mb-2">American Library Association Grant Programs</p>
              </div>
              <p className="mb-3">The ALA maintains a comprehensive list of grants available to libraries covering programs, research, technology initiatives, and special projects.</p>
              <p className="mb-2"><strong>What It Covers:</strong></p>
              <ul className="mb-3">
                <li>Technology and innovation projects</li>
                <li>Website and digital infrastructure upgrades</li>
                <li>Special programming and community initiatives</li>
                <li>Research and professional development</li>
              </ul>
              <p className="mb-2"><strong>Typical Award Amounts:</strong> Varies widely by grant program ($500 - $10,000+)</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Key Note:</strong> Excellent resource to scan for website and IT upgrade opportunities. Carefully review eligibility requirements and match requirements for each grant program.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Multiple Programs</span>
                <span className="badge bg-teal-light text-teal-dark">Technology</span>
                <span className="badge bg-teal-light text-teal-dark">Innovation</span>
              </div>
              <a href="https://www.ala.org/awards" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Browse ALA Grants</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  Digital Equity Act Funds <span className="badge bg-success ms-2">Equity Focus</span>
                </h5>
                <p className="text-muted small mb-2">NTIA Digital Equity Grants</p>
              </div>
              <p className="mb-3">Federal funding through the National Telecommunications and Information Administration (NTIA) with states offering sub-grants to libraries for digital access and equity initiatives.</p>
              <p className="mb-2"><strong>What It Covers:</strong></p>
              <ul className="mb-3">
                <li>Digital access and inclusion initiatives</li>
                <li>ADA compliance and accessibility improvements</li>
                <li>Mobile-responsive website development</li>
                <li>Broadband access and technology infrastructure</li>
                <li>Digital literacy and skills training programs</li>
              </ul>
              <p className="mb-2"><strong>Focus Areas:</strong> Underserved communities, accessibility, digital divide reduction</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Key Note:</strong> If your website build has equity, access, or inclusion goals (such as ADA compliance, mobile access, multilingual support), emphasizing this angle significantly strengthens your application.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Digital Equity</span>
                <span className="badge bg-teal-light text-teal-dark">Accessibility</span>
                <span className="badge bg-teal-light text-teal-dark">Inclusion</span>
              </div>
              <a href="https://www.internetforall.gov/program/state-digital-equity-capacity-grant-program" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow me-2">NTIA Digital Equity</a>
              </div>
          </div>

          {/* State-Level Technology Grants */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-geo-alt"></i> State-Level Technology Grants
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  State Library Agency Technology Grants <span className="badge bg-warning text-dark ms-2">Highly Relevant</span>
                </h5>
                <p className="text-muted small mb-2">State-Specific Grant Programs</p>
              </div>
              <p className="mb-3">Many states offer dedicated technology and website grants specifically for public libraries. These programs are often directly administered by state library agencies.</p>
              <p className="mb-2"><strong>Example State Programs:</strong></p>
              <ul className="mb-3">
                <li><strong>Oklahoma:</strong> "Websites for Public Libraries" project - dedicated website development grants</li>
                <li><strong>Kentucky:</strong> "Website Development and Technology Grant" program for public libraries</li>
                <li><strong>Indiana:</strong> ARPA technology grants for public libraries to purchase technology equipment</li>
                <li><strong>Arkansas:</strong> Check Arkansas State Library for current technology grant opportunities</li>
              </ul>
              <p className="mb-2"><strong>What They Cover:</strong></p>
              <ul className="mb-3">
                <li>Website design, development, and hosting</li>
                <li>Technology equipment purchases (servers, computers, networking)</li>
                <li>Digital infrastructure upgrades</li>
                <li>Software licenses and technology training</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Key Note:</strong> These are very relevant for website and technology projects. Check your state library agency website regularly for calls for proposals. Many states announce annual or biennial technology grant cycles.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">State Funding</span>
                <span className="badge bg-teal-light text-teal-dark">Website Development</span>
                <span className="badge bg-teal-light text-teal-dark">Technology Equipment</span>
              </div>
             </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">ARPA/Emergency Funding for Technology</h5>
                <p className="text-muted small mb-2">American Rescue Plan Act & Emergency Grants</p>
              </div>
              <p className="mb-3">Various states have allocated ARPA (American Rescue Plan Act) funds and other emergency funding specifically for library technology improvements and infrastructure.</p>
              <p className="mb-2"><strong>What It Covers:</strong></p>
              <ul className="mb-3">
                <li>Technology equipment and infrastructure upgrades necessitated by pandemic</li>
                <li>Digital service expansion and remote access improvements</li>
                <li>Virtual programming technology and platforms</li>
                <li>WiFi and broadband infrastructure</li>
              </ul>
              <p className="mb-2"><strong>Availability:</strong> Limited time opportunities - check state library for current offerings</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Key Note:</strong> While ARPA funding windows may be closing, similar emergency or special allocation funds may become available. Stay connected with your state library agency for announcements.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Emergency Funding</span>
                <span className="badge bg-teal-light text-teal-dark">Technology Upgrades</span>
                <span className="badge bg-teal-light text-teal-dark">Time-Limited</span>
              </div>
              <a href="https://www.library.arkansas.gov/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Check State Library</a>
            </div>
          </div>

          {/* Private & Foundation Grants */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-briefcase"></i> Private & Foundation Grants
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Technology-Focused Foundation Grants</h5>
                <p className="text-muted small mb-2">Private Sector Funding Opportunities</p>
              </div>
              <p className="mb-3">Private foundations and corporations offer grants specifically for library technology, digital literacy, and innovation projects.</p>
              <p className="mb-2"><strong>Common Sources:</strong></p>
              <ul className="mb-3">
                <li><strong>IMLS Discretionary Grants:</strong> National Leadership Grants for Libraries for innovative projects</li>
                <li><strong>Google.org:</strong> Periodic library technology initiatives</li>
                <li><strong>Bill & Melinda Gates Foundation:</strong> Digital equity and access programs</li>
                <li><strong>Knight Foundation:</strong> Innovation and community engagement through technology</li>
                <li><strong>Local Community Foundations:</strong> Check regional foundations in your area</li>
              </ul>
              <p className="mb-2"><strong>Focus Areas:</strong> Innovation, digital literacy, community impact, technology access</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Key Note:</strong> Foundation grants often require demonstration of innovation and community impact. Emphasize how your technology project will transform library services and benefit your community.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Foundation Funding</span>
                <span className="badge bg-teal-light text-teal-dark">Innovation</span>
                <span className="badge bg-teal-light text-teal-dark">Community Impact</span>
              </div>
              <a href="https://www.imls.gov/grants" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow me-2">IMLS Grants</a>
              </div>
          </div>

          {/* Grant Writing Tips */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-pencil-square"></i> Successful Grant Application Strategies
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Tips for Technology Grant Applications</h5>
              
              <div className="mb-3">
                <h6 className="fw-bold text-teal-mid">1. Align with Digital Equity & Inclusion</h6>
                <p className="mb-2">Strengthen applications by emphasizing:</p>
                <ul className="mb-3">
                  <li>ADA compliance and accessibility features</li>
                  <li>Mobile-responsive design for broader access</li>
                  <li>Multilingual support for diverse communities</li>
                  <li>Service to underserved or rural populations</li>
                </ul>
              </div>

              <div className="mb-3">
                <h6 className="fw-bold text-teal-mid">2. Document Community Need</h6>
                <p className="mb-2">Support your application with:</p>
                <ul className="mb-3">
                  <li>User surveys and community feedback</li>
                  <li>Usage statistics and analytics</li>
                  <li>Demographics showing technology gaps</li>
                  <li>Letters of support from community partners</li>
                </ul>
              </div>

              <div className="mb-3">
                <h6 className="fw-bold text-teal-mid">3. Plan for Sustainability</h6>
                <p className="mb-2">Address long-term viability:</p>
                <ul className="mb-3">
                  <li>Hosting and maintenance plans</li>
                  <li>Staff training and capacity building</li>
                  <li>Budget for ongoing costs after grant period</li>
                  <li>Partnerships for continued support</li>
                </ul>
              </div>

              <div className="mb-3">
                <h6 className="fw-bold text-teal-mid">4. Demonstrate Measurable Outcomes</h6>
                <p className="mb-2">Define clear success metrics:</p>
                <ul className="mb-3">
                  <li>Website traffic and usage goals</li>
                  <li>Number of users served or reached</li>
                  <li>Digital literacy improvements</li>
                  <li>Community engagement increases</li>
                </ul>
              </div>

              <div className="mb-0">
                <h6 className="fw-bold text-teal-mid">5. Build Relationships Early</h6>
                <p className="mb-2">Before applying:</p>
                <ul className="mb-0">
                  <li>Contact your state library consultant</li>
                  <li>Attend grant information sessions</li>
                  <li>Review funded project examples</li>
                  <li>Start planning well before deadlines</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Steps */}
          <div className="mb-5">
            <div className="alert alert-primary border-0 shadow-sm">
              <h4 className="alert-heading text-teal-mid fw-bold">
                <i className="bi bi-list-check"></i> Getting Started with Grant Funding
              </h4>
              <hr />
              <p className="mb-2"><strong>Step 1:</strong> Contact your state library agency to learn about current technology grant opportunities and application cycles.</p>
              <p className="mb-2"><strong>Step 2:</strong> Subscribe to grant alert services from ALA, IMLS, and your state library to receive notifications about new funding opportunities.</p>
              <p className="mb-2"><strong>Step 3:</strong> Review recently funded projects to understand what makes successful applications in your state and region.</p>
              <p className="mb-2"><strong>Step 4:</strong> Document your current technology needs and community impact data before application deadlines arrive.</p>
              <p className="mb-2"><strong>Step 5:</strong> Consider joining a grant writing workshop or webinar (many offered free through WebJunction and state libraries).</p>
              <p className="mb-0"><strong>Step 6:</strong> Build relationships with other libraries that have successfully secured technology grants to learn from their experiences.</p>
            </div>
          </div>

          {/* Quick Reference */}
          <div className="mb-5">
            <div className="card border-teal-mid">
              <div className="card-header bg-teal-mid text-white">
                <h5 className="mb-0"><i className="bi bi-bookmark"></i> Quick Reference: Key Contacts</h5>
              </div>
              <div className="card-body">
                <p className="mb-2"><strong>Arkansas State Library:</strong> Your primary resource for state and federal grant information</p>
                <p className="mb-2"><strong>IMLS:</strong> Federal grants and LSTA information</p>
                <p className="mb-2"><strong>ALA Office for Library Advocacy:</strong> Grant resources and advocacy support</p>
                <p className="mb-0"><strong>State Library Consultant:</strong> Personal guidance on grant opportunities specific to your library</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LibraryGrantsFunding