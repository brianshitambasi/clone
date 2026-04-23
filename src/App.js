// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ServiceDetail from './components/ServiceDetail';
import SolutionsPage from './components/SolutionsPage';
import SolutionDetail from './components/SolutionDetail';
import TechnologiesPage from './components/TechnologiesPage';
import TechnologyDetail from './components/TechnologyDetail';
import IndustriesPage from './components/IndustriesPage';
import IndustryDetail from './components/IndustryDetail';
import InsightsPage from './components/InsightsPage';
import InsightDetail from './components/InsightDetail';
import CompanyPage from './components/CompanyPage';
import CompanyDetail from './components/CompanyDetail';
import CaseStudiesPage from './components/CaseStudiesPage';
import CaseStudyDetail from './components/CaseStudyDetail';
import ContactPage from './components/ContactPage';
import JobsPage from './components/JobsPage';
import JobDetail from './components/JobDetail';
import JobApplicationPage from './components/JobApplicationPage';
import ProjectsPage from './components/ProjectsPage';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          <Route path="/projects" element={<ProjectsPage />} />
          
          {/* Jobs Routes */}
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/apply/:jobId" element={<JobApplicationPage />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          
          {/* Solutions Routes */}
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/:id" element={<SolutionDetail />} />
          
          {/* Technologies Routes */}
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="/technologies/:id" element={<TechnologyDetail />} />
          
          {/* Industries Routes */}
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:id" element={<IndustryDetail />} />
          
          {/* Insights Routes */}
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:id" element={<InsightDetail />} />
          
          {/* Company Routes */}
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/company/:id" element={<CompanyDetail />} />
          <Route path="/company/overview" element={<CompanyDetail />} />
          <Route path="/company/approach" element={<CompanyDetail />} />
          <Route path="/company/partnerships" element={<CompanyDetail />} />
          <Route path="/company/news" element={<CompanyDetail />} />
        </Routes>
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;