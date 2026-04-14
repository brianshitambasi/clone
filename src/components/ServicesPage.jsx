// components/ServicesPage.jsx
import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaCode, FaHeadset, FaCloud, FaBug, FaArrowRight, FaCheckCircle, FaRocket, FaShieldAlt, FaClock, FaChartLine } from 'react-icons/fa';

const ServicesPage = () => {
  const cardsRef = useRef([]);

  const services = [
    { 
      id: 'it-consulting', 
      icon: <FaLightbulb />, 
      title: 'IT Consulting & Digital Transformation Advisory', 
      subtitle: 'Strategic guidance for digital evolution',
      items: [
        'Postural assessments to identify technical debt',
        'Strategy for transitioning from monolithic to microservices',
        'TCO analysis and roadmap design',
        'Digital maturity assessment',
        'Innovation workshops and ideation sessions'
      ],
      stats: { projects: 150, clients: 85, satisfaction: 98 },
      color: '#667eea'
    },
    { 
      id: 'software-engineering', 
      icon: <FaCode />, 
      title: 'Software Engineering & Application Services', 
      subtitle: 'Building robust, scalable applications',
      items: [
        'Custom cloud-native builds (Java, Python, .NET, Go)',
        'Building secure, high-throughput API layers',
        'Continuous performance tuning and refactoring',
        'Microservices architecture design',
        'Legacy system modernization'
      ],
      stats: { projects: 320, clients: 120, satisfaction: 96 },
      color: '#764ba2'
    },
    { 
      id: 'managed-it', 
      icon: <FaHeadset />, 
      title: 'Managed IT Services & Support', 
      subtitle: '24/7 enterprise-grade support',
      items: [
        '24/7 Site Reliability Engineering (SRE) hubs',
        'Level 3 global technical support with 99.9% SLA',
        'Seamless transition into modern ITSM tools',
        'Proactive monitoring and alerting',
        'Disaster recovery planning'
      ],
      stats: { projects: 280, clients: 95, satisfaction: 99 },
      color: '#f093fb'
    },
    { 
      id: 'devops', 
      icon: <FaCloud />, 
      title: 'DevOps & Platform Engineering', 
      subtitle: 'Accelerating delivery through automation',
      items: [
        'Automated CI/CD pipelines and "Golden Path" portals',
        'Orchestrating Jenkins, Bitbucket, and Terraform',
        'GitOps and Kubernetes transformation',
        'Infrastructure as Code (IaC) implementation',
        'Developer experience optimization'
      ],
      stats: { projects: 200, clients: 75, satisfaction: 97 },
      color: '#4facfe'
    },
    { 
      id: 'qa', 
      icon: <FaBug />, 
      title: 'Quality Assurance (QA) & Testing', 
      subtitle: 'Ensuring quality at every step',
      items: [
        'Automated testing frameworks',
        'SAST/DAST security testing integration',
        'AI-driven predictive bug detection',
        'Performance and load testing',
        'User acceptance testing (UAT)'
      ],
      stats: { projects: 180, clients: 70, satisfaction: 95 },
      color: '#43e97b'
    }
  ];

  // Add hover animation class
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .service-card-hover {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .service-card-hover:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '80px 0', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <Badge bg="light" text="dark" style={{ marginBottom: '20px', padding: '8px 16px' }}>
                Full-Lifecycle Engagement
              </Badge>
              <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>
                Core Services
              </h1>
              <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.95 }}>
                Comprehensive service pillars designed to address every aspect of your technology journey
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid */}
      <Container style={{ padding: '80px 0' }}>
        <Row>
          {services.map((service, index) => (
            <Col lg={6} xl={4} key={index} className="mb-4">
              <Card 
                ref={el => cardsRef.current[index] = el}
                className="service-card-hover"
                style={{ 
                  backgroundColor: '#1a1a1a', 
                  border: 'none', 
                  borderRadius: '20px', 
                  height: '100%',
                  overflow: 'hidden'
                }}
              >
                {/* Gradient top border */}
                <div style={{ 
                  height: '4px', 
                  background: `linear-gradient(90deg, ${service.color}, transparent)`,
                  width: '100%'
                }} />
                
                <Card.Body style={{ padding: '30px' }}>
                  {/* Icon */}
                  <div style={{ 
                    fontSize: '3rem', 
                    color: service.color, 
                    marginBottom: '20px',
                    display: 'inline-block',
                    padding: '15px',
                    backgroundColor: 'rgba(102,126,234,0.1)',
                    borderRadius: '15px'
                  }}>
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 style={{ marginBottom: '10px', fontSize: '1.5rem' }}>{service.title}</h3>
                  <p style={{ color: service.color, marginBottom: '20px', fontSize: '0.9rem' }}>
                    {service.subtitle}
                  </p>
                  
                  {/* Stats */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-around', 
                    marginBottom: '25px',
                    padding: '15px 0',
                    borderTop: '1px solid #333',
                    borderBottom: '1px solid #333'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: '700', color: service.color }}>
                        {service.stats.projects}+
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#aaa' }}>Projects</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: '700', color: service.color }}>
                        {service.stats.clients}+
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#aaa' }}>Clients</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: '700', color: service.color }}>
                        {service.stats.satisfaction}%
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#aaa' }}>Satisfaction</div>
                    </div>
                  </div>
                  
                  {/* Services list */}
                  <ul style={{ color: '#ccc', lineHeight: '1.8', paddingLeft: '20px', marginBottom: '25px' }}>
                    {service.items.slice(0, 4).map((item, i) => (
                      <li key={i} style={{ marginBottom: '8px' }}>
                        <FaCheckCircle style={{ color: service.color, marginRight: '10px', fontSize: '0.8rem' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Button */}
                  <Button 
                    as={Link} 
                    to={`/services/${service.id}`} 
                    variant="outline-primary" 
                    style={{ 
                      borderRadius: '50px', 
                      width: '100%',
                      padding: '10px',
                      borderColor: service.color,
                      color: service.color
                    }}
                  >
                    Learn More <FaArrowRight style={{ marginLeft: '8px', fontSize: '0.8rem' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Why Choose Us Section */}
        <Row style={{ marginTop: '60px' }}>
          <Col>
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)',
              borderRadius: '20px',
              padding: '50px',
              textAlign: 'center'
            }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#667eea' }}>Why Choose MJ&Roberts?</h2>
              <Row style={{ marginTop: '40px' }}>
                <Col md={3} sm={6} className="mb-4">
                  <FaRocket style={{ fontSize: '2rem', color: '#667eea', marginBottom: '10px' }} />
                  <h5>Speed & Agility</h5>
                  <p style={{ color: '#aaa', fontSize: '0.9rem' }}>50% faster time-to-market</p>
                </Col>
                <Col md={3} sm={6} className="mb-4">
                  <FaShieldAlt style={{ fontSize: '2rem', color: '#764ba2', marginBottom: '10px' }} />
                  <h5>Security First</h5>
                  <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Enterprise-grade protection</p>
                </Col>
                <Col md={3} sm={6} className="mb-4">
                  <FaClock style={{ fontSize: '2rem', color: '#f093fb', marginBottom: '10px' }} />
                  <h5>24/7 Support</h5>
                  <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Round-the-clock assistance</p>
                </Col>
                <Col md={3} sm={6} className="mb-4">
                  <FaChartLine style={{ fontSize: '2rem', color: '#4facfe', marginBottom: '10px' }} />
                  <h5>Proven ROI</h5>
                  <p style={{ color: '#aaa', fontSize: '0.9rem' }}>30% cost reduction average</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* CTA Section */}
        <Row style={{ marginTop: '60px' }}>
          <Col className="text-center">
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '20px', padding: '50px' }}>
              <h3 style={{ marginBottom: '20px' }}>Ready to Transform Your Business?</h3>
              <p style={{ color: '#aaa', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                Let's discuss how our services can help you achieve your digital transformation goals.
              </p>
              <div>
                <Button as={Link} to="/contact" variant="primary" size="lg" style={{ borderRadius: '50px', marginRight: '15px' }}>
                  Schedule a Consultation
                </Button>
                <Button as={Link} to="/case-studies" variant="outline-light" size="lg" style={{ borderRadius: '50px' }}>
                  View Case Studies
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesPage;