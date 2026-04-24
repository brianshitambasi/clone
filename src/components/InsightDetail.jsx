// components/InsightDetail.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaCalendar, FaUser, FaClock, FaShare, FaBookmark } from 'react-icons/fa';

const InsightDetail = () => {
  const { id } = useParams();

  // Complete insights data with all articles
  const insightsData = {
    // Trending Topics
    'agentic-ai': {
      title: 'Agentic AI: Why the "Chatbot" Era is Over',
      author: 'Michael Chen',
      role: 'AI Research Director',
      date: 'March 15, 2024',
      readTime: '6 min read',
      category: 'Artificial Intelligence',
      tag: 'Trending',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      excerpt: 'The shift from reactive chatbots to proactive AI agents that understand context, remember conversations, and take meaningful action.',
      content: `
        <p>The era of simple rule-based chatbots is ending. Agentic AI represents a paradigm shift where AI systems can understand intent, maintain context across conversations, access external tools, and execute complex workflows.</p>
        
        <h3>What Makes Agentic AI Different?</h3>
        <p>Unlike traditional chatbots that respond to immediate queries, agentic AI remembers past interactions, learns user preferences, and proactively offers solutions before problems arise. This technology is transforming customer service, IT support, and business process automation.</p>
        
        <div class="stats-box">
          <h4>Key Statistics</h4>
          <ul>
            <li>📊 65% of enterprises plan to deploy agentic AI by 2025</li>
            <li>⚡ 40-60% reduction in response times reported by early adopters</li>
            <li>💰 30% lower operational costs for customer service operations</li>
            <li>🎯 85% accuracy rate on complex multi-step tasks</li>
          </ul>
        </div>
        
        <h3>Key Capabilities</h3>
        <ul>
          <li><strong>Contextual Understanding:</strong> Maintains conversation history and user preferences across sessions</li>
          <li><strong>Tool Integration:</strong> Can access APIs, databases, and external services to complete tasks</li>
          <li><strong>Autonomous Execution:</strong> Takes action without constant human guidance</li>
          <li><strong>Learning & Adaptation:</strong> Improves over time based on feedback and outcomes</li>
          <li><strong>Multi-Agent Collaboration:</strong> Multiple AI agents work together on complex problems</li>
        </ul>
        
        <h3>Business Applications</h3>
        <p>Enterprises are deploying agentic AI across multiple functions:</p>
        <ul>
          <li><strong>Customer Support:</strong> Automated ticket resolution, intelligent routing, personalized responses</li>
          <li><strong>IT Helpdesk:</strong> Self-service password resets, software installation, troubleshooting guides</li>
          <li><strong>Employee Onboarding:</strong> Automated account setup, training assignment, policy guidance</li>
          <li><strong>Sales Assistance:</strong> Lead qualification, meeting scheduling, proposal generation</li>
          <li><strong>HR Operations:</strong> Benefits enrollment, leave requests, policy questions</li>
        </ul>
        
        <h3>Implementation Roadmap</h3>
        <p>To successfully implement agentic AI, organizations should follow this proven approach:</p>
        <ol>
          <li><strong>Assessment (2-4 weeks):</strong> Identify high-volume, low-complexity use cases</li>
          <li><strong>Data Preparation (4-6 weeks):</strong> Clean and structure data for AI training</li>
          <li><strong>Pilot Deployment (6-8 weeks):</strong> Launch with limited scope and users</li>
          <li><strong>Optimization (Ongoing):</strong> Collect feedback and improve responses</li>
          <li><strong>Scale (3-6 months):</strong> Expand to additional use cases and departments</li>
        </ol>
        
        <h3>Getting Started with MJ & Roberts</h3>
        <p>Our team of AI specialists can help you navigate the agentic AI landscape. We offer strategy workshops, proof-of-concept development, custom AI agent development, integration with existing systems, and ongoing optimization support.</p>
        
        <p><strong>Ready to explore agentic AI for your organization?</strong> Contact our team for a free consultation and discovery workshop.</p>
      `
    },
    'cloud-sovereignty': {
      title: 'Cloud Sovereignty: Maintaining Data Control in a Multi-Cloud World',
      author: 'Elena Rodriguez',
      role: 'Cloud Strategy Lead',
      date: 'March 10, 2024',
      readTime: '7 min read',
      category: 'Cloud Computing',
      tag: 'Trending',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
      excerpt: 'Strategies for navigating data residency requirements, compliance standards, and vendor lock-in while leveraging multiple cloud providers.',
      content: `
        <p>As organizations adopt multi-cloud strategies, maintaining data sovereignty has become paramount. Different countries have varying data residency requirements, from GDPR in Europe to local data protection laws in Asia and Africa.</p>
        
        <h3>Understanding Data Sovereignty</h3>
        <p>Data sovereignty refers to the concept that data is subject to the laws of the country where it is physically stored. This creates challenges for global organizations that need to move data across borders.</p>
        
        <div class="stats-box">
          <h4>Key Statistics</h4>
          <ul>
            <li>🌍 Over 120 countries have data protection laws</li>
            <li>📈 75% of organizations will adopt multi-cloud by 2025</li>
            <li>⚖️ GDPR fines exceeded €2.5 billion in 2023</li>
            <li>🔒 68% of CIOs cite data sovereignty as top cloud concern</li>
          </ul>
        </div>
        
        <h3>Key Strategies</h3>
        <ul>
          <li><strong>Hybrid Architectures:</strong> Keep sensitive data on-premise while leveraging cloud for analytics</li>
          <li><strong>Edge Computing:</strong> Process data locally before sending to central cloud</li>
          <li><strong>Sovereign Cloud Partnerships:</strong> Work with providers offering region-specific data centers</li>
          <li><strong>Data Classification:</strong> Identify which data types require specific geographic handling</li>
        </ul>
        
        <h3>Compliance Considerations by Region</h3>
        <ul>
          <li><strong>Europe (GDPR):</strong> Requires explicit consent and right to deletion</li>
          <li><strong>United States (CCPA, HIPAA):</strong> Consumer privacy and healthcare data protection</li>
          <li><strong>Africa:</strong> Kenya, South Africa, Nigeria have local data protection laws</li>
          <li><strong>Asia:</strong> Strict data localization in China, Singapore, and India</li>
        </ul>
        
        <p><strong>Concerned about data sovereignty?</strong> Schedule a compliance assessment with our team to identify risks and create your action plan.</p>
      `
    },
    'blockchain-iot': {
      title: 'Blockchain & IoT: Decentralized Trust and Edge Intelligence',
      author: 'David Okafor',
      role: 'Emerging Tech Lead',
      date: 'March 5, 2024',
      readTime: '9 min read',
      category: 'Blockchain',
      tag: 'Trending',
      image: 'https://images.unsplash.com/photo-1518544801976-3e159e50e2bb?w=800&h=400&fit=crop',
      excerpt: 'How combining blockchain technology with IoT devices creates tamper-proof data chains and enables autonomous machine-to-machine transactions.',
      content: `
        <p>The convergence of blockchain and IoT is creating unprecedented opportunities for supply chain transparency, automated payments, and secure device communication.</p>
        
        <h3>How Blockchain + IoT Works</h3>
        <p>By recording IoT sensor data on distributed ledgers, organizations can create immutable audit trails that enhance trust among partners. Smart contracts enable automated triggers based on real-world conditions.</p>
        
        <div class="stats-box">
          <h4>Key Statistics</h4>
          <ul>
            <li>📡 75 billion IoT devices expected by 2025</li>
            <li>🔗 Blockchain IoT market to reach $3.2 billion by 2026</li>
            <li>📦 30% supply chain cost reduction reported by adopters</li>
            <li>⚡ 50% faster dispute resolution with tamper-proof records</li>
          </ul>
        </div>
        
        <h3>Real-World Applications</h3>
        <ul>
          <li><strong>Supply Chain Tracking:</strong> Track products from origin to destination</li>
          <li><strong>Automated Payments:</strong> Smart contracts release payment when conditions are met</li>
          <li><strong>Maintenance Alerts:</strong> Trigger service requests when equipment needs attention</li>
          <li><strong>Energy Trading:</strong> Peer-to-peer energy transactions between smart meters</li>
          <li><strong>Pharmaceutical Cold Chain:</strong> Monitor vaccine temperatures in real-time</li>
        </ul>
        
        <h3>Getting Started</h3>
        <p>Our blockchain and IoT practice offers use case identification, proof-of-concept deployment in 8-12 weeks, integration with existing infrastructure, smart contract development, and training support.</p>
        
        <p><strong>Ready to explore blockchain + IoT for your business?</strong> Contact our emerging tech team for a workshop.</p>
      `
    },
    'generative-ai': {
      title: 'Generative AI in Enterprise: Beyond ChatGPT',
      author: 'Sarah Johnson',
      role: 'AI Research Lead',
      date: 'February 28, 2024',
      readTime: '8 min read',
      category: 'Artificial Intelligence',
      tag: 'Trending',
      image: 'https://images.unsplash.com/photo-1686191128892-3c6f6f5e7b1c?w=800&h=400&fit=crop',
      excerpt: 'How businesses are leveraging generative AI for content creation, code generation, and creative problem-solving at scale.',
      content: `
        <p>Generative AI is revolutionizing how enterprises create content, generate code, and solve complex problems. From automated report writing to AI-assisted software development, organizations are seeing 40-60% productivity gains.</p>
        
        <div class="stats-box">
          <h4>Key Statistics</h4>
          <ul>
            <li>🚀 75% of enterprises will adopt generative AI by 2026</li>
            <li>💡 40-60% productivity gains in creative tasks</li>
            <li>💰 30% reduction in content creation costs</li>
            <li>⚡ 50% faster software development cycles</li>
          </ul>
        </div>
        
        <h3>Key Applications</h3>
        <ul>
          <li><strong>Content Creation:</strong> Generate marketing copy, blog posts, and social media content</li>
          <li><strong>Code Generation:</strong> Accelerate development with AI-powered coding assistants</li>
          <li><strong>Data Analysis:</strong> Generate insights and summaries from complex datasets</li>
          <li><strong>Customer Support:</strong> Create personalized responses and support documentation</li>
        </ul>
        
        <h3>Getting Started</h3>
        <p>Ready to implement generative AI? Contact our team for a strategy workshop and pilot program.</p>
      `
    },

    // Industry Related
    'fintech-innovation': {
      title: 'Fintech Innovation: Secure Cloud Ledgers and Automated Compliance',
      author: 'James Mwangi',
      role: 'Financial Services Lead',
      date: 'March 12, 2024',
      readTime: '5 min read',
      category: 'Financial Services',
      tag: 'Industry Focus',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop',
      excerpt: 'Modern financial institutions are leveraging cloud-native ledgers and AI-driven compliance tools to reduce costs while improving security.',
      content: `
        <p>The financial services industry is undergoing a radical transformation driven by cloud technology and artificial intelligence. Traditional banks are replacing legacy systems with cloud-native ledgers that offer real-time transaction processing, improved scalability, and enhanced security features.</p>
        
        <h3>Key Innovations</h3>
        <ul>
          <li><strong>Cloud-Native Ledgers:</strong> Real-time transaction processing with built-in audit trails</li>
          <li><strong>AI-Powered Compliance:</strong> Automated transaction monitoring and suspicious activity detection</li>
          <li><strong>Open Banking APIs:</strong> Secure data sharing with third-party providers</li>
          <li><strong>Biometric Authentication:</strong> Enhanced security for digital banking</li>
        </ul>
        
        <div class="stats-box">
          <h4>Key Statistics</h4>
          <ul>
            <li>💰 40-60% reduction in compliance costs</li>
            <li>⚡ 10x faster transaction processing</li>
            <li>🔒 99.99% uptime with multi-region deployment</li>
            <li>📈 Real-time fraud detection and prevention</li>
          </ul>
        </div>
        
        <p><strong>Modernize your financial infrastructure</strong> with our fintech solutions. Contact us for a consultation.</p>
      `
    },
    'healthtech-privacy': {
      title: 'Healthtech Privacy: The Intersection of Privacy and Predictive Diagnostics',
      author: 'Dr. Patricia Amutabi',
      role: 'Healthcare Practice Lead',
      date: 'March 8, 2024',
      readTime: '6 min read',
      category: 'Healthcare',
      tag: 'Industry Focus',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop',
      excerpt: 'Balancing AI-driven diagnostics with stringent patient privacy requirements under HIPAA, GDPR, and emerging health data regulations.',
      content: `
        <p>Healthcare providers face a unique challenge: leveraging AI for better diagnostics while protecting sensitive patient data under HIPAA, GDPR, and local regulations.</p>
        
        <h3>Privacy-Preserving AI Techniques</h3>
        <ul>
          <li><strong>Federated Learning:</strong> Train AI models without moving patient data</li>
          <li><strong>Differential Privacy:</strong> Add statistical noise to protect individual records</li>
          <li><strong>Homomorphic Encryption:</strong> Compute on encrypted data without decryption</li>
          <li><strong>Synthetic Data:</strong> Generate realistic but anonymous patient data</li>
        </ul>
        
        <h3>Predictive Diagnostics Applications</h3>
        <ul>
          <li>🫀 Early detection of heart disease from ECG data</li>
          <li>🧠 Alzheimer's prediction from brain scans</li>
          <li>🩺 Diabetes risk assessment from electronic health records</li>
          <li>🔬 Cancer detection from medical imaging</li>
        </ul>
        
        <p><strong>Transform healthcare delivery while protecting patient privacy.</strong> Contact our healthtech team to learn more.</p>
      `
    },
    'sustainable-it': {
      title: 'Sustainable IT: Reducing Carbon Footprint Through Cloud Optimization',
      author: 'Grace Wanjiku',
      role: 'Sustainability Lead',
      date: 'March 3, 2024',
      readTime: '4 min read',
      category: 'Green Technology',
      tag: 'Industry Focus',
      image: 'https://images.unsplash.com/photo-1473341304170-971d5b1ac9d3?w=800&h=400&fit=crop',
      excerpt: 'How organizations can reduce energy consumption and carbon emissions by optimizing cloud workloads.',
      content: `
        <p>Data centers account for approximately 1% of global electricity consumption, and that number is growing. Sustainable IT practices help organizations reduce their environmental impact while lowering operational costs.</p>
        
        <div class="stats-box">
          <h4>Key Statistics</h4>
          <ul>
            <li>🌱 20-30% reduction in carbon emissions</li>
            <li>💰 20-30% reduction in cloud spending</li>
            <li>⚡ 15-25% improvement in energy efficiency</li>
            <li>📊 Real-time sustainability dashboards</li>
          </ul>
        </div>
        
        <h3>Key Optimization Strategies</h3>
        <ul>
          <li><strong>Rightsizing Instances:</strong> Match cloud resources to actual workload needs</li>
          <li><strong>Serverless Architectures:</strong> Reduce idle capacity with auto-scaling</li>
          <li><strong>Renewable Regions:</strong> Choose cloud regions powered by clean energy</li>
          <li><strong>Storage Optimization:</strong> Tier data based on access frequency</li>
        </ul>
        
        <p><strong>Make your IT operations sustainable.</strong> Contact us for a green IT assessment.</p>
      `
    },
    'manufacturing-40': {
      title: 'Industry 4.0: Smart Manufacturing and Predictive Maintenance',
      author: 'Robert Kimathi',
      role: 'Manufacturing Lead',
      date: 'February 25, 2024',
      readTime: '7 min read',
      category: 'Industry 4.0',
      tag: 'Industry Focus',
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=400&fit=crop',
      excerpt: 'How IoT sensors, AI analytics, and cloud platforms are transforming manufacturing operations and supply chains.',
      content: `
        <p>Industry 4.0 represents the fourth industrial revolution, combining IoT, AI, and cloud computing to create smart factories. Predictive maintenance alone can reduce machine downtime by 50% and extend equipment life by 20-40%.</p>
        
        <div class="stats-box">
          <h4>Key Statistics</h4>
          <ul>
            <li>🏭 50% reduction in machine downtime with predictive maintenance</li>
            <li>📈 20-40% extended equipment life</li>
            <li>💰 25% reduction in maintenance costs</li>
            <li>⚡ 30% improvement in overall equipment effectiveness</li>
          </ul>
        </div>
        
        <h3>Key Technologies</h3>
        <ul>
          <li><strong>IoT Sensors:</strong> Real-time monitoring of equipment health and performance</li>
          <li><strong>AI Analytics:</strong> Predictive maintenance and quality control</li>
          <li><strong>Cloud Platforms:</strong> Centralized data management and analytics</li>
          <li><strong>Digital Twins:</strong> Virtual replicas for simulation and optimization</li>
        </ul>
        
        <h3>Implementation Benefits</h3>
        <ul>
          <li>✅ Real-time production monitoring and optimization</li>
          <li>✅ Predictive maintenance to prevent breakdowns</li>
          <li>✅ Quality control with AI-powered visual inspection</li>
          <li>✅ Supply chain visibility and optimization</li>
        </ul>
        
        <p><strong>Ready to transform your manufacturing operations?</strong> Contact our Industry 4.0 experts for a consultation.</p>
      `
    }
  };

  // Get the insight data based on the ID from URL
  const insight = insightsData[id] || {
    title: 'Insight Article',
    author: 'Editorial Team',
    role: 'Content Team',
    date: 'Recent',
    readTime: '5 min read',
    category: 'Technology',
    tag: 'Insight',
    excerpt: 'Full article content is being prepared. Please check back soon for detailed insights on this topic.',
    content: `
      <p>We're currently developing comprehensive content for this topic. Our team of experts is researching and preparing detailed analysis.</p>
      
      <h3>What to Expect</h3>
      <p>This article will cover:</p>
      <ul>
        <li>Industry trends and statistics</li>
        <li>Best practices and implementation strategies</li>
        <li>Case studies and real-world examples</li>
        <li>Expert insights and recommendations</li>
      </ul>
      
      <div class="contact-box">
        <h4>Interested in this topic?</h4>
        <p>Contact our experts for a personalized consultation while we prepare the full article.</p>
        <a href="/contact" class="btn btn-primary">Contact Our Team →</a>
      </div>
    `
  };

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: '#ffffff' }}>
      <Container style={{ padding: '40px 0' }}>
        <Button 
          as={Link} 
          to="/insights" 
          variant="outline-light" 
          style={{ marginBottom: '30px', borderRadius: '50px' }}
        >
          <FaArrowLeft className="me-2" /> Back to Insights
        </Button>

        <Row>
          <Col lg={8} className="mx-auto">
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '20px', overflow: 'hidden' }}>
              {insight.image && (
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
              )}
              <Card.Body style={{ padding: '40px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <Badge bg="primary" style={{ padding: '6px 12px' }}>{insight.tag || 'Insight'}</Badge>
                  <Badge bg="info" style={{ padding: '6px 12px' }}>{insight.category}</Badge>
                </div>
                
                <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px', color: '#ffffff' }}>
                  {insight.title}
                </h1>
                
                <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', color: '#999999', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                  <span><FaUser className="me-2" /> {insight.author} {insight.role && `(${insight.role})`}</span>
                  <span><FaCalendar className="me-2" /> {insight.date}</span>
                  <span><FaClock className="me-2" /> {insight.readTime}</span>
                </div>
                
                <div 
                  dangerouslySetInnerHTML={{ __html: insight.content }}
                  style={{ 
                    lineHeight: '1.8', 
                    fontSize: '1.05rem',
                    color: '#cccccc'
                  }}
                />
                
                <style>{`
                  .stats-box {
                    background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
                    border-left: 4px solid #667eea;
                    padding: 20px;
                    margin: 30px 0;
                    border-radius: 10px;
                  }
                  .stats-box h4 {
                    color: #667eea;
                    margin-bottom: 15px;
                  }
                  .stats-box ul {
                    margin-bottom: 0;
                  }
                  .stats-box li {
                    margin-bottom: 8px;
                  }
                  .contact-box {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    padding: 30px;
                    margin: 30px 0;
                    border-radius: 15px;
                    text-align: center;
                  }
                  .contact-box h4 {
                    color: white;
                    margin-bottom: 15px;
                  }
                  .contact-box p {
                    color: rgba(255,255,255,0.9);
                    margin-bottom: 20px;
                  }
                  .contact-box .btn-primary {
                    background: white;
                    color: #667eea;
                    border: none;
                    padding: 10px 30px;
                    border-radius: 50px;
                    font-weight: 600;
                  }
                  .contact-box .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                  }
                  h3 {
                    color: #667eea;
                    margin-top: 30px;
                    margin-bottom: 15px;
                  }
                  ul, ol {
                    margin-bottom: 20px;
                  }
                  li {
                    margin-bottom: 8px;
                  }
                  strong {
                    color: #667eea;
                  }
                `}</style>
                
                <hr style={{ borderColor: '#333', margin: '40px 0' }} />
                
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Button variant="outline-primary" style={{ borderRadius: '50px' }}>
                    <FaShare className="me-2" /> Share
                  </Button>
                  <Button variant="outline-secondary" style={{ borderRadius: '50px' }}>
                    <FaBookmark className="me-2" /> Save
                  </Button>
                  <Button as={Link} to="/contact" variant="primary" style={{ borderRadius: '50px' }}>
                    Discuss with Expert
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InsightDetail;