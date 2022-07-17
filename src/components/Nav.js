import { IoMenuOutline } from "react-icons/io5";

export default function Nav() {
    return (
        <>
            <div className="nav-cntr">
                <div className="nav-logo"> 
                    <span>Sofie Trolle</span> 
                </div>
                <div className="nav-links">
                    <a href="#about">About</a> 
                    <a href="#work">Work</a> 
                    <a href="#contact">Contact</a>     
                </div>
                <div className="dropdown">
                    <button>
                        <IoMenuOutline/>
                    </button>

                </div>
            </div>
        
        </>
    )
};