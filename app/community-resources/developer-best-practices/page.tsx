import React from 'react'

const LibraryDevChecklist = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center mb-5">Developer Best Practices</h1>
        
        {/* Main Content in Single Column */}
        <div className="mx-auto" style={{maxWidth: '900px'}}>
          
          {/* Standards Baseline */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              Standards & Best Practices
            </h2>
            
            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  1. Adopt a Standards Baseline
                </h5>
              </div>
              <p className="mb-3">Conform to WCAG 2.2 / 2.1 AA (or higher if required). Use the W3C docs as living reference.</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">WCAG 2.2</span>
                <span className="badge bg-teal-light text-teal-dark">Standards</span>
              </div>
              <a href="https://www.w3.org/WAI/WCAG22/quickref/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">W3C Guidelines</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">2. Accessibility First</h5>
              </div>
              <p className="mb-3">Semantic HTML, headings in order, ARIA only when necessary, proper labels for forms, alt text for images, captions/transcripts for audio/video, keyboard navigation, visible focus states.</p>
              <p className="mb-2"><strong>Testing:</strong></p>
              <ul className="mb-3">
                <li>Test with NVDA/VoiceOver and keyboard-only navigation</li>
                <li>Use automated scanning (axe, WAVE) but rely on manual checks for screen-reader/keyboard flows</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> Semantic HTML is preferred over ARIA. Only use ARIA attributes when native HTML elements can't achieve the desired accessibility.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Semantic HTML</span>
                <span className="badge bg-teal-light text-teal-dark">Keyboard Nav</span>
                <span className="badge bg-teal-light text-teal-dark">Screen Readers</span>
              </div>
              <a href="https://www.ala.org/advocacy/diversity/accessibility" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">ALA Accessibility Resources</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">3. Mobile Responsive & Performance</h5>
              </div>
              <p className="mb-3">Mobile-first CSS, responsive navigation, critical CSS inlined, lazy load media, compress assets, use Lighthouse or WebPageTest for performance targets.</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Mobile-First</span>
                <span className="badge bg-teal-light text-teal-dark">Performance</span>
                <span className="badge bg-teal-light text-teal-dark">Optimization</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">4. Search & Discovery</h5>
              </div>
              <p className="mb-3">Prominent catalog/search box, faceted search, typeahead suggestions, clear results metadata (availability, format, location), permalink to records, friendly error/no-results suggestions. Follow library UX patterns from successful systems.</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> Study successful library discovery systems like BiblioCommons for proven UX patterns and search behaviors.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Search UX</span>
                <span className="badge bg-teal-light text-teal-dark">Faceted Search</span>
                <span className="badge bg-teal-light text-teal-dark">Discovery</span>
              </div>
              <a href="https://blog.bibliocommons.com/blog" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">BiblioCommons Blog</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">5. Content & Language</h5>
              </div>
              <p className="mb-3">Use plain language, short scannable pages, headings and lists, avoid internal jargon, maintain editorial style guide, indicate service hours and contact clearly.</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Plain Language</span>
                <span className="badge bg-teal-light text-teal-dark">Scannable</span>
                <span className="badge bg-teal-light text-teal-dark">Style Guide</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">6. Document Accessibility</h5>
              </div>
              <p className="mb-3">Provide accessible PDFs/Word docs: proper tagging, readable text (not scanned images), bookmarks/headings in PDFs, and accessible captions for multimedia. Use ALA's best practices for library digital docs.</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> Never publish scanned PDFs without OCR. All text must be selectable and readable by screen readers.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">PDF Accessibility</span>
                <span className="badge bg-teal-light text-teal-dark">Document Tagging</span>
              </div>
              <a href="https://www.ala.org/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">ALA Best Practices</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">7. Privacy & Security</h5>
              </div>
              <p className="mb-3">Minimize PII, use HTTPS, secure forms, CSP headers, cookie/privacy notice, comply with local privacy laws, protect patron data in analytics and third-party widgets.</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">HTTPS</span>
                <span className="badge bg-teal-light text-teal-dark">Privacy</span>
                <span className="badge bg-teal-light text-teal-dark">Security</span>
                <span className="badge bg-teal-light text-teal-dark">Patron Data</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">8. Governance & Workflows</h5>
              </div>
              <p className="mb-3">Have a documented accessibility policy, content lifecycle (who publishes/edits), QA checklist for releases, and routine audits. IMLS/ALA resources discuss governance and public-access responsibilities.</p>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Policy</span>
                <span className="badge bg-teal-light text-teal-dark">QA Checklist</span>
                <span className="badge bg-teal-light text-teal-dark">Audits</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">9. Testing & Continuous QA</h5>
              </div>
              <p className="mb-3">Automated tests (axe core, pa11y, Lighthouse), unit/CI tests for critical flows, periodic manual audits, user testing with patrons including those with disabilities. Use published checklists (Deque, institutional examples).</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> Automated tools catch about 30-40% of accessibility issues. Manual testing with real assistive technology is essential.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Automated Testing</span>
                <span className="badge bg-teal-light text-teal-dark">Manual Audits</span>
                <span className="badge bg-teal-light text-teal-dark">User Testing</span>
              </div>
              <a href="https://dequeuniversity.com/checklists/web/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">Deque Checklist</a>
            </div>
          </div>

          {/* Developer Toolset */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-tools"></i> Developer Toolset & Test Resources
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Standards & Guidelines</h5>
              </div>
              <ul className="mb-3">
                <li><strong>WCAG / W3C:</strong> Authoritative spec and explanations</li>
                <li><strong>ALA:</strong> Accessibility & best practices for libraries — library-centered guidance and checklists for documents/media</li>
                <li><strong>Deque Web Accessibility Checklist:</strong> Downloadable WCAG 2.2 AA checklist for audits</li>
              </ul>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Standards</span>
                <span className="badge bg-teal-light text-teal-dark">Guidelines</span>
              </div>
              <a href="https://www.w3.org/WAI/WCAG22/quickref/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow me-2">W3C WCAG</a>
              <a href="https://www.ala.org/tools/standards-and-guidelines" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary hvr-grow me-2">ALA Resources</a>
              <a href="https://dequeuniversity.com/checklists/web/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary hvr-grow">Deque Checklist</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Automated Testing Tools</h5>
              </div>
              <p className="mb-3">Essential tools for automated accessibility and performance testing:</p>
              <ul className="mb-3">
                <li><strong>axe-core:</strong> Browser extension and Node.js library for accessibility testing</li>
                <li><strong>Lighthouse:</strong> Google's automated tool for performance, accessibility, and SEO</li>
                <li><strong>WAVE:</strong> Web accessibility evaluation tool with browser extension</li>
                <li><strong>pa11y:</strong> Command-line accessibility testing tool</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> Integrate automated tools into your CI/CD pipeline to catch accessibility issues before deployment.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Automated</span>
                <span className="badge bg-teal-light text-teal-dark">CI/CD</span>
                <span className="badge bg-teal-light text-teal-dark">Testing</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Institutional Checklists & Examples</h5>
              </div>
              <p className="mb-3">Real-world implementation examples from academic and public institutions:</p>
              <ul className="mb-3">
                <li><strong>Yale WCAG Checklist:</strong> Comprehensive accessibility checklist for web content</li>
                <li><strong>Lane CC WCAG Checklist:</strong> Practical implementation guide for community colleges</li>
                <li><strong>NOAA LibGuides Standards:</strong> Standards for creating accessible library guides</li>
              </ul>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Templates</span>
                <span className="badge bg-teal-light text-teal-dark">Examples</span>
                <span className="badge bg-teal-light text-teal-dark">Best Practices</span>
              </div>
            </div>
          </div>

          {/* Library-Specific Guidance */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-book"></i> Library-Specific Guidance and Examples
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">BiblioCommons / EBSCO Blog Posts</h5>
              </div>
              <p className="mb-3">Pragmatic UX tips specifically for library websites (homepage strategy, navigation, search prominence).</p>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> These blogs provide real-world examples of what works in library discovery interfaces and user behavior patterns.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Library UX</span>
                <span className="badge bg-teal-light text-teal-dark">Best Practices</span>
                <span className="badge bg-teal-light text-teal-dark">Case Studies</span>
              </div>
              <a href="https://blog.bibliocommons.com/blog" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-teal-mid text-white hvr-grow">BiblioCommons Blog</a>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Professional Literature</h5>
              </div>
              <p className="mb-3">Recent reviews & books on library website trends summarize what modern public libraries implement (discovery, accessibility, mobile, content strategy).</p>
              <p className="mb-2"><strong>Key Topics:</strong></p>
              <ul className="mb-3">
                <li>Discovery layer implementations</li>
                <li>Mobile-first design patterns</li>
                <li>Accessibility compliance strategies</li>
                <li>Content strategy and information architecture</li>
                <li>Patron-centered design approaches</li>
              </ul>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Research</span>
                <span className="badge bg-teal-light text-teal-dark">Trends</span>
                <span className="badge bg-teal-light text-teal-dark">Case Studies</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LibraryDevChecklist