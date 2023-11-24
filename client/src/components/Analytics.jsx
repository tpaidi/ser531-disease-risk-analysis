import React from 'react';
import { useLocation } from 'react-router-dom';

const Analysis = () => {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <div>
      <h2>Render the results from SPARQL query</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default Analysis;
