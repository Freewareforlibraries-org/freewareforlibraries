'use client'

import React, { useState } from 'react'

const BlogPage = () => {
  const [expandedPost, setExpandedPost] = useState<number | null>(null)

  const blogPosts = [
    {
      id: 1,
      title: "Why Public Libraries Should Consider Switching to Linux",
      excerpt: "Public libraries are under constant pressure to provide reliable technology while managing tight budgets. Linux offers a secure, cost-effective, and flexible alternative to Windows, allowing libraries to extend hardware life, reduce expenses, and improve system stability. With a modern, user-friendly interface and a full suite of free software, Linux gives patrons everything they need while aligning with the library’s mission of open access and digital literacy.",
      date: "November 14, 2025",
      fullContent: `
       Public libraries are constantly balancing tight budgets, growing digital needs, and the demand for reliable public computers. One increasingly effective solution is switching from Windows to Linux—a secure, cost-effective, and flexible operating system that fits well in a library environment. Linux removes licensing fees and runs smoothly on older machines, helping libraries extend hardware life and save money. It also offers strong built-in security, with fewer risks from viruses and ransomware, making it ideal for public access computers used by many different patrons. Because Linux provides stable long-term support releases and predictable updates, library IT staff spend less time on maintenance and more time assisting patrons and supporting programs.

Linux’s flexibility allows it to adapt to almost any library need, from public PCs and catalog stations to servers, kiosks, and makerspace devices. It includes a full suite of free software, such as LibreOffice, GIMP, Firefox, VLC, Scratch, and Calibre, giving patrons everything they need for browsing, homework, document creation, and creative projects without additional costs. Modern Linux desktops are also user-friendly, clean, and familiar—even to people accustomed to Windows—making the transition smooth for patrons and staff. Most importantly, Linux aligns with core library values like open access, transparency, and digital literacy, empowering communities to learn and explore using open-source tools.

Overall, adopting Linux can help libraries reduce expenses, improve security, and provide patrons with a modern, stable, and flexible computing experience. It’s a forward-thinking choice that supports both the mission and the future of public libraries.
      `
    },

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
                      <i className="bi bi-calendar3"></i> {post.date}
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