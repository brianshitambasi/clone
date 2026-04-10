// components/IndustriesPage.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaUniversity, FaIndustry, FaLaptopCode, FaBriefcase } from 'react-icons/fa';

const IndustriesPage = () => {
  const industries = [
    { id: 'healthcare', icon: <FaHeartbeat />, title: 'Healthcare', desc: 'HIPAA-compliant cloud and AI diagnostics', color: '#e74c3c' },
    { id: 'finance', icon: <FaUniversity />, title: 'Finance & Insurance', desc: 'Hardened security for Fintech and fraud detection', color: '#f39c12' },
    { id: 'manufacturing', icon: <FaIndustry />, title: 'Manufacturing & Retail', desc: 'IoT integration and hyper-personalized supply chains', color: '#3498db' },
    { id: 'software', icon: <FaLaptopCode />, title: 'Software & Hi-Tech', desc: 'Scaling SaaS infrastructure and optimizing COGS', color: '#2ecc71' },
    { id: 'professional', icon: <FaBriefcase />, title: 'Professional Services', desc: 'Automating project lifecycles and billable utilization', color: '#9b59b6' }
  ];

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <h1 className="text-center" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>Industries We Serve</h1>
          <p className="text-center" style={{ fontSize: '1.2rem' }}>Vertically aligned expertise for high-consequence sectors</p>
        </Container>
      </section>

      <Container style={{ padding: '60px 0' }}>
        <Row>
          {industries.map((industry, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '30px', textAlign: 'center', height: '100%' }}>
                <div style={{ fontSize: '3rem', color: industry.color, marginBottom: '20px' }}>{industry.icon}</div>
                <h3 style={{ marginBottom: '15px' }}>{industry.title}</h3>
                <p style={{ color: '#aaa', marginBottom: '20px' }}>{industry.desc}</p>
                <Button as={Link} to={`/industries/${industry.id}`} variant="outline-primary" style={{ borderRadius: '50px' }}>Learn More →</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default IndustriesPage;