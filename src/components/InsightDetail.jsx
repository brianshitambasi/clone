// components/InsightDetail.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const InsightDetail = () => {
  const { id } = useParams();
  return (
    <div style={{ paddingTop: '80px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' }}>
      <h1>Insight: {id}</h1>
      <p>Detailed article content coming soon.</p>
      <Button as={Link} to="/insights" variant="primary">Back to Insights</Button>
    </div>
  );
};

export default InsightDetail;