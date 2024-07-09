import React from 'react'
import Link from 'next/link'
import styles from "./page.module.css";

const Footer = () => {
  return (
    <footer className="py-3 mt-auto bg-teal-light shadow-footer">
    <ul className="nav justify-content-center border-bottom">
      <li className="nav-item "><Link href="/" className="nav-link px-2 text-decoration-none text-teal-dark fw-bolder hvr-grow">Home</Link></li>
      <li className="nav-item "><Link href="/about" className="nav-link px-2 text-decoration-none text-teal-dark fw-bolder hvr-grow">About Us</Link></li>
      <li className="nav-item "><Link href="/services" className="nav-link px-2 text-decoration-none text-teal-dark fw-bolder hvr-grow">Services</Link></li>
      <li className="nav-item "><a href="https://fflblog.freewareforlibraries.org" className="nav-link px-2 text-decoration-none text-teal-dark fw-bolder hvr-grow">Blog</a></li>
      <li className="nav-item "><Link href="/contact" className="nav-link px-2 text-decoration-none text-teal-dark fw-bolder hvr-grow">Contact</Link></li>
    </ul>
    <p className="text-center text-decoration-none text-teal-dark fw-bolder ">© 2024 www.freewareforlibraries.org</p>
  </footer>
  )
}

export default Footer