// components/JobApplicationPage.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaDollarSign, FaGraduationCap, FaWhatsapp } from 'react-icons/fa';

const JobApplicationPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  
  const jobs = {
    1: {
      title: 'Senior Cloud Architect',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      salary: 'KES 250,000 - 350,000',
      experience: '5-7 years',
      department: 'Cloud Engineering'
    },
    2: {
      title: 'Salesforce Consultant',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      salary: 'KES 180,000 - 280,000',
      experience: '3-5 years',
      department: 'CRM Practice'
    },
    3: {
      title: 'DevOps Engineer',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      salary: 'KES 200,000 - 300,000',
      experience: '3-5 years',
      department: 'Platform Engineering'
    },
    4: {
      title: 'Data Analytics Specialist',
      location: 'Remote',
      type: 'Full-time',
      salary: 'KES 150,000 - 220,000',
      experience: '2-4 years',
      department: 'Data & Analytics'
    }
  };

  const job = jobs[jobId] || jobs[1];

  // WhatsApp number with correct Kenya format (without leading 0)
  // 0116378188 becomes 254116378188 (remove leading 0 and add 254)
  const whatsappNumber = '254116378188';
  const whatsappMessage = encodeURIComponent(`Hello! I'm interested in the ${job.title} position. I've submitted my application.`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    currentCompany: '',
    coverLetter: '',
    resumeLink: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Create the email content
    const emailContent = `
NEW JOB APPLICATION - MJ & ROBERTS CONSULTING

Position: ${job.title}
Department: ${job.department}
Location: ${job.location}

APPLICANT DETAILS:
-----------------
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Years of Experience: ${formData.experience}
Current/Previous Company: ${formData.currentCompany || 'Not specified'}

COVER LETTER:
-------------
${formData.coverLetter || 'No cover letter provided'}

RESUME/CV LINK:
---------------
${formData.resumeLink || 'Not provided'}

Application Date: ${new Date().toLocaleString()}
    `;

    const emailSubject = `Job Application: ${job.title} - ${formData.fullName}`;
    const recipientEmail = 'brianshitambasi270@gmail.com';
    
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailContent)}`;
    
    // Store in localStorage as backup
    const applicationData = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      jobTitle: job.title,
      department: job.department,
      location: job.location,
      experience: formData.experience,
      currentCompany: formData.currentCompany,
      coverLetter: formData.coverLetter,
      resumeLink: formData.resumeLink,
      subject: emailSubject,
      message: emailContent,
      recipientEmail: recipientEmail,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('pendingApplication', JSON.stringify(applicationData));
    
    // Open email client
    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      
      alert('Application prepared! Please check your email app to send the application.');
      
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 500);
  };

  // Handle WhatsApp application submission
  const handleWhatsAppSubmit = () => {
    const message = `
NEW JOB APPLICATION - MJ & ROBERTS CONSULTING

Position: ${job.title}
Department: ${job.department}
Location: ${job.location}

APPLICANT DETAILS:
-----------------
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Years of Experience: ${formData.experience}
Current/Previous Company: ${formData.currentCompany || 'Not specified'}

COVER LETTER:
-------------
${formData.coverLetter || 'No cover letter provided'}

