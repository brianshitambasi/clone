// components/HomePage.jsx
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, FaCheckCircle, FaUsers, FaBriefcase, FaClock, FaGlobe,
  FaLaptopCode, FaCloud, FaChartLine, FaRobot
} from 'react-icons/fa';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, Stars, OrbitControls, Text3D } from '@react-three/drei';
import * as THREE from 'three';

// Rotating Server Rack
const ServerRack = () => {
  const groupRef = useRef();
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.0005) * 0.1;
    }
  });
  
  return (
    <group ref={groupRef} position={[-4, 0, -1]}>
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 4, 1.2]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      {[...Array(6)].map((_, i) => (
        <mesh key={i} position={[0, -1.5 + i * 0.7, 0.8]} castShadow>
          <boxGeometry args={[1.6, 0.5, 0.15]} />
          <meshStandardMaterial color="#667eea" emissive="#667eea" emissiveIntensity={0.4} metalness={0.5} />
        </mesh>
      ))}
      {[...Array(6)].map((_, i) => (
        <mesh key={`light-${i}`} position={[0.7, -1.5 + i * 0.7, 0.9]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ff4444" emissive="#ff4444" emissiveIntensity={0.8} />
        </mesh>
      ))}
      <Text3D
        font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
        size={0.3}
        height={0.05}
        position={[0, -2.2, 0.7]}
      >
        SERVER
        <meshStandardMaterial color="#ffffff" />
      </Text3D>
    </group>
  );
};

// Floating Cloud Icon
const FloatingCloud = () => {
  const cloudRef = useRef();
  
  useFrame(({ clock }) => {
    if (cloudRef.current) {
      cloudRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.3;
      cloudRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });
  
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <group ref={cloudRef} position={[4, 1.5, -1]}>
        <mesh position={[0, 0, 0]} castShadow>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="#4facfe" emissive="#4facfe" emissiveIntensity={0.3} metalness={0.3} />
        </mesh>
        <mesh position={[1, -0.3, 0]} castShadow>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color="#4facfe" emissive="#4facfe" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[-1, -0.3, 0]} castShadow>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color="#4facfe" emissive="#4facfe" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0, -0.8, 0]} castShadow>
          <sphereGeometry args={[0.9, 32, 32]} />
          <meshStandardMaterial color="#4facfe" emissive="#4facfe" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0.5, 0.3, 0.5]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>
        <Text3D
          font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
          size={0.25}
          height={0.05}
          position={[0, -1.3, 0.5]}
        >
          CLOUD
          <meshStandardMaterial color="#ffffff" />
        </Text3D>
      </group>
    </Float>
  );
};

// Rotating AI Brain
const AIBrain = () => {
  const brainRef = useRef();
  
  useFrame(() => {
    if (brainRef.current) {
      brainRef.current.rotation.y += 0.01;
      brainRef.current.rotation.x = Math.sin(Date.now() * 0.0008) * 0.15;
    }
  });
  
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={brainRef} position={[-3, 1.5, -2]}>
        <mesh castShadow>
          <sphereGeometry args={[0.9, 64, 64]} />
          <meshStandardMaterial color="#764ba2" emissive="#764ba2" emissiveIntensity={0.5} metalness={0.6} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
          <torusKnotGeometry args={[1.1, 0.08, 128, 16, 3, 4]} />
          <meshStandardMaterial color="#f093fb" emissive="#f093fb" emissiveIntensity={0.6} />
        </mesh>
        <mesh rotation={[0, Math.PI / 3, 0]} castShadow>
          <torusGeometry args={[1.2, 0.06, 64, 128]} />
          <meshStandardMaterial color="#667eea" emissive="#667eea" emissiveIntensity={0.4} />
        </mesh>
        {[...Array(12)].map((_, i) => (
          <mesh key={i} position={[Math.cos(i * 0.5) * 1.3, Math.sin(i * 0.8) * 1.3, Math.sin(i * 0.6) * 1.3]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial color="#f093fb" emissive="#f093fb" emissiveIntensity={0.8} />
          </mesh>
        ))}
        <Text3D
          font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
          size={0.25}
          height={0.05}
          position={[0, -1.4, 0.8]}
        >
          A I
          <meshStandardMaterial color="#ffffff" />
        </Text3D>
      </group>
    </Float>
  );
};

