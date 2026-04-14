// components/AboutPage.jsx
const React = require('react');
const { useEffect, useRef, useState, useMemo } = React;
const { Container, Row, Col, Button } = require('react-bootstrap');
const { Link } = require('react-router-dom');
const { FaRocket, FaArrowRight } = require('react-icons/fa');

// Safe GSAP import with error handling
let gsap;
let ScrollTrigger;

try {
  const gsapModule = require('gsap');
  const ScrollTriggerModule = require('gsap/ScrollTrigger');
  
  gsap = gsapModule.default || gsapModule;
  ScrollTrigger = ScrollTriggerModule.default || ScrollTriggerModule;
  
  // Only register if both are available
  if (gsap && ScrollTrigger && typeof gsap.registerPlugin === 'function') {
    gsap.registerPlugin(ScrollTrigger);
    console.log('GSAP initialized successfully');
  } else {
    console.warn('GSAP or ScrollTrigger not available properly');
  }
} catch (e) {
  console.warn('GSAP failed to load:', e.message);
  // Create dummy objects to prevent errors
  gsap = {
    from: function() { return this; },
    context: function(fn) { fn(); return { revert: function() {} }; },
    registerPlugin: function() {}
  };
  ScrollTrigger = {
    create: function() { return {}; }
  };
}

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
    uptime: 0
  });

  // Wrap targetStats in useMemo
  const targetStats = useMemo(function() {
    return {
      projects: 500,
      clients: 300,
      engineers: 250,
      uptime: 99.99
    };
  }, []);

  // Animate stats
  useEffect(function() {
    var animateStats = function() {
      var duration = 2000;
      var frameDuration = 1000 / 60;
      var totalFrames = Math.round(duration / frameDuration);
      var frame = 0;

      var timer = setInterval(function() {
        frame++;
        var progress = frame / totalFrames;
        var easeOutQuad = 1 - (1 - progress) * (1 - progress);

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

    var observer = new IntersectionObserver(
      function(entries) {
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

    return function() { observer.disconnect(); };
  }, [targetStats]);

  // GSAP animations with safety checks
  useEffect(function() {
    // Skip if GSAP is not available
    if (!gsap || typeof gsap.context !== 'function') {
      console.log('GSAP not available, skipping animations');
      return;
    }
    
    try {
      var ctx = gsap.context(function() {
        // Safe animations only if elements exist
        var heroTitle = document.querySelector('.hero-title');
        var heroSubtitle = document.querySelector('.hero-subtitle');
        var heroButton = document.querySelector('.hero-button');
        
        if (heroTitle && gsap.from) {
          gsap.from(heroTitle, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
          });
        }
        
        if (heroSubtitle && gsap.from) {
          gsap.from(heroSubtitle, {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.3,
            ease: 'power3.out'
          });
        }
        
        if (heroButton && gsap.from) {
          gsap.from(heroButton, {
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            delay: 0.6,
            ease: 'back.out(1.7)'
          });
        }

        // Timeline animation
        if (timelineRef.current && gsap.from) {
          gsap.from(timelineRef.current, {
            opacity: 0,
            x: -50,
            duration: 1,
            ease: 'power3.out'
          });
        }
      }, heroRef);

      return function() { 
        if (ctx && typeof ctx.revert === 'function') {
          ctx.revert(); 
        }
      };
    } catch (error) {
      console.log('GSAP animation error:', error);
    }
  }, []);

  return React.createElement(
    'div',
    { style: { paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' } },
    // Hero Section with Video Background
    React.createElement('section', { ref: heroRef, style: { position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', overflow: 'hidden' } },
      React.createElement('div', { style: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden' } },
        React.createElement('video', { autoPlay: true, loop: true, muted: true, playsInline: true, style: { width: '100%', height: '100%', objectFit: 'cover', opacity: isVideoLoaded ? 0.4 : 0, transition: 'opacity 1s ease' }, onLoadedData: function() { setIsVideoLoaded(true); } },
          React.createElement('source', { src: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-technology-32879-large.mp4', type: 'video/mp4' })
        ),
        React.createElement('div', { style: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.8) 100%)', zIndex: 1 } })
      ),
      React.createElement(Container, { style: { position: 'relative', zIndex: 2, padding: '80px 0' } },
        React.createElement(Row, null,
          React.createElement(Col, { lg: 8, className: 'mx-auto text-center' },
            React.createElement('h1', { className: 'hero-title', style: { fontSize: '4rem', fontWeight: '800', marginBottom: '20px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' } }, 'Engineering Resilience into the Global Enterprise'),
            React.createElement('p', { className: 'hero-subtitle', style: { fontSize: '1.3rem', opacity: 0.95, marginBottom: '30px', color: '#ccc' } }, 'Strategic Guardrails for the Autonomous Era'),
            React.createElement('div', { className: 'hero-button' },
              React.createElement(Button, { as: Link, to: '/contact', variant: 'primary', style: { padding: '12px 32px', borderRadius: '50px', fontSize: '1.1rem', marginRight: '15px' } }, 'Start Your Journey ', React.createElement(FaArrowRight, { style: { marginLeft: '8px' } })),
              React.createElement(Button, { as: Link, to: '/services', variant: 'outline-light', style: { padding: '12px 32px', borderRadius: '50px', fontSize: '1.1rem' } }, 'Explore Services')
            )
          )
        )
      ),
      React.createElement('div', { style: { position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, animation: 'bounce 2s infinite' } },
        React.createElement('div', { style: { width: '30px', height: '50px', border: '2px solid white', borderRadius: '15px', position: 'relative' } },
          React.createElement('div', { style: { position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', width: '4px', height: '10px', backgroundColor: 'white', borderRadius: '2px', animation: 'scroll 1.5s infinite' } })
        )
      )
    ),
    // Stats Section
    React.createElement('section', { ref: statsRef, style: { padding: '60px 0', backgroundColor: '#111' } },
      React.createElement(Container, null,
        React.createElement(Row, null,
          React.createElement(Col, { md: 3, sm: 6, className: 'text-center mb-4' },
            React.createElement('div', { style: { fontSize: '2.5rem', fontWeight: '800', color: '#667eea' } }, stats.projects.toLocaleString(), '+'),
            React.createElement('div', { style: { color: '#aaa', marginTop: '10px' } }, 'Projects Completed')
          ),
          React.createElement(Col, { md: 3, sm: 6, className: 'text-center mb-4' },
            React.createElement('div', { style: { fontSize: '2.5rem', fontWeight: '800', color: '#764ba2' } }, stats.clients.toLocaleString(), '+'),
            React.createElement('div', { style: { color: '#aaa', marginTop: '10px' } }, 'Enterprise Clients')
          ),
          React.createElement(Col, { md: 3, sm: 6, className: 'text-center mb-4' },
            React.createElement('div', { style: { fontSize: '2.5rem', fontWeight: '800', color: '#f093fb' } }, stats.engineers.toLocaleString(), '+'),
            React.createElement('div', { style: { color: '#aaa', marginTop: '10px' } }, 'Expert Engineers')
          ),
          React.createElement(Col, { md: 3, sm: 6, className: 'text-center mb-4' },
            React.createElement('div', { style: { fontSize: '2.5rem', fontWeight: '800', color: '#4facfe' } }, stats.uptime, '%'),
            React.createElement('div', { style: { color: '#aaa', marginTop: '10px' } }, 'Uptime Guarantee')
          )
        )
      )
    ),
    // The Genesis Section
    React.createElement('section', { style: { padding: '80px 0' } },
      React.createElement(Container, null,
        React.createElement(Row, null,
          React.createElement(Col, { lg: 10, className: 'mx-auto' },
            React.createElement('div', { style: { textAlign: 'center', marginBottom: '50px' } },
              React.createElement(FaRocket, { style: { fontSize: '3rem', color: '#667eea', marginBottom: '20px' } }),
              React.createElement('h2', { style: { fontSize: '2.5rem', fontWeight: '700', marginBottom: '30px', color: '#667eea' } }, 'The Genesis of MJ&Roberts')
            ),
            React.createElement('p', { style: { fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '25px' } }, 'MJ&Roberts was founded to bridge the ', React.createElement('strong', { style: { color: '#667eea' } }, 'Innovation-Infrastructure Gap'), '. As global entities rushed toward cloud and AI, they inadvertently created ', React.createElement('strong', { style: { color: '#f093fb' } }, '"Brittle Ecosystems"'), '—fragmented data, unmanaged technical debt, and misaligned multi-cloud environments.'),
            React.createElement('p', { style: { fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '25px' } }, 'We witnessed enterprises investing millions in cutting-edge technology without the architectural discipline to scale it safely. The result? Security vulnerabilities, spiraling costs, and systems that failed precisely when they were needed most.'),
            React.createElement('p', { style: { fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' } }, 'Today, we provide the ', React.createElement('strong', { style: { color: '#4facfe' } }, 'architectural discipline'), ' required to transform these liabilities into high-velocity assets. Our approach combines battle-tested engineering practices with forward-thinking AI strategies to build systems that are not just innovative, but ', React.createElement('strong', { style: { color: '#43e97b' } }, 'resilient, secure, and scalable'), '.')
          )
        )
      )
    ),
    // Timeline Section
    React.createElement('section', { ref: timelineRef, style: { padding: '80px 0' } },
      React.createElement(Container, null,
        React.createElement('h2', { className: 'text-center', style: { fontSize: '2.5rem', fontWeight: '700', marginBottom: '60px', color: '#667eea' } }, 'Our Journey'),
        React.createElement('div', { style: { position: 'relative' } },
          React.createElement('div', { style: { position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '100%', background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)', opacity: 0.3 } }),
          // Milestone 2020
          React.createElement('div', { style: { display: 'flex', justifyContent: 'flex-end', marginBottom: '50px', position: 'relative' } },
            React.createElement('div', { style: { width: '45%', padding: '0 0 0 30px', textAlign: 'left' } },
              React.createElement('div', { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px' } },
                React.createElement('div', { style: { fontSize: '1.5rem', fontWeight: '800', color: '#667eea', marginBottom: '10px' } }, '2020'),
                React.createElement('h4', { style: { marginBottom: '10px', fontSize: '1.1rem' } }, 'Company Founded'),
                React.createElement('p', { style: { color: '#aaa', marginBottom: 0, fontSize: '0.9rem' } }, 'MJ&Roberts established with a vision to bridge the innovation-infrastructure gap.')
              )
            ),
            React.createElement('div', { style: { position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#667eea', top: '20px' } })
          ),
          // Milestone 2021
          React.createElement('div', { style: { display: 'flex', justifyContent: 'flex-start', marginBottom: '50px', position: 'relative' } },
            React.createElement('div', { style: { width: '45%', padding: '0 30px 0 0', textAlign: 'right' } },
              React.createElement('div', { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px' } },
                React.createElement('div', { style: { fontSize: '1.5rem', fontWeight: '800', color: '#667eea', marginBottom: '10px' } }, '2021'),
                React.createElement('h4', { style: { marginBottom: '10px', fontSize: '1.1rem' } }, 'First Enterprise Client'),
                React.createElement('p', { style: { color: '#aaa', marginBottom: 0, fontSize: '0.9rem' } }, 'Secured first Fortune 500 client for cloud transformation.')
              )
            ),
            React.createElement('div', { style: { position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#667eea', top: '20px' } })
          ),
          // Milestone 2022
          React.createElement('div', { style: { display: 'flex', justifyContent: 'flex-end', marginBottom: '50px', position: 'relative' } },
            React.createElement('div', { style: { width: '45%', padding: '0 0 0 30px', textAlign: 'left' } },
              React.createElement('div', { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px' } },
                React.createElement('div', { style: { fontSize: '1.5rem', fontWeight: '800', color: '#667eea', marginBottom: '10px' } }, '2022'),
                React.createElement('h4', { style: { marginBottom: '10px', fontSize: '1.1rem' } }, 'AI Practice Launch'),
                React.createElement('p', { style: { color: '#aaa', marginBottom: 0, fontSize: '0.9rem' } }, 'Launched dedicated AI and machine learning practice.')
              )
            ),
            React.createElement('div', { style: { position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#667eea', top: '20px' } })
          ),
          // Milestone 2023
          React.createElement('div', { style: { display: 'flex', justifyContent: 'flex-start', marginBottom: '50px', position: 'relative' } },
            React.createElement('div', { style: { width: '45%', padding: '0 30px 0 0', textAlign: 'right' } },
              React.createElement('div', { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px' } },
                React.createElement('div', { style: { fontSize: '1.5rem', fontWeight: '800', color: '#667eea', marginBottom: '10px' } }, '2023'),
                React.createElement('h4', { style: { marginBottom: '10px', fontSize: '1.1rem' } }, 'Global Expansion'),
                React.createElement('p', { style: { color: '#aaa', marginBottom: 0, fontSize: '0.9rem' } }, 'Expanded operations to 3 continents with 200+ engineers.')
              )
            ),
            React.createElement('div', { style: { position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#667eea', top: '20px' } })
          ),
          // Milestone 2024
          React.createElement('div', { style: { display: 'flex', justifyContent: 'flex-end', marginBottom: '50px', position: 'relative' } },
            React.createElement('div', { style: { width: '45%', padding: '0 0 0 30px', textAlign: 'left' } },
              React.createElement('div', { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px' } },
                React.createElement('div', { style: { fontSize: '1.5rem', fontWeight: '800', color: '#667eea', marginBottom: '10px' } }, '2024'),
                React.createElement('h4', { style: { marginBottom: '10px', fontSize: '1.1rem' } }, 'Agentic AI Platform'),
                React.createElement('p', { style: { color: '#aaa', marginBottom: 0, fontSize: '0.9rem' } }, 'Released proprietary Agentic AI orchestration platform.')
              )
            ),
            React.createElement('div', { style: { position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#667eea', top: '20px' } })
          )
        )
      )
    ),
    // CTA Section
    React.createElement('section', { style: { padding: '60px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', textAlign: 'center' } },
      React.createElement(Container, null,
        React.createElement('h2', { style: { fontSize: '2rem', fontWeight: '700', marginBottom: '15px' } }, 'Ready to Engineer Your Enterprise Resilience?'),
        React.createElement('p', { style: { fontSize: '1.1rem', marginBottom: '25px', opacity: 0.95 } }, 'Join the world\'s leading enterprises that trust MJ&Roberts for their digital transformation.'),
        React.createElement(Button, { as: Link, to: '/contact', variant: 'light', size: 'lg', style: { borderRadius: '50px', padding: '12px 40px', fontWeight: '600' } }, 'Start the Conversation ', React.createElement(FaArrowRight, { style: { marginLeft: '8px' } }))
      )
    )
  );
};

module.exports = AboutPage;