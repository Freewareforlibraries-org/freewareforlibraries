import React from 'react'

const LibraryDevChecklist = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">   
        <h1 className="text-5xl font-bold text-teal-700 text-center mb-4">
          Library Developer Checklist
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Actionable standards & best practices for library web development
        </p>

        {/* Main Content */}
        <div className="space-y-6">
          
          {/* Standards Baseline */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500">
            <div className="flex items-start mb-3">
              <span className="bg-teal-100 text-teal-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-teal-700 mb-2">Adopt a Standards Baseline</h3>
                <p className="text-gray-700 mb-3">Conform to WCAG 2.2 / 2.1 AA (or higher if required). Use the W3C docs as living reference.</p>
                <a href="https://www.w3.org/WAI/WCAG22/quickref/" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition text-sm">
                  W3C WCAG Guidelines →
                </a>
              </div>
            </div>
          </div>

          {/* Accessibility First */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-start mb-3">
              <span className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-700 mb-2">Accessibility First</h3>
                <p className="text-gray-700 mb-3">Build with accessibility as a foundation, not an afterthought.</p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-3">
                  <p className="font-semibold text-blue-900 mb-2">Core Requirements:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>✓ Semantic HTML with proper heading hierarchy</li>
                    <li>✓ ARIA only when necessary (semantic HTML preferred)</li>
                    <li>✓ Proper labels for all form elements</li>
                    <li>✓ Alt text for images, captions/transcripts for media</li>
                    <li>✓ Full keyboard navigation with visible focus states</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-3">
                  <p className="font-semibold text-amber-900 mb-2">Testing Strategy:</p>
                  <p className="text-sm text-gray-700">Test with NVDA/VoiceOver and keyboard-only navigation. Use automated scanning (axe, WAVE) but rely on manual checks for screen-reader and keyboard flows.</p>
                </div>
                <a href="https://www.ala.org/asgcla/resources/accessibilitytipsheets" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm">
                  ALA Accessibility Resources →
                </a>
              </div>
            </div>
          </div>

          {/* Mobile & Performance */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-start mb-3">
              <span className="bg-green-100 text-green-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-green-700 mb-2">Mobile Responsive & Performance</h3>
                <p className="text-gray-700 mb-3">Optimize for mobile devices and fast loading times.</p>
                <ul className="space-y-1 text-sm text-gray-700 mb-3">
                  <li>• Mobile-first CSS approach</li>
                  <li>• Responsive navigation patterns</li>
                  <li>• Critical CSS inlined</li>
                  <li>• Lazy load images and media</li>
                  <li>• Compress and optimize assets</li>
                  <li>• Use Lighthouse or WebPageTest for performance targets</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Search & Discovery */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-start mb-3">
              <span className="bg-purple-100 text-purple-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">4</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-purple-700 mb-2">Search & Discovery</h3>
                <p className="text-gray-700 mb-3">Make finding resources intuitive and effective.</p>
                <ul className="space-y-1 text-sm text-gray-700 mb-3">
                  <li>• Prominent catalog/search box</li>
                  <li>• Faceted search with filters</li>
                  <li>• Typeahead suggestions</li>
                  <li>• Clear results metadata (availability, format, location)</li>
                  <li>• Permalink to records</li>
                  <li>• Friendly error messages and no-results suggestions</li>
                </ul>
                <a href="https://www.bibliocommunsblog.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition text-sm">
                  BiblioCommons UX Patterns →
                </a>
              </div>
            </div>
          </div>

          {/* Metadata & Digital Collections */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
            <div className="flex items-start mb-3">
              <span className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">5</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-indigo-700 mb-2">Metadata & Digital Collections</h3>
                <p className="text-gray-700 mb-3">Use standard schemas and expose machine-readable metadata.</p>
                <ul className="space-y-1 text-sm text-gray-700 mb-3">
                  <li>• Standard metadata schemas (Dublin Core, MODS)</li>
                  <li>• schema.org structured data for SEO</li>
                  <li>• Expose machine-readable metadata (JSON-LD)</li>
                  <li>• Stable identifiers for items</li>
                  <li>• Documented APIs for integration</li>
                </ul>
                <a href="https://www.imls.gov/" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition text-sm">
                  IMLS Digital Collections Guidance →
                </a>
              </div>
            </div>
          </div>

          {/* Content & Language */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-pink-500">
            <div className="flex items-start mb-3">
              <span className="bg-pink-100 text-pink-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">6</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-pink-700 mb-2">Content & Language</h3>
                <p className="text-gray-700 mb-3">Write clear, accessible content for all users.</p>
                <ul className="space-y-1 text-sm text-gray-700 mb-3">
                  <li>• Use plain language</li>
                  <li>• Short, scannable pages with headings and lists</li>
                  <li>• Avoid internal jargon</li>
                  <li>• Maintain editorial style guide</li>
                  <li>• Clearly indicate service hours and contact info</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Document Accessibility */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
            <div className="flex items-start mb-3">
              <span className="bg-orange-100 text-orange-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">7</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-orange-700 mb-2">Document Accessibility</h3>
                <p className="text-gray-700 mb-3">Ensure PDFs and documents are fully accessible.</p>
                <ul className="space-y-1 text-sm text-gray-700 mb-3">
                  <li>• Proper tagging in PDFs</li>
                  <li>• Readable text (not scanned images)</li>
                  <li>• Bookmarks and headings in PDFs</li>
                  <li>• Accessible captions for multimedia</li>
                </ul>
                <a href="https://www.ala.org/" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition text-sm">
                  ALA Document Best Practices →
                </a>
              </div>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
            <div className="flex items-start mb-3">
              <span className="bg-red-100 text-red-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">8</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-red-700 mb-2">Privacy & Security</h3>
                <p className="text-gray-700 mb-3">Protect patron data and maintain secure systems.</p>
                <ul className="space-y-1 text-sm text-gray-700 mb-3">
                  <li>• Minimize PII collection</li>
                  <li>• Use HTTPS everywhere</li>
                  <li>• Secure forms with proper validation</li>
                  <li>• CSP headers configured</li>
                  <li>• Cookie/privacy notice</li>
                  <li>• Comply with local privacy laws</li>
                  <li>• Protect patron data in analytics and third-party widgets</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Governance & Workflows */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
            <div className="flex items-start mb-3">
              <span className="bg-yellow-100 text-yellow-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">9</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-yellow-700 mb-2">Governance & Workflows</h3>
                <p className="text-gray-700 mb-3">Establish clear policies and processes.</p>
                <ul className="space-y-1 text-sm text-gray-700 mb-3">
                  <li>• Documented accessibility policy</li>
                  <li>• Content lifecycle (who publishes/edits)</li>
                  <li>• QA checklist for releases</li>
                  <li>• Routine audits scheduled</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testing & Continuous QA */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-cyan-500">
            <div className="flex items-start mb-3">
              <span className="bg-cyan-100 text-cyan-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">10</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-cyan-700 mb-2">Testing & Continuous QA</h3>
                <p className="text-gray-700 mb-3">Implement comprehensive testing strategies.</p>
                <ul className="space-y-1 text-sm text-gray-700 mb-3">
                  <li>• Automated tests (axe-core, pa11y, Lighthouse)</li>
                  <li>• Unit/CI tests for critical flows</li>
                  <li>• Periodic manual audits</li>
                  <li>• User testing with patrons including those with disabilities</li>
                </ul>
                <a href="https://dequeuniversity.com/checklists/web/" target="_blank" rel="noopener noreferrer" className="inline-block bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition text-sm">
                  Deque Web Accessibility Checklist →
                </a>
              </div>
            </div>
          </div>

          {/* Developer Toolset */}
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg shadow-lg p-6 text-white mt-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Developer Toolset & Test Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">Standards & Guidelines</h3>
                <ul className="space-y-1 text-sm">
                  <li>• W3C / WCAG — Authoritative spec</li>
                  <li>• ALA — Library-centered guidance</li>
                  <li>• Deque Checklist — WCAG 2.2 AA audit template</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Automated Tools</h3>
                <ul className="space-y-1 text-sm">
                  <li>• axe-core (browser extension / node)</li>
                  <li>• Lighthouse</li>
                  <li>• WAVE</li>
                  <li>• pa11y</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-bold mb-2">Institutional Examples</h3>
              <p className="text-sm">Yale WCAG checklist, Lane CC WCAG checklist, NOAA libguides standards — practical templates for library implementations.</p>
            </div>
          </div>

          {/* Library-Specific Guidance */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h2 className="text-2xl font-bold text-teal-700 mb-4 flex items-center">
              Library-Specific Guidance & Examples
            </h2>
            <div className="space-y-3">
              <div className="border-l-4 border-teal-400 pl-4">
                <h3 className="font-bold text-gray-800 mb-1">BiblioCommons / EBSCO Blog Posts</h3>
                <p className="text-sm text-gray-600">Pragmatic UX tips specifically for library websites (homepage strategy, navigation, search prominence).</p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="font-bold text-gray-800 mb-1">Professional Literature</h3>
                <p className="text-sm text-gray-600">Recent reviews and books on library website trends summarize what modern public libraries implement (discovery, accessibility, mobile, content strategy).</p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mt-8 rounded">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> Start with items 1-2 (standards and accessibility) as your foundation, then gradually implement the remaining items. Regular audits and user testing should become part of your ongoing workflow.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LibraryDevChecklist