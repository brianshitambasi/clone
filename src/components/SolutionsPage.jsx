// components/SolutionsPage.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaUsers, FaBuilding, FaShoppingCart, FaChartBar, FaRobot, FaVrCardboard,
  FaArrowRight, FaCheckCircle, FaRocket, FaShieldAlt, FaTrophy, FaStar
} from 'react-icons/fa';

const SolutionsPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const solutions = [
    { 
      id: 'crm', 
      icon: <FaUsers />, 
      title: 'CRM Solutions', 
      platform: 'Salesforce & Dynamics 365',
      desc: 'Full-cycle implementation and Zero-Copy Integration with data lakes',
      benefits: ['40% sales boost', '35% CSAT increase', '60% data cost reduction'],
      color: '#667eea'
    },
    { 
      id: 'erp', 
      icon: <FaBuilding />, 
      title: 'ERP Solutions', 
      platform: 'SAP & Odoo',
      desc: 'Strategic consultation and legacy-to-cloud migration',
      benefits: ['50% less manual work', '45% faster close', '60% inventory accuracy'],
      color: '#764ba2'
    },
    { 
      id: 'digital-commerce', 
      icon: <FaShoppingCart />, 
      title: 'Digital Commerce', 
      platform: 'Headless & Payment Integration',
      desc: 'Headless commerce development and global payment gateway integration',
      benefits: ['60% faster loads', '45% higher conversions', '50% less abandonment'],
      color: '#f093fb'
    },
    { 
      id: 'data-analytics', 
      icon: <FaChartBar />, 
      title: 'Data Analytics & BI', 
      platform: 'Power BI & Predictive Modeling',
      desc: 'Power BI dashboards and predictive data modeling',
      benefits: ['70% faster decisions', '55% better forecasts', 'Real-time visibility'],
      color: '#4facfe'
    },
    { 
      id: 'ai-rpa', 
      icon: <FaRobot />, 
      title: 'AI & RPA', 
      platform: 'Autonomous Agentic AI',
      desc: 'Autonomous Agentic AI and robotic process automation',
      benefits: ['80% automation', '90% error reduction', '24/7 operations'],
      color: '#43e97b'
    },
    { 
      id: 'ar-vr-iot', 
      icon: <FaVrCardboard />, 
      title: 'AR/VR & IoT', 
      platform: 'Digital Twin Development',
      desc: 'Immersive "Digital Twin" development and edge-device integration',
      benefits: ['50% faster training', '40% maintenance reduction', 'Real-time monitoring'],
      color: '#fa709a'
    }
  ];

  // Stats counter animation
  const [stats, setStats] = useState({ solutions: 0, clients: 0, success: 0 });
  const targetStats = { solutions: 6, clients: 200, success: 98 };

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);

        setStats({
          solutions: Math.floor(easeOutQuad * targetStats.solutions),
          clients: Math.floor(easeOutQuad * targetStats.clients),
          success: Math.floor(easeOutQuad * targetStats.success)
        });

        if (frame === totalFrames) {
          setStats(targetStats);
          clearInterval(timer);
        }
      }, frameDuration);
    };

    animateStats();
  }, []);

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '80px 0', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <Badge bg="light" text="dark" style={{ marginBottom: '20px', padding: '8px 16px' }}>
                <FaStar style={{ marginRight: '5px', color: '#ffc107' }} />
                Enterprise-Grade Solutions
              </Badge>
              <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>
                360-Degree Solutions
              </h1>
              <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.95 }}>
                Comprehensive solution portfolio powered by MJ&Roberts' engineering excellence
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '40px 0', backgroundColor: '#111' }}>
        <Container>
          <Row>
            <Col md={4} className="text-center mb-3">
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#667eea' }}>{stats.solutions}+</div>
              <div style={{ color: '#aaa' }}>Core Solutions</div>
            </Col>
            <Col md={4} className="text-center mb-3">
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#764ba2' }}>{stats.clients}+</div>
              <div style={{ color: '#aaa' }}>Happy Clients</div>
            </Col>
            <Col md={4} className="text-center mb-3">
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#f093fb' }}>{stats.success}%</div>
              <div style={{ color: '#aaa' }}>Success Rate</div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Solutions Grid */}
      <Container style={{ padding: '60px 0' }}>
        <Row>
          {solutions.map((solution, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card 
                style={{ 
                  backgroundColor: '#1a1a1a', 
                  border: 'none', 
                  borderRadius: '20px', 
                  padding: '25px',
                  height: '100%',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredCard === index ? `0 20px 40px rgba(102,126,234,0.2)` : 'none'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient top border */}
                <div style={{ 
                  height: '3px', 
                  background: `linear-gradient(90deg, ${solution.color}, transparent)`,
                  width: '100%',
                  marginTop: '-25px',
                  marginBottom: '25px',
                  borderRadius: '20px 20px 0 0'
                }} />
                
                {/* Icon */}
                <div style={{ 
                  fontSize: '3rem', 
                  color: solution.color, 
                  marginBottom: '20px',
                  display: 'inline-block',
                  padding: '15px',
                  backgroundColor: 'rgba(102,126,234,0.1)',
                  borderRadius: '15px'
                }}>
                  {solution.icon}
                </div>
                
                {/* Title */}
                <h3 style={{ marginBottom: '5px', fontSize: '1.5rem' }}>{solution.title}</h3>
                <p style={{ color: solution.color, marginBottom: '15px', fontSize: '0.85rem' }}>
                  {solution.platform}
                </p>
                
                {/* Description */}
                <p style={{ color: '#aaa', marginBottom: '20px', lineHeight: '1.6' }}>
                  {solution.desc}
                </p>
                
                {/* Benefits */}
                <div style={{ marginBottom: '25px' }}>
                  {solution.benefits.map((benefit, idx) => (
                    <div key={idx} style={{ fontSize: '0.85rem', color: '#ccc', marginBottom: '8px' }}>
                      <FaCheckCircle style={{ color: solution.color, marginRight: '8px', fontSize: '0.7rem' }} />
                      {benefit}
                    </div>
                  ))}
                </div>
                
                {/* Button */}
                <Button 
                  as={Link} 
                  to={`/solutions/${solution.id}`} 
                  variant="outline-primary" 
                  style={{ 
                    borderRadius: '50px', 
                    width: '100%',
                    padding: '10px',
                    borderColor: solution.color,
                    color: solution.color
                  }}
                >
                  Explore Solution <FaArrowRight style={{ marginLeft: '8px', fontSize: '0.8rem' }} />
                </Button>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Why Choose Us */}
        <Row style={{ marginTop: '60px' }}>
          <Col>
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)',
              borderRadius: '20px',
              padding: '50px',
              textAlign: 'center'
            }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#667eea' }}>Why Choose Our Solutions?</h2>
              <Row style={{ marginTop: '30px' }}>
                <Col md={3} sm={6} className="mb-4">
                  <FaRocket style={{ fontSize: '2rem', color: '#667eea', marginBottom: '10px' }} />
                  <h5>Fast Implementation</h5>
                  <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Average 3-month deployment</p>
                </Col>
                <Col md={3} sm={6} className="mb-4">
                  <FaShieldAlt style={{ fontSize: '2rem', color: '#764ba2', marginBottom: '10px' }} />
                  <h5>Enterprise Security</h5>
                  <p style={{ color: '#aaa', fontSize: '0.85rem' }}>ISO 27001 certified</p>
                </Col>
                <Col md={3} sm={6} className="mb-4">
                  <FaTrophy style={{ fontSize: '2rem', color: '#f093fb', marginBottom: '10px' }} />
                  <h5>Award-Winning</h5>
                  <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Industry recognition</p>
                </Col>
                <Col md={3} sm={6} className="mb-4">
                  <FaUsers style={{ fontSize: '2rem', color: '#4facfe', marginBottom: '10px' }} />
                  <h5>24/7 Support</h5>
                  <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Global support team</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* CTA Section */}
        <Row style={{ marginTop: '60px' }}>
          <Col className="text-center">
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '20px', padding: '50px' }}>
              <h3 style={{ marginBottom: '20px' }}>Ready to Transform Your Business?</h3>
              <p style={{ color: '#aaa', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                Let's discuss which solution fits your business needs best.
              </p>
              <div>
                <Button as={Link} to="/contact" variant="primary" size="lg" style={{ borderRadius: '50px', marginRight: '15px' }}>
                  Schedule Free Consultation
                </Button>
                <Button as={Link} to="/case-studies" variant="outline-light" size="lg" style={{ borderRadius: '50px' }}>
                  View Success Stories
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SolutionsPage;