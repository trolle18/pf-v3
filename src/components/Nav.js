import React, { useState, useEffect } from 'react';
import BurgerMenu from './BurgerMenu';

const Nav = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [globalData, setGlobalData] = useState([]);

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
      const response = await fetch("/data/components/globalData.json");
      const data = await response.json();
      setGlobalData(data);             
    }       
    getData();        
  }, []);


    return (
      <>
        <nav className={`active ${show && ''}`} id="nav">
          {globalData.map((data) => (
            <div className="nav-inner-cntr" key={data.id}>

              <div className="nav-inner-cntr__logo"> 
                {data?.links
                .filter((link) => link.type.includes("logo"))
                .map((link) => (
                  <a key={link.id} href={link.url}>
                    {link.text}
                  </a>
                ))}
              </div>

              <div className="nav-inner-cntr__links">
                {data?.links
                .filter((link) => link.type.includes("section"))
                .map((link) => (
                  <a key={link.id} href={link.url}>
                    {link.text}
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