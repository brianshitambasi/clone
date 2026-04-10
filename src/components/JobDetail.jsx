// components/JobDetail.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const JobDetail = () => {
  const { id } = useParams();
  return (
    <div style={{ paddingTop: '80px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' }}>
      <h1>Job Position: {id}</h1>
      <p>Detailed job description and requirements coming soon.</p>
      <Button as={Link} to="/jobs" variant="primary">Back to Jobs</Button>
    </div>
  );
};

export default JobDetail;