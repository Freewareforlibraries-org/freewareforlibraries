'use client'

import React, { useState } from 'react'

const BlogPage = () => {
  const [expandedPost, setExpandedPost] = useState<number | null>(null)

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Libki: A Complete Guide",
      excerpt: "Learn how to set up and configure Libki for your library's public computer management needs. This comprehensive guide covers installation, configuration, and best practices.",
      date: "November 10, 2025",
      readTime: "8 min read",
      fullContent: `
        Libki is a powerful open-source solution for managing public computer access in libraries. In this comprehensive guide, we'll walk through the entire setup process and share best practices for implementation.

        **Installation Requirements**
        Before you begin, ensure you have a server running either Windows or Linux. You'll need at least 2GB of RAM and 20GB of disk space for a small to medium-sized installation.

        **Step 1: Download and Install**
        Visit the official Libki website and download the latest version. The installation wizard will guide you through the basic setup process. Make sure to configure your database connection during this step.

        **Step 2: Configure Your System**
        Once installed, access the web admin interface through your browser. Here you can set up:
        - Time limits for patron sessions
        - Computer reservations
        - Print quotas
        - User authentication methods

        **Step 3: Client Installation**
        Install the Libki client on each public computer. The client will communicate with your server to enforce time limits and manage sessions.

        **Best Practices**
        - Regularly backup your Libki database
        - Set reasonable time limits (typically 60-120 minutes)
        - Configure automatic warnings before session expiration
        - Test the system thoroughly before going live

        With these steps completed, your library will have a professional computer management system without the cost of commercial software!
      `
    },
    {
      id: 2,
      title: "5 Ways to Optimize Your Library's Print Management",
      excerpt: "Discover effective strategies to reduce printing costs and manage user quotas efficiently using open-source tools like SavaPage and Libki.",
      date: "November 5, 2025",
      readTime: "6 min read",
      fullContent: `
        Print management is one of the biggest challenges facing modern libraries. Here are five proven strategies to optimize your printing workflow and reduce costs.

        **1. Implement Print Quotas**
        Setting reasonable print quotas prevents abuse while still serving patron needs. Most libraries find that 10-20 pages per day per patron strikes the right balance. Tools like Libki and SavaPage make this easy to enforce.

        **2. Use Follow-Me Printing**
        Follow-me printing (also called secure release printing) holds print jobs in a queue until the patron authenticates at the printer. This reduces waste from forgotten printouts and improves privacy.

        **3. Charge for Color Printing**
        Color printing costs significantly more than black and white. Consider implementing a small fee for color prints (typically $0.25-$0.50 per page) while keeping black and white free.

        **4. Set Default to Duplex Printing**
        Configure printers to default to double-sided printing. This simple change can cut paper usage by nearly 50% without requiring any patron action.

        **5. Monitor and Analyze Usage**
        Use your print management software's reporting features to track usage patterns. This data helps you make informed decisions about printer placement, quota amounts, and budget allocation.

        By implementing these strategies, many libraries report reducing their printing costs by 30-40% while actually improving the patron experience.
      `
    },
    {
      id: 3,
      title: "Windows vs Linux for Public Library Computers",
      excerpt: "A detailed comparison of operating systems for library public access computers, covering costs, security, maintenance, and user experience.",
      date: "October 28, 2025",
      readTime: "10 min read",
      fullContent: `
        Choosing the right operating system for your library's public computers is a crucial decision that affects costs, security, and patron experience. Let's examine both options in detail.

        **Cost Comparison**
        Windows requires licensing fees that can range from $100-$200 per computer, plus additional costs for productivity software. Linux distributions are free, and most necessary software is open-source. For a 20-computer lab, this could mean savings of $4,000-$6,000 upfront.

        **Security Considerations**
        Linux systems are inherently more secure due to their architecture and smaller target profile for malware. However, Windows has robust enterprise security features and better support from IT staff familiar with the platform.

        **User Familiarity**
        Most patrons are familiar with Windows, which reduces the learning curve and support requests. Linux has become much more user-friendly, especially distributions like Ubuntu, but may still confuse some users.

        **Software Availability**
        Windows offers compatibility with virtually all commercial software. Linux has excellent open-source alternatives for most tasks, but some specialized software (like certain tax preparation programs) may not be available.

        **Maintenance and Updates**
        Both systems require regular updates. Windows updates can sometimes disrupt service, while Linux updates are typically more seamless. However, Windows has more IT professionals available who can provide support.

        **The Verdict**
        For most libraries, a hybrid approach works best: Windows for stations requiring specialized software, and Linux for general web browsing and basic productivity tasks. This maximizes cost savings while ensuring all patron needs are met.
      `
    },
    {
      id: 4,
      title: "Setting Up Unified Write Filter on Windows",
      excerpt: "Step-by-step instructions for configuring Microsoft's Unified Write Filter to protect your public computers from unwanted changes.",
      date: "October 22, 2025",
      readTime: "12 min read",
      fullContent: `
        The Unified Write Filter (UWF) is a powerful Windows feature that protects your public computers by discarding all changes on reboot. Here's how to set it up.

        **Prerequisites**
        UWF is available on Windows Enterprise, Education, and IoT editions. You'll need administrator access and approximately 30 minutes for initial configuration.

        **Step 1: Enable UWF Feature**
        Open Control Panel > Programs > Turn Windows features on or off. Scroll down and check "Unified Write Filter." Click OK and restart when prompted.

        **Step 2: Configure Protected Volumes**
        Open an elevated command prompt and run:
        uwfmgr.exe volume protect c:
        This protects your C: drive. Repeat for any other drives you want to protect.

        **Step 3: Configure Overlay**
        Set the overlay size (this is where temporary changes are stored before reboot):
        uwfmgr.exe overlay set-size 1024
        This sets a 1GB overlay, suitable for most public computers.

        **Step 4: Enable UWF**
        Finally, enable the filter:
        uwfmgr.exe filter enable
        Restart the computer for changes to take effect.

        **Making Permanent Changes**
        When you need to install updates or software, temporarily disable UWF:
        uwfmgr.exe filter disable
        Make your changes, then re-enable and restart.

        **Best Practices**
        - Set aside maintenance windows for updates
        - Document your UWF configuration
        - Test thoroughly before deploying to all computers
        - Consider excluding certain folders (like temp directories) from protection

        With UWF properly configured, your public computers will always reboot to a clean state, dramatically reducing maintenance headaches!
      `
    },
    {
      id: 5,
      title: "Case Study: Small Library Saves $5,000 with Open Source",
      excerpt: "How one rural library replaced expensive proprietary software with free and open-source alternatives, dramatically reducing their technology budget.",
      date: "October 15, 2025",
      readTime: "7 min read",
      fullContent: `
        The Millbrook Public Library serves a rural community of 8,000 people with a modest technology budget. Here's how they cut costs by switching to open-source solutions.

        **The Challenge**
        Millbrook was paying $3,500 annually for commercial PC management software, plus $1,800 for print management. Their budget couldn't sustain these costs alongside other necessary expenses.

        **The Solution**
        Library Director Sarah Martinez led the transition to open-source alternatives:
        - Replaced commercial PC management with Libki (free)
        - Implemented SavaPage for print management (free)
        - Switched to Porteus Kiosk for self-service stations (free)

        **Implementation Process**
        The transition took three months with help from a local IT volunteer:

        Month 1: Testing and configuration on a single computer
        Month 2: Staff training and documentation
        Month 3: Full rollout across all 12 public computers

        **Results**
        After one year:
        - Saved $5,300 annually in licensing fees
        - Reduced support calls by 40% due to auto-restore features
        - Improved patron satisfaction with easier self-service
        - Used savings to extend Wi-Fi coverage and add two more computers

        **Lessons Learned**
        "The key was taking time to test and train," says Martinez. "We also documented everything so future staff could maintain the systems. The open-source community was incredibly helpful when we had questions."

        **Your Turn**
        Small libraries can achieve similar savings. Start with one system, test thoroughly, and expand gradually. The open-source community is there to help!
      `
    },
    {
      id: 6,
      title: "Remote Monitoring with Veyon: Tips and Tricks",
      excerpt: "Advanced techniques for managing multiple public computers efficiently using Veyon's monitoring and remote control features.",
      date: "October 8, 2025",
      readTime: "9 min read",
      fullContent: `
        Veyon is a powerful open-source tool for monitoring and controlling multiple computers from a central location. Here are advanced tips to maximize its effectiveness.

        **Tip 1: Use Thumbnail View**
        The thumbnail view lets you monitor all computers at once. Press F11 for fullscreen mode and adjust thumbnail size with Ctrl+Mouse Wheel for the perfect overview of your computer lab.

        **Tip 2: Create Computer Groups**
        Organize computers into logical groups (Adult Computers, Children's Area, Study Rooms). This makes it easy to apply actions to specific areas of your library.

        **Tip 3: Schedule Automated Actions**
        Use Veyon's command-line interface to schedule actions:
        - Auto-logoff inactive users at closing time
        - Reboot all computers before opening
        - Display announcements to all users simultaneously

        **Tip 4: Remote Assistance**
        When patrons need help, use Veyon's remote view to see their screen without leaving your desk. The remote control feature lets you demonstrate solutions directly.

        **Tip 5: Lock Screens During Programs**
        During library programs or presentations, lock all computer screens with a single click to ensure patron attention. Unlock just as easily when finished.

        **Tip 6: Monitor for Inappropriate Content**
        Use the monitoring features responsibly to ensure computers are being used appropriately, especially in children's areas. Always balance monitoring with patron privacy rights.

        **Tip 7: Use PowerSave Features**
        Configure Veyon to automatically power down unused computers during slow periods, saving energy costs.

        **Security Considerations**
        - Use authentication keys rather than passwords
        - Limit Veyon Master access to authorized staff only
        - Keep Veyon updated for security patches
        - Document your monitoring policies for transparency

        With these tips, you'll manage your computer lab efficiently while providing better service to patrons!
      `
    }
  ]

  const togglePost = (postId: number) => {
    setExpandedPost(expandedPost === postId ? null : postId)
  }

  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center">Library Tech Blog</h1>
        <p className="fs-5 text-teal-mid text-center mb-3">
          Insights, tutorials, and best practices for managing library technology
        </p>
        <div className="alert alert-info border-0 shadow-sm mx-auto" style={{maxWidth: '800px'}} role="alert">
          <p className="mb-0 text-center">
            Stay up-to-date with the latest tips, guides, and case studies for managing public computers, 
            print services, and patron technology in your library!
          </p>
        </div>

        {/* Blog Posts */}
        <div className="mb-5">
          <div className="row g-3">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-12">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title text-teal-mid fw-bold">{post.title}</h5>
                    <p className="text-muted small mb-2">
                      <i className="bi bi-calendar3"></i> {post.date} · <i className="bi bi-clock"></i> {post.readTime}
                    </p>
                    <p className="card-text">{post.excerpt}</p>
                    
                    {expandedPost === post.id && (
                      <div className="mt-3 pt-3 border-top">
                        <div style={{whiteSpace: 'pre-line', lineHeight: '1.8'}}>
                          {post.fullContent}
                        </div>
                      </div>
                    )}
                    
                    <button 
                      onClick={() => togglePost(post.id)}
                      className="btn btn-sm bg-teal-mid text-white hvr-grow mt-2"
                    >
                      {expandedPost === post.id ? (
                        <>Show Less <i className="bi bi-arrow-up"></i></>
                      ) : (
                        <>Read More <i className="bi bi-arrow-right"></i></>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default BlogPage