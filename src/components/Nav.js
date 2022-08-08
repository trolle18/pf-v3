import '../scss/Nav.scss'; 


export default function Nav() {
    
    return (
        <>
            <div className="nav-cntr">
                <div className="nav-inner-cntr">

                    <div className="nav-logo"> 
                        <a href="/">Sofie Trolle</a> 
                    </div>
                    <div className="nav-links">
                        <a href="#about"> About </a> 
                        <a href="#work"> Work </a> 
                        <a href="#contact"> Contact </a>                         
                    </div>
                    
                </div>
            </div>
        </>
    )
};


