// components/CompanyPage.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRocket, FaCheckCircle, FaHandshake, FaUsers } from 'react-icons/fa';

const CompanyPage = () => {
  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <h1 className="text-center" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>Company</h1>
        </Container>
      </section>

      <Container style={{ padding: '80px 0' }}>
        <Row>
          <Col lg={6} className="mb-4">
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '30px', height: '100%' }}>
              <FaRocket style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }} />
              <h3>Our Mission</h3>
              <p style={{ color: '#aaa' }}>To engineer resilience into the global enterprise through architectural discipline and strategic innovation.</p>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '30px', height: '100%' }}>
              <FaCheckCircle style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }} />
              <h3>The Well-Architected Standard</h3>
              <p style={{ color: '#aaa' }}>Our proprietary framework for operational excellence, security, reliability, performance efficiency, and cost optimization.</p>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '30px', height: '100%' }}>
              <FaHandshake style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }} />
              <h3>Elite Partnerships</h3>
              <p style={{ color: '#aaa' }}>AWS Premier Partner • Salesforce Platinum Partner • Oracle Gold Partner</p>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '30px', height: '100%' }}>
              <FaUsers style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }} />
              <h3>Join the Silicon Workforce</h3>
              <p style={{ color: '#aaa' }}>We're hiring top talent in AI, Cloud Architecture, and Platform Engineering.</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CompanyPage;