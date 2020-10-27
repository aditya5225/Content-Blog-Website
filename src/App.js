import React from 'react';
import './SCSS/App.scss';
import Header from './Header';
import Home from './Pages/Home';
import Footer from './Footer';

const App = () => {
  return (
    <div className="app container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
