// src/components/InsightsPage.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaNewspaper, FaChartLine, FaMicrochip, FaCloud, FaShieldAlt, FaRobot, FaCalendar, FaUser, FaFile, FaDownload, FaFire, FaIndustry, FaBook } from 'react-icons/fa';

const InsightsPage = () => {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState('all');

  // Featured Article
  const featuredArticle = {
    id: 'agentic-ai',
    title: 'The Future of Enterprise AI: Beyond Automation',
    description: 'How generative AI and agentic workflows are reshaping business operations, decision-making, and customer experiences across industries.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    author: 'Dr. Sarah Johnson',
    role: 'Chief Technology Officer',
    date: 'April 10, 2024',
    readTime: '8 min read',
    category: 'Artificial Intelligence',
    type: 'featured'
  };

  // Trending Topics Data
  const trendingTopics = [
    { 
      id: 'agentic-ai',
      title: 'Agentic AI: Why the "Chatbot" Era is Over', 
      description: 'The shift from reactive chatbots to proactive AI agents that understand context, remember conversations, and take meaningful action on behalf of users.',
      tag: 'Trending', 
      category: 'Artificial Intelligence',
      date: 'March 15, 2024',
      author: 'Michael Chen',
      readTime: '6 min',
      icon: <FaRobot />,
      views: '12.5K views'
    },
    { 
      id: 'cloud-sovereignty',
      title: 'Cloud Sovereignty: Maintaining Data Control in a Multi-Cloud World', 
      description: 'Strategies for navigating data residency requirements, compliance standards, and vendor lock-in while leveraging multiple cloud providers.',
      tag: 'Trending', 
      category: 'Cloud Computing',
      date: 'March 10, 2024',
      author: 'Elena Rodriguez',
      readTime: '7 min',
      icon: <FaCloud />,
      views: '8.2K views'
    },
    { 
      id: 'blockchain-iot',
      title: 'Blockchain & IoT: Decentralized Trust and Edge Intelligence', 
      description: 'How combining blockchain technology with IoT devices creates tamper-proof data chains and enables autonomous machine-to-machine transactions.',
      tag: 'Trending', 
      category: 'Blockchain',
      date: 'March 5, 2024',
      author: 'David Okafor',
      readTime: '9 min',
      icon: <FaMicrochip />,
      views: '6.8K views'
    },
    { 
      id: 'generative-ai',
      title: 'Generative AI in Enterprise: Beyond ChatGPT', 
      description: 'How businesses are leveraging generative AI for content creation, code generation, and creative problem-solving at scale.',
      tag: 'Trending', 
      category: 'Artificial Intelligence',
      date: 'February 28, 2024',
      author: 'Sarah Johnson',
      readTime: '8 min',
      icon: <FaRobot />,
      views: '15.2K views'
    }
  ];

  // Industry Related Data
  const industryTopics = [
    { 
      id: 'fintech-innovation',
      title: 'Fintech Innovation: Secure Cloud Ledgers and Automated Compliance', 
      description: 'Modern financial institutions are leveraging cloud-native ledgers and AI-driven compliance tools to reduce costs while improving security.',
      tag: 'Financial Services', 
      category: 'Fintech',
      date: 'March 12, 2024',
      author: 'James Mwangi',
      readTime: '5 min',
      icon: <FaChartLine />,
      industry: 'Banking & Finance'
    },
    { 
      id: 'healthtech-privacy',
      title: 'Healthtech Privacy: The Intersection of Privacy and Predictive Diagnostics', 
      description: 'Balancing the promise of AI-driven diagnostics with stringent patient privacy requirements under HIPAA and GDPR.',
      tag: 'Healthcare', 
      category: 'Healthtech',
      date: 'March 8, 2024',
      author: 'Dr. Patricia Amutabi',
      readTime: '6 min',
      icon: <FaShieldAlt />,
      industry: 'Healthcare'
    },
    { 
      id: 'sustainable-it',
      title: 'Sustainable IT: Reducing Carbon Footprint Through Cloud Optimization', 
      description: 'How organizations can reduce energy consumption and carbon emissions by optimizing cloud workloads.',
      tag: 'Sustainability', 
      category: 'Green Technology',
      date: 'March 3, 2024',
      author: 'Grace Wanjiku',
      readTime: '4 min',
      icon: <FaNewspaper />,
      industry: 'Energy & Utilities'
    },
    { 
      id: 'manufacturing-40',
      title: 'Industry 4.0: Smart Manufacturing and Predictive Maintenance', 
      description: 'How IoT sensors, AI analytics, and cloud platforms are transforming manufacturing operations.',
      tag: 'Manufacturing', 
      category: 'Industry 4.0',
      date: 'February 25, 2024',
      author: 'Robert Kimathi',
      readTime: '7 min',
      icon: <FaMicrochip />,
      industry: 'Manufacturing'
    }
  ];

  // Whitepapers Data
  const whitepapers = [
    { 
      id: 'wp-2024-ai',
      title: 'Enterprise AI Strategy 2024: From Pilot to Production', 
      description: 'A comprehensive guide to scaling artificial intelligence initiatives across your organization.',
      tag: 'Premium Content', 
      category: 'AI Strategy',
      date: 'January 2024',
      author: 'AI Research Team',
      readTime: '45 min',
      icon: <FaFile />,
      pages: 28
    },
    { 
      id: 'wp-cloud-migration',
      title: 'Cloud Migration Playbook: Proven Patterns for Success', 
      description: 'Battle-tested strategies for migrating enterprise workloads to the cloud with minimal disruption.',
      tag: 'Premium Content', 
      category: 'Cloud Computing',
      date: 'December 2023',
      author: 'Cloud Center of Excellence',
      readTime: '35 min',
      icon: <FaFile />,
      pages: 32
    },
    { 
      id: 'wp-cybersecurity',
      title: 'Zero Trust Architecture: A Practical Implementation Guide', 
      description: 'How to implement zero trust security principles in modern cloud-native and hybrid environments.',
      tag: 'Premium Content', 
      category: 'Security',
      date: 'November 2023',
      author: 'Security Practice',
      readTime: '40 min',
      icon: <FaFile />,
      pages: 35
    }
  ];

  const handleReadMore = (articleId) => {
    navigate(`/insights/${articleId}`);
  };

  const handleDownload = (whitepaper) => {
    alert(`Downloading: ${whitepaper.title}\n\nIn production, this would download the PDF file.`);
  };

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: '#ffffff' }}>
      {/* Hero Section */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <Row>
            <Col lg={8}>
              <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px', color: '#ffffff' }}>
                Insights & Research
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', marginBottom: '0' }}>
                Expert perspectives on emerging technologies and digital transformation
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container style={{ padding: '60px 0' }}>
        {/* TABS Navigation */}
        <div style={{ marginBottom: '40px', borderBottom: '1px solid #333' }}>
          <Nav variant="tabs" activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
            <Nav.Item>
              <Nav.Link eventKey="all" style={{ color: activeKey === 'all' ? '#667eea' : '#aaa' }}>
                <FaNewspaper className="me-2" /> All Insights
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="trending" style={{ color: activeKey === 'trending' ? '#667eea' : '#aaa' }}>
                <FaFire className="me-2" /> Trending Topics
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="industry" style={{ color: activeKey === 'industry' ? '#667eea' : '#aaa' }}>
                <FaIndustry className="me-2" /> Industry Related
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="whitepapers" style={{ color: activeKey === 'whitepapers' ? '#667eea' : '#aaa' }}>
                <FaBook className="me-2" /> Whitepapers
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        {/* ALL INSIGHTS TAB */}
        {activeKey === 'all' && (
          <div>
            {/* Featured Article */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ color: '#667eea', marginBottom: '20px' }}>Featured Insight</h3>
              <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '20px', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => handleReadMore(featuredArticle.id)}>
                <Row className="g-0">
                  <Col md={5}>
                    <img src={featuredArticle.image} alt={featuredArticle.title} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '280px' }} />
                  </Col>
                  <Col md={7}>
                    <div style={{ padding: '30px' }}>
                      <Badge bg="primary" style={{ marginBottom: '15px' }}>Featured</Badge>
                      <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#ffffff' }}>{featuredArticle.title}</h2>
                      <p style={{ color: '#aaa', marginBottom: '20px' }}>{featuredArticle.description}</p>
                      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', color: '#888', fontSize: '0.85rem' }}>
                        <span><FaUser /> {featuredArticle.author}</span>
                        <span><FaCalendar /> {featuredArticle.date}</span>
                      </div>
                      <Button variant="outline-primary" style={{ borderRadius: '50px' }}>Read Full Article →</Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            </div>

            {/* All Articles */}
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>Latest Insights</h3>
            <Row>
              {[...trendingTopics, ...industryTopics].map((article) => (
                <Col md={6} key={article.id} className="mb-4">
                  <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px', cursor: 'pointer', height: '100%' }}
                    onClick={() => handleReadMore(article.id)}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                      <div style={{ fontSize: '2rem', color: '#667eea' }}>{article.icon}</div>
                      <div>
                        <Badge bg={article.tag === 'Trending' ? 'danger' : 'info'} style={{ marginBottom: '5px' }}>{article.tag}</Badge>
                        <h4 style={{ fontSize: '1rem', color: '#aaa', margin: 0 }}>{article.category}</h4>
                      </div>
                    </div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#ffffff' }}>{article.title}</h3>
                    <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '15px' }}>{article.description.substring(0, 100)}...</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                      <small style={{ color: '#888' }}><FaCalendar /> {article.date}</small>
                      <Button variant="link" style={{ color: '#667eea', textDecoration: 'none', padding: 0 }}>Read More →</Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}

        {/* TRENDING TOPICS TAB */}
        {activeKey === 'trending' && (
          <Row>
            {trendingTopics.map((topic) => (
              <Col md={6} lg={4} key={topic.id} className="mb-4">
                <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px', cursor: 'pointer', height: '100%', transition: 'transform 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  onClick={() => handleReadMore(topic.id)}>
                  <div style={{ fontSize: '2.5rem', color: '#667eea', marginBottom: '15px' }}>{topic.icon}</div>
                  <Badge bg="danger" style={{ width: 'fit-content', marginBottom: '15px' }}>🔥 {topic.tag}</Badge>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#ffffff' }}>{topic.title}</h3>
                  <p style={{ color: '#aaa', fontSize: '0.85rem', marginBottom: '15px', lineHeight: '1.5' }}>{topic.description}</p>
                  <div style={{ marginTop: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#888', fontSize: '0.75rem' }}>
                      <span><FaCalendar /> {topic.date}</span>
                      <span>👁️ {topic.views}</span>
                      <span>📖 {topic.readTime}</span>
                    </div>
                    <Button variant="outline-primary" size="sm" style={{ borderRadius: '50px', width: '100%' }}>Read More →</Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        {/* INDUSTRY RELATED TAB */}
        {activeKey === 'industry' && (
          <Row>
            {industryTopics.map((topic) => (
              <Col md={6} key={topic.id} className="mb-4">
                <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px', cursor: 'pointer', height: '100%', transition: 'transform 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  onClick={() => handleReadMore(topic.id)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ fontSize: '2rem', color: '#764ba2' }}>{topic.icon}</div>
                    <div>
                      <Badge bg="info" style={{ marginBottom: '5px' }}>{topic.tag}</Badge>
                      <p style={{ color: '#888', fontSize: '0.8rem', margin: 0 }}>{topic.industry}</p>
                    </div>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#ffffff' }}>{topic.title}</h3>
                  <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '15px', lineHeight: '1.5' }}>{topic.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <small style={{ color: '#888' }}><FaCalendar /> {topic.date}</small>
                    <Button variant="link" style={{ color: '#764ba2', textDecoration: 'none', padding: 0 }}>Read More →</Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        {/* WHITEPAPERS TAB */}
        {activeKey === 'whitepapers' && (
          <Row>
            {whitepapers.map((wp) => (
              <Col md={4} key={wp.id} className="mb-4">
                <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', padding: '25px', height: '100%', transition: 'transform 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ fontSize: '2.5rem', color: '#667eea', marginBottom: '15px' }}>{wp.icon}</div>
                  <Badge bg="warning" style={{ width: 'fit-content', marginBottom: '10px', color: '#000' }}>📄 {wp.tag}</Badge>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#ffffff', lineHeight: '1.4' }}>{wp.title}</h3>
                  <p style={{ color: '#aaa', fontSize: '0.85rem', marginBottom: '15px', lineHeight: '1.5' }}>{wp.description.substring(0, 100)}...</p>
                  <div style={{ marginBottom: '15px' }}>
                    <div style={{ display: 'flex', gap: '10px', color: '#888', fontSize: '0.75rem', marginBottom: '5px' }}>
                      <span><FaCalendar /> {wp.date}</span>
                      <span>📄 {wp.pages} pages</span>
                      <span>📖 {wp.readTime}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                    <Button variant="outline-primary" size="sm" onClick={() => handleReadMore(wp.id)} style={{ borderRadius: '50px', flex: 1 }}>Preview</Button>
                    <Button variant="primary" size="sm" onClick={() => handleDownload(wp)} style={{ borderRadius: '50px', flex: 1 }}>
                      <FaDownload className="me-1" /> Download
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default InsightsPage;