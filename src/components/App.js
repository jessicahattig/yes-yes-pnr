import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import PageControl from './PageControl';
import Translate from './Translate';  
import './../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Title</title>
      </Helmet>

      <div>
        <Header />
        <PageControl />
        <Translate />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
