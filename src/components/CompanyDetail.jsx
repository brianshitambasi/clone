// components/CompanyDetail.jsx
/* eslint-disable no-unused-vars */
const React = require('react');
const { Button } = require('react-bootstrap');
const { Link, useParams } = require('react-router-dom');

const CompanyDetail = () => {
  const { id } = useParams();
  return React.createElement(
    'div',
    { style: { paddingTop: '80px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' } },
    React.createElement('h1', null, 'Company: ', id),
    React.createElement('p', null, 'Detailed company information coming soon.'),
    React.createElement(Button, { as: Link, to: '/company', variant: 'primary' }, 'Back to Company')
  );
};

module.exports = CompanyDetail;