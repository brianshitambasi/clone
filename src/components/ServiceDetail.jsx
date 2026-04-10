// components/ServiceDetail.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FaCheckCircle, FaRocket, FaShieldAlt, FaClock, FaChartLine, FaUsers } from 'react-icons/fa';

const ServiceDetail = () => {
  const { id } = useParams();

  const servicesData = {
    'it-consulting': {
      title: 'IT Consulting & Digital Transformation Advisory',
      subtitle: 'Strategic guidance for your digital future',
      description: 'We provide comprehensive IT consulting services to help organizations navigate their digital transformation journey. Our expert advisors work closely with your team to identify opportunities, mitigate risks, and create actionable roadmaps for success.',
      fullDescription: `
        In today's rapidly evolving digital landscape, organizations need more than just technology—they need strategic guidance. Our IT consulting practice brings decades of experience across industries, helping businesses leverage technology as a competitive advantage.

        We begin with a thorough assessment of your current infrastructure, processes, and capabilities. This "postural assessment" identifies technical debt, security vulnerabilities, and areas for optimization. From there, we develop a customized transformation strategy that aligns with your business goals and budget constraints.

        Our methodology combines industry best practices with innovative approaches, ensuring you not only keep pace with competitors but leap ahead. We've helped hundreds of organizations reduce costs by 30%, improve time-to-market by 50%, and achieve ROI within 12-18 months.
      `,
      benefits: [
        '30-40% reduction in operational costs',
        '50% faster time-to-market for new products',
        'Improved security posture and compliance',
        'Enhanced scalability and flexibility',
        'Better alignment between IT and business goals'
      ],
      process: [
        { step: 'Discovery & Assessment', desc: 'Comprehensive evaluation of current state, technical debt, and opportunities' },
        { step: 'Strategy Development', desc: 'Custom roadmap creation with clear milestones and ROI projections' },
        { step: 'Implementation Planning', desc: 'Detailed execution plan with resource allocation and timeline' },
        { step: 'Execution & Support', desc: 'Hands-on implementation with continuous monitoring and optimization' }
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Salesforce', 'SAP'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
    },
    'software-engineering': {
      title: 'Software Engineering & Application Services',
      subtitle: 'Building robust, scalable applications',
      description: 'We design and develop custom software solutions tailored to your unique business needs. From cloud-native applications to enterprise systems, our engineering team delivers high-quality, maintainable code.',
      fullDescription: `
        Our software engineering practice specializes in building mission-critical applications that drive business value. We follow modern development methodologies including Agile, DevOps, and Continuous Integration/Continuous Deployment (CI/CD) to ensure rapid, reliable delivery.

        Whether you need a customer-facing web application, internal business system, or mobile app, our team has the expertise to bring your vision to life. We work with a wide range of technologies including Java, Python, .NET, Go, React, Angular, and Vue.js.

        Quality is at the forefront of everything we do. We implement comprehensive testing strategies, code reviews, and automated quality gates to ensure your application is reliable, secure, and performant. Our post-launch support ensures your system continues to evolve with your business needs.
      `,
      benefits: [
        'Custom solutions tailored to your exact requirements',
        'Scalable architecture that grows with your business',
        'Reduced technical debt through best practices',
        'Faster time-to-market with Agile methodologies',
        'Comprehensive documentation and knowledge transfer'
      ],
      process: [
        { step: 'Requirements Analysis', desc: 'Deep dive into your needs, goals, and constraints' },
        { step: 'Architecture Design', desc: 'Creating scalable, secure system architecture' },
        { step: 'Agile Development', desc: 'Iterative development with regular stakeholder feedback' },
        { step: 'Testing & QA', desc: 'Comprehensive testing including unit, integration, and performance' },
        { step: 'Deployment & Support', desc: 'Smooth launch with ongoing maintenance and updates' }
      ],
      technologies: ['Java', 'Python', '.NET', 'Go', 'React', 'Node.js', 'MongoDB', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
    },
    'managed-it': {
      title: 'Managed IT Services & Support',
      subtitle: '24/7 enterprise-grade support',
      description: 'Our managed IT services provide proactive monitoring, maintenance, and support for your entire technology stack. We ensure maximum uptime and performance while reducing operational overhead.',
      fullDescription: `
        In today's always-on business environment, IT downtime is not an option. Our managed services practice provides round-the-clock monitoring, proactive maintenance, and rapid response to issues before they impact your business.

        We establish dedicated Site Reliability Engineering (SRE) hubs staffed by experienced professionals who understand your infrastructure inside and out. Our tiered support model ensures issues are resolved quickly, with clear escalation paths and guaranteed service level agreements (SLAs).

        Beyond just keeping systems running, we focus on continuous improvement. Regular health checks, performance optimization, and security updates ensure your infrastructure remains secure, efficient, and aligned with business needs. We've helped clients achieve 99.99% uptime and reduce IT costs by 25-35%.
      `,
      benefits: [
        '99.99% uptime guarantee',
        '24/7/365 monitoring and support',
        'Reduced IT operational costs by 25-35%',
        'Proactive issue detection and resolution',
        'Access to expert engineers without hiring costs'
      ],
      process: [
        { step: 'Assessment & Onboarding', desc: 'Comprehensive infrastructure evaluation and setup' },
        { step: 'Monitoring Setup', desc: 'Implementation of advanced monitoring tools' },
        { step: '24/7 Support', desc: 'Round-the-clock incident response and resolution' },
        { step: 'Continuous Optimization', desc: 'Regular performance tuning and security updates' }
      ],
      technologies: ['AWS', 'Azure', 'VMware', 'Kubernetes', 'Docker', 'Prometheus', 'Grafana'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
    },
    'devops': {
      title: 'DevOps & Platform Engineering',
      subtitle: 'Accelerating delivery through automation',
      description: 'Transform your software delivery with modern DevOps practices. We implement CI/CD pipelines, infrastructure as code, and automated workflows to accelerate time-to-market.',
      fullDescription: `
        DevOps is more than just tools—it's a cultural and technical movement that breaks down silos between development and operations. Our DevOps practice helps organizations adopt modern practices that accelerate delivery, improve quality, and reduce risk.

        We implement comprehensive CI/CD pipelines that automate building, testing, and deployment. Infrastructure as Code (IaC) ensures your environments are reproducible, version-controlled, and auditable. Our "Golden Path" developer portals provide self-service capabilities that empower your teams.

        The results speak for themselves: 90% faster deployment times, 50% reduction in deployment failures, and significantly improved developer productivity. We've helped startups and enterprises alike transform their software delivery capabilities.
      `,
      benefits: [
        '90% faster deployment times',
        '50% reduction in deployment failures',
        'Improved developer productivity',
        'Better security through automated compliance',
        'Reduced infrastructure costs'
      ],
      process: [
        { step: 'Assessment', desc: 'Evaluation of current processes and tooling' },
        { step: 'Toolchain Selection', desc: 'Choosing the right tools for your needs' },
        { step: 'Pipeline Implementation', desc: 'Building automated CI/CD pipelines' },
        { step: 'Culture Transformation', desc: 'Training and process changes' },
        { step: 'Continuous Improvement', desc: 'Ongoing optimization and evolution' }
      ],
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Terraform', 'Kubernetes', 'Docker', 'ArgoCD'],
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop'
    },
    'qa': {
      title: 'Quality Assurance & Testing',
      subtitle: 'Ensuring quality at every step',
      description: 'Comprehensive testing services including automated, performance, security, and user acceptance testing. We ensure your software is reliable, secure, and user-friendly.',
      fullDescription: `
        Quality is not an afterthought—it's built into every stage of development. Our QA practice provides comprehensive testing services that catch issues early when they're cheapest to fix. We implement automated testing frameworks, performance testing, security testing, and user acceptance testing.

        Our shift-left approach integrates testing early in the development lifecycle, reducing bugs and accelerating delivery. We implement SAST (Static Application Security Testing) and DAST (Dynamic Application Security Testing) to identify security vulnerabilities before they reach production.

        Beyond traditional testing, we're pioneers in AI-driven testing that uses machine learning to predict where bugs are most likely to occur, optimizing testing efforts. Our clients typically see 70% fewer production bugs and 60% faster testing cycles.
      `,
      benefits: [
        '70% reduction in production bugs',
        '60% faster testing cycles',
        'Improved security posture',
        'Better user experience',
        'Reduced testing costs through automation'
      ],
      process: [
        { step: 'Test Strategy', desc: 'Comprehensive test planning and strategy' },
        { step: 'Automation Framework', desc: 'Building reusable test automation' },
        { step: 'Security Testing', desc: 'SAST/DAST implementation' },
        { step: 'Performance Testing', desc: 'Load and stress testing' },
        { step: 'Continuous Testing', desc: 'Integration into CI/CD pipeline' }
      ],
      technologies: ['Selenium', 'Cypress', 'Jest', 'OWASP ZAP', 'JMeter', 'Postman', 'TestRail'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
    }
  };

  const service = servicesData[id];

  if (!service) {
    return (
      <div style={{ paddingTop: '80px', textAlign: 'center' }}>
        <h2>Service not found</h2>
        <Button as={Link} to="/services">Back to Services</Button>
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
              <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px' }}>{service.title}</h1>
              <p style={{ fontSize: '1.3rem', opacity: 0.95 }}>{service.subtitle}</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Overview Section */}
      <Container style={{ padding: '60px 0' }}>
        <Row>
          <Col lg={7}>
            <h2 style={{ color: '#667eea', marginBottom: '20px' }}>Overview</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '20px' }}>
              {service.fullDescription.split('\n').map((para, idx) => (
                <span key={idx}>{para}<br /><br /></span>
              ))}
            </p>
          </Col>
          <Col lg={5}>
            <img src={service.image} alt={service.title} style={{ width: '100%', borderRadius: '15px', marginBottom: '20px' }} />
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px' }}>
              <Card.Body>
                <h4 style={{ marginBottom: '15px' }}>Key Benefits</h4>
                <ListGroup variant="flush" style={{ backgroundColor: 'transparent' }}>
                  {service.benefits.map((benefit, idx) => (
                    <ListGroup.Item key={idx} style={{ backgroundColor: 'transparent', color: '#ccc', borderColor: '#333', padding: '10px 0' }}>
                      <FaCheckCircle style={{ color: '#10b981', marginRight: '10px' }} /> {benefit}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Process Section */}
        <Row style={{ marginTop: '60px' }}>
          <Col>
            <h2 style={{ color: '#667eea', marginBottom: '40px', textAlign: 'center' }}>Our Process</h2>
            <Row>
              {service.process.map((step, idx) => (
                <Col md={3} key={idx} className="mb-4">
                  <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '20px', textAlign: 'center', height: '100%' }}>
                    <div style={{ fontSize: '2rem', color: '#667eea', marginBottom: '15px' }}>{idx + 1}</div>
                    <h4 style={{ marginBottom: '10px' }}>{step.step}</h4>
                    <p style={{ color: '#aaa', fontSize: '0.9rem' }}>{step.desc}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Technologies Section */}
        <Row style={{ marginTop: '60px' }}>
          <Col>
            <h2 style={{ color: '#667eea', marginBottom: '30px', textAlign: 'center' }}>Technologies We Use</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
              {service.technologies.map((tech, idx) => (
                <span key={idx} style={{ background: '#1a1a1a', padding: '10px 20px', borderRadius: '50px', color: '#667eea', border: '1px solid #667eea' }}>
                  {tech}
                </span>
              ))}
            </div>
          </Col>
        </Row>

        {/* CTA Section */}
        <Row style={{ marginTop: '60px' }}>
          <Col className="text-center">
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '40px' }}>
              <h3 style={{ marginBottom: '20px' }}>Ready to transform your business?</h3>
              <p style={{ color: '#aaa', marginBottom: '30px' }}>Contact us today to discuss how we can help you achieve your goals.</p>
              <div>
                <Button as={Link} to="/contact" variant="primary" size="lg" style={{ marginRight: '15px', borderRadius: '50px' }}>Get Started</Button>
                <Button as={Link} to="/services" variant="outline-light" size="lg" style={{ borderRadius: '50px' }}>Explore Other Services</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetail;