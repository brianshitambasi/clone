// components/ContactPage.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card, Badge } from 'react-bootstrap';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaUserTie, 
  FaLinkedin, FaTwitter, FaClock, FaAward, FaUsers, FaGlobe,
  FaCheckCircle, FaStar, FaHeadset, FaRocket
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // WhatsApp configuration
  const whatsappNumber = '254723156066';
  const whatsappMessage = encodeURIComponent('Hello! I would like to get more information about your services.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const whatsappCallLink = `https://wa.me/${whatsappNumber}`;

  // Website Owners/Administrators with correct image paths
  const owners = [
    {
      id: 1,
      name: "John Roberts",
      title: "Founder & CEO",
      email: "john.roberts@mjroberts.com",
      phone: "+254723156066",
      whatsapp: "254723156066",
      bio: "15+ years experience in business consulting and enterprise architecture",
      avatar: "/image/static/h26.jpeg",
      social: { linkedin: "#", twitter: "#" },
      expertise: ["Business Strategy", "Digital Transformation", "Leadership"]
    },
    {
      id: 2,
      name: "Mary Jane",
      title: "Senior Consultant",
      email: "mary.jane@mjroberts.com",
      phone: "+254712345678",
      whatsapp: "254712345678",
      bio: "Expert in strategic planning, operations, and digital transformation",
      avatar: "/image/static/h22.jpeg",
      social: { linkedin: "#", twitter: "#" },
      expertise: ["Strategic Planning", "Operations", "Change Management"]
    }
  ];

  const services = [
    "IT Consulting & Digital Transformation",
    "Software Engineering & Application Services",
    "Managed IT Services & Support",
    "DevOps & Platform Engineering",
    "Quality Assurance & Testing",
    "Cloud Solutions & Architecture"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div style={{ paddingTop: '100px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5))',
        padding: '80px 0',
        marginBottom: '60px'
      }}>
        <Container>
          <Row className="text-center text-white">
            <Col>
              <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>
                Contact MJ & Roberts Consulting
              </h1>
              <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto' }}>
                Let's work together to transform your business
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container style={{ marginTop: '-50px' }}>
        {/* Main Contact Section */}
        <Row className="mb-5">
          <Col lg={4} className="mb-4">
            <Card style={{ 
              borderRadius: '15px', 
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              height: '100%'
            }}>
              <Card.Body style={{ padding: '30px' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '20px', color: '#333' }}>
                  <FaHeadset className="me-2" style={{ color: '#667eea' }} />
                  Contact Information
                </h4>
                
                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', padding: '10px', borderRadius: '10px', backgroundColor: '#f8f9fa' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #667eea, #764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }}>
                      <FaEnvelope style={{ color: 'white', fontSize: '1rem' }} />
                    </div>
                    <div>
                      <small style={{ color: '#999' }}>Email Us</small>
                      <p style={{ margin: 0, fontWeight: '600' }}>info@mjroberts.com</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', padding: '10px', borderRadius: '10px', backgroundColor: '#f8f9fa' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #667eea, #764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }}>
                      <FaPhone style={{ color: 'white', fontSize: '1rem' }} />
                    </div>
                    <div>
                      <small style={{ color: '#999' }}>Call Us</small>
                      <p style={{ margin: 0, fontWeight: '600' }}>+254 723 156 066</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', padding: '10px', borderRadius: '10px', backgroundColor: '#f8f9fa' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }}>
                      <FaWhatsapp style={{ color: 'white', fontSize: '1rem' }} />
                    </div>
                    <div>
                      <small style={{ color: '#999' }}>WhatsApp</small>
                      <p style={{ margin: 0, fontWeight: '600' }}>+254 723 156 066</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '10px', backgroundColor: '#f8f9fa' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #667eea, #764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }}>
                      <FaMapMarkerAlt style={{ color: 'white', fontSize: '1rem' }} />
                    </div>
                    <div>
                      <small style={{ color: '#999' }}>Visit Us</small>
                      <p style={{ margin: 0, fontWeight: '600' }}>Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h6 style={{ fontWeight: '700', marginBottom: '15px' }}>Office Hours</h6>
                  <div style={{ fontSize: '0.9rem' }}>
                    <p className="mb-2"><FaClock className="me-2" style={{ color: '#667eea' }} /> Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p className="mb-2"><FaClock className="me-2" style={{ color: '#667eea' }} /> Saturday: 10:00 AM - 2:00 PM</p>
                    <p><FaClock className="me-2" style={{ color: '#667eea' }} /> Sunday: Closed</p>
                  </div>
                </div>

                <div>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button style={{ 
                      backgroundColor: '#25D366', 
                      border: 'none', 
                      width: '100%',
                      marginBottom: '10px',
                      padding: '12px',
                      borderRadius: '10px',
                      fontWeight: '600'
                    }}>
                      <FaWhatsapp className="me-2" /> Chat on WhatsApp
                    </Button>
                  </a>
                  <a href={whatsappCallLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button variant="outline-success" style={{ width: '100%', padding: '12px', borderRadius: '10px', fontWeight: '600' }}>
                      <FaPhone className="me-2" /> Call via WhatsApp
                    </Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col lg={8} className="mb-4">
            <Card style={{ borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <Card.Body style={{ padding: '40px' }}>
                <h3 style={{ fontWeight: '700', marginBottom: '10px', color: '#333' }}>Send us a message</h3>
                <p style={{ color: '#666', marginBottom: '30px' }}>Fill out the form below and we'll get back to you within 24 hours</p>
                
                {submitted && (
                  <Alert variant="success" style={{ borderRadius: '10px' }}>
                    <FaCheckCircle className="me-2" />
                    Message sent successfully! Our team will contact you soon.
                  </Alert>
                )}
                
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ fontWeight: '600' }}>Full Name *</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          required 
                          placeholder="Enter your full name"
                          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} 
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ fontWeight: '600' }}>Email Address *</Form.Label>
                        <Form.Control 
                          type="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          required 
                          placeholder="Enter your email"
                          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} 
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ fontWeight: '600' }}>Phone Number</Form.Label>
                        <Form.Control 
                          type="tel" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange} 
                          placeholder="+254 XXX XXX XXX"
                          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} 
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ fontWeight: '600' }}>Subject *</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="subject" 
                          value={formData.subject} 
                          onChange={handleChange} 
                          required 
                          placeholder="What is this regarding?"
                          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} 
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-4">
                    <Form.Label style={{ fontWeight: '600' }}>Message *</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      rows={5} 
                      placeholder="Tell us about your project or inquiry..."
                      style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} 
                    />
                  </Form.Group>
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    disabled={isSubmitting}
                    style={{ 
                      width: '100%', 
                      padding: '14px', 
                      borderRadius: '10px', 
                      fontWeight: '700',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      border: 'none',
                      fontSize: '1rem'
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Services Section */}
        <Row className="mb-5">
          <Col>
            <Card style={{ borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <Card.Body style={{ padding: '40px' }}>
                <h3 style={{ fontWeight: '700', marginBottom: '20px', textAlign: 'center', color: '#333' }}>
                  <FaRocket className="me-2" style={{ color: '#667eea' }} />
                  Our Services
                </h3>
                <Row>
                  {services.map((service, index) => (
                    <Col md={6} key={index} className="mb-3">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FaCheckCircle style={{ color: '#25D366', marginRight: '10px' }} />
                        <span style={{ color: '#666' }}>{service}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Leadership Team Section */}
        <Row className="mb-5">
          <Col>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '15px', color: 'white' }}>
                <FaUserTie style={{ marginRight: '15px' }} />
                Meet Our Leadership Team
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto' }}>
                Our experienced administrators are here to help you succeed
              </p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          {owners.map((owner) => (
            <Col lg={6} md={8} className="mb-4" key={owner.id}>
              <Card style={{ 
                borderRadius: '20px', 
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                height: '100%'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Row className="g-0">
                  <Col md={5} style={{ overflow: 'hidden', minHeight: '350px' }}>
                    <div
                      style={{
                        backgroundImage: `url(${owner.avatar})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center top',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100%',
                        minHeight: '350px',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                  </Col>
                  <Col md={7}>
                    <Card.Body style={{ padding: '35px', height: '100%' }}>
                      <Card.Title style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '5px', color: '#333' }}>
                        {owner.name}
                      </Card.Title>
                      <Badge style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', marginBottom: '15px', padding: '8px 16px' }}>
                        {owner.title}
                      </Badge>
                      <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '20px', lineHeight: '1.6' }}>
                        {owner.bio}
                      </p>
                      
                      <div style={{ marginBottom: '15px' }}>
                        {owner.expertise.map((skill, idx) => (
                          <Badge 
                            key={idx}
                            style={{ 
                              backgroundColor: '#f0f0f0', 
                              color: '#667eea',
                              marginRight: '8px',
                              marginBottom: '8px',
                              padding: '5px 12px'
                            }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', fontSize: '0.85rem' }}>
                          <FaEnvelope style={{ marginRight: '10px', color: '#667eea' }} />
                          <a href={`mailto:${owner.email}`} style={{ color: '#666', textDecoration: 'none' }}>{owner.email}</a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem' }}>
                          <FaWhatsapp style={{ marginRight: '10px', color: '#25D366' }} />
                          <a href={`https://wa.me/${owner.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ color: '#666', textDecoration: 'none' }}>
                            WhatsApp: {owner.phone}
                          </a>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '10px' }}>
                        <a href={owner.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline-primary" style={{ borderRadius: '50%', width: '38px', height: '38px', padding: '0' }}>
                            <FaLinkedin />
                          </Button>
                        </a>
                        <a href={owner.social.twitter} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline-info" style={{ borderRadius: '50%', width: '38px', height: '38px', padding: '0' }}>
                            <FaTwitter />
                          </Button>
                        </a>
                        <a href={`https://wa.me/${owner.whatsapp}`} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline-success" style={{ borderRadius: '50%', width: '38px', height: '38px', padding: '0' }}>
                            <FaWhatsapp />
                          </Button>
                        </a>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Stats Section */}
        <Row className="mb-5">
          <Col md={3} className="mb-3">
            <Card style={{ textAlign: 'center', padding: '30px', borderRadius: '15px', backgroundColor: 'white' }}>
              <FaUsers size={40} style={{ color: '#667eea', marginBottom: '15px' }} />
              <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '5px' }}>100+</h3>
              <p style={{ color: '#666', margin: 0 }}>Happy Clients</p>
            </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card style={{ textAlign: 'center', padding: '30px', borderRadius: '15px', backgroundColor: 'white' }}>
              <FaAward size={40} style={{ color: '#667eea', marginBottom: '15px' }} />
              <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '5px' }}>50+</h3>
              <p style={{ color: '#666', margin: 0 }}>Projects Completed</p>
            </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card style={{ textAlign: 'center', padding: '30px', borderRadius: '15px', backgroundColor: 'white' }}>
              <FaGlobe size={40} style={{ color: '#667eea', marginBottom: '15px' }} />
              <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '5px' }}>10+</h3>
              <p style={{ color: '#666', margin: 0 }}>Countries Served</p>
            </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card style={{ textAlign: 'center', padding: '30px', borderRadius: '15px', backgroundColor: 'white' }}>
              <FaStar size={40} style={{ color: '#667eea', marginBottom: '15px' }} />
              <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '5px' }}>98%</h3>
              <p style={{ color: '#666', margin: 0 }}>Client Satisfaction</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;