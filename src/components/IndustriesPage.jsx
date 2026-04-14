// components/IndustriesPage.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaUniversity, FaIndustry, FaLaptopCode, FaBriefcase, FaTimes } from 'react-icons/fa';

const IndustriesPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const industries = [
    { 
      id: 'healthcare', 
      icon: <FaHeartbeat />, 
      title: 'Healthcare', 
      desc: 'HIPAA-compliant cloud and AI diagnostics',
      color: '#e74c3c',
      fullDesc: 'Our healthcare solutions include HIPAA-compliant cloud infrastructure, AI-powered diagnostic tools, electronic health records integration, telemedicine platforms, and real-time patient monitoring systems. We ensure data security while enabling cutting-edge medical technology.',
      features: ['HIPAA Compliant Cloud', 'AI Diagnostics', 'EHR Integration', 'Telemedicine', 'Patient Monitoring']
    },
    { 
      id: 'finance', 
      icon: <FaUniversity />, 
      title: 'Finance & Insurance', 
      desc: 'Hardened security for Fintech and fraud detection',
      color: '#f39c12',
      fullDesc: 'We provide enterprise-grade security solutions for financial institutions, including fraud detection algorithms, blockchain integration, secure payment gateways, and regulatory compliance tools for fintech and insurance companies.',
      features: ['Fraud Detection', 'Blockchain Integration', 'Secure Payments', 'Regulatory Compliance', 'Risk Assessment']
    },
    { 
      id: 'manufacturing', 
      icon: <FaIndustry />, 
      title: 'Manufacturing & Retail', 
      desc: 'IoT integration and hyper-personalized supply chains',
      color: '#3498db',
      fullDesc: 'Transform your manufacturing and retail operations with IoT sensors, real-time inventory tracking, predictive maintenance, automated warehouses, and hyper-personalized customer experiences powered by AI.',
      features: ['IoT Integration', 'Supply Chain Optimization', 'Predictive Maintenance', 'Automated Warehouses', 'Personalized Retail']
    },
    { 
      id: 'software', 
      icon: <FaLaptopCode />, 
      title: 'Software & Hi-Tech', 
      desc: 'Scaling SaaS infrastructure and optimizing COGS',
      color: '#2ecc71',
      fullDesc: 'Scale your SaaS platform efficiently with our cloud-native solutions, microservices architecture, cost optimization strategies, and performance monitoring tools that help reduce COGS while maintaining high availability.',
      features: ['Cloud-Native Architecture', 'Microservices', 'Cost Optimization', 'Performance Monitoring', 'Auto-scaling']
    },
    { 
      id: 'professional', 
      icon: <FaBriefcase />, 
      title: 'Professional Services', 
      desc: 'Automating project lifecycles and billable utilization',
      color: '#9b59b6',
      fullDesc: 'Streamline your professional services with automated project management, resource allocation, time tracking, billing systems, and utilization analytics to maximize profitability and efficiency.',
      features: ['Project Automation', 'Resource Management', 'Time Tracking', 'Automated Billing', 'Utilization Analytics']
    }
  ];

  const handleLearnMore = (industry) => {
    setSelectedIndustry(industry);
    setShowModal(true);
  };

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
              <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '30px', textAlign: 'center', height: '100%', transition: 'transform 0.3s' }}>
                <div style={{ fontSize: '3rem', color: industry.color, marginBottom: '20px' }}>{industry.icon}</div>
                <h3 style={{ marginBottom: '15px' }}>{industry.title}</h3>
                <p style={{ color: '#aaa', marginBottom: '20px' }}>{industry.desc}</p>
                <Button 
                  onClick={() => handleLearnMore(industry)} 
                  variant="outline-primary" 
                  style={{ borderRadius: '50px' }}
                >
                  Learn More →
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for detailed information */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header style={{ backgroundColor: selectedIndustry?.color || '#667eea', borderBottom: 'none' }}>
          <Modal.Title style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.8rem' }}>{selectedIndustry?.icon}</span>
            <span>{selectedIndustry?.title}</span>
          </Modal.Title>
          <Button variant="light" onClick={() => setShowModal(false)} style={{ borderRadius: '50%', padding: '5px 12px' }}>
            <FaTimes />
          </Button>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '30px' }}>
          <h4 style={{ color: selectedIndustry?.color, marginBottom: '20px' }}>Overview</h4>
          <p style={{ lineHeight: '1.8', marginBottom: '30px' }}>{selectedIndustry?.fullDesc}</p>
          
          <h4 style={{ color: selectedIndustry?.color, marginBottom: '20px' }}>Key Solutions</h4>
          <Row>
            {selectedIndustry?.features.map((feature, idx) => (
              <Col md={6} key={idx} className="mb-3">
                <div style={{ 
                  backgroundColor: '#2a2a2a', 
                  padding: '12px 15px', 
                  borderRadius: '10px',
                  borderLeft: `4px solid ${selectedIndustry?.color}`
                }}>
                  ✓ {feature}
                </div>
              </Col>
            ))}
          </Row>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#1a1a1a', borderTop: '1px solid #333' }}>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button as={Link} to="/contact" style={{ backgroundColor: selectedIndustry?.color, border: 'none' }}>
            Request Consultation →
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default IndustriesPage;