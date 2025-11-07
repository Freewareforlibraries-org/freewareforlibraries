'use client';

import Image from "next/image";
import styles from "./page.module.css";
import logo from '../public/logo.png';

export default function Home() {
  return (
    <main className="d-flex mt-auto mb-auto fade-in">
      <div className="container py-5">
        
        {/* Hero Section */}
        <div className="text-center mb-5">
          <div className="logo-container mb-4 position-relative">
            <div className="logo-glow"></div>
            <Image 
              src={logo} 
              alt="Freeware for Libraries Logo"
              className="mx-auto d-block hero-logo"
            /> 
          </div>
          
          <h1 className="display-3 text-teal-mid fw-bolder mb-4 hero-title">
            Empowering Libraries Through Technology
          </h1>
          
          <p className="fs-5 text-teal-mid mx-auto hero-description" style={{maxWidth: '800px'}}>
            At Freeware for Libraries, we believe that access to valuable applications should not be limited by financial constraints. 
            Our mission is to share essential software with libraries of all sizes, providing them with the tools they need to enhance 
            their services and support their communities.
          </p>

          <div className="mt-5 d-flex gap-3 justify-content-center flex-wrap">
            <a href="/services" className="btn btn-lg bg-teal-mid text-white px-4 py-3 rounded-pill shadow-lg hvr-grow">
              Explore Our Services
            </a>
            <a href="/alternatives" className="btn btn-lg btn-outline-secondary px-4 py-3 rounded-pill hvr-grow">
              Free Software Guide
            </a>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="row g-4 mt-5">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-lg hover-lift">
              <div className="card-body text-center p-4">
                <div className="feature-icon mb-3">
                  <span style={{fontSize: '3rem'}}>🖨️</span>
                </div>
                <h3 className="fw-bold text-teal-mid mb-3">Wireless Printing</h3>
                <p className="text-muted mb-4">
                  Seamless wireless printing solution for library patrons. Print from any device, anywhere in your library.
                </p>
                <a href="/wp" className="btn bg-teal-mid text-white hvr-grow">Learn More</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-lg hover-lift">
              <div className="card-body text-center p-4">
                <div className="feature-icon mb-3">
                  <span style={{fontSize: '3rem'}}>💻</span>
                </div>
                <h3 className="fw-bold text-teal-mid mb-3">Free Alternatives</h3>
                <p className="text-muted mb-4">
                  Professional-grade free and open-source alternatives to expensive commercial software.
                </p>
                <a href="/alternatives" className="btn bg-teal-mid text-white hvr-grow">Explore Tools</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-lg hover-lift">
              <div className="card-body text-center p-4">
                <div className="feature-icon mb-3">
                  <span style={{fontSize: '3rem'}}>🔧</span>
                </div>
                <h3 className="fw-bold text-teal-mid mb-3">Tech Resources</h3>
                <p className="text-muted mb-4">
                  Curated resources, tools, and communities for library technology professionals.
                </p>
                <a href="/tech-resources" className="btn bg-teal-mid text-white hvr-grow">View Resources</a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row g-4 mt-5 py-5">
          <div className="col-md-4 text-center">
            <div className="stat-card p-4">
              <h2 className="display-4 text-teal-mid fw-bold mb-2">100+</h2>
              <p className="text-muted fs-5">Free Software Alternatives</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="stat-card p-4">
              <h2 className="display-4 text-teal-mid fw-bold mb-2">∞</h2>
              <p className="text-muted fs-5">Cost to Libraries</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="stat-card p-4">
              <h2 className="display-4 text-teal-mid fw-bold mb-2">24/7</h2>
              <p className="text-muted fs-5">Available Resources</p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .hero-logo {
            animation: float 3s ease-in-out infinite;
            filter: drop-shadow(0 10px 30px rgba(15, 100, 102, 0.3));
          }

          .logo-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(15, 100, 102, 0.2) 0%, transparent 70%);
            animation: pulse 3s ease-in-out infinite;
          }

          @keyframes pulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.1); }
          }

          .hero-title {
            background: linear-gradient(135deg, #0F6466 0%, #2C3532 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: fadeInUp 1s ease-out;
          }

          .hero-description {
            animation: fadeInUp 1s ease-out 0.2s both;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .hover-lift {
            transition: all 0.3s ease;
          }

          .hover-lift:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
          }

          .feature-icon {
            animation: iconBounce 2s ease-in-out infinite;
          }

          @keyframes iconBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .stat-card {
            border-radius: 15px;
            transition: all 0.3s ease;
          }

          .stat-card:hover {
            background-color: rgba(210, 232, 227, 0.3);
            transform: scale(1.05);
          }
        `}</style>
      </div>
    </main>
  );
}