// Data Nodes Network
const DataNodes = () => {
  const groupRef = useRef();
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });
  
  const nodes = Array(25).fill().map((_, i) => ({
    position: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6 - 1],
    color: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b'][Math.floor(Math.random() * 5)],
    size: Math.random() * 0.15 + 0.1
  }));
  
  const lines = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = Math.hypot(
        nodes[i].position[0] - nodes[j].position[0],
        nodes[i].position[1] - nodes[j].position[1],
        nodes[i].position[2] - nodes[j].position[2]
      );
      if (dist < 3.5) {
        lines.push({ start: nodes[i].position, end: nodes[j].position, color: nodes[i].color });
      }
    }
  }
  
  return (
    <group ref={groupRef} position={[0, -1, -3]}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#667eea" emissive="#667eea" emissiveIntensity={0.8} />
      </mesh>
      {lines.slice(0, 40).map((line, i) => {
        const start = new THREE.Vector3(line.start[0], line.start[1], line.start[2]);
        const end = new THREE.Vector3(line.end[0], line.end[1], line.end[2]);
        const length = start.distanceTo(end);
        const center = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
        
        return (
          <mesh key={i} position={center} rotation={[0, 0, 0]}>
            <boxGeometry args={[length, 0.03, 0.03]} />
            <meshStandardMaterial color={line.color} opacity={0.4} transparent />
          </mesh>
        );
      })}
      {nodes.map((node, i) => (
        <Float key={i} speed={0.5} rotationIntensity={0} floatIntensity={0.3}>
          <mesh position={node.position}>
            <sphereGeometry args={[node.size, 24, 24]} />
            <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.5} />
          </mesh>
        </Float>
      ))}
      <Text3D
        font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
        size={0.25}
        height={0.05}
        position={[0, -3, 1]}
      >
        DATA
        <meshStandardMaterial color="#ffffff" />
      </Text3D>
    </group>
  );
};

// Rotating Code Cube
const CodeCube = () => {
  const cubeRef = useRef();
  const cubes = Array(8).fill().map((_, i) => ({
    position: [(Math.random() - 0.5) * 4, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3],
    rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
    scale: Math.random() * 0.3 + 0.2
  }));
  
  useFrame(({ clock }) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      cubeRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <Float speed={0.8} rotationIntensity={0.5} floatIntensity={0.8}>
      <group ref={cubeRef} position={[4, -1, -3]}>
        <mesh castShadow>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshStandardMaterial color="#43e97b" emissive="#43e97b" emissiveIntensity={0.4} wireframe />
        </mesh>
        <mesh>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#43e97b" emissive="#43e97b" emissiveIntensity={0.8} />
        </mesh>
        {cubes.map((cube, i) => (
          <mesh key={i} position={cube.position} rotation={cube.rotation}>
            <boxGeometry args={[cube.scale, cube.scale, cube.scale]} />
            <meshStandardMaterial color="#4facfe" emissive="#4facfe" emissiveIntensity={0.3} wireframe />
          </mesh>
        ))}
        <Text3D
          font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
          size={0.25}
          height={0.05}
          position={[0, -1, 0.8]}
        >
          CODE
          <meshStandardMaterial color="#ffffff" />
        </Text3D>
      </group>
    </Float>
  );
};

