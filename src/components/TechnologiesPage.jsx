// components/TechnologiesPage.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const TechnologiesPage = () => {
  const technologies = [
    { 
      id: 'salesforce', 
      name: 'Salesforce', 
      desc: 'Sales, Service, and Nonprofit Cloud modernization. Transform customer relationships with AI-powered CRM solutions.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg',
      badge: 'Premier Partner',
      features: ['Sales Cloud', 'Service Cloud', 'Nonprofit Cloud', 'Einstein AI']
    },
    { 
      id: 'aws', 
      name: 'Amazon Web Services', 
      desc: 'Migration Acceleration Program (MAP) and SageMaker AI. Build and scale cloud-native applications with industry-leading infrastructure.',
      logo: '/image/static/t1.webp',
      badge: 'Advanced Partner',
      features: ['EC2', 'S3', 'Lambda', 'SageMaker']
    },
    { 
      id: 'azure', 
      name: 'Microsoft Azure', 
      desc: 'Hybrid-cloud implementation and Azure OpenAI. Enterprise-grade solutions for modern business challenges.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      badge: 'Gold Partner',
      features: ['Azure AI', 'DevOps', 'Kubernetes', 'Functions']
    },
    { 
      id: 'sap-odoo', 
      name: 'SAP & Odoo', 
      desc: 'Enterprise Resource Planning (ERP) modernization. Streamline operations from manufacturing to sales.',
      logo: '/image/static/t2.webp',
      badge: 'Implementation Partner',
      features: ['SAP S/4HANA', 'Odoo ERP', 'Business Intelligence', 'Supply Chain']
    },
    { 
      id: 'atlassian', 
      name: 'Atlassian', 
      desc: 'Optimizing SDLC through Jira/Confluence automation. Enhance team collaboration and software delivery.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
      badge: 'Solution Partner',
      features: ['Jira', 'Confluence', 'Bitbucket', 'Trello']
    },
    { 
      id: 'powerbi', 
      name: 'Microsoft Power BI', 
      desc: 'Data visualization and ETL integration. Turn complex data into actionable insights with interactive dashboards.',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
      badge: 'Gold Partner',
      features: ['Dashboards', 'DAX', 'Power Query', 'Row-level Security']
    }
  ];

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '80px 0', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <Badge bg="light" text="dark" style={{ marginBottom: '20px', padding: '8px 20px', fontSize: '0.9rem' }}>
                Trusted Technology Partners
              </Badge>
              <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px', color: '#ffffff' }}>
                Technology Partner Stack
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.95)', marginBottom: '0' }}>
                Consultation • Implementation • Integration • Support
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Content */}
      <Container style={{ padding: '80px 0' }}>
        {/* Introduction Text */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 style={{ color: '#667eea', marginBottom: '20px', fontSize: '2rem' }}>Our Technology Ecosystem</h2>
            <p style={{ color: '#cccccc', fontSize: '1.1rem', lineHeight: '1.6' }}>
              We partner with industry-leading technology providers to deliver best-in-class solutions 
              that drive business transformation and innovation.
            </p>
          </Col>
        </Row>

        {/* Technology Cards */}
        <Row>
          {technologies.map((tech, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card style={{ 
                backgroundColor: '#1a1a1a', 
                border: '1px solid #2a2a2a', 
                borderRadius: '20px', 
                padding: '30px', 
                textAlign: 'center', 
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(102,126,234,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                {/* Logo */}
                <div style={{ 
                  marginBottom: '25px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '80px',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  padding: '15px'
                }}>
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    style={{ 
                      maxWidth: '120px', 
                      maxHeight: '50px',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                
                {/* Badge */}
                <Badge style={{ 
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  marginBottom: '15px',
                  padding: '6px 14px',
                  fontSize: '0.75rem'
                }}>
                  {tech.badge}
                </Badge>
                
                {/* Title */}
                <h3 style={{ 
                  marginBottom: '15px', 
                  color: '#ffffff',
                  fontSize: '1.5rem',
                  fontWeight: '700'
                }}>
                  {tech.name}
                </h3>
                
                {/* Description */}
                <p style={{ 
                  color: '#aaaaaa', 
                  marginBottom: '20px', 
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  {tech.desc}
                </p>
                
                {/* Features */}
                <div style={{ 
                  marginBottom: '25px',
                  textAlign: 'left',
                  borderTop: '1px solid #2a2a2a',
                  paddingTop: '20px'
                }}>
                  <p style={{ color: '#667eea', fontSize: '0.85rem', marginBottom: '10px', fontWeight: '600' }}>
                    KEY CAPABILITIES:
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {tech.features.map((feature, idx) => (
                      <Badge key={idx} style={{ 
                        backgroundColor: '#2a2a2a', 
                        color: '#cccccc',
                        padding: '5px 12px',
                        fontSize: '0.7rem'
                      }}>
                        <FaCheckCircle style={{ marginRight: '5px', fontSize: '0.6rem', color: '#667eea' }} />
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Button */}
                <Button 
                  as={Link} 
                  to={`/technologies/${tech.id}`} 
                  variant="outline-primary" 
                  style={{ 
                    borderRadius: '50px', 
                    padding: '10px 25px',
                    borderColor: '#667eea',
                    color: '#667eea'
                  }}
                >
                  Learn More <FaArrowRight style={{ marginLeft: '8px', fontSize: '0.8rem' }} />
                </Button>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Why Choose Us Section */}
        <Row style={{ marginTop: '80px' }}>
          <Col lg={12}>
            <div style={{ 
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
              borderRadius: '20px',
              padding: '50px',
              textAlign: 'center'
            }}>
              <h2 style={{ color: '#667eea', marginBottom: '20px' }}>Why Choose Our Technology Partners?</h2>
              <Row style={{ marginTop: '40px' }}>
                <Col md={3} className="mb-3">
                  <div style={{ fontSize: '2rem', color: '#667eea', marginBottom: '10px' }}>🏆</div>
                  <h5 style={{ color: '#ffffff' }}>Certified Experts</h5>
                  <p style={{ color: '#aaaaaa', fontSize: '0.85rem' }}>200+ certified professionals</p>
                </Col>
                <Col md={3} className="mb-3">
                  <div style={{ fontSize: '2rem', color: '#667eea', marginBottom: '10px' }}>⚡</div>
                  <h5 style={{ color: '#ffffff' }}>Fast Implementation</h5>
                  <p style={{ color: '#aaaaaa', fontSize: '0.85rem' }}>Average 40% faster delivery</p>
                </Col>
                <Col md={3} className="mb-3">
                  <div style={{ fontSize: '2rem', color: '#667eea', marginBottom: '10px' }}>💰</div>
                  <h5 style={{ color: '#ffffff' }}>Cost Optimized</h5>
                  <p style={{ color: '#aaaaaa', fontSize: '0.85rem' }}>30% average cost reduction</p>
                </Col>
                <Col md={3} className="mb-3">
                  <div style={{ fontSize: '2rem', color: '#667eea', marginBottom: '10px' }}>🛡️</div>
                  <h5 style={{ color: '#ffffff' }}>24/7 Support</h5>
                  <p style={{ color: '#aaaaaa', fontSize: '0.85rem' }}>Round-the-clock assistance</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* CTA Section */}
        <Row style={{ marginTop: '60px' }}>
          <Col lg={8} className="mx-auto text-center">
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)',
              borderRadius: '15px',
              padding: '40px'
            }}>
              <h3 style={{ color: '#ffffff', marginBottom: '15px' }}>Ready to Transform Your Business?</h3>
              <p style={{ color: '#cccccc', marginBottom: '25px' }}>
                Let's discuss which technology stack is right for your organization.
              </p>
              <Button 
                as={Link} 
                to="/contact" 
                variant="primary" 
                style={{ 
                  borderRadius: '50px', 
                  padding: '12px 35px',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  border: 'none'
                }}
              >
                Schedule a Consultation →
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TechnologiesPage;