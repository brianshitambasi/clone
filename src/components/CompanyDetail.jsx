// components/CompanyDetail.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, Badge, Accordion, ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { 
  FaArrowLeft, FaCheckCircle, FaHandshake, 
  FaRocket, FaLightbulb, FaChartLine, FaGlobe, FaAward,
  FaNewspaper, FaBriefcase, FaGraduationCap, FaHeart,
  FaEnvelope, FaPhone, FaLinkedin, FaTwitter, 
  FaCalendarAlt, FaStar
} from 'react-icons/fa';

const CompanyDetail = () => {
  const { id } = useParams();

  // Company details based on the dropdown selection
  const companyDetails = {
    overview: {
      title: 'Company Overview',
      icon: <FaGlobe size={40} />,
      content: (
        <>
          <h3>About MJ & Roberts Consulting</h3>
          <p>MJ & Roberts Consulting is a premier technology consulting firm specializing in digital transformation, cloud architecture, and enterprise solutions. Founded in 2021, we've rapidly grown to become a trusted partner for businesses across the globe.</p>
          
          <h4 className="mt-4">Our Vision</h4>
          <p>To be the global leader in engineering resilient enterprises through innovative technology solutions and architectural excellence.</p>
          
          <h4 className="mt-4">Our Values</h4>
          <Row className="mt-3">
            <Col md={6}>
              <div className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-success me-2" />
                <span>Excellence in Everything</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-success me-2" />
                <span>Innovation First</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-success me-2" />
                <span>Client Success</span>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-success me-2" />
                <span>Integrity & Trust</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-success me-2" />
                <span>Collaborative Growth</span>
              </div>
            </Col>
          </Row>

          <h4 className="mt-4">Key Facts</h4>
          <Row className="mt-3">
            <Col md={3} className="mb-3">
              <Card className="text-center p-3 bg-dark">
                <h3 className="text-primary">100+</h3>
                <p>Projects Completed</p>
              </Card>
            </Col>
            <Col md={3} className="mb-3">
              <Card className="text-center p-3 bg-dark">
                <h3 className="text-primary">50+</h3>
                <p>Expert Team</p>
              </Card>
            </Col>
            <Col md={3} className="mb-3">
              <Card className="text-center p-3 bg-dark">
                <h3 className="text-primary">10+</h3>
                <p>Countries</p>
              </Card>
            </Col>
            <Col md={3} className="mb-3">
              <Card className="text-center p-3 bg-dark">
                <h3 className="text-primary">98%</h3>
                <p>Satisfaction</p>
              </Card>
            </Col>
          </Row>
        </>
      )
    },
    approach: {
      title: 'Our Approach',
      icon: <FaRocket size={40} />,
      content: (
        <>
          <h3>How We Deliver Excellence</h3>
          <p>Our proven methodology ensures successful outcomes for every client engagement. We combine strategic thinking with technical expertise to deliver transformative results.</p>
          
          <h4 className="mt-4">The Well-Architected Framework</h4>
          <Row className="mt-3">
            <Col md={4} className="mb-3">
              <Card className="h-100 bg-dark">
                <Card.Body className="text-center">
                  <FaChartLine size={30} className="text-primary mb-3" />
                  <h5>Operational Excellence</h5>
                  <p className="small">Run and monitor systems to deliver business value</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="h-100 bg-dark">
                <Card.Body className="text-center">
                  <div style={{ fontSize: '30px', color: '#667eea', marginBottom: '16px' }}>🛡️</div>
                  <h5>Security</h5>
                  <p className="small">Protect information and systems</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="h-100 bg-dark">
                <Card.Body className="text-center">
                  <FaCheckCircle size={30} className="text-primary mb-3" />
                  <h5>Reliability</h5>
                  <p className="small">Recover from failures and meet demands</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <h4 className="mt-4">Our Process</h4>
          <Accordion defaultActiveKey="0" className="mt-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>1. Discovery & Assessment</Accordion.Header>
              <Accordion.Body>
                We begin by understanding your business goals, challenges, and current technology landscape. This phase includes stakeholder interviews, system audits, and requirements gathering.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>2. Strategy & Planning</Accordion.Header>
              <Accordion.Body>
                Based on our findings, we develop a comprehensive roadmap outlining the solutions, timeline, and expected outcomes. We prioritize quick wins and long-term transformations.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>3. Implementation & Delivery</Accordion.Header>
              <Accordion.Body>
                Our agile teams execute the plan using industry best practices, continuous integration, and regular client feedback loops to ensure alignment with your expectations.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>4. Optimization & Support</Accordion.Header>
              <Accordion.Body>
                Post-implementation, we provide ongoing support, monitoring, and optimization to ensure your systems continue to perform at peak efficiency.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      )
    },
    partnerships: {
      title: 'Partnerships',
      icon: <FaHandshake size={40} />,
      content: (
        <>
          <h3>Strategic Technology Partners</h3>
          <p>We've built strong relationships with leading technology providers to deliver best-in-class solutions to our clients.</p>
          
          <Row className="mt-4">
            <Col md={6} className="mb-4">
              <Card className="h-100 bg-dark">
                <Card.Body className="text-center">
                  <FaAward size={50} className="text-primary mb-3" />
                  <h4>AWS Premier Partner</h4>
                  <Badge bg="warning" className="mb-3">Premier Tier</Badge>
                  <p>As an AWS Premier Partner, we have deep expertise in cloud migration, architecture, and optimization. Our team holds over 50 AWS certifications.</p>
                  <ul className="text-start">
                    <li>Migration Competency</li>
                    <li>DevOps Competency</li>
                    <li>Data & Analytics Competency</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100 bg-dark">
                <Card.Body className="text-center">
                  <FaStar size={50} className="text-primary mb-3" />
                  <h4>Salesforce Platinum Partner</h4>
                  <Badge bg="warning" className="mb-3">Platinum Tier</Badge>
                  <p>Our Salesforce practice delivers transformative CRM and cloud solutions that drive customer success and business growth.</p>
                  <ul className="text-start">
                    <li>Sales Cloud Specialization</li>
                    <li>Service Cloud Specialization</li>
                    <li>Nonprofit Cloud Expertise</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100 bg-dark">
                <Card.Body className="text-center">
                  <FaGlobe size={50} className="text-primary mb-3" />
                  <h4>Oracle Gold Partner</h4>
                  <Badge bg="warning" className="mb-3">Gold Tier</Badge>
                  <p>We deliver enterprise-grade solutions using Oracle's comprehensive suite of cloud applications and infrastructure.</p>
                  <ul className="text-start">
                    <li>Oracle Cloud Infrastructure</li>
                    <li>Fusion Applications</li>
                    <li>NetSuite Solutions</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100 bg-dark">
                <Card.Body className="text-center">
                  <FaLightbulb size={50} className="text-primary mb-3" />
                  <h4>Microsoft Gold Partner</h4>
                  <Badge bg="warning" className="mb-3">Gold Tier</Badge>
                  <p>Our Microsoft partnership enables us to deliver cutting-edge solutions using Azure, Dynamics 365, and Power Platform.</p>
                  <ul className="text-start">
                    <li>Azure Solutions Architect</li>
                    <li>Dynamics 365</li>
                    <li>Power BI & Analytics</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )
    },
    careers: {
      title: 'Careers',
      icon: <FaBriefcase size={40} />,
      content: (
        <>
          <h3>Join Our Growing Team</h3>
          <p>We're always looking for talented individuals who share our passion for technology and innovation. At MJ & Roberts Consulting, you'll work on challenging projects with industry experts.</p>
          
          <h4 className="mt-4">Why Join Us?</h4>
          <Row className="mt-3">
            <Col md={4} className="mb-3">
              <Card className="text-center h-100 bg-dark">
                <Card.Body>
                  <FaRocket size={30} className="text-primary mb-3" />
                  <h5>Growth Opportunities</h5>
                  <p>Continuous learning and career advancement with mentorship programs</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="text-center h-100 bg-dark">
                <Card.Body>
                  <FaHeart size={30} className="text-primary mb-3" />
                  <h5>Great Culture</h5>
                  <p>Collaborative, inclusive environment that values work-life balance</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="text-center h-100 bg-dark">
                <Card.Body>
                  <FaGraduationCap size={30} className="text-primary mb-3" />
                  <h5>Learning & Development</h5>
                  <p>Certification programs and continuous learning opportunities</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <h4 className="mt-4">Open Positions</h4>
          <Accordion className="mt-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Senior Cloud Architect</Accordion.Header>
              <Accordion.Body>
                <p><strong>Location:</strong> Nairobi, Kenya | <strong>Type:</strong> Full-time</p>
                <p>Lead cloud migration projects and design scalable architecture solutions. 5+ years experience with AWS or Azure required.</p>
                <Button variant="primary" size="sm">Apply Now</Button>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Salesforce Consultant</Accordion.Header>
              <Accordion.Body>
                <p><strong>Location:</strong> Remote | <strong>Type:</strong> Full-time</p>
                <p>Implement and customize Salesforce solutions for enterprise clients. Salesforce certification required.</p>
                <Button variant="primary" size="sm">Apply Now</Button>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>DevOps Engineer</Accordion.Header>
              <Accordion.Body>
                <p><strong>Location:</strong> Nairobi, Kenya | <strong>Type:</strong> Full-time</p>
                <p>Build and maintain CI/CD pipelines, automate infrastructure, and ensure system reliability.</p>
                <Button variant="primary" size="sm">Apply Now</Button>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Data Analytics Specialist</Accordion.Header>
              <Accordion.Body>
                <p><strong>Location:</strong> Remote | <strong>Type:</strong> Contract</p>
                <p>Develop data visualization dashboards and analytics solutions using Power BI or Tableau.</p>
                <Button variant="primary" size="sm">Apply Now</Button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div className="mt-4 p-4 bg-dark rounded">
            <h5>Don't see the right position?</h5>
            <p>Send us your resume and we'll keep you in mind for future opportunities.</p>
            <Button variant="outline-primary">Submit General Application</Button>
          </div>
        </>
      )
    },
    news: {
      title: 'News & Press',
      icon: <FaNewspaper size={40} />,
      content: (
        <>
          <h3>Latest News and Announcements</h3>
          <p>Stay updated with the latest developments at MJ & Roberts Consulting.</p>
          
          <Row className="mt-4">
            <Col md={6} className="mb-4">
              <Card className="h-100 bg-dark">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FaCalendarAlt className="text-primary me-2" />
                    <small>March 15, 2024</small>
                  </div>
                  <h4>MJ & Roberts Named AWS Premier Partner</h4>
                  <p>We're proud to announce our promotion to AWS Premier Partner status, recognizing our deep expertise in cloud transformation.</p>
                  <Button variant="link" className="text-primary p-0">Read More →</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100 bg-dark">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FaCalendarAlt className="text-primary me-2" />
                    <small>February 10, 2024</small>
                  </div>
                  <h4>Expanding to New Markets</h4>
                  <p>MJ & Roberts Consulting opens new offices in London and Singapore to better serve our global clients.</p>
                  <Button variant="link" className="text-primary p-0">Read More →</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100 bg-dark">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FaCalendarAlt className="text-primary me-2" />
                    <small>January 20, 2024</small>
                  </div>
                  <h4>Recognized as Top Workplace 2024</h4>
                  <p>We're honored to be named one of the best places to work, reflecting our commitment to employee satisfaction.</p>
                  <Button variant="link" className="text-primary p-0">Read More →</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100 bg-dark">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FaCalendarAlt className="text-primary me-2" />
                    <small>December 5, 2023</small>
                  </div>
                  <h4>Launch of AI Innovation Lab</h4>
                  <p>New center of excellence focused on developing cutting-edge AI solutions for enterprise clients.</p>
                  <Button variant="link" className="text-primary p-0">Read More →</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="mt-4 p-4 bg-dark rounded text-center">
            <h5>Media Inquiries</h5>
            <p>For press inquiries, please contact our media relations team.</p>
            <Button variant="primary">Contact Media Relations</Button>
          </div>
        </>
      )
    }
  };

  // Get the details for the selected id, default to overview
  const details = companyDetails[id] || companyDetails.overview;

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '60px 0', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <Container>
          <Button 
            as={Link} 
            to="/company" 
            variant="light" 
            style={{ 
              marginBottom: '30px',
              borderRadius: '50px'
            }}
          >
            <FaArrowLeft className="me-2" /> Back to Company
          </Button>
          <Row>
            <Col>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {details.icon}
                </div>
                <div>
                  <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '10px' }}>
                    {details.title}
                  </h1>
                  <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                    Learn more about {details.title.toLowerCase()}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Content Section */}
      <Container style={{ padding: '60px 0' }}>
        <Row>
          <Col lg={9}>
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px' }}>
              <Card.Body style={{ padding: '40px' }}>
                {details.content}
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={3}>
            {/* Quick Navigation */}
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '20px' }}>
              <Card.Body>
                <h5 style={{ marginBottom: '20px' }}>Quick Links</h5>
                <ListGroup variant="flush">
                  <ListGroup.Item as={Link} to="/company/overview" action style={{ backgroundColor: 'transparent', color: id === 'overview' ? '#667eea' : '#aaa', borderBottom: '1px solid #333' }}>
                    Company Overview
                  </ListGroup.Item>
                  <ListGroup.Item as={Link} to="/company/approach" action style={{ backgroundColor: 'transparent', color: id === 'approach' ? '#667eea' : '#aaa', borderBottom: '1px solid #333' }}>
                    Our Approach
                  </ListGroup.Item>
                  <ListGroup.Item as={Link} to="/company/partnerships" action style={{ backgroundColor: 'transparent', color: id === 'partnerships' ? '#667eea' : '#aaa', borderBottom: '1px solid #333' }}>
                    Partnerships
                  </ListGroup.Item>
                  <ListGroup.Item as={Link} to="/jobs" action style={{ backgroundColor: 'transparent', color: id === 'careers' ? '#667eea' : '#aaa', borderBottom: '1px solid #333' }}>
                    Careers
                  </ListGroup.Item>
                  <ListGroup.Item as={Link} to="/company/news" action style={{ backgroundColor: 'transparent', color: id === 'news' ? '#667eea' : '#aaa' }}>
                    News & Press
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>

            {/* Contact Card */}
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px' }}>
              <Card.Body>
                <h5 style={{ marginBottom: '20px' }}>Get in Touch</h5>
                <div className="mb-3">
                  <FaEnvelope className="text-primary me-2" />
                  <span style={{ color: '#aaa' }}>info@mjroberts.com</span>
                </div>
                <div className="mb-3">
                  <FaPhone className="text-primary me-2" />
                  <span style={{ color: '#aaa' }}>+254 723 156 066</span>
                </div>
                <div className="d-flex gap-2 mt-3">
                  <Button variant="outline-primary" size="sm" style={{ borderRadius: '50%' }}>
                    <FaLinkedin />
                  </Button>
                  <Button variant="outline-info" size="sm" style={{ borderRadius: '50%' }}>
                    <FaTwitter />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CompanyDetail;