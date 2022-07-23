import { AiOutlineGithub, AiOutlineCodepen } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
// import { AiFillLinkedin } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import { RiLinkedinFill } from "react-icons/ri";
// import { FiGithub } from "react-icons/ri";

import { FiCoffee, FiHeart } from "react-icons/fi"


export default function Footer() {
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
                </div>
            </section>
        
        </>
    )
};