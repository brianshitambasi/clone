// components/CaseStudyDetail.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const CaseStudyDetail = () => {
  const { id } = useParams();
  return (
    <div style={{ paddingTop: '80px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' }}>
      <h1>Case Study: {id}</h1>
      <p>Detailed case study content coming soon.</p>
      <Button as={Link} to="/case-studies" variant="primary">Back to Case Studies</Button>
    </div>
  );
};

export default CaseStudyDetail;