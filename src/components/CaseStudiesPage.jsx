// components/CaseStudiesPage.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaShoppingCart, FaServer, FaCloud, 
  FaDollarSign, FaShieldAlt, FaRocket, FaCheckCircle,
  FaArrowRight, FaCalendarAlt, FaIndustry
} from 'react-icons/fa';

const CaseStudiesPage = () => {
  const caseStudies = [
    { 
      id: 'zero-copy', 
      icon: <FaShoppingCart />, 
      title: 'Zero-Copy Revolution', 
      subtitle: 'Retail Data Federation', 
      category: 'Retail & E-commerce',
      date: 'January 2024',
      industry: 'Retail',
      challenge: 'Major retailer struggled with data silos across 500+ stores, leading to delayed analytics and poor inventory management.',
      solution: 'Implemented zero-copy data integration architecture using Apache Iceberg and AWS Lake Formation.',
      desc: 'Implemented zero-copy data integration for a major retailer, reducing data duplication by 95% and accelerating analytics by 10x.', 
      results: [
        '95% reduction in data duplication',
        '10x faster analytics queries',
        '$2M annual savings in storage costs',
        'Real-time inventory tracking across 500+ stores',
        '30% improvement in supply chain efficiency'
      ],
      technologies: ['Apache Iceberg', 'AWS Lake Formation', 'Python', 'Spark', 'Redshift'],
      metrics: {
        savings: '$2M',
        timeReduction: '95%',
        performance: '10x',
        stores: '500+'
      },
      testimonial: {
        quote: "The zero-copy architecture transformed our data operations completely.",
        author: "Sarah Johnson, CIO",
        company: "Global Retail Corp"
      }
    },
    { 
      id: 'project-titan', 
      icon: <FaServer />, 
      title: 'Project Titan', 
      subtitle: '2,000-Server Migration', 
      category: 'Cloud Migration',
      date: 'March 2024',
      industry: 'Financial Services',
      challenge: 'Legacy infrastructure causing frequent outages and high maintenance costs across 2,000+ servers.',
      solution: 'Executed phased migration to AWS using automated tools and blue-green deployment strategies.',
      desc: 'Executed a zero-downtime migration of 2,000 servers to AWS, transforming legacy infrastructure into a modern cloud architecture.', 
      results: [
        'Zero downtime during 6-month migration',
        '40% reduction in infrastructure costs',
        '99.99% availability achieved',
        'Automated disaster recovery in 15 minutes',
        '60% faster deployment cycles'
      ],
      technologies: ['AWS', 'Terraform', 'Kubernetes', 'Jenkins', 'CloudFormation'],
      metrics: {
        servers: '2,000+',
        costReduction: '40%',
        availability: '99.99%',
        timeline: '6 months'
      },
      testimonial: {
        quote: "Most seamless cloud migration we've ever experienced.",
        author: "Michael Chen, CTO",
        company: "First Financial Bank"
      }
    },
    { 
      id: 'mission-impact', 
      icon: <FaCloud />, 
      title: 'Mission Impact', 
      subtitle: 'Salesforce Nonprofit Cloud', 
      category: 'Nonprofit Technology',
      date: 'October 2023',
      industry: 'Nonprofit',
      challenge: 'Global nonprofit lacked unified donor management across 50 countries, resulting in fragmented communications.',
      solution: 'Deployed Salesforce Nonprofit Cloud with AI-driven donor insights and multilingual support.',
      desc: 'Scaled global nonprofit operations across 50 countries using Salesforce Nonprofit Cloud and AI-driven donor insights.', 
      results: [
        '300% increase in donor engagement',
        '50-country unified platform rollout',
        'Real-time impact reporting dashboards',
        '45% reduction in administrative overhead',
        '$5M additional funding secured'
      ],
      technologies: ['Salesforce', 'Einstein AI', 'Tableau', 'MuleSoft', 'Heroku'],
      metrics: {
        engagement: '300%',
        countries: '50+',
        funding: '$5M',
        timeSavings: '45%'
      },
      testimonial: {
        quote: "AI-powered insights revolutionized our fundraising strategy.",
        author: "Dr. Emily Watson, Executive Director",
        company: "Global Health Initiative"
      }
    }
  ];

  // Statistics for the page
  const stats = [
    { value: '100%', label: 'Success Rate', icon: <FaCheckCircle /> },
    { value: '50+', label: 'Projects Delivered', icon: <FaRocket /> },
    { value: '$50M+', label: 'Client Savings', icon: <FaDollarSign /> },
    { value: '99.99%', label: 'Uptime Achieved', icon: <FaShieldAlt /> }
  ];

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', position: 'relative', overflow: 'hidden' }}>
        <Container>
          <Row className="text-center text-white">
            <Col>
              <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>
                Success Stories
              </h1>
              <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto' }}>
                Real-world implementations delivering measurable results
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <Container style={{ marginTop: '-30px', marginBottom: '60px' }}>
        <Row className="g-4">
          {stats.map((stat, index) => (
            <Col md={3} key={index}>
              <Card style={{ 
                textAlign: 'center', 
                padding: '30px', 
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                border: 'none',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '2.5rem', color: '#667eea', marginBottom: '15px' }}>
                  {stat.icon}
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '5px', color: '#333' }}>
                  {stat.value}
                </h3>
                <p style={{ color: '#666', margin: 0 }}>{stat.label}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Case Studies List */}
      <Container style={{ paddingBottom: '80px' }}>
        {caseStudies.map((study, index) => (
          <Card key={index} style={{ 
            backgroundColor: 'white', 
            border: 'none', 
            borderRadius: '20px', 
            marginBottom: '40px', 
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <Row className="g-0">
              <Col md={4} style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: '40px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '5rem', color: 'white', marginBottom: '20px' }}>{study.icon}</div>
                <Badge style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '50px' }}>
                  {study.category}
                </Badge>
                <div style={{ marginTop: '20px', color: 'white', fontSize: '0.9rem' }}>
                  <FaCalendarAlt className="me-2" /> {study.date}
                </div>
              </Col>
              <Col md={8}>
                <Card.Body style={{ padding: '40px' }}>
                  <Badge style={{ backgroundColor: '#e3f2fd', color: '#667eea', marginBottom: '15px', padding: '6px 12px' }}>
                    <FaIndustry className="me-1" /> {study.industry}
                  </Badge>
                  <h5 style={{ color: '#667eea', marginBottom: '10px', fontWeight: '600' }}>{study.subtitle}</h5>
                  <h2 style={{ marginBottom: '20px', color: '#333', fontWeight: '800' }}>{study.title}</h2>
                  <p style={{ color: '#666', fontSize: '1rem', marginBottom: '20px', lineHeight: '1.6' }}>{study.desc}</p>
                  
                  <h4 style={{ marginBottom: '15px', fontSize: '1.1rem', fontWeight: '700', color: '#333' }}>Key Results:</h4>
                  <ul style={{ color: '#666', marginBottom: '20px', paddingLeft: '20px' }}>
                    {study.results.slice(0, 3).map((result, i) => (
                      <li key={i} style={{ marginBottom: '8px' }}>{result}</li>
                    ))}
                  </ul>
                  
                  <div style={{ marginBottom: '20px' }}>
                    {study.technologies.slice(0, 3).map((tech, i) => (
                      <Badge key={i} style={{ backgroundColor: '#f0f0f0', color: '#667eea', marginRight: '8px', padding: '6px 12px' }}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    as={Link} 
                    to={`/case-studies/${study.id}`} 
                    variant="primary" 
                    style={{ 
                      borderRadius: '50px', 
                      padding: '12px 30px',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      border: 'none'
                    }}
                  >
                    Read Full Case Study <FaArrowRight className="ms-2" />
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default CaseStudiesPage;