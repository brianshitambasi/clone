// components/NavigationBar.jsx
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaChevronDown, FaHome, FaInfoCircle, FaCogs, FaLightbulb, FaMicrochip, FaIndustry, FaNewspaper, FaBuilding, FaBookOpen, FaEnvelope } from 'react-icons/fa';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const navLinks = [
    { path: '/', label: 'Home', icon: React.createElement(FaHome) },
    { path: '/about', label: 'About', icon: React.createElement(FaInfoCircle) },
    { 
      path: '/services', 
      label: 'Services', 
      icon: React.createElement(FaCogs),
      dropdown: true,
      items: [
        { path: '/services/it-consulting', label: 'IT Consulting & Digital Transformation' },
        { path: '/services/software-engineering', label: 'Software Engineering & Application Services' },
        { path: '/services/managed-it', label: 'Managed IT Services & Support' },
        { path: '/services/devops', label: 'DevOps & Platform Engineering' },
        { path: '/services/qa', label: 'Quality Assurance & Testing' }
      ]
    },
    { 
      path: '/solutions', 
      label: 'Solutions', 
      icon: React.createElement(FaLightbulb),
      dropdown: true,
      items: [
        { path: '/solutions/crm', label: 'CRM (Salesforce, Dynamics 365)' },
        { path: '/solutions/erp', label: 'ERP (SAP, Odoo)' },
        { path: '/solutions/digital-commerce', label: 'Digital Commerce' },
        { path: '/solutions/data-analytics', label: 'Data Analytics & BI' },
        { path: '/solutions/ai-rpa', label: 'Artificial Intelligence & RPA' },
        { path: '/solutions/ar-vr-iot', label: 'AR/VR & IoT' }
      ]
    },
    { 
      path: '/technologies', 
      label: 'Technologies', 
      icon: React.createElement(FaMicrochip),
      dropdown: true,
      items: [
        { path: '/technologies/salesforce', label: 'Salesforce' },
        { path: '/technologies/aws', label: 'AWS' },
        { path: '/technologies/azure', label: 'Microsoft Azure & Dynamics 365' },
        { path: '/technologies/sap', label: 'SAP Commerce & Odoo' },
        { path: '/technologies/atlassian', label: 'Atlassian' },
        { path: '/technologies/powerbi', label: 'Power BI' }
      ]
    },
    { 
      path: '/industries', 
      label: 'Industries', 
      icon: React.createElement(FaIndustry),
      dropdown: true,
      items: [
        { path: '/industries/healthcare', label: 'Healthcare' },
        { path: '/industries/finance', label: 'Finance & Insurance' },
        { path: '/industries/manufacturing', label: 'Manufacturing & Retail' },
        { path: '/industries/software', label: 'Software & Hi-Tech' },
        { path: '/industries/professional', label: 'Professional Services' }
      ]
    },
    { 
      path: '/insights', 
      label: 'Insights', 
      icon: React.createElement(FaNewspaper),
      dropdown: true,
      items: [
        { path: '/insights/trending', label: 'Trending Topics' },
        { path: '/insights/industry', label: 'Industry Related' },
        { path: '/insights/whitepapers', label: 'Whitepapers' },
        { path: '/insights/case-studies', label: 'Case Studies' }
      ]
    },
    { 
      path: '/company', 
      label: 'Company', 
      icon: React.createElement(FaBuilding),
      dropdown: true,
      items: [
        { path: '/company', label: 'Overview' },
        { path: '/company/approach', label: 'Our Approach' },
        { path: '/company/partnerships', label: 'Partnerships' },
        { path: '/jobs', label: 'Careers' },
        { path: '/company/news', label: 'News' }
      ]
    },
    { path: '/case-studies', label: 'Case Studies', icon: React.createElement(FaBookOpen) },
    { path: '/contact', label: 'Contact', icon: React.createElement(FaEnvelope), isButton: true }
  ];

  return React.createElement(
    Navbar,
    {
      expanded: expanded,
      onToggle: () => setExpanded(!expanded),
      className: `navbar-custom ${scrolled ? 'scrolled' : ''}`,
      fixed: "top",
      expand: "lg",
      collapseOnSelect: true,
      style: {
        backgroundColor: scrolled ? 'rgba(8, 8, 12, 0.98)' : 'rgba(8, 8, 12, 0.95)',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: scrolled ? '8px 0' : '16px 0',
        borderBottom: '1px solid rgba(102, 126, 234, 0.15)',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none'
      }
    },
    React.createElement(Container, { fluid: true, style: { maxWidth: '1400px' } },
      // Brand / Logo
      React.createElement(
        Navbar.Brand,
        {
          as: Link,
          to: "/",
          style: {
            fontSize: '1.6rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 40%, #f093fb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.5px',
            transition: 'all 0.3s'
          },
          onMouseEnter: (e) => e.target.style.opacity = '0.9',
          onMouseLeave: (e) => e.target.style.opacity = '1'
        },
        "MJ&Roberts"
      ),
      
      // Toggle Button
      React.createElement(
        Navbar.Toggle,
        {
          "aria-controls": "basic-navbar-nav",
          style: { 
            border: '1px solid rgba(102, 126, 234, 0.3)',
            borderRadius: '8px',
            padding: '8px 12px'
          }
        },
        React.createElement(FaBars, { style: { color: '#667eea', fontSize: '1.2rem' } })
      ),
      
      // Navbar Collapse
      React.createElement(
        Navbar.Collapse,
        { id: "basic-navbar-nav" },
        React.createElement(
          Nav,
          { className: "ms-auto", style: { gap: '4px', alignItems: 'center' } },
          navLinks.map((link, index) => {
            if (link.dropdown) {
              return React.createElement(
                NavDropdown,
                {
                  key: index,
                  title: React.createElement('span', { style: { display: 'flex', alignItems: 'center', gap: '6px' } },
                    link.icon,
                    link.label,
                    React.createElement(FaChevronDown, { style: { fontSize: '10px', opacity: 0.6 } })
                  ),
                  id: `${link.label.toLowerCase()}-dropdown`,
                  className: "custom-dropdown",
                  style: { 
                    color: isActive(link.path) ? '#667eea' : '#e0e0e0',
                    fontWeight: isActive(link.path) ? '600' : '500',
                    padding: '8px 16px',
                    borderRadius: '10px',
                    transition: 'all 0.3s'
                  },
                  renderMenuOnMount: true
                },
                React.createElement(NavDropdown.Item, { 
                  as: Link, 
                  to: link.path, 
                  style: { 
                    padding: '10px 24px',
                    fontWeight: '600',
                    color: '#667eea'
                  } 
                }, `All ${link.label}`),
                React.createElement(NavDropdown.Divider, null),
                link.items.map((item, idx) => 
                  React.createElement(NavDropdown.Item, { 
                    key: idx, 
                    as: Link, 
                    to: item.path, 
                    style: { padding: '8px 24px' } 
                  }, item.label)
                )
              );
            }
            
            if (link.isButton) {
              return React.createElement(
                Nav.Link,
                {
                  key: index,
                  as: Link,
                  to: link.path,
                  style: {
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    borderRadius: '50px',
                    padding: '8px 28px',
                    marginLeft: '12px',
                    color: 'white',
                    fontWeight: '600',
                    transition: 'all 0.3s',
                    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
                  },
                  onMouseEnter: (e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                  },
                  onMouseLeave: (e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)';
                  }
                },
                React.createElement('span', { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
                  link.icon,
                  link.label
                )
              );
            }
            
            return React.createElement(
              Nav.Link,
              {
                key: index,
                as: Link,
                to: link.path,
                style: {
                  color: isActive(link.path) ? '#667eea' : '#e0e0e0',
                  fontWeight: isActive(link.path) ? '600' : '500',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: isActive(link.path) ? 'rgba(102, 126, 234, 0.1)' : 'transparent'
                },
                onMouseEnter: (e) => {
                  if (!isActive(link.path)) {
                    e.target.style.color = '#667eea';
                    e.target.style.backgroundColor = 'rgba(102, 126, 234, 0.05)';
                  }
                },
                onMouseLeave: (e) => {
                  if (!isActive(link.path)) {
                    e.target.style.color = '#e0e0e0';
                    e.target.style.backgroundColor = 'transparent';
                  }
                }
              },
              link.icon,
              link.label
            );
          })
        )
      )
    )
  );
};

