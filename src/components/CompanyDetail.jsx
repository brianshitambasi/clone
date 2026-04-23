// components/CompanyDetail.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, Badge, Accordion, ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { 
  FaArrowLeft, FaHandshake, 
  FaRocket, FaGlobe,
  FaNewspaper, FaBriefcase,
  FaEnvelope, FaPhone, 
  FaCalendarAlt, FaBuilding
} from 'react-icons/fa';

const CompanyDetail = () => {
  const { id } = useParams();

  // Real job openings with Kenyan context
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Cloud Architect",
      location: "Nairobi, Kenya",
      type: "Full-time",
      experience: "5-7 years",
      salary: "KES 250,000 - 350,000 per month",
      department: "Cloud Engineering",
      posted: "April 15, 2024",
      description: "Lead cloud migration projects for Kenyan enterprises moving to AWS and Azure platforms.",
      requirements: [
        "AWS or Azure certification required",
        "Experience with Kenyan banking or telecom sector preferred",
        "5+ years cloud architecture experience",
        "Strong knowledge of Terraform and Kubernetes"
      ],
      benefits: [
        "Competitive Kenyan market salary",
        "NHIF and NSSF coverage",
        "Hybrid work (Nairobi office 3 days/week)",
        "Annual certification budget of KES 150,000"
      ]
    },
    {
      id: 2,
      title: "Salesforce Consultant",
      location: "Nairobi, Kenya",
      type: "Full-time",
      experience: "3-5 years",
      salary: "KES 180,000 - 280,000 per month",
      department: "CRM Practice",
      posted: "April 10, 2024",
      description: "Implement Salesforce solutions for Kenyan NGOs, banks, and telecom companies.",
      requirements: [
        "Salesforce Certified Administrator",
        "Experience with Nonprofit Cloud is a plus",
        "3+ years implementing CRM solutions",
        "Understanding of Kenyan business processes"
      ],
      benefits: [
        "Competitive salary",
        "Remote work options",
        "Salesforce certification bonuses",
        "Health insurance"
      ]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      location: "Nairobi, Kenya",
      type: "Full-time",
      experience: "3-5 years",
      salary: "KES 200,000 - 300,000 per month",
      department: "Platform Engineering",
      posted: "April 5, 2024",
      description: "Build CI/CD pipelines and manage cloud infrastructure for Kenyan clients.",
      requirements: [
        "Experience with Jenkins, GitLab CI, or GitHub Actions",
        "Docker and Kubernetes expertise",
        "AWS or Azure experience",
        "3+ years DevOps experience"
      ],
      benefits: [
        "Competitive pay",
        "Flexible working hours",
        "Cloud certification support",
        "Performance bonuses"
      ]
    },
    {
      id: 4,
      title: "Data Analytics Specialist",
      location: "Nairobi, Kenya",
      type: "Full-time",
      experience: "2-4 years",
      salary: "KES 150,000 - 220,000 per month",
      department: "Data & Analytics",
      posted: "April 1, 2024",
      description: "Create dashboards and reports using Power BI for Kenyan businesses.",
      requirements: [
        "Power BI or Tableau experience",
        "SQL proficiency",
        "2+ years data analytics experience",
        "Bachelor's degree in Statistics or CS"
      ],
      benefits: [
        "Competitive salary",
        "Remote work",
        "Training opportunities",
        "Career growth path"
      ]
    }
  ];

  // Real company news
  const companyNews = [
    {
      id: 1,
      title: "MJ & Roberts Named AWS Partner",
      date: "March 15, 2024",
      summary: "MJ & Roberts Consulting has achieved AWS Select Tier Services Partner status, enabling us to better serve Kenyan businesses migrating to the cloud.",
      details: "This partnership allows us to offer AWS credits, technical training, and migration support to our clients. Kenyan businesses can now access AWS expertise locally."
    },
    {
      id: 2,
      title: "New Office Opening in Westlands, Nairobi",
      date: "February 10, 2024",
      summary: "We've opened our new headquarters in Westlands, Nairobi to accommodate our growing team of technology consultants.",
      details: "The new office features modern collaboration spaces and can host up to 50 team members. Located at Westlands Business Park, 3rd Floor."
    },
    {
      id: 3,
      title: "Partnered with Safaricom for Enterprise Solutions",
      date: "January 20, 2024",
      summary: "MJ & Roberts Consulting has signed a partnership agreement with Safaricom to deliver enterprise technology solutions.",
      details: "This partnership combines our consulting expertise with Safaricom's network infrastructure to provide end-to-end digital transformation for Kenyan enterprises."
    },
    {
      id: 4,
      title: "Launched Tech Training Program for Kenyan Youth",
      date: "December 5, 2023",
      summary: "We've launched a free 6-month training program for 50 Kenyan university graduates in cloud computing and data analytics.",
      details: "The program includes AWS certification training, hands-on projects, and job placement assistance. Applications open January 2025."
    }
  ];

  // Helper component for job application
  const JobApplyButton = ({ jobTitle }) => (
    <Button 
      as={Link} 
      to={`/contact?subject=Job%20Application%20-%20${encodeURIComponent(jobTitle)}`}
      variant="primary" 
      size="sm"
      style={{ borderRadius: '50px' }}
    >
      Apply Now
    </Button>
  );

  const companyDetails = {
    overview: {
      title: 'Company Overview',
      icon: <FaGlobe size={40} />,
      content: (
        <>
          <h3 style={{ color: '#fff', marginBottom: '20px' }}>About MJ & Roberts Consulting</h3>
          <p style={{ color: '#ccc', lineHeight: '1.6' }}><strong style={{ color: '#667eea' }}>Founded in 2021</strong>, MJ & Roberts Consulting is a Kenyan technology consulting firm specializing in digital transformation, cloud migration, and enterprise software implementation.</p>
          
          <p style={{ color: '#ccc', lineHeight: '1.6' }}>We help Kenyan businesses—from banks and telecom companies to NGOs and retailers—leverage technology to grow, reduce costs, and serve their customers better.</p>
          
          <h4 style={{ color: '#fff', marginTop: '30px', marginBottom: '15px' }}>Our Mission</h4>
          <p style={{ color: '#ccc', lineHeight: '1.6' }}>To help Kenyan organizations succeed in the digital economy through practical, affordable technology solutions.</p>
          
          <h4 style={{ color: '#fff', marginTop: '30px', marginBottom: '15px' }}>What We Do</h4>
          <ul style={{ color: '#ccc' }}>
            <li style={{ marginBottom: '8px' }}>Move businesses from on-premise servers to AWS/Azure cloud</li>
            <li style={{ marginBottom: '8px' }}>Implement Salesforce for sales and customer service tracking</li>
            <li style={{ marginBottom: '8px' }}>Build data dashboards so leaders can see business performance</li>
            <li style={{ marginBottom: '8px' }}>Train teams on using technology effectively</li>
          </ul>
          
          <h4 style={{ color: '#fff', marginTop: '30px', marginBottom: '15px' }}>Quick Facts</h4>
          <Row className="mt-3">
            <Col md={6}>
              <Card className="p-3 mb-3" style={{ backgroundColor: '#2a2a2a', border: 'none' }}>
                <p style={{ color: '#ccc', margin: 0 }}><strong style={{ color: '#667eea' }}>📍 Location:</strong> Westlands, Nairobi</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="p-3 mb-3" style={{ backgroundColor: '#2a2a2a', border: 'none' }}>
                <p style={{ color: '#ccc', margin: 0 }}><strong style={{ color: '#667eea' }}>👥 Team Size:</strong> 25+ consultants</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="p-3 mb-3" style={{ backgroundColor: '#2a2a2a', border: 'none' }}>
                <p style={{ color: '#ccc', margin: 0 }}><strong style={{ color: '#667eea' }}>🏢 Founded:</strong> 2021</p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="p-3 mb-3" style={{ backgroundColor: '#2a2a2a', border: 'none' }}>
                <p style={{ color: '#ccc', margin: 0 }}><strong style={{ color: '#667eea' }}>🤝 Clients:</strong> 30+ Kenyan businesses</p>
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
          <h3 style={{ color: '#fff', marginBottom: '20px' }}>How We Work With Kenyan Businesses</h3>
          
          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ color: '#667eea', marginBottom: '10px' }}>Step 1: Understand Your Business (2 weeks)</h4>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>We meet with your team to understand your challenges, budget, and goals. No technical jargon—just real business conversation.</p>
          </div>
          
          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ color: '#667eea', marginBottom: '10px' }}>Step 2: Propose a Solution (1 week)</h4>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>We provide a clear proposal with costs, timeline, and expected outcomes. You'll know exactly what you're paying for.</p>
          </div>
          
          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ color: '#667eea', marginBottom: '10px' }}>Step 3: Implement (2-12 weeks)</h4>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>Our team builds and tests the solution. We train your staff along the way so they understand the new system.</p>
          </div>
          
          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ color: '#667eea', marginBottom: '10px' }}>Step 4: Support (Ongoing)</h4>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>After launch, we provide ongoing support via WhatsApp, email, and phone. Kenyan clients reach us quickly.</p>
          </div>
          
          <h4 style={{ color: '#fff', marginTop: '30px', marginBottom: '15px' }}>Our Promise</h4>
          <ul style={{ color: '#ccc' }}>
            <li style={{ marginBottom: '8px' }}>✅ Transparent pricing—no hidden fees</li>
            <li style={{ marginBottom: '8px' }}>✅ Local team—you can visit our Nairobi office</li>
            <li style={{ marginBottom: '8px' }}>✅ Practical solutions—we recommend what you actually need</li>
            <li style={{ marginBottom: '8px' }}>✅ Ongoing support—we don't disappear after the project</li>
          </ul>
        </>
      )
    },
    partnerships: {
      title: 'Partnerships',
      icon: <FaHandshake size={40} />,
      content: (
        <>
          <h3 style={{ color: '#fff', marginBottom: '20px' }}>Our Technology Partners</h3>
          
          <Card className="mb-4 p-4" style={{ backgroundColor: '#2a2a2a', border: 'none', borderRadius: '15px' }}>
            <h4 style={{ color: '#fff', marginBottom: '10px' }}>AWS (Amazon Web Services)</h4>
            <Badge bg="warning" style={{ marginBottom: '15px', padding: '5px 15px' }}>Select Tier Partner</Badge>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>We help Kenyan businesses move their servers and applications to AWS cloud, reducing IT costs and improving reliability.</p>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>What this means for you: Access to AWS credits, migration support, and certified architects.</p>
          </Card>
          
          <Card className="mb-4 p-4" style={{ backgroundColor: '#2a2a2a', border: 'none', borderRadius: '15px' }}>
            <h4 style={{ color: '#fff', marginBottom: '10px' }}>Salesforce</h4>
            <Badge bg="warning" style={{ marginBottom: '15px', padding: '5px 15px' }}>Registered Partner</Badge>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>We implement Salesforce to help Kenyan sales teams track customers, manage leads, and close more deals.</p>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>What this means for you: Discounted licenses, local implementation support, and training.</p>
          </Card>
          
          <Card className="mb-4 p-4" style={{ backgroundColor: '#2a2a2a', border: 'none', borderRadius: '15px' }}>
            <h4 style={{ color: '#fff', marginBottom: '10px' }}>Microsoft</h4>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>We implement Microsoft 365, Azure, and Power BI solutions for Kenyan organizations.</p>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>What this means for you: Licensed software, migration support, and admin training.</p>
          </Card>
          
          <p style={{ color: '#ccc', marginTop: '20px' }}>Want to partner with us? <Link to="/contact" style={{ color: '#667eea' }}>Contact our partnerships team</Link></p>
        </>
      )
    },
    careers: {
      title: 'Careers',
      icon: <FaBriefcase size={40} />,
      content: (
        <>
          <h3 style={{ color: '#fff', marginBottom: '20px' }}>Join Our Team in Nairobi</h3>
          <p style={{ color: '#ccc', lineHeight: '1.6' }}>We're hiring Kenyan technology professionals. If you have experience in cloud, Salesforce, data analytics, or software development, we want to hear from you.</p>
          
          <h4 style={{ color: '#fff', marginTop: '30px', marginBottom: '15px' }}>Why Work With Us</h4>
          <ul style={{ color: '#ccc' }}>
            <li style={{ marginBottom: '8px' }}>💰 Competitive Kenyan market salaries</li>
            <li style={{ marginBottom: '8px' }}>🏠 Hybrid work (office + remote)</li>
            <li style={{ marginBottom: '8px' }}>📚 Training and certification budget</li>
            <li style={{ marginBottom: '8px' }}>🏥 Health insurance (NHIF supplement)</li>
            <li style={{ marginBottom: '8px' }}>📈 Career growth opportunities</li>
          </ul>
          
          <h4 style={{ color: '#fff', marginTop: '30px', marginBottom: '15px' }}>Current Openings</h4>
          <Accordion className="mt-3">
            {jobOpenings.map((job, index) => (
              <Accordion.Item eventKey={index.toString()} key={job.id} style={{ backgroundColor: '#2a2a2a', border: 'none' }}>
                <Accordion.Header style={{ backgroundColor: '#2a2a2a' }}>
                  <strong style={{ color: '#fff' }}>{job.title}</strong> <span style={{ color: '#aaa', marginLeft: '10px' }}>- {job.department} ({job.type})</span>
                </Accordion.Header>
                <Accordion.Body style={{ backgroundColor: '#2a2a2a', color: '#ccc' }}>
                  <p><strong style={{ color: '#667eea' }}>📍 Location:</strong> {job.location}</p>
                  <p><strong style={{ color: '#667eea' }}>💰 Salary:</strong> {job.salary}</p>
                  <p><strong style={{ color: '#667eea' }}>📅 Posted:</strong> {job.posted}</p>
                  <p><strong style={{ color: '#667eea' }}>About the role:</strong> {job.description}</p>
                  
                  <h6 style={{ color: '#fff', marginTop: '15px' }}>Requirements:</h6>
                  <ul>
                    {job.requirements.map((req, i) => <li key={i} style={{ color: '#ccc' }}>{req}</li>)}
                  </ul>
                  
                  <h6 style={{ color: '#fff', marginTop: '15px' }}>What we offer:</h6>
                  <ul>
                    {job.benefits.map((benefit, i) => <li key={i} style={{ color: '#ccc' }}>{benefit}</li>)}
                  </ul>
                  
                  <JobApplyButton jobTitle={job.title} />
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          
          <div className="mt-4 p-4 rounded" style={{ backgroundColor: '#2a2a2a' }}>
            <h5 style={{ color: '#fff' }}>Not seeing your role?</h5>
            <p style={{ color: '#ccc' }}>Send your CV to <strong style={{ color: '#667eea' }}>careers@mjroberts.com</strong> and we'll keep it on file for future openings.</p>
            <Button as={Link} to="/contact" variant="outline-primary" style={{ borderRadius: '50px' }}>Submit Application</Button>
          </div>
        </>
      )
    },
    news: {
      title: 'News & Press',
      icon: <FaNewspaper size={40} />,
      content: (
        <>
          <h3 style={{ color: '#fff', marginBottom: '20px' }}>MJ & Roberts Consulting News</h3>
          
          {companyNews.map((news) => (
            <Card className="mb-4 p-4" key={news.id} style={{ backgroundColor: '#2a2a2a', border: 'none', borderRadius: '15px' }}>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <FaCalendarAlt style={{ color: '#667eea' }} />
                <small style={{ color: '#aaa' }}>{news.date}</small>
              </div>
              <h4 style={{ color: '#fff', marginBottom: '10px' }}>{news.title}</h4>
              <p style={{ color: '#ccc', lineHeight: '1.6' }}>{news.summary}</p>
              <details>
                <summary style={{ color: '#667eea', cursor: 'pointer' }}>Read more</summary>
                <p className="mt-2" style={{ color: '#ccc' }}>{news.details}</p>
              </details>
            </Card>
          ))}
          
          <div className="mt-4 p-4 rounded" style={{ backgroundColor: '#2a2a2a' }}>
            <h5 style={{ color: '#fff' }}>Media Inquiries</h5>
            <p style={{ color: '#ccc' }}>For press inquiries, contact our communications team:</p>
            <p style={{ color: '#ccc' }}><strong style={{ color: '#667eea' }}>Email:</strong> media@mjroberts.com</p>
            <p style={{ color: '#ccc' }}><strong style={{ color: '#667eea' }}>Phone:</strong> +254 723 156 066</p>
            <Button as={Link} to="/contact" variant="primary" style={{ borderRadius: '50px' }}>Contact Media Team</Button>
          </div>
        </>
      )
    }
  };

  const details = companyDetails[id] || companyDetails.overview;

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <Button 
            as={Link} 
            to="/company" 
            variant="light" 
            style={{ marginBottom: '30px', borderRadius: '50px' }}
          >
            <FaArrowLeft className="me-2" /> Back to Company
          </Button>
          <Row>
            <Col>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ 
                  width: '80px', height: '80px', borderRadius: '50%', 
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {details.icon}
                </div>
                <div>
                  <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#fff' }}>{details.title}</h1>
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
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}>
              <Card.Body style={{ padding: '40px' }}>
                {details.content}
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={3}>
            {/* Quick Navigation */}
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '20px' }}>
              <Card.Body>
                <h5 style={{ color: '#fff', marginBottom: '20px' }}>Quick Links</h5>
                <ListGroup variant="flush">
                  <ListGroup.Item 
                    as={Link} 
                    to="/company/overview" 
                    action 
                    style={{ 
                      backgroundColor: 'transparent', 
                      color: id === 'overview' ? '#667eea' : '#ccc',
                      borderBottom: '1px solid #333',
                      padding: '12px 0'
                    }}
                  >
                    Company Overview
                  </ListGroup.Item>
                  <ListGroup.Item 
                    as={Link} 
                    to="/company/approach" 
                    action 
                    style={{ 
                      backgroundColor: 'transparent', 
                      color: id === 'approach' ? '#667eea' : '#ccc',
                      borderBottom: '1px solid #333',
                      padding: '12px 0'
                    }}
                  >
                    Our Approach
                  </ListGroup.Item>
                  <ListGroup.Item 
                    as={Link} 
                    to="/company/partnerships" 
                    action 
                    style={{ 
                      backgroundColor: 'transparent', 
                      color: id === 'partnerships' ? '#667eea' : '#ccc',
                      borderBottom: '1px solid #333',
                      padding: '12px 0'
                    }}
                  >
                    Partnerships
                  </ListGroup.Item>
                  <ListGroup.Item 
                    as={Link} 
                    to="/jobs" 
                    action 
                    style={{ 
                      backgroundColor: 'transparent', 
                      color: id === 'careers' ? '#667eea' : '#ccc',
                      borderBottom: '1px solid #333',
                      padding: '12px 0'
                    }}
                  >
                    Careers
                  </ListGroup.Item>
                  <ListGroup.Item 
                    as={Link} 
                    to="/company/news" 
                    action 
                    style={{ 
                      backgroundColor: 'transparent', 
                      color: id === 'news' ? '#667eea' : '#ccc',
                      padding: '12px 0'
                    }}
                  >
                    News & Press
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>

            {/* Contact Card */}
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px' }}>
              <Card.Body>
                <h5 style={{ color: '#fff', marginBottom: '20px' }}>Contact Us</h5>
                <p style={{ color: '#ccc', marginBottom: '12px' }}>
                  <FaEnvelope style={{ color: '#667eea', marginRight: '10px' }} /> 
                  info@mjroberts.com
                </p>
                <p style={{ color: '#ccc', marginBottom: '12px' }}>
                  <FaPhone style={{ color: '#667eea', marginRight: '10px' }} /> 
                  +254 723 156 066
                </p>
                <p style={{ color: '#ccc', marginBottom: '20px' }}>
                  <FaBuilding style={{ color: '#667eea', marginRight: '10px' }} /> 
                  Westlands, Nairobi
                </p>
                <hr style={{ backgroundColor: '#333' }} />
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="primary" 
                  style={{ 
                    width: '100%', 
                    borderRadius: '50px',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    border: 'none'
                  }}
                >
                  Contact Us
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CompanyDetail;