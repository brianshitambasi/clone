// components/JobsPage.jsx
const React = require('react');
const { useState, useEffect } = React;
const { Container, Row, Col, Card, Button, Badge, Form, InputGroup, Pagination } = require('react-bootstrap');
const { Link } = require('react-router-dom');
const { FaSearch, FaMapMarkerAlt, FaBriefcase, FaDollarSign, FaGraduationCap, FaHeart } = require('react-icons/fa'); // REMOVED FaClock and FaFilter

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [savedJobs, setSavedJobs] = useState([]);
  const jobsPerPage = 5;

  const jobs = [
    { 
      id: 'senior-fullstack', 
      title: 'Senior Full Stack Developer', 
      description: 'Looking for an experienced developer to lead our web development team. You will be responsible for architecting and building scalable web applications using React, Node.js, and cloud technologies.',
      location: 'Remote', 
      type: 'Full-time',
      salary: '$120k - $160k',
      experience: '5+ years',
      department: 'Engineering',
      posted: '2 days ago',
      applicants: 45,
      featured: true,
      requirements: ['React', 'Node.js', 'TypeScript', 'AWS/Azure', 'MongoDB/PostgreSQL', 'GraphQL'],
      benefits: ['Health Insurance', '401k Match', 'Remote Work', 'Learning Budget', 'Flexible Hours']
    },
    { 
      id: 'ai-ml-engineer', 
      title: 'AI/ML Engineer', 
      description: 'Join our AI team to develop cutting-edge machine learning solutions. Work on exciting projects including computer vision, NLP, predictive analytics, and generative AI.',
      location: 'New York, NY', 
      type: 'Full-time',
      salary: '$140k - $190k',
      experience: '3+ years',
      department: 'AI/ML',
      posted: '5 days ago',
      applicants: 78,
      featured: true,
      requirements: ['Python', 'TensorFlow/PyTorch', 'MLOps', 'Computer Vision', 'NLP', 'Cloud ML Services'],
      benefits: ['Health Insurance', '401k Match', 'Relocation Assistance', 'Conference Budget', 'Stock Options']
    },
    { 
      id: 'devops-engineer', 
      title: 'DevOps Engineer', 
      description: 'Help us build and maintain our cloud infrastructure. Design and implement CI/CD pipelines, manage Kubernetes clusters, and optimize cloud costs across multiple providers.',
      location: 'San Francisco, CA', 
      type: 'Full-time',
      salary: '$130k - $175k',
      experience: '4+ years',
      department: 'Platform',
      posted: '1 week ago',
      applicants: 62,
      featured: false,
      requirements: ['Kubernetes', 'Docker', 'Terraform', 'AWS/Azure/GCP', 'CI/CD Tools', 'Prometheus/Grafana'],
      benefits: ['Health Insurance', '401k Match', 'Wellness Stipend', 'Home Office Setup', 'Flexible PTO']
    },
    { 
      id: 'ui-ux-designer', 
      title: 'Senior UI/UX Designer', 
      description: 'Create beautiful and intuitive user interfaces for our enterprise products. Work closely with product managers and developers to deliver exceptional user experiences.',
      location: 'Remote', 
      type: 'Full-time',
      salary: '$100k - $140k',
      experience: '4+ years',
      department: 'Design',
      posted: '3 days ago',
      applicants: 112,
      featured: true,
      requirements: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems', 'Accessibility'],
      benefits: ['Health Insurance', '401k Match', 'Design Tools Budget', 'Remote Work', 'Professional Development']
    },
    { 
      id: 'product-manager', 
      title: 'Technical Product Manager', 
      description: 'Lead product development for our AI-powered analytics platform. Bridge the gap between technical capabilities and business needs.',
      location: 'Remote', 
      type: 'Full-time',
      salary: '$130k - $170k',
      experience: '5+ years',
      department: 'Product',
      posted: '4 days ago',
      applicants: 38,
      featured: false,
      requirements: ['Product Strategy', 'Agile/Scrum', 'Data Analytics', 'API Design', 'Stakeholder Management', 'Technical Background'],
      benefits: ['Health Insurance', '401k Match', 'Remote Work', 'Stock Options', 'Leadership Training']
    },
    { 
      id: 'data-engineer', 
      title: 'Senior Data Engineer', 
      description: 'Build and maintain scalable data pipelines and warehouses. Work with large-scale data processing and real-time streaming technologies.',
      location: 'Austin, TX', 
      type: 'Full-time',
      salary: '$125k - $165k',
      experience: '4+ years',
      department: 'Data',
      posted: '1 week ago',
      applicants: 54,
      featured: false,
      requirements: ['Python/Scala', 'Spark', 'Airflow', 'Snowflake/BigQuery', 'Kafka', 'dbt'],
      benefits: ['Health Insurance', '401k Match', 'Relocation Package', 'Learning Stipend', 'Gym Membership']
    },
    { 
      id: 'security-engineer', 
      title: 'Cloud Security Engineer', 
      description: 'Protect our cloud infrastructure and applications. Implement security best practices, conduct audits, and respond to incidents.',
      location: 'Remote', 
      type: 'Full-time',
      salary: '$140k - $185k',
      experience: '5+ years',
      department: 'Security',
      posted: '2 weeks ago',
      applicants: 31,
      featured: true,
      requirements: ['AWS/Azure Security', 'Kubernetes Security', 'IAM', 'SIEM', 'Penetration Testing', 'Compliance (SOC2, ISO27001)'],
      benefits: ['Health Insurance', '401k Match', 'Security Certifications', 'Remote Work', 'On-call Bonus']
    }
  ];

  // Load saved jobs from localStorage
  useEffect(function() {
    var saved = localStorage.getItem('savedJobs');
    if (saved) {
      setSavedJobs(JSON.parse(saved));
    }
  }, []);

  // Save job to localStorage
  var toggleSaveJob = function(jobId) {
    var newSaved;
    if (savedJobs.includes(jobId)) {
      newSaved = savedJobs.filter(function(id) { return id !== jobId; });
    } else {
      newSaved = savedJobs.concat([jobId]);
    }
    setSavedJobs(newSaved);
    localStorage.setItem('savedJobs', JSON.stringify(newSaved));
  };

  // Filter jobs
  var filteredJobs = jobs.filter(function(job) {
    var matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchTerm.toLowerCase());
    var matchesLocation = selectedLocation === 'all' || job.location === selectedLocation || 
                           (selectedLocation === 'Remote' && job.location === 'Remote');
    var matchesType = selectedType === 'all' || job.type === selectedType;
    return matchesSearch && matchesLocation && matchesType;
  });

  // Pagination
  var indexOfLastJob = currentPage * jobsPerPage;
  var indexOfFirstJob = indexOfLastJob - jobsPerPage;
  var currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  var totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  var locations = ['all', 'Remote', 'New York, NY', 'San Francisco, CA', 'Austin, TX'];
  var jobTypes = ['all', 'Full-time', 'Part-time', 'Contract'];

  return React.createElement(
    'div',
    { style: { paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' } },
    
    // Hero Section
    React.createElement(
      'section',
      { style: { padding: '60px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', position: 'relative' } },
      React.createElement(
        Container,
        null,
        React.createElement(
          Row,
          null,
          React.createElement(
            Col,
            { lg: 8, className: 'mx-auto text-center' },
            React.createElement('h1', { style: { fontSize: '3rem', fontWeight: '800', marginBottom: '20px' } }, 'Join Our Team'),
            React.createElement('p', { style: { fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.95 } }, 
              'Build the future of enterprise technology with us. We\'re looking for passionate individuals to join our growing team.')
          )
        )
      )
    ),

    // Stats Section
    React.createElement(
      'section',
      { style: { padding: '40px 0', backgroundColor: '#111' } },
      React.createElement(
        Container,
        null,
        React.createElement(
          Row,
          null,
          React.createElement(
            Col,
            { md: 3, className: 'text-center mb-3' },
            React.createElement('div', { style: { fontSize: '2rem', fontWeight: '800', color: '#667eea' } }, jobs.length + '+'),
            React.createElement('div', { style: { color: '#aaa' } }, 'Open Positions')
          ),
          React.createElement(
            Col,
            { md: 3, className: 'text-center mb-3' },
            React.createElement('div', { style: { fontSize: '2rem', fontWeight: '800', color: '#764ba2' } }, '10+'),
            React.createElement('div', { style: { color: '#aaa' } }, 'Countries')
          ),
          React.createElement(
            Col,
            { md: 3, className: 'text-center mb-3' },
            React.createElement('div', { style: { fontSize: '2rem', fontWeight: '800', color: '#f093fb' } }, '95%'),
            React.createElement('div', { style: { color: '#aaa' } }, 'Employee Retention')
          ),
          React.createElement(
            Col,
            { md: 3, className: 'text-center mb-3' },
            React.createElement('div', { style: { fontSize: '2rem', fontWeight: '800', color: '#4facfe' } }, '4.8★'),
            React.createElement('div', { style: { color: '#aaa' } }, 'Glassdoor Rating')
          )
        )
      )
    ),

    // Main Content
    React.createElement(
      Container,
      { style: { padding: '60px 0' } },
      
      // Search and Filter Section
      React.createElement(
        Row,
        { className: 'mb-4' },
        React.createElement(
          Col,
          { lg: 8, className: 'mx-auto' },
          React.createElement(
            InputGroup,
            { style: { marginBottom: '20px' } },
            React.createElement(
              InputGroup.Text,
              { style: { backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#667eea' } },
              React.createElement(FaSearch, null)
            ),
            React.createElement(Form.Control, {
              type: 'text',
              placeholder: 'Search jobs by title, department, or keywords...',
              value: searchTerm,
              onChange: function(e) { setSearchTerm(e.target.value); },
              style: { backgroundColor: '#1a1a1a', border: '1px solid #333', color: 'white' }
            })
          ),
          React.createElement(
            Row,
            null,
            React.createElement(
              Col,
              { md: 6, className: 'mb-3' },
              React.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center', gap: '10px' } },
                React.createElement(FaMapMarkerAlt, { style: { color: '#667eea' } }),
                React.createElement(
                  Form.Select,
                  {
                    value: selectedLocation,
                    onChange: function(e) { setSelectedLocation(e.target.value); },
                    style: { backgroundColor: '#1a1a1a', border: '1px solid #333', color: 'white' }
                  },
                  locations.map(function(loc) {
                    return React.createElement('option', { key: loc, value: loc }, loc === 'all' ? 'All Locations' : loc);
                  })
                )
              )
            ),
            React.createElement(
              Col,
              { md: 6, className: 'mb-3' },
              React.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center', gap: '10px' } },
                React.createElement(FaBriefcase, { style: { color: '#667eea' } }),
                React.createElement(
                  Form.Select,
                  {
                    value: selectedType,
                    onChange: function(e) { setSelectedType(e.target.value); },
                    style: { backgroundColor: '#1a1a1a', border: '1px solid #333', color: 'white' }
                  },
                  jobTypes.map(function(type) {
                    return React.createElement('option', { key: type, value: type }, type === 'all' ? 'All Job Types' : type);
                  })
                )
              )
            )
          )
        )
      ),

      // Results Count
      React.createElement(
        Row,
        { className: 'mb-4' },
        React.createElement(
          Col,
          null,
          React.createElement('p', { style: { color: '#aaa' } }, 
            'Showing ', React.createElement('strong', { style: { color: '#667eea' } }, currentJobs.length), ' of ', 
            React.createElement('strong', { style: { color: '#667eea' } }, filteredJobs.length), ' positions')
        )
      ),

      // Job Listings
      React.createElement(
        Row,
        null,
        React.createElement(
          Col,
          { lg: 8, className: 'mx-auto' },
          currentJobs.map(function(job, index) {
            return React.createElement(
              Card,
              { key: index, className: 'mb-4', style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', overflow: 'hidden' } },
              job.featured && React.createElement(
                'div',
                { style: { position: 'absolute', top: 20, right: 20, backgroundColor: '#667eea', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600', zIndex: 1 } },
                'Featured'
              ),
              React.createElement(
                Card.Body,
                { style: { padding: '30px' } },
                React.createElement(
                  Row,
                  null,
                  React.createElement(
                    Col,
                    { md: 8 },
                    React.createElement('h3', { style: { fontSize: '1.5rem', fontWeight: '600', marginBottom: '10px', color: '#667eea' } }, job.title),
                    React.createElement('p', { style: { color: '#ccc', marginBottom: '15px', lineHeight: '1.6' } }, job.description),
                    React.createElement(
                      'div',
                      { style: { display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '15px' } },
                      React.createElement(Badge, { bg: 'primary', style: { padding: '6px 12px', borderRadius: '20px' } }, 
                        React.createElement(FaMapMarkerAlt, { style: { marginRight: '5px' } }), ' ', job.location),
                      React.createElement(Badge, { bg: 'info', style: { padding: '6px 12px', borderRadius: '20px' } }, 
                        React.createElement(FaBriefcase, { style: { marginRight: '5px' } }), ' ', job.type),
                      React.createElement(Badge, { bg: 'success', style: { padding: '6px 12px', borderRadius: '20px' } }, 
                        React.createElement(FaDollarSign, { style: { marginRight: '5px' } }), ' ', job.salary),
                      React.createElement(Badge, { bg: 'warning', style: { padding: '6px 12px', borderRadius: '20px', color: '#000' } }, 
                        React.createElement(FaGraduationCap, { style: { marginRight: '5px' } }), ' ', job.experience)
                    ),
                    React.createElement(
                      'div',
                      { style: { display: 'flex', gap: '15px', color: '#888', fontSize: '0.85rem' } },
                      React.createElement('span', null, '\uD83D\uDCC5 Posted ', job.posted),
                      React.createElement('span', null, '\uD83D\uDC65 ', job.applicants, ' applicants'),
                      React.createElement('span', null, '\uD83C\uDFE2 ', job.department)
                    )
                  ),
                  React.createElement(
                    Col,
                    { md: 4, className: 'd-flex align-items-center justify-content-md-end mt-3 mt-md-0', style: { gap: '10px' } },
                    React.createElement(
                      Button,
                      {
                        variant: 'outline-primary',
                        onClick: function() { toggleSaveJob(job.id); },
                        style: { borderRadius: '50px', padding: '10px 15px' }
                      },
                      React.createElement(FaHeart, { color: savedJobs.includes(job.id) ? '#e74c3c' : '#667eea' })
                    ),
                    React.createElement(
                      Button,
                      { as: Link, to: '/jobs/' + job.id, variant: 'primary', style: { borderRadius: '50px', padding: '10px 25px' } },
                      'Apply Now →'
                    )
                  )
                )
              )
            );
          }),
          
          // Pagination
          totalPages > 1 && React.createElement(
            'div',
            { className: 'd-flex justify-content-center mt-4' },
            React.createElement(
              Pagination,
              null,
              React.createElement(Pagination.Prev, { onClick: function() { setCurrentPage(Math.max(1, currentPage - 1)); } }),
              Array(totalPages).fill().map(function(_, idx) {
                return React.createElement(Pagination.Item, {
                  key: idx,
                  active: idx + 1 === currentPage,
                  onClick: function() { setCurrentPage(idx + 1); }
                }, idx + 1);
              }),
              React.createElement(Pagination.Next, { onClick: function() { setCurrentPage(Math.min(totalPages, currentPage + 1)); } })
            )
          ),
          
          // No Results
          currentJobs.length === 0 && React.createElement(
            'div',
            { className: 'text-center', style: { padding: '60px' } },
            React.createElement('h3', null, 'No jobs found'),
            React.createElement('p', { style: { color: '#aaa' } }, 'Try adjusting your search or filter criteria')
          )
        )
      ),

      // Perks Section
      React.createElement(
        Row,
        { style: { marginTop: '60px' } },
        React.createElement(
          Col,
          null,
          React.createElement(
            'div',
            { style: { background: 'linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)', borderRadius: '20px', padding: '50px', textAlign: 'center' } },
            React.createElement('h2', { style: { fontSize: '2rem', marginBottom: '20px', color: '#667eea' } }, 'Why Join MJ&Roberts?'),
            React.createElement(
              Row,
              { style: { marginTop: '30px' } },
              React.createElement(
                Col,
                { md: 3, sm: 6, className: 'mb-4' },
                React.createElement('div', { style: { fontSize: '2rem', marginBottom: '10px' } }, '🏥'),
                React.createElement('h5', null, 'Health Benefits'),
                React.createElement('p', { style: { color: '#aaa', fontSize: '0.85rem' } }, 'Comprehensive medical, dental, and vision coverage')
              ),
              React.createElement(
                Col,
                { md: 3, sm: 6, className: 'mb-4' },
                React.createElement('div', { style: { fontSize: '2rem', marginBottom: '10px' } }, '💰'),
                React.createElement('h5', null, 'Competitive Pay'),
                React.createElement('p', { style: { color: '#aaa', fontSize: '0.85rem' } }, 'Top-tier salaries and equity packages')
              ),
              React.createElement(
                Col,
                { md: 3, sm: 6, className: 'mb-4' },
                React.createElement('div', { style: { fontSize: '2rem', marginBottom: '10px' } }, '🏠'),
                React.createElement('h5', null, 'Remote First'),
                React.createElement('p', { style: { color: '#aaa', fontSize: '0.85rem' } }, 'Work from anywhere with flexible hours')
              ),
              React.createElement(
                Col,
                { md: 3, sm: 6, className: 'mb-4' },
                React.createElement('div', { style: { fontSize: '2rem', marginBottom: '10px' } }, '📚'),
                React.createElement('h5', null, 'Learning Budget'),
                React.createElement('p', { style: { color: '#aaa', fontSize: '0.85rem' } }, '$2000 annual learning stipend')
              )
            )
          )
        )
      )
    )
  );
};

module.exports = JobsPage;