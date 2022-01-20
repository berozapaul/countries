import React, {useEffect, useState} from 'react';
import {Container} from '@material-ui/core';
import './App.css';


/*
 * Purpose: This is the main component to bootstrap the app.
 *
 * Version: 1.0
 * Author: dev@example.com
 */
const App: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect( () => {
     console.log('here');
  }, []);

  return (
      <Container maxWidth="md">
          <Header />
        <h1>this is count</h1>
      </Container>
  );
};

export default App;