// Cybersecurity Shield
const SecurityShield = () => {
  const groupRef = useRef();
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.z = Math.sin(Date.now() * 0.001) * 0.1;
    }
  });
  
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={groupRef} position={[0, 2, -4]}>
        <mesh>
          <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
          <meshStandardMaterial color="#ff6b6b" emissive="#ff6b6b" emissiveIntensity={0.3} metalness={0.7} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <coneGeometry args={[0.6, 0.8, 32]} />
          <meshStandardMaterial color="#ff6b6b" emissive="#ff6b6b" emissiveIntensity={0.4} />
        </mesh>
        <Text3D
          font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
          size={0.2}
          height={0.05}
          position={[0, -0.5, 0.1]}
        >
          SECURE
          <meshStandardMaterial color="#ffffff" />
        </Text3D>
      </group>
    </Float>
  );
};

// Main Scene Component
const TechScene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 14], fov: 55 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      shadows
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -5, -5]} intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#667eea" />
      
      <Stars radius={150} depth={60} count={3000} factor={5} saturation={0} fade speed={0.3} />
      <Sparkles count={800} scale={20} size={0.25} speed={0.4} opacity={0.4} color="#667eea" />
      
      <ServerRack />
      <FloatingCloud />
      <AIBrain />
      <DataNodes />
      <CodeCube />
      <SecurityShield />
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  );
};

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [counters, setCounters] = useState({
    clients: 0,
    engineers: 0,
    years: 0,
    countries: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const services = [
    { 
      id: 'digital-transformation', 
      title: 'Digital Transformation', 
      description: 'Strategic guidance for your digital evolution journey.', 
      fullDesc: 'We guide companies through their digital transformation journeys, providing tailored strategies and software solutions that improve efficiency and automation. Our expert consultants help you navigate the complexities of modern technology adoption.', 
      icon: <FaLaptopCode />, 
      color: '#667eea' 
    },
    { 
      id: 'artificial-intelligence', 
      title: 'Artificial Intelligence', 
      description: 'Cutting-edge AI solutions for global enterprises.', 
      fullDesc: 'AI solutions for global enterprises, including predictive BI, machine learning models, and intelligent automation. Transform your business with our AI-first approach.', 
      icon: <FaRobot />, 
      color: '#764ba2' 
    },
    { 
      id: 'data-analytics', 
      title: 'Data & BI', 
      description: 'Turn data into actionable insights.', 
      fullDesc: 'Comprehensive data management, visualization and analytics solutions for data-driven decision making. Unlock the power of your data with modern BI tools.', 
      icon: <FaChartLine />, 
      color: '#f093fb' 
    },
    { 
      id: 'cloud-services', 
      title: 'Cloud Services', 
      description: 'End-to-end cloud solutions and support.', 
      fullDesc: 'Complete cloud migration, management, and optimization services. We ensure your cloud infrastructure is secure, scalable, and cost-effective.', 
      icon: <FaCloud />, 
      color: '#4facfe' 
    }
  ];

  // Industries with real images
  const industries = [
    { name: 'Manufacturing', icon: '🏭', image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=250&fit=crop', description: 'Smart Factory Solutions' },
    { name: 'Retail', icon: '🛒', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop', description: 'E-commerce & POS' },
    { name: 'Healthcare', icon: '🏥', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop', description: 'Medical Tech & EHR' },
    { name: 'Finance', icon: '💰', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop', description: 'Banking & Fintech' },
    { name: 'Technology', icon: '💻', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop', description: 'SaaS & IT Services' },
    { name: 'Education', icon: '📚', image: '/image/static/bb.webp', description: 'EdTech & E-Learning' }
  ];

  const targetValues = useMemo(() => {
    return { clients: 800, engineers: 3000, years: 25, countries: 40 };
  }, []);

  const animateNumbers = useCallback(() => {
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuad = 1 - Math.pow(1 - progress, 2);
      
      setCounters({
        clients: Math.floor(easeOutQuad * targetValues.clients),
        engineers: Math.floor(easeOutQuad * targetValues.engineers),
        years: Math.floor(easeOutQuad * targetValues.years),
        countries: Math.floor(easeOutQuad * targetValues.countries)
      });
      
      if (frame === totalFrames) {
        setCounters(targetValues);
        clearInterval(timer);
      }
    }, frameDuration);
  }, [targetValues]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = statsRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, animateNumbers]);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: '#ffffff' }}>
      {/* Hero Section with 3D Technology Background */}
      <section style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        overflow: 'hidden'
      }}>
        <TechScene3D />
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          background: 'linear-gradient(135deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.4) 100%)',
          zIndex: 1
        }} />
        <Container style={{ position: 'relative', zIndex: 2, paddingTop: '100px' }}>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <Badge style={{ 
                backgroundColor: 'rgba(102,126,234,0.2)', 
                color: '#667eea', 
                padding: '8px 20px', 
                borderRadius: '50px',
                marginBottom: '20px',
                border: '1px solid rgba(102,126,234,0.3)'
              }}>
               
              </Badge>
              <h1 style={{ 
                fontSize: '4rem', 
                fontWeight: '800', 
                marginBottom: '20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                MJ & Roberts Consulting
              </h1>
              <p style={{ fontSize: '1.3rem', color: '#cccccc', marginBottom: '30px' }}>
                Digital Innovation That Drives Growth
              </p>
              <div>
                <Button 
                  as={Link} 
                  to="/contact" 
                  style={{ 
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    border: 'none',
                    padding: '14px 40px',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginRight: '15px'
                  }}
                >
                  Get Started <FaArrowRight style={{ marginLeft: '8px' }} />
                </Button>
                <Button 
                  as={Link} 
                  to="/services" 
                  variant="outline-light" 
                  style={{ 
                    padding: '14px 40px',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}
                >
                  Explore Technology
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#0a0a0a' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#667eea' }}>
              Our Technology Services
            </h2>
            <p style={{ color: '#aaaaaa', fontSize: '1.1rem' }}>
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          <Row>
            {services.map((service, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <Card 
                  style={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #2a2a2a', 
                    borderRadius: '20px', 
                    padding: '30px', 
                    textAlign: 'center',
                    height: '100%',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(102,126,234,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onClick={() => handleLearnMore(service)}
                >
                  <div style={{ fontSize: '3rem', color: service.color, marginBottom: '20px' }}>
                    {service.icon}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#ffffff' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#aaaaaa', lineHeight: '1.6', fontSize: '0.9rem' }}>
                    {service.description}
                  </p>
                  <Badge style={{ 
                    marginTop: '20px', 
                    padding: '8px 16px', 
                    borderRadius: '50px', 
                    backgroundColor: service.color,
                    cursor: 'pointer'
                  }}>
                    Learn More →
                  </Badge>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} style={{ padding: '80px 0', backgroundColor: '#111' }}>
        <Container>
          <Row>
            <Col md={3} sm={6} className="text-center mb-4">
              <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '20px', transition: 'transform 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}>
                <FaUsers style={{ fontSize: '2rem', color: '#667eea', marginBottom: '10px' }} />
                <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#667eea', marginBottom: '5px' }}>{counters.clients.toLocaleString()}+</h3>
                <p style={{ color: '#aaaaaa', margin: 0 }}>Happy Clients</p>
              </div>
            </Col>
            <Col md={3} sm={6} className="text-center mb-4">
              <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '20px', transition: 'transform 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}>
                <FaBriefcase style={{ fontSize: '2rem', color: '#764ba2', marginBottom: '10px' }} />
                <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#764ba2', marginBottom: '5px' }}>{counters.engineers.toLocaleString()}+</h3>
                <p style={{ color: '#aaaaaa', margin: 0 }}>Expert Engineers</p>
              </div>
            </Col>
            <Col md={3} sm={6} className="text-center mb-4">
              <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '20px', transition: 'transform 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}>
                <FaClock style={{ fontSize: '2rem', color: '#f093fb', marginBottom: '10px' }} />
                <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#f093fb', marginBottom: '5px' }}>{counters.years}+</h3>
                <p style={{ color: '#aaaaaa', margin: 0 }}>Years Experience</p>
              </div>
            </Col>
            <Col md={3} sm={6} className="text-center mb-4">
              <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '20px', transition: 'transform 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}>
                <FaGlobe style={{ fontSize: '2rem', color: '#4facfe', marginBottom: '10px' }} />
                <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#4facfe', marginBottom: '5px' }}>{counters.countries}</h3>
                <p style={{ color: '#aaaaaa', margin: 0 }}>Countries Worldwide</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industries Section with Real Images */}
      <section style={{ padding: '80px 0', backgroundColor: '#0a0a0a' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#667eea' }}>
              Industries We Transform
            </h2>
            <p style={{ color: '#aaaaaa', fontSize: '1.1rem' }}>
              Specialized technology solutions for every sector
            </p>
          </div>
          <Row>
            {industries.map((industry, index) => (
              <Col md={4} lg={2} sm={6} key={index} className="mb-4">
                <div 
                  style={{ 
                    backgroundColor: '#1a1a1a', 
                    borderRadius: '15px',
                    overflow: 'hidden',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer',
                    border: '1px solid #2a2a2a'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(102,126,234,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    style={{ 
                      width: '100%', 
                      height: '160px', 
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ padding: '20px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{industry.icon}</div>
                    <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '5px', fontWeight: '600' }}>
                      {industry.name}
                    </h4>
                    <p style={{ color: '#aaaaaa', fontSize: '0.75rem', margin: 0 }}>
                      {industry.description}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px', color: '#ffffff' }}>
                Ready to Transform Your Business?
              </h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: 'rgba(255,255,255,0.9)' }}>
                Join 800+ businesses that trust MJ&Roberts for their digital transformation
              </p>
              <Button 
                as={Link} 
                to="/contact" 
                variant="light" 
                size="lg" 
                style={{ borderRadius: '50px', padding: '14px 45px', fontWeight: '600' }}
              >
                Get Started Today <FaArrowRight style={{ marginLeft: '8px' }} />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Modal */}
      {showModal && selectedService && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.9)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }} onClick={() => setShowModal(false)}>
          <div style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '20px',
            maxWidth: '600px',
            width: '100%',
            padding: '40px',
            position: 'relative',
            border: '1px solid #2a2a2a'
          }} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: '#aaaaaa',
                fontSize: '24px',
                cursor: 'pointer'
              }}
            >&times;</button>
            <div style={{ fontSize: '3rem', color: selectedService.color, marginBottom: '20px' }}>
              {selectedService.icon}
            </div>
            <h3 style={{ color: '#ffffff', marginBottom: '15px' }}>{selectedService.title}</h3>
            <p style={{ color: '#cccccc', lineHeight: '1.8' }}>{selectedService.fullDesc}</p>
            <hr style={{ borderColor: '#2a2a2a', margin: '20px 0' }} />
            <h5 style={{ color: '#ffffff' }}>Key Benefits:</h5>
            <ul style={{ marginTop: '15px', listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', color: '#cccccc' }}>
                <FaCheckCircle style={{ color: '#10b981', marginRight: '10px' }} /> Expert guidance from industry leaders
              </li>
              <li style={{ marginBottom: '10px', color: '#cccccc' }}>
                <FaCheckCircle style={{ color: '#10b981', marginRight: '10px' }} /> Proven track record of success
              </li>
              <li style={{ marginBottom: '10px', color: '#cccccc' }}>
                <FaCheckCircle style={{ color: '#10b981', marginRight: '10px' }} /> Tailored solutions for your needs
              </li>
              <li style={{ marginBottom: '10px', color: '#cccccc' }}>
                <FaCheckCircle style={{ color: '#10b981', marginRight: '10px' }} /> 24/7 dedicated support
              </li>
            </ul>
            <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
              <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
              <Button as={Link} to="/contact" variant="primary" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', border: 'none' }}>
                Request Consultation →
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;