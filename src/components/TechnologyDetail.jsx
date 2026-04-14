// components/TechnologyDetail.jsx
/* eslint-disable no-unused-vars */
const React = require('react');
const { Container, Row, Col, Card, Button, Badge, ListGroup } = require('react-bootstrap');
const { Link, useParams } = require('react-router-dom');
const { FaCheckCircle, FaArrowLeft } = require('react-icons/fa');

const TechnologyDetail = () => {
  const { id } = useParams();

  const technologiesData = {
    'salesforce': {
      title: 'Salesforce',
      description: 'Enterprise CRM and cloud solutions for customer success',
      fullDescription: 'Salesforce is the world\'s leading customer relationship management (CRM) platform. We help businesses leverage Salesforce to transform their sales, service, marketing, and commerce operations.',
      features: ['Sales Cloud Implementation', 'Service Cloud Configuration', 'Marketing Cloud Automation', 'Custom App Development', 'Third-party Integrations', 'Data Migration Services'],
      benefits: ['40% increase in sales productivity', '35% improvement in customer satisfaction', '60% reduction in data management costs', 'Real-time analytics and reporting']
    },
    'aws': {
      title: 'AWS',
      description: 'Amazon Web Services cloud infrastructure and solutions',
      fullDescription: 'Amazon Web Services (AWS) is the world\'s most comprehensive cloud platform. We help businesses build scalable, secure, and cost-effective cloud solutions on AWS.',
      features: ['Cloud Migration Services', 'Architecture Design', 'DevOps Implementation', 'Managed Services', 'Cost Optimization', 'Security & Compliance'],
      benefits: ['99.99% uptime guarantee', '30-50% cost reduction', 'Global scalability', 'Enterprise security']
    },
    'azure': {
      title: 'Microsoft Azure & Dynamics 365',
      description: 'Microsoft cloud platform and business applications',
      fullDescription: 'Microsoft Azure provides comprehensive cloud services. Dynamics 365 combines CRM and ERP capabilities into one powerful platform.',
      features: ['Azure Infrastructure', 'Dynamics 365 Implementation', 'Custom Development', 'Integration Services', 'Managed Support', 'AI & ML Solutions'],
      benefits: ['Seamless integration with Microsoft ecosystem', 'Scalable cloud infrastructure', 'Unified business applications', 'Enterprise security']
    },
    'sap': {
      title: 'SAP Commerce & Odoo',
      description: 'Enterprise resource planning and e-commerce solutions',
      fullDescription: 'SAP Commerce Cloud provides complete commerce solutions. Odoo offers integrated business applications including sales, CRM, project management, manufacturing, and inventory.',
      features: ['SAP Commerce Implementation', 'Odoo Customization', 'System Integration', 'Migration Services', 'Training & Support', 'Performance Optimization'],
      benefits: ['Unified business operations', 'Improved efficiency', 'Better customer experience', 'Scalable architecture']
    },
    'atlassian': {
      title: 'Atlassian',
      description: 'Development and collaboration tools for agile teams',
      fullDescription: 'Atlassian provides powerful tools for software development, project management, and team collaboration including Jira, Confluence, Bitbucket, and Trello.',
      features: ['Jira Implementation', 'Confluence Setup', 'Bitbucket Pipelines', 'Tool Integration', 'Team Training', 'Process Optimization'],
      benefits: ['Improved team productivity', 'Better project visibility', 'Faster delivery cycles', 'Seamless collaboration']
    },
    'powerbi': {
      title: 'Power BI',
      description: 'Business intelligence and data visualization platform',
      fullDescription: 'Microsoft Power BI is a leading business analytics service that provides interactive visualizations and business intelligence capabilities.',
      features: ['Dashboard Development', 'Data Modeling', 'DAX Calculations', 'Report Publishing', 'Training & Support', 'Embedded Analytics'],
      benefits: ['70% faster decision-making', 'Real-time visibility', 'Self-service analytics', 'Cost-effective BI solution']
    }
  };

  var technology = technologiesData[id] || {
    title: id ? id.charAt(0).toUpperCase() + id.slice(1) : 'Technology',
    description: 'Comprehensive technology solutions for your business needs',
    fullDescription: 'Our technology experts help businesses leverage cutting-edge solutions to drive innovation and growth.',
    features: ['Custom Implementation', 'Integration Services', 'Training & Support', 'Ongoing Optimization'],
    benefits: ['Improved efficiency', 'Reduced costs', 'Better scalability', 'Enhanced security']
  };

  return React.createElement(
    'div',
    { style: { paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' } },
    React.createElement(Container, { style: { padding: '40px 0' } },
      React.createElement(
        Button,
        { as: Link, to: '/technologies', variant: 'link', style: { color: '#667eea', marginBottom: '20px', paddingLeft: 0 } },
        React.createElement(FaArrowLeft, { style: { marginRight: '5px' } }), ' Back to Technologies'
      ),
      React.createElement(
        Row,
        null,
        React.createElement(
          Col,
          { lg: 8 },
          React.createElement(
            Card,
            { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '30px' } },
            React.createElement(
              Card.Body,
              { style: { padding: '30px' } },
              React.createElement('h1', { style: { fontSize: '2rem', marginBottom: '20px', color: '#667eea' } }, technology.title),
              React.createElement('p', { style: { fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '20px' } }, technology.description),
              React.createElement('p', { style: { lineHeight: '1.8', color: '#aaa' } }, technology.fullDescription)
            )
          ),
          React.createElement(
            Card,
            { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '30px' } },
            React.createElement(
              Card.Body,
              { style: { padding: '30px' } },
              React.createElement('h3', { style: { marginBottom: '20px', color: '#667eea' } }, 'Key Features'),
              React.createElement(
                Row,
                null,
                technology.features.map(function(feature, idx) {
                  return React.createElement(
                    Col,
                    { md: 6, key: idx, className: 'mb-3' },
                    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '10px' } },
                      React.createElement(FaCheckCircle, { style: { color: '#10b981' } }),
                      React.createElement('span', { style: { color: '#ccc' } }, feature)
                    )
                  );
                })
              )
            )
          )
        ),
        React.createElement(
          Col,
          { lg: 4 },
          React.createElement(
            Card,
            { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '20px' } },
            React.createElement(
              Card.Body,
              { style: { padding: '30px' } },
              React.createElement('h3', { style: { marginBottom: '20px', color: '#667eea' } }, 'Key Benefits'),
              technology.benefits.map(function(benefit, idx) {
                return React.createElement(
                  'div',
                  { key: idx, style: { marginBottom: '15px', padding: '10px', backgroundColor: '#222', borderRadius: '10px' } },
                  React.createElement(FaCheckCircle, { style: { color: '#10b981', marginRight: '10px' } }),
                  React.createElement('span', { style: { color: '#ccc' } }, benefit)
                );
              })
            )
          ),
          React.createElement(
            Card,
            { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px' } },
            React.createElement(
              Card.Body,
              { style: { padding: '30px', textAlign: 'center' } },
              React.createElement('h3', { style: { marginBottom: '20px' } }, 'Ready to Get Started?'),
              React.createElement('p', { style: { color: '#aaa', marginBottom: '20px' } }, 'Contact our experts to discuss your technology needs.'),
              React.createElement(Button, { as: Link, to: '/contact', variant: 'primary', style: { borderRadius: '50px', width: '100%' } }, 'Contact Us →')
            )
          )
        )
      )
    )
  );
};

module.exports = TechnologyDetail;