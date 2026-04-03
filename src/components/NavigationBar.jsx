// components/NavigationBar.jsx
import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar className="navbar-custom" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">MJ&Roberts</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item as={Link} to="/services">IT Consulting & Digital Transformation</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services">Software Engineering & Application Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services">Managed IT Services & Support</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services">DevOps & Platform Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services">Quality Assurance & Testing</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Solutions" id="solutions-dropdown">
              <NavDropdown.Item as={Link} to="/solutions">CRM (Salesforce, Dynamics 365)</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/solutions">ERP (SAP, Odoo)</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/solutions">Digital Commerce</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/solutions">Data Analytics & BI</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/solutions">Artificial Intelligence & RPA</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/solutions">AR/VR & IoT</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Technologies" id="technologies-dropdown">
              <NavDropdown.Item as={Link} to="/technologies">Salesforce</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/technologies">AWS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/technologies">Microsoft Azure & Dynamics 365</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/technologies">SAP Commerce & Odoo</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/technologies">Atlassian</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/technologies">Power BI</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Industries" id="industries-dropdown">
              <NavDropdown.Item as={Link} to="/industries">Healthcare</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/industries">Finance & Insurance</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/industries">Manufacturing & Retail</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/industries">Software & Hi-Tech</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/industries">Professional Services</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Insights" id="insights-dropdown">
              <NavDropdown.Item as={Link} to="/insights">Trending Topics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/insights">Industry Related</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/insights">Whitepapers</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Company" id="company-dropdown">
              <NavDropdown.Item as={Link} to="/company">Overview</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/company">Our Approach</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/company">Partnerships</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jobs">Careers</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/company">News</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/case-studies" className="contact-btn">Case Studies</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="contact-btn">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;