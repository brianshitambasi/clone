// components/AboutPage.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaShieldAlt, FaNetworkWired, FaChartLine } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '20px' }}>
                Engineering Resilience into the Global Enterprise
              </h1>
              <p style={{ fontSize: '1.3rem', opacity: 0.95 }}>
                Strategic Guardrails for the Autonomous Era
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ padding: '80px 0' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '30px', color: '#667eea' }}>
                The Genesis of MJ&Roberts
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '20px' }}>
                MJ&Roberts was founded to bridge the Innovation-Infrastructure Gap. As global entities rushed toward cloud and AI, 
                they inadvertently created <strong>"Brittle Ecosystems"</strong>—fragmented data, unmanaged technical debt, 
                and misaligned multi-cloud environments.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' }}>
                We provide the architectural discipline required to transform these liabilities into high-velocity assets.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ padding: '80px 0', backgroundColor: '#111' }}>
        <Container>
          <h2 className="text-center" style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '50px', color: '#667eea' }}>
            The Value We Provide
          </h2>
          <Row>
            <Col md={4}>
              <Card className="text-center" style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '30px', height: '100%' }}>
                <FaShieldAlt style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Platform Neutrality</h3>
                <p style={{ color: '#aaa' }}>Expert Inter-Cloud Orchestration ensures your stack is dictated by business logic, not vendor lock-in.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center" style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '30px', height: '100%' }}>
                <FaNetworkWired style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Agentic Pioneers</h3>
                <p style={{ color: '#aaa' }}>Move beyond passive automation to Agentic AI, building autonomous systems that execute end-to-end business workflows.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center" style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '30px', height: '100%' }}>
                <FaChartLine style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Fiscal Sovereignty</h3>
                <p style={{ color: '#aaa' }}>Treat cloud spend as an engineering metric, applying rigorous FinOps to ensure every cent drives measurable ROI.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;