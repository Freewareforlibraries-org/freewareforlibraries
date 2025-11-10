import React from 'react'

const LibraryInfrastructure = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center mb-5">IT Infrastructure Resources</h1>
        
        {/* Main Content in Single Column */}
        <div className="mx-auto" style={{maxWidth: '900px'}}>
          
          {/* Overview & Planning */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-diagram-3"></i> Infrastructure Overview & Planning
            </h2>
            
            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  Technological Infrastructure for Libraries <span className="badge bg-warning text-dark ms-2">Comprehensive</span>
                </h5>
                <p className="text-muted small mb-2">By Murtaza Ashiq et al - ResearchGate</p>
              </div>
              <p className="mb-3">A comprehensive chapter providing a broad look at all aspects of library technology infrastructure, from hardware to future trends.</p>
              <p className="mb-2"><strong>What's Covered:</strong></p>
              <ul className="mb-3">
                <li>Hardware infrastructure (computers, servers, peripherals)</li>
                <li>Network infrastructure and topology design</li>
                <li>Audiovisual equipment and digital media systems</li>
                <li>Assistive technology and accessibility features</li>
                <li>Security, backup, and disaster recovery planning</li>
                <li>Emerging technologies (AI, IoT, voice recognition)</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> Pay special attention to sections on integration (making disparate systems work together) and future trends to ensure your infrastructure is future-proof.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Comprehensive Guide</span>
                <span className="badge bg-teal-light text-teal-dark">Hardware</span>
                <span className="badge bg-teal-light text-teal-dark">Networks</span>
                <span className="badge bg-teal-light text-teal-dark">Future Tech</span>
              </div>
              <a href="https://www.researchgate.net/publication/378888488_Technological_Infrastructure_for_Libraries" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Read on ResearchGate</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Building an IT Infrastructure to Support Your Library</h5>
                <p className="text-muted small mb-2">Extreme Networks Blog</p>
              </div>
              <p className="mb-3">Practical blog focusing on modern library connectivity needs including high-density WiFi, multilingual systems, and bridging the digital divide.</p>
              <p className="mb-2"><strong>Key Topics:</strong></p>
              <ul className="mb-3">
                <li>High-density WiFi planning for patron and staff devices</li>
                <li>Multilingual system support</li>
                <li>Device connectivity strategies</li>
                <li>Addressing the digital divide through infrastructure</li>
                <li>Community outreach through technology</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> Use this resource when planning network upgrades. Consider how many devices need simultaneous connections and plan WiFi capacity accordingly.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">WiFi Planning</span>
                <span className="badge bg-teal-light text-teal-dark">Connectivity</span>
                <span className="badge bg-teal-light text-teal-dark">Digital Equity</span>
              </div>
              <a href="https://www.extremenetworks.com/blog/building-an-it-infrastructure-to-support-your-library/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Extreme Networks</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Technical Infrastructure in Libraries: To Tweak or Transform?</h5>
                <p className="text-muted small mb-2">Library Technology Guides</p>
              </div>
              <p className="mb-3">Reflective article addressing how many libraries have "assemblages" of tech components that aren't well integrated, highlighting the need for aligning infrastructure with library goals.</p>
              <p className="mb-2"><strong>Why It Matters:</strong></p>
              <ul className="mb-3">
                <li>Identifies common integration problems in library tech stacks</li>
                <li>Emphasizes strategic alignment between technology and mission</li>
                <li>Helps determine when to incrementally improve vs. transform systems</li>
                <li>Provides framework for infrastructure decision-making</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> Before making infrastructure decisions, ask: "Does this align with our library's strategic goals?" Avoid tech for tech's sake.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Strategic Planning</span>
                <span className="badge bg-teal-light text-teal-dark">Integration</span>
                <span className="badge bg-teal-light text-teal-dark">Decision Framework</span>
              </div>
              <a href="https://librarytechnology.org/document/22621" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Read Article</a>
            </div>
          </div>

          {/* Standards & Best Practices */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-award"></i> Standards & Best Practices
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  IT Infrastructure Library (ITIL) <span className="badge bg-warning text-dark ms-2">Industry Standard</span>
                </h5>
                <p className="text-muted small mb-2">Multiple Resources Available</p>
              </div>
              <p className="mb-3">ITIL is a set of best practices for IT service management that can be adapted for library environments. It provides frameworks for managing technology services effectively.</p>
              <p className="mb-2"><strong>Key ITIL Concepts for Libraries:</strong></p>
              <ul className="mb-3">
                <li>Service delivery and support processes</li>
                <li>Incident and problem management</li>
                <li>Change management and configuration control</li>
                <li>Asset and capacity management</li>
                <li>Continuous improvement practices</li>
              </ul>
              <p className="mb-2"><strong>Why This Matters:</strong></p>
              <p className="mb-3">Technology infrastructure isn't just "buy the right router and servers" — you also need processes for change management, incident response, and service delivery to manage infrastructure effectively.</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> Consider how your library aligns with service management best practices. Have you defined who handles network outages? How are backups tested? How do staff report issues? Using ITIL (or an adapted version) helps formalize these processes.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Best Practices</span>
                <span className="badge bg-teal-light text-teal-dark">Service Management</span>
                <span className="badge bg-teal-light text-teal-dark">Processes</span>
              </div>
              <a href="https://www.ibm.com/topics/it-infrastructure-library" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow me-2">IBM ITIL Overview</a>
              </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">ITIL Implementation Research</h5>
                <p className="text-muted small mb-2">Academic Studies on Success Factors</p>
              </div>
              <p className="mb-3">Research examining the advantages, challenges, and success factors for implementing ITIL in organizations, including critical success factors like senior management support and clear metrics.</p>
              <p className="mb-2"><strong>Critical Success Factors:</strong></p>
              <ul className="mb-3">
                <li>Senior management support and buy-in</li>
                <li>Clear metrics and performance indicators</li>
                <li>Staff training and change management</li>
                <li>Incremental implementation approach</li>
                <li>Regular review and adaptation</li>
              </ul>
              <div className="alert alert-info border-0 mb-3">
                <p className="mb-0"><strong>Research Insight:</strong> Organizations that implement ITIL incrementally and with strong management support see better adoption rates and outcomes than those attempting full-scale immediate deployment.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Implementation</span>
                <span className="badge bg-teal-light text-teal-dark">Change Management</span>
                <span className="badge bg-teal-light text-teal-dark">Success Factors</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Comparing IT Frameworks</h5>
                <p className="text-muted small mb-2">ITIL vs. CMMI, COBIT, ISO Standards</p>
              </div>
              <p className="mb-3">Research comparing multiple IT management frameworks (CMMI, COBIT, ISO) in relation to ITIL, helping you choose the right framework or combination for your library.</p>
              <p className="mb-2"><strong>Framework Options:</strong></p>
              <ul className="mb-3">
                <li><strong>ITIL:</strong> Best for IT service management and operations</li>
                <li><strong>COBIT:</strong> Focuses on IT governance and alignment with business goals</li>
                <li><strong>ISO 20000:</strong> International standard for IT service management</li>
                <li><strong>CMMI:</strong> Process improvement and capability maturity</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> Most libraries benefit from adopting select ITIL practices rather than full certification. Focus on incident management, change control, and asset management first.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Frameworks</span>
                <span className="badge bg-teal-light text-teal-dark">Governance</span>
                <span className="badge bg-teal-light text-teal-dark">Standards</span>
              </div>
            </div>
          </div>

          {/* Digital Access & Equity */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-universal-access"></i> Digital Access, Equity & User Services
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  ALA: Access to Digital Resources and Services <span className="badge bg-warning text-dark ms-2">Essential Policy</span>
                </h5>
                <p className="text-muted small mb-2">American Library Association</p>
              </div>
              <p className="mb-3">ALA guidance on how libraries must provide digital access (computers, internet, creation tools) in ways that respect equity, privacy, and intellectual freedom.</p>
              <p className="mb-2"><strong>Core Principles:</strong></p>
              <ul className="mb-3">
                <li>Equitable access to digital resources for all patrons</li>
                <li>Privacy protection in digital services</li>
                <li>Intellectual freedom in online spaces</li>
                <li>Accessibility for users with disabilities</li>
                <li>Digital literacy support and training</li>
              </ul>
              <p className="mb-2"><strong>Why This Matters:</strong></p>
              <p className="mb-3">Infrastructure isn't just "internal tech" — it's how patrons and staff actually use it. Ensuring equity, accessibility, and good user experience is fundamental to library service.</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> When designing or upgrading infrastructure, include user-centric requirements: reliable WiFi everywhere, accessible devices/assistive tech, privacy/security policies, and tools for patron creation and learning.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Digital Equity</span>
                <span className="badge bg-teal-light text-teal-dark">Accessibility</span>
                <span className="badge bg-teal-light text-teal-dark">User Services</span>
              </div>
              <a href="https://www.ala.org/advocacy/intfreedom/librarybill/interpretations/digital" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">View ALA Guidelines</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Tech Tools: Critical for Access to Library Resources</h5>
                <p className="text-muted small mb-2">Library Journal</p>
              </div>
              <p className="mb-3">Article emphasizing how the right digital tools (interfaces, search systems, devices) make a significant difference in patron access and satisfaction.</p>
              <p className="mb-2"><strong>Critical Access Components:</strong></p>
              <ul className="mb-3">
                <li>Intuitive user interfaces and discovery tools</li>
                <li>Search systems that actually help patrons find resources</li>
                <li>Reliable devices and equipment</li>
                <li>Mobile-friendly access to library services</li>
                <li>Assistive technology for diverse needs</li>
              </ul>
              <div className="alert alert-info border-0 mb-3">
                <p className="mb-0"><strong>Key Insight:</strong> The best infrastructure in the world doesn't help patrons if they can't easily use it. User experience should drive your technology decisions.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">User Experience</span>
                <span className="badge bg-teal-light text-teal-dark">Discovery Tools</span>
                <span className="badge bg-teal-light text-teal-dark">Access</span>
              </div>
            </div>
          </div>

          {/* Library Technology Systems */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-server"></i> Library-Specific Technology Systems
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  Library Technology Guides <span className="badge bg-success ms-2">Free Resource Hub</span>
                </h5>
                <p className="text-muted small mb-2">Comprehensive Library Technology Resource</p>
              </div>
              <p className="mb-3">A comprehensive resource hub featuring databases, documents, news, and analysis for library technology systems including ILS, discovery layers, and network infrastructure. Excellent for benchmarking and research.</p>
              <p className="mb-2"><strong>What You'll Find:</strong></p>
              <ul className="mb-3">
                <li>Detailed profiles of library systems and vendors</li>
                <li>Case studies from libraries of various sizes</li>
                <li>Industry news and technology trends</li>
                <li>Comparative data on system implementations</li>
                <li>Product directories and reviews</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> Check LTG for case studies of libraries similar to yours in size and type. Use their system profiles to compare hardware/network specifications, software stacks, and user access metrics for benchmarking.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Benchmarking</span>
                <span className="badge bg-teal-light text-teal-dark">Case Studies</span>
                <span className="badge bg-teal-light text-teal-dark">System Comparisons</span>
              </div>
              <a href="https://librarytechnology.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Library Technology Guides</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Design Priorities in Digital Gateways</h5>
                <p className="text-muted small mb-2">Academic Library Research - arXiv</p>
              </div>
              <p className="mb-3">Research examining authentication, usability, and multilingual support in library login portals and digital gateways — useful if your infrastructure includes patron portals.</p>
              <p className="mb-2"><strong>Key Design Considerations:</strong></p>
              <ul className="mb-3">
                <li>Authentication methods that balance security and convenience</li>
                <li>Usability principles for patron-facing systems</li>
                <li>Multilingual support and internationalization</li>
                <li>Single sign-on (SSO) integration</li>
                <li>Mobile-responsive gateway design</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> If you're implementing or redesigning a patron portal, prioritize simple authentication flows and mobile usability. Patrons abandon complex login processes.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Authentication</span>
                <span className="badge bg-teal-light text-teal-dark">Portals</span>
                <span className="badge bg-teal-light text-teal-dark">Usability</span>
              </div>
            </div>
          </div>

          {/* Emerging Technologies */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-lightning"></i> Emerging Technologies & Future Trends
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Emerging Tech in Libraries</h5>
                <p className="text-muted small mb-2">AI, IoT, and Future Infrastructure</p>
              </div>
              <p className="mb-3">Multiple resources covering emerging technologies that will shape library infrastructure, including artificial intelligence, Internet of Things, voice recognition, and big data analytics.</p>
              <p className="mb-2"><strong>Technologies to Watch:</strong></p>
              <ul className="mb-3">
                <li><strong>Artificial Intelligence:</strong> Chatbots, recommendation engines, automated cataloging</li>
                <li><strong>Internet of Things (IoT):</strong> Smart building systems, occupancy sensors, environmental monitoring</li>
                <li><strong>Voice Recognition:</strong> Voice-activated search, accessibility features</li>
                <li><strong>Big Data Analytics:</strong> Usage patterns, collection analysis, space utilization</li>
                <li><strong>Cloud Computing:</strong> Scalable infrastructure, reduced on-premises hardware</li>
              </ul>
              <p className="mb-2"><strong>Why This Matters:</strong></p>
              <p className="mb-3">If you only plan for "today's" tech, you risk being behind in a few years. Knowing trends lets you build a more adaptive infrastructure.</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> In your infrastructure plan, include a "phase 2/3" section for emerging tech. Prepare wiring/power for future IoT sensors, plan user training for new digital tools, and consider modular upgrades for your network.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">AI/ML</span>
                <span className="badge bg-teal-light text-teal-dark">IoT</span>
                <span className="badge bg-teal-light text-teal-dark">Future Planning</span>
                <span className="badge bg-teal-light text-teal-dark">Cloud</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Digital Divide & Connectivity</h5>
                <p className="text-muted small mb-2">Addressing Equity Through Infrastructure</p>
              </div>
              <p className="mb-3">Resources addressing the digital divide and broader connectivity issues that will become increasingly important as libraries serve as community technology hubs.</p>
              <p className="mb-2"><strong>Infrastructure Considerations:</strong></p>
              <ul className="mb-3">
                <li>Hotspot lending programs and infrastructure</li>
                <li>Outdoor WiFi coverage for community access</li>
                <li>Device lending and charging stations</li>
                <li>Community technology training spaces</li>
                <li>Partnerships with ISPs and connectivity providers</li>
              </ul>
              <div className="alert alert-info border-0 mb-3">
                <p className="mb-0"><strong>Community Impact:</strong> Libraries are increasingly recognized as critical digital equity providers. Plan infrastructure that extends beyond your walls to serve the broader community.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Digital Equity</span>
                <span className="badge bg-teal-light text-teal-dark">Community Access</span>
                <span className="badge bg-teal-light text-teal-dark">Connectivity</span>
              </div>
            </div>
          </div>

          {/* Implementation Guide */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-list-check"></i> Suggested Implementation Steps
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Your Infrastructure Planning Roadmap</h5>
                <p className="text-muted small mb-2">Six Steps to Better Library IT Infrastructure</p>
              </div>
              
              <div className="mb-4">
                <h6 className="fw-bold mb-2">1. Audit Current Infrastructure</h6>
                <p className="mb-2">Map out your existing technology landscape:</p>
                <ul className="mb-0">
                  <li>Hardware inventory (computers, network gear, access points, servers)</li>
                  <li>Software systems and licenses</li>
                  <li>Network coverage and capacity</li>
                  <li>Backup and disaster recovery systems</li>
                  <li>Documentation of current configurations</li>
                </ul>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-2">2. Define Requirements</h6>
                <p className="mb-2">Based on your user population (patrons and staff), determine what services you need:</p>
                <ul className="mb-0">
                  <li>Public WiFi capacity and coverage requirements</li>
                  <li>Staff devices and productivity tools</li>
                  <li>Digital media creation and consumption tools</li>
                  <li>Assistive technology and accessibility features</li>
                  <li>Patron-facing services and discovery tools</li>
                </ul>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-2">3. Choose Best Practices Framework</h6>
                <p className="mb-2">Adopt service management processes to operate infrastructure effectively:</p>
                <ul className="mb-0">
                  <li>Use frameworks like ITIL (or adapted versions) for service management</li>
                  <li>Define incident handling and escalation procedures</li>
                  <li>Establish change control processes</li>
                  <li>Implement asset management and documentation</li>
                  <li>Create service level agreements (SLAs) for key systems</li>
                </ul>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-2">4. Equity & Accessibility Check</h6>
                <p className="mb-2">Ensure your infrastructure serves all users:</p>
                <ul className="mb-0">
                  <li>Digital access for all users, including assistive technology</li>
                  <li>Privacy and security policies protecting patron data</li>
                  <li>Training programs for staff and patrons</li>
                  <li>Multilingual support where needed</li>
                  <li>Physical accessibility of technology spaces</li>
                </ul>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-2">5. Plan for Growth & Future Tech</h6>
                <p className="mb-2">Build adaptability into your infrastructure:</p>
                <ul className="mb-0">
                  <li>Scalable network infrastructure with room for expansion</li>
                  <li>Planning for emerging technologies (AI, IoT, cloud services)</li>
                  <li>Budget allocation for ongoing maintenance and upgrades</li>
                  <li>Timeline with phased implementation approach</li>
                  <li>Modular design allowing component upgrades</li>
                </ul>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-2">6. Research & Benchmark Peer Libraries</h6>
                <p className="mb-2">Learn from similar institutions:</p>
                <ul className="mb-0">
                  <li>Use Library Technology Guides for case studies</li>
                  <li>Benchmark against libraries of similar size and budget</li>
                  <li>Compare infrastructure specifications and outcomes</li>
                  <li>Network with peer IT professionals</li>
                  <li>Attend library technology conferences and webinars</li>
                </ul>
              </div>

              <div className="alert alert-info border-0 mt-4 mb-0">
                <p className="mb-0"><strong>Pro Tip:</strong> Don't try to implement everything at once. Start with a thorough audit, define clear requirements, then implement in phases. Quick wins (like improved WiFi) build momentum for larger projects.</p>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mb-5">
            <div className="p-4 bg-light rounded text-center">
              <h4 className="text-teal-mid fw-bold mb-3">Building Your Infrastructure Knowledge</h4>
              <p className="mb-3">Infrastructure planning combines:</p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2"><strong>Technical knowledge</strong> (hardware, networks, systems)</li>
                <li className="mb-2"><strong>Service management</strong> (processes, standards, governance)</li>
                <li className="mb-2"><strong>User focus</strong> (accessibility, equity, experience)</li>
                <li className="mb-2"><strong>Future planning</strong> (trends, scalability, adaptability)</li>
              </ul>
              <p className="text-muted small mb-0">Use these resources together to build infrastructure that serves your community's needs today while preparing for tomorrow's opportunities.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LibraryInfrastructure