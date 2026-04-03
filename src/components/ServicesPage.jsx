// components/ServicesPage.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaCode, FaHeadset, FaCloud, FaBug } from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    { icon: <FaLightbulb />, title: 'IT Consulting & Digital Transformation Advisory', items: ['Postural assessments to identify technical debt', 'Strategy for transitioning from monolithic to microservices', 'TCO analysis and roadmap design'] },
    { icon: <FaCode />, title: 'Software Engineering & Application Services', items: ['Custom cloud-native builds (Java, Python, .NET, Go)', 'Building secure, high-throughput API layers', 'Continuous performance tuning and refactoring'] },
    { icon: <FaHeadset />, title: 'Managed IT Services & Support', items: ['24/7 Site Reliability Engineering (SRE) hubs', 'Level 3 global technical support with 99.9% SLA', 'Seamless transition into modern ITSM tools'] },
    { icon: <FaCloud />, title: 'DevOps & Platform Engineering', items: ['Automated CI/CD pipelines and "Golden Path" portals', 'Orchestrating Jenkins, Bitbucket, and Terraform', 'GitOps and Kubernetes transformation'] },
    { icon: <FaBug />, title: 'Quality Assurance (QA) & Testing', items: ['Automated testing frameworks', 'SAST/DAST security testing integration', 'AI-driven predictive bug detection'] }
  ];

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <h1 className="text-center" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>Core Services</h1>
          <p className="text-center" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>Full-lifecycle engagement model for every service pillar</p>
        </Container>
      </section>

      <Container style={{ padding: '80px 0' }}>
        <Row>
          {services.map((service, index) => (
            <Col lg={6} key={index} className="mb-4">
              <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', height: '100%' }}>
                <Card.Body style={{ padding: '30px' }}>
                  <div style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }}>{service.icon}</div>
                  <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>{service.title}</h3>
                  <ul style={{ color: '#ccc', lineHeight: '1.8', paddingLeft: '20px' }}>
                    {service.items.map((item, i) => (<li key={i}>{item}</li>))}
                  </ul>
                  <Button as={Link} to="/contact" variant="outline-primary" style={{ marginTop: '20px', borderRadius: '50px' }}>Learn More →</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServicesPage;