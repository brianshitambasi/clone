// components/CaseStudyDetail.jsx
/* eslint-disable no-unused-vars */
const React = require('react');
const { Button } = require('react-bootstrap');
const { Link, useParams } = require('react-router-dom');

const CaseStudyDetail = () => {
  const { id } = useParams();
  return React.createElement(
    'div',
    { style: { paddingTop: '80px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' } },
    React.createElement('h1', null, 'Case Study: ', id),
    React.createElement('p', null, 'Detailed case study content coming soon.'),
    React.createElement(Button, { as: Link, to: '/case-studies', variant: 'primary' }, 'Back to Case Studies')
  );
};

module.exports = CaseStudyDetail;