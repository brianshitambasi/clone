// components/TechnologiesPage.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TechnologiesPage = () => {
  const technologies = [
    { id: 'salesforce', name: 'Salesforce', desc: 'Sales, Service, and Nonprofit Cloud modernization', logo: '☁️' },
    { id: 'aws', name: 'AWS', desc: 'Migration Acceleration Program (MAP) and SageMaker AI', logo: '⚡' },
    { id: 'azure', name: 'Microsoft Azure & Dynamics 365', desc: 'Hybrid-cloud implementation and Azure OpenAI', logo: '🪟' },
    { id: 'sap-odoo', name: 'SAP Commerce & Odoo', desc: 'Enterprise Resource Planning (ERP) modernization', logo: '📊' },
    { id: 'atlassian', name: 'Atlassian', desc: 'Optimizing SDLC through Jira/Confluence automation', logo: '🔧' },
    { id: 'powerbi', name: 'Power BI', desc: 'Data visualization and ETL integration', logo: '📈' }
  ];

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <h1 className="text-center" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>Technology Partner Stack</h1>
          <p className="text-center" style={{ fontSize: '1.2rem' }}>Consultation • Implementation • Integration • Support</p>
        </Container>
      </section>

      <Container style={{ padding: '60px 0' }}>
        <Row>
          {technologies.map((tech, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '30px', textAlign: 'center', height: '100%' }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>{tech.logo}</div>
                <h3 style={{ marginBottom: '15px', color: '#667eea' }}>{tech.name}</h3>
                <p style={{ color: '#aaa', marginBottom: '20px' }}>{tech.desc}</p>
                <Button as={Link} to={`/technologies/${tech.id}`} variant="outline-primary" style={{ borderRadius: '50px' }}>Learn More →</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TechnologiesPage;