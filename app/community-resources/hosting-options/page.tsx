import React from 'react';

const LibraryHostingOptions = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">
        <h1 className="display-1 text-teal-mid fw-bolder text-center mb-5">
          Hosting Options
        </h1>

        <div className="mx-auto" style={{ maxWidth: '900px' }}>

          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              Why Focus on Low-Cost Hosting?
            </h2>
            <div className="p-4 bg-white shadow-sm rounded mb-4">
              <p className="mb-3">
                Public libraries often face tight budgets. By selecting hosting solutions that are free or low cost, libraries can allocate more funds to community services, collections, and outreach, while still maintaining a professional, accessible web presence.
              </p>
              <ul>
                <li>Supports budget-friendly web infrastructure.</li>
                <li>Allows custom domain and professional branding.</li>
                <li>Maintains scalability and reliability within resource constraints.</li>
              </ul>
            </div>
          </div>

          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              Recommended Hosting Options
            </h2>
            <div className="p-4 bg-white shadow-sm rounded mb-4">
              <ul>
                <li><strong>JerseyConnect Free Hosting (New Jersey):</strong> Provides free web hosting (5 GB storage, free SSL) for libraries in New Jersey.</li>
                <li><strong>OPLIN Webkits (Ohio):</strong> Low-cost hosting/website kits for Ohio public libraries; includes CMS and hosting.</li>
                <li><strong>LibraryHost:</strong> Low-cost hosting and support of open-source library software for institutions of various sizes.</li>
                <li><strong>Neocities Free Plan:</strong> 1 GB storage, static-site hosting for free—suitable for simple informational sites.</li>
                <li><strong>General recommendation:</strong> Use free or very low-cost shared hosting if your site is small and mostly informational; upgrade as needed for higher traffic or complex services.</li>
              </ul>

              <p className="mt-3">
                When selecting a plan, check for: custom domain support, free SSL, backup/restore options, and billing transparency (watch for renewal price increases).
              </p>
            </div>
          </div>

          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              Key Factors for Library Website Hosting
            </h2>
            <div className="p-4 bg-white shadow-sm rounded mb-4">
              <ul>
                <li>Supports a custom domain (e.g., yourlibrary.org).</li>
                <li>Includes HTTPS (SSL certificate) by default.</li>
                <li>Offers sufficient storage and bandwidth for your content (events, PDFs, images).</li>
                <li>Allows you to maintain accessibility-compliant code (clean HTML/CSS, fast loading, good uptime).</li>
                <li>Provides reliable backups and restore options.</li>
                <li>Has transparent pricing and reasonable renewal terms.</li>
                <li>Allows for growth (e.g., you can upgrade if traffic or content increases).</li>
              </ul>
            </div>
          </div>

          <div className="mb-5">
            <h2 className="text-teal-mid fw-bolder mb-4 text-center">
              Implementation Checklist
            </h2>
            <div className="p-4 bg-white shadow-sm rounded mb-4">
              <ul>
                <li>Choose a hosting provider from the list or one you’ve vetted.</li>
                <li>Set up your custom domain and configure DNS correctly.</li>
                <li>Install and enforce HTTPS for all pages.</li>
                <li>Ensure your site meets accessibility standards (see your accessibility checklist page!).</li>
                <li>Ensure the hosting plan supports backups and restore operations.</li>
                <li>Test site load speed and performance (especially for mobile users).</li>
                <li>Review that renewal cost is clear, and budget accordingly.</li>
              </ul>

              <div className="alert alert-success border-0 mt-3">
                <p className="mb-0"><strong>Pro tip:</strong> Start with a free or very low-cost host for your informational site and scale up to a paid plan when you add more dynamic services (catalog integration, user accounts, digital collection viewers).</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LibraryHostingOptions;
