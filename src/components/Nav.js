import '../scss/Nav.scss'; 
import React, { useState, useEffect } from 'react';

    // // Intersection observer
    // let cardObserverOptions = {
    //     threshold: 0.25
    // };
    // var cardObserver = new IntersectionObserver(cardObserverCallback, cardObserverOptions);
    // function cardObserverCallback(entries, observer) {
    //     entries.forEach(entry => {
    //         entry.target.classList.toggle("show", entry.isIntersecting)
    //         if (entry.isIntersecting) {
    //             observer.unobserve(entry.target)
    //         }
    //     });
    // };
    // let cardTarget = '.card';
    // document.querySelectorAll(cardTarget).forEach((i) => {
    //     if (i) {
    //         cardObserver.observe(i);
    //     }
    // });

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

  const openMenu = () => {
    const button = document.getElementById("menu-btn");
    const y = document.getElementById("dropdown");
    button.classList.toggle("change");
    if (y.classList.contains("hidden")) {
      y.classList.remove("hidden");
      y.classList.add("show");
    } else {
      y.classList.remove("show");
      y.classList.add("hidden");
    }
  }

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
                    <button onClick={openMenu} className="nav-mob-links__menu-btn" id="menu-btn" >
                      <svg viewBox="0 0 10 8"><path d="M1 1h8M1 4h 8M1 7h8"/></svg>
                    </button>
                    <div className="nav-mob-links__dropdown hidden" id="dropdown" >
                      <a href="#about"> About </a> 
                      <a href="#work"> Work </a> 
                      <a href="#contact"> Contact </a> 
                    </div>
                    
                  </div>       
                               
             </div>
        </nav>
  );
};

export default Nav;