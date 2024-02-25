import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import PageControl from './PageControl';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <PageControl />
      </div>
    </Router>
  );
}

export default App;
