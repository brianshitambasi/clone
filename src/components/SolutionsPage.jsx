// components/SolutionsPage.jsx
const React = require('react');
const { useState, useEffect, useMemo } = React;
const { Container, Row, Col, Card, Button, Badge } = require('react-bootstrap');
const { Link } = require('react-router-dom');
const { FaUsers, FaBuilding, FaShoppingCart, FaChartBar, FaRobot, FaVrCardboard, FaArrowRight, FaCheckCircle, FaRocket, FaShieldAlt, FaTrophy, FaStar } = require('react-icons/fa');

const SolutionsPage = () => {
  const solutions = [
    { id: 'crm', icon: React.createElement(FaUsers), title: 'CRM Solutions', platform: 'Salesforce & Dynamics 365', desc: 'Full-cycle implementation and Zero-Copy Integration with data lakes', benefits: ['40% sales boost', '35% CSAT increase', '60% data cost reduction'], color: '#667eea' },
    { id: 'erp', icon: React.createElement(FaBuilding), title: 'ERP Solutions', platform: 'SAP & Odoo', desc: 'Strategic consultation and legacy-to-cloud migration', benefits: ['50% less manual work', '45% faster close', '60% inventory accuracy'], color: '#764ba2' },
    { id: 'digital-commerce', icon: React.createElement(FaShoppingCart), title: 'Digital Commerce', platform: 'Headless & Payment Integration', desc: 'Headless commerce development and global payment gateway integration', benefits: ['60% faster loads', '45% higher conversions', '50% less abandonment'], color: '#f093fb' },
    { id: 'data-analytics', icon: React.createElement(FaChartBar), title: 'Data Analytics & BI', platform: 'Power BI & Predictive Modeling', desc: 'Power BI dashboards and predictive data modeling', benefits: ['70% faster decisions', '55% better forecasts', 'Real-time visibility'], color: '#4facfe' },
    { id: 'ai-rpa', icon: React.createElement(FaRobot), title: 'AI & RPA', platform: 'Autonomous Agentic AI', desc: 'Autonomous Agentic AI and robotic process automation', benefits: ['80% automation', '90% error reduction', '24/7 operations'], color: '#43e97b' },
    { id: 'ar-vr-iot', icon: React.createElement(FaVrCardboard), title: 'AR/VR & IoT', platform: 'Digital Twin Development', desc: 'Immersive "Digital Twin" development and edge-device integration', benefits: ['50% faster training', '40% maintenance reduction', 'Real-time monitoring'], color: '#fa709a' }
  ];

  const [stats, setStats] = useState({ solutions: 0, clients: 0, success: 0 });
  
  const targetStats = useMemo(function() { 
    return { solutions: 6, clients: 200, success: 98 }; 
  }, []);

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
  }, [targetStats]);

  return React.createElement('div', { style: { paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' } },
    React.createElement('section', { style: { padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', position: 'relative', overflow: 'hidden' } },
      React.createElement(Container, null,
        React.createElement(Row, null,
          React.createElement(Col, { lg: 8, className: 'mx-auto text-center' },
            React.createElement(Badge, { bg: 'light', text: 'dark', style: { marginBottom: '20px', padding: '8px 16px' } }, React.createElement(FaStar, { style: { marginRight: '5px', color: '#ffc107' } }), ' Enterprise-Grade Solutions'),
            React.createElement('h1', { style: { fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' } }, '360-Degree Solutions'),
            React.createElement('p', { style: { fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.95 } }, 'Comprehensive solution portfolio powered by MJ&Roberts\' engineering excellence')
          )
        )
      )
    ),
    React.createElement('section', { style: { padding: '40px 0', backgroundColor: '#111' } },
      React.createElement(Container, null,
        React.createElement(Row, null,
          React.createElement(Col, { md: 4, className: 'text-center mb-3' }, React.createElement('div', { style: { fontSize: '2rem', fontWeight: '800', color: '#667eea' } }, stats.solutions, '+'), React.createElement('div', { style: { color: '#aaa' } }, 'Core Solutions')),
          React.createElement(Col, { md: 4, className: 'text-center mb-3' }, React.createElement('div', { style: { fontSize: '2rem', fontWeight: '800', color: '#764ba2' } }, stats.clients, '+'), React.createElement('div', { style: { color: '#aaa' } }, 'Happy Clients')),
          React.createElement(Col, { md: 4, className: 'text-center mb-3' }, React.createElement('div', { style: { fontSize: '2rem', fontWeight: '800', color: '#f093fb' } }, stats.success, '%'), React.createElement('div', { style: { color: '#aaa' } }, 'Success Rate'))
        )
      )
    ),
    React.createElement(Container, { style: { padding: '60px 0' } },
      React.createElement(Row, null,
        solutions.map(function(solution, index) {
          return React.createElement(Col, { md: 6, lg: 4, key: index, className: 'mb-4' },
            React.createElement(Card, { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '20px', padding: '25px', height: '100%', transition: 'transform 0.3s, box-shadow 0.3s' } },
              React.createElement('div', { style: { height: '3px', background: 'linear-gradient(90deg, ' + solution.color + ', transparent)', width: '100%', marginTop: '-25px', marginBottom: '25px', borderRadius: '20px 20px 0 0' } }),
              React.createElement('div', { style: { fontSize: '3rem', color: solution.color, marginBottom: '20px', display: 'inline-block', padding: '15px', backgroundColor: 'rgba(102,126,234,0.1)', borderRadius: '15px' } }, solution.icon),
              React.createElement('h3', { style: { marginBottom: '5px', fontSize: '1.5rem' } }, solution.title),
              React.createElement('p', { style: { color: solution.color, marginBottom: '15px', fontSize: '0.85rem' } }, solution.platform),
              React.createElement('p', { style: { color: '#aaa', marginBottom: '20px', lineHeight: '1.6' } }, solution.desc),
              React.createElement('div', { style: { marginBottom: '25px' } }, solution.benefits.map(function(benefit, idx) {
                return React.createElement('div', { key: idx, style: { fontSize: '0.85rem', color: '#ccc', marginBottom: '8px' } }, React.createElement(FaCheckCircle, { style: { color: solution.color, marginRight: '8px', fontSize: '0.7rem' } }), ' ', benefit);
              })),
              React.createElement(Button, { as: Link, to: '/solutions/' + solution.id, variant: 'outline-primary', style: { borderRadius: '50px', width: '100%', padding: '10px', borderColor: solution.color, color: solution.color } }, 'Explore Solution ', React.createElement(FaArrowRight, { style: { marginLeft: '8px', fontSize: '0.8rem' } }))
            )
          );
        })
      ),
      React.createElement(Row, { style: { marginTop: '60px' } },
        React.createElement(Col, null,
          React.createElement('div', { style: { background: 'linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)', borderRadius: '20px', padding: '50px', textAlign: 'center' } },
            React.createElement('h2', { style: { fontSize: '2rem', marginBottom: '20px', color: '#667eea' } }, 'Why Choose Our Solutions?'),
            React.createElement(Row, { style: { marginTop: '30px' } },
              React.createElement(Col, { md: 3, sm: 6, className: 'mb-4' }, React.createElement(FaRocket, { style: { fontSize: '2rem', color: '#667eea', marginBottom: '10px' } }), React.createElement('h5', null, 'Fast Implementation'), React.createElement('p', { style: { color: '#aaa', fontSize: '0.85rem' } }, 'Average 3-month deployment')),
              React.createElement(Col, { md: 3, sm: 6, className: 'mb-4' }, React.createElement(FaShieldAlt, { style: { fontSize: '2rem', color: '#764ba2', marginBottom: '10px' } }), React.createElement('h5', null, 'Enterprise Security'), React.createElement('p', { style: { color: '#aaa', fontSize: '0.85rem' } }, 'ISO 27001 certified')),
              React.createElement(Col, { md: 3, sm: 6, className: 'mb-4' }, React.createElement(FaTrophy, { style: { fontSize: '2rem', color: '#f093fb', marginBottom: '10px' } }), React.createElement('h5', null, 'Award-Winning'), React.createElement('p', { style: { color: '#aaa', fontSize: '0.85rem' } }, 'Industry recognition')),
              React.createElement(Col, { md: 3, sm: 6, className: 'mb-4' }, React.createElement(FaUsers, { style: { fontSize: '2rem', color: '#4facfe', marginBottom: '10px' } }), React.createElement('h5', null, '24/7 Support'), React.createElement('p', { style: { color: '#aaa', fontSize: '0.85rem' } }, 'Global support team'))
            )
          )
        )
      ),
      React.createElement(Row, { style: { marginTop: '60px' } },
        React.createElement(Col, { className: 'text-center' },
          React.createElement(Card, { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '20px', padding: '50px' } },
            React.createElement('h3', { style: { marginBottom: '20px' } }, 'Ready to Transform Your Business?'),
            React.createElement('p', { style: { color: '#aaa', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' } }, 'Let\'s discuss which solution fits your business needs best.'),
            React.createElement('div', null,
              React.createElement(Button, { as: Link, to: '/contact', variant: 'primary', size: 'lg', style: { borderRadius: '50px', marginRight: '15px' } }, 'Schedule Free Consultation'),
              React.createElement(Button, { as: Link, to: '/case-studies', variant: 'outline-light', size: 'lg', style: { borderRadius: '50px' } }, 'View Success Stories')
            )
          )
        )
      )
    )
  );
};

module.exports = SolutionsPage;