RESUME/CV LINK:
---------------
${formData.resumeLink || 'Not provided'}
    `;
    
    const whatsappMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;
    window.open(whatsappUrl, '_blank');
    
    alert('WhatsApp chat opened! Send your application message.');
  };

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <Container>
        <Button 
          as={Link} 
          to="/jobs" 
          variant="outline-light" 
          style={{ marginBottom: '30px', borderRadius: '50px' }}
        >
          <FaArrowLeft className="me-2" /> Back to Jobs
        </Button>

        <Row>
          <Col lg={8}>
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '30px' }}>
              <Card.Body style={{ padding: '40px' }}>
                <h2 style={{ color: '#fff', marginBottom: '10px' }}>Apply for {job.title}</h2>
                <p style={{ color: '#aaa' }}>Complete the form below to submit your application</p>
                
                {/* Fixed WhatsApp Alert with correct number */}
                <Alert variant="success" style={{ backgroundColor: '#25D366', color: '#fff', borderRadius: '10px', marginBottom: '20px', border: 'none' }}>
                  <FaWhatsapp className="me-2" />
                  <strong>Questions? Chat on WhatsApp: 0116378188</strong>
                  <br />
                  <small>Click to chat: 
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline', marginLeft: '5px' }}>
                      wa.me/254116378188
                    </a>
                  </small>
                </Alert>
                
                {error && (
                  <Alert variant="danger" style={{ borderRadius: '10px' }}>
                    ❌ {error}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: '#fff' }}>Full Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                          style={{ backgroundColor: '#2a2a2a', color: '#fff', border: '1px solid #444' }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: '#fff' }}>Email Address *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email address"
                          style={{ backgroundColor: '#2a2a2a', color: '#fff', border: '1px solid #444' }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: '#fff' }}>Phone Number *</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="07XX XXX XXX or 01XX XXX XXX"
                          style={{ backgroundColor: '#2a2a2a', color: '#fff', border: '1px solid #444' }}
                        />
                        <Form.Text style={{ color: '#aaa' }}>
                          Enter your phone number (e.g., 07XXXXXXXX or 01XXXXXXXX)
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: '#fff' }}>Years of Experience *</Form.Label>
                        <Form.Select
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          required
                          style={{ backgroundColor: '#2a2a2a', color: '#fff', border: '1px solid #444' }}
                        >
                          <option value="">Select experience level</option>
                          <option value="0-1 years">0-1 years (Entry level)</option>
                          <option value="1-3 years">1-3 years (Junior)</option>
                          <option value="3-5 years">3-5 years (Mid-level)</option>
                          <option value="5-7 years">5-7 years (Senior)</option>
                          <option value="7+ years">7+ years (Expert)</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: '#fff' }}>Current/Previous Company</Form.Label>
                    <Form.Control
                      type="text"
                      name="currentCompany"
                      value={formData.currentCompany}
                      onChange={handleChange}
                      placeholder="Optional"
                      style={{ backgroundColor: '#2a2a2a', color: '#fff', border: '1px solid #444' }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: '#fff' }}>Cover Letter</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us why you're the right fit for this position..."
                      style={{ backgroundColor: '#2a2a2a', color: '#fff', border: '1px solid #444' }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label style={{ color: '#fff' }}>Resume/CV Link (Google Drive, Dropbox, or LinkedIn) *</Form.Label>
                    <Form.Control
                      type="url"
                      name="resumeLink"
                      value={formData.resumeLink}
                      onChange={handleChange}
                      required
                      placeholder="https://drive.google.com/your-resume or LinkedIn profile URL"
                      style={{ backgroundColor: '#2a2a2a', color: '#fff', border: '1px solid #444' }}
                    />
                    <Form.Text style={{ color: '#aaa' }}>
                      Please share a link to your resume/CV (Google Drive, Dropbox, or LinkedIn profile)
                    </Form.Text>
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '14px',
                      borderRadius: '10px',
                      fontWeight: '700',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      border: 'none',
                      marginBottom: '10px'
                    }}
                  >
                    {isSubmitting ? 'Preparing Application...' : 'Submit via Email'}
                  </Button>

                  <Button
                    type="button"
                    variant="success"
                    onClick={handleWhatsAppSubmit}
                    disabled={!formData.fullName || !formData.email}
                    style={{
                      width: '100%',
                      padding: '14px',
                      borderRadius: '10px',
                      fontWeight: '700',
                      backgroundColor: '#25D366',
                      border: 'none'
                    }}
                  >
                    <FaWhatsapp className="me-2" /> Submit via WhatsApp
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px', marginBottom: '20px' }}>
              <Card.Body style={{ padding: '30px' }}>
                <h5 style={{ color: '#fff', marginBottom: '20px' }}>Job Details</h5>
                
                <div style={{ marginBottom: '15px' }}>
                  <FaBriefcase style={{ color: '#667eea', marginRight: '10px' }} />
                  <strong style={{ color: '#fff' }}>Position:</strong>
                  <p style={{ color: '#aaa', margin: '5px 0 0 25px' }}>{job.title}</p>
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                  <FaMapMarkerAlt style={{ color: '#667eea', marginRight: '10px' }} />
                  <strong style={{ color: '#fff' }}>Location:</strong>
                  <p style={{ color: '#aaa', margin: '5px 0 0 25px' }}>{job.location}</p>
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                  <FaBriefcase style={{ color: '#667eea', marginRight: '10px' }} />
                  <strong style={{ color: '#fff' }}>Job Type:</strong>
                  <p style={{ color: '#aaa', margin: '5px 0 0 25px' }}>{job.type}</p>
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                  <FaDollarSign style={{ color: '#667eea', marginRight: '10px' }} />
                  <strong style={{ color: '#fff' }}>Salary Range:</strong>
                  <p style={{ color: '#aaa', margin: '5px 0 0 25px' }}>{job.salary}</p>
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                  <FaGraduationCap style={{ color: '#667eea', marginRight: '10px' }} />
                  <strong style={{ color: '#fff' }}>Experience:</strong>
                  <p style={{ color: '#aaa', margin: '5px 0 0 25px' }}>{job.experience}</p>
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                  <FaWhatsapp style={{ color: '#25D366', marginRight: '10px' }} />
                  <strong style={{ color: '#fff' }}>WhatsApp Support:</strong>
                  <p style={{ color: '#aaa', margin: '5px 0 0 25px' }}>0116378188</p>
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                  <FaEnvelope style={{ color: '#667eea', marginRight: '10px' }} />
                  <strong style={{ color: '#fff' }}>Send to:</strong>
                  <p style={{ color: '#aaa', margin: '5px 0 0 25px', fontSize: '12px' }}>brianshitambasi270@gmail.com</p>
                </div>
              </Card.Body>
            </Card>

            <Card style={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '15px' }}>
              <Card.Body style={{ padding: '30px' }}>
                <h5 style={{ color: '#fff', marginBottom: '15px' }}>Application Tips</h5>
                <ul style={{ color: '#aaa' }}>
                  <li style={{ marginBottom: '10px' }}>📝 Customize your cover letter for this role</li>
                  <li style={{ marginBottom: '10px' }}>📄 Ensure your CV highlights relevant experience</li>
                  <li style={{ marginBottom: '10px' }}>⏰ Applications reviewed within 5 business days</li>
                  <li style={{ marginBottom: '10px' }}>📧 You'll receive confirmation via email</li>
                  <li style={{ marginBottom: '10px' }}>💬 Chat on WhatsApp: <strong>0116378188</strong> for quick questions</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JobApplicationPage;