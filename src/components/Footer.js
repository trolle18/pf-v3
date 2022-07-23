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
            <section className="footer-cntr">
                <div className="footer-top">
                    <div className="footer-l-col">
                        <div className="footer-logo"> 
                            <a href="#home">Sofie Trolle</a> 
                        </div>
                        <span>sofietrolle@hotmail.com</span>
                    </div>
                    <div className="footer-links">
                        <a href="##"> <AiOutlineGithub/> </a>
                        <a href="##"> <AiOutlineCodepen/> </a>
                        <a href="##"> <TiSocialLinkedin/> </a>
                    </div>
                </div>
                <div className="footer-btm">
                    <span>Build with <FiHeart/> and <FiCoffee/> by Sofie Trolle </span>
                    <span className="copy"><AiOutlineCopyrightCircle/> {date}</span>
                </div>
            </section>
        
        </>
    )
};