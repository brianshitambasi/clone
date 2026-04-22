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
    if (path === '/') {
      return location.pathname === path;
    }
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
        { path: '/services', label: 'All Services' },
        { path: '/services/it-consulting', label: 'IT Consulting' },
        { path: '/services/software-engineering', label: 'Software Engineering' },
        { path: '/services/managed-it', label: 'Managed IT Services' },
        { path: '/services/devops', label: 'DevOps & Platform' },
        { path: '/services/qa', label: 'Quality Assurance' }
      ]
    },
    { 
      path: '/solutions', 
      label: 'Solutions', 
      icon: React.createElement(FaLightbulb),
      dropdown: true,
      items: [
        { path: '/solutions', label: 'All Solutions' },
        { path: '/solutions/crm', label: 'CRM Solutions' },
        { path: '/solutions/erp', label: 'ERP Solutions' },
        { path: '/solutions/digital-commerce', label: 'Digital Commerce' },
        { path: '/solutions/data-analytics', label: 'Data Analytics' },
        { path: '/solutions/ai-rpa', label: 'AI & RPA' }
      ]
    },
    { 
      path: '/technologies', 
      label: 'Tech', 
      icon: React.createElement(FaMicrochip),
      dropdown: true,
      items: [
        { path: '/technologies', label: 'All Technologies' },
        { path: '/technologies/salesforce', label: 'Salesforce' },
        { path: '/technologies/aws', label: 'AWS' },
        { path: '/technologies/azure', label: 'Azure & Dynamics' },
        { path: '/technologies/sap', label: 'SAP & Odoo' },
        { path: '/technologies/atlassian', label: 'Atlassian' }
      ]
    },
    { 
      path: '/industries', 
      label: 'Industries', 
      icon: React.createElement(FaIndustry),
      dropdown: true,
      items: [
        { path: '/industries', label: 'All Industries' },
        { path: '/industries/healthcare', label: 'Healthcare' },
        { path: '/industries/finance', label: 'Finance & Insurance' },
        { path: '/industries/manufacturing', label: 'Manufacturing' },
        { path: '/industries/software', label: 'Software & Hi-Tech' }
      ]
    },
    { 
      path: '/insights', 
      label: 'Insights', 
      icon: React.createElement(FaNewspaper),
      dropdown: true,
      items: [
        { path: '/insights', label: 'All Insights' },
        { path: '/insights/trending', label: 'Trending Topics' },
        { path: '/insights/industry', label: 'Industry Related' },
        { path: '/insights/whitepapers', label: 'Whitepapers' }
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
    { path: '/case-studies', label: 'Cases', icon: React.createElement(FaBookOpen) },
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
        backgroundColor: scrolled ? 'rgba(8, 8, 12, 0.98)' : 'rgba(8, 8, 12, 0.92)',
        backdropFilter: 'blur(16px)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: scrolled ? '8px 0' : '16px 0',
        borderBottom: '1px solid rgba(102, 126, 234, 0.2)',
        boxShadow: scrolled ? '0 4px 25px rgba(0, 0, 0, 0.3)' : 'none'
      }
    },
    React.createElement(Container, { 
      fluid: true, 
      style: { 
        maxWidth: '1400px', 
        padding: '0 20px',
        margin: '0 auto'
      } 
    },
      // Brand / Logo
      React.createElement(
        Navbar.Brand,
        {
          as: Link,
          to: "/",
          style: {
            fontSize: '1.3rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.3px',
            transition: 'all 0.3s',
            whiteSpace: 'nowrap',
            marginRight: '1rem'
          }
        },
        "MJ&Roberts"
      ),
      
      // Toggle Button
      React.createElement(
        Navbar.Toggle,
        {
          "aria-controls": "basic-navbar-nav",
          style: { 
            border: '1px solid rgba(102, 126, 234, 0.4)',
            borderRadius: '10px',
            padding: '6px 12px'
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
          { 
            className: "ms-auto", 
            style: { 
              gap: '4px', 
              alignItems: 'center',
              flexWrap: 'wrap'
            } 
          },
          navLinks.map((link, index) => {
            if (link.dropdown) {
              return React.createElement(
                NavDropdown,
                {
                  key: index,
                  title: React.createElement('span', { style: { display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem' } },
                    link.icon,
                    link.label,
                    React.createElement(FaChevronDown, { style: { fontSize: '8px', opacity: 0.6 } })
                  ),
                  id: `${link.label.toLowerCase()}-dropdown`,
                  className: "custom-dropdown",
                  style: { 
                    color: isActive(link.path) ? '#667eea' : '#e0e0e0',
                    fontWeight: isActive(link.path) ? '600' : '500',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    transition: 'all 0.3s'
                  },
                  renderMenuOnMount: true
                },
                link.items.map((item, idx) => 
                  React.createElement(NavDropdown.Item, { 
                    key: idx, 
                    as: Link, 
                    to: item.path, 
                    style: { 
                      padding: '6px 18px',
                      fontSize: '0.82rem'
                    } 
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
                    padding: '5px 18px',
                    marginLeft: '6px',
                    color: 'white',
                    fontWeight: '600',
                    fontSize: '0.82rem',
                    transition: 'all 0.3s',
                    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
                    whiteSpace: 'nowrap'
                  },
                  onMouseEnter: (e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.5)';
                  },
                  onMouseLeave: (e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)';
                  }
                },
                React.createElement('span', { style: { display: 'flex', alignItems: 'center', gap: '6px' } },
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
                  padding: '6px 10px',
                  borderRadius: '8px',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.85rem',
                  background: isActive(link.path) ? 'rgba(102, 126, 234, 0.1)' : 'transparent',
                  whiteSpace: 'nowrap'
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
  /* Base navbar styles */
  .navbar-custom {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    min-height: auto;
  }
  
  .navbar-custom.scrolled {
    padding: 8px 0 !important;
    background: rgba(8, 8, 12, 0.98) !important;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.3);
  }
  
  /* Prevent content from hiding under navbar */
  body {
    padding-top: 76px !important;
  }
  
  /* Dropdown styles */
  .custom-dropdown .dropdown-menu {
    background: rgba(20, 20, 30, 0.98);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(102, 126, 234, 0.2);
    border-radius: 12px;
    margin-top: 8px;
    padding: 8px 0;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    min-width: 220px;
  }
  
  .custom-dropdown .dropdown-item {
    color: #d0d0d0;
    transition: all 0.25s;
    font-size: 0.82rem;
    padding: 6px 18px;
  }
  
  .custom-dropdown .dropdown-item:hover {
    background: linear-gradient(90deg, rgba(102, 126, 234, 0.15), transparent);
    color: #667eea;
    padding-left: 24px;
  }
  
  .custom-dropdown .dropdown-divider {
    border-color: rgba(102, 126, 234, 0.1);
    margin: 6px 0;
  }
  
  .custom-dropdown .dropdown-toggle::after {
    display: none;
  }
  
  .navbar-toggler:focus {
    box-shadow: none;
    outline: none;
  }
  
  /* Dropdown Animation */
  .custom-dropdown .dropdown-menu {
    animation: dropdownFadeIn 0.2s ease;
    transform-origin: top;
  }
  
  @keyframes dropdownFadeIn {
    from {
      opacity: 0;
      transform: translateY(-8px) scaleY(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scaleY(1);
    }
  }
  
  /* Desktop styles */
  @media (min-width: 992px) {
    .navbar-custom {
      padding: 16px 0 !important;
    }
    
    .navbar-custom.scrolled {
      padding: 8px 0 !important;
    }
    
    .navbar-nav .nav-link,
    .custom-dropdown .dropdown-toggle {
      font-size: 0.85rem !important;
    }
  }
  
  /* Mobile styles */
  @media (max-width: 1199px) and (min-width: 992px) {
    .navbar-nav .nav-link,
    .custom-dropdown .dropdown-toggle {
      padding: 6px 6px !important;
      font-size: 0.8rem !important;
    }
    
    .custom-dropdown .dropdown-toggle span {
      gap: 4px !important;
    }
  }
  
  @media (max-width: 991px) {
    body {
      padding-top: 66px !important;
    }
    
    .navbar-custom {
      padding: 10px 0 !important;
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
      gap: 5px !important;
      margin-top: 12px;
      max-height: 70vh;
      overflow-y: auto;
    }
    
    .nav-link {
      padding: 8px 16px !important;
      border-radius: 10px;
    }
    
    .custom-dropdown .dropdown-toggle {
      padding: 8px 16px !important;
    }
  }
  
  /* For very small screens */
  @media (max-width: 768px) {
    .navbar-brand {
      font-size: 1.1rem !important;
    }
  }
  
  /* Nav item hover effect */
  .nav-link {
    position: relative;
  }
  
  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: #1a1a1a;
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 3px;
  }
`;
document.head.appendChild(style);

export default NavigationBar;