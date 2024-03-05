import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import PageControl from './PageControl'; 
import './../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Translate from './Translate';

function App() {
  return (
    <Router>
      <Helmet>
        <title>HRBPNRD</title>
      </Helmet>

      <div>
        <Header />
        <PageControl />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
