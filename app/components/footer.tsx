import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-5 mt-auto bg-teal-light shadow-footer">
      <div className="container">
        <div className="row g-4 mb-4">
          
          {/* Brand Column */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="footer-brand">
              <h5 className="text-teal-dark fw-bold mb-3">
                <span className="me-2">📚</span>
                Freeware for Libraries
              </h5>
              <p className="text-teal-mid">
                Empowering libraries through free, accessible technology solutions.
              </p>
              <div className="social-links mt-3">
                <a href="#" className="social-icon me-3" aria-label="Twitter">
                  <span>🐦</span>
                </a>
                <a href="#" className="social-icon me-3" aria-label="LinkedIn">
                  <span>💼</span>
                </a>
                <a href="#" className="social-icon" aria-label="GitHub">
                  <span>💻</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-teal-dark fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="/" className="text-teal-dark footer-link">
                  <span className="link-arrow">→</span> Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-teal-dark footer-link">
                  <span className="link-arrow">→</span> About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-teal-dark footer-link">
                  <span className="link-arrow">→</span> Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/alternatives" className="text-teal-dark footer-link">
                  <span className="link-arrow">→</span> Free Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-teal-dark fw-bold mb-3">Resources</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link href="/tech-resources" className="text-teal-dark footer-link">
                  <span className="link-arrow">→</span> Tech Resources
                </Link>
              </li>
              <li className="mb-2">
                <a href="https://fflblog.freewareforlibraries.org" className="text-teal-dark footer-link">
                  <span className="link-arrow">→</span> Blog
                </a>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-teal-dark footer-link">
                  <span className="link-arrow">→</span> Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/wp" className="text-teal-dark footer-link">
                  <span className="link-arrow">→</span> Wireless Print Hub
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider my-4"></div>

        {/* Bottom Section */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="text-teal-dark mb-0">
              © {currentYear} <strong>Freeware for Libraries</strong>
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="text-teal-mid mb-0 small">
              Made with <span className="heart">❤️</span> for libraries everywhere
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        footer {
          position: relative;
          overflow: hidden;
        }

        footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -50%;
          width: 200%;
          height: 100%;
          background: radial-gradient(circle, rgba(15, 100, 102, 0.03) 0%, transparent 70%);
          animation: rotate 30s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .footer-brand {
          animation: fadeIn 0.8s ease-out;
        }

        .social-icon {
          display: inline-block;
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          text-align: center;
          line-height: 40px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .social-icon:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .social-icon span {
          font-size: 1.2rem;
        }

        .footer-links {
          position: relative;
        }

        .footer-link {
          display: inline-block;
          transition: all 0.3s ease;
          position: relative;
          padding-left: 5px;
        }

        .footer-link:hover {
          padding-left: 15px;
          color: #0F6466 !important;
          font-weight: 600;
        }

        .link-arrow {
          opacity: 0;
          transition: all 0.3s ease;
          position: absolute;
          left: 0;
        }

        .footer-link:hover .link-arrow {
          opacity: 1;
        }

        .footer-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, #0F6466, transparent);
          border-radius: 2px;
        }

        .heart {
          display: inline-block;
          animation: heartbeat 1.5s ease-in-out infinite;
          color: #e74c3c;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10%, 30% { transform: scale(0.9); }
          20%, 40%, 60%, 80% { transform: scale(1.1); }
          50%, 70% { transform: scale(1.05); }
        }

        @media (max-width: 768px) {
          .footer-brand {
            text-align: center;
          }

          .social-links {
            justify-content: center;
            display: flex;
          }

          h5 {
            text-align: center;
          }

          .footer-links {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer