// components/CompanyDetail.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const CompanyDetail = () => {
  const { id } = useParams();
  return (
    <div style={{ paddingTop: '80px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' }}>
      <h1>Company: {id}</h1>
      <p>Detailed information About {id} coming soon.</p>
      <Button as={Link} to="/company" variant="primary">Back to Company</Button>
    </div>
  );
};

export default CompanyDetail;