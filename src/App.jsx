import React from 'react';
import Topbar from './components/bar/Topbar';
import Contact from './components/contact/Contact';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Portfolio from './components/portfolio/Portfolio';
import Intro from './components/intro/Intro';
import './app.scss'

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
      

    </div>
  );
}

export default App;
