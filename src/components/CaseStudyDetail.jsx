// components/CaseStudyDetail.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { 
  FaArrowLeft, FaCheckCircle, FaCalendarAlt, FaIndustry, FaGlobe, FaUsers
} from 'react-icons/fa';

const CaseStudyDetail = () => {
  const { id } = useParams();
  
  // Full case studies data
  const caseStudies = {
    'zero-copy': {
      title: 'Zero-Copy Revolution',
      subtitle: 'Retail Data Federation',
      category: 'Retail & E-commerce',
      industry: 'Retail',
      date: 'January 2024',
      client: 'Global Retail Corp',
      location: 'United States',
      challenge: 'A major international retailer with over 500 stores across 3 continents struggled with severe data fragmentation. Their legacy systems created data silos across stores, online platforms, and supply chain systems, leading to delayed analytics, poor inventory management, and millions in lost revenue from stockouts and overstock situations.',
      solution: 'We implemented a zero-copy data integration architecture using Apache Iceberg and AWS Lake Formation. This approach eliminated data duplication while providing a unified view across all systems. The solution included real-time data pipelines, automated data quality checks, and a centralized analytics platform.',
      implementation: 'The 6-month implementation followed an agile methodology with weekly sprints. We started with a pilot in 50 stores, then progressively rolled out to all locations. Key phases included: data source integration, pipeline development, quality assurance, user training, and full deployment.',
      results: [
        '95% reduction in data duplication across all systems',
        '10x faster analytics queries from hours to minutes',
        '$2M annual savings in storage and compute costs',
        'Real-time inventory tracking across 500+ stores',
        '30% improvement in supply chain efficiency',
        'Zero data loss during migration'
      ],
      technologies: ['Apache Iceberg', 'AWS Lake Formation', 'Python', 'Apache Spark', 'Amazon Redshift', 'dbt', 'Airflow'],
      metrics: {
        'Data Reduction': '95%',
        'Query Speed': '10x',
        'Annual Savings': '$2M',
        'Stores Integrated': '500+',
        'Efficiency Gain': '30%',
        'Uptime': '99.99%'
      },
      testimonial: {
        quote: "The zero-copy architecture has completely transformed how we handle data. What used to take days now takes minutes, and we're making data-driven decisions in real-time.",
        author: "Sarah Johnson",
        title: "Chief Information Officer",
        company: "Global Retail Corp"
      }
    },
    'project-titan': {
      title: 'Project Titan',
      subtitle: '2,000-Server Migration',
      category: 'Cloud Migration',
      industry: 'Financial Services',
      date: 'March 2024',
      client: 'First Financial Bank',
      location: 'United Kingdom',
      challenge: 'A leading financial institution faced critical challenges with their on-premise infrastructure. Over 2,000 legacy servers were causing frequent outages, security vulnerabilities, and maintenance costs exceeding $5M annually. The bank needed to modernize without any service disruption to their 2 million customers.',
      solution: 'We executed a phased, zero-downtime migration to AWS using infrastructure-as-code and blue-green deployment strategies. The solution included automated failover systems, comprehensive security controls, and a multi-region architecture for disaster recovery.',
      implementation: 'The 6-month journey included detailed discovery, architecture design, proof-of-concept validation, pilot migration of non-critical systems, and finally production workloads. Each phase included rigorous testing and rollback procedures.',
      results: [
        'Zero downtime throughout the 6-month migration',
        '40% reduction in infrastructure operating costs',
        '99.99% availability achieved post-migration',
        'Automated disaster recovery in under 15 minutes',
        '60% faster deployment cycles for new features',
        'Improved security compliance with automated audits'
      ],
      technologies: ['AWS', 'Terraform', 'Kubernetes', 'Jenkins', 'CloudFormation', 'Datadog', 'GitHub Actions'],
      metrics: {
        'Servers Migrated': '2,000+',
        'Cost Reduction': '40%',
        'Availability': '99.99%',
        'Deployment Speed': '60%',
        'Recovery Time': '15 min',
        'Annual Savings': '$5M'
      },
      testimonial: {
        quote: "Project Titan exceeded all our expectations. The team delivered a flawless migration with zero impact to our customers while significantly reducing our costs.",
        author: "Michael Chen",
        title: "Chief Technology Officer",
        company: "First Financial Bank"
      }
    },
    'mission-impact': {
      title: 'Mission Impact',
      subtitle: 'Salesforce Nonprofit Cloud',
      category: 'Nonprofit Technology',
      industry: 'Nonprofit',
      date: 'October 2023',
      client: 'Global Health Initiative',
      location: '50+ Countries',
      challenge: 'A global health nonprofit operating across 50 countries had fragmented donor management systems that couldn\'t communicate with each other. This resulted in duplicate outreach, missed opportunities, and inability to measure global impact effectively.',
      solution: 'We deployed Salesforce Nonprofit Cloud with Einstein AI analytics across all 50 countries. The solution included multilingual support, local compliance features, and real-time impact dashboards for donors and leadership.',
      implementation: 'The global rollout took 8 months and included: requirements gathering across regions, customization for local needs, data migration from 20+ legacy systems, comprehensive training programs, and phased go-live by region.',
      results: [
        '300% increase in donor engagement and retention',
        'Unified platform across all 50 countries',
        'Real-time impact reporting dashboards',
        '45% reduction in administrative overhead',
        '$5M in additional funding secured through AI insights',
        '24/7 global support system established'
      ],
      technologies: ['Salesforce', 'Einstein AI', 'Tableau', 'MuleSoft', 'Heroku', 'DocuSign', 'Stripe'],
      metrics: {
        'Donor Engagement': '300%',
        'Countries Covered': '50+',
        'Cost Reduction': '45%',
        'New Funding': '$5M',
        'Users Trained': '1,000+',
        'Daily Transactions': '10,000+'
      },
      testimonial: {
        quote: "This implementation has revolutionized how we manage donor relationships and measure our impact. The AI insights have been game-changing for our fundraising strategy.",
        author: "Dr. Emily Watson",
        title: "Executive Director",
        company: "Global Health Initiative"
      }
    }
  };

  const study = caseStudies[id];

  if (!study) {
    return (
      <div style={{ paddingTop: '100px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        <Container>
          <h1 style={{ marginBottom: '20px' }}>Case Study Not Found</h1>
          <Button as={Link} to="/case-studies" variant="primary">Back to Case Studies</Button>
        </Container>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '60px 0', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <Container>
          <Button 
            as={Link} 
            to="/case-studies" 
            variant="light" 
            style={{ 
              marginBottom: '30px',
              borderRadius: '50px'
            }}
          >
            <FaArrowLeft className="me-2" /> Back to Case Studies
          </Button>
          <Row>
            <Col lg={8}>
              <Badge style={{ backgroundColor: 'rgba(255,255,255,0.2)', marginBottom: '15px', padding: '8px 16px' }}>
                {study.category}
              </Badge>
              <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px' }}>
                {study.title}
              </h1>
              <p style={{ fontSize: '1.2rem', opacity: 0.95 }}>{study.subtitle}</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quick Info Cards */}
      <Container style={{ marginTop: '-30px', marginBottom: '40px' }}>
        <Row className="g-4">
          <Col md={3}>
            <Card style={{ borderRadius: '15px', padding: '20px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
              <FaCalendarAlt size={30} style={{ color: '#667eea', marginBottom: '10px' }} />
              <h6 style={{ margin: 0, color: '#666' }}>Project Date</h6>
              <p style={{ fontWeight: '700', margin: 0 }}>{study.date}</p>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ borderRadius: '15px', padding: '20px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
              <FaIndustry size={30} style={{ color: '#667eea', marginBottom: '10px' }} />
              <h6 style={{ margin: 0, color: '#666' }}>Industry</h6>
              <p style={{ fontWeight: '700', margin: 0 }}>{study.industry}</p>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ borderRadius: '15px', padding: '20px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
              <FaUsers size={30} style={{ color: '#667eea', marginBottom: '10px' }} />
              <h6 style={{ margin: 0, color: '#666' }}>Client</h6>
              <p style={{ fontWeight: '700', margin: 0 }}>{study.client}</p>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ borderRadius: '15px', padding: '20px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
              <FaGlobe size={30} style={{ color: '#667eea', marginBottom: '10px' }} />
              <h6 style={{ margin: 0, color: '#666' }}>Location</h6>
              <p style={{ fontWeight: '700', margin: 0 }}>{study.location}</p>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Main Content */}
      <Container style={{ paddingBottom: '60px' }}>
        <Row>
          <Col lg={8}>
            {/* Challenge */}
            <Card style={{ marginBottom: '30px', borderRadius: '15px', border: 'none', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
              <Card.Body style={{ padding: '30px' }}>
                <h3 style={{ marginBottom: '20px', color: '#333', fontWeight: '700' }}>The Challenge</h3>
                <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1rem' }}>{study.challenge}</p>
              </Card.Body>
            </Card>

            {/* Solution */}
            <Card style={{ marginBottom: '30px', borderRadius: '15px', border: 'none', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
              <Card.Body style={{ padding: '30px' }}>
                <h3 style={{ marginBottom: '20px', color: '#333', fontWeight: '700' }}>Our Solution</h3>
                <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1rem' }}>{study.solution}</p>
                
                <h4 style={{ marginTop: '20px', marginBottom: '15px', fontWeight: '600' }}>Technologies Used</h4>
                <div style={{ marginBottom: '20px' }}>
                  {study.technologies.map((tech, i) => (
                    <Badge key={i} style={{ backgroundColor: '#f0f0f0', color: '#667eea', marginRight: '8px', marginBottom: '8px', padding: '8px 16px' }}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>

            {/* Implementation */}
            {study.implementation && (
              <Card style={{ marginBottom: '30px', borderRadius: '15px', border: 'none', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
                <Card.Body style={{ padding: '30px' }}>
                  <h3 style={{ marginBottom: '20px', color: '#333', fontWeight: '700' }}>Implementation Approach</h3>
                  <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1rem' }}>{study.implementation}</p>
                </Card.Body>
              </Card>
            )}

            {/* Results */}
            <Card style={{ marginBottom: '30px', borderRadius: '15px', border: 'none', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
              <Card.Body style={{ padding: '30px' }}>
                <h3 style={{ marginBottom: '20px', color: '#333', fontWeight: '700' }}>Key Results</h3>
                <Row>
                  {Object.entries(study.metrics).map(([key, value], i) => (
                    <Col md={6} key={i} className="mb-3">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FaCheckCircle style={{ color: '#25D366', marginRight: '10px' }} />
                        <div>
                          <strong style={{ color: '#333' }}>{value}</strong>
                          <p style={{ margin: 0, color: '#666', fontSize: '0.85rem' }}>{key}</p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
                <ul style={{ color: '#666', marginTop: '15px', paddingLeft: '20px' }}>
                  {study.results.map((result, i) => (
                    <li key={i} style={{ marginBottom: '10px' }}>{result}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            {/* Testimonial */}
            {study.testimonial && (
              <Card style={{ 
                marginBottom: '30px', 
                borderRadius: '15px', 
                border: 'none', 
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white'
              }}>
                <Card.Body style={{ padding: '30px' }}>
                  <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px' }}>
                    "{study.testimonial.quote}"
                  </p>
                  <div>
                    <strong>{study.testimonial.author}</strong>
                    <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>
                      {study.testimonial.title}, {study.testimonial.company}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            )}

            {/* Action Buttons */}
            <Card style={{ borderRadius: '15px', border: 'none', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
              <Card.Body style={{ padding: '30px', textAlign: 'center' }}>
                <h5 style={{ marginBottom: '20px' }}>Ready to achieve similar results?</h5>
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="primary" 
                  style={{ 
                    width: '100%', 
                    marginBottom: '10px',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    border: 'none'
                  }}
                >
                  Contact Our Team
                </Button>
                <Button as={Link} to="/services" variant="outline-primary" style={{ width: '100%' }}>
                  Explore Our Services
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CaseStudyDetail;