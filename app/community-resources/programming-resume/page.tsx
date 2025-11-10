import React from 'react'

const ResumeBuildingInLibraries = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center mb-5">Resume-Building Programs in Libraries</h1>
        
        {/* Main Content in Single Column */}
        <div className="mx-auto" style={{maxWidth: '900px'}}>
          
          {/* Why Resume-Building in Libraries */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-question-circle"></i> Why Resume-Building Programs Are Valuable
            </h2>
            
            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <p className="mb-3">A well-crafted resume is often the first impression a job-seeker makes with an employer; helping patrons with this provides tangible, career-relevant support.</p>
              <p className="mb-2"><strong>Key Benefits:</strong></p>
              <ul className="mb-3">
                <li>Libraries are trusted community hubs with access to computers, internet, printers, and staff/volunteers — making them ideal places for resume help</li>
                <li>Many patrons lack access to professional resume writing help — offering it at the library reduces equity gaps</li>
                <li>Resume-building sessions serve as gateway programs into other library services (job search help, digital literacy, interview practice)</li>
                <li>Increases library engagement and demonstrates tangible community impact</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Resource Example:</strong> Libraries like the Chicago Public Library highlight online resume tools available via library subscriptions, such as "Got Resume Builder" and "Brainfuse" with live review services.</p>
              </div>
            </div>
          </div>

          {/* Program Ideas & Formats */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-file-earmark-text"></i> Sample Program Ideas & Formats
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  1. One-Time "Resume Essentials" Workshop <span className="badge bg-success ms-2">Beginner-Friendly</span>
                </h5>
              </div>
              <p className="mb-3"><strong>Duration:</strong> 1 to 1.5 hours</p>
              <p className="mb-3"><strong>Audience:</strong> Adults or teens who are new to resume writing</p>
              <p className="mb-2"><strong>Format:</strong></p>
              <ul className="mb-3">
                <li>Presentation + hands-on time</li>
                <li>Cover: resume formats (chronological vs functional)</li>
                <li>What to include/omit</li>
                <li>Tailoring to job postings</li>
                <li>Common mistakes to avoid</li>
              </ul>
              <p className="mb-2"><strong>Follow-up:</strong></p>
              <ul className="mb-3">
                <li>Offer drop-in time for individual help</li>
                <li>"Book a computer" sessions for resume revision</li>
              </ul>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Adults</span>
                <span className="badge bg-teal-light text-teal-dark">Teens</span>
                <span className="badge bg-teal-light text-teal-dark">Low Commitment</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  2. Multi-Week Resume Boot-Camp Series
                </h5>
              </div>
              <p className="mb-3"><strong>Duration:</strong> 3-4 weeks, one session per week (60-90 minutes each)</p>
              <p className="mb-3"><strong>Audience:</strong> Job-seekers (including career-changers) who want structured support</p>
              <p className="mb-2"><strong>Example Session Breakdown:</strong></p>
              <ul className="mb-3">
                <li><strong>Week 1:</strong> Understanding resume basics & gathering your "story" (skills, work history, achievements)</li>
                <li><strong>Week 2:</strong> Building the document – formatting, key sections, keywords, tailoring to job posting</li>
                <li><strong>Week 3:</strong> In-lab time – participants bring draft, get peer/volunteer feedback, refine</li>
                <li><strong>Week 4:</strong> Finalize plus cover letter basics + next steps (job application platforms, follow-up)</li>
              </ul>
              <p className="mb-2"><strong>Showcase:</strong></p>
              <ul className="mb-3">
                <li>Participants bring a draft for mock review</li>
                <li>Tailor resume to a specific job posting</li>
              </ul>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Structured</span>
                <span className="badge bg-teal-light text-teal-dark">Career-Changers</span>
                <span className="badge bg-teal-light text-teal-dark">Comprehensive</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  3. Drop-In "Resume Review Lab"
                </h5>
              </div>
              <p className="mb-3"><strong>Duration:</strong> 1-2 hours, scheduled weekly or biweekly</p>
              <p className="mb-3"><strong>Audience:</strong> Mixed ages; patrons can arrive with their own draft or start fresh</p>
              <p className="mb-2"><strong>Format:</strong></p>
              <ul className="mb-3">
                <li>Set up stations with different focus areas</li>
                <li>Station 1: "Start from scratch" with templates</li>
                <li>Station 2: "Volunteer review" for feedback on existing resumes</li>
                <li>Station 3: Digital tools (resume builder software)</li>
              </ul>
              <p className="mb-2"><strong>Benefits:</strong></p>
              <ul className="mb-3">
                <li>Lower commitment, flexible access</li>
                <li>Meets individual needs rather than cohort</li>
                <li>Personalized support</li>
              </ul>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Flexible</span>
                <span className="badge bg-teal-light text-teal-dark">All Ages</span>
                <span className="badge bg-teal-light text-teal-dark">Personalized</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  4. Special Event / "Resume & Career Kick-Off" <span className="badge bg-warning text-dark ms-2">High Impact</span>
                </h5>
              </div>
              <p className="mb-3"><strong>Audience:</strong> Adults or teens, especially around major job-fair season or local workforce initiatives</p>
              <p className="mb-2"><strong>Format (Half-Day Event):</strong></p>
              <ul className="mb-3">
                <li>Short presentation on writing an effective resume</li>
                <li>Breakout hands-on workshop sessions</li>
                <li>"Live reviewers" (local HR professionals) on site for one-on-one feedback</li>
                <li>Networking opportunities with local employers</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> WebJunction provides guidance on recruiting volunteers and HR professionals for resume workshop events like this.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Special Event</span>
                <span className="badge bg-teal-light text-teal-dark">Professional Reviewers</span>
                <span className="badge bg-teal-light text-teal-dark">High Energy</span>
              </div>
            </div>
          </div>

          {/* Resources & Tools */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-tools"></i> Useful Resources & Tools for Libraries
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <p className="mb-4">Specific resources you can use or reference in your resume-building programs:</p>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">ALA's Résumés Page</h5>
                <p className="mb-2">Offers guidance for libraries on resume help: what to include, formatting, best practices, and how to structure resume assistance programs.</p>
                <div className="d-flex gap-2 flex-wrap">
                  <span className="badge bg-teal-light text-teal-dark">Free</span>
                  <span className="badge bg-teal-light text-teal-dark">Library-Specific</span>
                  <span className="badge bg-teal-light text-teal-dark">Best Practices</span>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">WebJunction's "Holding a Resume Workshop" Guide</h5>
                <p className="mb-2">A practical guide for libraries on how to plan a resume workshop event, recruit volunteers, and set up effective programming.</p>
                <div className="d-flex gap-2 flex-wrap">
                  <span className="badge bg-teal-light text-teal-dark">Planning Guide</span>
                  <span className="badge bg-teal-light text-teal-dark">Volunteer Recruitment</span>
                  <span className="badge bg-teal-light text-teal-dark">Step-by-Step</span>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">Library Web Pages & Support Services</h5>
                <p className="mb-2">Examples from Tulsa City-County Library and Denver Public Library that provide templates, online courses, and resume builder tools. Tulsa library lists templates in MS Word with suggestions for different industries.</p>
                <div className="d-flex gap-2 flex-wrap">
                  <span className="badge bg-teal-light text-teal-dark">Templates</span>
                  <span className="badge bg-teal-light text-teal-dark">Real Examples</span>
                  <span className="badge bg-teal-light text-teal-dark">Multiple Formats</span>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">Online Resume Builder Tools via Library Subscription</h5>
                <p className="mb-2">Chicago Public Library lists "Got Resume Builder" and "Brainfuse" with live review services. These subscription tools provide step-by-step guidance and professional review options.</p>
                <div className="d-flex gap-2 flex-wrap">
                  <span className="badge bg-teal-light text-teal-dark">Interactive</span>
                  <span className="badge bg-teal-light text-teal-dark">Live Review</span>
                  <span className="badge bg-teal-light text-teal-dark">Professional Tools</span>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">CareerOneStop / U.S. Dept of Labor "Get More Resume Help"</h5>
                <p className="mb-2">External resource recommended for patrons; library partnerships often reference it. Provides federal government-backed resources and tools for job seekers.</p>
                <div className="d-flex gap-2 flex-wrap">
                  <span className="badge bg-teal-light text-teal-dark">Free</span>
                  <span className="badge bg-teal-light text-teal-dark">Government Resource</span>
                  <span className="badge bg-teal-light text-teal-dark">Comprehensive</span>
                </div>
              </div>
            </div>
          </div>

          {/* Planning Your Program */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-clipboard-check"></i> Planning Your Resume-Building Program
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 1: Assess Community Needs</h5>
              <ul className="mb-3">
                <li>Who are your target job-seekers? (recent graduates, career-changers, re-entering workforce)</li>
                <li>What industries are prominent in your area?</li>
                <li>What level of resume expertise do patrons typically have?</li>
                <li>Are there seasonal patterns (graduation, hiring seasons)?</li>
              </ul>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 2: Choose Your Format</h5>
              <ul className="mb-3">
                <li>One-time workshop vs multi-week series vs drop-in lab</li>
                <li>Group instruction vs individual consultations</li>
                <li>General resume basics vs industry-specific guidance</li>
                <li>Consider timing that works for job-seekers (evenings, weekends)</li>
              </ul>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 3: Gather Resources & Tools</h5>
              <ul className="mb-3">
                <li>Compile resume templates in various formats (Word, PDF, Google Docs)</li>
                <li>Identify online tools available through library subscriptions</li>
                <li>Create handouts on resume best practices</li>
                <li>Gather sample resumes for different industries and experience levels</li>
                <li>Set up access to job posting sites for tailoring practice</li>
              </ul>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 4: Recruit & Train Staff/Volunteers</h5>
              <ul className="mb-3">
                <li>Recruit volunteers with HR, recruiting, or hiring experience</li>
                <li>Train staff on resume fundamentals and common issues</li>
                <li>Prepare reviewers to give constructive, supportive feedback</li>
                <li>Create guidelines for consistent advice across all helpers</li>
                <li>Consider partnering with local workforce development agencies</li>
              </ul>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 5: Set Up Technology & Space</h5>
              <ul className="mb-3">
                <li>Ensure adequate computers with word processing software</li>
                <li>Test printer access and paper supply</li>
                <li>Set up private or semi-private areas for one-on-one consultations</li>
                <li>Create stations for different activities (drafting, reviewing, printing)</li>
              </ul>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 6: Promote Your Program</h5>
              <ul className="mb-3">
                <li>Partner with workforce development centers and unemployment offices</li>
                <li>Post on job search websites and community boards</li>
                <li>Connect with local colleges and career centers</li>
                <li>Use social media, library website, and in-library signage</li>
                <li>Highlight that services are free and no appointment needed (if applicable)</li>
                <li>Time promotions around job fair seasons or graduation</li>
              </ul>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 7: Launch, Evaluate & Expand</h5>
              <ul className="mb-3">
                <li>Start your program and collect participant feedback</li>
                <li>Track attendance and types of assistance requested</li>
                <li>Document success stories (job offers received, interviews secured)</li>
                <li>Adjust format or timing based on participation patterns</li>
                <li>Consider expanding to related services (cover letters, LinkedIn profiles, interview prep)</li>
              </ul>
            </div>
          </div>

          {/* Best Practices */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-star"></i> Tips & Best Practices
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <ul className="mb-0">
                <li className="mb-3"><strong>Start with Templates:</strong> Provide professional templates to help patrons get started quickly</li>
                <li className="mb-3"><strong>Teach Tailoring:</strong> Emphasize adapting resumes to specific job postings rather than using one generic version</li>
                <li className="mb-3"><strong>Focus on Action Verbs:</strong> Help patrons describe accomplishments with strong, specific language</li>
                <li className="mb-3"><strong>Address Common Mistakes:</strong> Proactively cover typos, formatting issues, and inappropriate content</li>
                <li className="mb-3"><strong>Be Constructive:</strong> Train reviewers to give positive, encouraging feedback along with suggestions</li>
                <li className="mb-3"><strong>Keep Current:</strong> Stay updated on resume trends (e.g., whether to include objectives, how to handle online portfolios)</li>
                <li className="mb-3"><strong>Provide Examples:</strong> Show before-and-after resume samples to illustrate improvements</li>
                <li className="mb-3"><strong>Connect to Other Services:</strong> Link resume help to interview prep, job search strategies, and digital literacy</li>
                <li className="mb-3"><strong>Respect Privacy:</strong> Create confidential spaces for discussing employment history and personal information</li>
                <li className="mb-3"><strong>Make It Practical:</strong> Help patrons leave with a finished resume they can actually use</li>
              </ul>
            </div>
          </div>

          {/* Common Challenges */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-exclamation-triangle"></i> Common Challenges & Solutions
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">Challenge: Patrons with limited work history</h5>
                <p className="mb-2"><strong>Solution:</strong> Teach how to highlight volunteer work, education, skills, and projects. Use functional resume formats that emphasize abilities over chronological work history. Provide examples for entry-level candidates.</p>
              </div>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">Challenge: Career-changers with irrelevant experience</h5>
                <p className="mb-2"><strong>Solution:</strong> Focus on transferable skills. Help identify how past experience applies to new fields. Use summary statements that position the candidate for their target role. Emphasize relevant training and certifications.</p>
              </div>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">Challenge: Language barriers for non-native English speakers</h5>
                <p className="mb-2"><strong>Solution:</strong> Partner with ESL programs. Have bilingual volunteers available. Focus on clear, simple language. Provide templates with strong example phrases. Consider offering services in multiple languages.</p>
              </div>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">Challenge: Patrons with employment gaps</h5>
                <p className="mb-2"><strong>Solution:</strong> Teach strategies for addressing gaps honestly and positively. Help frame gap periods in terms of skills maintenance or development. Use functional formats when appropriate. Prepare patrons to discuss gaps in interviews.</p>
              </div>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">Challenge: Limited volunteer expertise in specific industries</h5>
                <p className="mb-2"><strong>Solution:</strong> Build a diverse volunteer pool across industries. Create partnerships with professional organizations. Use online tools that provide industry-specific guidance. Maintain a library of sample resumes from various fields.</p>
              </div>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">Challenge: High demand exceeding available appointment slots</h5>
                <p className="mb-2"><strong>Solution:</strong> Offer drop-in hours alongside appointments. Create self-service resources and templates. Use online resume builders available through library subscriptions. Train more volunteers. Consider group critique sessions.</p>
              </div>
            </div>
          </div>

          {/* Expanding Services */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-arrow-up-right"></i> Expanding Your Career Services
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <p className="mb-3">Once you've established resume services, consider expanding to create a comprehensive career support program:</p>
              
              <p className="mb-2"><strong>Related Services to Add:</strong></p>
              <ul className="mb-3">
                <li><strong>Cover Letter Writing:</strong> Natural extension of resume help</li>
                <li><strong>LinkedIn Profile Optimization:</strong> Help patrons create professional online presence</li>
                <li><strong>Interview Preparation:</strong> Mock interviews and practice sessions</li>
                <li><strong>Job Search Strategies:</strong> How to find and apply for positions online</li>
                <li><strong>Networking Skills:</strong> Professional communication and relationship building</li>
                <li><strong>Professional Attire Closet:</strong> Partner with organizations to provide interview clothing</li>
                <li><strong>Skills Assessment:</strong> Help patrons identify and articulate their strengths</li>
              </ul>

              <div className="alert alert-success border-0 mb-0">
                <p className="mb-0"><strong>Gateway Effect:</strong> Resume services often introduce patrons to other library resources, increasing overall engagement with digital literacy programs, computer access, and educational materials.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ResumeBuildingInLibraries