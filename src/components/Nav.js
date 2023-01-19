import React, { useState, useEffect } from 'react';
import BurgerMenu from './BurgerMenu';

const Nav = ({ globalData }) => {
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

  function setLinkTarget(link) {
    const linkTarget = link.target
    if(linkTarget) {
      return (linkTarget)
    }
  }

  return (
    <>
      <nav className={`active ${show && ''}`} id="nav">
        <div className={`backdrop hidden ${show && ''}`} id='backdrop'></div>

        <div className="nav-cntr">
          {globalData?.map((data) => (
            <div className="nav-inner-cntr" key={data?.id}>

              <div className="nav-inner-cntr__logo">
                {data?.links
                ?.filter((link) => link?.type?.includes("logo"))
                ?.map((link) => (
                  <a key={link?.id} href={link?.url} className="navlink" aria-label={link?.text}>
                    {link?.text}
                  </a>
                ))}
              </div>

              <div className="nav-inner-cntr__links">
                {data?.links
                .filter((link) => link?.type?.includes("section") || link?.type?.includes("navlink"))
                .map((link) => (
                  <a key={link?.id} href={link?.url} className="navlink" aria-label={link?.text} target={setLinkTarget(link)}>
                    {link?.text}
                  </a>
                ))}
       
              </div>

              <div className="burger-menu">
                <BurgerMenu data={data}/>
              </div>
            </div>
          ))}
        </div>

      </nav>
    </>
  );
};

export default Nav;