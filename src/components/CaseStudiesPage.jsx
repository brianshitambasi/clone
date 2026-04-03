// components/CaseStudiesPage.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaShoppingCart, FaServer, FaCloud } from 'react-icons/fa';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      icon: <FaShoppingCart />,
      title: 'Zero-Copy Revolution',
      subtitle: 'Retail Data Federation',
      desc: 'Implemented zero-copy data integration for a major retailer, reducing data duplication by 95% and accelerating analytics by 10x.',
      results: ['95% reduction in data duplication', '10x faster analytics', '$2M annual savings']
    },
    {
      icon: <FaServer />,
      title: 'Project Titan',
      subtitle: '2,000-Server Migration',
      desc: 'Executed a zero-downtime migration of 2,000 servers to AWS, transforming legacy infrastructure into a modern cloud architecture.',
      results: ['Zero downtime migration', '40% cost reduction', '99.99% availability achieved']
    },
    {
      icon: <FaCloud />,
      title: 'Mission Impact',
      subtitle: 'Salesforce Nonprofit Cloud',
      desc: 'Scaled global nonprofit operations across 50 countries using Salesforce Nonprofit Cloud and AI-driven donor insights.',
      results: ['300% increase in donor engagement', '50-country rollout', 'Real-time impact reporting']
    }
  ];

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <h1 className="text-center" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>Case Studies</h1>
          <p className="text-center" style={{ fontSize: '1.2rem' }}>Proven results from real-world implementations</p>
        </Container>
      </section>

      <Container style={{ padding: '80px 0' }}>
        {caseStudies.map((study, index) => (
          <Card key={index} style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '30px', overflow: 'hidden' }}>
            <Row className="g-0">
              <Col md={4} style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
                <div style={{ fontSize: '5rem', color: 'white' }}>{study.icon}</div>
              </Col>
              <Col md={8}>
                <Card.Body style={{ padding: '40px' }}>
                  <h5 style={{ color: '#667eea', marginBottom: '10px' }}>{study.subtitle}</h5>
                  <h2 style={{ marginBottom: '20px' }}>{study.title}</h2>
                  <p style={{ color: '#ccc', fontSize: '1.1rem', marginBottom: '20px' }}>{study.desc}</p>
                  <h4 style={{ marginBottom: '15px', fontSize: '1.1rem' }}>Key Results:</h4>
                  <ul style={{ color: '#aaa', marginBottom: '20px' }}>
                    {study.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                  <Button variant="outline-primary">Read Full Case Study →</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default CaseStudiesPage;