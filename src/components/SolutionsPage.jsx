// components/SolutionsPage.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaBuilding, FaShoppingCart, FaChartBar, FaRobot, FaVrCardboard } from 'react-icons/fa';

const SolutionsPage = () => {
  const solutions = [
    { icon: <FaUsers />, title: 'CRM (Salesforce, Dynamics 365)', desc: 'Full-cycle implementation and Zero-Copy Integration with data lakes' },
    { icon: <FaBuilding />, title: 'ERP (SAP, Odoo)', desc: 'Strategic consultation and legacy-to-cloud migration' },
    { icon: <FaShoppingCart />, title: 'Digital Commerce', desc: 'Headless commerce development and global payment gateway integration' },
    { icon: <FaChartBar />, title: 'Data Analytics & BI', desc: 'Power BI dashboards and predictive data modeling' },
    { icon: <FaRobot />, title: 'Artificial Intelligence & RPA', desc: 'Autonomous Agentic AI and robotic process automation' },
    { icon: <FaVrCardboard />, title: 'AR/VR & IoT', desc: 'Immersive "Digital Twin" development and edge-device integration' }
  ];

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <h1 className="text-center" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>Solutions</h1>
          <p className="text-center" style={{ fontSize: '1.2rem' }}>360-degree service model powered by MJ&Roberts</p>
        </Container>
      </section>

      <Container style={{ padding: '80px 0' }}>
        <Row>
          {solutions.map((solution, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px', textAlign: 'center', height: '100%' }}>
                <div style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }}>{solution.icon}</div>
                <h4 style={{ marginBottom: '15px' }}>{solution.title}</h4>
                <p style={{ color: '#aaa' }}>{solution.desc}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SolutionsPage;