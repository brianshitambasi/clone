// components/SolutionDetail.jsx
/* eslint-disable no-unused-vars */
const React = require('react');
const { useState } = React;
const { Container, Row, Col, Card, Button, Badge, Accordion } = require('react-bootstrap');
const { Link, useParams } = require('react-router-dom');
const { 
  FaCheckCircle, FaArrowRight, FaPhone, FaEnvelope, FaStar, FaTrophy, FaClock, FaUsers, FaChartLine
} = require('react-icons/fa');

const SolutionDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const solutionsData = {
    'crm': {
      title: 'CRM Solutions',
      subtitle: 'Salesforce & Dynamics 365 Experts',
      rating: 4.9,
      reviews: 156,
      description: 'Transform your customer relationships with our comprehensive CRM implementation and optimization services.',
      fullDescription: `Customer Relationship Management (CRM) is the backbone of modern sales and marketing operations. Our CRM practice specializes in Salesforce and Microsoft Dynamics 365, helping organizations of all sizes maximize their CRM investment.

We provide end-to-end CRM services including strategy, implementation, customization, integration, and ongoing support. Our zero-copy integration approach ensures your CRM connects seamlessly with data lakes and other enterprise systems.

Whether you're implementing CRM for the first time or optimizing an existing deployment, our certified consultants bring deep expertise in Sales Cloud, Service Cloud, Marketing Cloud, and Nonprofit Cloud.`,
      benefits: [
        '40% increase in sales productivity',
        '35% improvement in customer satisfaction',
        '60% reduction in data management costs',
        'Real-time visibility into sales pipeline',
        'Automated marketing campaigns'
      ],
      features: [
        'Full-cycle implementation from planning to launch',
        'Zero-copy integration with data lakes and warehouses',
        'Custom workflow automation and process optimization',
        'Advanced analytics and AI-powered insights',
        'User training and adoption programs'
      ],
      process: [
        { step: 'Discovery & Assessment', desc: 'Analyze current processes and define requirements', duration: '2-3 weeks' },
        { step: 'Solution Design', desc: 'Configure CRM to match your business needs', duration: '3-4 weeks' },
        { step: 'Implementation', desc: 'Build, test, and deploy customizations', duration: '6-8 weeks' },
        { step: 'Training & Adoption', desc: 'User training and change management', duration: '2-3 weeks' }
      ],
      technologies: ['Salesforce', 'Microsoft Dynamics 365', 'HubSpot', 'Zoho', 'Pipedrive'],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
    },
    'erp': {
      title: 'ERP Solutions',
      subtitle: 'SAP & Odoo Specialists',
      rating: 4.8,
      reviews: 128,
      description: 'Unify your business operations with comprehensive ERP systems that streamline workflows and provide complete visibility.',
      fullDescription: `Enterprise Resource Planning (ERP) systems integrate all aspects of your business into a single, unified platform. Our ERP practice specializes in SAP and Odoo, helping organizations achieve operational excellence through better data visibility and process automation.

We guide you through the entire ERP journey—from initial consultation and vendor selection to implementation, data migration, user training, and ongoing support. Our legacy-to-cloud migration expertise ensures you can modernize without disrupting operations.`,
      benefits: [
        '50% reduction in manual data entry',
        '45% faster financial close',
        '60% improvement in inventory accuracy',
        'Complete organizational visibility',
        'Better compliance and audit trails'
      ],
      features: [
        'Strategic consultation and vendor selection',
        'Legacy-to-cloud migration with zero downtime',
        'Custom module development and integration',
        'Data migration and cleansing services',
        'User training and change management'
      ],
      process: [
        { step: 'Discovery', desc: 'Requirements gathering and gap analysis', duration: '3-4 weeks' },
        { step: 'Design', desc: 'System architecture and configuration', duration: '4-6 weeks' },
        { step: 'Build', desc: 'Customization and integration development', duration: '8-12 weeks' },
        { step: 'Test', desc: 'Quality assurance and user acceptance', duration: '3-4 weeks' }
      ],
      technologies: ['SAP S/4HANA', 'Odoo', 'Oracle NetSuite', 'Microsoft Dynamics 365 Business Central'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    'digital-commerce': {
      title: 'Digital Commerce',
      subtitle: 'Headless Commerce & Payment Integration',
      rating: 4.9,
      reviews: 98,
      description: 'Create exceptional shopping experiences with our headless commerce solutions and global payment integration.',
      fullDescription: `Digital commerce has evolved beyond simple online stores. Today's customers expect seamless, personalized experiences across every channel. Our digital commerce practice builds headless commerce solutions that decouple the frontend experience from backend commerce functionality.

This architecture gives you unprecedented flexibility—you can deliver unique experiences on any device or channel while maintaining a single source of truth for products, pricing, and inventory.`,
      benefits: [
        '60% faster page loads',
        '45% higher conversion rates',
        '50% reduction in cart abandonment',
        'Faster time-to-market for new channels',
        'Better SEO and mobile performance'
      ],
      features: [
        'Headless commerce architecture',
        'Global payment gateway integration',
        'Multi-channel selling',
        'Personalized product recommendations',
        'Real-time inventory synchronization'
      ],
      process: [
        { step: 'Strategy', desc: 'Define commerce requirements and channels', duration: '2-3 weeks' },
        { step: 'Architecture', desc: 'Design headless architecture', duration: '2-4 weeks' },
        { step: 'Development', desc: 'Build frontend and integrate backend', duration: '8-12 weeks' },
        { step: 'Testing', desc: 'Performance and security testing', duration: '2-3 weeks' }
      ],
      technologies: ['Shopify Plus', 'Magento', 'BigCommerce', 'Commercetools', 'Stripe', 'PayPal'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
    },
    'data-analytics': {
      title: 'Data Analytics & BI',
      subtitle: 'Power BI & Predictive Modeling',
      rating: 4.8,
      reviews: 112,
      description: 'Turn your data into actionable insights with our business intelligence and predictive analytics solutions.',
      fullDescription: `Data is your most valuable asset—but only if you can extract meaningful insights. Our data analytics practice helps organizations harness the power of their data through modern BI tools and advanced analytics techniques.

We implement end-to-end analytics solutions including data integration, warehousing, visualization, and predictive modeling. Our Power BI expertise delivers stunning dashboards that provide real-time visibility into your business.`,
      benefits: [
        '70% faster decision-making',
        '55% improvement in forecast accuracy',
        'Real-time business visibility',
        'Data-driven culture transformation',
        'Reduced data preparation time'
      ],
      features: [
        'End-to-end analytics implementation',
        'Power BI dashboard development',
        'Predictive analytics and forecasting',
        'Data warehousing and ETL pipelines',
        'Self-service analytics enablement'
      ],
      process: [
        { step: 'Data Audit', desc: 'Assess data sources and quality', duration: '2-3 weeks' },
        { step: 'Architecture', desc: 'Design data warehouse and pipelines', duration: '3-4 weeks' },
        { step: 'Development', desc: 'Build ETL and dashboards', duration: '6-8 weeks' },
        { step: 'Deployment', desc: 'Launch and user training', duration: '2-3 weeks' }
      ],
      technologies: ['Power BI', 'Tableau', 'Looker', 'Snowflake', 'BigQuery', 'Redshift', 'dbt'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    'ai-rpa': {
      title: 'Artificial Intelligence & RPA',
      subtitle: 'Autonomous Agentic AI',
      rating: 4.9,
      reviews: 87,
      description: 'Leverage cutting-edge AI and robotic process automation to transform your business operations.',
      fullDescription: `Artificial Intelligence and Robotic Process Automation (RPA) are revolutionizing how businesses operate. Our AI practice builds autonomous agentic systems that can reason, plan, and execute complex tasks with minimal human intervention.

We develop custom AI solutions including computer vision, natural language processing, predictive analytics, and intelligent document processing. Our RPA bots automate repetitive tasks, freeing your team to focus on high-value work.`,
      benefits: [
        '80% reduction in manual processing',
        '90% error reduction',
        '24/7 operational capability',
        'Faster decision-making',
        'Scalable intelligence'
      ],
      features: [
        'Custom AI model development',
        'RPA bot implementation',
        'Natural language processing',
        'Computer vision solutions',
        'Intelligent document processing'
      ],
      process: [
        { step: 'Discovery', desc: 'Identify automation opportunities', duration: '2-3 weeks' },
        { step: 'Design', desc: 'Design AI/RPA architecture', duration: '3-4 weeks' },
        { step: 'Development', desc: 'Build and train models/bots', duration: '8-12 weeks' },
        { step: 'Deployment', desc: 'Launch and monitor', duration: '2-3 weeks' }
      ],
      technologies: ['TensorFlow', 'PyTorch', 'UiPath', 'Automation Anywhere', 'Blue Prism', 'OpenAI'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop'
    },
    'ar-vr-iot': {
      title: 'AR/VR & IoT',
      subtitle: 'Immersive Digital Twin Development',
      rating: 4.7,
      reviews: 65,
      description: 'Create immersive experiences and connected ecosystems with our AR/VR and IoT solutions.',
      fullDescription: `Augmented Reality (AR), Virtual Reality (VR), and the Internet of Things (IoT) are reshaping how businesses interact with the physical world. Our practice builds "Digital Twins"—virtual replicas of physical assets—that enable real-time monitoring, simulation, and optimization.

We develop custom AR/VR applications for training, visualization, and remote assistance. Our IoT solutions connect sensors and devices to the cloud, enabling real-time data collection and analysis.`,
      benefits: [
        '50% faster employee training',
        '40% reduction in maintenance costs',
        'Real-time asset monitoring',
        'Improved safety and compliance',
        'Better decision-making through simulation'
      ],
      features: [
        'Digital twin development',
        'AR/VR application development',
        'IoT sensor integration',
        'Real-time monitoring dashboards',
        'Predictive maintenance systems'
      ],
      process: [
        { step: 'Discovery', desc: 'Identify use cases and requirements', duration: '2-3 weeks' },
        { step: 'Design', desc: 'Design AR/VR/IoT architecture', duration: '3-4 weeks' },
        { step: 'Development', desc: 'Build applications and integrate sensors', duration: '10-14 weeks' },
        { step: 'Deployment', desc: 'Install and train users', duration: '2-4 weeks' }
      ],
      technologies: ['Unity', 'Unreal Engine', 'AWS IoT', 'Azure IoT', 'ThingWorx', 'Vuforia'],
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop'
    }
  };

  var solution = solutionsData[id];

  if (!solution) {
    return React.createElement(
      'div',
      { style: { paddingTop: '80px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' } },
      React.createElement(Container, null,
        React.createElement('h2', null, 'Solution not found'),
        React.createElement(Button, { as: Link, to: '/solutions', variant: 'primary', style: { marginTop: '20px' } }, 'Back to Solutions')
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
              solution.rating, ' ★ (', solution.reviews, ' reviews)'
            ),
            React.createElement('h1', { style: { fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' } }, solution.title),
            React.createElement('p', { style: { fontSize: '1.2rem', opacity: 0.95 } }, solution.subtitle)
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
            ['overview', 'benefits', 'features', 'technologies'].map(function(tab) {
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
            React.createElement('p', { style: { fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '20px' } }, solution.description),
            React.createElement('p', { style: { fontSize: '1rem', lineHeight: '1.8', color: '#aaa' } }, solution.fullDescription)
          ),
          activeTab === 'benefits' && React.createElement(React.Fragment, null,
            React.createElement('h2', { style: { color: '#667eea', marginBottom: '20px' } }, 'Key Benefits'),
            React.createElement(
              'div',
              null,
              solution.benefits.map(function(benefit, idx) {
                return React.createElement(
                  'div',
                  { key: idx, style: { marginBottom: '15px', padding: '12px', backgroundColor: '#1a1a1a', borderRadius: '10px', borderLeft: '4px solid #667eea' } },
                  React.createElement(FaCheckCircle, { style: { color: '#10b981', marginRight: '10px' } }),
                  React.createElement('span', { style: { color: '#ccc' } }, benefit)
                );
              })
            )
          ),
          activeTab === 'features' && React.createElement(React.Fragment, null,
            React.createElement('h2', { style: { color: '#667eea', marginBottom: '20px' } }, 'Key Features'),
            React.createElement(
              'div',
              null,
              solution.features.map(function(feature, idx) {
                return React.createElement(
                  'div',
                  { key: idx, style: { marginBottom: '15px', padding: '12px', backgroundColor: '#1a1a1a', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '10px' } },
                  React.createElement(FaCheckCircle, { style: { color: '#10b981' } }),
                  React.createElement('span', { style: { color: '#ccc' } }, feature)
                );
              })
            )
          ),
          activeTab === 'technologies' && React.createElement(React.Fragment, null,
            React.createElement('h2', { style: { color: '#667eea', marginBottom: '20px' } }, 'Technologies We Use'),
            React.createElement(
              'div',
              { style: { display: 'flex', flexWrap: 'wrap', gap: '10px' } },
              solution.technologies.map(function(tech, idx) {
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
          React.createElement('img', { src: solution.image, alt: solution.title, style: { width: '100%', borderRadius: '15px', marginBottom: '20px' } }),
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
                  React.createElement('div', { style: { fontSize: '1.2rem', fontWeight: '700' } }, '3-6 mo'),
                  React.createElement('div', { style: { fontSize: '0.8rem', color: '#aaa' } }, 'Avg Timeline')
                ),
                React.createElement(Col, { xs: 6, className: 'text-center' },
                  React.createElement(FaUsers, { style: { fontSize: '1.5rem', color: '#667eea' } }),
                  React.createElement('div', { style: { fontSize: '1.2rem', fontWeight: '700' } }, solution.reviews, '+'),
                  React.createElement('div', { style: { fontSize: '0.8rem', color: '#aaa' } }, 'Happy Clients')
                ),
                React.createElement(Col, { xs: 6, className: 'text-center' },
                  React.createElement(FaChartLine, { style: { fontSize: '1.5rem', color: '#667eea' } }),
                  React.createElement('div', { style: { fontSize: '1.2rem', fontWeight: '700' } }, solution.rating),
                  React.createElement('div', { style: { fontSize: '0.8rem', color: '#aaa' } }, 'Client Rating')
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
              React.createElement('p', { style: { color: '#aaa', marginBottom: '20px', fontSize: '0.9rem' } }, 'Contact our experts to discuss how we can help you implement this solution.'),
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

module.exports = SolutionDetail;