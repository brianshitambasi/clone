// components/IndustryDetail.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const IndustryDetail = () => {
  const { id } = useParams();
  
  const industryData = {
    healthcare: {
      title: 'Healthcare',
      description: 'Our healthcare solutions include HIPAA-compliant cloud infrastructure, AI-powered diagnostic tools, electronic health records integration, telemedicine platforms, and real-time patient monitoring systems. We ensure data security while enabling cutting-edge medical technology.',
      features: ['HIPAA Compliant Cloud', 'AI Diagnostics', 'EHR Integration', 'Telemedicine', 'Patient Monitoring']
    },
    finance: {
      title: 'Finance & Insurance',
      description: 'We provide enterprise-grade security solutions for financial institutions, including fraud detection algorithms, blockchain integration, secure payment gateways, and regulatory compliance tools for fintech and insurance companies.',
      features: ['Fraud Detection', 'Blockchain Integration', 'Secure Payments', 'Regulatory Compliance', 'Risk Assessment']
    },
    manufacturing: {
      title: 'Manufacturing & Retail',
      description: 'Transform your manufacturing and retail operations with IoT sensors, real-time inventory tracking, predictive maintenance, automated warehouses, and hyper-personalized customer experiences powered by AI.',
      features: ['IoT Integration', 'Supply Chain Optimization', 'Predictive Maintenance', 'Automated Warehouses', 'Personalized Retail']
    },
    software: {
      title: 'Software & Hi-Tech',
      description: 'Scale your SaaS platform efficiently with our cloud-native solutions, microservices architecture, cost optimization strategies, and performance monitoring tools that help reduce COGS while maintaining high availability.',
      features: ['Cloud-Native Architecture', 'Microservices', 'Cost Optimization', 'Performance Monitoring', 'Auto-scaling']
    },
    professional: {
      title: 'Professional Services',
      description: 'Streamline your professional services with automated project management, resource allocation, time tracking, billing systems, and utilization analytics to maximize profitability and efficiency.',
      features: ['Project Automation', 'Resource Management', 'Time Tracking', 'Automated Billing', 'Utilization Analytics']
    }
  };
  
  const data = industryData[id] || {
    title: id,
    description: 'Detailed information about our solutions for this industry coming soon.',
    features: []
  };
  
  return (
    <div style={{ paddingTop: '80px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{data.title}</h1>
        <div style={{ 
          width: '60px', 
          height: '4px', 
          backgroundColor: '#667eea', 
          margin: '0 auto 30px auto',
          borderRadius: '2px'
        }}></div>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px', textAlign: 'left' }}>
          {data.description}
        </p>
        
        {data.features.length > 0 && (
          <>
            <h3 style={{ marginBottom: '20px', textAlign: 'left' }}>Key Solutions:</h3>
            <div style={{ textAlign: 'left', marginBottom: '40px' }}>
              {data.features.map((feature, idx) => (
                <div key={idx} style={{ 
                  padding: '10px 0', 
                  borderBottom: '1px solid #333',
                  fontSize: '1rem'
                }}>
                  ✓ {feature}
                </div>
              ))}
            </div>
          </>
        )}
        
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <Button as={Link} to="/industries" variant="outline-primary" style={{ borderRadius: '50px' }}>
            ← Back to Industries
          </Button>
          <Button as={Link} to="/contact" variant="primary" style={{ borderRadius: '50px' }}>
            Request Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetail;