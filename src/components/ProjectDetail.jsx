// components/ProjectDetail.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  return (
    <div style={{ paddingTop: '80px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' }}>
      <h1>Project: {id}</h1>
      <p>Detailed project information coming soon.</p>
      <Button as={Link} to="/projects" variant="primary">Back to Projects</Button>
    </div>
  );
};

export default ProjectDetail;