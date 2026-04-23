// components/CompanyDetail.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, Badge, Accordion, ListGroup, Alert } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { 
  FaArrowLeft, FaCheckCircle, FaHandshake, 
  FaRocket, FaLightbulb, FaChartLine, FaGlobe, FaAward,
  FaNewspaper, FaBriefcase, FaGraduationCap, FaHeart,
  FaEnvelope, FaPhone, FaLinkedin, FaTwitter, 
  FaCalendarAlt, FaStar, FaClock,
  FaUsers, FaBuilding, FaQuoteLeft
} from 'react-icons/fa';

const CompanyDetail = () => {
  const { id } = useParams();

  // Real job openings with detailed information
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Cloud Architect",
      location: "Nairobi, Kenya",
      type: "Full-time",
      experience: "5-7 years",
      salary: "KES 250K - 350K",
      department: "Cloud Engineering",
      posted: "April 15, 2024",
      description: "Lead cloud migration projects and design scalable architecture solutions for enterprise clients.",
      responsibilities: [
        "Design and implement cloud architecture solutions on AWS/Azure",
        "Lead cloud migration projects from on-premise to cloud",
        "Develop infrastructure as code using Terraform/CloudFormation",
        "Mentor junior cloud engineers",
        "Conduct cloud cost optimization assessments",
        "Ensure security best practices and compliance"
      ],
      requirements: [
        "5+ years of cloud architecture experience",
        "AWS Solutions Architect Professional or Azure Solutions Architect Expert certified",
        "Experience with Kubernetes, Docker, and microservices",
        "Strong knowledge of networking, security, and database technologies",
        "Excellent communication and leadership skills",
        "Bachelor's degree in Computer Science or related field"
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Health insurance coverage",
        "Remote work flexibility",
        "Professional certification reimbursement",
        "Annual learning budget of KES 100K",
        "Team building and networking events"
      ]
    },
    {
      id: 2,
      title: "Salesforce Consultant",
      location: "Remote (Kenya-based)",
      type: "Full-time",
      experience: "3-5 years",
      salary: "KES 180K - 280K",
      department: "CRM Practice",
      posted: "April 10, 2024",
      description: "Implement and customize Salesforce solutions for enterprise clients across various industries.",
      responsibilities: [
        "Gather requirements and design Salesforce solutions",
        "Configure Salesforce including workflows, validation rules, and security",
        "Develop Apex classes, triggers, and Lightning components",
        "Integrate Salesforce with external systems using REST/SOAP APIs",
        "Lead user training and change management activities",
        "Provide ongoing support and optimization"
      ],
      requirements: [
        "3+ years of Salesforce implementation experience",
        "Salesforce Certified Administrator and Platform Developer",
        "Experience with Sales Cloud, Service Cloud, or Nonprofit Cloud",
        "Strong problem-solving and analytical skills",
        "Excellent client-facing communication skills",
        "Knowledge of Agile methodologies"
      ],
      benefits: [
        "Competitive salary package",
        "Fully remote work setup",
        "Salesforce certification bonuses",
        "Health and wellness stipend",
        "Flexible working hours",
        "Career growth opportunities"
      ]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      location: "Nairobi, Kenya",
      type: "Full-time",
      experience: "3-5 years",
      salary: "KES 200K - 300K",
      department: "Platform Engineering",
      posted: "April 5, 2024",
      description: "Build and maintain CI/CD pipelines, automate infrastructure, and ensure system reliability.",
      responsibilities: [
        "Design and implement CI/CD pipelines using Jenkins/GitLab CI/GitHub Actions",
        "Manage Kubernetes clusters and containerized applications",
        "Implement monitoring and alerting solutions",
        "Automate infrastructure provisioning using Terraform",
        "Collaborate with development teams to improve deployment processes",
        "Ensure system security and compliance"
      ],
      requirements: [
        "3+ years of DevOps experience",
        "Strong experience with AWS or Azure",
        "Proficiency with Docker and Kubernetes",
        "Experience with Infrastructure as Code (Terraform, CloudFormation)",
        "Knowledge of scripting languages (Python, Bash)",
        "Understanding of security best practices"
      ],
      benefits: [
        "Competitive salary",
        "Hybrid work model",
        "Continuous learning opportunities",
        "Cloud certification support",
        "Performance bonuses",
        "Modern tech stack exposure"
      ]
    },
    {
      id: 4,
      title: "Data Analytics Specialist",
      location: "Remote",
      type: "Contract",
      experience: "2-4 years",
      salary: "KES 150K - 220K",
      department: "Data & Analytics",
      posted: "April 1, 2024",
      description: "Develop data visualization dashboards and analytics solutions using Power BI or Tableau.",
      responsibilities: [
        "Develop interactive dashboards and reports",
        "Perform data analysis and provide actionable insights",
        "Design and optimize data models",
        "Integrate data from multiple sources",
        "Train clients on dashboard usage and interpretation",
        "Document technical specifications and best practices"
      ],
      requirements: [
        "2+ years of experience with Power BI or Tableau",
        "Strong SQL skills",
        "Experience with data warehousing concepts",
        "Understanding of DAX or similar languages",
        "Excellent data visualization design skills",
        "Bachelor's degree in a quantitative field"
      ],
      benefits: [
        "Competitive contract rates",
        "Flexible working hours",
        "Remote work",
        "Potential for full-time conversion",
        "Project completion bonuses",
        "Professional development opportunities"
      ]
    }
  ];

  // Company news with real content
  const companyNews = [
    {
      id: 1,
      title: "MJ & Roberts Named AWS Premier Partner",
      date: "March 15, 2024",
      category: "Partnership",
      summary: "We're proud to announce our promotion to AWS Premier Partner status, recognizing our deep expertise in cloud transformation and customer success.",
      content: "After a rigorous audit and demonstrating exceptional customer success, MJ & Roberts Consulting has achieved AWS Premier Partner status. This prestigious recognition places us among the top 5% of AWS partners globally.",
      impact: "This partnership enables us to provide even greater value to our clients through enhanced technical support, training resources, and co-innovation opportunities."
    },
    {
      id: 2,
      title: "Expanding to New Markets - London & Singapore",
      date: "February 10, 2024",
      category: "Expansion",
      summary: "MJ & Roberts Consulting opens new offices in London and Singapore to better serve our growing global client base.",
      content: "To meet increasing demand for our services, we have established physical presence in London and Singapore. These strategic locations will serve as hubs for our EMEA and APAC operations.",
      impact: "This expansion allows us to provide better coverage across time zones and deeper local market expertise for our international clients."
    },
    {
      id: 3,
      title: "Recognized as Top Workplace 2024",
      date: "January 20, 2024",
      category: "Awards",
      summary: "We're honored to be named one of the best places to work in Kenya for 2024, reflecting our commitment to employee satisfaction and growth.",
      content: "Based on anonymous employee surveys evaluating company culture, benefits, leadership, and work-life balance, MJ & Roberts Consulting ranked in the top 10 companies to work for in Kenya.",
      impact: "This recognition validates our people-first approach and attracts top talent to our growing organization."
    },
    {
      id: 4,
      title: "Launch of AI Innovation Lab",
      date: "December 5, 2023",
      category: "Innovation",
      summary: "New center of excellence focused on developing cutting-edge AI solutions for enterprise clients across Africa.",
      content: "The AI Innovation Lab brings together data scientists, ML engineers, and domain experts to develop practical AI applications for business challenges.",
      impact: "Already, we've launched three AI-powered solutions for predictive maintenance, customer churn prediction, and fraud detection."
    },
    {
      id: 5,
      title: "Community Impact: Tech Education Program",
      date: "November 15, 2023",
      category: "CSR",
      summary: "Launch of free coding bootcamp for underrepresented youth in Nairobi, aiming to train 100 students annually.",
      content: "In partnership with local universities, we've launched a 6-month intensive coding program covering web development, cloud computing, and data analytics.",
      impact: "The program has already placed 45 graduates in tech positions across Kenya."
    }
  ];

  // Company culture statistics
  const cultureStats = [
    { icon: <FaHeart />, value: "4.8/5", label: "Employee Satisfaction" },
    { icon: <FaUsers />, value: "95%", label: "Retention Rate" },
    { icon: <FaGraduationCap />, value: "1,000+", label: "Training Hours/Year" },
    { icon: <FaClock />, value: "Flexible", label: "Work Schedule" }
  ];

  // Helper component for job application button
  const JobApplyButton = ({ jobTitle }) => (
    <Button 
      as={Link} 
      to={`/contact?subject=Job%20Application%20-%20${encodeURIComponent(jobTitle)}&message=I%20am%20interested%20in%20the%20${encodeURIComponent(jobTitle)}%20position.%20Please%20find%20my%20resume%20attached.`}
      variant="primary" 
      size="sm"
      style={{ borderRadius: '50px' }}
    >
      Apply Now →
    </Button>
  );

  // Helper component for news read more button
  const NewsReadMore = ({ newsTitle }) => (
    <Button 
      as={Link} 
      to={`/company/news/${newsTitle.toLowerCase().replace(/\s+/g, '-')}`}
      variant="link" 
      className="text-primary p-0"
    >
      Read More →
    </Button>
  );

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
          
          <h4 className="mt-4">Our Mission</h4>
          <p>We empower organizations to thrive in the digital age by delivering transformative technology solutions that drive growth, efficiency, and innovation.</p>
          
          <h4 className="mt-4">Our Values</h4>
          <Row className="mt-3">
            <Col md={6}>
              <div className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-success me-2" />
                <span><strong>Excellence in Everything</strong> - We deliver quality in every engagement</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-success me-2" />
                <span><strong>Innovation First</strong> - We embrace cutting-edge solutions</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-success me-2" />
                <span><strong>Client Success</strong> - Our success is measured by yours</span>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-success me-2" />
                <span><strong>Integrity & Trust</strong> - We operate with transparency</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FaCheckCircle className="text-success me-2" />
                <span><strong>Collaborative Growth</strong> - We grow together with our clients</span>
              </div>
            </Col>
          </Row>

          <h4 className="mt-4">Company Culture</h4>
          <Row className="mt-3 mb-4">
            {cultureStats.map((stat, idx) => (
              <Col md={3} key={idx}>
                <Card className="text-center p-3 bg-dark mb-3">
                  <div style={{ fontSize: '2rem', color: '#667eea' }}>{stat.icon}</div>
                  <h5 className="text-primary mb-1">{stat.value}</h5>
                  <small className="text-muted">{stat.label}</small>
                </Card>
              </Col>
            ))}
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
                <p>Countries Served</p>
              </Card>
            </Col>
            <Col md={3} className="mb-3">
              <Card className="text-center p-3 bg-dark">
                <h3 className="text-primary">98%</h3>
                <p>Client Satisfaction</p>
              </Card>
            </Col>
          </Row>

          <Alert variant="info" className="mt-4 bg-dark text-white border-primary">
            <FaQuoteLeft className="me-2" />
            <strong>What Our Clients Say:</strong> "MJ & Roberts transformed our business operations. Their expertise and dedication are unmatched."
          </Alert>
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
          <p>Based on industry best practices, our framework ensures robust, scalable, and secure solutions.</p>
          <Row className="mt-3">
            <Col md={4} className="mb-3">
              <Card className="h-100 bg-dark">
                <Card.Body className="text-center">
                  <FaChartLine size={30} className="text-primary mb-3" />
                  <h5>Operational Excellence</h5>
                  <p className="small">Run and monitor systems to deliver business value continuously</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="h-100 bg-dark">
                <Card.Body className="text-center">
                  <div style={{ fontSize: '30px', color: '#667eea', marginBottom: '16px' }}>🛡️</div>
                  <h5>Security</h5>
                  <p className="small">Protect information, systems, and assets while delivering business value</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="h-100 bg-dark">
                <Card.Body className="text-center">
                  <FaCheckCircle size={30} className="text-primary mb-3" />
                  <h5>Reliability</h5>
                  <p className="small">Recover from infrastructure or service failures and dynamically meet demands</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <h4 className="mt-4">Our 4-Phase Delivery Process</h4>
          <Accordion defaultActiveKey="0" className="mt-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>1. Discovery & Assessment (2-4 Weeks)</Accordion.Header>
              <Accordion.Body>
                <p>We begin by understanding your business goals, challenges, and current technology landscape. This phase includes:</p>
                <ul>
                  <li>Stakeholder interviews and workshops</li>
                  <li>Current system audits and assessments</li>
                  <li>Requirements gathering and documentation</li>
                  <li>Success criteria definition</li>
                  <li>Risk assessment and mitigation planning</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>2. Strategy & Planning (3-6 Weeks)</Accordion.Header>
              <Accordion.Body>
                <p>Based on our findings, we develop a comprehensive roadmap:</p>
                <ul>
                  <li>Solution architecture design</li>
                  <li>Technology selection and validation</li>
                  <li>Timeline and milestone planning</li>
                  <li>Resource allocation and budgeting</li>
                  <li>Change management strategy</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>3. Implementation & Delivery (2-6 Months)</Accordion.Header>
              <Accordion.Body>
                <p>Our agile teams execute the plan with continuous feedback:</p>
                <ul>
                  <li>Agile development with 2-week sprints</li>
                  <li>Regular client demos and feedback sessions</li>
                  <li>Continuous integration and deployment</li>
                  <li>Quality assurance and testing</li>
                  <li>Documentation and training</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>4. Optimization & Support (Ongoing)</Accordion.Header>
              <Accordion.Body>
                <p>Post-implementation, we ensure your success:</p>
                <ul>
                  <li>24/7 monitoring and support</li>
                  <li>Performance optimization</li>
                  <li>Regular health checks</li>
                  <li>Continuous improvement cycles</li>
                  <li>Training and knowledge transfer</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div className="mt-4 p-3 bg-dark rounded">
            <h5>Success by the Numbers</h5>
            <Row className="mt-3">
              <Col md={4}>
                <div className="text-center">
                  <h3 className="text-primary">100%</h3>
                  <small>On-time Delivery</small>
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center">
                  <h3 className="text-primary">30%</h3>
                  <small>Average Cost Savings</small>
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center">
                  <h3 className="text-primary">99.9%</h3>
                  <small>System Uptime</small>
                </div>
              </Col>
            </Row>
          </div>
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
                  <p className="small text-muted"><strong>Benefits to clients:</strong> Enhanced technical support, training credits, and co-investment opportunities.</p>
                  <ul className="text-start">
                    <li>Migration Competency</li>
                    <li>DevOps Competency</li>
                    <li>Data & Analytics Competency</li>
                  </ul>
                  <Button variant="outline-primary" size="sm">Learn More</Button>
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
                  <p className="small text-muted"><strong>Benefits to clients:</strong> Priority support, solution accelerators, and innovation workshops.</p>
                  <ul className="text-start">
                    <li>Sales Cloud Specialization</li>
                    <li>Service Cloud Specialization</li>
                    <li>Nonprofit Cloud Expertise</li>
                  </ul>
                  <Button variant="outline-primary" size="sm">Learn More</Button>
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
                  <p className="small text-muted"><strong>Benefits to clients:</strong> Enterprise-grade support, implementation accelerators, and best practices.</p>
                  <ul className="text-start">
                    <li>Oracle Cloud Infrastructure</li>
                    <li>Fusion Applications</li>
                    <li>NetSuite Solutions</li>
                  </ul>
                  <Button variant="outline-primary" size="sm">Learn More</Button>
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
                  <p className="small text-muted"><strong>Benefits to clients:</strong> Access to Microsoft innovation labs, joint solution development.</p>
                  <ul className="text-start">
                    <li>Azure Solutions Architect</li>
                    <li>Dynamics 365</li>
                    <li>Power BI & Analytics</li>
                  </ul>
                  <Button variant="outline-primary" size="sm">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Alert variant="success" className="mt-4">
            <FaHandshake className="me-2" />
            <strong>Want to become a partner?</strong> We're always looking for strategic partners to expand our ecosystem. <Link to="/contact" className="text-success">Contact our partnerships team →</Link>
          </Alert>
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
                  <p>Continuous learning and career advancement with mentorship programs, certification reimbursements, and clear promotion paths.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="text-center h-100 bg-dark">
                <Card.Body>
                  <FaHeart size={30} className="text-primary mb-3" />
                  <h5>Great Culture</h5>
                  <p>Collaborative, inclusive environment that values work-life balance with flexible hours, remote options, and team building events.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="text-center h-100 bg-dark">
                <Card.Body>
                  <FaGraduationCap size={30} className="text-primary mb-3" />
                  <h5>Learning & Development</h5>
                  <p>Annual training budget of KES 100K, certification programs, conference attendance, and internal knowledge sharing sessions.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <h4 className="mt-4">Current Open Positions</h4>
          <Accordion className="mt-3">
            {jobOpenings.map((job, index) => (
              <Accordion.Item eventKey={index.toString()} key={job.id}>
                <Accordion.Header>
                  <div className="d-flex justify-content-between align-items-center w-100 me-3">
                    <span><strong>{job.title}</strong> - {job.department}</span>
                    <Badge bg={job.type === 'Full-time' ? 'success' : 'info'} className="ms-2">
                      {job.type}
                    </Badge>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Row className="mb-3">
                    <Col md={3}>
                      <small className="text-muted">📍 Location</small>
                      <p>{job.location}</p>
                    </Col>
                    <Col md={3}>
                      <small className="text-muted">⏰ Experience</small>
                      <p>{job.experience}</p>
                    </Col>
                    <Col md={3}>
                      <small className="text-muted">💰 Salary Range</small>
                      <p>{job.salary}</p>
                    </Col>
                    <Col md={3}>
                      <small className="text-muted">📅 Posted</small>
                      <p>{job.posted}</p>
                    </Col>
                  </Row>
                  
                  <h6>About the Role</h6>
                  <p>{job.description}</p>
                  
                  <h6>Key Responsibilities</h6>
                  <ul>
                    {job.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                  </ul>
                  
                  <h6>Requirements</h6>
                  <ul>
                    {job.requirements.map((req, i) => <li key={i}>{req}</li>)}
                  </ul>
                  
                  <h6>What We Offer</h6>
                  <ul>
                    {job.benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
                  </ul>
                  
                  <div className="mt-3">
                    <JobApplyButton jobTitle={job.title} />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="mt-4 p-4 bg-dark rounded text-center">
            <h5>Don't see the right position?</h5>
            <p>Send us your resume and we'll keep you in mind for future opportunities that match your skills.</p>
            <Button 
              as={Link} 
              to="/contact?subject=General%20Application&message=I%20would%20like%20to%20submit%20my%20resume%20for%20general%20consideration.%20Please%20find%20my%20CV%20attached."
              variant="outline-primary"
            >
              Submit General Application →
            </Button>
          </div>

          <Alert variant="info" className="mt-4">
            <FaUsers className="me-2" />
            <strong>Join our talent network!</strong> Sign up to receive updates about new job opportunities and company news.
          </Alert>
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
            {companyNews.map((news) => (
              <Col md={6} className="mb-4" key={news.id}>
                <Card className="h-100 bg-dark">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center">
                        <FaCalendarAlt className="text-primary me-2" />
                        <small className="text-muted">{news.date}</small>
                      </div>
                      <Badge bg="secondary">{news.category}</Badge>
                    </div>
                    <h4>{news.title}</h4>
                    <p className="small text-muted">{news.summary}</p>
                    <hr className="bg-secondary" />
                    <p className="small">{news.content.substring(0, 150)}...</p>
                    <div className="mt-3">
                      <NewsReadMore newsTitle={news.title} />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="mt-4 p-4 bg-dark rounded text-center">
            <h5>Media Inquiries</h5>
            <p>For press inquiries, interview requests, or media assets, please contact our media relations team.</p>
            <Button 
              as={Link} 
              to="/contact?subject=Media%20Inquiry&message=I%20would%20like%20to%20connect%20with%20the%20media%20relations%20team%20regarding"
              variant="primary"
            >
              Contact Media Relations
            </Button>
          </div>

          <Alert variant="secondary" className="mt-4">
            <FaNewspaper className="me-2" />
            <strong>Subscribe to our newsletter</strong> to receive monthly updates on company news and industry insights.
          </Alert>
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
                <div className="mb-3">
                  <FaBuilding className="text-primary me-2" />
                  <span style={{ color: '#aaa' }}>Nairobi, Kenya</span>
                </div>
                <div className="d-flex gap-2 mt-3">
                  <Button variant="outline-primary" size="sm" style={{ borderRadius: '50%', width: '35px', height: '35px', padding: '0' }}>
                    <FaLinkedin />
                  </Button>
                  <Button variant="outline-info" size="sm" style={{ borderRadius: '50%', width: '35px', height: '35px', padding: '0' }}>
                    <FaTwitter />
                  </Button>
                </div>
                <hr className="bg-secondary" />
                <div className="text-center">
                  <Button 
                    as={Link} 
                    to="/contact" 
                    variant="primary" 
                    size="sm" 
                    style={{ width: '100%', borderRadius: '50px' }}
                  >
                    Contact Us
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