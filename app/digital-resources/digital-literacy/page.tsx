import React from 'react'

const DigitalLiteracyPlatforms = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center">Digital Literacy & Online Learning</h1>
        <p className="fs-5 text-teal-mid text-center mb-3">
          Free and affordable platforms for teaching digital skills and online learning
        </p>
        <div className="alert alert-info border-0 shadow-sm mx-auto" style={{maxWidth: '800px'}} role="alert">
          <p className="mb-0 text-center">
            These platforms help libraries provide digital literacy training, professional development, 
            and continuing education to patrons—from basic computer skills to advanced technical training!
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
                  <th>Recommended Platform</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>True Beginners / Very Basic Skills</td>
                  <td>DigitalLearn.org, GCFLearnFree.org</td>
                  <td>Mouse/keyboard, email, internet basics</td>
                </tr>
                <tr>
                  <td>Skills Assessment & Training</td>
                  <td>Northstar Digital Literacy</td>
                  <td>Measuring skill levels with certificates</td>
                </tr>
                <tr>
                  <td>Professional Development</td>
                  <td>LinkedIn Learning, Gale Presents: Udemy</td>
                  <td>Job skills, software training, career growth</td>
                </tr>
                <tr>
                  <td>Continuing Education & Enrichment</td>
                  <td>Universal Class</td>
                  <td>Broad variety with certificates/CEUs</td>
                </tr>
                <tr>
                  <td>Test Prep & Career Readiness</td>
                  <td>LearningExpress Library</td>
                  <td>GED, licensing exams, job transitions</td>
                </tr>
                <tr>
                  <td>Live Tutoring & Job Support</td>
                  <td>Brainfuse HelpNow/JobNow</td>
                  <td>Guided assistance for learners</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Foundational Digital Skills */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-laptop"></i> Foundational Digital Skills
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">DigitalLearn.org</h5>
                  <p className="text-muted small mb-2">Public Library Association Platform</p>
                  <p className="card-text">Free self-paced online modules in English & Spanish covering mouse/keyboard, email, search engines, and online safety. Excellent for true beginners.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Free (optional branded site)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">English</span>
                    <span className="badge bg-teal-light text-teal-dark">Spanish</span>
                    <span className="badge bg-teal-light text-teal-dark">Self-paced</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.digitallearn.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Recommended</span>
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">GCFLearnFree.org</h5>
                  <p className="text-muted small mb-2">Free Online Tutorials</p>
                  <p className="card-text">Free tutorials covering computer basics, Microsoft Office, Google tools, reading, math, and more. Perfect for self-paced learning at very basic levels.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Free</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Self-paced</span>
                    <span className="badge bg-teal-light text-teal-dark">Free</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://edu.gcfglobal.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
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
                  <h5 className="card-title text-teal-mid fw-bold">Northstar Digital Literacy</h5>
                  <p className="text-muted small mb-2">Skills Assessment & Training</p>
                  <p className="card-text">Online assessments and tutorials covering basic computer/Internet skills, software (Word, Excel, Google Docs), and tech-in-daily-life topics. Libraries can issue certificates.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Varies by library</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Assessment</span>
                    <span className="badge bg-teal-light text-teal-dark">Certificates</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.digitalliteracyassessment.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Development & Job Skills */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-briefcase"></i> Professional Development & Job Skills
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Gale Presents: Udemy</h5>
                  <p className="text-muted small mb-2">20,000+ On-Demand Video Courses</p>
                  <p className="card-text">Library-friendly version of Udemy Business with thousands of courses in business, tech, design, and personal development. Strong for job skills and software training.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Library subscription</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Video</span>
                    <span className="badge bg-teal-light text-teal-dark">Tech</span>
                    <span className="badge bg-teal-light text-teal-dark">Business</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.gale.com/databases/gale-presents-udemy" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Gale</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">LinkedIn Learning</h5>
                  <p className="text-muted small mb-2">Professional & Technical Training</p>
                  <p className="card-text">Large catalog of professional courses in software, business, and creativity. Formerly Lynda.com. Great for up-skilling and job-seeking patrons.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Library subscription</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Professional</span>
                    <span className="badge bg-teal-light text-teal-dark">Software</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.linkedin.com/learning/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
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
                  <h5 className="card-title text-teal-mid fw-bold">Microsoft Learn</h5>
                  <p className="text-muted small mb-2">Free Microsoft Training</p>
                  <p className="card-text">Free training for Microsoft products and technologies from basic to advanced. Good for tech-skills training paths and specific software learning.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Free</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Microsoft</span>
                    <span className="badge bg-teal-light text-teal-dark">Free</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://learn.microsoft.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Continuing Education & Enrichment */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-book"></i> Continuing Education & Enrichment
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Universal Class</h5>
                  <p className="text-muted small mb-2">500+ Self-Paced Courses</p>
                  <p className="card-text">Hundreds of self-paced online courses across professional/business, personal enrichment, and continuing education. Patrons can earn certificates and CEUs.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Library subscription</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Certificates</span>
                    <span className="badge bg-teal-light text-teal-dark">CEUs</span>
                    <span className="badge bg-teal-light text-teal-dark">Self-paced</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.universalclass.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                   
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
                  <h5 className="card-title text-teal-mid fw-bold">LearningExpress Library</h5>
                  <p className="text-muted small mb-2">Test Prep & Career Skills</p>
                  <p className="card-text">Interactive tutorials and practice tests for academic & licensing exams, job & career success skills, computer/internet basics. Good for GED/HSE prep and career transitions.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Library subscription</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Test Prep</span>
                    <span className="badge bg-teal-light text-teal-dark">Career</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.learningexpresshub.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                  
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
                  <h5 className="card-title text-teal-mid fw-bold">Mango Languages</h5>
                  <p className="text-muted small mb-2">Language Learning Platform</p>
                  <p className="card-text">Language-learning platform offered via libraries. Supports learning digital/online tools and languages, especially useful for immigrants accessing online services.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Library subscription</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Languages</span>
                    <span className="badge bg-teal-light text-teal-dark">ESL</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://mangolanguages.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support & Tutoring */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-people"></i> Live Support & Tutoring
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Brainfuse HelpNow/JobNow</h5>
                  <p className="text-muted small mb-2">Live Tutoring & Job Support</p>
                  <p className="card-text">Online tutoring, homework help, job-search support, test prep and skills development. Provides live or scheduled tutor support for patrons who need guided help.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Library subscription</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Live Tutoring</span>
                    <span className="badge bg-teal-light text-teal-dark">Job Help</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.brainfuse.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Early Learning */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-star"></i> Early Learning (Children)
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-info text-dark">Ages 2-8+</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">ABCmouse</h5>
                  <p className="text-muted small mb-2">Early Childhood Learning</p>
                  <p className="card-text">Interactive books, games and activities for early learners. Builds digital literacy and comfort with devices from a young age. Available through many public libraries.</p>
                  <p className="text-muted small mb-2"><strong>Cost:</strong> Library subscription</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Children</span>
                    <span className="badge bg-teal-light text-teal-dark">Interactive</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.abcmouse.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Considerations */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-lightbulb"></i> Beyond Platforms: Digital Inclusion Programs
          </h2>
          <div className="alert alert-success border-0 shadow-sm">
            <h5 className="alert-heading">Complementary Services to Consider</h5>
            <p>Many libraries are expanding digital inclusion with programs that go beyond online platforms:</p>
            <ul className="mb-0">
              <li><strong>Device Lending:</strong> Laptops, tablets, and Chromebooks for checkout</li>
              <li><strong>Hotspot Lending:</strong> WiFi hotspots for internet access at home</li>
              <li><strong>Drop-in Computer Assistance:</strong> Staff-led help sessions</li>
              <li><strong>Workshops:</strong> In-person classes on AI, online safety, and emerging tech</li>
              <li><strong>Community Outreach:</strong> Programs targeting underserved populations</li>
              <li><strong>AI Literacy Programs:</strong> "AI 101" sessions teaching responsible AI use</li>
            </ul>
          </div>
        </div>

        {/* Implementation Tips */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-gear"></i> Implementation Tips
          </h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">
                    <i className="bi bi-check-circle"></i> Success Factors
                  </h5>
                  <ul className="mb-0">
                    <li>Start with free platforms for beginners (DigitalLearn, GCFLearnFree)</li>
                    <li>Provide staff orientation sessions for patrons</li>
                    <li>Market actively through website, social media, and in-library signage</li>
                    <li>Combine with in-person support for better uptake</li>
                    <li>Track usage and gather patron feedback</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-teal-mid fw-bold">
                    <i className="bi bi-exclamation-triangle"></i> Common Challenges
                  </h5>
                  <ul className="mb-0">
                    <li>Low awareness among patrons who need it most</li>
                    <li>Platforms may require baseline digital comfort</li>
                    <li>Self-paced learning needs motivation and support</li>
                    <li>Budget constraints for subscription platforms</li>
                    <li>Need for ongoing staff training and promotion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DigitalLiteracyPlatforms