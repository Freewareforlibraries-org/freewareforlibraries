import React from 'react'

const AccessibilityGuidelines = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center mb-5">Web Accessibility Guidelines</h1>
        
        {/* Main Content in Single Column */}
        <div className="mx-auto" style={{maxWidth: '900px'}}>
          
          {/* Standards & Key Considerations */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-shield-check"></i> Standards & Key Considerations
            </h2>
            
            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Core Standards to Follow</h5>
              </div>
              <p className="mb-3">The Web Content Accessibility Guidelines (WCAG) are the foundational technical standard for web accessibility (versions 2.0, 2.1, 2.2).</p>
              <p className="mb-3">In the U.S., public libraries (as public entities) must consider accessibility requirements under law (e.g., Americans with Disabilities Act Title II, and sometimes Rehabilitation Act of 1973 Section 508 for electronic information).</p>
              <p className="mb-3">The <strong>"POUR" principles</strong> summarise WCAG:</p>
              <ul className="mb-3">
                <li><strong>Perceivable:</strong> Information and UI components must be presentable to users</li>
                <li><strong>Operable:</strong> UI components and navigation must be operable</li>
                <li><strong>Understandable:</strong> Information and operation must be understandable</li>
                <li><strong>Robust:</strong> Content must be robust enough for assistive technologies</li>
              </ul>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">WCAG 2.2</span>
                <span className="badge bg-teal-light text-teal-dark">ADA Title II</span>
                <span className="badge bg-teal-light text-teal-dark">Section 508</span>
              </div>
              <a href="https://www.w3.org/WAI/WCAG22/quickref/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow me-2">W3C WCAG Quick Reference</a>
              <a href="https://libguides.ala.org/accessibility" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary hvr-grow">ALA LibGuides</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Why It Matters for Library Websites</h5>
              </div>
              <p className="mb-3">A library's website is often the primary access point for digital collections, reference services, catalogues, events, and outreach. If it isn't accessible, many patrons with disabilities may be excluded.</p>
              <p className="mb-3">Accessibility also overlaps with general usability: accessible sites are often better for mobile users, low-vision users, older users, etc.</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>For Library Procurement:</strong> When buying digital systems, e-resources, vendor services, the library should require accessibility compliance (so that all patrons, including those with disabilities, have equal access) per associations' policies.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Digital Inclusion</span>
                <span className="badge bg-teal-light text-teal-dark">Usability</span>
                <span className="badge bg-teal-light text-teal-dark">Procurement</span>
              </div>
            </div>
          </div>

          {/* Library-Specific Best Practices */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-book"></i> Library-Specific Best Practices
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Key Guidance</h5>
              </div>
              <ul className="mb-3">
                <li className="mb-2"><strong>Use clear, descriptive alt text for images:</strong> Avoid decorative images with missing alt tags. All images must have alternative text to ensure all users can understand the content on your page.</li>
                <li className="mb-2"><strong>Avoid relying on color alone:</strong> Do not rely on color alone to convey meaning; not all users experience color in the same way.</li>
                <li className="mb-2"><strong>Ensure heading structure is logical:</strong> Use H1 then H2/H3 etc. Content should be written in plain language—avoid library jargon where possible.</li>
                <li className="mb-2"><strong>Make links descriptive:</strong> Use "View catalog of new books" rather than "Click here." This helps screen-reader users.</li>
                <li className="mb-2"><strong>Accessible documents:</strong> PDFs and Word files must be accessible (searchable text, tagged structure, readable by screen readers). A document that has images of scanned text is not accessible.</li>
                <li className="mb-2"><strong>Procurement requirements:</strong> Include accessibility requirements in licensing and vendor contracts. The Library Accessibility Alliance (LAA) provides audit services for library electronic resources.</li>
                <li className="mb-2"><strong>Maintain an accessibility policy:</strong> Conduct regular audits of your website content, system interfaces, and digital collections.</li>
              </ul>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Alt Text</span>
                <span className="badge bg-teal-light text-teal-dark">Plain Language</span>
                <span className="badge bg-teal-light text-teal-dark">Document Standards</span>
              </div>
              <a href="https://www.libraryaccessibility.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Library Accessibility Alliance</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  Simple Checklist for Public Library Websites <span className="badge bg-success ms-2">Copy & Use</span>
                </h5>
              </div>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> Use this checklist for routine website audits and when launching new features.</p>
              </div>
              <ul className="mb-3">
                <li>Provide a "Skip to main content" link at the top of each page</li>
                <li>Use semantic HTML elements (header, nav, main, footer) and landmarks to aid assistive technologies</li>
                <li>Ensure all interactive controls (buttons, links, forms) are keyboard operable and focusable, with visible focus indicators</li>
                <li>Ensure colour contrast meets at least WCAG AA (e.g., for normal text a contrast ratio of 4.5:1 or better)</li>
                <li>Ensure images have meaningful alt text or are marked decorative</li>
                <li>Ensure links have descriptive text; avoid generic phrases like "click here"</li>
                <li>Use heading structure properly (only one H1, etc) so screen-readers can navigate</li>
                <li>For tables: provide clear row/column headers, avoid complex nested tables unless absolutely necessary</li>
                <li>Provide transcripts and captions for video and audio content</li>
                <li>Ensure that PDF or other downloadable documents are accessible: tagged, searchable, use headings, designate document language</li>
                <li>On mobile devices/responsive layouts: ensure no horizontal scrolling, controls large enough to tap, layouts should reflow</li>
                <li>For any custom library systems (catalogue, digital collection viewer): ensure that the interface is accessible (keyboard, screen-reader, focus states, labels)</li>
                <li>Include accessibility in vendor requirements: e-resource/licensing contracts should state compliance with WCAG/Section 508</li>
                <li>Conduct periodic audits: use automated tools and manual checks (including with screen-reader users or users with disabilities)</li>
              </ul>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Checklist</span>
                <span className="badge bg-teal-light text-teal-dark">Best Practices</span>
                <span className="badge bg-teal-light text-teal-dark">QA Testing</span>
              </div>
            </div>
          </div>

          {/* Tools & Resources */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-tools"></i> Tools & Resources
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  Recommended Testing Tools <span className="badge bg-success ms-2">Free & Low-Cost</span>
                </h5>
              </div>
              <p className="mb-3">Useful accessibility tools and resources for library website developers:</p>
              <ul className="mb-3">
                <li><strong>WAVE Web Accessibility Evaluation Tool:</strong> From WebAIM; good for quick page-level checks of accessibility issues</li>
                <li><strong>axe (by Deque):</strong> Browser extension / IDE tool / integration into CI-CD; good for developers to integrate accessibility checks into code pipelines</li>
                <li><strong>Accessibility Insights:</strong> Microsoft's tool; supports automated + manual evaluation, helps with guided manual testing</li>
                <li><strong>Colour Contrast Checkers:</strong> E.g., WebAIM Colour Contrast Checker: useful for designers to ensure text/background contrast meets standards</li>
                <li><strong>Assistive Technology Testing:</strong> Use a screen-reader (e.g., NVDA or VoiceOver) to test real user experience. NVDA is a free option for developers</li>
                <li><strong>For Documents (PDF/Word):</strong> Use accessibility checking tools (e.g., Adobe Acrobat's Accessibility Checker) and follow document-specific checklists</li>
                <li><strong>Full Site Crawling Tools:</strong> For larger websites, tools that can crawl many pages for accessibility issues</li>
              </ul>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Automated Testing</span>
                <span className="badge bg-teal-light text-teal-dark">Manual Testing</span>
                <span className="badge bg-teal-light text-teal-dark">Free Tools</span>
              </div>
              <a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow me-2">WAVE Tool</a>
              <a href="https://www.deque.com/axe/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary hvr-grow me-2">axe by Deque</a>
              <a href="https://accessibilityinsights.io/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary hvr-grow">Accessibility Insights</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Library-Specific Resources</h5>
              </div>
              <ul className="mb-3">
                <li><strong>Library Accessibility Alliance (LAA):</strong> Focuses on accessible e-resources, audits for libraries, vendor/institution resource</li>
                <li><strong>ALA Library Service to Persons with Disabilities:</strong> Web accessibility guidelines including policy, laws/guidelines, purchasing of accessible electronic resources</li>
                <li><strong>University Library Accessibility Checklists:</strong> Covers web writing, mobile design, alt text, links, video accessibility</li>
                <li><strong>"Accessible Libraries" Checklist (Canada):</strong> Covers broader accessibility (digital + physical) and useful library-culture guidance</li>
              </ul>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Library-Focused</span>
                <span className="badge bg-teal-light text-teal-dark">Checklists</span>
                <span className="badge bg-teal-light text-teal-dark">Policy Guidance</span>
              </div>
              <a href="https://www.libraryaccessibility.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow me-2">LAA Resources</a>
              <a href="https://libguides.ala.org/accessibility" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary hvr-grow">ALA Accessibility</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  Key Caveats When Using Tools <span className="badge bg-warning text-dark ms-2">Important</span>
                </h5>
              </div>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-2"><strong>Critical to Know:</strong></p>
                <ul className="mb-0">
                  <li>Automated tools are helpful but they catch only a subset of accessibility issues (some estimate ~30-40%)</li>
                  <li>Manual testing (keyboard only, screen-reader) is essential</li>
                  <li>Tools will produce false positives and cannot fully verify usability, meaning human judgement is required</li>
                  <li>For full compliance and inclusive user experience, integrate accessibility testing early (shift-left) and often in development, not just at the end</li>
                </ul>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Manual Testing Required</span>
                <span className="badge bg-teal-light text-teal-dark">Human Judgement</span>
                <span className="badge bg-teal-light text-teal-dark">Continuous Testing</span>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-link-45deg"></i> Additional Resources
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Essential Reading & References</h5>
              </div>
              <ul className="mb-3">
                <li><strong>W3C Web Accessibility Initiative (WAI):</strong> Comprehensive guidelines, tutorials, and resources</li>
                <li><strong>WebAIM:</strong> Practical articles, contrast checker, and training materials</li>
                <li><strong>ALA Accessibility Resources:</strong> Library-specific guidance on serving patrons with disabilities</li>
                <li><strong>Section 508:</strong> U.S. federal standards for electronic and information technology</li>
                <li><strong>VPAT (Voluntary Product Accessibility Template):</strong> Used for documenting product accessibility conformance</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> Bookmark the W3C Quick Reference guide and WebAIM's resources for ongoing reference during development and testing.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Reference Materials</span>
                <span className="badge bg-teal-light text-teal-dark">Guidelines</span>
                <span className="badge bg-teal-light text-teal-dark">Standards</span>
              </div>
              <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow me-2">W3C WAI</a>
              <a href="https://webaim.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary hvr-grow me-2">WebAIM</a>
              <a href="https://www.section508.gov/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary hvr-grow">Section 508</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AccessibilityGuidelines