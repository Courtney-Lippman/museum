async function fetchSmithsonianData() {
    try {
      const response = await fetch('https://api.si.edu/openaccess/api/v1.0/content', {
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': 'rTNkRzLQtVqOKYB9xmUFuY4gmQcSQ32jSz4HRDmi',
        },
      });
  
      if (!response.ok) {
        throw new Error('Request failed');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  