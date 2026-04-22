// components/ContactPage.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card, Image } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaUserTie, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // WhatsApp configuration
  const whatsappNumber = '254723156066';
  const whatsappMessage = encodeURIComponent('Hello! I would like to get more information about your services.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const whatsappCallLink = `https://wa.me/${whatsappNumber}`;

  // Website Owners/Administrators
  const owners = [
    {
      id: 1,
      name: "John Roberts",
      title: "Founder & CEO",
      email: "john.roberts@mjroberts.com",
      phone: "+254723156066",
      whatsapp: "254723156066",
      bio: "15+ years experience in business consulting",
      avatar: "https://ui-avatars.com/api/?name=John+Roberts&background=007bff&color=fff&size=128",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 2,
      name: "Mary Jane",
      title: "Senior Consultant",
      email: "mary.jane@mjroberts.com",
      phone: "+254712345678",
      whatsapp: "254712345678",
      bio: "Expert in strategic planning and operations",
      avatar: "https://ui-avatars.com/api/?name=Mary+Jane&background=28a745&color=fff&size=128",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 3,
      name: "Michael Otieno",
      title: "IT Director",
      email: "michael@mjroberts.com",
      phone: "+254798765432",
      whatsapp: "254798765432",
      bio: "Digital transformation specialist",
      avatar: "https://ui-avatars.com/api/?name=Michael+Otieno&background=dc3545&color=fff&size=128",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

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
        {/* Header Section */}
        <Row className="mb-5">
          <Col>
            <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '20px', textAlign: 'center' }}>
              Contact MJ & Roberts Consulting
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#666', textAlign: 'center' }}>
              Get in touch with us for any inquiries about our services
            </p>
          </Col>
        </Row>

        {/* Contact Info & Form Section */}
        <Row className="mb-5">
          <Col lg={6} className="mb-5">
            <div style={{ marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <FaEnvelope style={{ fontSize: '1.5rem', color: '#007bff', marginRight: '15px' }} />
                <div><h5 style={{ margin: 0 }}>Email Us</h5><p style={{ color: '#666', margin: 0 }}>info@mjroberts.com</p></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <FaPhone style={{ fontSize: '1.5rem', color: '#007bff', marginRight: '15px' }} />
                <div><h5 style={{ margin: 0 }}>Call Us</h5><p style={{ color: '#666', margin: 0 }}>+254723156066</p></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <FaWhatsapp style={{ fontSize: '1.5rem', color: '#25D366', marginRight: '15px' }} />
                <div>
                  <h5 style={{ margin: 0 }}>WhatsApp Support</h5>
                  <p style={{ color: '#666', margin: 0 }}>Chat with our support team instantly</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaMapMarkerAlt style={{ fontSize: '1.5rem', color: '#007bff', marginRight: '15px' }} />
                <div><h5 style={{ margin: 0 }}>Visit Us</h5><p style={{ color: '#666', margin: 0 }}>123 Business Ave, Suite 100<br />Nairobi, Kenya</p></div>
              </div>
            </div>

            {/* WhatsApp Action Buttons */}
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button style={{ backgroundColor: '#25D366', border: 'none', padding: '12px 24px', borderRadius: '50px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaWhatsapp size={20} /> Chat on WhatsApp
                </Button>
              </a>
              <a href={whatsappCallLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button variant="outline-success" style={{ padding: '12px 24px', borderRadius: '50px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaPhone size={16} /> Call via WhatsApp
                </Button>
              </a>
            </div>
          </Col>
          
          <Col lg={6}>
            <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '40px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
              <h3 style={{ marginBottom: '30px' }}>Send us a message</h3>
              {submitted && <Alert variant="success">Message sent successfully! We'll get back to you soon.</Alert>}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required style={{ padding: '12px', borderRadius: '8px' }} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required style={{ padding: '12px', borderRadius: '8px' }} />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} required rows={5} style={{ padding: '12px', borderRadius: '8px' }} />
                </Form.Group>
                <Button type="submit" variant="primary" style={{ width: '100%', padding: '12px', borderRadius: '8px', fontWeight: '600' }}>Send Message</Button>
              </Form>
            </div>
          </Col>
        </Row>

        {/* Team Owners/Administrators Section */}
        <Row className="mt-5">
          <Col>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '15px' }}>
                <FaUserTie style={{ marginRight: '15px', color: '#007bff' }} />
                Meet Our Leadership Team
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                Our experienced administrators are here to help you succeed
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          {owners.map((owner) => (
            <Col lg={4} md={6} className="mb-4" key={owner.id}>
              <Card style={{ 
                borderRadius: '15px', 
                overflow: 'hidden',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                height: '100%'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Card.Body style={{ textAlign: 'center', padding: '30px 20px' }}>
                  <Image 
                    src={owner.avatar} 
                    roundedCircle 
                    style={{ 
                      width: '120px', 
                      height: '120px', 
                      objectFit: 'cover',
                      marginBottom: '20px',
                      border: '3px solid #007bff',
                      padding: '3px'
                    }} 
                  />
                  <Card.Title style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '5px' }}>
                    {owner.name}
                  </Card.Title>
                  <Card.Subtitle style={{ color: '#007bff', marginBottom: '15px', fontSize: '1rem' }}>
                    {owner.title}
                  </Card.Subtitle>
                  <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px' }}>
                    {owner.bio}
                  </p>
                  
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px', fontSize: '0.9rem' }}>
                      <FaEnvelope style={{ marginRight: '8px', color: '#007bff' }} />
                      <a href={`mailto:${owner.email}`} style={{ color: '#666', textDecoration: 'none' }}>
                        {owner.email}
                      </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>
                      <FaWhatsapp style={{ marginRight: '8px', color: '#25D366' }} />
                      <a href={`https://wa.me/${owner.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ color: '#666', textDecoration: 'none' }}>
                        WhatsApp: {owner.phone}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <a href={owner.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline-primary" size="sm" style={{ borderRadius: '50%', width: '35px', height: '35px', padding: '0' }}>
                        <FaLinkedin />
                      </Button>
                    </a>
                    <a href={owner.social.twitter} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline-info" size="sm" style={{ borderRadius: '50%', width: '35px', height: '35px', padding: '0' }}>
                        <FaTwitter />
                      </Button>
                    </a>
                    <a href={`https://wa.me/${owner.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline-success" size="sm" style={{ borderRadius: '50%', width: '35px', height: '35px', padding: '0' }}>
                        <FaWhatsapp />
                      </Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Office Hours Section */}
        <Row className="mt-5">
          <Col>
            <Card style={{ backgroundColor: '#007bff', color: 'white', borderRadius: '15px', padding: '30px', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '20px' }}>Office Hours</h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
                Saturday: 10:00 AM - 2:00 PM
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: 0 }}>
                Sunday: Closed
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;