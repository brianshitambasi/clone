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
          <h3>About MJ & Roberts Consulting</h3>
          <p><strong>Founded in 2021</strong>, MJ & Roberts Consulting is a Kenyan technology consulting firm specializing in digital transformation, cloud migration, and enterprise software implementation.</p>
          
          <p>We help Kenyan businesses—from banks and telecom companies to NGOs and retailers—leverage technology to grow, reduce costs, and serve their customers better.</p>
          
          <h4 className="mt-4">Our Mission</h4>
          <p>To help Kenyan organizations succeed in the digital economy through practical, affordable technology solutions.</p>
          
          <h4 className="mt-4">What We Do</h4>
          <ul>
            <li>Move businesses from on-premise servers to AWS/Azure cloud</li>
            <li>Implement Salesforce for sales and customer service tracking</li>
            <li>Build data dashboards so leaders can see business performance</li>
            <li>Train teams on using technology effectively</li>
          </ul>
          
          <h4 className="mt-4">Quick Facts</h4>
          <Row className="mt-3">
            <Col md={6}>
              <Card className="p-3 bg-dark mb-3">
                <strong>📍 Location:</strong> Westlands, Nairobi
              </Card>
            </Col>
            <Col md={6}>
              <Card className="p-3 bg-dark mb-3">
                <strong>👥 Team Size:</strong> 25+ consultants
              </Card>
            </Col>
            <Col md={6}>
              <Card className="p-3 bg-dark mb-3">
                <strong>🏢 Founded:</strong> 2021
              </Card>
            </Col>
            <Col md={6}>
              <Card className="p-3 bg-dark mb-3">
                <strong>🤝 Clients:</strong> 30+ Kenyan businesses
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
          <h3>How We Work With Kenyan Businesses</h3>
          
          <h4 className="mt-4">Step 1: Understand Your Business (2 weeks)</h4>
          <p>We meet with your team to understand your challenges, budget, and goals. No technical jargon—just real business conversation.</p>
          
          <h4 className="mt-4">Step 2: Propose a Solution (1 week)</h4>
          <p>We provide a clear proposal with costs, timeline, and expected outcomes. You'll know exactly what you're paying for.</p>
          
          <h4 className="mt-4">Step 3: Implement (2-12 weeks)</h4>
          <p>Our team builds and tests the solution. We train your staff along the way so they understand the new system.</p>
          
          <h4 className="mt-4">Step 4: Support (Ongoing)</h4>
          <p>After launch, we provide ongoing support via WhatsApp, email, and phone. Kenyan clients reach us quickly.</p>
          
          <h4 className="mt-4">Our Promise</h4>
          <ul>
            <li>✅ Transparent pricing—no hidden fees</li>
            <li>✅ Local team—you can visit our Nairobi office</li>
            <li>✅ Practical solutions—we recommend what you actually need</li>
            <li>✅ Ongoing support—we don't disappear after the project</li>
          </ul>
        </>
      )
    },
    partnerships: {
      title: 'Partnerships',
      icon: <FaHandshake size={40} />,
      content: (
        <>
          <h3>Our Technology Partners</h3>
          
          <Card className="bg-dark mb-4 p-4">
            <h4>AWS (Amazon Web Services)</h4>
            <p><Badge bg="warning">Select Tier Partner</Badge></p>
            <p>We help Kenyan businesses move their servers and applications to AWS cloud, reducing IT costs and improving reliability.</p>
            <p className="small text-muted">What this means for you: Access to AWS credits, migration support, and certified architects.</p>
          </Card>
          
          <Card className="bg-dark mb-4 p-4">
            <h4>Salesforce</h4>
            <p><Badge bg="warning">Registered Partner</Badge></p>
            <p>We implement Salesforce to help Kenyan sales teams track customers, manage leads, and close more deals.</p>
            <p className="small text-muted">What this means for you: Discounted licenses, local implementation support, and training.</p>
          </Card>
          
          <Card className="bg-dark mb-4 p-4">
            <h4>Microsoft</h4>
            <p>We implement Microsoft 365, Azure, and Power BI solutions for Kenyan organizations.</p>
            <p className="small text-muted">What this means for you: Licensed software, migration support, and admin training.</p>
          </Card>
          
          <p className="mt-3">Want to partner with us? <Link to="/contact">Contact our partnerships team</Link></p>
        </>
      )
    },
    careers: {
      title: 'Careers',
      icon: <FaBriefcase size={40} />,
      content: (
        <>
          <h3>Join Our Team in Nairobi</h3>
          <p>We're hiring Kenyan technology professionals. If you have experience in cloud, Salesforce, data analytics, or software development, we want to hear from you.</p>
          
          <h4 className="mt-4">Why Work With Us</h4>
          <ul>
            <li>💰 Competitive Kenyan market salaries</li>
            <li>🏠 Hybrid work (office + remote)</li>
            <li>📚 Training and certification budget</li>
            <li>🏥 Health insurance (NHIF supplement)</li>
            <li>📈 Career growth opportunities</li>
          </ul>
          
          <h4 className="mt-4">Current Openings</h4>
          <Accordion className="mt-3">
            {jobOpenings.map((job, index) => (
              <Accordion.Item eventKey={index.toString()} key={job.id}>
                <Accordion.Header>
                  <strong>{job.title}</strong> - {job.department} ({job.type})
                </Accordion.Header>
                <Accordion.Body>
                  <p><strong>📍 Location:</strong> {job.location}</p>
                  <p><strong>💰 Salary:</strong> {job.salary}</p>
                  <p><strong>📅 Posted:</strong> {job.posted}</p>
                  <p><strong>About the role:</strong> {job.description}</p>
                  
                  <h6>Requirements:</h6>
                  <ul>
                    {job.requirements.map((req, i) => <li key={i}>{req}</li>)}
                  </ul>
                  
                  <h6>What we offer:</h6>
                  <ul>
                    {job.benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
                  </ul>
                  
                  <JobApplyButton jobTitle={job.title} />
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          
          <div className="mt-4 p-4 bg-dark rounded">
            <h5>Not seeing your role?</h5>
            <p>Send your CV to <strong>careers@mjroberts.com</strong> and we'll keep it on file for future openings.</p>
            <Button as={Link} to="/contact" variant="outline-primary">Submit Application</Button>
          </div>
        </>
      )
    },
    news: {
      title: 'News & Press',
      icon: <FaNewspaper size={40} />,
      content: (
        <>
          <h3>MJ & Roberts Consulting News</h3>
          
          {companyNews.map((news) => (
            <Card className="bg-dark mb-4 p-4" key={news.id}>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <FaCalendarAlt className="text-primary" />
                <small>{news.date}</small>
              </div>
              <h4>{news.title}</h4>
              <p>{news.summary}</p>
              <details>
                <summary>Read more</summary>
                <p className="mt-2">{news.details}</p>
              </details>
            </Card>
          ))}
          
          <div className="mt-4 p-4 bg-dark rounded">
            <h5>Media Inquiries</h5>
            <p>For press inquiries, contact our communications team:</p>
            <p><strong>Email:</strong> media@mjroberts.com</p>
            <p><strong>Phone:</strong> +254 723 156 066</p>
            <Button as={Link} to="/contact" variant="primary">Contact Media Team</Button>
          </div>
        </>
      )
    }
  };

  const details = companyDetails[id] || companyDetails.overview;

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <Button as={Link} to="/company" variant="light" style={{ marginBottom: '30px', borderRadius: '50px' }}>
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
                  <h1 style={{ fontSize: '3rem', fontWeight: '800' }}>{details.title}</h1>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

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
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '20px' }}>
              <Card.Body>
                <h5>Quick Links</h5>
                <ListGroup variant="flush">
                  <ListGroup.Item as={Link} to="/company/overview" action style={{ backgroundColor: 'transparent', color: id === 'overview' ? '#667eea' : '#aaa' }}>
                    Company Overview
                  </ListGroup.Item>
                  <ListGroup.Item as={Link} to="/company/approach" action style={{ backgroundColor: 'transparent', color: id === 'approach' ? '#667eea' : '#aaa' }}>
                    Our Approach
                  </ListGroup.Item>
                  <ListGroup.Item as={Link} to="/company/partnerships" action style={{ backgroundColor: 'transparent', color: id === 'partnerships' ? '#667eea' : '#aaa' }}>
                    Partnerships
                  </ListGroup.Item>
                  <ListGroup.Item as={Link} to="/jobs" action style={{ backgroundColor: 'transparent', color: id === 'careers' ? '#667eea' : '#aaa' }}>
                    Careers
                  </ListGroup.Item>
                  <ListGroup.Item as={Link} to="/company/news" action style={{ backgroundColor: 'transparent', color: id === 'news' ? '#667eea' : '#aaa' }}>
                    News & Press
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>

            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px' }}>
              <Card.Body>
                <h5>Contact Us</h5>
                <p><FaEnvelope className="text-primary me-2" /> info@mjroberts.com</p>
                <p><FaPhone className="text-primary me-2" /> +254 723 156 066</p>
                <p><FaBuilding className="text-primary me-2" /> Westlands, Nairobi</p>
                <hr />
                <div className="d-flex gap-2">
                  <Button variant="outline-primary" size="sm" as="a" href="#">LinkedIn</Button>
                  <Button variant="outline-info" size="sm" as="a" href="#">Twitter</Button>
                </div>
                <hr />
                <Button as={Link} to="/contact" variant="primary" size="sm" style={{ width: '100%' }}>Contact Us</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CompanyDetail;