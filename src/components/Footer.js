import { AiOutlineGithub, AiFillCodepenCircle, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
    return (
        <>
            <section className="footer-cntr">
                <div className="footer-top">
                    <div className="footer-logo"> 
                        <a href="#home">Sofie Trolle</a> 
                    </div>
                    <div className="footer-links">
                        <a href="##"> <span><AiOutlineGithub/></span> </a> 
                        <a href="##"> <span><AiFillCodepenCircle/></span> </a> 
                        <a href="##"> <span><AiFillLinkedin/></span> </a>     
                    </div>
                </div>
            </section>
        
        </>
    )
};