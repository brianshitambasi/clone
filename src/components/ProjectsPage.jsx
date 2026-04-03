// components/ProjectsPage.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const projects = [
    { title: 'Investment Portfolio Platform', description: 'A web-based investment portfolio management platform serving 30,000+ North-American investors with advanced risk management and stock analytics.', technologies: ['React', 'Node.js', 'MongoDB'] },
    { title: 'Pharmaceutical Analytics Suite', description: 'Cloud-based data management, visualization and analytics suite for a US pharmaceutical multinational with 500 million patient records.', technologies: ['Python', 'AWS', 'Tableau'] },
    { title: 'AI Shopping Platform', description: 'AI solutions for a global fashion retailer including predictive BI and personalized recommendations.', technologies: ['TensorFlow', 'React', 'Redis'] }
  ];

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container><h1 className="text-center mb-4" style={{ fontSize: '3rem', fontWeight: '700' }}>Our Projects</h1><p className="text-center mb-5" style={{ fontSize: '1.2rem', color: '#666' }}>Explore our successful case studies and innovative solutions</p>
        <Row>{projects.map((project, index) => (<Col md={6} lg={4} key={index} className="mb-4"><Card className="h-100" style={{ borderRadius: '15px', overflow: 'hidden' }}><Card.Body><Card.Title style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px' }}>{project.title}</Card.Title><Card.Text style={{ color: '#666', lineHeight: '1.6' }}>{project.description}</Card.Text><div className="mt-3">{project.technologies.map((tech, i) => (<span key={i} style={{ display: 'inline-block', background: '#e9ecef', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', marginRight: '8px', marginBottom: '8px' }}>{tech}</span>))}</div><Button as={Link} to="/contact" variant="outline-primary" className="mt-3">View Case Study →</Button></Card.Body></Card></Col>))}</Row>
      </Container>
    </div>
  );
};

export default ProjectsPage;