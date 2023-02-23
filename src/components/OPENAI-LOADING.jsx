

import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com')
      .then(response => response.json())
      .then(data => {
        setLoading(false);
      });
  }, []);

  return loading ? <p>Loading...</p> : null;
};

export default Loader;