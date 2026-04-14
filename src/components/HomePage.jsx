// components/HomePage.jsx
/* eslint-disable no-unused-vars */
const React = require('react');
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
    { id: 'it-consulting', title: 'Digital Transformation', description: 'Strategic guidance for your digital evolution journey.', fullDesc: 'We guide companies through their digital transformation journeys, providing tailored strategies and software solutions that improve efficiency and automation. Our expert consultants help you navigate the complexities of modern technology adoption.', icon: React.createElement(FaLightbulb), color: '#667eea' },
    { id: 'software-engineering', title: 'Artificial Intelligence', description: 'Cutting-edge AI solutions for global enterprises.', fullDesc: 'AI solutions for global enterprises, including predictive BI, machine learning models, and intelligent automation. Transform your business with our AI-first approach.', icon: React.createElement(FaRobot), color: '#764ba2' },
    { id: 'data-analytics', title: 'Data & BI', description: 'Turn data into actionable insights.', fullDesc: 'Comprehensive data management, visualization and analytics solutions for data-driven decision making. Unlock the power of your data with modern BI tools.', icon: React.createElement(FaChartLine), color: '#f093fb' },
    { id: 'managed-it', title: 'Application Services', description: 'End-to-end application development and support.', fullDesc: 'End-to-end application development, maintenance, and support services. We ensure your applications are always running at peak performance.', icon: React.createElement(FaCode), color: '#4facfe' }
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

  // FIXED: Copy ref value to variable inside effect to prevent cleanup issue
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

    // Copy ref to a variable inside the effect
    const currentRef = statsRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Use the copied variable in cleanup
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
      .hero-section { min-height: 100vh; display: flex; align-items: center; position: relative; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%); }
      .video-background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; z-index: 0; }
      .video-background video { width: 100%; height: 100%; object-fit: cover; opacity: 0.3; }
      .overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%); z-index: 1; }
      .hero-content { position: relative; z-index: 2; text-align: center; color: white; }
      .hero-content h1 { font-size: 4rem; font-weight: 800; margin-bottom: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
      .hero-content p { font-size: 1.2rem; margin-bottom: 30px; color: #ccc; }
      .btn-primary-custom { background: linear-gradient(135deg, #667eea, #764ba2); border: none; padding: 12px 32px; border-radius: 50px; font-weight: 600; transition: transform 0.3s; margin-right: 15px; }
      .btn-primary-custom:hover { transform: translateY(-2px); background: linear-gradient(135deg, #764ba2, #667eea); }
      .btn-outline-custom { background: transparent; border: 2px solid white; padding: 12px 32px; border-radius: 50px; font-weight: 600; transition: all 0.3s; }
      .btn-outline-custom:hover { background: white; color: #0a0a0a; transform: translateY(-2px); }
      .section-title { font-size: 2.5rem; font-weight: 700; text-align: center; margin-bottom: 50px; background: linear-gradient(135deg, #667eea, #f093fb); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
      .service-card { background: rgba(26,26,26,0.9); backdrop-filter: blur(10px); border-radius: 20px; padding: 30px; text-align: center; transition: all 0.3s; cursor: pointer; height: 100%; border: 1px solid rgba(102,126,234,0.2); }
      .service-card:hover { transform: translateY(-10px); border-color: #667eea; box-shadow: 0 20px 40px rgba(102,126,234,0.2); }
      .service-icon { font-size: 3rem; margin-bottom: 20px; }
      .service-card h3 { font-size: 1.3rem; margin-bottom: 15px; color: white; }
      .service-card p { color: #aaa; line-height: 1.6; font-size: 0.9rem; }
      .stats-section { background: linear-gradient(135deg, #111 0%, #1a1a1a 100%); padding: 80px 0; }
      .stat-card { text-align: center; padding: 30px; background: rgba(26,26,26,0.9); border-radius: 20px; backdrop-filter: blur(10px); border: 1px solid rgba(102,126,234,0.2); transition: all 0.3s; }
      .stat-card:hover { transform: translateY(-5px); border-color: #667eea; }
      .stat-number { font-size: 2.5rem; font-weight: 800; color: #667eea; }
      .stat-label { color: #aaa; margin-top: 10px; font-size: 0.9rem; }
      .industries-section { padding: 80px 0; background: #0a0a0a; }
      .industry-card { position: relative; overflow: hidden; border-radius: 15px; cursor: pointer; }
      .industry-card img { width: 100%; height: 250px; object-fit: cover; transition: transform 0.5s; }
      .industry-card:hover img { transform: scale(1.1); }
      .industry-overlay { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.9)); padding: 20px; text-align: center; }
      .industry-overlay h4 { color: white; margin: 0; font-size: 1.2rem; font-weight: 600; }
      .footer { background: #0a0a0a; padding: 60px 0 20px; border-top: 1px solid #333; }
      .footer h5 { color: #667eea; margin-bottom: 20px; font-size: 1.1rem; }
      .footer p { color: #aaa; line-height: 1.6; font-size: 0.85rem; }
      .social-icons a { color: white; margin-right: 15px; font-size: 1.1rem; transition: color 0.3s; text-decoration: none; }
      .social-icons a:hover { color: #667eea; }
      .footer-bottom { text-align: center; padding-top: 30px; margin-top: 30px; border-top: 1px solid #333; color: #666; font-size: 0.8rem; }
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      .fade-in-up { animation: fadeInUp 0.8s ease-out; }
      @media (max-width: 768px) {
        .hero-content h1 { font-size: 2.5rem; }
        .section-title { font-size: 2rem; }
        .stat-number { font-size: 2rem; }
      }
    `),

    // Video Background
    React.createElement("div", { className: "video-background" },
      React.createElement("video", { autoPlay: true, loop: true, muted: true, playsInline: true },
        React.createElement("source", { src: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-world-map-32873-large.mp4", type: "video/mp4" })
      )
    ),
    React.createElement("div", { className: "overlay" }),

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
    React.createElement("section", { style: { padding: '80px 0', background: '#0a0a0a' } },
      React.createElement(Container, null,
        React.createElement("h2", { className: "section-title" }, "Our Premium Services"),
        React.createElement(Row, null,
          services.map(function(service, index) {
            return React.createElement(Col, { md: 6, lg: 3, key: index, className: "mb-4" },
              React.createElement("div", { className: "service-card", onClick: function() { handleLearnMore(service); } },
                React.createElement("div", { className: "service-icon", style: { color: service.color } }, service.icon),
                React.createElement("h3", null, service.title),
                React.createElement("p", null, service.description),
                React.createElement(Badge, { bg: "primary", style: { marginTop: '15px', padding: '8px 16px', borderRadius: '50px', cursor: 'pointer' } }, "Learn More →")
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
              React.createElement(FaUsers, { style: { fontSize: '2rem', color: '#667eea', marginBottom: '10px' } }),
              React.createElement("div", { className: "stat-number" }, counters.clients.toLocaleString(), "+"),
              React.createElement("div", { className: "stat-label" }, "Happy Clients")
            )
          ),
          React.createElement(Col, { md: 3, sm: 6, className: "mb-4" },
            React.createElement("div", { className: "stat-card" },
              React.createElement(FaBriefcase, { style: { fontSize: '2rem', color: '#764ba2', marginBottom: '10px' } }),
              React.createElement("div", { className: "stat-number" }, counters.engineers.toLocaleString(), "+"),
              React.createElement("div", { className: "stat-label" }, "Expert Engineers")
            )
          ),
          React.createElement(Col, { md: 3, sm: 6, className: "mb-4" },
            React.createElement("div", { className: "stat-card" },
              React.createElement(FaClock, { style: { fontSize: '2rem', color: '#f093fb', marginBottom: '10px' } }),
              React.createElement("div", { className: "stat-number" }, counters.years, "+"),
              React.createElement("div", { className: "stat-label" }, "Years Experience")
            )
          ),
          React.createElement(Col, { md: 3, sm: 6, className: "mb-4" },
            React.createElement("div", { className: "stat-card" },
              React.createElement(FaGlobe, { style: { fontSize: '2rem', color: '#4facfe', marginBottom: '10px' } }),
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
    React.createElement("section", { style: { padding: '60px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' } },
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
            React.createElement("p", null, React.createElement(Link, { to: "/about", style: { color: '#aaa', textDecoration: 'none' } }, "About Us")),
            React.createElement("p", null, React.createElement(Link, { to: "/services", style: { color: '#aaa', textDecoration: 'none' } }, "Services")),
            React.createElement("p", null, React.createElement(Link, { to: "/solutions", style: { color: '#aaa', textDecoration: 'none' } }, "Solutions")),
            React.createElement("p", null, React.createElement(Link, { to: "/technologies", style: { color: '#aaa', textDecoration: 'none' } }, "Technologies")),
            React.createElement("p", null, React.createElement(Link, { to: "/case-studies", style: { color: '#aaa', textDecoration: 'none' } }, "Case Studies"))
          ),
          React.createElement(Col, { md: 3 },
            React.createElement("h5", null, "Contact Info"),
            React.createElement("p", { style: { color: '#aaa' } }, React.createElement("i", { className: "fas fa-envelope" }), " info@mjroberts.com"),
            React.createElement("p", { style: { color: '#aaa' } }, React.createElement("i", { className: "fas fa-phone" }), " +1 (555) 123-4567"),
            React.createElement("p", { style: { color: '#aaa' } }, React.createElement("i", { className: "fas fa-map-marker-alt" }), " Nairobi, Kenya")
          ),
          React.createElement(Col, { md: 3 },
            React.createElement("h5", null, "Newsletter"),
            React.createElement("p", { style: { color: '#aaa' } }, "Subscribe to get updates"),
            React.createElement("div", { className: "input-group" },
              React.createElement("input", { type: "email", className: "form-control", placeholder: "Your email", style: { background: '#1a1a1a', border: '1px solid #333', color: 'white' } }),
              React.createElement(Button, { variant: "primary", style: { borderRadius: '0 8px 8px 0' } }, "Subscribe")
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
      React.createElement(Modal.Header, { style: { backgroundColor: '#1a1a1a', borderBottom: '1px solid #333' } },
        React.createElement(Modal.Title, { style: { color: 'white' } }, selectedService ? selectedService.title : ''),
        React.createElement(Button, { variant: "close", onClick: function() { setShowModal(false); }, style: { filter: 'invert(1)' } })
      ),
      React.createElement(Modal.Body, { style: { backgroundColor: '#0a0a0a', color: 'white', padding: '30px' } },
        React.createElement("div", { style: { fontSize: '3rem', color: selectedService?.color, marginBottom: '20px' } }, selectedService?.icon),
        React.createElement("h3", { style: { marginBottom: '15px' } }, selectedService?.title),
        React.createElement("p", { style: { lineHeight: '1.8', color: '#ccc' } }, selectedService?.fullDesc),
        React.createElement("hr", { style: { borderColor: '#333', margin: '20px 0' } }),
        React.createElement("h5", null, "Key Benefits:"),
        React.createElement("ul", { style: { marginTop: '15px', listStyle: 'none', padding: 0 } },
          React.createElement("li", { style: { marginBottom: '10px' } }, React.createElement(FaCheckCircle, { style: { color: '#10b981', marginRight: '10px' } }), " Expert guidance from industry leaders"),
          React.createElement("li", { style: { marginBottom: '10px' } }, React.createElement(FaCheckCircle, { style: { color: '#10b981', marginRight: '10px' } }), " Proven track record of success"),
          React.createElement("li", { style: { marginBottom: '10px' } }, React.createElement(FaCheckCircle, { style: { color: '#10b981', marginRight: '10px' } }), " Tailored solutions for your needs"),
          React.createElement("li", { style: { marginBottom: '10px' } }, React.createElement(FaCheckCircle, { style: { color: '#10b981', marginRight: '10px' } }), " 24/7 dedicated support")
        )
      ),
      React.createElement(Modal.Footer, { style: { backgroundColor: '#1a1a1a', borderTop: '1px solid #333' } },
        React.createElement(Button, { variant: "secondary", onClick: function() { setShowModal(false); } }, "Close"),
        React.createElement(Button, { as: Link, to: "/contact", variant: "primary" }, "Request Consultation →")
      )
    )
  );
};

module.exports = HomePage;