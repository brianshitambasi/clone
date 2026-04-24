// components/TechnologyDetail.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FaCheckCircle, FaArrowLeft, FaAward, FaRocket, FaShieldAlt, FaChartLine, FaUsers, FaCloud, FaDatabase } from 'react-icons/fa';

const TechnologyDetail = () => {
  const { id } = useParams();

  const technologiesData = {
    'salesforce': {
      title: 'Salesforce',
      subtitle: 'Enterprise CRM and Cloud Solutions',
      description: 'Salesforce is the world\'s leading customer relationship management (CRM) platform. We help businesses leverage Salesforce to transform their sales, service, marketing, and commerce operations.',
      fullDescription: 'As a Salesforce Premier Partner, we deliver comprehensive Salesforce solutions that drive customer success. Our certified experts help organizations of all sizes maximize their Salesforce investment through strategic implementation, customization, and ongoing optimization.',
      features: ['Sales Cloud Implementation', 'Service Cloud Configuration', 'Marketing Cloud Automation', 'Custom App Development', 'Third-party Integrations', 'Data Migration Services', 'User Training & Adoption', 'Ongoing Support & Optimization'],
      benefits: ['40% increase in sales productivity', '35% improvement in customer satisfaction', '60% reduction in data management costs', 'Real-time analytics and reporting', 'Seamless mobile access', 'AI-powered insights'],
      certifications: ['Salesforce Certified Administrator', 'Salesforce Platform Developer', 'Sales Cloud Consultant', 'Service Cloud Consultant'],
      icon: <FaCloud size={50} />,
      stats: { clients: 50, satisfaction: '98%' }
    },
    'aws': {
      title: 'Amazon Web Services',
      subtitle: 'Cloud Infrastructure & Solutions',
      description: 'Amazon Web Services (AWS) is the world\'s most comprehensive cloud platform. We help businesses build scalable, secure, and cost-effective cloud solutions on AWS.',
      fullDescription: 'As an AWS Advanced Partner, we provide end-to-end cloud services including migration, architecture design, DevOps implementation, and managed services. Our certified cloud architects help businesses leverage AWS\'s full potential for innovation and growth.',
      features: ['Cloud Migration Services', 'Architecture Design', 'DevOps Implementation', 'Managed Services', 'Cost Optimization', 'Security & Compliance', 'Disaster Recovery', 'Serverless Solutions'],
      benefits: ['99.99% uptime guarantee', '30-50% cost reduction', 'Global scalability', 'Enterprise security', 'Pay-as-you-go pricing', 'Automatic backups'],
      certifications: ['AWS Solutions Architect', 'AWS DevOps Engineer', 'AWS Security Specialist', 'AWS Database Specialist'],
      icon: <FaCloud size={50} />,
      stats: { clients: 75, satisfaction: '97%' }
    },
    'azure': {
      title: 'Microsoft Azure & Dynamics 365',
      subtitle: 'Microsoft Cloud Platform & Business Applications',
      description: 'Microsoft Azure provides comprehensive cloud services. Dynamics 365 combines CRM and ERP capabilities into one powerful platform.',
      fullDescription: 'As a Microsoft Gold Partner, we deliver integrated cloud solutions that combine Azure infrastructure with Dynamics 365 business applications. Our expertise helps organizations modernize their operations and drive digital transformation.',
      features: ['Azure Infrastructure', 'Dynamics 365 Implementation', 'Custom Development', 'Integration Services', 'Managed Support', 'AI & ML Solutions', 'IoT Solutions', 'Data Analytics'],
      benefits: ['Seamless integration with Microsoft ecosystem', 'Scalable cloud infrastructure', 'Unified business applications', 'Enterprise security', 'Hybrid cloud capabilities', 'Advanced analytics'],
      certifications: ['Azure Solutions Architect', 'Dynamics 365 Functional Consultant', 'Azure DevOps Engineer', 'Power Platform Developer'],
      icon: <FaCloud size={50} />,
      stats: { clients: 45, satisfaction: '96%' }
    },
    'sap-odoo': {
      title: 'SAP & Odoo',
      subtitle: 'ERP & E-commerce Solutions',
      description: 'SAP Commerce Cloud provides complete commerce solutions. Odoo offers integrated business applications including sales, CRM, project management, manufacturing, and inventory.',
      fullDescription: 'We help businesses streamline operations with SAP Commerce Cloud and Odoo ERP solutions. Our experts deliver customized implementations that optimize business processes from manufacturing to sales.',
      features: ['SAP Commerce Implementation', 'Odoo Customization', 'System Integration', 'Migration Services', 'Training & Support', 'Performance Optimization', 'Inventory Management', 'Supply Chain Integration'],
      benefits: ['Unified business operations', 'Improved efficiency', 'Better customer experience', 'Scalable architecture', 'Reduced operational costs', 'Real-time visibility'],
      certifications: ['SAP Certified Associate', 'Odoo Functional Consultant', 'ERP Implementation Specialist'],
      icon: <FaDatabase size={50} />,
      stats: { clients: 30, satisfaction: '95%' }
    },
    'atlassian': {
      title: 'Atlassian',
      subtitle: 'Development & Collaboration Tools',
      description: 'Atlassian provides powerful tools for software development, project management, and team collaboration including Jira, Confluence, Bitbucket, and Trello.',
      fullDescription: 'We help teams achieve higher productivity with Atlassian\'s suite of tools. Our experts implement and optimize Jira for agile project management, Confluence for team collaboration, and Bitbucket for DevOps workflows.',
      features: ['Jira Implementation', 'Confluence Setup', 'Bitbucket Pipelines', 'Tool Integration', 'Team Training', 'Process Optimization', 'Agile Coaching', 'Reporting & Dashboards'],
      benefits: ['Improved team productivity', 'Better project visibility', 'Faster delivery cycles', 'Seamless collaboration', 'Traceable workflows', 'Automated processes'],
      certifications: ['Atlassian Certified Jira Administrator', 'Atlassian Certified Confluence Expert', 'Agile Certified Practitioner'],
      icon: <FaUsers size={50} />,
      stats: { clients: 60, satisfaction: '98%' }
    },
    'powerbi': {
      title: 'Microsoft Power BI',
      subtitle: 'Business Intelligence & Analytics',
      description: 'Microsoft Power BI is a leading business analytics service that provides interactive visualizations and business intelligence capabilities.',
      fullDescription: 'We help organizations transform data into actionable insights with Power BI. Our experts build interactive dashboards, data models, and reports that enable data-driven decision-making across your organization.',
      features: ['Dashboard Development', 'Data Modeling', 'DAX Calculations', 'Report Publishing', 'Training & Support', 'Embedded Analytics', 'Row-level Security', 'Data Gateway Setup'],
      benefits: ['70% faster decision-making', 'Real-time visibility', 'Self-service analytics', 'Cost-effective BI solution', 'Interactive visualizations', 'Mobile access'],
      certifications: ['Power BI Data Analyst', 'DAX Specialist', 'Data Visualization Expert'],
      icon: <FaChartLine size={50} />,
      stats: { clients: 55, satisfaction: '97%' }
    }
  };

  const technology = technologiesData[id] || {
    title: id ? id.charAt(0).toUpperCase() + id.slice(1) : 'Technology',
    subtitle: 'Comprehensive Technology Solutions',
    description: 'Our technology experts help businesses leverage cutting-edge solutions to drive innovation and growth.',
    fullDescription: 'We provide end-to-end technology solutions tailored to your business needs. Our certified experts ensure successful implementation and ongoing support.',
    features: ['Custom Implementation', 'Integration Services', 'Training & Support', 'Ongoing Optimization', 'Security Compliance', 'Performance Monitoring'],
    benefits: ['Improved efficiency', 'Reduced costs', 'Better scalability', 'Enhanced security', 'Increased productivity', 'Faster time-to-market'],
    certifications: ['Certified Professional', 'Implementation Expert', 'Solution Architect'],
    icon: <FaRocket size={50} />,
    stats: { clients: 20, satisfaction: '95%' }
  };

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <Container style={{ padding: '40px 0' }}>
        <Button 
          as={Link} 
          to="/technologies" 
          variant="outline-light" 
          style={{ marginBottom: '30px', borderRadius: '50px' }}
        >
          <FaArrowLeft style={{ marginRight: '5px' }} /> Back to Technologies
        </Button>

        <Row>
          <Col lg={8}>
            {/* Main Content Card */}
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '20px', marginBottom: '30px', overflow: 'hidden' }}>
              <div style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                padding: '40px',
                textAlign: 'center'
              }}>
                <div style={{ color: 'white', marginBottom: '15px' }}>{technology.icon}</div>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '10px', color: '#ffffff' }}>
                  {technology.title}
                </h1>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', marginBottom: '0' }}>
                  {technology.subtitle}
                </p>
              </div>
              <Card.Body style={{ padding: '35px' }}>
                <h3 style={{ color: '#667eea', marginBottom: '20px' }}>Overview</h3>
                <p style={{ color: '#cccccc', lineHeight: '1.8', fontSize: '1rem', marginBottom: '20px' }}>
                  {technology.description}
                </p>
                <p style={{ color: '#aaaaaa', lineHeight: '1.8', fontSize: '1rem' }}>
                  {technology.fullDescription}
                </p>
              </Card.Body>
            </Card>

            {/* Key Features Card */}
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '20px', marginBottom: '30px' }}>
              <Card.Body style={{ padding: '35px' }}>
                <h3 style={{ color: '#667eea', marginBottom: '20px' }}>Key Features</h3>
                <Row>
                  {technology.features.map((feature, idx) => (
                    <Col md={6} key={idx} className="mb-3">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaCheckCircle style={{ color: '#10b981', fontSize: '1rem' }} />
                        <span style={{ color: '#cccccc' }}>{feature}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>

            {/* Certifications Card */}
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '20px' }}>
              <Card.Body style={{ padding: '35px' }}>
                <h3 style={{ color: '#667eea', marginBottom: '20px' }}>
                  <FaAward style={{ marginRight: '10px' }} /> Certifications & Expertise
                </h3>
                <Row>
                  {technology.certifications.map((cert, idx) => (
                    <Col md={6} key={idx} className="mb-3">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaShieldAlt style={{ color: '#667eea' }} />
                        <span style={{ color: '#cccccc' }}>{cert}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            {/* Benefits Card */}
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '20px', marginBottom: '20px' }}>
              <Card.Body style={{ padding: '30px' }}>
                <h3 style={{ color: '#667eea', marginBottom: '20px' }}>Key Benefits</h3>
                {technology.benefits.map((benefit, idx) => (
                  <div key={idx} style={{ 
                    marginBottom: '15px', 
                    padding: '12px', 
                    backgroundColor: '#2a2a2a', 
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <FaRocket style={{ color: '#10b981', fontSize: '1rem' }} />
                    <span style={{ color: '#cccccc', fontSize: '0.9rem' }}>{benefit}</span>
                  </div>
                ))}
              </Card.Body>
            </Card>

            {/* Stats Card */}
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '20px', marginBottom: '20px' }}>
              <Card.Body style={{ padding: '30px', textAlign: 'center' }}>
                <h3 style={{ color: '#667eea', marginBottom: '20px' }}>Our Track Record</h3>
                <Row>
                  <Col xs={6}>
                    <div style={{ fontSize: '2rem', fontWeight: '800', color: '#667eea' }}>{technology.stats.clients}+</div>
                    <p style={{ color: '#aaaaaa', margin: 0 }}>Happy Clients</p>
                  </Col>
                  <Col xs={6}>
                    <div style={{ fontSize: '2rem', fontWeight: '800', color: '#667eea' }}>{technology.stats.satisfaction}</div>
                    <p style={{ color: '#aaaaaa', margin: 0 }}>Satisfaction Rate</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* CTA Card */}
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '20px' }}>
              <Card.Body style={{ padding: '30px', textAlign: 'center' }}>
                <h3 style={{ color: '#ffffff', marginBottom: '15px' }}>Ready to Get Started?</h3>
                <p style={{ color: '#aaaaaa', marginBottom: '20px', lineHeight: '1.6' }}>
                  Contact our experts to discuss your technology needs and how we can help transform your business.
                </p>
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="primary" 
                  style={{ 
                    borderRadius: '50px', 
                    width: '100%',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    border: 'none',
                    padding: '12px'
                  }}
                >
                  Contact Us →
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TechnologyDetail;