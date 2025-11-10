import React from 'react'

const GamingInLibraries = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center mb-5">Gaming in Libraries</h1>
        
        {/* Main Content in Single Column */}
        <div className="mx-auto" style={{maxWidth: '900px'}}>
          
          {/* Why Gaming in Libraries */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-question-circle"></i> Why Gaming Makes Sense
            </h2>
            
            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <p className="mb-3">The American Library Association highlights that gaming services help libraries serve as a "third place" (beyond home and work/school) where patrons can gather, play, and socialize — supporting recreation, culture, and community connection.</p>
              <p className="mb-2"><strong>Key Benefits:</strong></p>
              <ul className="mb-3">
                <li>Helps with engagement, collaboration, and socialization</li>
                <li>Reaches patron segments who might not participate in traditional programs</li>
                <li>About 43% of libraries already run formal gaming programs</li>
                <li>Supports information literacy, creativity, critical thinking, and digital literacy</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Insight:</strong> Gaming programs go beyond recreation—they can support broader library goals like information literacy and digital skills development.</p>
              </div>
            </div>
          </div>

          {/* Types of Gaming Programs */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-controller"></i> Types of Gaming Programs
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  Board Games / Card Games / Tabletop <span className="badge bg-success ms-2">Easy to Start</span>
                </h5>
              </div>
              <p className="mb-3">Often the easiest to implement with relatively low equipment cost, simple set-up, and minimal technical overhead. Includes classic strategy games, modern board games, and tabletop role-playing games like Dungeons & Dragons.</p>
              <p className="mb-2"><strong>Advantages:</strong></p>
              <ul className="mb-3">
                <li>Accessible and fosters social interaction</li>
                <li>Minimal tech issues and good for groups</li>
                <li>TTRPGs have become popular with teens and adults</li>
              </ul>
              <p className="mb-2"><strong>Considerations:</strong></p>
              <ul className="mb-3">
                <li>Need to manage pieces and accessories</li>
                <li>Space may get noisy</li>
                <li>Some patrons may resist non-quiet activity</li>
              </ul>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Low Cost</span>
                <span className="badge bg-teal-light text-teal-dark">Social</span>
                <span className="badge bg-teal-light text-teal-dark">All Ages</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">
                  Video Games / Consoles / E-Sports <span className="badge bg-warning text-dark ms-2">Higher Investment</span>
                </h5>
              </div>
              <p className="mb-3">Programs using consoles (Nintendo Switch, Xbox, PlayStation) or PCs for in-library play, tournaments, or online multiplayer via platforms like Discord and Twitch.</p>
              <p className="mb-2"><strong>Advantages:</strong></p>
              <ul className="mb-3">
                <li>High appeal to teens and adults</li>
                <li>Can draw new patrons</li>
                <li>Modern and engaging library experience</li>
              </ul>
              <p className="mb-2"><strong>Considerations:</strong></p>
              <ul className="mb-3">
                <li>Higher cost (hardware, games, maintenance)</li>
                <li>Technical support needed</li>
                <li>Space and monitoring requirements</li>
                <li>Security concerns (theft and damage risks)</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>💡 Tip:</strong> Consider locking equipment when not in use and establishing clear policies for usage, time limits, and age restrictions.</p>
              </div>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">High Tech</span>
                <span className="badge bg-teal-light text-teal-dark">Popular</span>
                <span className="badge bg-teal-light text-teal-dark">Teens/Adults</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Gamification / Game-Based Learning</h5>
              </div>
              <p className="mb-3">Using game mechanics or games to teach library skills or information literacy. Can include digital or board games as part of instruction, outreach, or collection development.</p>
              <p className="mb-2"><strong>Advantages:</strong></p>
              <ul className="mb-3">
                <li>Aligns with educational mission</li>
                <li>Versatile and can reach multiple age groups</li>
                <li>Reinforces learning objectives</li>
              </ul>
              <p className="mb-2"><strong>Considerations:</strong></p>
              <ul className="mb-3">
                <li>Requires design and planning</li>
                <li>May need staff training</li>
                <li>Must be executed well to maintain appeal</li>
              </ul>
              <div className="d-flex gap-2 flex-wrap mb-3">
                <span className="badge bg-teal-light text-teal-dark">Educational</span>
                <span className="badge bg-teal-light text-teal-dark">Multi-Age</span>
                <span className="badge bg-teal-light text-teal-dark">Skills-Based</span>
              </div>
            </div>
          </div>

          {/* Planning Your Program */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-clipboard-check"></i> Planning Your Gaming Program
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 1: Assess Community Needs</h5>
              <ul className="mb-3">
                <li>Who are you aiming to serve? (children, teens, adults, families)</li>
                <li>What library goals do you want to support? (engagement, STEM, digital literacy, entertainment)</li>
                <li>What space, equipment, and budget do you have?</li>
              </ul>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 2: Choose Format(s)</h5>
              <ul className="mb-3">
                <li>Board/card games vs video games vs TTRPG vs hybrid</li>
                <li>Drop-in, scheduled club, tournament, or instructional</li>
                <li>Examples: casual board game meet-ups for families, teen video game tournaments, adult RPG clubs</li>
              </ul>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 3: Select Games & Equipment</h5>
              <p className="mb-2"><strong>For Board Games:</strong></p>
              <ul className="mb-3">
                <li>Invest in durable titles</li>
                <li>Consider age range, number of players, rules complexity</li>
              </ul>
              <p className="mb-2"><strong>For Console/PC:</strong></p>
              <ul className="mb-3">
                <li>Decide on system(s), games, multiplayer capability</li>
                <li>Consider streaming and online options</li>
                <li>Pick games that map to library outcomes (strategy, collaboration, critical thinking)</li>
              </ul>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 4: Develop Policies & Logistics</h5>
              <ul className="mb-3">
                <li>In-library use vs checkout policies</li>
                <li>Age restrictions and ratings</li>
                <li>Time limits and supervision requirements</li>
                <li>Security measures (locking equipment)</li>
                <li>Plan for missing pieces, wear & tear, maintenance</li>
                <li>Designate appropriate space and communicate to patrons</li>
              </ul>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 5: Promotion & Outreach</h5>
              <ul className="mb-3">
                <li>Promote via social media, library website, in-library signage</li>
                <li>Consider partnerships with schools, youth groups, gaming clubs</li>
                <li>Leverage ALA's International Games Month (each November)</li>
              </ul>
              <div className="alert alert-success border-0 mb-3">
                <p className="mb-0"><strong>Tip:</strong> Gaming programs may attract patrons who don't usually attend traditional library programs—make the most of this outreach opportunity!</p>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 6: Implementation & Staffing</h5>
              <ul className="mb-3">
                <li>Train staff or volunteers in facilitating gaming</li>
                <li>Monitor usage and collect feedback</li>
                <li>Ensure safety and behavior standards are clear</li>
                <li>Adapt format based on experience</li>
              </ul>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <h5 className="text-teal-mid fw-bold mb-3">Step 7: Evaluation & Sustainability</h5>
              <ul className="mb-3">
                <li>Collect attendance data and patron feedback</li>
                <li>Evaluate whether program meets library goals</li>
                <li>Plan for periodic refresh of games and equipment</li>
                <li>Budget for replacements</li>
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
                <li className="mb-3"><strong>Start Small:</strong> Begin with a monthly board game evening before investing in full console set-up</li>
                <li className="mb-3"><strong>Choose Inclusive Games:</strong> Consider different ability levels and age ranges</li>
                <li className="mb-3"><strong>Create Welcoming Environment:</strong> Gaming should feel like community gathering, not competitive stress</li>
                <li className="mb-3"><strong>Have Clear Rules:</strong> Establish language/rating restrictions, time limits, and supervision for video games</li>
                <li className="mb-3"><strong>Designate Separate Spaces:</strong> Balance quiet study areas with social gaming spaces</li>
                <li className="mb-3"><strong>Maintain Equipment:</strong> Monitor for damage and theft, especially with consoles</li>
                <li className="mb-3"><strong>Blend with Library Mission:</strong> Tie game nights with reading clubs, digital literacy sessions, or TTRPGs linked to literature</li>
                <li className="mb-3"><strong>Consider Hybrids:</strong> Mix board games, digital games, and gamified activities for broader appeal</li>
                <li className="mb-3"><strong>Adapt to Online/Hybrid:</strong> Use online board game platforms via Zoom when needed</li>
              </ul>
            </div>
          </div>

          {/* Example Programs */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-lightbulb"></i> Example Program Ideas
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Family Board Game Night</h5>
              </div>
              <p className="mb-3">Monthly evening where families play board/card games together; library provides a selection of games and staff facilitation.</p>
              <div className="d-flex gap-2 flex-wrap">
                <span className="badge bg-teal-light text-teal-dark">Families</span>
                <span className="badge bg-teal-light text-teal-dark">Low Cost</span>
                <span className="badge bg-teal-light text-teal-dark">Social</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Teen Video Game Tournament</h5>
              </div>
              <p className="mb-3">Use a console for multiplayer games like Mario Kart or Super Smash Bros; set up bracket, prizes, and registration.</p>
              <div className="d-flex gap-2 flex-wrap">
                <span className="badge bg-teal-light text-teal-dark">Teens</span>
                <span className="badge bg-teal-light text-teal-dark">Competitive</span>
                <span className="badge bg-teal-light text-teal-dark">Popular</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Adult Tabletop RPG Club</h5>
              </div>
              <p className="mb-3">Weekly or monthly session of Dungeons & Dragons or other TTRPGs, perhaps themed around popular culture or literary ties.</p>
              <div className="d-flex gap-2 flex-wrap">
                <span className="badge bg-teal-light text-teal-dark">Adults</span>
                <span className="badge bg-teal-light text-teal-dark">Creative</span>
                <span className="badge bg-teal-light text-teal-dark">Social</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Drop-In Gaming Lounge</h5>
              </div>
              <p className="mb-3">Set aside a space for patrons to drop in and play board games/cards during a certain time slot (afternoon or early evening).</p>
              <div className="d-flex gap-2 flex-wrap">
                <span className="badge bg-teal-light text-teal-dark">Flexible</span>
                <span className="badge bg-teal-light text-teal-dark">All Ages</span>
                <span className="badge bg-teal-light text-teal-dark">Casual</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Gamified Information Literacy Workshop</h5>
              </div>
              <p className="mb-3">Use digital game or board game mechanics to teach library research skills, critical thinking, or media literacy.</p>
              <div className="d-flex gap-2 flex-wrap">
                <span className="badge bg-teal-light text-teal-dark">Educational</span>
                <span className="badge bg-teal-light text-teal-dark">Skills-Based</span>
                <span className="badge bg-teal-light text-teal-dark">All Ages</span>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <div className="mb-3">
                <h5 className="text-teal-mid fw-bold mb-2">Online Gaming Community</h5>
              </div>
              <p className="mb-3">Virtual sessions using online platforms (Discord, Zoom) for gaming, board game nights, or game development workshops.</p>
              <div className="d-flex gap-2 flex-wrap">
                <span className="badge bg-teal-light text-teal-dark">Virtual</span>
                <span className="badge bg-teal-light text-teal-dark">Remote Access</span>
                <span className="badge bg-teal-light text-teal-dark">Flexible</span>
              </div>
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              <i className="bi bi-exclamation-triangle"></i> Challenges to Consider
            </h2>

            <div className="mb-4 p-4 bg-white shadow-sm rounded">
              <ul className="mb-0">
                <li className="mb-3"><strong>Budget & Resources:</strong> Consoles, PCs, games, maintenance, and updates require ongoing investment</li>
                <li className="mb-3"><strong>Space & Supervision:</strong> Gaming generates noise and requires monitoring; balance social space with quiet areas</li>
                <li className="mb-3"><strong>Equipment Security:</strong> Game pieces, consoles, and controllers are prone to damage, loss, and theft</li>
                <li className="mb-3"><strong>Audience Segmentation:</strong> Some traditional users may resist changes in library environment</li>
                <li className="mb-3"><strong>Licensing & Rating Issues:</strong> Ensure age-appropriate ratings and adherence to copyright/licensing</li>
                <li className="mb-3"><strong>Sustainability:</strong> Regular programs require planning and ongoing investment beyond one-off events</li>
                <li className="mb-3"><strong>Digital Distribution:</strong> Console lifecycles and digital-only games affect long-term viability</li>
                <li className="mb-3"><strong>Accessibility:</strong> Design inclusive programs that accommodate patrons with disabilities and non-gamers</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default GamingInLibraries