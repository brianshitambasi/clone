const React = require('react');
const { useState, useEffect, useRef, useCallback } = React;
const { Container, Row, Col, Carousel, Button } = require('react-bootstrap');
const { Link } = require('react-router-dom');
const { FaCode, FaChartLine, FaMobile, FaLightbulb, FaRobot } = require('react-icons/fa');

const HomePage = () => {
  const [services] = useState([
    { id: 'it-consulting', title: 'Digital transformation', description: 'We guide companies through their digital transformation journeys, providing tailored strategies and software solutions that improve efficiency and automation.' },
    { id: 'software-engineering', title: 'Artificial intelligence', description: 'AI solutions for global enterprises, including predictive BI, machine learning models, and intelligent automation.' },
    { id: 'data-analytics', title: 'Data & BI', description: 'Comprehensive data management, visualization and analytics solutions for data-driven decision making.' },
    { id: 'managed-it', title: 'Application services', description: 'End-to-end application development, maintenance, and support services.' },
    { id: 'technology-advisory', title: 'Technology advisory', description: 'Expert technology consulting to help you make the right strategic decisions.' }
  ]);

  const serviceIcons = [
    React.createElement(FaCode, { key: "1" }),
    React.createElement(FaRobot, { key: "2" }),
    React.createElement(FaChartLine, { key: "3" }),
    React.createElement(FaMobile, { key: "4" }),
    React.createElement(FaLightbulb, { key: "5" })
  ];

  const [counters, setCounters] = useState({
    clients: 0,
    engineers: 0,
    years: 0,
    countries: 0
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const targetValues = React.useMemo(function() {
    return {
      clients: 800,
      engineers: 3000,
      years: 25,
      countries: 40
    };
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
        const entry = entries[0];
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

    return function() {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, animateNumbers]);

  return React.createElement(React.Fragment, null,
    React.createElement("div", { className: "video-background" },
      React.createElement("video", { autoPlay: true, loop: true, muted: true, playsInline: true },
        React.createElement("source", { src: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-world-map-32873-large.mp4", type: "video/mp4" })
      )
    ),
    React.createElement("div", { className: "overlay" }),
    React.createElement("section", { className: "hero-section" },
      React.createElement(Container, null,
        React.createElement(Row, null,
          React.createElement(Col, { md: 12 },
            React.createElement("div", { className: "hero-content" },
              React.createElement("h1", null, "MJ & Roberts Consulting"),
              React.createElement("p", null, "Digital Innovation That Drives Growth"),
              React.createElement("div", { className: "hero-buttons" },
                React.createElement(Button, { as: Link, to: "/contact", className: "btn-primary-custom" }, "Get Started"),
                React.createElement(Button, { as: Link, to: "/services", className: "btn-outline-custom" }, "Our Services")
              )
            )
          )
        )
      )
    ),
    React.createElement("section", { className: "services-carousel-section" },
      React.createElement(Container, null,
        React.createElement("h2", { className: "section-title" }, "Our Services"),
        React.createElement(Carousel, { interval: 4000, indicators: true, controls: true },
          services.map(function(service, index) {
            return React.createElement(Carousel.Item, { key: index },
              React.createElement("div", { className: "service-card" },
                React.createElement("div", { className: "service-icon" }, serviceIcons[index % serviceIcons.length]),
                React.createElement("h3", null, service.title),
                React.createElement("p", null, service.description),
                React.createElement(Button, { as: Link, to: "/services/" + service.id, variant: "link", className: "btn-learn" }, "Learn more →")
              )
            );
          })
        )
      )
    ),
    React.createElement("section", { className: "stats-section", ref: statsRef },
      React.createElement(Container, null,
        React.createElement(Row, null,
          React.createElement(Col, { md: 3, sm: 6 },
            React.createElement("div", { className: "stat-card" },
              React.createElement("div", { className: "stat-number" }, counters.clients.toLocaleString(), "+"),
              React.createElement("div", { className: "stat-label" }, "Clients Served")
            )
          ),
          React.createElement(Col, { md: 3, sm: 6 },
            React.createElement("div", { className: "stat-card" },
              React.createElement("div", { className: "stat-number" }, counters.engineers.toLocaleString(), "+"),
              React.createElement("div", { className: "stat-label" }, "Engineers")
            )
          ),
          React.createElement(Col, { md: 3, sm: 6 },
            React.createElement("div", { className: "stat-card" },
              React.createElement("div", { className: "stat-number" }, counters.years, "+"),
              React.createElement("div", { className: "stat-label" }, "Years Experience")
            )
          ),
          React.createElement(Col, { md: 3, sm: 6 },
            React.createElement("div", { className: "stat-card" },
              React.createElement("div", { className: "stat-number" }, counters.countries),
              React.createElement("div", { className: "stat-label" }, "Countries")
            )
          )
        )
      )
    ),
    React.createElement("section", { className: "industries-section" },
      React.createElement(Container, null,
        React.createElement("h2", { className: "section-title" }, "Industries We Serve"),
        React.createElement(Row, null,
          React.createElement(Col, { md: 4 },
            React.createElement("div", { className: "industry-card" },
              React.createElement("img", { src: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=250&fit=crop", alt: "Manufacturing" }),
              React.createElement("div", { className: "industry-overlay" },
                React.createElement("h4", null, "Manufacturing")
              )
            )
          ),
          React.createElement(Col, { md: 4 },
            React.createElement("div", { className: "industry-card" },
              React.createElement("img", { src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop", alt: "Retail" }),
              React.createElement("div", { className: "industry-overlay" },
                React.createElement("h4", null, "Retail")
              )
            )
          ),
          React.createElement(Col, { md: 4 },
            React.createElement("div", { className: "industry-card" },
              React.createElement("img", { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop", alt: "Healthcare" }),
              React.createElement("div", { className: "industry-overlay" },
                React.createElement("h4", null, "Healthcare")
              )
            )
          )
        )
      )
    ),
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
            React.createElement("p", null, React.createElement("i", { className: "fas fa-phone" }), " +1 (555) 123-4567")
          ),
          React.createElement(Col, { md: 3 },
            React.createElement("h5", null, "Newsletter"),
            React.createElement("p", null, "Subscribe to get updates"),
            React.createElement("div", { className: "input-group" },
              React.createElement("input", { type: "email", className: "form-control", placeholder: "Your email" }),
              React.createElement(Button, { variant: "primary" }, "Subscribe")
            )
          )
        ),
        React.createElement("div", { className: "footer-bottom" },
          React.createElement("p", null, "\u00A9 2024 MJ & Roberts Consulting. All rights reserved.")
        )
      )
    )
  );
};

module.exports = HomePage;