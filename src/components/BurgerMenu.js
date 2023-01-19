/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export default function BurgerMenu({ data }) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // HIDE DROPDOWN ON SCROLL
  const controlShow = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide
        setShow(false); 
      } else { setShow(true) } // if scroll up show 
      setLastScrollY(window.scrollY); // remember current page location to use in the next move
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlShow);
      return () => { // cleanup function
        window.removeEventListener('scroll', controlShow);
      };
    }
  }, [lastScrollY]);


  // OPEN BURGER MENU
  const openMenu = () => {
    const button = document.getElementById("menu-btn");
    const y = document.getElementById("dropdown");
    const yBg = document.getElementById("backdrop");

    button.classList.toggle("change");
    if (y.classList.contains("hidden")) {
      y.classList.remove("hidden");
      y.classList.add("show");
      yBg.classList.remove("hidden");
      yBg.classList.add("show");
    } else {
      y.classList.remove("show");
      y.classList.add("hidden");
      yBg.classList.remove("show");
      yBg.classList.add("hidden");
    }
  }

  return (
    <>
      <button onClick={openMenu} className="burger-menu__btn" id="menu-btn" aria-label="menu">
        <svg viewBox="0 0 10 8"><path d="M1 1h8M1 4h 8M1 7h8"/></svg>
      </button>
      <div className={`burger-menu__dropdown hidden ${show && ""}`} id="dropdown" >

        {data?.links
        ?.filter((link) => link?.type?.includes("section") || link?.type?.includes("navlink"))
        ?.map((link) => (
          <a key={link?.id} href={link?.url} className="navlink" aria-label={link?.text}>
            {link?.text}
          </a>
        ))}
      </div>
    </>
  );
};
