import React, { useState } from 'react';
import NavTabs from './Nav/index';
// import Home from './Home';
import About from './About/index';
import Projects from './Projects/index';
import Contact from './Contact/index';

function Portfolio() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    
    switch(currentPage) {
    //   case "About":
    //     return <About />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <About />
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
          <h1>Alex Nance</h1>
        {
          // Render the component returned by 'renderPage()'
          
          renderPage()
        }
      </div>
    </div>
  );
}

export default Portfolio;