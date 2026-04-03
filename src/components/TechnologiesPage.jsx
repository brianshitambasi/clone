// components/TechnologiesPage.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TechnologiesPage = () => {
  const technologies = [
    { name: 'Salesforce', desc: 'Sales, Service, and Nonprofit Cloud modernization', logo: '☁️' },
    { name: 'AWS', desc: 'Migration Acceleration Program (MAP) and SageMaker AI', logo: '⚡' },
    { name: 'Microsoft Azure & Dynamics 365', desc: 'Hybrid-cloud implementation and Azure OpenAI', logo: '🪟' },
    { name: 'SAP Commerce & Odoo', desc: 'Enterprise Resource Planning (ERP) modernization', logo: '📊' },
    { name: 'Atlassian', desc: 'Optimizing SDLC through Jira/Confluence automation', logo: '🔧' },
    { name: 'Power BI', desc: 'Data visualization and ETL integration', logo: '📈' }
  ];

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <h1 className="text-center" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>Technology Partner Stack</h1>
          <p className="text-center" style={{ fontSize: '1.2rem' }}>Consultation • Implementation • Integration • Support</p>
        </Container>
      </section>

      <Container style={{ padding: '80px 0' }}>
        <Row>
          {technologies.map((tech, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '30px', textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>{tech.logo}</div>
                <h3 style={{ marginBottom: '15px', color: '#667eea' }}>{tech.name}</h3>
                <p style={{ color: '#aaa' }}>{tech.desc}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TechnologiesPage;