// components/BlogPage.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const BlogPage = () => {
  const blogPosts = [
    { title: 'The Future of AI in Business', date: 'March 15, 2024', excerpt: 'Explore how artificial intelligence is transforming business operations and decision-making processes.' },
    { title: 'Digital Transformation Trends 2024', date: 'February 28, 2024', excerpt: 'Key trends shaping digital transformation strategies for the coming year.' },
    { title: 'Why Your Business Needs a CRM', date: 'February 10, 2024', excerpt: 'Understanding the importance of customer relationship management systems.' }
  ];

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container>
        <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '20px', textAlign: 'center' }}>Insights & Blog</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '50px', textAlign: 'center' }}>
          Latest thoughts and insights from our experts
        </p>
        <Row>
          {blogPosts.map((post, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4" style={{ borderRadius: '15px', height: '100%' }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: '1.3rem', fontWeight: '600' }}>{post.title}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">{post.date}</Card.Subtitle>
                  <Card.Text style={{ color: '#666' }}>{post.excerpt}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BlogPage;