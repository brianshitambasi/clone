// components/CompanyPage.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, Badge } from 'react-bootstrap';
import { 
  FaCheckCircle, FaHandshake, FaUsers, 
  FaUserTie, FaEnvelope, FaWhatsapp, FaPhone,
  FaLinkedin, FaTwitter, FaUserPlus, FaEdit, FaTrash,
  FaChartLine, FaGlobe, FaAward, FaClock, FaCalendarAlt,
  FaQuoteLeft
} from 'react-icons/fa';

const CompanyPage = () => {
  const [showOwnerModal, setShowOwnerModal] = useState(false);
  const [editingOwner, setEditingOwner] = useState(null);
  
  // Website Owners/Administrators state using your actual photos
  const [owners, setOwners] = useState([
    {
      id: 1,
      name: "John Roberts",
      title: "Founder & CEO",
      email: "john.roberts@mjroberts.com",
      phone: "+254723156066",
      whatsapp: "254723156066",
      bio: "15+ years experience in business consulting and enterprise architecture. Specializes in digital transformation and strategic innovation.",
      avatar: "/image/static/h26.jpeg",
      social: { linkedin: "#", twitter: "#" },
      joinedDate: "2024-01-15",
      expertise: ["Business Strategy", "Digital Transformation", "Leadership", "Enterprise Architecture"]
    },
    {
      id: 2,
      name: "Mary Jane",
      title: "Senior Consultant",
      email: "mary.jane@mjroberts.com",
      phone: "+254712345678",
      whatsapp: "254712345678",
      bio: "Expert in strategic planning, operations, and digital transformation. Helps organizations achieve operational excellence.",
      avatar: "/image/static/h22.jpeg",
      social: { linkedin: "#", twitter: "#" },
      joinedDate: "2024-02-20",
      expertise: ["Strategic Planning", "Operations", "Change Management", "Process Optimization"]
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    whatsapp: '',
    bio: ''
  });

  // Company statistics
  const stats = [
    { icon: <FaChartLine />, value: '100+', label: 'Projects Completed' },
    { icon: <FaGlobe />, value: '10+', label: 'Countries Served' },
    { icon: <FaAward />, value: '98%', label: 'Client Satisfaction' },
    { icon: <FaUsers />, value: '50+', label: 'Expert Team' }
  ];

  // Company timeline
  const timeline = [
    { year: '2024', title: 'Global Expansion', description: 'Expanded operations to 10+ countries worldwide' },
    { year: '2023', title: 'AWS Premier Partner', description: 'Achieved AWS Premier Consulting Partner status' },
    { year: '2022', title: 'Salesforce Platinum', description: 'Became Salesforce Platinum Implementation Partner' },
    { year: '2021', title: 'Company Founded', description: 'MJ & Roberts Consulting established' }
  ];

  const handleShowModal = (owner = null) => {
    if (owner) {
      setEditingOwner(owner);
      setFormData(owner);
    } else {
      setEditingOwner(null);
      setFormData({ name: '', title: '', email: '', phone: '', whatsapp: '', bio: '' });
    }
    setShowOwnerModal(true);
  };

  const handleCloseModal = () => {
    setShowOwnerModal(false);
    setEditingOwner(null);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveOwner = () => {
    if (editingOwner) {
      setOwners(owners.map(owner => 
        owner.id === editingOwner.id 
          ? { ...formData, id: owner.id, avatar: editingOwner.avatar, joinedDate: owner.joinedDate, expertise: owner.expertise }
          : owner
      ));
    } else {
      const newOwner = {
        ...formData,
        id: owners.length + 1,
        avatar: `https://ui-avatars.com/api/?name=${formData.name.replace(' ', '+')}&background=667eea&color=fff&size=128`,
        joinedDate: new Date().toISOString().split('T')[0],
        social: { linkedin: "#", twitter: "#" },
        expertise: []
      };
      setOwners([...owners, newOwner]);
    }
    handleCloseModal();
  };

  const handleDeleteOwner = (id) => {
    if (window.confirm('Are you sure you want to remove this owner?')) {
      setOwners(owners.filter(owner => owner.id !== id));
    }
  };

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      {/* Hero Section with Overlay */}
      <section style={{ 
        padding: '100px 0', 
        background: 'linear-gradient(135deg, rgba(102,126,234,0.95) 0%, rgba(118,75,162,0.95) 100%), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <Container>
          <Row className="text-center">
            <Col>
              <Badge style={{ backgroundColor: 'rgba(255,255,255,0.2)', marginBottom: '20px', padding: '10px 20px', fontSize: '1rem' }}>
                Established 2021
              </Badge>
              <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '20px' }}>
                MJ & Roberts Consulting
              </h1>
              <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '700px', margin: '0 auto' }}>
                Building the future of enterprise technology through innovation and excellence
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <Container style={{ marginTop: '-50px', marginBottom: '60px' }}>
        <Row className="g-4">
          {stats.map((stat, index) => (
            <Col md={3} key={index}>
              <Card style={{ 
                backgroundColor: '#1a1a1a', 
                border: 'none', 
                borderRadius: '15px', 
                padding: '30px',
                textAlign: 'center',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}>
                <div style={{ fontSize: '2.5rem', color: '#667eea', marginBottom: '15px' }}>
                  {stat.icon}
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '5px' }}>{stat.value}</h3>
                <p style={{ color: '#aaa', margin: 0 }}>{stat.label}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Mission & Values Section */}
      <Container style={{ padding: '40px 0' }}>
        <Row>
          <Col lg={6} className="mb-4">
            <Card style={{ 
              backgroundColor: '#1a1a1a', 
              border: 'none', 
              borderRadius: '15px', 
              padding: '40px', 
              height: '100%',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}>
              <div style={{ marginBottom: '20px' }}>
                <FaQuoteLeft style={{ fontSize: '2rem', color: '#667eea', opacity: 0.5 }} />
              </div>
              <h3 style={{ marginBottom: '15px' }}>Our Mission</h3>
              <p style={{ color: '#aaa', fontSize: '1rem', lineHeight: '1.6' }}>
                To engineer resilience into the global enterprise through architectural discipline and strategic innovation. We empower organizations to thrive in the digital age.
              </p>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card style={{ 
              backgroundColor: '#1a1a1a', 
              border: 'none', 
              borderRadius: '15px', 
              padding: '40px', 
              height: '100%',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}>
              <FaCheckCircle style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }} />
              <h3 style={{ marginBottom: '15px' }}>The Well-Architected Standard</h3>
              <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                Our proprietary framework for operational excellence, security, reliability, performance efficiency, and cost optimization.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Partnerships Section */}
      <Container style={{ padding: '40px 0' }}>
        <Row>
          <Col lg={6} className="mb-4">
            <Card style={{ 
              backgroundColor: '#1a1a1a', 
              border: 'none', 
              borderRadius: '15px', 
              padding: '40px', 
              height: '100%'
            }}>
              <FaHandshake style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }} />
              <h3 style={{ marginBottom: '15px' }}>Elite Partnerships</h3>
              <p style={{ color: '#aaa', marginBottom: '20px' }}>We partner with industry leaders to deliver best-in-class solutions</p>
              <div>
                <Badge style={{ backgroundColor: '#667eea', marginRight: '10px', marginBottom: '10px', padding: '8px 16px' }}>AWS Premier Partner</Badge>
                <Badge style={{ backgroundColor: '#667eea', marginRight: '10px', marginBottom: '10px', padding: '8px 16px' }}>Salesforce Platinum Partner</Badge>
                <Badge style={{ backgroundColor: '#667eea', padding: '8px 16px' }}>Oracle Gold Partner</Badge>
              </div>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card style={{ 
              backgroundColor: '#1a1a1a', 
              border: 'none', 
              borderRadius: '15px', 
              padding: '40px', 
              height: '100%'
            }}>
              <FaUsers style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }} />
              <h3 style={{ marginBottom: '15px' }}>Join Our Team</h3>
              <p style={{ color: '#aaa', marginBottom: '20px' }}>We're hiring top talent in AI, Cloud Architecture, and Platform Engineering</p>
              <Button 
                variant="outline-primary" 
                style={{ borderRadius: '50px', padding: '10px 30px' }}
              >
                View Open Positions →
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Company Timeline */}
      <Container style={{ padding: '60px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '15px' }}>
            <FaClock style={{ marginRight: '15px', color: '#667eea' }} />
            Our Journey
          </h2>
          <p style={{ color: '#aaa' }}>Key milestones in our company's history</p>
        </div>
        <Row>
          {timeline.map((item, index) => (
            <Col md={3} key={index} className="mb-4">
              <Card style={{ 
                backgroundColor: '#1a1a1a', 
                border: 'none', 
                borderRadius: '15px', 
                padding: '25px',
                textAlign: 'center',
                height: '100%'
              }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <FaCalendarAlt style={{ fontSize: '1.5rem', color: 'white' }} />
                </div>
                <h3 style={{ color: '#667eea', marginBottom: '10px' }}>{item.year}</h3>
                <h5 style={{ marginBottom: '10px' }}>{item.title}</h5>
                <p style={{ color: '#aaa', fontSize: '0.9rem', margin: 0 }}>{item.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Leadership Team Section with Photos */}
      <Container style={{ padding: '40px 0 80px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px' }}>
            <FaUserTie style={{ marginRight: '15px', color: '#667eea' }} />
            Our Leadership Team
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#aaa', maxWidth: '600px', margin: '0 auto' }}>
            Meet the experienced professionals driving innovation and excellence at MJ & Roberts Consulting
          </p>
          
          {/* Admin Controls - Add Owner Button */}
          <Button 
            variant="primary" 
            onClick={() => handleShowModal()}
            style={{ 
              marginTop: '30px',
              borderRadius: '50px',
              padding: '10px 24px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              border: 'none'
            }}
          >
            <FaUserPlus className="me-2" />
            Add Team Member
          </Button>
        </div>

        <Row className="justify-content-center">
          {owners.map((owner) => (
            <Col lg={6} className="mb-4" key={owner.id}>
              <Card style={{ 
                backgroundColor: '#1a1a1a', 
                border: 'none', 
                borderRadius: '20px', 
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                height: '100%'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}>
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
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </Col>
                  <Col md={7}>
                    <Card.Body style={{ padding: '35px', height: '100%' }}>
                      <Card.Title style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '5px', color: 'white' }}>
                        {owner.name}
                      </Card.Title>
                      <Badge style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', marginBottom: '15px', padding: '8px 16px' }}>
                        {owner.title}
                      </Badge>
                      
                      <p style={{ color: '#aaa', fontSize: '0.95rem', marginBottom: '20px', lineHeight: '1.6' }}>
                        {owner.bio}
                      </p>
                      
                      {/* Expertise Tags */}
                      <div style={{ marginBottom: '20px' }}>
                        {owner.expertise && owner.expertise.slice(0, 3).map((skill, idx) => (
                          <Badge 
                            key={idx}
                            style={{ 
                              backgroundColor: 'rgba(102,126,234,0.2)', 
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
                          <a href={`mailto:${owner.email}`} style={{ color: '#aaa', textDecoration: 'none' }}>
                            {owner.email}
                          </a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', fontSize: '0.85rem' }}>
                          <FaPhone style={{ marginRight: '10px', color: '#667eea' }} />
                          <span style={{ color: '#aaa' }}>{owner.phone}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem' }}>
                          <FaWhatsapp style={{ marginRight: '10px', color: '#25D366' }} />
                          <a href={`https://wa.me/${owner.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', textDecoration: 'none' }}>
                            WhatsApp: {owner.phone}
                          </a>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                        <a href={owner.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline-primary" style={{ borderRadius: '50%', width: '35px', height: '35px', padding: '0' }}>
                            <FaLinkedin />
                          </Button>
                        </a>
                        <a href={owner.social.twitter} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline-info" style={{ borderRadius: '50%', width: '35px', height: '35px', padding: '0' }}>
                            <FaTwitter />
                          </Button>
                        </a>
                        <a href={`https://wa.me/${owner.whatsapp}`} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline-success" style={{ borderRadius: '50%', width: '35px', height: '35px', padding: '0' }}>
                            <FaWhatsapp />
                          </Button>
                        </a>
                      </div>

                      {/* Admin Actions */}
                      <div style={{ display: 'flex', gap: '10px', borderTop: '1px solid #333', paddingTop: '15px' }}>
                        <Button 
                          variant="outline-warning" 
                          size="sm"
                          onClick={() => handleShowModal(owner)}
                          style={{ borderRadius: '8px', fontSize: '0.75rem' }}
                        >
                          <FaEdit className="me-1" /> Edit
                        </Button>
                        <Button 
                          variant="outline-danger" 
                          size="sm"
                          onClick={() => handleDeleteOwner(owner.id)}
                          style={{ borderRadius: '8px', fontSize: '0.75rem' }}
                        >
                          <FaTrash className="me-1" /> Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Add/Edit Owner Modal */}
      <Modal show={showOwnerModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton style={{ backgroundColor: '#1a1a1a', color: 'white', borderBottom: '1px solid #333' }}>
          <Modal.Title>
            {editingOwner ? 'Edit Team Member' : 'Add New Team Member'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    style={{ backgroundColor: '#2a2a2a', color: 'white', border: '1px solid #333' }}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Title/Position</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., CEO, Director, Consultant"
                    style={{ backgroundColor: '#2a2a2a', color: 'white', border: '1px solid #333' }}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    style={{ backgroundColor: '#2a2a2a', color: 'white', border: '1px solid #333' }}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+254XXXXXXXXX"
                    style={{ backgroundColor: '#2a2a2a', color: 'white', border: '1px solid #333' }}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>WhatsApp Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="254XXXXXXXXX (without +)"
                    style={{ backgroundColor: '#2a2a2a', color: 'white', border: '1px solid #333' }}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder="Brief description of role and expertise"
                rows={4}
                style={{ backgroundColor: '#2a2a2a', color: 'white', border: '1px solid #333' }}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#1a1a1a', borderTop: '1px solid #333' }}>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveOwner} style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', border: 'none' }}>
            {editingOwner ? 'Update' : 'Add'} Team Member
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CompanyPage;