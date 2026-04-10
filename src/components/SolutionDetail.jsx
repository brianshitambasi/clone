// components/SolutionDetail.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FaCheckCircle, FaChartLine, FaUsers, FaBuilding, FaShoppingCart, FaRobot, FaVrCardboard } from 'react-icons/fa';

const SolutionDetail = () => {
  const { id } = useParams();

  const solutionsData = {
    'crm': {
      title: 'CRM Solutions',
      subtitle: 'Salesforce & Dynamics 365 Experts',
      icon: <FaUsers />,
      description: 'Transform your customer relationships with our comprehensive CRM implementation and optimization services.',
      fullDescription: `Customer Relationship Management (CRM) is the backbone of modern sales and marketing operations. Our CRM practice specializes in Salesforce and Microsoft Dynamics 365, helping organizations of all sizes maximize their CRM investment.

We provide end-to-end CRM services including strategy, implementation, customization, integration, and ongoing support. Our zero-copy integration approach ensures your CRM connects seamlessly with data lakes and other enterprise systems without data duplication.

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
      ]
    },
    'erp': {
      title: 'ERP Solutions',
      subtitle: 'SAP & Odoo Specialists',
      icon: <FaBuilding />,
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
      ]
    },
    'digital-commerce': {
      title: 'Digital Commerce',
      subtitle: 'Headless Commerce & Payment Integration',
      icon: <FaShoppingCart />,
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
      ]
    },
    'data-analytics': {
      title: 'Data Analytics & BI',
      subtitle: 'Power BI & Predictive Modeling',
      icon: <FaChartLine />,
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
      ]
    }
  };

  const solution = solutionsData[id];

  if (!solution) {
    return (
      <div style={{ paddingTop: '80px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' }}>
        <h2>Solution not found</h2>
        <Button as={Link} to="/solutions" variant="primary" style={{ marginTop: '20px' }}>Back to Solutions</Button>
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
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>{solution.icon}</div>
              <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px' }}>{solution.title}</h1>
              <p style={{ fontSize: '1.3rem', opacity: 0.95 }}>{solution.subtitle}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container style={{ padding: '60px 0' }}>
        <Row>
          <Col lg={7}>
            <h2 style={{ color: '#667eea', marginBottom: '20px' }}>Overview</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '20px' }}>{solution.description}</p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', whiteSpace: 'pre-line' }}>{solution.fullDescription}</p>
          </Col>
          <Col lg={5}>
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '20px' }}>
              <Card.Body>
                <h4 style={{ marginBottom: '15px', color: '#667eea' }}>Key Benefits</h4>
                <ListGroup variant="flush" style={{ backgroundColor: 'transparent' }}>
                  {solution.benefits.map((benefit, idx) => (
                    <ListGroup.Item key={idx} style={{ backgroundColor: 'transparent', color: '#ccc', borderColor: '#333', padding: '10px 0' }}>
                      <FaCheckCircle style={{ color: '#10b981', marginRight: '10px' }} /> {benefit}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>

            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px' }}>
              <Card.Body>
                <h4 style={{ marginBottom: '15px', color: '#667eea' }}>Key Features</h4>
                <ListGroup variant="flush" style={{ backgroundColor: 'transparent' }}>
                  {solution.features.map((feature, idx) => (
                    <ListGroup.Item key={idx} style={{ backgroundColor: 'transparent', color: '#ccc', borderColor: '#333', padding: '8px 0' }}>
                      • {feature}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* CTA Section */}
        <Row style={{ marginTop: '60px' }}>
          <Col className="text-center">
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '40px' }}>
              <h3 style={{ marginBottom: '20px' }}>Ready to implement this solution?</h3>
              <p style={{ color: '#aaa', marginBottom: '30px' }}>Let's discuss how we can help you achieve your business objectives.</p>
              <div>
                <Button as={Link} to="/contact" variant="primary" size="lg" style={{ marginRight: '15px', borderRadius: '50px' }}>Schedule a Consultation</Button>
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