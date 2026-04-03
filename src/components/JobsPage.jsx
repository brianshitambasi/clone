// components/JobsPage.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import axios from 'axios';

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:3004/api/jobs');
      if (response.data.length > 0) {
        setJobs(response.data);
      } else {
        setJobs([
          { title: 'Senior Full Stack Developer', description: 'Looking for an experienced developer to lead our web development team.', location: 'Remote' },
          { title: 'AI/ML Engineer', description: 'Join our AI team to develop cutting-edge machine learning solutions.', location: 'New York, NY' },
          { title: 'DevOps Engineer', description: 'Help us build and maintain our cloud infrastructure.', location: 'San Francisco, CA' },
          { title: 'UI/UX Designer', description: 'Create beautiful and intuitive user interfaces for our products.', location: 'Remote' }
        ]);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setJobs([
        { title: 'Senior Full Stack Developer', description: 'Looking for an experienced developer.', location: 'Remote' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center" style={{ paddingTop: '100px' }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container>
        <h1 className="text-center mb-4" style={{ fontSize: '3rem', fontWeight: '700' }}>Join Our Team</h1>
        <p className="text-center mb-5" style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
          We're always looking for talented individuals to join our growing team
        </p>
        
        <Row>
          <Col lg={8} className="mx-auto">
            {jobs.map((job, index) => (
              <Card key={index} className="mb-4" style={{ borderRadius: '15px', transition: 'transform 0.3s ease' }}>
                <Card.Body>
                  <Row>
                    <Col md={8}>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '10px' }}>{job.title}</h3>
                      <p style={{ color: '#666', marginBottom: '15px' }}>{job.description}</p>
                      <Badge bg="primary" style={{ padding: '8px 15px', borderRadius: '20px' }}>
                        📍 {job.location}
                      </Badge>
                    </Col>
                    <Col md={4} className="d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
                      <Button variant="primary" style={{ borderRadius: '50px', padding: '10px 30px' }}>Apply Now</Button>
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