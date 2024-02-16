import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const DataFetching = async () => {
    try {
      const {
        data: { books },
      } = await axios.get('https://reactnd-books-api.udacity.com/books', {
        headers: { Authorization: 'whatever-you-want' },
      });

      console.log(books);
      setData(books);
    } catch (er) {
      console.log('error', er.message);
    }
  };

  useEffect(() => {
    DataFetching();
  }, []);

  return (
    <div>
      {data.map(({ id, description, imageLinks: { thumbnail } }, index) => {
        return (
          <div key={id}>
            <img src={thumbnail} alt="" />
            <p>{description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