// Add custom CSS styles
const style = document.createElement('style');
style.textContent = `
  .navbar-custom {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .navbar-custom.scrolled {
    padding: 8px 0;
    background: rgba(8, 8, 12, 0.98) !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
  
  .custom-dropdown .dropdown-menu {
    background: rgba(20, 20, 30, 0.98);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(102, 126, 234, 0.2);
    border-radius: 16px;
    margin-top: 8px;
    padding: 12px 0;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    min-width: 260px;
  }
  
  .custom-dropdown .dropdown-item {
    color: #e0e0e0;
    transition: all 0.3s;
    font-size: 0.9rem;
    padding: 10px 24px;
    position: relative;
  }
  
  .custom-dropdown .dropdown-item:hover {
    background: linear-gradient(90deg, rgba(102, 126, 234, 0.15), transparent);
    color: #667eea;
    padding-left: 30px;
  }
  
  .custom-dropdown .dropdown-divider {
    border-color: rgba(102, 126, 234, 0.1);
    margin: 8px 0;
  }
  
  .custom-dropdown .dropdown-toggle::after {
    display: none;
  }
  
  .navbar-toggler:focus {
    box-shadow: none;
    outline: none;
  }
  
  /* Animation for dropdown */
  .custom-dropdown .dropdown-menu {
    animation: dropdownFadeIn 0.25s ease;
    transform-origin: top;
  }
  
  @keyframes dropdownFadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px) scaleY(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scaleY(1);
    }
  }
  
  /* Mobile styles */
  @media (max-width: 992px) {
    .navbar-custom {
      padding: 12px 0 !important;
    }
    
    .custom-dropdown .dropdown-menu {
      background: transparent;
      backdrop-filter: none;
      border: none;
      box-shadow: none;
      padding-left: 20px;
      margin-top: 0;
    }
    
    .custom-dropdown .dropdown-item {
      color: #ccc;
      padding: 8px 16px;
    }
    
    .custom-dropdown .dropdown-item:hover {
      background: rgba(102, 126, 234, 0.1);
      padding-left: 20px;
    }
    
    .navbar-nav {
      gap: 8px !important;
      margin-top: 16px;
    }
    
    .nav-link {
      padding: 10px 16px !important;
      border-radius: 12px;
    }
    
    .custom-dropdown .dropdown-toggle {
      padding: 10px 16px !important;
    }
  }
  
  /* Hover effect for nav items */
  .nav-link {
    position: relative;
  }
  
  .nav-link::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    transition: width 0.3s ease;
  }
  
  .nav-link:hover::before {
    width: 70%;
  }
  
  .dropdown-toggle.nav-link::before {
    display: none;
  }
  
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #1a1a1a;
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #764ba2, #f093fb);
  }
`;
document.head.appendChild(style);

export default NavigationBar;