// components/TechnologyDetail.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FaCheckCircle, FaCloud, FaDatabase, FaShieldAlt, FaRocket } from 'react-icons/fa';

const TechnologyDetail = () => {
  const { id } = useParams();

  const technologiesData = {
    'salesforce': {
      title: 'Salesforce',
      subtitle: 'Salesforce Implementation & Optimization',
      description: 'Maximize your Salesforce investment with our certified consultants. We specialize in Sales Cloud, Service Cloud, Marketing Cloud, and Nonprofit Cloud.',
      fullDescription: `Salesforce is the world's leading customer relationship management platform, and we're experts at helping organizations unlock its full potential. Our certified consultants bring deep experience across all major Salesforce clouds.

We provide end-to-end services including strategy, implementation, customization, integration, and ongoing support. Our proven methodologies ensure successful deployments that drive user adoption and deliver measurable ROI.

Whether you're a small business implementing Sales Cloud for the first time or a large enterprise optimizing a complex multi-cloud environment, we have the expertise to help you succeed.`,
      capabilities: [
        'Full Salesforce implementation and customization',
        'Sales Cloud optimization for revenue growth',
        'Service Cloud for exceptional customer support',
        'Marketing Cloud for automated campaigns',
        'Nonprofit Cloud for donor management',
        'Custom app development on Salesforce Platform'
      ],
      certifications: [
        'Salesforce Certified Administrator',
        'Salesforce Certified Platform Developer',
        'Salesforce Certified Sales Cloud Consultant',
        'Salesforce Certified Service Cloud Consultant'
      ],
      results: [
        '40% increase in sales productivity',
        '35% improvement in customer satisfaction',
        '50% faster case resolution',
        '60% reduction in manual data entry'
      ]
    },
    'aws': {
      title: 'Amazon Web Services (AWS)',
      subtitle: 'AWS Migration & Optimization',
      description: 'Leverage the power of AWS for scalable, secure, and cost-effective cloud infrastructure.',
      fullDescription: `Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform. As an AWS Migration Acceleration Program (MAP) accredited partner, we help organizations migrate, optimize, and manage their AWS environments.

Our AWS practice covers the full spectrum of cloud services—from compute and storage to machine learning and analytics. We follow best practices for security, reliability, and cost optimization, ensuring your AWS investment delivers maximum value.

We've helped hundreds of clients successfully migrate to AWS, achieving significant cost savings, improved performance, and enhanced security posture.`,
      capabilities: [
        'Cloud migration with zero downtime',
        'Infrastructure as Code with Terraform/CloudFormation',
        'Serverless architecture development',
        'SageMaker AI and machine learning',
        'Disaster recovery and backup solutions',
        'Cost optimization and FinOps'
      ],
      certifications: [
        'AWS Certified Solutions Architect',
        'AWS Certified DevOps Engineer',
        'AWS Certified Security Specialty',
        'AWS Machine Learning Specialty'
      ],
      results: [
        '40% reduction in infrastructure costs',
        '99.99% uptime achievement',
        '60% faster deployment times',
        'Improved security posture'
      ]
    },
    'azure': {
      title: 'Microsoft Azure & Dynamics 365',
      subtitle: 'Hybrid Cloud & Business Applications',
      description: 'Enterprise-grade solutions on Microsoft Azure with seamless Dynamics 365 integration.',
      fullDescription: `Microsoft Azure provides the enterprise-grade cloud platform you need for mission-critical workloads. Combined with Dynamics 365, you get a complete business application suite that unifies CRM and ERP capabilities.

Our Azure practice specializes in hybrid cloud implementations that connect your on-premises infrastructure with Azure services. We help organizations leverage Azure OpenAI, machine learning, and advanced analytics to gain competitive advantages.

As Microsoft partners since 2008, we bring deep expertise across the entire Microsoft stack—from infrastructure to applications.`,
      capabilities: [
        'Hybrid cloud implementation',
        'Azure OpenAI integration',
        'Dynamics 365 implementation',
        'Modern workplace solutions (Microsoft 365)',
        'Data analytics with Azure Synapse',
        'IoT solutions with Azure IoT Hub'
      ],
      certifications: [
        'Azure Solutions Architect Expert',
        'Azure DevOps Engineer Expert',
        'Dynamics 365 Functional Consultant',
        'Azure Security Engineer'
      ],
      results: [
        'Seamless hybrid cloud operations',
        'Integrated business applications',
        'Enhanced security and compliance',
        'AI-powered business insights'
      ]
    }
  };

  const tech = technologiesData[id];

  if (!tech) {
    return (
      <div style={{ paddingTop: '80px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' }}>
        <h2>Technology not found</h2>
        <Button as={Link} to="/technologies" variant="primary" style={{ marginTop: '20px' }}>Back to Technologies</Button>
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
              <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px' }}>{tech.title}</h1>
              <p style={{ fontSize: '1.3rem', opacity: 0.95 }}>{tech.subtitle}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container style={{ padding: '60px 0' }}>
        <Row>
          <Col lg={7}>
            <h2 style={{ color: '#667eea', marginBottom: '20px' }}>Overview</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '20px' }}>{tech.description}</p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', whiteSpace: 'pre-line' }}>{tech.fullDescription}</p>
            
            <h3 style={{ color: '#667eea', marginTop: '40px', marginBottom: '20px' }}>Our Capabilities</h3>
            <Row>
              {tech.capabilities.map((capability, idx) => (
                <Col md={6} key={idx} className="mb-3">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FaCheckCircle style={{ color: '#10b981', marginRight: '10px', flexShrink: 0 }} />
                    <span style={{ color: '#ccc' }}>{capability}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={5}>
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '20px' }}>
              <Card.Body>
                <h4 style={{ marginBottom: '15px', color: '#667eea' }}>Certifications</h4>
                <ListGroup variant="flush" style={{ backgroundColor: 'transparent' }}>
                  {tech.certifications.map((cert, idx) => (
                    <ListGroup.Item key={idx} style={{ backgroundColor: 'transparent', color: '#667eea', borderColor: '#333', padding: '10px 0' }}>
                      <FaShieldAlt style={{ marginRight: '10px' }} /> {cert}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>

            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px' }}>
              <Card.Body>
                <h4 style={{ marginBottom: '15px', color: '#667eea' }}>Client Results</h4>
                <ListGroup variant="flush" style={{ backgroundColor: 'transparent' }}>
                  {tech.results.map((result, idx) => (
                    <ListGroup.Item key={idx} style={{ backgroundColor: 'transparent', color: '#10b981', borderColor: '#333', padding: '10px 0' }}>
                      <FaRocket style={{ marginRight: '10px' }} /> {result}
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
              <h3 style={{ marginBottom: '20px' }}>Ready to leverage {tech.title}?</h3>
              <p style={{ color: '#aaa', marginBottom: '30px' }}>Contact our {tech.title} experts to discuss your project.</p>
              <div>
                <Button as={Link} to="/contact" variant="primary" size="lg" style={{ marginRight: '15px', borderRadius: '50px' }}>Contact Us</Button>
                <Button as={Link} to="/technologies" variant="outline-light" size="lg" style={{ borderRadius: '50px' }}>Explore Other Technologies</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TechnologyDetail;