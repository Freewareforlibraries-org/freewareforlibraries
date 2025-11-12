import React from 'react'

const BackupStoragePage = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">
        <h1 className="display-1 text-teal-mid fw-bolder text-center">
          Backup & Storage Solutions
        </h1>
        <p className="fs-5 text-teal-mid text-center mb-3">
          Free and open-source tools for data backup, storage management, and file sharing
        </p>
        <div
          className="alert alert-info border-0 shadow-sm mx-auto"
          style={{ maxWidth: '800px' }}
          role="alert"
        >
          <p className="mb-0 text-center">
            Protect your data with enterprise-grade backup solutions, scale your storage with
            distributed file systems, and collaborate seamlessly with self-hosted file sharing
            platforms—all without expensive commercial software!
          </p>
        </div>

        {/* Quick Reference Table */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3 text-center">Quick Reference Guide</h2>
          <div className="table-responsive">
            <table className="table table-hover shadow-sm">
              <thead className="bg-teal-mid text-white">
                <tr>
                  <th>Need</th>
                  <th>Recommended Tool</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Enterprise Backup</td>
                  <td>Bacula, UrBackup</td>
                  <td>Complete backup and recovery solutions</td>
                </tr>
                <tr>
                  <td>Cloud Backup</td>
                  <td>Duplicati, Restic, Rclone</td>
                  <td>Encrypted backups to cloud storage</td>
                </tr>
                <tr>
                  <td>Deduplication Backup</td>
                  <td>BorgBackup, Restic</td>
                  <td>Efficient storage with deduplication</td>
                </tr>
                <tr>
                  <td>Distributed Storage</td>
                  <td>Ceph, GlusterFS</td>
                  <td>Scalable network storage systems</td>
                </tr>
                <tr>
                  <td>Advanced File Systems</td>
                  <td>OpenZFS, Lustre</td>
                  <td>High-performance with snapshots</td>
                </tr>
                <tr>
                  <td>File Sharing & Collaboration</td>
                  <td>Nextcloud, Syncthing</td>
                  <td>Self-hosted cloud storage and sync</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Backup Tools */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-shield-check"></i> Backup Tools
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Enterprise</span>
                    <span className="badge bg-danger">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Bacula</h5>
                  <p className="text-muted small mb-2">Enterprise-Grade Backup Solution</p>
                  <p className="card-text">
                    Enterprise-grade backup, recovery, and verification software with network-based
                    backup capabilities for servers and workstations.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> AGPL (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://www.bacula.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://www.bacula.org/downloads/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Download
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=bacula+backup+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">UrBackup</h5>
                  <p className="text-muted small mb-2">Client/Server Backup System</p>
                  <p className="card-text">
                    Client/server backup system supporting both image and file backups with web
                    interface for easy management.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> AGPL (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://www.urbackup.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://www.urbackup.org/download.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Download
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=urbackup+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Duplicati</h5>
                  <p className="text-muted small mb-2">Encrypted Cloud Backup</p>
                  <p className="card-text">
                    Encrypted, incremental backups to local or cloud storage with support for
                    multiple cloud providers and strong encryption.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> LGPL (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://www.duplicati.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://www.duplicati.com/download"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Download
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=duplicati+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Amanda</h5>
                  <p className="text-muted small mb-2">Network Backup Solution</p>
                  <p className="card-text">
                    Network backup solution for backing up multiple servers and workstations to
                    disk, tape, or cloud storage.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> BSD (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Unix/Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="http://www.amanda.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="http://www.amanda.org/download.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Download
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=amanda+backup+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Recommended</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Restic</h5>
                  <p className="text-muted small mb-2">Fast & Secure Backup</p>
                  <p className="card-text">
                    Fast, secure, and efficient backup tool supporting local and cloud storage with
                    encryption and deduplication built-in.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> BSD (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://restic.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://restic.readthedocs.io/en/stable/020_installation.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Download
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=restic+backup+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">BorgBackup</h5>
                  <p className="text-muted small mb-2">Deduplicating Backup</p>
                  <p className="card-text">
                    Deduplicating backup program supporting encryption and compression for efficient
                    and secure backups.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> BSD (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Unix/Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://www.borgbackup.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://borgbackup.readthedocs.io/en/stable/installation.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Download
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=borgbackup+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Rsync</h5>
                  <p className="text-muted small mb-2">Incremental File Sync</p>
                  <p className="card-text">
                    Command-line utility for incremental file backups and synchronization. Simple
                    yet powerful for basic backup needs.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> GPL (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Unix/Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://rsync.samba.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://rsync.samba.org/download.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Download
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=rsync+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Rclone</h5>
                  <p className="text-muted small mb-2">Cloud Storage Manager</p>
                  <p className="card-text">
                    Sync, backup, and manage files across 40+ cloud storage providers with powerful
                    CLI and mounting capabilities.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> MIT (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://rclone.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://rclone.org/downloads/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Download
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=rclone+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Storage / File System Tools */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-hdd-stack"></i> Storage / File System Tools
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Enterprise</span>
                    <span className="badge bg-danger">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Ceph</h5>
                  <p className="text-muted small mb-2">Scalable Storage Platform</p>
                  <p className="card-text">
                    Highly scalable object, block, and file storage platform designed for
                    enterprise-level distributed storage.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> LGPL (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://ceph.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://docs.ceph.com/en/latest/install/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Documentation
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=ceph+storage+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-danger">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">GlusterFS</h5>
                  <p className="text-muted small mb-2">Distributed File System</p>
                  <p className="card-text">
                    Distributed file system for scalable network storage that can scale to petabytes
                    of storage capacity.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> GPL/LGPL (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://www.gluster.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://docs.gluster.org/en/latest/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Documentation
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=glusterfs+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Recommended</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">OpenZFS</h5>
                  <p className="text-muted small mb-2">Advanced File System</p>
                  <p className="card-text">
                    Advanced file system with snapshots, deduplication, replication, and data
                    integrity verification built-in.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> CDDL (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://openzfs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://openzfs.github.io/openzfs-docs/Getting%20Started/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Documentation
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=openzfs+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-danger">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Lustre</h5>
                  <p className="text-muted small mb-2">High-Performance Storage</p>
                  <p className="card-text">
                    High-performance distributed file system designed for large-scale cluster
                    computing and storage needs.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> GPL (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://www.lustre.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://wiki.lustre.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Documentation
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=lustre+filesystem+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-danger">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">DRBD</h5>
                  <p className="text-muted small mb-2">Replicated Block Device</p>
                  <p className="card-text">
                    Distributed replicated block device for high-availability storage with real-time
                    mirroring capabilities.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> GPL (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://linbit.com/drbd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://linbit.com/drbd-user-guide/drbd-guide-9_0-en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Documentation
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=drbd+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">SeaweedFS</h5>
                  <p className="text-muted small mb-2">Lightweight Distributed FS</p>
                  <p className="card-text">
                    Lightweight distributed file system optimized for storing and serving large
                    amounts of small files efficiently.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> Apache 2.0 (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://github.com/seaweedfs/seaweedfs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit GitHub
                    </a>
                    <a
                      href="https://github.com/seaweedfs/seaweedfs/wiki"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Documentation
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=seaweedfs+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* File Sharing / Collaboration Tools */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-cloud-upload"></i> File Sharing / Collaboration Tools
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Nextcloud</h5>
                  <p className="text-muted small mb-2">Complete Collaboration Platform</p>
                  <p className="card-text">
                    File sharing, collaboration, and self-hosted cloud storage platform with apps
                    for productivity, calendar, contacts, and more.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> AGPL (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://nextcloud.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://nextcloud.com/install/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Download
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=nextcloud+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">ownCloud</h5>
                  <p className="text-muted small mb-2">Self-Hosted File Sync</p>
                  <p className="card-text">
                    Self-hosted file sync and share server with enterprise-ready features and strong
                    security options.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> AGPL (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://owncloud.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://owncloud.com/download-server/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Download
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=owncloud+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Recommended</span>
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Syncthing</h5>
                  <p className="text-muted small mb-2">Peer-to-Peer File Sync</p>
                  <p className="card-text">
                    Peer-to-peer file synchronization across devices without central server. Simple,
                    secure, and privacy-focused.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> MPL 2.0 (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://syncthing.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://syncthing.net/downloads/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Download
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=syncthing+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Pydio Cells</h5>
                  <p className="text-muted small mb-2">Enterprise File Sharing</p>
                  <p className="card-text">
                    Enterprise-grade file sharing and synchronization platform with advanced
                    security and collaboration features.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> AGPL (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://pydio.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://pydio.com/en/download"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Download
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=pydio+cells+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">FileRun</h5>
                  <p className="text-muted small mb-2">Web-Based File Manager</p>
                  <p className="card-text">
                    Self-hosted web-based file management and sharing system with intuitive
                    interface and powerful search.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> Free & Commercial
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Web/Server</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://filerun.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://docs.filerun.com/installation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Download
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=filerun+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Cozy Cloud</h5>
                  <p className="text-muted small mb-2">Personal Cloud Platform</p>
                  <p className="card-text">
                    Personal cloud for file storage, sharing, and app hosting with focus on privacy
                    and data ownership.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> AGPL (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://cozy.io/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://docs.cozy.io/en/tutorials/selfhost-debian/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Documentation
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=cozy+cloud+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Seafile</h5>
                  <p className="text-muted small mb-2">High-Performance File Sync</p>
                  <p className="card-text">
                    High-performance file sync and share system with client-server architecture
                    optimized for large files.
                  </p>
                  <p className="text-muted small mb-2">
                    <strong>License:</strong> GPL/Commercial (Open Source)
                  </p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href="https://www.seafile.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm bg-teal-mid text-white hvr-grow"
                    >
                      Visit Website
                    </a>
                    <a
                      href="https://www.seafile.com/en/download/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary hvr-grow"
                    >
                      Download
                    </a>
                    <a
                      href="https://www.youtube.com/results?search_query=seafile+tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger hvr-grow"
                    >
                      YouTube Tutorials
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackupStoragePage