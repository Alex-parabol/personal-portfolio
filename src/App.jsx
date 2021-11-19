import React, {useState} from 'react';
import Topbar from './components/bar/Topbar';
import Contact from './components/contact/Contact';
import Works from './components/works/Works';
import Portfolio from './components/portfolio/Portfolio';
import Intro from './components/intro/Intro';
import SideMenu from './components/sideMenu/SideMenu'

import './app.scss'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
       
        <Contact/>
      </div>
      

    </div>
  );
}

export default App;
