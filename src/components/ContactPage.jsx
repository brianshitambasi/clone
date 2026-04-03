// components/NavigationBar.js
import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar className="navbar-custom" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">MJ & Roberts Consulting</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Services Dropdown */}
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item as={Link} to="/services">All Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/services/erp">ERP</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/crm">CRM</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/bpm">Business Process Management</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/dynamics">Dynamics 365</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/odoo">Odoo</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/salesforce">Salesforce</NavDropdown.Item>
            </NavDropdown>

            {/* Industries Dropdown */}
            <NavDropdown title="Industries" id="industries-dropdown">
              <NavDropdown.Item as={Link} to="/industries/manufacturing">Manufacturing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/industries/retail">Retail</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/industries/healthcare">Healthcare</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/industries/finance">Finance</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/industries/technology">Technology</NavDropdown.Item>
            </NavDropdown>

            {/* Case Studies Dropdown */}
            <NavDropdown title="Case studies" id="casestudies-dropdown">
              <NavDropdown.Item as={Link} to="/projects">All Projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/projects/shoppable-video">Shoppable Video Platform</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/projects/investment-platform">Investment Portfolio Platform</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/projects/pharmaceutical-analytics">Pharmaceutical Analytics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/projects/furniture-software">Furniture Manufacturing Suite</NavDropdown.Item>
            </NavDropdown>

            {/* Insights Dropdown */}
            <NavDropdown title="Insights" id="insights-dropdown">
              <NavDropdown.Item as={Link} to="/insights/blog">Blog</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/insights/news">News</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/insights/whitepapers">Whitepapers</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/insights/webinars">Webinars</NavDropdown.Item>
            </NavDropdown>

            {/* Company Dropdown */}
            <NavDropdown title="Company" id="company-dropdown">
              <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jobs">Careers</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/leadership">Leadership</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/news">Newsroom</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
            </NavDropdown>

            {/* Contact Us Button */}
            <Nav.Link as={Link} to="/contact" className="contact-btn">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;