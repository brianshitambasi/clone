// components/InsightsPage.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Modal, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaNewspaper, FaChartLine, FaMicrochip, FaCloud, FaShieldAlt, FaRobot, FaArrowRight, FaCalendar, FaUser, FaTag } from 'react-icons/fa';

const InsightsPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('trending');

  const featuredArticle = {
    title: 'The Future of Enterprise AI: Beyond Automation',
    description: 'How generative AI and agentic workflows are reshaping business operations, decision-making, and customer experiences across industries.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    author: 'Dr. Sarah Johnson',
    role: 'Chief Technology Officer',
    date: 'April 10, 2024',
    readTime: '8 min read',
    category: 'Artificial Intelligence',
    content: `
      The landscape of enterprise artificial intelligence has undergone a dramatic transformation over the past 18 months. What was once considered futuristic is now becoming table stakes for competitive advantage. Organizations are moving beyond simple automation to embrace agentic AI systems that can reason, plan, and execute complex tasks autonomously.

      Key trends shaping this evolution include:
      
      1. Autonomous Decision-Making: AI agents that can analyze scenarios, weigh alternatives, and make recommendations without human intervention.
      
      2. Multi-Agent Collaboration: Systems where multiple AI agents work together, each specializing in different domains, to solve complex problems.
      
      3. Explainable AI: Advanced transparency features that help stakeholders understand how AI arrives at conclusions.
      
      4. Ethical AI Frameworks: Built-in guardrails ensuring responsible AI deployment across sensitive applications.
      
      For enterprises, the message is clear: those who embrace these capabilities will lead their industries, while laggards risk obsolescence.
    `
  };

  const trendingTopics = [
    { 
      id: 1,
      title: 'Agentic AI: Why the "Chatbot" Era is Over', 
      description: 'The shift from reactive chatbots to proactive AI agents that understand context, remember conversations, and take meaningful action on behalf of users.',
      fullContent: 'The era of simple rule-based chatbots is ending. Agentic AI represents a paradigm shift where AI systems can understand intent, maintain context across conversations, access external tools, and execute complex workflows. Unlike traditional chatbots that respond to immediate queries, agentic AI remembers past interactions, learns user preferences, and proactively offers solutions before problems arise. This technology is transforming customer service, IT support, and business process automation.',
      tag: 'Trending', 
      category: 'AI',
      date: 'Mar 15, 2024',
      author: 'Michael Chen',
      readTime: '6 min',
      icon: <FaRobot />
    },
    { 
      id: 2,
      title: 'Cloud Sovereignty: Maintaining Data Control in a Multi-Cloud World', 
      description: 'Strategies for navigating data residency requirements, compliance standards, and vendor lock-in while leveraging multiple cloud providers.',
      fullContent: 'As organizations adopt multi-cloud strategies, maintaining data sovereignty has become paramount. Different countries have varying data residency requirements, from GDPR in Europe to local data protection laws in Asia and Africa. Cloud sovereignty solutions enable businesses to keep data within geographic boundaries while still benefiting from cloud scalability. Key approaches include hybrid architectures, edge computing, and sovereign cloud partnerships that ensure compliance without sacrificing performance.',
      tag: 'Trending', 
      category: 'Cloud',
      date: 'Mar 10, 2024',
      author: 'Elena Rodriguez',
      readTime: '7 min',
      icon: <FaCloud />
    },
    { 
      id: 3,
      title: 'Blockchain & IoT: Decentralized Trust and Edge Intelligence', 
      description: 'How combining blockchain technology with IoT devices creates tamper-proof data chains and enables autonomous machine-to-machine transactions.',
      fullContent: 'The convergence of blockchain and IoT is creating unprecedented opportunities for supply chain transparency, automated payments, and secure device communication. By recording IoT sensor data on distributed ledgers, organizations can create immutable audit trails that enhance trust among partners. Smart contracts enable automated triggers based on real-world conditions - for example, automatically releasing payment when temperature sensors confirm perishable goods arrived safely. This combination is revolutionizing logistics, manufacturing, and energy management.',
      tag: 'Trending', 
      category: 'Blockchain',
      date: 'Mar 5, 2024',
      author: 'David Okafor',
      readTime: '9 min',
      icon: <FaMicrochip />
    }
  ];

  const industryTopics = [
    { 
      id: 4,
      title: 'Fintech Innovation: Secure Cloud Ledgers and Automated Compliance', 
      description: 'Modern financial institutions are leveraging cloud-native ledgers and AI-driven compliance tools to reduce costs while improving security and regulatory adherence.',
      fullContent: 'The financial services industry is undergoing a radical transformation driven by cloud technology and artificial intelligence. Traditional banks are replacing legacy systems with cloud-native ledgers that offer real-time transaction processing, improved scalability, and enhanced security features. AI-powered compliance tools automatically monitor transactions for suspicious activity, reducing false positives by up to 70% while ensuring regulatory requirements are met. This combination enables faster payments, better fraud detection, and more personalized financial products.',
      tag: 'Fintech', 
      category: 'Finance',
      date: 'Mar 12, 2024',
      author: 'James Mwangi',
      readTime: '5 min',
      icon: <FaChartLine />
    },
    { 
      id: 5,
      title: 'Healthtech Privacy: The Intersection of Privacy and Predictive Diagnostics', 
      description: 'Balancing the promise of AI-driven diagnostics with stringent patient privacy requirements under HIPAA, GDPR, and emerging health data regulations.',
      fullContent: 'Healthcare providers face a unique challenge: leveraging AI for better diagnostics while protecting sensitive patient data. Advanced encryption techniques, federated learning, and differential privacy are enabling hospitals to train AI models without exposing individual patient records. Predictive diagnostics using medical imaging, genetic data, and electronic health records can identify diseases earlier than ever before, but must operate within strict compliance frameworks. Our solutions ensure HIPAA compliance while delivering cutting-edge diagnostic capabilities that save lives.',
      tag: 'Healthtech', 
      category: 'Healthcare',
      date: 'Mar 8, 2024',
      author: 'Dr. Patricia Amutabi',
      readTime: '6 min',
      icon: <FaShieldAlt />
    },
    { 
      id: 6,
      title: 'Sustainable IT: Reducing Carbon Footprint Through Cloud Optimization', 
      description: 'How organizations can reduce energy consumption and carbon emissions by optimizing cloud workloads and adopting green computing practices.',
      fullContent: 'Data centers account for approximately 1% of global electricity consumption, and that number is growing. Sustainable IT practices help organizations reduce their environmental impact while lowering operational costs. Key strategies include rightsizing cloud instances, scheduling non-critical workloads during off-peak hours, leveraging serverless architectures, and choosing cloud regions powered by renewable energy. Organizations implementing these practices typically see 20-30% reductions in both carbon emissions and cloud spending.',
      tag: 'Sustainability', 
      category: 'Green Tech',
      date: 'Mar 3, 2024',
      author: 'Grace Wanjiku',
      readTime: '4 min',
      icon: <FaNewspaper />
    }
  ];

  const handleReadMore = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const allArticles = [...trendingTopics, ...industryTopics];

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '80px 0', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <Badge bg="light" text="dark" style={{ marginBottom: '20px', padding: '8px 16px' }}>
                Latest Insights
              </Badge>
              <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px' }}>
                Thought Leadership That Drives Innovation
              </h1>
              <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '30px' }}>
                Expert perspectives on emerging technologies, industry trends, and digital transformation strategies.
              </p>
            </Col>
            <Col lg={5}>
              <div style={{ 
                background: 'rgba(255,255,255,0.1)', 
                borderRadius: '20px', 
                padding: '30px',
                backdropFilter: 'blur(10px)'
              }}>
                <h3>Featured Resource</h3>
                <p style={{ marginTop: '15px' }}>Download our 2024 Technology Outlook Report</p>
                <Button variant="light" as={Link} to="/contact">Get the Report →</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container style={{ padding: '80px 0' }}>
        {/* Featured Article Section */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: '#667eea' }}>Featured Article</h2>
          <p style={{ color: '#aaa', marginBottom: '30px' }}>In-depth analysis from our experts</p>
          
          <Card style={{ 
            backgroundColor: '#1a1a1a', 
            border: 'none', 
            borderRadius: '20px', 
            overflow: 'hidden',
            transition: 'transform 0.3s'
          }}>
            <Row className="g-0">
              <Col md={6}>
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '300px' }}
                />
              </Col>
              <Col md={6}>
                <div style={{ padding: '40px' }}>
                  <Badge bg="primary" style={{ marginBottom: '15px' }}>Featured</Badge>
                  <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{featuredArticle.title}</h2>
                  <p style={{ color: '#aaa', marginBottom: '20px', lineHeight: '1.6' }}>
                    {featuredArticle.description}
                  </p>
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', color: '#888', fontSize: '0.9rem' }}>
                    <span><FaUser style={{ marginRight: '5px' }} /> {featuredArticle.author}</span>
                    <span><FaCalendar style={{ marginRight: '5px' }} /> {featuredArticle.date}</span>
                    <span>📖 {featuredArticle.readTime}</span>
                  </div>
                  <Button 
                    onClick={() => handleReadMore(featuredArticle)}
                    variant="outline-primary"
                    style={{ borderRadius: '50px' }}
                  >
                    Read Full Article →
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </div>

        {/* Tab Navigation */}
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          className="mb-4"
          style={{ borderBottom: '1px solid #333' }}
        >
          <Tab eventKey="trending" title={
            <span><FaRobot style={{ marginRight: '8px' }} /> Trending Topics</span>
          }>
            <Row className="mt-4">
              {trendingTopics.map((topic) => (
                <Col md={4} key={topic.id} className="mb-4">
                  <Card style={{ 
                    backgroundColor: '#1a1a1a', 
                    border: 'none', 
                    borderRadius: '15px', 
                    padding: '25px', 
                    height: '100%',
                    transition: 'transform 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{ fontSize: '2rem', color: '#667eea', marginBottom: '15px' }}>
                      {topic.icon}
                    </div>
                    <Badge bg="primary" style={{ width: 'fit-content', marginBottom: '15px' }}>{topic.tag}</Badge>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{topic.title}</h3>
                    <p style={{ color: '#aaa', marginBottom: '15px', lineHeight: '1.5' }}>{topic.description}</p>
                    <div style={{ marginTop: 'auto' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', color: '#888', fontSize: '0.8rem' }}>
                        <span><FaCalendar /> {topic.date}</span>
                        <span>📖 {topic.readTime}</span>
                      </div>
                      <Button 
                        onClick={() => handleReadMore(topic)}
                        variant="link" 
                        style={{ color: '#667eea', textDecoration: 'none', padding: '0' }}
                      >
                        Read More <FaArrowRight />
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
          
          <Tab eventKey="industry" title={
            <span><FaChartLine style={{ marginRight: '8px' }} /> Industry Focus</span>
          }>
            <Row className="mt-4">
              {industryTopics.map((topic) => (
                <Col md={4} key={topic.id} className="mb-4">
                  <Card style={{ 
                    backgroundColor: '#1a1a1a', 
                    border: 'none', 
                    borderRadius: '15px', 
                    padding: '25px', 
                    height: '100%',
                    transition: 'transform 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{ fontSize: '2rem', color: '#764ba2', marginBottom: '15px' }}>
                      {topic.icon}
                    </div>
                    <Badge bg="info" style={{ width: 'fit-content', marginBottom: '15px' }}>{topic.tag}</Badge>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{topic.title}</h3>
                    <p style={{ color: '#aaa', marginBottom: '15px', lineHeight: '1.5' }}>{topic.description}</p>
                    <div style={{ marginTop: 'auto' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', color: '#888', fontSize: '0.8rem' }}>
                        <span><FaCalendar /> {topic.date}</span>
                        <span>📖 {topic.readTime}</span>
                      </div>
                      <Button 
                        onClick={() => handleReadMore(topic)}
                        variant="link" 
                        style={{ color: '#764ba2', textDecoration: 'none', padding: '0' }}
                      >
                        Read More <FaArrowRight />
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>

          <Tab eventKey="all" title={
            <span><FaNewspaper style={{ marginRight: '8px' }} /> All Insights</span>
          }>
            <Row className="mt-4">
              {allArticles.map((article) => (
                <Col md={6} key={article.id} className="mb-4">
                  <Card style={{ 
                    backgroundColor: '#1a1a1a', 
                    border: 'none', 
                    borderRadius: '15px', 
                    padding: '25px',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <Row>
                      <Col xs={3}>
                        <div style={{ fontSize: '2.5rem', color: '#667eea' }}>{article.icon}</div>
                      </Col>
                      <Col xs={9}>
                        <Badge bg={article.tag === 'Trending' ? 'primary' : 'info'} style={{ marginBottom: '10px' }}>
                          {article.category}
                        </Badge>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{article.title}</h4>
                        <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '10px' }}>{article.description.substring(0, 100)}...</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <small style={{ color: '#888' }}><FaCalendar /> {article.date}</small>
                          <Button 
                            onClick={() => handleReadMore(article)}
                            variant="link" 
                            size="sm"
                            style={{ color: '#667eea', textDecoration: 'none' }}
                          >
                            Read →
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>

        {/* Newsletter Section */}
        <div style={{ 
          marginTop: '80px', 
          padding: '60px', 
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
          borderRadius: '20px',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '15px' }}>Subscribe to Our Newsletter</h2>
          <p style={{ color: '#aaa', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            Get the latest insights delivered straight to your inbox. No spam, unsubscribe anytime.
          </p>
          <div style={{ display: 'flex', gap: '10px', maxWidth: '500px', margin: '0 auto' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ 
                flex: 1, 
                padding: '12px', 
                borderRadius: '8px', 
                border: '1px solid #333',
                backgroundColor: '#0a0a0a',
                color: 'white'
              }}
            />
            <Button variant="primary" style={{ borderRadius: '8px' }}>Subscribe</Button>
          </div>
        </div>
      </Container>

      {/* Article Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header style={{ backgroundColor: '#1a1a1a', borderBottom: '1px solid #333' }}>
          <Modal.Title style={{ color: 'white' }}>
            {selectedArticle?.title}
          </Modal.Title>
          <Button variant="close" onClick={() => setShowModal(false)} style={{ filter: 'invert(1)' }} />
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#0a0a0a', color: 'white', padding: '30px' }}>
          <div style={{ marginBottom: '20px', display: 'flex', gap: '15px', color: '#888', fontSize: '0.9rem' }}>
            <span><FaUser /> {selectedArticle?.author || 'Editorial Team'}</span>
            <span><FaCalendar /> {selectedArticle?.date}</span>
            <span>📖 {selectedArticle?.readTime || '5 min read'}</span>
            <span><FaTag /> {selectedArticle?.category || 'Insight'}</span>
          </div>
          <p style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
            {selectedArticle?.fullContent || selectedArticle?.description}
          </p>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#1a1a1a', borderTop: '1px solid #333' }}>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button as={Link} to="/contact" variant="primary">Discuss with an Expert →</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InsightsPage;