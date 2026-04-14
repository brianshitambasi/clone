// components/InsightDetail.jsx
/* eslint-disable no-unused-vars */
const React = require('react');
const { Button } = require('react-bootstrap');
const { Link, useParams } = require('react-router-dom');

const InsightDetail = () => {
  const { id } = useParams();
  return React.createElement(
    'div',
    { style: { paddingTop: '80px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' } },
    React.createElement('h1', null, 'Insight: ', id),
    React.createElement('p', null, 'Full article content coming soon.'),
    React.createElement(Button, { as: Link, to: '/insights', variant: 'primary' }, 'Back to Insights')
  );
};

module.exports = InsightDetail;