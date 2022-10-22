import '../scss/Nav.scss'; 

import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
        <nav className={`active ${show && ''}`} id="nav-cntr">
            <div className="nav-inner-cntr">
                 <div className="nav-logo"> 
                     <a href="/">Sofie Trolle</a> 
                 </div>
                 <div className="nav-links">
                     <a href="#about"> About </a> 
                     <a href="#work"> Work </a> 
                     <a href="#contact"> Contact </a>                         
                 </div>                
             </div>
        </nav>
  );
};

export default Nav;