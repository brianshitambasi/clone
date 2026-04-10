// components/IndustryDetail.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const IndustryDetail = () => {
  const { id } = useParams();
  return (
    <div style={{ paddingTop: '80px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' }}>
      <h1>Industry: {id}</h1>
      <p>Detailed information about {id} industry solutions coming soon.</p>
      <Button as={Link} to="/industries" variant="primary">Back to Industries</Button>
    </div>
  );
};

export default IndustryDetail;