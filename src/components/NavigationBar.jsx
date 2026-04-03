// components/NavigationBar.js
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
              <NavDropdown.Item as={Link} to="/services/consulting">IT Consulting & Digital Transformation</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/software-engineering">Software Engineering & Application Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/managed-it">Managed IT Services & Support</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/devops">DevOps & Platform Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/qa">Quality Assurance & Testing</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Solutions" id="solutions-dropdown">
              <NavDropdown.Item as={Link} to="/solutions/crm">CRM (Salesforce, Dynamics 365)</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/solutions/erp">ERP (SAP, Odoo)</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/solutions/commerce">Digital Commerce</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/solutions/data-analytics">Data Analytics & BI</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/solutions/ai-rpa">Artificial Intelligence & RPA</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/solutions/ar-vr-iot">AR/VR & IoT</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Technologies" id="technologies-dropdown">
              <NavDropdown.Item as={Link} to="/tech/salesforce">Salesforce</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tech/aws">AWS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tech/azure">Microsoft Azure & Dynamics 365</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tech/sap-odoo">SAP Commerce & Odoo</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tech/atlassian">Atlassian</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tech/powerbi">Power BI</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Industries" id="industries-dropdown">
              <NavDropdown.Item as={Link} to="/industries/healthcare">Healthcare</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/industries/finance">Finance & Insurance</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/industries/manufacturing">Manufacturing & Retail</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/industries/software">Software & Hi-Tech</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/industries/professional">Professional Services</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Insights" id="insights-dropdown">
              <NavDropdown.Item as={Link} to="/insights/trending">Trending Topics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/insights/industry">Industry Related</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/insights/whitepapers">Whitepapers</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Company" id="company-dropdown">
              <NavDropdown.Item as={Link} to="/company/overview">Overview</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/company/approach">Our Approach</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/company/partnerships">Partnerships</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jobs">Careers</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/company/news">News</NavDropdown.Item>
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