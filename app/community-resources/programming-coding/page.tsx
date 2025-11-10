import React from 'react'

const CodingInLibraries = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center mb-5">Coding Programs in Libraries</h1>
        
        {/* Main Content in Single Column */}
        <div className="mx-auto" style={{maxWidth: '900px'}}>
          
          {/* Why Coding in Libraries */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-question-circle"></i> Why should I teach coding classes?
            </h2>
            
            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <p className="mb-3">Public libraries help bridge the digital divide by providing access to tech and internet — adding coding is a natural extension of that mission.</p>
              <p className="mb-2"><strong>Key Benefits:</strong></p>
              <ul className="mb-3">
                <li>Teaches computational thinking, logical reasoning, and problem-solving skills useful beyond "just coding"</li>
                <li>Attracts new patrons and engages youth & families</li>
                <li>Positions libraries as community tech hubs</li>
                <li>Even libraries without prior coding expertise can run successful programs with the right tools and support</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Insight:</strong> Coding programs extend your library's mission of providing equitable access to education and technology for all community members.</p>
              </div>
            </div>
          </div>

          {/* Program Ideas & Formats */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-code-slash"></i> Program Ideas & Class Formats
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  1. One-Time "Intro to Coding" Workshop <span className="badge bg-success ms-2">Great for Beginners</span>
                </h5>
              </div>
              <p className="mb-3"><strong>Duration:</strong> 1 hour (or 90 minutes) — perfect for "Hour of Code" or special events</p>
              <p className="mb-3"><strong>Audience:</strong> Kids ages ~8-12, or teens/adults new to coding</p>
              <p className="mb-2"><strong>Activity:</strong></p>
              <ul className="mb-3">
                <li>Use block-based coding tools (e.g., Code.org, Scratch)</li>
                <li>Build a simple interactive game or animation</li>
                <li>Hand out "challenge" for participants to continue at home</li>
              </ul>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Beginner-Friendly</span>
                <span className="badge bg-teal-light text-teal-dark">Low Commitment</span>
                <span className="badge bg-teal-light text-teal-dark">Kids/Teens/Adults</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  2. Weekly Coding Club or "After School" Series
                </h5>
              </div>
              <p className="mb-3"><strong>Duration:</strong> 6-8 weeks, 1 session per week, 60-90 minutes each</p>
              <p className="mb-3"><strong>Audience:</strong> Tweens/teens (or adults)</p>
              <p className="mb-2"><strong>Format:</strong></p>
              <ul className="mb-3">
                <li>Mix instruction + hands-on coding + project-work time</li>
                <li>Build a web page, make a simple game, use Python/JavaScript</li>
                <li>Peer showcase: Let participants present projects at the end</li>
                <li>Ready-to-run platforms available that provide training for librarians</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Tip:</strong> You don't need to be a coding expert! Many platforms provide complete training and curriculum for library staff.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Structured</span>
                <span className="badge bg-teal-light text-teal-dark">Project-Based</span>
                <span className="badge bg-teal-light text-teal-dark">Teens/Adults</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  3. Drop-In "Maker/Maker-Code" Session
                </h5>
              </div>
              <p className="mb-3"><strong>Duration:</strong> 1-2 hours, perhaps in the afternoon or weekend</p>
              <p className="mb-3"><strong>Audience:</strong> Mixed ages (families, kids + adult mentors)</p>
              <p className="mb-2"><strong>Format:</strong></p>
              <ul className="mb-3">
                <li>Multiple stations where patrons can choose activities</li>
                <li>Code a simple robot or use a microcontroller</li>
                <li>Create digital art/animation via code</li>
                <li>"Unplugged" coding games (no computer) for younger kids</li>
              </ul>
              <p className="mb-2"><strong>Benefits:</strong></p>
              <ul className="mb-3">
                <li>Lower commitment, encourages exploration</li>
                <li>Can tie into your library's makerspace</li>
                <li>Families can participate together</li>
              </ul>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Flexible</span>
                <span className="badge bg-teal-light text-teal-dark">Family-Friendly</span>
                <span className="badge bg-teal-light text-teal-dark">Exploratory</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  4. Adult/Community Coding Workshop or Bootcamp <span className="badge bg-warning text-dark ms-2">Career-Focused</span>
                </h5>
              </div>
              <p className="mb-3"><strong>Duration:</strong> 4-8 weeks, 1.5-2 hours each session</p>
              <p className="mb-3"><strong>Audience:</strong> Adults / career seekers</p>
              <p className="mb-2"><strong>Focus Areas:</strong></p>
              <ul className="mb-3">
                <li>Basic web development (HTML/CSS/JavaScript)</li>
                <li>Python for data analysis</li>
                <li>Digital literacy via coding</li>
              </ul>
              <p className="mb-2"><strong>Format:</strong></p>
              <ul className="mb-3">
                <li>More structured curriculum</li>
                <li>Partner with local college or tech business for instructors or guest talks</li>
                <li>Library-specific products support flagship "learn to code" programs</li>
              </ul>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Adults</span>
                <span className="badge bg-teal-light text-teal-dark">Career Skills</span>
                <span className="badge bg-teal-light text-teal-dark">Structured</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  5. Special Event / Coding Competition / Hackathon
                </h5>
              </div>
              <p className="mb-3"><strong>Duration:</strong> Half day or full day event</p>
              <p className="mb-3"><strong>Audience:</strong> Teens (and maybe family teams)</p>
              <p className="mb-2"><strong>Format:</strong></p>
              <ul className="mb-3">
                <li>Provide challenges: "Design a simple game in 3 hours"</li>
                <li>"Build a website prototype"</li>
                <li>"Robotics coding challenge"</li>
                <li>Offer small prizes for winners</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Note:</strong> Some coding platforms supporting libraries offer competition modules to make planning easier.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Competitive</span>
                <span className="badge bg-teal-light text-teal-dark">Teens</span>
                <span className="badge bg-teal-light text-teal-dark">High Energy</span>
              </div>
            </div>
          </div>

          {/* Resources & Platforms */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-tools"></i> Useful Resources & Platforms
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <p className="mb-4">Here are toolkits, platforms, and curriculum resources designed specifically for library contexts:</p>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">American Library Association (ALA) Programming Resources</h5>
                <p className="mb-2">"Ready to Code" toolkit with example lesson plans (for "Little Coders"), unplugged activities, and guides for libraries.</p>
                <div className="d-flex gap-2 flex-wrap">
                  <span className="badge bg-teal-light text-teal-dark">Free</span>
                  <span className="badge bg-teal-light text-teal-dark">Curriculum</span>
                  <span className="badge bg-teal-light text-teal-dark">All Ages</span>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">WebJunction – Programming Topic Page</h5>
                <p className="mb-2">Free courses and webinars for library staff on how to plan, implement, and evaluate programming (for tech & non-tech topics).</p>
                <div className="d-flex gap-2 flex-wrap">
                  <span className="badge bg-teal-light text-teal-dark">Free Training</span>
                  <span className="badge bg-teal-light text-teal-dark">Staff Development</span>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">TechSoup Blog – Host a Coding Class at Your Library</h5>
                <p className="mb-2">Practical guide for setting up coding events: recruiting volunteers, device setup, and choosing platforms.</p>
                <div className="d-flex gap-2 flex-wrap">
                  <span className="badge bg-teal-light text-teal-dark">Free Guide</span>
                  <span className="badge bg-teal-light text-teal-dark">Practical Tips</span>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">Vidcode</h5>
                <p className="mb-2">Library-friendly self-guided computer science courses aimed at teens. Interactive tutorials like Snapchat filters and web development.</p>
                <div className="d-flex gap-2 flex-wrap">
                  <span className="badge bg-teal-light text-teal-dark">Teens</span>
                  <span className="badge bg-teal-light text-teal-dark">Self-Guided</span>
                  <span className="badge bg-teal-light text-teal-dark">Interactive</span>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">Fiero Code</h5>
                <p className="mb-2">Platform built from the ground up for libraries (e-resource + code club + competition). Very plug-and-play for libraries without coding expertise.</p>
                <div className="d-flex gap-2 flex-wrap">
                  <span className="badge bg-teal-light text-teal-dark">Library-Specific</span>
                  <span className="badge bg-teal-light text-teal-dark">Complete Solution</span>
                  <span className="badge bg-teal-light text-teal-dark">No Expertise Needed</span>
                </div>
              </div>

              <div className="alert alert-success border-0 mb-0">
                <p className="mb-0"><strong>💡 Real Example:</strong> Santa Clara City Library offers "Check Out & Code Kits" (Chromebooks + instruction) for ages 5+ that patrons can take home.</p>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-rocket"></i> Getting Started with Your Coding Program
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 1: Identify Your Audience & Goals</h5>
              <ul className="mb-3">
                <li>Who do you want to serve? (kids, teens, adults, families)</li>
                <li>What outcomes do you want? (digital literacy, career skills, youth engagement)</li>
                <li>What level of commitment can you make? (one-time workshop vs ongoing club)</li>
              </ul>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 2: Assess Your Resources</h5>
              <ul className="mb-3">
                <li>Do you have computers/tablets available? How many?</li>
                <li>What is your staff's comfort level with technology?</li>
                <li>What is your budget for platforms, devices, or training?</li>
                <li>Do you have space that can accommodate hands-on activities?</li>
              </ul>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 3: Choose Your Format & Platform</h5>
              <ul className="mb-3">
                <li>Start small with a one-time workshop or Hour of Code event</li>
                <li>Select age-appropriate tools (block-based for kids, text-based for teens/adults)</li>
                <li>Consider ready-made curricula designed for libraries</li>
                <li>Look for platforms that provide staff training and support</li>
              </ul>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 4: Prepare Staff & Volunteers</h5>
              <ul className="mb-3">
                <li>Take advantage of free training from WebJunction, ALA, and vendors</li>
                <li>Recruit tech-savvy volunteers from the community (students, retirees)</li>
                <li>Test the technology and activities beforehand</li>
                <li>Prepare troubleshooting guides for common issues</li>
              </ul>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 5: Promote Your Program</h5>
              <ul className="mb-3">
                <li>Use social media, library website, and in-library signage</li>
                <li>Partner with schools to reach students and families</li>
                <li>Highlight that no prior experience is needed</li>
                <li>Leverage national events like Hour of Code (December) or Computer Science Education Week</li>
              </ul>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 6: Launch & Iterate</h5>
              <ul className="mb-3">
                <li>Start your first program with realistic expectations</li>
                <li>Collect feedback from participants and staff</li>
                <li>Adjust timing, content, or format based on what you learn</li>
                <li>Celebrate successes and share participant projects</li>
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
                <li className="mb-3"><strong>You Don't Need to Be an Expert:</strong> Many successful library coding programs are run by staff who learned alongside participants</li>
                <li className="mb-3"><strong>Start Small & Simple:</strong> Begin with a one-time workshop before committing to a multi-week series</li>
                <li className="mb-3"><strong>Use Free Tools First:</strong> Code.org, Scratch, and other free platforms are excellent starting points</li>
                <li className="mb-3"><strong>Make It Social:</strong> Coding is more engaging when participants can collaborate and share</li>
                <li className="mb-3"><strong>Emphasize Creativity:</strong> Focus on what participants can create, not just technical syntax</li>
                <li className="mb-3"><strong>Provide Take-Home Challenges:</strong> Help learning continue beyond the library with projects they can finish at home</li>
                <li className="mb-3"><strong>Partner Strategically:</strong> Connect with local tech companies, colleges, or coding bootcamps for guest speakers or mentors</li>
                <li className="mb-3"><strong>Showcase Projects:</strong> Display finished work in the library or on social media to build excitement</li>
                <li className="mb-3"><strong>Mix Ages When Appropriate:</strong> Family coding events can create mentorship opportunities between older and younger participants</li>
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
                <h5 className="text-teal-mid fw-bold mb-2">Challenge: "Our staff doesn't know how to code"</h5>
                <p className="mb-2"><strong>Solution:</strong> Use platforms specifically designed for libraries that provide complete training and curriculum. You can also recruit volunteers from local high schools, colleges, or tech companies.</p>
              </div>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">Challenge: "We don't have enough computers"</h5>
                <p className="mb-2"><strong>Solution:</strong> Start with "unplugged" coding activities that teach computational thinking without devices. Consider pairing participants or rotating between stations. Look into device checkout programs.</p>
              </div>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">Challenge: "Technical issues during programs"</h5>
                <p className="mb-2"><strong>Solution:</strong> Test all technology beforehand. Have backup activities ready. Use platforms that work offline or have low bandwidth requirements. Recruit a tech-savvy volunteer as your "IT support" during sessions.</p>
              </div>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">Challenge: "Low attendance or engagement"</h5>
                <p className="mb-2"><strong>Solution:</strong> Partner with schools for promotion. Make programs project-based rather than lecture-based. Offer prizes or certificates. Consider timing (after school, weekends). Showcase what participants will create.</p>
              </div>

              <div className="mb-4">
                <h5 className="text-teal-mid fw-bold mb-2">Challenge: "Sustaining programs long-term"</h5>
                <p className="mb-2"><strong>Solution:</strong> Start with sustainable formats (monthly rather than weekly). Use free or low-cost platforms. Train multiple staff members. Build partnerships with organizations that can provide ongoing support.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CodingInLibraries