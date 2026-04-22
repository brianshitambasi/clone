// components/HomePage.jsx
/* eslint-disable no-unused-vars */
const React = require('react');
const ThreeBackground = require('./ThreeBackground').default;
const { useState, useEffect, useRef, useCallback } = React;
const { Container, Row, Col, Carousel, Button, Card, Badge, Modal, Navbar, Nav } = require('react-bootstrap');
const { Link } = require('react-router-dom');
const { 
  FaCode, FaChartLine, FaMobile, FaLightbulb, FaRobot, FaArrowRight, FaCheckCircle, 
  FaStar, FaUsers, FaBriefcase, FaGlobe, FaClock, FaShieldAlt, FaCloud, FaDatabase 
} = require('react-icons/fa');

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [counters, setCounters] = useState({
    clients: 0,
    engineers: 0,
    years: 0,
    countries: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const services = [
    { id: 'it-consulting', title: 'Digital Transformation', description: 'Strategic guidance for your digital evolution journey.', fullDesc: 'We guide companies through their digital transformation journeys, providing tailored strategies and software solutions that improve efficiency and automation. Our expert consultants help you navigate the complexities of modern technology adoption.', icon: React.createElement(FaLightbulb), color: '#2563eb' },
    { id: 'software-engineering', title: 'Artificial Intelligence', description: 'Cutting-edge AI solutions for global enterprises.', fullDesc: 'AI solutions for global enterprises, including predictive BI, machine learning models, and intelligent automation. Transform your business with our AI-first approach.', icon: React.createElement(FaRobot), color: '#7c3aed' },
    { id: 'data-analytics', title: 'Data & BI', description: 'Turn data into actionable insights.', fullDesc: 'Comprehensive data management, visualization and analytics solutions for data-driven decision making. Unlock the power of your data with modern BI tools.', icon: React.createElement(FaChartLine), color: '#06b6d4' },
    { id: 'managed-it', title: 'Application Services', description: 'End-to-end application development and support.', fullDesc: 'End-to-end application development, maintenance, and support services. We ensure your applications are always running at peak performance.', icon: React.createElement(FaCode), color: '#10b981' }
  ];

  const targetValues = React.useMemo(function() {
    return { clients: 800, engineers: 3000, years: 25, countries: 40 };
  }, []);

  const animateNumbers = useCallback(function() {
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    
    const timer = setInterval(function() {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuad = 1 - Math.pow(1 - progress, 2);
      
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
  }, [targetValues]);

  useEffect(function() {
    const observer = new IntersectionObserver(
      function(entries) {
        if (entries[0].isIntersecting && !hasAnimated) {
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

    return function() {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, animateNumbers]);

  const handleLearnMore = function(service) {
    setSelectedService(service);
    setShowModal(true);
  };

  return React.createElement(React.Fragment, null,
    // Custom CSS Styles
    React.createElement("style", null, `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      * { font-family: 'Inter', sans-serif; }
      
      body {
        background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
      }
      
      .hero-section { 
        min-height: 100vh; 
        display: flex; 
        align-items: center; 
        position: relative; 
        background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
      }
      
      .hero-content { 
        text-align: center; 
        padding: 20px;
      }
      
      .hero-content h1 { 
        font-size: 4rem; 
        font-weight: 800; 
        margin-bottom: 20px; 
        color: #1a1a2e;
      }
      
      .hero-content p { 
        font-size: 1.2rem; 
        margin-bottom: 30px; 
        color: #4a5568; 
      }
      
      .btn-primary-custom { 
        background: #2563eb; 
        border: none; 
        padding: 12px 32px; 
        border-radius: 50px; 
        font-weight: 600; 
        transition: transform 0.3s; 
        margin-right: 15px; 
        color: white;
      }
      
      .btn-primary-custom:hover { 
        transform: translateY(-2px); 
        background: #1d4ed8; 
      }
      
      .btn-outline-custom { 
        background: transparent; 
        border: 2px solid #2563eb; 
        padding: 12px 32px; 
        border-radius: 50px; 
        font-weight: 600; 
        transition: all 0.3s; 
        color: #2563eb;
      }
      
      .btn-outline-custom:hover { 
        background: #2563eb; 
        color: white; 
        transform: translateY(-2px); 
      }
      
      .section-title { 
        font-size: 2.5rem; 
        font-weight: 700; 
        text-align: center; 
        margin-bottom: 50px; 
        color: #1a1a2e;
      }
      
      .service-card { 
        background: white; 
        border-radius: 20px; 
        padding: 30px; 
        text-align: center; 
        transition: all 0.3s; 
        cursor: pointer; 
        height: 100%; 
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
      }
      
      .service-card:hover { 
        transform: translateY(-10px); 
        box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
      }
      
      .service-icon { 
        font-size: 3rem; 
        margin-bottom: 20px; 
      }
      
      .service-card h3 { 
        font-size: 1.3rem; 
        margin-bottom: 15px; 
        color: #1a1a2e; 
      }
      
      .service-card p { 
        color: #4a5568; 
        line-height: 1.6; 
        font-size: 0.9rem; 
      }
      
      .stats-section { 
        background: white; 
        padding: 80px 0; 
      }
      
      .stat-card { 
        text-align: center; 
        padding: 30px; 
        background: #f8fafc; 
        border-radius: 20px; 
        transition: all 0.3s; 
      }
      
      .stat-card:hover { 
        transform: translateY(-5px); 
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
      }
      
      .stat-number { 
        font-size: 2.5rem; 
        font-weight: 800; 
        color: #2563eb; 
      }
      
      .stat-label { 
        color: #4a5568; 
        margin-top: 10px; 
        font-size: 0.9rem; 
      }
      
      .industries-section { 
        padding: 80px 0; 
        background: #f8fafc; 
      }
      
      .industry-card { 
        position: relative; 
        overflow: hidden; 
        border-radius: 15px; 
        cursor: pointer; 
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      }
      
      .industry-card img { 
        width: 100%; 
        height: 250px; 
        object-fit: cover; 
        transition: transform 0.5s; 
      }
      
      .industry-card:hover img { 
        transform: scale(1.1); 
      }
      
      .industry-overlay { 
        position: absolute; 
        bottom: 0; 
        left: 0; 
        right: 0; 
        background: linear-gradient(transparent, rgba(0,0,0,0.7)); 
        padding: 20px; 
        text-align: center; 
      }
      
      .industry-overlay h4 { 
        color: white; 
        margin: 0; 
        font-size: 1.2rem; 
        font-weight: 600; 
      }
      
      .footer { 
        background: #1a1a2e; 
        padding: 60px 0 20px; 
        color: white;
      }
      
      .footer h5 { 
        color: white; 
        margin-bottom: 20px; 
        font-size: 1.1rem; 
      }
      
      .footer p { 
        color: #a0aec0; 
        line-height: 1.6; 
        font-size: 0.85rem; 
      }
      
      .footer a { 
        color: #a0aec0; 
        text-decoration: none; 
        transition: color 0.3s;
      }
      
      .footer a:hover { 
        color: #2563eb; 
      }
      
      .social-icons a { 
        color: #a0aec0; 
        margin-right: 15px; 
        font-size: 1.1rem; 
        transition: color 0.3s; 
      }
      
      .social-icons a:hover { 
        color: #2563eb; 
      }
      
      .footer-bottom { 
        text-align: center; 
        padding-top: 30px; 
        margin-top: 30px; 
        border-top: 1px solid #2d3748; 
        color: #a0aec0; 
        font-size: 0.8rem; 
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
      
      .fade-in-up { 
        animation: fadeInUp 0.8s ease-out; 
      }
      
      @media (max-width: 768px) {
        .hero-content h1 { 
          font-size: 2.5rem; 
        }
        .section-title { 
          font-size: 2rem; 
        }
        .stat-number { 
          font-size: 2rem; 
        }
        .btn-primary-custom, .btn-outline-custom {
          padding: 8px 20px;
          font-size: 0.9rem;
        }
      }
    `),

    // Hero Section
    React.createElement("section", { className: "hero-section" },
      React.createElement(Container, null,
        React.createElement(Row, null,
          React.createElement(Col, { lg: 10, className: "mx-auto" },
            React.createElement("div", { className: "hero-content fade-in-up" },
              React.createElement("h1", null, "MJ & Roberts Consulting"),
              React.createElement("p", null, "Digital Innovation That Drives Growth"),
              React.createElement("div", null,
                React.createElement(Button, { as: Link, to: "/contact", className: "btn-primary-custom" }, "Get Started ", React.createElement(FaArrowRight, null)),
                React.createElement(Button, { as: Link, to: "/services", className: "btn-outline-custom" }, "Our Services")
              )
            )
          )
        )
      )
    ),

    // Services Section
    React.createElement("section", { style: { padding: '80px 0', background: '#f8fafc' } },
      React.createElement(Container, null,
        React.createElement("h2", { className: "section-title" }, "Our Premium Services"),
        React.createElement(Row, null,
          services.map(function(service, index) {
            return React.createElement(Col, { md: 6, lg: 3, key: index, className: "mb-4" },
              React.createElement("div", { className: "service-card", onClick: function() { handleLearnMore(service); } },
                React.createElement("div", { className: "service-icon", style: { color: service.color } }, service.icon),
                React.createElement("h3", null, service.title),
                React.createElement("p", null, service.description),
                React.createElement(Badge, { bg: "primary", style: { marginTop: '15px', padding: '8px 16px', borderRadius: '50px', cursor: 'pointer', backgroundColor: service.color } }, "Learn More →")
              )
            );
          })
        )
      )
    ),

    // Stats Section
    React.createElement("section", { className: "stats-section", ref: statsRef },
      React.createElement(Container, null,
        React.createElement(Row, null,
          React.createElement(Col, { md: 3, sm: 6, className: "mb-4" },
            React.createElement("div", { className: "stat-card" },
              React.createElement(FaUsers, { style: { fontSize: '2rem', color: '#2563eb', marginBottom: '10px' } }),
              React.createElement("div", { className: "stat-number" }, counters.clients.toLocaleString(), "+"),
              React.createElement("div", { className: "stat-label" }, "Happy Clients")
            )
          ),
          React.createElement(Col, { md: 3, sm: 6, className: "mb-4" },
            React.createElement("div", { className: "stat-card" },
              React.createElement(FaBriefcase, { style: { fontSize: '2rem', color: '#7c3aed', marginBottom: '10px' } }),
              React.createElement("div", { className: "stat-number" }, counters.engineers.toLocaleString(), "+"),
              React.createElement("div", { className: "stat-label" }, "Expert Engineers")
            )
          ),
          React.createElement(Col, { md: 3, sm: 6, className: "mb-4" },
            React.createElement("div", { className: "stat-card" },
              React.createElement(FaClock, { style: { fontSize: '2rem', color: '#06b6d4', marginBottom: '10px' } }),
              React.createElement("div", { className: "stat-number" }, counters.years, "+"),
              React.createElement("div", { className: "stat-label" }, "Years Experience")
            )
          ),
          React.createElement(Col, { md: 3, sm: 6, className: "mb-4" },
            React.createElement("div", { className: "stat-card" },
              React.createElement(FaGlobe, { style: { fontSize: '2rem', color: '#10b981', marginBottom: '10px' } }),
              React.createElement("div", { className: "stat-number" }, counters.countries),
              React.createElement("div", { className: "stat-label" }, "Countries Worldwide")
            )
          )
        )
      )
    ),

    // Industries Section
    React.createElement("section", { className: "industries-section" },
      React.createElement(Container, null,
        React.createElement("h2", { className: "section-title" }, "Industries We Transform"),
        React.createElement(Row, null,
          React.createElement(Col, { md: 3, sm: 6, className: "mb-4" },
            React.createElement("div", { className: "industry-card" },
              React.createElement("img", { src: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=250&fit=crop", alt: "Manufacturing" }),
              React.createElement("div", { className: "industry-overlay" },
                React.createElement("h4", null, "Manufacturing")
              )
            )
          ),
          React.createElement(Col, { md: 3, sm: 6, className: "mb-4" },
            React.createElement("div", { className: "industry-card" },
              React.createElement("img", { src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop", alt: "Retail" }),
              React.createElement("div", { className: "industry-overlay" },
                React.createElement("h4", null, "Retail & E-commerce")
              )
            )
          ),
          React.createElement(Col, { md: 3, sm: 6, className: "mb-4" },
            React.createElement("div", { className: "industry-card" },
              React.createElement("img", { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop", alt: "Healthcare" }),
              React.createElement("div", { className: "industry-overlay" },
                React.createElement("h4", null, "Healthcare")
              )
            )
          ),
          React.createElement(Col, { md: 3, sm: 6, className: "mb-4" },
            React.createElement("div", { className: "industry-card" },
              React.createElement("img", { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop", alt: "Finance" }),
              React.createElement("div", { className: "industry-overlay" },
                React.createElement("h4", null, "Finance")
              )
            )
          )
        )
      )
    ),

    // CTA Banner
    React.createElement("section", { style: { padding: '60px 0', background: '#2563eb' } },
      React.createElement(Container, null,
        React.createElement(Row, null,
          React.createElement(Col, { lg: 8, className: "mx-auto text-center" },
            React.createElement("h2", { style: { fontSize: '2rem', fontWeight: '700', marginBottom: '15px', color: 'white' } }, "Ready to Transform Your Business?"),
            React.createElement("p", { style: { fontSize: '1rem', marginBottom: '25px', color: 'rgba(255,255,255,0.9)' } }, "Join 800+ businesses that trust MJ&Roberts for their digital transformation"),
            React.createElement(Button, { as: Link, to: "/contact", variant: "light", size: "lg", style: { borderRadius: '50px', padding: '12px 40px', fontWeight: '600' } }, "Get Started Today ", React.createElement(FaArrowRight, null))
          )
        )
      )
    ),

    // Footer
    React.createElement("footer", { className: "footer" },
      React.createElement(Container, null,
        React.createElement(Row, null,
          React.createElement(Col, { md: 4 },
            React.createElement("h5", null, "MJ & Roberts Consulting"),
            React.createElement("p", null, "Digital innovation that drives growth. We help businesses transform through cutting-edge technology solutions."),
            React.createElement("div", { className: "social-icons" },
              React.createElement("a", { href: "https://linkedin.com", target: "_blank", rel: "noopener noreferrer" }, React.createElement("i", { className: "fab fa-linkedin" })),
              React.createElement("a", { href: "https://twitter.com", target: "_blank", rel: "noopener noreferrer" }, React.createElement("i", { className: "fab fa-twitter" })),
              React.createElement("a", { href: "https://facebook.com", target: "_blank", rel: "noopener noreferrer" }, React.createElement("i", { className: "fab fa-facebook" }))
            )
          ),
          React.createElement(Col, { md: 2 },
            React.createElement("h5", null, "Quick Links"),
            React.createElement("p", null, React.createElement(Link, { to: "/about" }, "About Us")),
            React.createElement("p", null, React.createElement(Link, { to: "/services" }, "Services")),
            React.createElement("p", null, React.createElement(Link, { to: "/solutions" }, "Solutions")),
            React.createElement("p", null, React.createElement(Link, { to: "/technologies" }, "Technologies")),
            React.createElement("p", null, React.createElement(Link, { to: "/case-studies" }, "Case Studies"))
          ),
          React.createElement(Col, { md: 3 },
            React.createElement("h5", null, "Contact Info"),
            React.createElement("p", null, React.createElement("i", { className: "fas fa-envelope" }), " info@mjroberts.com"),
            React.createElement("p", null, React.createElement("i", { className: "fas fa-phone" }), " +1 (555) 123-4567"),
            React.createElement("p", null, React.createElement("i", { className: "fas fa-map-marker-alt" }), " Nairobi, Kenya")
          ),
          React.createElement(Col, { md: 3 },
            React.createElement("h5", null, "Newsletter"),
            React.createElement("p", null, "Subscribe to get updates"),
            React.createElement("div", { className: "input-group" },
              React.createElement("input", { type: "email", className: "form-control", placeholder: "Your email", style: { background: '#2d3748', border: '1px solid #4a5568', color: 'white' } }),
              React.createElement(Button, { variant: "primary", style: { borderRadius: '0 8px 8px 0', backgroundColor: '#2563eb', border: 'none' } }, "Subscribe")
            )
          )
        ),
        React.createElement("div", { className: "footer-bottom" },
          React.createElement("p", null, "\u00A9 2025 MJ & Roberts Consulting. All rights reserved.")
        )
      )
    ),

    // Service Modal
    React.createElement(Modal, { show: showModal, onHide: function() { setShowModal(false); }, size: "lg", centered: true },
      React.createElement(Modal.Header, { style: { backgroundColor: 'white', borderBottom: '1px solid #e2e8f0' } },
        React.createElement(Modal.Title, { style: { color: '#1a1a2e' } }, selectedService ? selectedService.title : ''),
        React.createElement(Button, { variant: "close", onClick: function() { setShowModal(false); } })
      ),
      React.createElement(Modal.Body, { style: { backgroundColor: 'white', color: '#4a5568', padding: '30px' } },
        React.createElement("div", { style: { fontSize: '3rem', color: selectedService?.color, marginBottom: '20px' } }, selectedService?.icon),
        React.createElement("h3", { style: { marginBottom: '15px', color: '#1a1a2e' } }, selectedService?.title),
        React.createElement("p", { style: { lineHeight: '1.8' } }, selectedService?.fullDesc),
        React.createElement("hr", { style: { borderColor: '#e2e8f0', margin: '20px 0' } }),
        React.createElement("h5", { style: { color: '#1a1a2e' } }, "Key Benefits:"),
        React.createElement("ul", { style: { marginTop: '15px', listStyle: 'none', padding: 0 } },
          React.createElement("li", { style: { marginBottom: '10px' } }, React.createElement(FaCheckCircle, { style: { color: '#10b981', marginRight: '10px' } }), " Expert guidance from industry leaders"),
          React.createElement("li", { style: { marginBottom: '10px' } }, React.createElement(FaCheckCircle, { style: { color: '#10b981', marginRight: '10px' } }), " Proven track record of success"),
          React.createElement("li", { style: { marginBottom: '10px' } }, React.createElement(FaCheckCircle, { style: { color: '#10b981', marginRight: '10px' } }), " Tailored solutions for your needs"),
          React.createElement("li", { style: { marginBottom: '10px' } }, React.createElement(FaCheckCircle, { style: { color: '#10b981', marginRight: '10px' } }), " 24/7 dedicated support")
        )
      ),
      React.createElement(Modal.Footer, { style: { backgroundColor: 'white', borderTop: '1px solid #e2e8f0' } },
        React.createElement(Button, { variant: "secondary", onClick: function() { setShowModal(false); } }, "Close"),
        React.createElement(Button, { as: Link, to: "/contact", variant: "primary", style: { backgroundColor: '#2563eb', border: 'none' } }, "Request Consultation →")
      )
    )
  );
};

module.exports = HomePage;