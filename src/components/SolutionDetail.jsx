// components/SolutionDetail.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Badge, Accordion } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { 
  FaCheckCircle, FaChartLine, FaUsers, FaBuilding, FaShoppingCart, FaRobot, FaVrCardboard,
  FaArrowRight, FaPhone, FaEnvelope, FaStar, FaTrophy, FaAward, FaClock, FaRocket, FaShieldAlt,
  FaDatabase, FaCloud, FaMobile, FaDesktop, FaPlug
} from 'react-icons/fa';

const SolutionDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const solutionsData = {
    'crm': {
      title: 'CRM Solutions',
      subtitle: 'Salesforce & Dynamics 365 Experts',
      platform: 'Salesforce | Microsoft Dynamics 365',
      icon: <FaUsers />,
      rating: 4.9,
      reviews: 156,
      description: 'Transform your customer relationships with our comprehensive CRM implementation and optimization services.',
      fullDescription: `Customer Relationship Management (CRM) is the backbone of modern sales and marketing operations. Our CRM practice specializes in Salesforce and Microsoft Dynamics 365, helping organizations of all sizes maximize their CRM investment.

We provide end-to-end CRM services including strategy, implementation, customization, integration, and ongoing support. Our zero-copy integration approach ensures your CRM connects seamlessly with data lakes and other enterprise systems without data duplication.

Whether you're implementing CRM for the first time or optimizing an existing deployment, our certified consultants bring deep expertise in Sales Cloud, Service Cloud, Marketing Cloud, and Nonprofit Cloud.

Key capabilities include:
• 360-degree customer view across all touchpoints
• Automated lead scoring and routing
• AI-powered sales forecasting
• Custom workflow automation
• Seamless integration with ERP, marketing, and support systems`,
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
        { step: 'Training & Adoption', desc: 'User training and change management', duration: '2-3 weeks' },
        { step: 'Ongoing Support', desc: 'Continuous optimization and support', duration: 'Ongoing' }
      ],
      technologies: ['Salesforce', 'Microsoft Dynamics 365', 'HubSpot', 'Zoho', 'Pipedrive'],
      integrations: ['Slack', 'Outlook', 'Gmail', 'Mailchimp', 'QuickBooks', 'Tableau'],
      caseStudies: [
        { title: 'Global Bank CRM Transformation', result: '40% sales productivity increase', client: 'Leading Financial Institution' },
        { title: 'Healthcare CRM Implementation', result: '35% patient satisfaction improvement', client: 'Regional Health System' }
      ],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
    },
    'erp': {
      title: 'ERP Solutions',
      subtitle: 'SAP & Odoo Specialists',
      platform: 'SAP | Odoo',
      icon: <FaBuilding />,
      rating: 4.8,
      reviews: 128,
      description: 'Unify your business operations with comprehensive ERP systems that streamline workflows and provide complete visibility.',
      fullDescription: `Enterprise Resource Planning (ERP) systems integrate all aspects of your business into a single, unified platform. Our ERP practice specializes in SAP and Odoo, helping organizations achieve operational excellence through better data visibility and process automation.

We guide you through the entire ERP journey—from initial consultation and vendor selection to implementation, data migration, user training, and ongoing support. Our legacy-to-cloud migration expertise ensures you can modernize without disrupting operations.

The benefits are transformative: 50% reduction in manual data entry, 45% faster financial close, 60% improvement in inventory accuracy, and complete visibility across your organization.`,
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
        { step: 'Test', desc: 'Quality assurance and user acceptance', duration: '3-4 weeks' },
        { step: 'Deploy', desc: 'Go-live and post-launch support', duration: '2-3 weeks' }
      ],
      technologies: ['SAP S/4HANA', 'Odoo', 'Oracle NetSuite', 'Microsoft Dynamics 365 Business Central'],
      integrations: ['Banking APIs', 'E-commerce', 'Warehouse Systems', 'CRM', 'HRIS'],
      caseStudies: [
        { title: 'Manufacturing ERP Implementation', result: '60% inventory accuracy improvement', client: 'Global Manufacturer' },
        { title: 'Retail ERP Migration', result: '45% faster financial close', client: 'National Retail Chain' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    'digital-commerce': {
      title: 'Digital Commerce',
      subtitle: 'Headless Commerce & Payment Integration',
      platform: 'Headless | Multi-Channel',
      icon: <FaShoppingCart />,
      rating: 4.9,
      reviews: 98,
      description: 'Create exceptional shopping experiences with our headless commerce solutions and global payment integration.',
      fullDescription: `Digital commerce has evolved beyond simple online stores. Today's customers expect seamless, personalized experiences across every channel. Our digital commerce practice builds headless commerce solutions that decouple the frontend experience from backend commerce functionality.

This architecture gives you unprecedented flexibility—you can deliver unique experiences on any device or channel while maintaining a single source of truth for products, pricing, and inventory. We integrate with leading commerce platforms and payment gateways to create global, scalable solutions.

Our clients typically see 60% faster page loads, 45% higher conversion rates, and 50% reduction in cart abandonment.`,
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
        { step: 'Testing', desc: 'Performance and security testing', duration: '2-3 weeks' },
        { step: 'Launch', desc: 'Go-live and post-launch optimization', duration: '1-2 weeks' }
      ],
      technologies: ['Shopify Plus', 'Magento', 'BigCommerce', 'Commercetools', 'Stripe', 'PayPal', 'Square'],
      integrations: ['ERP', 'CRM', 'Payment Gateways', 'Shipping Carriers', 'Tax Systems'],
      caseStudies: [
        { title: 'Fashion Retail Headless Commerce', result: '200% increase in mobile conversions', client: 'Luxury Fashion Brand' },
        { title: 'B2B Commerce Platform', result: '50% faster checkout', client: 'Industrial Distributor' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
    },
    'data-analytics': {
      title: 'Data Analytics & BI',
      subtitle: 'Power BI & Predictive Modeling',
      platform: 'Microsoft Power BI | Advanced Analytics',
      icon: <FaChartLine />,
      rating: 4.8,
      reviews: 112,
      description: 'Turn your data into actionable insights with our business intelligence and predictive analytics solutions.',
      fullDescription: `Data is your most valuable asset—but only if you can extract meaningful insights. Our data analytics practice helps organizations harness the power of their data through modern BI tools and advanced analytics techniques.

We implement end-to-end analytics solutions including data integration, warehousing, visualization, and predictive modeling. Our Power BI expertise delivers stunning dashboards that provide real-time visibility into your business.

Beyond descriptive analytics, we build machine learning models that predict future trends and prescribe optimal actions.`,
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
      integrations: ['Salesforce', 'ERP', 'Google Analytics', 'Adobe Analytics', 'Social Media APIs'],
      caseStudies: [
        { title: 'Retail Analytics Dashboard', result: '30% inventory reduction', client: 'National Retailer' },
        { title: 'Healthcare Predictive Analytics', result: '40% readmission reduction', client: 'Hospital Network' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    'ai-rpa': {
      title: 'Artificial Intelligence & RPA',
      subtitle: 'Autonomous Agentic AI',
      platform: 'AI | RPA | Machine Learning',
      icon: <FaRobot />,
      rating: 4.9,
      reviews: 87,
      description: 'Leverage cutting-edge AI and robotic process automation to transform your business operations.',
      fullDescription: `Artificial Intelligence and Robotic Process Automation (RPA) are revolutionizing how businesses operate. Our AI practice builds autonomous agentic systems that can reason, plan, and execute complex tasks with minimal human intervention.

We develop custom AI solutions including computer vision, natural language processing, predictive analytics, and intelligent document processing. Our RPA bots automate repetitive tasks, freeing your team to focus on high-value work.

The impact is transformative: 80% reduction in manual processing time, 90% improvement in accuracy, and 24/7 operational capability.`,
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
      integrations: ['ERP', 'CRM', 'Document Management', 'Email', 'Legacy Systems'],
      caseStudies: [
        { title: 'Banking Document Processing', result: '95% faster processing', client: 'Regional Bank' },
        { title: 'Insurance Claims Automation', result: '70% cost reduction', client: 'Insurance Provider' }
      ],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop'
    },
    'ar-vr-iot': {
      title: 'AR/VR & IoT',
      subtitle: 'Immersive Digital Twin Development',
      platform: 'AR | VR | IoT | Digital Twins',
      icon: <FaVrCardboard />,
      rating: 4.7,
      reviews: 65,
      description: 'Create immersive experiences and connected ecosystems with our AR/VR and IoT solutions.',
      fullDescription: `Augmented Reality (AR), Virtual Reality (VR), and the Internet of Things (IoT) are reshaping how businesses interact with the physical world. Our practice builds "Digital Twins"—virtual replicas of physical assets—that enable real-time monitoring, simulation, and optimization.

We develop custom AR/VR applications for training, visualization, and remote assistance. Our IoT solutions connect sensors and devices to the cloud, enabling real-time data collection and analysis.

The results: 50% faster training times, 40% reduction in maintenance costs, and real-time visibility into physical operations.`,
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
      integrations: ['ERP', 'CMMS', 'Building Management', 'Safety Systems', 'Wearables'],
      caseStudies: [
        { title: 'Manufacturing Digital Twin', result: '30% downtime reduction', client: 'Industrial Manufacturer' },
        { title: 'AR Remote Assistance', result: '60% faster issue resolution', client: 'Global Service Provider' }
      ],
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop'
    }
  };

  const solution = solutionsData[id];

  if (!solution) {
    return (
      <div style={{ paddingTop: '80px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' }}>
        <Container>
          <h2>Solution not found</h2>
          <Button as={Link} to="/solutions" variant="primary" style={{ marginTop: '20px' }}>Back to Solutions</Button>
        </Container>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      {/* Hero Section */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <Badge bg="light" text="dark" style={{ marginBottom: '15px' }}>
                <FaStar style={{ marginRight: '5px', color: '#ffc107' }} />
                {solution.rating} ★ ({solution.reviews} reviews)
              </Badge>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>{solution.icon}</div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' }}>{solution.title}</h1>
              <p style={{ fontSize: '1.2rem', opacity: 0.95, marginBottom: '10px' }}>{solution.subtitle}</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{solution.platform}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container style={{ padding: '60px 0' }}>
        <Row>
          <Col lg={7}>
            {/* Tab Navigation */}
            <div style={{ marginBottom: '30px', borderBottom: '1px solid #333', display: 'flex', flexWrap: 'wrap' }}>
              {['overview', 'benefits', 'process', 'technologies', 'integrations'].map(tab => (
                <Button
                  key={tab}
                  variant="link"
                  onClick={() => setActiveTab(tab)}
                  style={{
                    color: activeTab === tab ? '#667eea' : '#aaa',
                    textDecoration: 'none',
                    marginRight: '20px',
                    padding: '10px 0',
                    borderBottom: activeTab === tab ? '2px solid #667eea' : 'none',
                    borderRadius: 0
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <>
                <h2 style={{ color: '#667eea', marginBottom: '20px' }}>Overview</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '20px' }}>
                  {solution.description}
                </p>
                <div style={{ whiteSpace: 'pre-line', fontSize: '1rem', lineHeight: '1.8', color: '#aaa' }}>
                  {solution.fullDescription}
                </div>
              </>
            )}

            {activeTab === 'benefits' && (
              <>
                <h2 style={{ color: '#667eea', marginBottom: '20px' }}>Key Benefits</h2>
                <Row>
                  {solution.benefits.map((benefit, idx) => (
                    <Col md={6} key={idx} className="mb-3">
                      <div style={{ 
                        backgroundColor: '#1a1a1a', 
                        padding: '15px', 
                        borderRadius: '10px',
                        borderLeft: `4px solid #667eea`
                      }}>
                        <FaCheckCircle style={{ color: '#10b981', marginRight: '10px' }} />
                        <span style={{ color: '#ccc' }}>{benefit}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </>
            )}

            {activeTab === 'process' && (
              <>
                <h2 style={{ color: '#667eea', marginBottom: '20px' }}>Our Implementation Process</h2>
                <Accordion defaultActiveKey="0" style={{ backgroundColor: 'transparent' }}>
                  {solution.process.map((step, idx) => (
                    <Accordion.Item eventKey={idx.toString()} key={idx} style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', marginBottom: '10px' }}>
                      <Accordion.Header>
                        <div>
                          <strong>Phase {idx + 1}: {step.step}</strong>
                          <Badge bg="info" style={{ marginLeft: '10px' }}>{step.duration}</Badge>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body style={{ backgroundColor: '#1a1a1a', color: '#ccc' }}>
                        {step.desc}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </>
            )}

            {activeTab === 'technologies' && (
              <>
                <h2 style={{ color: '#667eea', marginBottom: '20px' }}>Technologies We Use</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {solution.technologies.map((tech, idx) => (
                    <span key={idx} style={{ background: '#1a1a1a', padding: '8px 16px', borderRadius: '50px', color: '#667eea', border: '1px solid #667eea', fontSize: '0.9rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'integrations' && (
              <>
                <h2 style={{ color: '#667eea', marginBottom: '20px' }}>Integrations</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {solution.integrations.map((integration, idx) => (
                    <span key={idx} style={{ background: '#1a1a1a', padding: '8px 16px', borderRadius: '50px', color: '#4facfe', border: '1px solid #4facfe', fontSize: '0.9rem' }}>
                      <FaPlug style={{ marginRight: '5px', fontSize: '0.7rem' }} />
                      {integration}
                    </span>
                  ))}
                </div>
              </>
            )}
          </Col>

          <Col lg={5}>
            {/* Image */}
            <img src={solution.image} alt={solution.title} style={{ width: '100%', borderRadius: '15px', marginBottom: '20px' }} />
            
            {/* Quick Stats */}
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '20px' }}>
              <Card.Body>
                <h4 style={{ marginBottom: '15px' }}>Quick Stats</h4>
                <Row>
                  <Col xs={6} className="text-center mb-3">
                    <FaTrophy style={{ fontSize: '1.5rem', color: '#667eea' }} />
                    <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>{solution.rating}</div>
                    <div style={{ fontSize: '0.8rem', color: '#aaa' }}>Client Rating</div>
                  </Col>
                  <Col xs={6} className="text-center mb-3">
                    <FaUsers style={{ fontSize: '1.5rem', color: '#667eea' }} />
                    <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>{solution.reviews}+</div>
                    <div style={{ fontSize: '0.8rem', color: '#aaa' }}>Happy Clients</div>
                  </Col>
                  <Col xs={6} className="text-center">
                    <FaClock style={{ fontSize: '1.5rem', color: '#667eea' }} />
                    <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>3-6 mo</div>
                    <div style={{ fontSize: '0.8rem', color: '#aaa' }}>Avg Timeline</div>
                  </Col>
                  <Col xs={6} className="text-center">
                    <FaRocket style={{ fontSize: '1.5rem', color: '#667eea' }} />
                    <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>98%</div>
                    <div style={{ fontSize: '0.8rem', color: '#aaa' }}>Success Rate</div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Case Studies */}
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '20px' }}>
              <Card.Body>
                <h4 style={{ marginBottom: '15px' }}>Success Stories</h4>
                {solution.caseStudies.map((study, idx) => (
                  <div key={idx} style={{ marginBottom: '15px', padding: '12px', backgroundColor: '#222', borderRadius: '10px' }}>
                    <div style={{ fontSize: '0.85rem', color: '#667eea', marginBottom: '5px' }}>{study.client}</div>
                    <div style={{ fontWeight: '600', marginBottom: '5px' }}>{study.title}</div>
                    <div style={{ fontSize: '0.85rem', color: '#43e97b' }}>✓ {study.result}</div>
                  </div>
                ))}
              </Card.Body>
            </Card>

            {/* Contact Card */}
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px' }}>
              <Card.Body>
                <h4 style={{ marginBottom: '15px' }}>Ready to get started?</h4>
                <p style={{ color: '#aaa', marginBottom: '20px', fontSize: '0.9rem' }}>
                  Contact our {solution.title.split(' ')[0]} experts for a free consultation.
                </p>
                <Button as={Link} to="/contact" variant="primary" style={{ width: '100%', marginBottom: '10px', borderRadius: '50px' }}>
                  Schedule Consultation <FaArrowRight />
                </Button>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '15px' }}>
                  <FaPhone style={{ color: '#667eea', cursor: 'pointer', fontSize: '1.2rem' }} />
                  <FaEnvelope style={{ color: '#667eea', cursor: 'pointer', fontSize: '1.2rem' }} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* CTA Section */}
        <Row style={{ marginTop: '60px' }}>
          <Col className="text-center">
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '40px' }}>
              <h3 style={{ marginBottom: '20px' }}>Ready to Implement {solution.title.split(' ')[0]}?</h3>
              <p style={{ color: '#aaa', marginBottom: '30px' }}>Join 200+ businesses that have transformed with our solutions.</p>
              <div>
                <Button as={Link} to="/contact" variant="primary" size="lg" style={{ marginRight: '15px', borderRadius: '50px' }}>Get Started</Button>
                <Button as={Link} to="/solutions" variant="outline-light" size="lg" style={{ borderRadius: '50px' }}>Explore Other Solutions</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SolutionDetail;