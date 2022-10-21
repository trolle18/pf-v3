import React, {useState, useEffect} from 'react';
import { AiOutlineGithub, AiOutlineCodepen } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FiCoffee, FiHeart } from "react-icons/fi"


export default function Footer() {
    const [date , setDate] = useState();
    const getYear = () =>  setDate(new Date().getFullYear())

    useEffect(() => {
        getYear();
    }, [])


    return (
        <>
        <footer className="footer-cntr">
            <div className="footer-top">
                <div className="footer-l-col">
                    <div className="footer-logo"> 
                        <a href="#home" className='logo-link'>Sofie Trolle</a> 
                    </div>
                    <a className='mailto' href="mailto:sofietrolle@hotmail.com">sofietrolle@hotmail.com</a>
                </div>
                <div className="footer-links">
                    <a href="https://github.com/trolle18/" target="_blank" rel="noreferrer"> <AiOutlineGithub/> </a>
                    <a href="https://codepen.io/sofietrolle/" target="_blank" rel="noreferrer"> <AiOutlineCodepen/> </a>
                    <a href="https://www.linkedin.com/in/sofie-trolle/" target="_blank" rel="noreferrer"> <TiSocialLinkedin/> </a>
                </div>
            </div>
            <div className="footer-btm">
                <span>Build with <FiHeart/> and <FiCoffee/> by Sofie Trolle </span>
                <span className="copy"><AiOutlineCopyrightCircle/> {date}</span>
            </div>
        </footer>
        
        </>
    )
};