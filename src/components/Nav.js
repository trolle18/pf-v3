import '../scss/Nav.scss'; 
import React, { useState, useEffect } from 'react';
import BurgerMenu from './BurgerMenu';

const Nav = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide navbar on scroll
  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { setShow(true) } // if scroll up show the navbar
      setLastScrollY(window.scrollY); // remember current page location to use in the next move
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => { // cleanup function
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

                  <div className="nav-mob-links">
                    <BurgerMenu/>                    
                  </div>       
                               
             </div>
        </nav>
  );
};

export default Nav;