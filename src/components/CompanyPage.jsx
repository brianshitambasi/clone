// components/CompanyPage.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Image, Button, Modal, Form } from 'react-bootstrap';
import { 
  FaRocket, FaCheckCircle, FaHandshake, FaUsers, 
  FaUserTie, FaEnvelope, FaWhatsapp, 
  FaLinkedin, FaTwitter, FaUserPlus, FaEdit, FaTrash 
} from 'react-icons/fa';

const CompanyPage = () => {
  const [showOwnerModal, setShowOwnerModal] = useState(false);
  const [editingOwner, setEditingOwner] = useState(null);
  
  // Website Owners/Administrators state
  const [owners, setOwners] = useState([
    {
      id: 1,
      name: "John Roberts",
      title: "Founder & CEO",
      email: "john.roberts@mjroberts.com",
      phone: "+254723156066",
      whatsapp: "254723156066",
      bio: "15+ years experience in business consulting and enterprise architecture",
      avatar: "https://ui-avatars.com/api/?name=John+Roberts&background=667eea&color=fff&size=128",
      social: { linkedin: "#", twitter: "#" },
      joinedDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Mary Jane",
      title: "Senior Consultant",
      email: "mary.jane@mjroberts.com",
      phone: "+254712345678",
      whatsapp: "254712345678",
      bio: "Expert in strategic planning, operations, and digital transformation",
      avatar: "https://ui-avatars.com/api/?name=Mary+Jane&background=764ba2&color=fff&size=128",
      social: { linkedin: "#", twitter: "#" },
      joinedDate: "2024-02-20"
    },
    {
      id: 3,
      name: "Michael Otieno",
      title: "IT Director",
      email: "michael@mjroberts.com",
      phone: "+254798765432",
      whatsapp: "254798765432",
      bio: "Digital transformation specialist with expertise in cloud architecture",
      avatar: "https://ui-avatars.com/api/?name=Michael+Otieno&background=f093fb&color=fff&size=128",
      social: { linkedin: "#", twitter: "#" },
      joinedDate: "2024-03-10"
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
      // Update existing owner
      setOwners(owners.map(owner => 
        owner.id === editingOwner.id 
          ? { ...formData, id: owner.id, avatar: `https://ui-avatars.com/api/?name=${formData.name.replace(' ', '+')}&background=667eea&color=fff&size=128`, joinedDate: owner.joinedDate }
          : owner
      ));
    } else {
      // Add new owner
      const newOwner = {
        ...formData,
        id: owners.length + 1,
        avatar: `https://ui-avatars.com/api/?name=${formData.name.replace(' ', '+')}&background=667eea&color=fff&size=128`,
        joinedDate: new Date().toISOString().split('T')[0],
        social: { linkedin: "#", twitter: "#" }
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
      {/* Hero Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <h1 className="text-center" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>Company</h1>
          <p className="text-center" style={{ fontSize: '1.2rem', opacity: 0.9 }}>Building the future of enterprise technology</p>
        </Container>
      </section>

      {/* Mission & Values Section */}
      <Container style={{ padding: '80px 0' }}>
        <Row>
          <Col lg={6} className="mb-4">
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '30px', height: '100%', transition: 'transform 0.3s' }}>
              <FaRocket style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }} />
              <h3>Our Mission</h3>
              <p style={{ color: '#aaa' }}>To engineer resilience into the global enterprise through architectural discipline and strategic innovation.</p>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '30px', height: '100%', transition: 'transform 0.3s' }}>
              <FaCheckCircle style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }} />
              <h3>The Well-Architected Standard</h3>
              <p style={{ color: '#aaa' }}>Our proprietary framework for operational excellence, security, reliability, performance efficiency, and cost optimization.</p>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '30px', height: '100%', transition: 'transform 0.3s' }}>
              <FaHandshake style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }} />
              <h3>Elite Partnerships</h3>
              <p style={{ color: '#aaa' }}>AWS Premier Partner • Salesforce Platinum Partner • Oracle Gold Partner</p>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '30px', height: '100%', transition: 'transform 0.3s' }}>
              <FaUsers style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }} />
              <h3>Join the Silicon Workforce</h3>
              <p style={{ color: '#aaa' }}>We're hiring top talent in AI, Cloud Architecture, and Platform Engineering.</p>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Leadership Team Section */}
      <Container style={{ padding: '40px 0 80px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px' }}>
            <FaUserTie style={{ marginRight: '15px', color: '#667eea' }} />
            Our Leadership Team
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#aaa', maxWidth: '600px', margin: '0 auto' }}>
            Meet the experienced professionals driving innovation and excellence
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

        <Row>
          {owners.map((owner) => (
            <Col lg={4} md={6} className="mb-4" key={owner.id}>
              <Card style={{ 
                backgroundColor: '#1a1a1a', 
                border: 'none', 
                borderRadius: '15px', 
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                height: '100%'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Card.Body style={{ padding: '30px', textAlign: 'center' }}>
                  <Image 
                    src={owner.avatar} 
                    roundedCircle 
                    style={{ 
                      width: '120px', 
                      height: '120px', 
                      objectFit: 'cover',
                      marginBottom: '20px',
                      border: '3px solid #667eea',
                      padding: '3px'
                    }} 
                  />
                  <Card.Title style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '5px' }}>
                    {owner.name}
                  </Card.Title>
                  <Card.Subtitle style={{ color: '#667eea', marginBottom: '15px', fontSize: '0.9rem' }}>
                    {owner.title}
                  </Card.Subtitle>
                  <p style={{ color: '#aaa', fontSize: '0.85rem', marginBottom: '20px', lineHeight: '1.5' }}>
                    {owner.bio}
                  </p>
                  
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px', fontSize: '0.8rem' }}>
                      <FaEnvelope style={{ marginRight: '8px', color: '#667eea' }} />
                      <a href={`mailto:${owner.email}`} style={{ color: '#aaa', textDecoration: 'none' }}>
                        {owner.email}
                      </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>
                      <FaWhatsapp style={{ marginRight: '8px', color: '#25D366' }} />
                      <a href={`https://wa.me/${owner.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', textDecoration: 'none' }}>
                        {owner.phone}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '15px' }}>
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

                  {/* Admin Actions - Edit/Delete */}
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', borderTop: '1px solid #333', paddingTop: '15px', marginTop: '10px' }}>
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
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Add/Edit Owner Modal */}
      <Modal show={showOwnerModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton style={{ backgroundColor: '#1a1a1a', color: 'white', borderBottom: '1px solid #333' }}>
          <Modal.Title>
            {editingOwner ? 'Edit Team Member' : 'Add New Team Member'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
          <Form>
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

            <Form.Group className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder="Brief description of role and expertise"
                rows={3}
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