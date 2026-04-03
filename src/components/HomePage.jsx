// components/HomePage.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCode, FaChartLine, FaMobile, FaLightbulb, FaRobot } from 'react-icons/fa';

const HomePage = () => {
  const [services] = useState([
    { title: 'Digital transformation', description: 'We guide companies through their digital transformation journeys, providing tailored strategies and software solutions that improve efficiency and automation.' },
    { title: 'Artificial intelligence', description: 'AI solutions for global enterprises, including predictive BI, machine learning models, and intelligent automation.' },
    { title: 'Data & BI', description: 'Comprehensive data management, visualization and analytics solutions for data-driven decision making.' },
    { title: 'Application services', description: 'End-to-end application development, maintenance, and support services.' },
    { title: 'Technology advisory', description: 'Expert technology consulting to help you make the right strategic decisions.' }
  ]);

  const serviceIcons = [<FaCode />, <FaRobot />, <FaChartLine />, <FaMobile />, <FaLightbulb />];

  // Counter animation state
  const [counters, setCounters] = useState({
    clients: 0,
    engineers: 0,
    years: 0,
    countries: 0
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const targetValues = {
    clients: 800,
    engineers: 3000,
    years: 25,
    countries: 40
  };

  const animateNumbers = useCallback(() => {
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      
      setCounters({
        clients: Math.floor(easeOutQuad * targetValues.clients),
        engineers: Math.floor(easeOutQuad * targetValues.engineers),
        years: Math.floor(easeOutQuad * targetValues.years),
        countries: Math.floor(easeOutQuad * targetValues.countries)
      });
      
      if (frame === totalFrames) {
        setCounters(targetValues);
        clearInterval(timer);
      }
    }, frameDuration);
  }, [targetValues.clients, targetValues.engineers, targetValues.years, targetValues.countries]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = statsRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, animateNumbers]);

  return (
    <>
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-world-map-32873-large.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="overlay"></div>

      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row>
            <Col md={12}>
              <div className="hero-content">
                <h1>MJ & Roberts Consulting</h1>
                <p>Digital Innovation That Drives Growth</p>
                <div className="hero-buttons">
                  <Button as={Link} to="/contact" className="btn-primary-custom">Get Started</Button>
                  <Button as={Link} to="/services" className="btn-outline-custom">Our Services</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Carousel Section */}
      <section className="services-carousel-section">
        <Container>
          <h2 className="section-title">Our Services</h2>
          <Carousel interval={4000} indicators controls>
            {services.map((service, index) => (
              <Carousel.Item key={index}>
                <div className="service-card">
                  <div className="service-icon">
                    {serviceIcons[index % serviceIcons.length]}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Button as={Link} to="/services" variant="link" className="btn-learn">Learn more →</Button>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Stats Section with Dynamic Counters */}
      <section className="stats-section" ref={statsRef}>
        <Container>
          <Row>
            <Col md={3} sm={6}>
              <div className="stat-card">
                <div className="stat-number">
                  {counters.clients.toLocaleString()}+
                </div>
                <div className="stat-label">Clients Served</div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="stat-card">
                <div className="stat-number">
                  {counters.engineers.toLocaleString()}+
                </div>
                <div className="stat-label">Engineers</div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="stat-card">
                <div className="stat-number">
                  {counters.years}+
                </div>
                <div className="stat-label">Years Experience</div>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="stat-card">
                <div className="stat-number">
                  {counters.countries}
                </div>
                <div className="stat-label">Countries</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <Container>
          <h2 className="section-title">Industries We Serve</h2>
          <Row>
            <Col md={4}>
              <div className="industry-card">
                <img src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=250&fit=crop" alt="Manufacturing" />
                <div className="industry-overlay">
                  <h4>Manufacturing</h4>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="industry-card">
                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop" alt="Retail" />
                <div className="industry-overlay">
                  <h4>Retail</h4>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="industry-card">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop" alt="Healthcare" />
                <div className="industry-overlay">
                  <h4>Healthcare</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <Row>
            <Col md={4}>
              <h5>MJ & Roberts Consulting</h5>
              <p>Digital innovation that drives growth. We help businesses transform through cutting-edge technology solutions.</p>
              <div className="social-icons">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              </div>
            </Col>
            <Col md={2}>
              <h5>Quick Links</h5>
              <p><Link to="/about">About Us</Link></p>
              <p><Link to="/services">Services</Link></p>
              <p><Link to="/solutions">Solutions</Link></p>
              <p><Link to="/technologies">Technologies</Link></p>
              <p><Link to="/case-studies">Case Studies</Link></p>
            </Col>
            <Col md={3}>
              <h5>Contact Info</h5>
              <p><i className="fas fa-envelope"></i> info@mjroberts.com</p>
              <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
            </Col>
            <Col md={3}>
              <h5>Newsletter</h5>
              <p>Subscribe to get updates</p>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Your email" />
                <Button variant="primary">Subscribe</Button>
              </div>
            </Col>
          </Row>
          <div className="footer-bottom">
            <p>&copy; 2024 MJ & Roberts Consulting. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default HomePage;