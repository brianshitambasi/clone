// components/JobsPage.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Form, InputGroup, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt, FaBriefcase, FaDollarSign, FaGraduationCap, FaHeart } from 'react-icons/fa';

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [savedJobs, setSavedJobs] = useState([]);
  const jobsPerPage = 5;

  const jobs = [
    { 
      id: 1,
      title: 'Senior Cloud Architect', 
      description: 'Lead cloud migration projects for Kenyan enterprises moving to AWS and Azure platforms. Design scalable cloud solutions and mentor junior engineers.',
      location: 'Nairobi, Kenya', 
      type: 'Full-time',
      salary: 'KES 250K - 350K',
      experience: '5-7 years',
      department: 'Cloud Engineering',
      posted: '2 days ago',
      applicants: 12,
      featured: true,
      requirements: ['AWS/Azure Certification', '5+ years experience', 'Terraform', 'Kubernetes'],
      benefits: ['Health Insurance', 'Hybrid Work', 'Certification Budget', 'Competitive Salary']
    },
    { 
      id: 2,
      title: 'Salesforce Consultant', 
      description: 'Implement Salesforce solutions for Kenyan NGOs, banks, and telecom companies. Configure workflows and train users.',
      location: 'Nairobi, Kenya', 
      type: 'Full-time',
      salary: 'KES 180K - 280K',
      experience: '3-5 years',
      department: 'CRM Practice',
      posted: '3 days ago',
      applicants: 8,
      featured: true,
      requirements: ['Salesforce Certified', '3+ years experience', 'Apex Knowledge', 'Client-facing skills'],
      benefits: ['Remote Options', 'Certification Bonuses', 'Health Insurance', 'Flexible Hours']
    },
    { 
      id: 3,
      title: 'DevOps Engineer', 
      description: 'Build CI/CD pipelines and manage cloud infrastructure for Kenyan clients. Automate deployments and ensure system reliability.',
      location: 'Nairobi, Kenya', 
      type: 'Full-time',
      salary: 'KES 200K - 300K',
      experience: '3-5 years',
      department: 'Platform Engineering',
      posted: '5 days ago',
      applicants: 15,
      featured: false,
      requirements: ['Jenkins/GitLab CI', 'Docker/K8s', 'AWS/Azure', 'Terraform'],
      benefits: ['Competitive Pay', 'Flexible Hours', 'Cloud Certification', 'Performance Bonuses']
    },
    { 
      id: 4,
      title: 'Data Analytics Specialist', 
      description: 'Create dashboards and reports using Power BI for Kenyan businesses. Transform data into actionable insights.',
      location: 'Remote', 
      type: 'Full-time',
      salary: 'KES 150K - 220K',
      experience: '2-4 years',
      department: 'Data & Analytics',
      posted: '1 week ago',
      applicants: 20,
      featured: false,
      requirements: ['Power BI/Tableau', 'SQL', '2+ years experience', 'Data Visualization'],
      benefits: ['Remote Work', 'Training Opportunities', 'Career Growth', 'Flexible Schedule']
    }
  ];

  // Load saved jobs from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('savedJobs');
    if (saved) {
      setSavedJobs(JSON.parse(saved));
    }
  }, []);

  // Save job to localStorage
  const toggleSaveJob = (jobId) => {
    let newSaved;
    if (savedJobs.includes(jobId)) {
      newSaved = savedJobs.filter(id => id !== jobId);
    } else {
      newSaved = [...savedJobs, jobId];
    }
    setSavedJobs(newSaved);
    localStorage.setItem('savedJobs', JSON.stringify(newSaved));
  };

  // Filter jobs
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesType = selectedType === 'all' || job.type === selectedType;
    return matchesSearch && matchesLocation && matchesType;
  });

  // Pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const locations = ['all', 'Nairobi, Kenya', 'Remote'];
  const jobTypes = ['all', 'Full-time', 'Contract'];

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      {/* Hero Section */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px' }}>Join Our Team</h1>
              <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.95 }}>
                Build the future of enterprise technology with us. We're looking for passionate individuals to join our growing team in Kenya.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '40px 0', backgroundColor: '#111' }}>
        <Container>
          <Row>
            <Col md={3} className="text-center mb-3">
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#667eea' }}>{jobs.length}+</div>
              <div style={{ color: '#aaa' }}>Open Positions</div>
            </Col>
            <Col md={3} className="text-center mb-3">
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#764ba2' }}>10+</div>
              <div style={{ color: '#aaa' }}>Years Combined Experience</div>
            </Col>
            <Col md={3} className="text-center mb-3">
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#f093fb' }}>95%</div>
              <div style={{ color: '#aaa' }}>Client Satisfaction</div>
            </Col>
            <Col md={3} className="text-center mb-3">
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#4facfe' }}>30+</div>
              <div style={{ color: '#aaa' }}>Happy Clients</div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Content */}
      <Container style={{ padding: '60px 0' }}>
        
        {/* Search and Filter Section */}
        <Row className="mb-4">
          <Col lg={8} className="mx-auto">
            <InputGroup style={{ marginBottom: '20px' }}>
              <InputGroup.Text style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#667eea' }}>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search jobs by title, department, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: 'white' }}
              />
            </InputGroup>
            <Row>
              <Col md={6} className="mb-3">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaMapMarkerAlt style={{ color: '#667eea' }} />
                  <Form.Select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: 'white' }}
                  >
                    {locations.map(loc => (
                      <option key={loc} value={loc}>{loc === 'all' ? 'All Locations' : loc}</option>
                    ))}
                  </Form.Select>
                </div>
              </Col>
              <Col md={6} className="mb-3">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaBriefcase style={{ color: '#667eea' }} />
                  <Form.Select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: 'white' }}
                  >
                    {jobTypes.map(type => (
                      <option key={type} value={type}>{type === 'all' ? 'All Job Types' : type}</option>
                    ))}
                  </Form.Select>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Results Count */}
        <Row className="mb-4">
          <Col>
            <p style={{ color: '#aaa' }}>
              Showing <strong style={{ color: '#667eea' }}>{currentJobs.length}</strong> of{' '}
              <strong style={{ color: '#667eea' }}>{filteredJobs.length}</strong> positions
            </p>
          </Col>
        </Row>

        {/* Job Listings */}
        <Row>
          <Col lg={8} className="mx-auto">
            {currentJobs.map((job, index) => (
              <Card key={index} className="mb-4" style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', overflow: 'hidden', position: 'relative' }}>
                {job.featured && (
                  <div style={{ position: 'absolute', top: 20, right: 20, backgroundColor: '#667eea', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600', zIndex: 1 }}>
                    Featured
                  </div>
                )}
                <Card.Body style={{ padding: '30px' }}>
                  <Row>
                    <Col md={8}>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '10px', color: '#667eea' }}>{job.title}</h3>
                      <p style={{ color: '#ccc', marginBottom: '15px', lineHeight: '1.6' }}>{job.description}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '15px' }}>
                        <Badge bg="primary" style={{ padding: '6px 12px', borderRadius: '20px' }}>
                          <FaMapMarkerAlt style={{ marginRight: '5px' }} /> {job.location}
                        </Badge>
                        <Badge bg="info" style={{ padding: '6px 12px', borderRadius: '20px' }}>
                          <FaBriefcase style={{ marginRight: '5px' }} /> {job.type}
                        </Badge>
                        <Badge bg="success" style={{ padding: '6px 12px', borderRadius: '20px' }}>
                          <FaDollarSign style={{ marginRight: '5px' }} /> {job.salary}
                        </Badge>
                        <Badge bg="warning" style={{ padding: '6px 12px', borderRadius: '20px', color: '#000' }}>
                          <FaGraduationCap style={{ marginRight: '5px' }} /> {job.experience}
                        </Badge>
                      </div>
                      <div style={{ display: 'flex', gap: '15px', color: '#888', fontSize: '0.85rem' }}>
                        <span>📅 Posted {job.posted}</span>
                        <span>👥 {job.applicants} applicants</span>
                        <span>🏢 {job.department}</span>
                      </div>
                    </Col>
                    <Col md={4} className="d-flex align-items-center justify-content-md-end mt-3 mt-md-0" style={{ gap: '10px' }}>
                      <Button
                        variant="outline-primary"
                        onClick={() => toggleSaveJob(job.id)}
                        style={{ borderRadius: '50px', padding: '10px 15px' }}
                      >
                        <FaHeart color={savedJobs.includes(job.id) ? '#e74c3c' : '#667eea'} />
                      </Button>
                      <Button
                        as={Link}
                        to={`/apply/${job.id}`}
                        variant="primary"
                        style={{ borderRadius: '50px', padding: '10px 25px', background: 'linear-gradient(135deg, #667eea, #764ba2)', border: 'none' }}
                      >
                        Apply Now →
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-4">
                <Pagination>
                  <Pagination.Prev onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} />
                  {[...Array(totalPages)].map((_, idx) => (
                    <Pagination.Item
                      key={idx}
                      active={idx + 1 === currentPage}
                      onClick={() => setCurrentPage(idx + 1)}
                    >
                      {idx + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} />
                </Pagination>
              </div>
            )}
            
            {/* No Results */}
            {currentJobs.length === 0 && (
              <div className="text-center" style={{ padding: '60px' }}>
                <h3>No jobs found</h3>
                <p style={{ color: '#aaa' }}>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </Col>
        </Row>

        {/* Perks Section */}
        <Row style={{ marginTop: '60px' }}>
          <Col>
            <div style={{ background: 'linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)', borderRadius: '20px', padding: '50px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#667eea' }}>Why Join MJ&Roberts?</h2>
              <Row style={{ marginTop: '30px' }}>
                <Col md={3} sm={6} className="mb-4">
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🏥</div>
                  <h5>Health Benefits</h5>
                  <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Comprehensive medical coverage</p>
                </Col>
                <Col md={3} sm={6} className="mb-4">
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💰</div>
                  <h5>Competitive Pay</h5>
                  <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Top Kenyan market salaries</p>
                </Col>
                <Col md={3} sm={6} className="mb-4">
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🏠</div>
                  <h5>Hybrid Work</h5>
                  <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Office + remote flexibility</p>
                </Col>
                <Col md={3} sm={6} className="mb-4">
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📚</div>
                  <h5>Learning Budget</h5>
                  <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Certification reimbursement</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JobsPage;