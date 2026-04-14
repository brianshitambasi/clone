// components/ServiceDetail.jsx
/* eslint-disable no-unused-vars */
const React = require('react');
const { useState } = React;
const { Container, Row, Col, Card, Button, ListGroup, Badge, Accordion } = require('react-bootstrap');
const { Link, useParams } = require('react-router-dom');
const { 
  FaCheckCircle, FaArrowRight, FaPhone, FaEnvelope, FaStar, FaTrophy, FaClock, FaUsers
} = require('react-icons/fa');

const ServiceDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const servicesData = {
    'it-consulting': {
      title: 'IT Consulting & Digital Transformation Advisory',
      subtitle: 'Strategic guidance for your digital future',
      rating: 4.9,
      reviews: 128,
      description: 'We provide comprehensive IT consulting services to help organizations navigate their digital transformation journey.',
      fullDescription: `In today's rapidly evolving digital landscape, organizations need more than just technology—they need strategic guidance. Our IT consulting practice brings decades of experience across industries, helping businesses leverage technology as a competitive advantage.

We begin with a thorough assessment of your current infrastructure, processes, and capabilities. This "postural assessment" identifies technical debt, security vulnerabilities, and areas for optimization. From there, we develop a customized transformation strategy that aligns with your business goals.

Our methodology combines industry best practices with innovative approaches, ensuring you not only keep pace with competitors but leap ahead. We've helped hundreds of organizations reduce costs by 30%, improve time-to-market by 50%, and achieve ROI within 12-18 months.`,
      benefits: [
        '30-40% reduction in operational costs',
        '50% faster time-to-market for new products',
        'Improved security posture and compliance',
        'Enhanced scalability and flexibility',
        'Better alignment between IT and business goals'
      ],
      process: [
        { step: 'Discovery & Assessment', desc: 'Comprehensive evaluation of current state, technical debt, and opportunities', duration: '2-4 weeks' },
        { step: 'Strategy Development', desc: 'Custom roadmap creation with clear milestones and ROI projections', duration: '3-5 weeks' },
        { step: 'Implementation Planning', desc: 'Detailed execution plan with resource allocation and timeline', duration: '2-3 weeks' },
        { step: 'Execution & Support', desc: 'Hands-on implementation with continuous monitoring and optimization', duration: 'Ongoing' }
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Salesforce', 'SAP', 'ServiceNow'],
      caseStudies: [
        { title: 'Global Bank Digital Transformation', result: '40% cost reduction' },
        { title: 'Retail Chain Cloud Migration', result: '99.99% uptime achieved' }
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
    },
    'software-engineering': {
      title: 'Software Engineering & Application Services',
      subtitle: 'Building robust, scalable applications',
      rating: 4.8,
      reviews: 156,
      description: 'We design and develop custom software solutions tailored to your unique business needs.',
      fullDescription: `Our software engineering practice specializes in building mission-critical applications that drive business value. We follow modern development methodologies including Agile, DevOps, and Continuous Integration/Continuous Deployment (CI/CD) to ensure rapid, reliable delivery.

Whether you need a customer-facing web application, internal business system, or mobile app, our team has the expertise to bring your vision to life. We work with a wide range of technologies including Java, Python, .NET, Go, React, Angular, and Vue.js.

Quality is at the forefront of everything we do. We implement comprehensive testing strategies, code reviews, and automated quality gates to ensure your application is reliable, secure, and performant.`,
      benefits: [
        'Custom solutions tailored to your exact requirements',
        'Scalable architecture that grows with your business',
        'Reduced technical debt through best practices',
        'Faster time-to-market with Agile methodologies',
        'Comprehensive documentation and knowledge transfer'
      ],
      process: [
        { step: 'Requirements Analysis', desc: 'Deep dive into your needs, goals, and constraints', duration: '2-3 weeks' },
        { step: 'Architecture Design', desc: 'Creating scalable, secure system architecture', duration: '2-4 weeks' },
        { step: 'Agile Development', desc: 'Iterative development with regular stakeholder feedback', duration: '8-12 weeks' },
        { step: 'Testing & QA', desc: 'Comprehensive testing including unit, integration, and performance', duration: '2-4 weeks' },
        { step: 'Deployment & Support', desc: 'Smooth launch with ongoing maintenance and updates', duration: 'Ongoing' }
      ],
      technologies: ['Java', 'Python', '.NET', 'Go', 'React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Redis', 'Kafka'],
      caseStudies: [
        { title: 'E-commerce Platform Redesign', result: '200% increase in conversions' },
        { title: 'Healthcare Management System', result: '50% reduction in processing time' }
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
    },
    'managed-it': {
      title: 'Managed IT Services & Support',
      subtitle: '24/7 enterprise-grade support',
      rating: 4.9,
      reviews: 98,
      description: 'Our managed IT services provide proactive monitoring, maintenance, and support for your entire technology stack.',
      fullDescription: `In today's always-on business environment, IT downtime is not an option. Our managed services practice provides round-the-clock monitoring, proactive maintenance, and rapid response to issues before they impact your business.

We establish dedicated Site Reliability Engineering (SRE) hubs staffed by experienced professionals who understand your infrastructure inside and out. Our tiered support model ensures issues are resolved quickly, with clear escalation paths and guaranteed service level agreements (SLAs).

Beyond just keeping systems running, we focus on continuous improvement. Regular health checks, performance optimization, and security updates ensure your infrastructure remains secure, efficient, and aligned with business needs.`,
      benefits: [
        '99.99% uptime guarantee',
        '24/7/365 monitoring and support',
        'Reduced IT operational costs by 25-35%',
        'Proactive issue detection and resolution',
        'Access to expert engineers without hiring costs'
      ],
      process: [
        { step: 'Assessment & Onboarding', desc: 'Comprehensive infrastructure evaluation and setup', duration: '2-3 weeks' },
        { step: 'Monitoring Setup', desc: 'Implementation of advanced monitoring tools', duration: '1-2 weeks' },
        { step: '24/7 Support', desc: 'Round-the-clock incident response and resolution', duration: 'Ongoing' },
        { step: 'Continuous Optimization', desc: 'Regular performance tuning and security updates', duration: 'Ongoing' }
      ],
      technologies: ['AWS', 'Azure', 'VMware', 'Kubernetes', 'Docker', 'Prometheus', 'Grafana', 'Datadog'],
      caseStudies: [
        { title: 'Financial Services Infrastructure', result: '99.99% uptime achieved' },
        { title: 'Global Retail Monitoring', result: 'Zero security breaches' }
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
    },
    'devops': {
      title: 'DevOps & Platform Engineering',
      subtitle: 'Accelerating delivery through automation',
      rating: 4.8,
      reviews: 87,
      description: 'Transform your software delivery with modern DevOps practices.',
      fullDescription: `DevOps is more than just tools—it's a cultural and technical movement that breaks down silos between development and operations. Our DevOps practice helps organizations adopt modern practices that accelerate delivery, improve quality, and reduce risk.

We implement comprehensive CI/CD pipelines that automate building, testing, and deployment. Infrastructure as Code (IaC) ensures your environments are reproducible, version-controlled, and auditable. Our "Golden Path" developer portals provide self-service capabilities that empower your teams.

The results speak for themselves: 90% faster deployment times, 50% reduction in deployment failures, and significantly improved developer productivity.`,
      benefits: [
        '90% faster deployment times',
        '50% reduction in deployment failures',
        'Improved developer productivity',
        'Better security through automated compliance',
        'Reduced infrastructure costs'
      ],
      process: [
        { step: 'Assessment', desc: 'Evaluation of current processes and tooling', duration: '2-3 weeks' },
        { step: 'Toolchain Selection', desc: 'Choosing the right tools for your needs', duration: '1-2 weeks' },
        { step: 'Pipeline Implementation', desc: 'Building automated CI/CD pipelines', duration: '4-6 weeks' },
        { step: 'Culture Transformation', desc: 'Training and process changes', duration: '4-8 weeks' },
        { step: 'Continuous Improvement', desc: 'Ongoing optimization and evolution', duration: 'Ongoing' }
      ],
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Terraform', 'Kubernetes', 'Docker', 'ArgoCD', 'Helm'],
      caseStudies: [
        { title: 'SaaS Platform Automation', result: '10x deployment frequency' },
        { title: 'Banking CI/CD Transformation', result: '99% reduction in deployment failures' }
      ],
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop'
    },
    'qa': {
      title: 'Quality Assurance & Testing',
      subtitle: 'Ensuring quality at every step',
      rating: 4.7,
      reviews: 65,
      description: 'Comprehensive testing services including automated, performance, security, and user acceptance testing.',
      fullDescription: `Quality is not an afterthought—it's built into every stage of development. Our QA practice provides comprehensive testing services that catch issues early when they're cheapest to fix. We implement automated testing frameworks, performance testing, security testing, and user acceptance testing.

Our shift-left approach integrates testing early in the development lifecycle, reducing bugs and accelerating delivery. We implement SAST (Static Application Security Testing) and DAST (Dynamic Application Security Testing) to identify security vulnerabilities before they reach production.

Beyond traditional testing, we're pioneers in AI-driven testing that uses machine learning to predict where bugs are most likely to occur, optimizing testing efforts.`,
      benefits: [
        '70% reduction in production bugs',
        '60% faster testing cycles',
        'Improved security posture',
        'Better user experience',
        'Reduced testing costs through automation'
      ],
      process: [
        { step: 'Test Strategy', desc: 'Comprehensive test planning and strategy', duration: '2-3 weeks' },
        { step: 'Automation Framework', desc: 'Building reusable test automation', duration: '3-4 weeks' },
        { step: 'Security Testing', desc: 'SAST/DAST implementation', duration: '2-3 weeks' },
        { step: 'Performance Testing', desc: 'Load and stress testing', duration: '2-3 weeks' },
        { step: 'Continuous Testing', desc: 'Integration into CI/CD pipeline', duration: 'Ongoing' }
      ],
      technologies: ['Selenium', 'Cypress', 'Jest', 'OWASP ZAP', 'JMeter', 'Postman', 'TestRail', 'Appium'],
      caseStudies: [
        { title: 'E-commerce QA Automation', result: '80% faster testing cycles' },
        { title: 'Banking Security Testing', result: 'Zero critical vulnerabilities' }
      ],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
    }
  };

  var service = servicesData[id];

  if (!service) {
    return React.createElement(
      'div',
      { style: { paddingTop: '80px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' } },
      React.createElement(Container, null,
        React.createElement('h2', null, 'Service not found'),
        React.createElement(Button, { as: Link, to: '/services', variant: 'primary', style: { marginTop: '20px' } }, 'Back to Services')
      )
    );
  }

  return React.createElement(
    'div',
    { style: { paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' } },
    React.createElement('section', { style: { padding: '60px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' } },
      React.createElement(Container, null,
        React.createElement(Row, null,
          React.createElement(Col, { lg: 8, className: 'mx-auto text-center' },
            React.createElement(Badge, { bg: 'light', text: 'dark', style: { marginBottom: '15px' } },
              React.createElement(FaStar, { style: { marginRight: '5px', color: '#ffc107' } }),
              service.rating, ' ★ (', service.reviews, ' reviews)'
            ),
            React.createElement('h1', { style: { fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' } }, service.title),
            React.createElement('p', { style: { fontSize: '1.2rem', opacity: 0.95 } }, service.subtitle)
          )
        )
      )
    ),
    React.createElement(Container, { style: { padding: '60px 0' } },
      React.createElement(
        Row,
        null,
        React.createElement(
          Col,
          { lg: 7 },
          React.createElement(
            'div',
            { style: { marginBottom: '30px', borderBottom: '1px solid #333', display: 'flex', flexWrap: 'wrap' } },
            ['overview', 'benefits', 'process', 'technologies'].map(function(tab) {
              return React.createElement(
                Button,
                {
                  key: tab,
                  variant: 'link',
                  onClick: function() { setActiveTab(tab); },
                  style: {
                    color: activeTab === tab ? '#667eea' : '#aaa',
                    textDecoration: 'none',
                    marginRight: '20px',
                    padding: '10px 0',
                    borderBottom: activeTab === tab ? '2px solid #667eea' : 'none',
                    borderRadius: 0
                  }
                },
                tab.charAt(0).toUpperCase() + tab.slice(1)
              );
            })
          ),
          activeTab === 'overview' && React.createElement(React.Fragment, null,
            React.createElement('h2', { style: { color: '#667eea', marginBottom: '20px' } }, 'Overview'),
            React.createElement('p', { style: { fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '20px' } }, service.description),
            React.createElement('p', { style: { fontSize: '1rem', lineHeight: '1.8', color: '#aaa' } }, service.fullDescription)
          ),
          activeTab === 'benefits' && React.createElement(React.Fragment, null,
            React.createElement('h2', { style: { color: '#667eea', marginBottom: '20px' } }, 'Key Benefits'),
            React.createElement(
              ListGroup,
              { variant: 'flush', style: { backgroundColor: 'transparent' } },
              service.benefits.map(function(benefit, idx) {
                return React.createElement(
                  ListGroup.Item,
                  { key: idx, style: { backgroundColor: 'transparent', color: '#ccc', borderColor: '#333', padding: '12px 0' } },
                  React.createElement(FaCheckCircle, { style: { color: '#10b981', marginRight: '10px' } }), ' ', benefit
                );
              })
            )
          ),
          activeTab === 'process' && React.createElement(React.Fragment, null,
            React.createElement('h2', { style: { color: '#667eea', marginBottom: '20px' } }, 'Our Process'),
            React.createElement(
              Accordion,
              { defaultActiveKey: '0', style: { backgroundColor: 'transparent' } },
              service.process.map(function(step, idx) {
                return React.createElement(
                  Accordion.Item,
                  { eventKey: idx.toString(), key: idx, style: { backgroundColor: '#1a1a1a', border: '1px solid #333', marginBottom: '10px' } },
                  React.createElement(Accordion.Header, null,
                    React.createElement('div', null,
                      React.createElement('strong', null, 'Step ', idx + 1, ': ', step.step),
                      React.createElement(Badge, { bg: 'info', style: { marginLeft: '10px' } }, step.duration)
                    )
                  ),
                  React.createElement(Accordion.Body, { style: { backgroundColor: '#1a1a1a', color: '#ccc' } }, step.desc)
                );
              })
            )
          ),
          activeTab === 'technologies' && React.createElement(React.Fragment, null,
            React.createElement('h2', { style: { color: '#667eea', marginBottom: '20px' } }, 'Technologies We Use'),
            React.createElement(
              'div',
              { style: { display: 'flex', flexWrap: 'wrap', gap: '10px' } },
              service.technologies.map(function(tech, idx) {
                return React.createElement(
                  'span',
                  { key: idx, style: { background: '#1a1a1a', padding: '8px 16px', borderRadius: '50px', color: '#667eea', border: '1px solid #667eea', fontSize: '0.9rem' } },
                  tech
                );
              })
            )
          )
        ),
        React.createElement(
          Col,
          { lg: 5 },
          React.createElement('img', { src: service.image, alt: service.title, style: { width: '100%', borderRadius: '15px', marginBottom: '20px' } }),
          React.createElement(
            Card,
            { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '20px' } },
            React.createElement(
              Card.Body,
              null,
              React.createElement('h4', { style: { marginBottom: '15px' } }, 'Quick Stats'),
              React.createElement(
                Row,
                null,
                React.createElement(Col, { xs: 6, className: 'text-center mb-3' },
                  React.createElement(FaTrophy, { style: { fontSize: '1.5rem', color: '#667eea' } }),
                  React.createElement('div', { style: { fontSize: '1.2rem', fontWeight: '700' } }, '98%'),
                  React.createElement('div', { style: { fontSize: '0.8rem', color: '#aaa' } }, 'Success Rate')
                ),
                React.createElement(Col, { xs: 6, className: 'text-center mb-3' },
                  React.createElement(FaClock, { style: { fontSize: '1.5rem', color: '#667eea' } }),
                  React.createElement('div', { style: { fontSize: '1.2rem', fontWeight: '700' } }, '24/7'),
                  React.createElement('div', { style: { fontSize: '0.8rem', color: '#aaa' } }, 'Support')
                ),
                React.createElement(Col, { xs: 6, className: 'text-center' },
                  React.createElement(FaUsers, { style: { fontSize: '1.5rem', color: '#667eea' } }),
                  React.createElement('div', { style: { fontSize: '1.2rem', fontWeight: '700' } }, '50+'),
                  React.createElement('div', { style: { fontSize: '0.8rem', color: '#aaa' } }, 'Experts')
                ),
                React.createElement(Col, { xs: 6, className: 'text-center' },
                  React.createElement(FaTrophy, { style: { fontSize: '1.5rem', color: '#667eea' } }),
                  React.createElement('div', { style: { fontSize: '1.2rem', fontWeight: '700' } }, '15+'),
                  React.createElement('div', { style: { fontSize: '0.8rem', color: '#aaa' } }, 'Awards')
                )
              )
            )
          ),
          React.createElement(
            Card,
            { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px' } },
            React.createElement(
              Card.Body,
              null,
              React.createElement('h4', { style: { marginBottom: '15px' } }, 'Ready to get started?'),
              React.createElement('p', { style: { color: '#aaa', marginBottom: '20px', fontSize: '0.9rem' } }, 'Contact our team to discuss how we can help you achieve your goals.'),
              React.createElement(Button, { as: Link, to: '/contact', variant: 'primary', style: { width: '100%', marginBottom: '10px', borderRadius: '50px' } }, 'Schedule Consultation ', React.createElement(FaArrowRight, null)),
              React.createElement(
                'div',
                { style: { display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '15px' } },
                React.createElement(FaPhone, { style: { color: '#667eea', cursor: 'pointer' } }),
                React.createElement(FaEnvelope, { style: { color: '#667eea', cursor: 'pointer' } })
              )
            )
          )
        )
      )
    )
  );
};

module.exports = ServiceDetail;