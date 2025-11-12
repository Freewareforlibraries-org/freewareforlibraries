import React from 'react'

const ServerInfraManagement = () => {
  return (
    <div className="d-flex mt-auto mb-auto fade-in">
      <div className="container p-4">   
        <h1 className="display-1 text-teal-mid fw-bolder text-center">Server Infrastructure & Virtualization</h1>
        <p className="fs-5 text-teal-mid text-center mb-3">
          Free and open-source tools for virtualization, deployment automation, and server management
        </p>
        <div className="alert alert-info border-0 shadow-sm mx-auto" style={{maxWidth: '800px'}} role="alert">
          <p className="mb-0 text-center">
            Build and manage robust server infrastructure with these powerful open-source tools for virtualization, 
            automated provisioning, and enterprise-grade server applications—all without expensive proprietary software!
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
                  <td>Complete Virtualization Platform</td>
                  <td>Proxmox VE</td>
                  <td>All-in-one VM and container management</td>
                </tr>
                <tr>
                  <td>Desktop Virtualization</td>
                  <td>VirtualBox</td>
                  <td>Testing and development on workstations</td>
                </tr>
                <tr>
                  <td>Configuration Management</td>
                  <td>Ansible</td>
                  <td>Agentless automation across servers</td>
                </tr>
                <tr>
                  <td>Bare Metal Provisioning</td>
                  <td>MAAS</td>
                  <td>Automated physical server deployment</td>
                </tr>
                <tr>
                  <td>Container Orchestration</td>
                  <td>Kubernetes</td>
                  <td>Managing containerized applications at scale</td>
                </tr>
                <tr>
                  <td>Web Server</td>
                  <td>Nginx, Apache</td>
                  <td>Hosting websites and applications</td>
                </tr>
                <tr>
                  <td>Database Server</td>
                  <td>PostgreSQL, MariaDB</td>
                  <td>Relational data storage and management</td>
                </tr>
                <tr>
                  <td>Load Balancing</td>
                  <td>HAProxy, Traefik</td>
                  <td>Distributing traffic across servers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Virtualization / Hypervisor / Infrastructure */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-hdd-stack"></i> Virtualization / Hypervisor / Infrastructure
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Proxmox VE</h5>
                  <p className="text-muted small mb-2">Complete Virtualization Platform</p>
                  <p className="card-text">KVM and LXC container platform with clustering, storage management, and web-based interface. All-in-one solution for enterprise virtualization.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> AGPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">KVM</span>
                    <span className="badge bg-teal-light text-teal-dark">Containers</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.proxmox.com/en/proxmox-virtual-environment/overview" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.proxmox.com/en/downloads" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=proxmox+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Popular</span>
                    <span className="badge bg-info text-dark">Beginner</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">VirtualBox</h5>
                  <p className="text-muted small mb-2">Desktop Virtualization</p>
                  <p className="card-text">Hosted hypervisor for desktops and small servers. Ideal for testing, development, and running multiple operating systems on workstations.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Windows</span>
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">macOS</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.virtualbox.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.virtualbox.org/wiki/Downloads" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=virtualbox+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">KVM</h5>
                  <p className="text-muted small mb-2">Linux Kernel Hypervisor</p>
                  <p className="card-text">Kernel-based Virtual Machine built into the Linux kernel. Type-1 hypervisor offering near-native performance for enterprise virtualization.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.linux-kvm.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.linux-kvm.org/page/Downloads" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Documentation</a>
                    <a href="https://www.youtube.com/results?search_query=kvm+virtualization+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Xen Project</h5>
                  <p className="text-muted small mb-2">Type-1 Hypervisor</p>
                  <p className="card-text">Enterprise-grade Type-1 hypervisor supporting paravirtualization and hardware-assisted virtualization. Powers many cloud platforms.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://xenproject.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://xenproject.org/downloads/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=xen+hypervisor+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
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
                  <h5 className="card-title text-teal-mid fw-bold">QEMU</h5>
                  <p className="text-muted small mb-2">Machine Emulator & Virtualizer</p>
                  <p className="card-text">Generic machine emulator and virtualizer, often used with KVM. Supports numerous architectures and guest operating systems.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.qemu.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.qemu.org/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=qemu+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">oVirt</h5>
                  <p className="text-muted small mb-2">Distributed Virtualization Management</p>
                  <p className="card-text">Enterprise virtualization management platform built on KVM. Features live migration, high availability, and centralized management.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">KVM</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.ovirt.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.ovirt.org/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=ovirt+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
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
                  <h5 className="card-title text-teal-mid fw-bold">Libvirt</h5>
                  <p className="text-muted small mb-2">Virtualization API & Toolset</p>
                  <p className="card-text">Unified API and management toolset for multiple virtualization platforms including KVM, QEMU, Xen, and more.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> LGPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://libvirt.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://libvirt.org/downloads.html" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=libvirt+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Ganeti</h5>
                  <p className="text-muted small mb-2">VM Cluster Management</p>
                  <p className="card-text">Cluster virtual server management tool for KVM, Xen, and LXC. Handles migrations, disk management, and cluster operations.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> BSD (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.ganeti.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://github.com/ganeti/ganeti" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">GitHub</a>
                    <a href="https://www.youtube.com/results?search_query=ganeti+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
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
                  <h5 className="card-title text-teal-mid fw-bold">Kimchi</h5>
                  <p className="text-muted small mb-2">Web-based KVM Management</p>
                  <p className="card-text">HTML5 web interface for managing KVM virtual machines. Simple and user-friendly interface for basic VM operations.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> LGPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">Web UI</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://github.com/kimchi-project/kimchi" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit GitHub</a>
                    <a href="https://github.com/kimchi-project/kimchi/releases" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=kimchi+kvm+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
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
                  <h5 className="card-title text-teal-mid fw-bold">Harvester</h5>
                  <p className="text-muted small mb-2">Bare-metal VM Platform</p>
                  <p className="card-text">Kubernetes-based hyperconverged infrastructure for bare-metal VM deployment with integrated storage and networking.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">Kubernetes</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://harvesterhci.io/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://github.com/harvester/harvester" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">GitHub</a>
                    <a href="https://www.youtube.com/results?search_query=harvester+hci+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
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
                  <h5 className="card-title text-teal-mid fw-bold">Open vSwitch</h5>
                  <p className="text-muted small mb-2">Virtual Networking Switch</p>
                  <p className="card-text">Production-quality virtual switch designed for VM environments. Supports VLANs, tunneling, QoS, and advanced networking features.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">Networking</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.openvswitch.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.openvswitch.org/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=open+vswitch+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment / Provisioning / Automation */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-gear-wide-connected"></i> Deployment / Provisioning / Automation
          </h2>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Ansible</h5>
                  <p className="text-muted small mb-2">Agentless Automation Engine</p>
                  <p className="card-text">Simple, agentless automation for configuration management, application deployment, and orchestration using SSH. YAML-based playbooks.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.ansible.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://docs.ansible.com/ansible/latest/installation_guide/index.html" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Install Guide</a>
                    <a href="https://www.youtube.com/results?search_query=ansible+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
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
                  <h5 className="card-title text-teal-mid fw-bold">Puppet</h5>
                  <p className="text-muted small mb-2">Configuration Management</p>
                  <p className="card-text">Agent-based server automation and configuration management. Declarative approach to defining system state and enforcing compliance.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.puppet.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.puppet.com/docs/puppet/latest/installing_puppet.html" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Install Guide</a>
                    <a href="https://www.youtube.com/results?search_query=puppet+automation+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
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
                  <h5 className="card-title text-teal-mid fw-bold">Salt Open</h5>
                  <p className="text-muted small mb-2">Infrastructure Orchestration</p>
                  <p className="card-text">High-speed infrastructure automation and orchestration tool. Event-driven architecture for real-time configuration management.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://saltproject.io/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://docs.saltproject.io/salt/install-guide/en/latest/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Install Guide</a>
                    <a href="https://www.youtube.com/results?search_query=saltstack+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Foreman</h5>
                  <p className="text-muted small mb-2">Provisioning & Lifecycle Management</p>
                  <p className="card-text">Complete lifecycle management for physical and virtual servers. Integrates with Puppet, Ansible, and provisioning tools.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://theforeman.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://theforeman.org/manuals/latest/index.html" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Documentation</a>
                    <a href="https://www.youtube.com/results?search_query=foreman+provisioning+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
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
                  <h5 className="card-title text-teal-mid fw-bold">MAAS</h5>
                  <p className="text-muted small mb-2">Metal as a Service</p>
                  <p className="card-text">Automated provisioning of bare-metal servers. PXE boot, OS deployment, and server inventory management for physical infrastructure.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> AGPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">Bare Metal</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://maas.io/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://maas.io/docs" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Documentation</a>
                    <a href="https://www.youtube.com/results?search_query=maas+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
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
                  <h5 className="card-title text-teal-mid fw-bold">Juju</h5>
                  <p className="text-muted small mb-2">Application Modeling & Orchestration</p>
                  <p className="card-text">Model-driven application orchestration across multiple clouds and bare metal. Simplifies complex application deployments.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> AGPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://juju.is/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://juju.is/docs" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Documentation</a>
                    <a href="https://www.youtube.com/results?search_query=juju+orchestration+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
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
                  <h5 className="card-title text-teal-mid fw-bold">Capistrano</h5>
                  <p className="text-muted small mb-2">Deployment Automation</p>
                  <p className="card-text">Remote server automation tool for executing scripts and tasks across multiple servers. Popular for web application deployments.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> MIT (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Ruby</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://capistranorb.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://github.com/capistrano/capistrano" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">GitHub</a>
                    <a href="https://www.youtube.com/results?search_query=capistrano+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Crossplane</h5>
                  <p className="text-muted small mb-2">Infrastructure via Kubernetes</p>
                  <p className="card-text">Manages cloud infrastructure resources using Kubernetes Custom Resource Definitions. Control plane for multi-cloud infrastructure.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Kubernetes</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.crossplane.io/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://docs.crossplane.io/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Documentation</a>
                    <a href="https://www.youtube.com/results?search_query=crossplane+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">ManageIQ</h5>
                  <p className="text-muted small mb-2">Cloud & Virtualization Management</p>
                  <p className="card-text">Unified management platform for cloud and virtualization environments. Provisioning, monitoring, and automation across multiple platforms.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.manageiq.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.manageiq.org/docs/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Documentation</a>
                    <a href="https://www.youtube.com/results?search_query=manageiq+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">OpenStack</h5>
                  <p className="text-muted small mb-2">Cloud Platform</p>
                  <p className="card-text">Complete cloud computing platform for deploying VMs, networking, and storage. Build private and public clouds at any scale.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                    <span className="badge bg-teal-light text-teal-dark">Cloud</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.openstack.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://docs.openstack.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Documentation</a>
                    <a href="https://www.youtube.com/results?search_query=openstack+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Server Tools */}
        <div className="mb-5">
          <h2 className="text-teal-mid fw-bolder mb-3">
            <i className="bi bi-server"></i> Server Tools
          </h2>
          
          {/* Web Servers */}
          <h3 className="text-teal-mid fw-bold mb-3 mt-4">Web Servers</h3>
          <div className="row g-3 mb-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Nginx</h5>
                  <p className="text-muted small mb-2">High-Performance Web Server</p>
                  <p className="card-text">High-performance web server, reverse proxy, and load balancer. Known for efficiency, low resource usage, and handling concurrent connections.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> BSD (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://nginx.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://nginx.org/en/download.html" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=nginx+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Apache HTTP Server</h5>
                  <p className="text-muted small mb-2">Classic Web Server</p>
                  <p className="card-text">Mature, feature-rich web server powering millions of websites. Extensive module ecosystem and .htaccess configuration support.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://httpd.apache.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://httpd.apache.org/download.cgi" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=apache+web+server+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
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
                  <h5 className="card-title text-teal-mid fw-bold">Caddy</h5>
                  <p className="text-muted small mb-2">Modern Web Server</p>
                  <p className="card-text">Modern web server with automatic HTTPS via Let's Encrypt. Simple configuration and built-in security features out of the box.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://caddyserver.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://caddyserver.com/download" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=caddy+server+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Servers */}
          <h3 className="text-teal-mid fw-bold mb-3 mt-4">Application Servers</h3>
          <div className="row g-3 mb-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Tomcat</h5>
                  <p className="text-muted small mb-2">Java Servlet Container</p>
                  <p className="card-text">Open-source Java servlet container for hosting Java web applications. Lightweight implementation of Java EE specifications.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                    <span className="badge bg-teal-light text-teal-dark">Java</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://tomcat.apache.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://tomcat.apache.org/download-10.cgi" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=tomcat+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">WildFly</h5>
                  <p className="text-muted small mb-2">Java EE Application Server</p>
                  <p className="card-text">Lightweight, modular Java EE application server (formerly JBoss). Full Jakarta EE support for enterprise applications.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> LGPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                    <span className="badge bg-teal-light text-teal-dark">Java</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.wildfly.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.wildfly.org/downloads/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=wildfly+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Database Servers */}
          <h3 className="text-teal-mid fw-bold mb-3 mt-4">Database Servers</h3>
          <div className="row g-3 mb-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Recommended</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">PostgreSQL</h5>
                  <p className="text-muted small mb-2">Advanced Relational Database</p>
                  <p className="card-text">Powerful, standards-compliant relational database with advanced features. JSON support, full-text search, and strong data integrity.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> PostgreSQL License (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.postgresql.org/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=postgresql+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">MariaDB</h5>
                  <p className="text-muted small mb-2">MySQL-Compatible Database</p>
                  <p className="card-text">Drop-in MySQL replacement with enhanced performance, additional features, and active development. Compatible with MySQL applications.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://mariadb.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://mariadb.org/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=mariadb+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
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
                  <h5 className="card-title text-teal-mid fw-bold">MongoDB</h5>
                  <p className="text-muted small mb-2">Document-Oriented NoSQL</p>
                  <p className="card-text">Flexible document database storing JSON-like documents. Horizontal scaling, rich query language, and schema-less design.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> SSPL (Community Edition)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                    <span className="badge bg-teal-light text-teal-dark">NoSQL</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.mongodb.com/community" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.mongodb.com/try/download/community" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=mongodb+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
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
                  <h5 className="card-title text-teal-mid fw-bold">CouchDB</h5>
                  <p className="text-muted small mb-2">Document-Oriented NoSQL</p>
                  <p className="card-text">Distributed NoSQL database with HTTP API, multi-master replication, and offline-first sync capabilities. RESTful JSON document storage.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                    <span className="badge bg-teal-light text-teal-dark">NoSQL</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://couchdb.apache.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://couchdb.apache.org/#download" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=couchdb+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cache & Key-Value Stores */}
          <h3 className="text-teal-mid fw-bold mb-3 mt-4">Cache & Key-Value Stores</h3>
          <div className="row g-3 mb-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Redis</h5>
                  <p className="text-muted small mb-2">In-Memory Data Store</p>
                  <p className="card-text">High-performance in-memory key-value store supporting strings, hashes, lists, sets, and more. Used for caching, sessions, and real-time analytics.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> BSD (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://redis.io/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://redis.io/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=redis+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
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
                  <h5 className="card-title text-teal-mid fw-bold">Memcached</h5>
                  <p className="text-muted small mb-2">Distributed Memory Caching</p>
                  <p className="card-text">Simple, high-performance distributed memory caching system. Reduces database load by caching data and objects in RAM.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> BSD (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://memcached.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://memcached.org/downloads" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=memcached+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Container & Orchestration */}
          <h3 className="text-teal-mid fw-bold mb-3 mt-4">Container & Orchestration</h3>
          <div className="row g-3 mb-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Docker Engine</h5>
                  <p className="text-muted small mb-2">Container Runtime</p>
                  <p className="card-text">Industry-standard container runtime for building, shipping, and running containerized applications. Lightweight virtualization alternative.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.docker.com/products/docker-engine/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://docs.docker.com/engine/install/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Install Guide</a>
                    <a href="https://www.youtube.com/results?search_query=docker+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Industry Standard</span>
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Kubernetes</h5>
                  <p className="text-muted small mb-2">Container Orchestration</p>
                  <p className="card-text">Production-grade container orchestration platform for automating deployment, scaling, and management of containerized applications.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> Apache 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://kubernetes.io/docs/setup/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Setup Guide</a>
                    <a href="https://www.youtube.com/results?search_query=kubernetes+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Load Balancing & Proxies */}
          <h3 className="text-teal-mid fw-bold mb-3 mt-4">Load Balancing & Proxies</h3>
          <div className="row g-3 mb-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">HAProxy</h5>
                  <p className="text-muted small mb-2">TCP/HTTP Load Balancer</p>
                  <p className="card-text">High-performance TCP/HTTP load balancer and proxy server. Distributes workloads across multiple servers with health checking and failover.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL/LGPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.haproxy.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.haproxy.org/#down" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=haproxy+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
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
                  <h5 className="card-title text-teal-mid fw-bold">Traefik</h5>
                  <p className="text-muted small mb-2">Cloud-Native Proxy</p>
                  <p className="card-text">Modern HTTP reverse proxy and load balancer for microservices. Automatic service discovery, Let's Encrypt integration, and Docker support.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> MIT (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://traefik.io/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://doc.traefik.io/traefik/getting-started/install-traefik/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Install Guide</a>
                    <a href="https://www.youtube.com/results?search_query=traefik+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* File & Directory Services */}
          <h3 className="text-teal-mid fw-bold mb-3 mt-4">File & Directory Services</h3>
          <div className="row g-3 mb-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Essential</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">Samba</h5>
                  <p className="text-muted small mb-2">SMB/CIFS File Server</p>
                  <p className="card-text">File and print server implementing SMB/CIFS protocol. Enables seamless file sharing between Linux/Unix and Windows systems.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> GPL (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Linux</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.samba.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.samba.org/samba/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=samba+server+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-danger text-white">Advanced</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">OpenLDAP</h5>
                  <p className="text-muted small mb-2">Directory Server</p>
                  <p className="card-text">Open-source LDAP directory server for centralized authentication and identity management. Used for user accounts and organizational data.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> OpenLDAP Public License (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.openldap.org/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.openldap.org/software/download/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=openldap+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message Brokers */}
          <h3 className="text-teal-mid fw-bold mb-3 mt-4">Message Brokers</h3>
          <div className="row g-3 mb-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">Most Popular</span>
                    <span className="badge bg-success">Intermediate</span>
                  </div>
                  <h5 className="card-title text-teal-mid fw-bold">RabbitMQ</h5>
                  <p className="text-muted small mb-2">Message Broker</p>
                  <p className="card-text">Robust message broker supporting multiple messaging protocols. Queue management, routing, and reliable message delivery for distributed systems.</p>
                  <p className="text-muted small mb-2"><strong>License:</strong> MPL 2.0 (Open Source)</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-teal-light text-teal-dark">Multi-platform</span>
                  </div>
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a href="https://www.rabbitmq.com/" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm bg-teal-mid text-white hvr-grow">Visit Website</a>
                    <a href="https://www.rabbitmq.com/download.html" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-secondary hvr-grow">Download</a>
                    <a href="https://www.youtube.com/results?search_query=rabbitmq+tutorial" target="_blank" rel="noopener noreferrer" 
                       className="btn btn-sm btn-outline-danger hvr-grow">YouTube Tutorials</a>
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

export default ServerInfraManagement