import React, { useState, useEffect } from 'react';
import BurgerMenu from './BurgerMenu';
import '../scss/Nav.scss'; 

const Nav = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sectionData, setSectionData] = useState([]);

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

  // Fetch data from JSON
  useEffect(() => {
    async function getData() {
        const response = await fetch("/data/components/navData.json");
        const data = await response.json();
        setSectionData(data);             
    }       
      getData();        
  }, []);


  return (
    <>
      <nav className={`active ${show && ''}`} id="nav-cntr">
        {sectionData.map((data) => (
          <div className="nav-inner-cntr" key={data.id}>
                <div className="nav-logo"> 
                  {data?.logoLink.map((logoLink) => (
                    <a key={logoLink.id} href={logoLink.link}>
                      {logoLink.linkTxt}
                    </a>
                    ))}    

                </div>
                <div className="nav-links">
                  {data?.navLinks.map((navLink) => (
                    <a key={navLink.id} href={navLink.link}>
                      {navLink.linkTxt}
                    </a>
                    ))}    
                </div>

                <div className="nav-mob-links">                 
                    <BurgerMenu data={data}/>               
                </div>                              
            </div>
        ))}
      </nav>
    </>       
  );
};

export default Nav;