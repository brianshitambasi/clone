// components/AboutPage.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaNetworkWired, FaChartLine, FaRobot, FaCloud, FaRocket, FaInfinity, FaBrain, FaMicrochip, FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const heroRef = useRef(null);
  const valueCardsRef = useRef([]);
  const timelineRef = useRef(null);
  const statsRef = useRef(null);

  // Company stats for counter animation
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    engineers: 0,
    uptime: 0
  });

  const targetStats = {
    projects: 500,
    clients: 300,
    engineers: 250,
    uptime: 99.99
  };

  // Animate stats
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
          projects: Math.floor(easeOutQuad * targetStats.projects),
          clients: Math.floor(easeOutQuad * targetStats.clients),
          engineers: Math.floor(easeOutQuad * targetStats.engineers),
          uptime: Number((easeOutQuad * targetStats.uptime).toFixed(2))
        });

        if (frame === totalFrames) {
          setStats(targetStats);
          clearInterval(timer);
        }
      }, frameDuration);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // GSAP animations
  useEffect(() => {
    // Hero section animation
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      });
      
      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
      });
      
      gsap.from('.hero-button', {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        delay: 0.6,
        ease: 'back.out(1.7)'
      });

      // Value cards animation
      valueCardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power3.out'
        });
      });

      // Timeline animation
      gsap.from(timelineRef.current, {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: <FaShieldAlt />,
      title: 'Platform Neutrality',
      description: 'Expert Inter-Cloud Orchestration ensures your stack is dictated by business logic, not vendor lock-in. We optimize across AWS, Azure, GCP, and private clouds.',
      color: '#667eea'
    },
    {
      icon: <FaRobot />,
      title: 'Agentic Pioneers',
      description: 'Move beyond passive automation to Agentic AI, building autonomous systems that execute end-to-end business workflows with minimal human intervention.',
      color: '#764ba2'
    },
    {
      icon: <FaChartLine />,
      title: 'Fiscal Sovereignty',
      description: 'Treat cloud spend as an engineering metric, applying rigorous FinOps to ensure every cent drives measurable ROI and operational efficiency.',
      color: '#f093fb'
    },
    {
      icon: <FaNetworkWired />,
      title: 'Converged Environments',
      description: 'Harmonize Salesforce, AWS, AI, and legacy systems into unified ecosystems that eliminate data silos and accelerate time-to-value.',
      color: '#4facfe'
    },
    {
      icon: <FaBrain />,
      title: 'AI-First Architecture',
      description: 'Design systems with AI at their core, enabling predictive analytics, intelligent automation, and continuous learning capabilities.',
      color: '#43e97b'
    },
    {
      icon: <FaInfinity />,
      title: 'Resilience Engineering',
      description: 'Build systems that not only survive failures but learn and adapt from them, ensuring 99.99%+ availability for mission-critical operations.',
      color: '#fa709a'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'MJ&Roberts established with a vision to bridge the innovation-infrastructure gap.' },
    { year: '2021', title: 'First Enterprise Client', description: 'Secured first Fortune 500 client for cloud transformation.' },
    { year: '2022', title: 'AI Practice Launch', description: 'Launched dedicated AI and machine learning practice.' },
    { year: '2023', title: 'Global Expansion', description: 'Expanded operations to 3 continents with 200+ engineers.' },
    { year: '2024', title: 'Agentic AI Platform', description: 'Released proprietary Agentic AI orchestration platform.' }
  ];

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      
      {/* Hero Section with Video Background */}
      <section 
        ref={heroRef}
        style={{ 
          position: 'relative',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Video Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          overflow: 'hidden'
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isVideoLoaded ? 0.4 : 0,
              transition: 'opacity 1s ease'
            }}
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-technology-32879-large.mp4" type="video/mp4" />
          </video>
          {/* AI Neural Network Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.8) 100%)',
            zIndex: 1
          }} />
        </div>

        {/* Content */}
        <Container style={{ position: 'relative', zIndex: 2, padding: '80px 0' }}>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="hero-title" style={{ 
                fontSize: '4.5rem', 
                fontWeight: '800', 
                marginBottom: '20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Engineering Resilience into the Global Enterprise
              </h1>
              <p className="hero-subtitle" style={{ 
                fontSize: '1.4rem', 
                opacity: 0.95,
                marginBottom: '30px',
                color: '#ccc'
              }}>
                Strategic Guardrails for the Autonomous Era
              </p>
              <div className="hero-button">
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="primary" 
                  style={{ 
                    padding: '12px 32px', 
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    marginRight: '15px'
                  }}
                >
                  Start Your Journey <FaArrowRight style={{ marginLeft: '8px' }} />
                </Button>
                <Button 
                  as={Link} 
                  to="/services" 
                  variant="outline-light" 
                  style={{ 
                    padding: '12px 32px', 
                    borderRadius: '50px',
                    fontSize: '1.1rem'
                  }}
                >
                  Explore Services
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Animated scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          animation: 'bounce 2s infinite'
        }}>
          <div style={{
            width: '30px',
            height: '50px',
            border: '2px solid white',
            borderRadius: '15px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '4px',
              height: '10px',
              backgroundColor: 'white',
              borderRadius: '2px',
              animation: 'scroll 1.5s infinite'
            }} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} style={{ padding: '60px 0', backgroundColor: '#111' }}>
        <Container>
          <Row>
            <Col md={3} sm={6} className="text-center mb-4">
              <div style={{ fontSize: '3rem', fontWeight: '800', color: '#667eea' }}>
                {stats.projects.toLocaleString()}+
              </div>
              <div style={{ color: '#aaa', marginTop: '10px' }}>Projects Completed</div>
            </Col>
            <Col md={3} sm={6} className="text-center mb-4">
              <div style={{ fontSize: '3rem', fontWeight: '800', color: '#764ba2' }}>
                {stats.clients.toLocaleString()}+
              </div>
              <div style={{ color: '#aaa', marginTop: '10px' }}>Enterprise Clients</div>
            </Col>
            <Col md={3} sm={6} className="text-center mb-4">
              <div style={{ fontSize: '3rem', fontWeight: '800', color: '#f093fb' }}>
                {stats.engineers.toLocaleString()}+
              </div>
              <div style={{ color: '#aaa', marginTop: '10px' }}>Expert Engineers</div>
            </Col>
            <Col md={3} sm={6} className="text-center mb-4">
              <div style={{ fontSize: '3rem', fontWeight: '800', color: '#4facfe' }}>
                {stats.uptime}%
              </div>
              <div style={{ color: '#aaa', marginTop: '10px' }}>Uptime Guarantee</div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* The Genesis Section */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <FaRocket style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }} />
                <h2 style={{ fontSize: '2.8rem', fontWeight: '700', marginBottom: '30px', color: '#667eea' }}>
                  The Genesis of MJ&Roberts
                </h2>
              </div>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ccc', marginBottom: '25px' }}>
                MJ&Roberts was founded to bridge the <strong style={{ color: '#667eea' }}>Innovation-Infrastructure Gap</strong>. As global entities rushed toward cloud and AI, 
                they inadvertently created <strong style={{ color: '#f093fb' }}>"Brittle Ecosystems"</strong>—fragmented data, unmanaged technical debt, 
                and misaligned multi-cloud environments.
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ccc', marginBottom: '25px' }}>
                We witnessed enterprises investing millions in cutting-edge technology without the architectural discipline to scale it safely.
                The result? Security vulnerabilities, spiraling costs, and systems that failed precisely when they were needed most.
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ccc' }}>
                Today, we provide the <strong style={{ color: '#4facfe' }}>architectural discipline</strong> required to transform these liabilities into 
                high-velocity assets. Our approach combines battle-tested engineering practices with forward-thinking AI strategies 
                to build systems that are not just innovative, but <strong style={{ color: '#43e97b' }}>resilient, secure, and scalable</strong>.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#111' }}>
        <Container>
          <h2 className="text-center" style={{ fontSize: '2.8rem', fontWeight: '700', marginBottom: '20px', color: '#667eea' }}>
            The Value We Provide
          </h2>
          <p className="text-center" style={{ fontSize: '1.2rem', color: '#aaa', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px' }}>
            Six core principles that guide everything we do, ensuring our clients receive unparalleled expertise and results.
          </p>
          <Row>
            {values.map((value, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card 
                  ref={el => valueCardsRef.current[index] = el}
                  style={{ 
                    backgroundColor: '#1a1a1a', 
                    border: 'none', 
                    borderRadius: '20px', 
                    padding: '30px',
                    height: '100%',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = `0 20px 40px rgba(102,126,234,0.2)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ fontSize: '3rem', color: value.color, marginBottom: '20px' }}>
                    {value.icon}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{value.title}</h3>
                  <p style={{ color: '#aaa', lineHeight: '1.6' }}>{value.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} style={{ padding: '80px 0' }}>
        <Container>
          <h2 className="text-center" style={{ fontSize: '2.8rem', fontWeight: '700', marginBottom: '60px', color: '#667eea' }}>
            Our Journey
          </h2>
          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '100%',
              background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
              opacity: 0.3
            }} />
            
            {milestones.map((milestone, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                marginBottom: '50px',
                position: 'relative'
              }}>
                <div style={{
                  width: '45%',
                  padding: index % 2 === 0 ? '0 0 0 30px' : '0 30px 0 0',
                  textAlign: index % 2 === 0 ? 'left' : 'right'
                }}>
                  <Card style={{
                    backgroundColor: '#1a1a1a',
                    border: 'none',
                    borderRadius: '15px',
                    padding: '25px',
                    transition: 'transform 0.3s'
                  }}>
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: '800',
                      color: '#667eea',
                      marginBottom: '10px'
                    }}>
                      {milestone.year}
                    </div>
                    <h4 style={{ marginBottom: '10px' }}>{milestone.title}</h4>
                    <p style={{ color: '#aaa', marginBottom: 0 }}>{milestone.description}</p>
                  </Card>
                </div>
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: '#667eea',
                  top: '20px'
                }} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '80px 0', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        textAlign: 'center'
      }}>
        <Container>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px' }}>
            Ready to Engineer Your Enterprise Resilience?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.95 }}>
            Join the world's leading enterprises that trust MJ&Roberts for their digital transformation.
          </p>
          <Button 
            as={Link} 
            to="/contact" 
            variant="light" 
            size="lg"
            style={{ 
              borderRadius: '50px',
              padding: '12px 40px',
              fontWeight: '600'
            }}
          >
            Start the Conversation <FaArrowRight style={{ marginLeft: '8px' }} />
          </Button>
        </Container>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        
        @keyframes scroll {
          0% { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(20px); }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;