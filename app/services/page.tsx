import React from 'react'

const services = () => {
  return (
    <main className="d-flex mt-auto mb-auto fade-in">
    <div className="container">
   <div>
   <h1 className="display-3 text-teal-mid fw-bolder text-center">What do we offer?</h1>
   <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <h2 className="fw-bolder text-teal-mid">Wireless Printing</h2>
        <p>Our web application seamlessly integrates with local libraries to offer patrons convenient wireless printing services.</p>
        <a href="https://wp.freewareforlibraries.org" className="btn bg-teal-mid text-white shadow">
          Click here!
          
        </a>
      </div>
      <div className="feature col">
        <h2 className="fw-bolder text-teal-mid">Security Incident Report System</h2>
        <p>Coming Soon!</p>
      </div>
      <div className="feature col">
        <h2 className="fw-bolder text-teal-mid">Library Blog</h2>
        <p>Coming Soon!</p>
      </div>
    </div>
     </div>
     </div>
        
   </main>
  )
}

export default services