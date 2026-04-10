// components/ProjectsPage.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const projects = [
    { id: 'investment-platform', title: 'Investment Portfolio Platform', description: 'A web-based investment portfolio management platform serving 30,000+ North-American investors with advanced risk management and stock analytics.', technologies: ['React', 'Node.js', 'MongoDB'] },
    { id: 'pharmaceutical-analytics', title: 'Pharmaceutical Analytics Suite', description: 'Cloud-based data management, visualization and analytics suite for a US pharmaceutical multinational with 500 million patient records.', technologies: ['Python', 'AWS', 'Tableau'] },
    { id: 'ai-shopping-platform', title: 'AI Shopping Platform', description: 'AI solutions for a global fashion retailer including predictive BI and personalized recommendations.', technologies: ['TensorFlow', 'React', 'Redis'] }
  ];

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <h1 className="text-center" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>Our Projects</h1>
          <p className="text-center" style={{ fontSize: '1.2rem', color: '#ccc' }}>Explore our successful case studies and innovative solutions</p>
        </Container>
      </section>

      <Container style={{ padding: '60px 0' }}>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', overflow: 'hidden', height: '100%' }}>
                <Card.Body style={{ padding: '25px' }}>
                  <Card.Title style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px', color: '#667eea' }}>{project.title}</Card.Title>
                  <Card.Text style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '15px' }}>{project.description}</Card.Text>
                  <div className="mt-3 mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} style={{ display: 'inline-block', background: '#333', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', marginRight: '8px', marginBottom: '8px', color: '#667eea' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button as={Link} to={`/projects/${project.id}`} variant="outline-primary" className="mt-2" style={{ borderRadius: '50px' }}>View Case Study →</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProjectsPage;