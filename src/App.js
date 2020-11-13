import React from 'react';
import { Router } from './routes';

function App(props) {
  return (
    <div className="App">
     <Router {...props} />
    </div>
  );
}

export default App;
