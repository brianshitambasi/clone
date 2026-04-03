// components/InsightsPage.js
import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const InsightsPage = () => {
  const trendingTopics = [
    { title: 'Agentic AI', desc: 'Why the "Chatbot" era is over', tag: 'Trending', date: 'Mar 15, 2024' },
    { title: 'Cloud Sovereignty', desc: 'Maintaining data control in a multi-cloud world', tag: 'Trending', date: 'Mar 10, 2024' },
    { title: 'Blockchain & IoT', desc: 'Decentralized trust and edge intelligence', tag: 'Trending', date: 'Mar 5, 2024' }
  ];

  const industryTopics = [
    { title: 'Fintech Innovation', desc: 'Secure cloud ledgers and automated compliance', tag: 'Fintech', date: 'Mar 12, 2024' },
    { title: 'Healthtech Privacy', desc: 'The intersection of Privacy and Predictive Diagnostics', tag: 'Healthtech', date: 'Mar 8, 2024' }
  ];

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <h1 className="text-center" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>Insights</h1>
          <p className="text-center" style={{ fontSize: '1.2rem' }}>Thought leadership from industry experts</p>
        </Container>
      </section>

      <Container style={{ padding: '80px 0' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#667eea' }}>Trending Topics</h2>
        <Row className="mb-5">
          {trendingTopics.map((topic, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px', height: '100%' }}>
                <Badge bg="primary" style={{ width: 'fit-content', marginBottom: '15px' }}>{topic.tag}</Badge>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{topic.title}</h3>
                <p style={{ color: '#aaa', marginBottom: '15px' }}>{topic.desc}</p>
                <small style={{ color: '#666' }}>{topic.date}</small>
              </Card>
            </Col>
          ))}
        </Row>

        <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#667eea' }}>Industry Related</h2>
        <Row>
          {industryTopics.map((topic, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px' }}>
                <Badge bg="info" style={{ width: 'fit-content', marginBottom: '15px' }}>{topic.tag}</Badge>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{topic.title}</h3>
                <p style={{ color: '#aaa' }}>{topic.desc}</p>
                <small style={{ color: '#666' }}>{topic.date}</small>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default InsightsPage;