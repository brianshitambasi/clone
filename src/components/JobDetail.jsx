// components/JobDetail.jsx
const React = require('react');
const { useState } = React;
const { Container, Row, Col, Card, Button, Badge, ListGroup, Form, Alert, Modal } = require('react-bootstrap');
const { Link, useParams } = require('react-router-dom');
const { 
  FaMapMarkerAlt, FaBriefcase, FaDollarSign, FaGraduationCap, FaClock, 
  FaArrowLeft, FaCheckCircle, FaHeart, FaShare, FaPrint, 
  FaCalendarAlt, FaUsers, FaBuilding, FaLaptop, FaCoffee, FaGym,
  FaBook, FaPlane, FaMobile, FaHome
} = require('react-icons/fa');

const JobDetail = function() {
  const { id } = useParams();
  const [saved, setSaved] = useState(false);
  const [showApply, setShowApply] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resume: null
  });

  var jobsData = {
    'senior-fullstack': {
      title: 'Senior Full Stack Developer',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120k - $160k',
      experience: '5+ years',
      department: 'Engineering',
      posted: '2 days ago',
      applicants: 45,
      description: 'We are seeking an experienced Senior Full Stack Developer to lead our web development team. You will be responsible for architecting and building scalable web applications that serve enterprise clients worldwide.\n\nAs a technical leader, you will mentor junior developers, conduct code reviews, and drive best practices across the engineering organization. You\'ll work closely with product managers and designers to deliver high-quality features that solve real business problems.\n\nOur tech stack includes React, Node.js, TypeScript, GraphQL, and cloud services on AWS/Azure. We practice continuous deployment and value clean, maintainable code.',
      responsibilities: [
        'Architect and build scalable web applications using React and Node.js',
        'Lead technical design discussions and architecture reviews',
        'Mentor junior developers and conduct code reviews',
        'Collaborate with product managers and designers',
        'Optimize application performance and ensure security best practices',
        'Participate in on-call rotation for critical systems',
        'Drive continuous improvement in development processes'
      ],
      requirements: [
        '5+ years of professional software development experience',
        'Strong proficiency in React, Node.js, and TypeScript',
        'Experience with GraphQL and REST APIs',
        'Knowledge of cloud platforms (AWS or Azure)',
        'Experience with MongoDB, PostgreSQL, or similar databases',
        'Understanding of CI/CD pipelines and DevOps practices',
        'Bachelor\'s degree in Computer Science or equivalent experience'
      ],
      benefits: [
        { icon: React.createElement(FaHeart), title: 'Health Insurance', desc: 'Comprehensive medical, dental, and vision coverage' },
        { icon: React.createElement(FaDollarSign), title: '401k Match', desc: '4% match on 401k contributions' },
        { icon: React.createElement(FaHome), title: 'Remote Work', desc: 'Work from anywhere with home office stipend' },
        { icon: React.createElement(FaBook), title: 'Learning Budget', desc: '$2000 annual learning and development budget' },
        { icon: React.createElement(FaClock), title: 'Flexible Hours', desc: 'Flexible working hours and unlimited PTO' },
        { icon: React.createElement(FaCoffee), title: 'Wellness Stipend', desc: '$500 quarterly wellness allowance' }
      ],
      team: {
        size: 12,
        manager: 'Sarah Johnson',
        techLead: 'Michael Chen',
        culture: 'Collaborative, innovative, and fast-paced'
      },
      interviewProcess: [
        'Initial screening (30 min video call)',
        'Technical assessment (take-home project)',
        'Technical interview with the team (1 hour)',
        'System design interview (1 hour)',
        'Culture fit interview with leadership (45 min)'
      ]
    }
  };

  var defaultJob = {
    title: (id || '').replace(/-/g, ' ').replace(/\b\w/g, function(l) { return l.toUpperCase(); }),
    location: 'Various Locations',
    type: 'Full-time',
    salary: 'Competitive',
    experience: 'Varies',
    department: 'Various',
    posted: 'Recently',
    applicants: 0,
    description: 'Detailed job description and requirements coming soon. Please check back later or contact us for more information.',
    responsibilities: ['Detailed responsibilities to be announced'],
    requirements: ['Detailed requirements to be announced'],
    benefits: [{ icon: React.createElement(FaHeart), title: 'Competitive Benefits', desc: 'Comprehensive benefits package' }],
    team: { size: 0, manager: 'TBD', techLead: 'TBD', culture: 'Collaborative and innovative' },
    interviewProcess: ['Application review', 'Initial screening', 'Team interview', 'Final decision']
  };

  var job = jobsData[id] || defaultJob;

  var handleInputChange = function(e) {
    var name = e.target.name;
    var value = e.target.value;
    var files = e.target.files;
    if (name === 'resume') {
      setFormData(Object.assign({}, formData, { resume: files[0] }));
    } else {
      setFormData(Object.assign({}, formData, { [name]: value }));
    }
  };

  var handleSubmitApplication = function(e) {
    e.preventDefault();
    setApplicationSubmitted(true);
    setTimeout(function() {
      setShowApply(false);
      setApplicationSubmitted(false);
      setFormData({ name: '', email: '', phone: '', experience: '', coverLetter: '', resume: null });
    }, 3000);
  };

  return React.createElement(
    'div',
    { style: { paddingTop: '80px', backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' } },
    React.createElement(
      Container,
      { style: { padding: '40px 0' } },
      
      // Back Button
      React.createElement(
        Button,
        { as: Link, to: '/jobs', variant: 'link', style: { color: '#667eea', marginBottom: '20px', paddingLeft: 0 } },
        React.createElement(FaArrowLeft, { style: { marginRight: '5px' } }), ' Back to all jobs'
      ),
      
      React.createElement(
        Row,
        null,
        // Left Column
        React.createElement(
          Col,
          { lg: 8 },
          
          // Job Header
          React.createElement(
            Card,
            { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '30px' } },
            React.createElement(
              Card.Body,
              { style: { padding: '30px' } },
              React.createElement(
                'div',
                { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '20px' } },
                React.createElement('h1', { style: { fontSize: '2rem', fontWeight: '700', marginBottom: '10px', color: '#667eea' } }, job.title),
                React.createElement(
                  'div',
                  { style: { display: 'flex', gap: '10px' } },
                  React.createElement(Button, { variant: 'outline-primary', onClick: function() { setSaved(!saved); }, style: { borderRadius: '50px' } },
                    React.createElement(FaHeart, { color: saved ? '#e74c3c' : '#667eea' })),
                  React.createElement(Button, { variant: 'outline-primary', style: { borderRadius: '50px' } }, React.createElement(FaShare, null)),
                  React.createElement(Button, { variant: 'outline-primary', style: { borderRadius: '50px' } }, React.createElement(FaPrint, null))
                )
              ),
              React.createElement(
                'div',
                { style: { display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '20px' } },
                React.createElement(Badge, { bg: 'primary', style: { padding: '8px 16px', borderRadius: '20px' } },
                  React.createElement(FaMapMarkerAlt, { style: { marginRight: '5px' } }), ' ', job.location),
                React.createElement(Badge, { bg: 'info', style: { padding: '8px 16px', borderRadius: '20px' } },
                  React.createElement(FaBriefcase, { style: { marginRight: '5px' } }), ' ', job.type),
                React.createElement(Badge, { bg: 'success', style: { padding: '8px 16px', borderRadius: '20px' } },
                  React.createElement(FaDollarSign, { style: { marginRight: '5px' } }), ' ', job.salary),
                React.createElement(Badge, { bg: 'warning', style: { padding: '8px 16px', borderRadius: '20px', color: '#000' } },
                  React.createElement(FaGraduationCap, { style: { marginRight: '5px' } }), ' ', job.experience)
              ),
              React.createElement(
                'div',
                { style: { display: 'flex', gap: '20px', color: '#888', fontSize: '0.9rem', flexWrap: 'wrap' } },
                React.createElement('span', null, React.createElement(FaCalendarAlt, { style: { marginRight: '5px' } }), ' Posted ', job.posted),
                React.createElement('span', null, React.createElement(FaUsers, { style: { marginRight: '5px' } }), ' ', job.applicants, ' applicants'),
                React.createElement('span', null, React.createElement(FaBuilding, { style: { marginRight: '5px' } }), ' ', job.department)
              )
            )
          ),
          
          // Job Description
          React.createElement(
            Card,
            { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '30px' } },
            React.createElement(
              Card.Body,
              { style: { padding: '30px' } },
              React.createElement('h3', { style: { marginBottom: '20px', color: '#667eea' } }, 'Job Description'),
              React.createElement('p', { style: { color: '#ccc', lineHeight: '1.8', whiteSpace: 'pre-line' } }, job.description)
            )
          ),
          
          // Responsibilities
          React.createElement(
            Card,
            { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '30px' } },
            React.createElement(
              Card.Body,
              { style: { padding: '30px' } },
              React.createElement('h3', { style: { marginBottom: '20px', color: '#667eea' } }, 'Key Responsibilities'),
              React.createElement(
                ListGroup,
                { variant: 'flush', style: { backgroundColor: 'transparent' } },
                job.responsibilities.map(function(resp, idx) {
                  return React.createElement(
                    ListGroup.Item,
                    { key: idx, style: { backgroundColor: 'transparent', color: '#ccc', borderColor: '#333', padding: '10px 0' } },
                    React.createElement(FaCheckCircle, { style: { color: '#10b981', marginRight: '10px' } }), ' ', resp
                  );
                })
              )
            )
          ),
          
          // Requirements
          React.createElement(
            Card,
            { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '30px' } },
            React.createElement(
              Card.Body,
              { style: { padding: '30px' } },
              React.createElement('h3', { style: { marginBottom: '20px', color: '#667eea' } }, 'Requirements'),
              React.createElement(
                ListGroup,
                { variant: 'flush', style: { backgroundColor: 'transparent' } },
                job.requirements.map(function(req, idx) {
                  return React.createElement(
                    ListGroup.Item,
                    { key: idx, style: { backgroundColor: 'transparent', color: '#ccc', borderColor: '#333', padding: '10px 0' } },
                    React.createElement(FaCheckCircle, { style: { color: '#10b981', marginRight: '10px' } }), ' ', req
                  );
                })
              )
            )
          ),
          
          // Interview Process
          React.createElement(
            Card,
            { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '30px' } },
            React.createElement(
              Card.Body,
              { style: { padding: '30px' } },
              React.createElement('h3', { style: { marginBottom: '20px', color: '#667eea' } }, 'Interview Process'),
              React.createElement(
                Row,
                null,
                job.interviewProcess.map(function(step, idx) {
                  return React.createElement(
                    Col,
                    { md: 6, key: idx, className: 'mb-3' },
                    React.createElement(
                      'div',
                      { style: { backgroundColor: '#222', padding: '15px', borderRadius: '10px', borderLeft: '4px solid #667eea' } },
                      React.createElement('strong', { style: { color: '#667eea' } }, 'Step ', idx + 1),
                      React.createElement('p', { style: { color: '#ccc', marginTop: '5px', marginBottom: 0 } }, step)
                    )
                  );
                })
              )
            )
          )
        ),
        
        // Right Column
        React.createElement(
          Col,
          { lg: 4 },
          
          // Apply Button
          React.createElement(
            Card,
            { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '30px', position: 'sticky', top: '100px' } },
            React.createElement(
              Card.Body,
              { style: { padding: '30px', textAlign: 'center' } },
              React.createElement('h3', { style: { marginBottom: '20px' } }, 'Ready to Apply?'),
              React.createElement(
                Button,
                { variant: 'primary', size: 'lg', onClick: function() { setShowApply(true); }, style: { width: '100%', borderRadius: '50px', marginBottom: '15px' } },
                'Apply Now'
              ),
              React.createElement('p', { style: { color: '#aaa', fontSize: '0.85rem' } }, 'Applications are reviewed within 5 business days')
            )
          ),
          
          // Benefits
          React.createElement(
            Card,
            { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '30px' } },
            React.createElement(
              Card.Body,
              { style: { padding: '30px' } },
              React.createElement('h3', { style: { marginBottom: '20px', color: '#667eea' } }, 'Benefits'),
              job.benefits.map(function(benefit, idx) {
                return React.createElement(
                  'div',
                  { key: idx, style: { display: 'flex', alignItems: 'center', marginBottom: '15px' } },
                  React.createElement('div', { style: { fontSize: '1.5rem', color: '#667eea', marginRight: '15px' } }, benefit.icon),
                  React.createElement(
                    'div',
                    null,
                    React.createElement('strong', null, benefit.title),
                    React.createElement('p', { style: { color: '#aaa', marginBottom: 0, fontSize: '0.85rem' } }, benefit.desc)
                  )
                );
              })
            )
          ),
          
          // Team Info
          React.createElement(
            Card,
            { style: { backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px' } },
            React.createElement(
              Card.Body,
              { style: { padding: '30px' } },
              React.createElement('h3', { style: { marginBottom: '20px', color: '#667eea' } }, 'Team & Culture'),
              React.createElement(
                'div',
                { style: { marginBottom: '15px' } },
                React.createElement('div', { style: { color: '#aaa', marginBottom: '5px' } }, 'Team Size'),
                React.createElement('div', { style: { fontWeight: '600' } }, job.team.size, ' members')
              ),
              React.createElement(
                'div',
                { style: { marginBottom: '15px' } },
                React.createElement('div', { style: { color: '#aaa', marginBottom: '5px' } }, 'Hiring Manager'),
                React.createElement('div', { style: { fontWeight: '600' } }, job.team.manager)
              ),
              React.createElement(
                'div',
                { style: { marginBottom: '15px' } },
                React.createElement('div', { style: { color: '#aaa', marginBottom: '5px' } }, 'Tech Lead'),
                React.createElement('div', { style: { fontWeight: '600' } }, job.team.techLead)
              ),
              React.createElement(
                'div',
                null,
                React.createElement('div', { style: { color: '#aaa', marginBottom: '5px' } }, 'Culture'),
                React.createElement('div', { style: { fontWeight: '600' } }, job.team.culture)
              )
            )
          )
        )
      ),
      
      // Application Modal
      React.createElement(
        Modal,
        { show: showApply, onHide: function() { setShowApply(false); }, size: 'lg', centered },
        React.createElement(
          Modal.Header,
          { style: { backgroundColor: '#1a1a1a', borderBottom: '1px solid #333' } },
          React.createElement(Modal.Title, { style: { color: 'white' } }, 'Apply for ', job.title),
          React.createElement(Button, { variant: 'close', onClick: function() { setShowApply(false); }, style: { filter: 'invert(1)' } })
        ),
        React.createElement(
          Modal.Body,
          { style: { backgroundColor: '#0a0a0a', color: 'white' } },
          applicationSubmitted ?
            React.createElement(Alert, { variant: 'success', style: { textAlign: 'center', padding: '40px' } },
              React.createElement('h4', null, 'Application Submitted!'),
              React.createElement('p', null, 'Thank you for your interest. We\'ll review your application and get back to you soon.')
            ) :
            React.createElement(
              Form,
              { onSubmit: handleSubmitApplication },
              React.createElement(
                Form.Group,
                { className: 'mb-3' },
                React.createElement(Form.Label, null, 'Full Name *'),
                React.createElement(Form.Control, {
                  type: 'text',
                  name: 'name',
                  value: formData.name,
                  onChange: handleInputChange,
                  required: true,
                  style: { backgroundColor: '#1a1a1a', border: '1px solid #333', color: 'white' }
                })
              ),
              React.createElement(
                Form.Group,
                { className: 'mb-3' },
                React.createElement(Form.Label, null, 'Email Address *'),
                React.createElement(Form.Control, {
                  type: 'email',
                  name: 'email',
                  value: formData.email,
                  onChange: handleInputChange,
                  required: true,
                  style: { backgroundColor: '#1a1a1a', border: '1px solid #333', color: 'white' }
                })
              ),
              React.createElement(
                Form.Group,
                { className: 'mb-3' },
                React.createElement(Form.Label, null, 'Phone Number'),
                React.createElement(Form.Control, {
                  type: 'tel',
                  name: 'phone',
                  value: formData.phone,
                  onChange: handleInputChange,
                  style: { backgroundColor: '#1a1a1a', border: '1px solid #333', color: 'white' }
                })
              ),
              React.createElement(
                Form.Group,
                { className: 'mb-3' },
                React.createElement(Form.Label, null, 'Years of Experience *'),
                React.createElement(
                  Form.Select,
                  {
                    name: 'experience',
                    value: formData.experience,
                    onChange: handleInputChange,
                    required: true,
                    style: { backgroundColor: '#1a1a1a', border: '1px solid #333', color: 'white' }
                  },
                  React.createElement('option', { value: '' }, 'Select experience level'),
                  React.createElement('option', { value: '0-2' }, '0-2 years'),
                  React.createElement('option', { value: '3-5' }, '3-5 years'),
                  React.createElement('option', { value: '5-8' }, '5-8 years'),
                  React.createElement('option', { value: '8+' }, '8+ years')
                )
              ),
              React.createElement(
                Form.Group,
                { className: 'mb-3' },
                React.createElement(Form.Label, null, 'Cover Letter'),
                React.createElement(Form.Control, {
                  as: 'textarea',
                  name: 'coverLetter',
                  rows: 4,
                  value: formData.coverLetter,
                  onChange: handleInputChange,
                  placeholder: 'Tell us why you\'re interested in this position...',
                  style: { backgroundColor: '#1a1a1a', border: '1px solid #333', color: 'white' }
                })
              ),
              React.createElement(
                Form.Group,
                { className: 'mb-3' },
                React.createElement(Form.Label, null, 'Resume/CV *'),
                React.createElement(Form.Control, {
                  type: 'file',
                  name: 'resume',
                  onChange: handleInputChange,
                  accept: '.pdf,.doc,.docx',
                  required: true,
                  style: { backgroundColor: '#1a1a1a', border: '1px solid #333', color: 'white' }
                }),
                React.createElement(Form.Text, { style: { color: '#aaa' } }, 'PDF, DOC, or DOCX (max 5MB)')
              ),
              React.createElement(Button, { type: 'submit', variant: 'primary', style: { width: '100%', borderRadius: '50px', padding: '12px' } }, 'Submit Application')
            )
        )
      )
    )
  );
};

module.exports = JobDetail;