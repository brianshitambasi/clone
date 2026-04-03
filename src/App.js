// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import SolutionsPage from './components/SolutionsPage';
import TechnologiesPage from './components/TechnologiesPage';
import IndustriesPage from './components/IndustriesPage';
import InsightsPage from './components/InsightsPage';
import CompanyPage from './components/CompanyPage';
import CaseStudiesPage from './components/CaseStudiesPage';
import ContactPage from './components/ContactPage';
import JobsPage from './components/JobsPage';
import ProjectsPage from './components/ProjectsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/:id" element={<SolutionsPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="/tech/:id" element={<TechnologiesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:industry" element={<IndustriesPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:type" element={<InsightsPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/company/:section" element={<CompanyPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;