import React, { useState } from 'react';
import NavTabs from './Nav/index';
import Resume from './Resume/index';
import About from './About/index';
import Projects from './Projects/index';
import Contact from './Contact/index';
import Footer from './Footer/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import background from "../assets/media/background.jpg";

function Portfolio() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    
    switch(currentPage) {
      case "Portfolio":
        return <Projects />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />
    }
  };

  return (
    <div className="background" style={{ 
        backgroundImage: `url(${background})` }}>
        <h1>Alexandra Nance</h1>
        <div className="Nav-Tab" >
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      <div>
          
        {
          // Render the component returned by 'renderPage()'
          
          renderPage()
        }
      </div>
      <div className="footer">
          <Footer></Footer>
          
      </div>
    </div>
  );
}

export default Portfolio;