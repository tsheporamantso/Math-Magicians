import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get(
          'https://api.api-ninjas.com/v1/quotes?category=happiness',
          {
            headers: {
              'X-Api-Key': '8drNkRgBM67MsfIAoQ82+w==b4LiGRZa4Ue27WtI',
            },
          },
        );
        setQuote(response.data[0].quote);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchQuote();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {' '}
        {error}
      </p>
    );
  }

  return <p style={{ fontStyle: 'italic' }}>{quote}</p>;
};

export default Quote;
