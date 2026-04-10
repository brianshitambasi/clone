// components/JobsPage.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const JobsPage = () => {
  const jobs = [
    { id: 'senior-fullstack', title: 'Senior Full Stack Developer', description: 'Looking for an experienced developer to lead our web development team. You will be responsible for architecting and building scalable web applications.', location: 'Remote', type: 'Full-time' },
    { id: 'ai-ml-engineer', title: 'AI/ML Engineer', description: 'Join our AI team to develop cutting-edge machine learning solutions. Work on exciting projects including computer vision, NLP, and predictive analytics.', location: 'New York, NY', type: 'Full-time' },
    { id: 'devops-engineer', title: 'DevOps Engineer', description: 'Help us build and maintain our cloud infrastructure. Design and implement CI/CD pipelines, manage Kubernetes clusters, and optimize cloud costs.', location: 'San Francisco, CA', type: 'Full-time' },
    { id: 'ui-ux-designer', title: 'UI/UX Designer', description: 'Create beautiful and intuitive user interfaces for our products. Work closely with product managers and developers to deliver exceptional user experiences.', location: 'Remote', type: 'Full-time' }
  ];

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <h1 className="text-center" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>Join Our Team</h1>
          <p className="text-center" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>We're always looking for talented individuals to join our growing team</p>
        </Container>
      </section>

      <Container style={{ padding: '60px 0' }}>
        <Row>
          <Col lg={8} className="mx-auto">
            {jobs.map((job, index) => (
              <Card key={index} className="mb-4" style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px' }}>
                <Card.Body style={{ padding: '30px' }}>
                  <Row>
                    <Col md={8}>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '10px', color: '#667eea' }}>{job.title}</h3>
                      <p style={{ color: '#ccc', marginBottom: '15px' }}>{job.description}</p>
                      <div>
                        <Badge bg="primary" style={{ padding: '8px 15px', borderRadius: '20px', marginRight: '10px' }}>📍 {job.location}</Badge>
                        <Badge bg="info" style={{ padding: '8px 15px', borderRadius: '20px' }}>💼 {job.type}</Badge>
                      </div>
                    </Col>
                    <Col md={4} className="d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
                      <Button as={Link} to={`/jobs/${job.id}`} variant="primary" style={{ borderRadius: '50px', padding: '10px 30px' }}>View Details →</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JobsPage;