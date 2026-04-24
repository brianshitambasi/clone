// components/AboutPage.jsx
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaRocket, FaArrowRight, FaAward, FaUsers, 
  FaHandshake, FaLightbulb, FaStar, FaQuoteLeft
} from 'react-icons/fa';

const AboutPage = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const statsRef = useRef(null);

  // Company stats for counter animation
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    engineers: 0,
    uptime: 0,
    countries: 0,
    certifications: 0
  });

  const targetStats = useMemo(() => {
    return {
      projects: 500,
      clients: 300,
      engineers: 250,
      uptime: 99.99,
      countries: 15,
      certifications: 150
    };
  }, []);

  // Core values
  const coreValues = [
    { icon: <FaStar />, title: 'Excellence', desc: 'We deliver nothing short of excellence in every engagement' },
    { icon: <FaLightbulb />, title: 'Innovation', desc: 'We embrace cutting-edge solutions to solve complex challenges' },
    { icon: <FaHandshake />, title: 'Integrity', desc: 'We operate with transparency and build lasting trust' },
    { icon: <FaUsers />, title: 'Collaboration', desc: 'We grow together with our clients and partners' }
  ];

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
          uptime: Number((easeOutQuad * targetStats.uptime).toFixed(2)),
          countries: Math.floor(easeOutQuad * targetStats.countries),
          certifications: Math.floor(easeOutQuad * targetStats.certifications)
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

    return () => { observer.disconnect(); };
  }, [targetStats]);

  // Simple CSS-based animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(10px); }
      }
      @keyframes scroll {
        0% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(20px); }
      }
    `;
    document.head.appendChild(style);
    
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButton = document.querySelector('.hero-button');
    
    if (heroTitle) heroTitle.classList.add('fade-in-up');
    if (heroSubtitle) heroSubtitle.classList.add('fade-in-up');
    if (heroButton) heroButton.classList.add('fade-in-up');
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      {/* Hero Section with Video Background */}
      <section ref={heroRef} style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden' }}>
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
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            background: 'radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.85) 100%)', 
            zIndex: 1 
          }} />
        </div>
        <Container style={{ position: 'relative', zIndex: 2, padding: '80px 0' }}>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <Badge bg="light" text="dark" style={{ marginBottom: '20px', padding: '8px 20px', borderRadius: '50px' }}>
                <FaAward style={{ marginRight: '5px', color: '#ffc107' }} /> Award-Winning Technology Consulting
              </Badge>
              <h1 className="hero-title" style={{ 
                fontSize: '3.5rem', 
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
                fontSize: '1.3rem', 
                opacity: 0.95, 
                marginBottom: '30px', 
                color: '#cccccc'
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
                    marginRight: '15px',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    border: 'none'
                  }}
                >
                  Start Your Journey <FaArrowRight style={{ marginLeft: '8px' }} />
                </Button>
                <Button 
                  as={Link} 
                  to="/services" 
                  variant="outline-light" 
                  style={{ padding: '12px 32px', borderRadius: '50px', fontSize: '1.1rem' }}
                >
                  Explore Services
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, animation: 'bounce 2s infinite' }}>
          <div style={{ width: '30px', height: '50px', border: '2px solid white', borderRadius: '15px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', width: '4px', height: '10px', backgroundColor: 'white', borderRadius: '2px', animation: 'scroll 1.5s infinite' }} />
          </div>
        </div>
      </section>

      {/* Stats Section - Expanded */}
      <section ref={statsRef} style={{ padding: '60px 0', backgroundColor: '#111' }}>
        <Container>
          <Row>
            <Col md={4} sm={6} className="text-center mb-4">
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#667eea' }}>{stats.projects.toLocaleString()}+</div>
              <div style={{ color: '#aaaaaa', marginTop: '10px' }}>Projects Completed</div>
            </Col>
            <Col md={4} sm={6} className="text-center mb-4">
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#764ba2' }}>{stats.clients.toLocaleString()}+</div>
              <div style={{ color: '#aaaaaa', marginTop: '10px' }}>Enterprise Clients</div>
            </Col>
            <Col md={4} sm={6} className="text-center mb-4">
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#f093fb' }}>{stats.engineers.toLocaleString()}+</div>
              <div style={{ color: '#aaaaaa', marginTop: '10px' }}>Expert Engineers</div>
            </Col>
            <Col md={4} sm={6} className="text-center mb-4">
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#4facfe' }}>{stats.uptime}%</div>
              <div style={{ color: '#aaaaaa', marginTop: '10px' }}>Uptime Guarantee</div>
            </Col>
            <Col md={4} sm={6} className="text-center mb-4">
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#43e97b' }}>{stats.countries}+</div>
              <div style={{ color: '#aaaaaa', marginTop: '10px' }}>Countries Served</div>
            </Col>
            <Col md={4} sm={6} className="text-center mb-4">
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#fa709a' }}>{stats.certifications}+</div>
              <div style={{ color: '#aaaaaa', marginTop: '10px' }}>Certifications</div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* The Genesis Section - Expanded */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <FaRocket style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }} />
                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '30px', color: '#667eea' }}>
                  The Genesis of MJ&Roberts
                </h2>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cccccc', marginBottom: '25px' }}>
                MJ&Roberts was founded in 2020 with a bold mission: to bridge the <strong style={{ color: '#667eea' }}>Innovation-Infrastructure Gap</strong>. 
                As global entities rushed toward cloud and AI, they inadvertently created{' '}
                <strong style={{ color: '#f093fb' }}>"Brittle Ecosystems"</strong>—fragmented data, unmanaged technical debt, 
                and misaligned multi-cloud environments that threatened their digital transformation success.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cccccc', marginBottom: '25px' }}>
                We witnessed enterprises investing millions in cutting-edge technology without the architectural discipline 
                to scale it safely. The result? Security vulnerabilities, spiraling costs, and systems that failed precisely 
                when they were needed most—during critical business operations or customer-facing moments.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cccccc', marginBottom: '25px' }}>
                Today, MJ&Roberts stands as a global leader in enterprise technology consulting. Our team of 250+ certified 
                engineers and architects has successfully delivered over 500 projects across 15 countries, helping organizations 
                achieve measurable results through disciplined engineering practices.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cccccc' }}>
                We provide the <strong style={{ color: '#4facfe' }}>architectural discipline</strong> required to 
                transform these liabilities into high-velocity assets. Our approach combines battle-tested engineering practices 
                with forward-thinking AI strategies to build systems that are not just innovative, but{' '}
                <strong style={{ color: '#43e97b' }}>resilient, secure, and scalable</strong>—ready for whatever the future brings.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values Section */}
      <section style={{ padding: '60px 0', backgroundColor: '#111' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '15px', color: '#667eea' }}>
              Our Core Values
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#aaaaaa', maxWidth: '700px', margin: '0 auto' }}>
              The principles that guide everything we do
            </p>
          </div>
          <Row>
            {coreValues.map((value, index) => (
              <Col md={3} sm={6} key={index} className="mb-4">
                <Card style={{ 
                  backgroundColor: '#1a1a1a', 
                  border: 'none', 
                  borderRadius: '15px', 
                  padding: '30px 20px',
                  textAlign: 'center',
                  height: '100%',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ fontSize: '2.5rem', color: '#667eea', marginBottom: '20px' }}>{value.icon}</div>
                  <h4 style={{ color: '#ffffff', marginBottom: '15px' }}>{value.title}</h4>
                  <p style={{ color: '#aaaaaa', fontSize: '0.9rem', marginBottom: 0 }}>{value.desc}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Timeline Section - Enhanced */}
      <section ref={timelineRef} style={{ padding: '80px 0' }}>
        <Container>
          <h2 className="text-center" style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '15px', color: '#667eea' }}>
            Our Journey
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#aaaaaa', marginBottom: '60px' }}>
            4 years of excellence and counting
          </p>
          <div style={{ position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              left: '50%', 
              transform: 'translateX(-50%)', 
              width: '2px', 
              height: '100%', 
              background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)', 
              opacity: 0.3 
            }} />
            
            {/* Milestone 2020 */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '50px', position: 'relative' }}>
              <div style={{ width: '45%', padding: '0 0 0 30px', textAlign: 'left' }}>
                <div style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px', transition: 'transform 0.3s' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#667eea', marginBottom: '10px' }}>2020</div>
                  <h4 style={{ marginBottom: '10px', fontSize: '1.1rem', color: '#ffffff' }}>Company Founded</h4>
                  <p style={{ color: '#aaaaaa', marginBottom: 0, fontSize: '0.9rem' }}>
                    MJ&Roberts established with a vision to bridge the innovation-infrastructure gap in enterprise technology.
                  </p>
                </div>
              </div>
              <div style={{ 
                position: 'absolute', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: '#667eea', 
                top: '20px' 
              }} />
            </div>

            {/* Milestone 2021 */}
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '50px', position: 'relative' }}>
              <div style={{ width: '45%', padding: '0 30px 0 0', textAlign: 'right' }}>
                <div style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#667eea', marginBottom: '10px' }}>2021</div>
                  <h4 style={{ marginBottom: '10px', fontSize: '1.1rem', color: '#ffffff' }}>First Enterprise Client</h4>
                  <p style={{ color: '#aaaaaa', marginBottom: 0, fontSize: '0.9rem' }}>
                    Secured first Fortune 500 client for cloud transformation, marking our entry into enterprise consulting.
                  </p>
                </div>
              </div>
              <div style={{ 
                position: 'absolute', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: '#667eea', 
                top: '20px' 
              }} />
            </div>

            {/* Milestone 2022 */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '50px', position: 'relative' }}>
              <div style={{ width: '45%', padding: '0 0 0 30px', textAlign: 'left' }}>
                <div style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#667eea', marginBottom: '10px' }}>2022</div>
                  <h4 style={{ marginBottom: '10px', fontSize: '1.1rem', color: '#ffffff' }}>AI Practice Launch</h4>
                  <p style={{ color: '#aaaaaa', marginBottom: 0, fontSize: '0.9rem' }}>
                    Launched dedicated AI and machine learning practice, helping clients leverage cutting-edge AI technologies.
                  </p>
                </div>
              </div>
              <div style={{ 
                position: 'absolute', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: '#667eea', 
                top: '20px' 
              }} />
            </div>

            {/* Milestone 2023 */}
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '50px', position: 'relative' }}>
              <div style={{ width: '45%', padding: '0 30px 0 0', textAlign: 'right' }}>
                <div style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#667eea', marginBottom: '10px' }}>2023</div>
                  <h4 style={{ marginBottom: '10px', fontSize: '1.1rem', color: '#ffffff' }}>Global Expansion</h4>
                  <p style={{ color: '#aaaaaa', marginBottom: 0, fontSize: '0.9rem' }}>
                    Expanded operations to 3 continents with 200+ certified engineers serving clients worldwide.
                  </p>
                </div>
              </div>
              <div style={{ 
                position: 'absolute', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: '#667eea', 
                top: '20px' 
              }} />
            </div>

            {/* Milestone 2024 */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '50px', position: 'relative' }}>
              <div style={{ width: '45%', padding: '0 0 0 30px', textAlign: 'left' }}>
                <div style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#667eea', marginBottom: '10px' }}>2024</div>
                  <h4 style={{ marginBottom: '10px', fontSize: '1.1rem', color: '#ffffff' }}>Agentic AI Platform</h4>
                  <p style={{ color: '#aaaaaa', marginBottom: 0, fontSize: '0.9rem' }}>
                    Released proprietary Agentic AI orchestration platform, revolutionizing enterprise automation.
                  </p>
                </div>
              </div>
              <div style={{ 
                position: 'absolute', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: '#667eea', 
                top: '20px' 
              }} />
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#111' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <FaQuoteLeft style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px', opacity: 0.5 }} />
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '15px', color: '#667eea' }}>
              What Our Clients Say
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#aaaaaa', maxWidth: '700px', margin: '0 auto' }}>
              Trusted by industry leaders worldwide
            </p>
          </div>
          <Row>
            <Col md={4} className="mb-4">
              <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px', height: '100%' }}>
                <div style={{ fontSize: '4rem', color: '#667eea', marginBottom: '15px' }}>“</div>
                <p style={{ color: '#cccccc', lineHeight: '1.6', marginBottom: '20px' }}>
                  MJ&Roberts transformed our cloud infrastructure, reducing costs by 40% while improving reliability. Their expertise is unmatched.
                </p>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#ffffff' }}>David Kimathi</div>
                  <div style={{ color: '#aaaaaa', fontSize: '0.85rem' }}>CTO, Global Bank</div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px', height: '100%' }}>
                <div style={{ fontSize: '4rem', color: '#667eea', marginBottom: '15px' }}>“</div>
                <p style={{ color: '#cccccc', lineHeight: '1.6', marginBottom: '20px' }}>
                  The team at MJ&Roberts helped us implement AI solutions that increased our customer engagement by 300%. Highly recommended!
                </p>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#ffffff' }}>Sarah Wanjiku</div>
                  <div style={{ color: '#aaaaaa', fontSize: '0.85rem' }}>CEO, Tech Corp</div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px', height: '100%' }}>
                <div style={{ fontSize: '4rem', color: '#667eea', marginBottom: '15px' }}>“</div>
                <p style={{ color: '#cccccc', lineHeight: '1.6', marginBottom: '20px' }}>
                  Their Salesforce implementation transformed our sales process. We've seen a 45% increase in productivity within 6 months.
                </p>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#ffffff' }}>James Otieno</div>
                  <div style={{ color: '#aaaaaa', fontSize: '0.85rem' }}>Sales Director, Retail Giant</div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', textAlign: 'center' }}>
        <Container>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px', color: '#ffffff' }}>
            Ready to Engineer Your Enterprise Resilience?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.95, color: 'rgba(255,255,255,0.95)', maxWidth: '700px', margin: '0 auto 30px' }}>
            Join 300+ leading enterprises that trust MJ&Roberts for their digital transformation journey.
          </p>
          <div>
            <Button 
              as={Link} 
              to="/contact" 
              variant="light" 
              size="lg" 
              style={{ borderRadius: '50px', padding: '14px 45px', fontWeight: '600', marginRight: '15px' }}
            >
              Start the Conversation <FaArrowRight style={{ marginLeft: '8px' }} />
            </Button>
            <Button 
              as={Link} 
              to="/case-studies" 
              variant="outline-light" 
              size="lg" 
              style={{ borderRadius: '50px', padding: '14px 45px', fontWeight: '600' }}
            >
              View Success Stories
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;