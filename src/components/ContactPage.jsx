// components/ContactPage.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container>
        <Row>
          <Col lg={6} className="mb-5">
            <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '20px' }}>Contact MJ & Roberts Consulting</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>Get in touch with us for any inquiries about our services</p>
            
            <div style={{ marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <FaEnvelope style={{ fontSize: '1.5rem', color: '#007bff', marginRight: '15px' }} />
                <div><h5 style={{ margin: 0 }}>Email Us</h5><p style={{ color: '#666', margin: 0 }}>info@mjroberts.com</p></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <FaPhone style={{ fontSize: '1.5rem', color: '#007bff', marginRight: '15px' }} />
                <div><h5 style={{ margin: 0 }}>Call Us</h5><p style={{ color: '#666', margin: 0 }}>+1 (555) 123-4567</p></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaMapMarkerAlt style={{ fontSize: '1.5rem', color: '#007bff', marginRight: '15px' }} />
                <div><h5 style={{ margin: 0 }}>Visit Us</h5><p style={{ color: '#666', margin: 0 }}>123 Business Ave, Suite 100<br />New York, NY 10001</p></div>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '40px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
              <h3 style={{ marginBottom: '30px' }}>Send us a message</h3>
              {submitted && <Alert variant="success">Message sent successfully! We'll get back to you soon.</Alert>}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3"><Form.Label>Full Name</Form.Label><Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required style={{ padding: '12px', borderRadius: '8px' }} /></Form.Group>
                <Form.Group className="mb-3"><Form.Label>Email Address</Form.Label><Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required style={{ padding: '12px', borderRadius: '8px' }} /></Form.Group>
                <Form.Group className="mb-4"><Form.Label>Message</Form.Label><Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} required rows={5} style={{ padding: '12px', borderRadius: '8px' }} /></Form.Group>
                <Button type="submit" variant="primary" style={{ width: '100%', padding: '12px', borderRadius: '8px', fontWeight: '600' }}>Send Message</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;